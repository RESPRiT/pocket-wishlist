import type { IOTM } from "../../schemas/data";
import { parseIndex, type IndexEntry } from "./parse/mr-store";
import { parseItemPageWithReview } from "./parse/item-page";
import {
  matchAftercoreTier,
  matchSpeedTier,
  parseAftercoreSheet,
  parseSpeedSheet,
  rowMatchesAnyIotm,
} from "./parse/tier-match";

/**
 * Abstract source for wiki page content. Tests use a fixture-backed
 * implementation; runtime uses one that hits the live MediaWiki API.
 *
 * `slug` is the wiki page name (URL component, before encoding) — e.g.
 * "Pasta_wand_loot_box". Implementations must accept it as-is.
 */
export interface WikiClient {
  fetchWikitext(slug: string): Promise<string>;
  fetchHtml(slug: string): Promise<string>;
}

export interface TierListClient {
  fetchSpeed(): Promise<string>; // raw CSV
  fetchAftercore(): Promise<string>; // raw CSV
}

/**
 * KoLmafia data files are the authoritative source for in-game IDs, image
 * filenames, and equipment slots. They're more structured than wiki HTML
 * and don't churn as much.
 */
export interface MafiaDataClient {
  fetchItems(): Promise<string>; // raw items.txt
  fetchFamiliars(): Promise<string>; // raw familiars.txt
  fetchSkills(): Promise<string>; // raw classskills.txt
}

export type ScrapeOptions = {
  wiki: WikiClient;
  tiers: TierListClient;
  mafia: MafiaDataClient;
  /**
   * The current contents of iotms.ts. Used as the anchor for "what's new":
   * the scraper returns only IOTMs released strictly after the latest
   * (year, month) tuple already present here.
   */
  knownIotms: readonly IOTM[];
  /**
   * Lower bound (a `year * 100 + month` key) for the tier-backfill pass. Any
   * existing `knownIotms` entry released on or after this key is re-matched
   * against the current tier sheets, and a `tierUpdate` is emitted whenever
   * the sheet's tier differs from what's recorded. This is how IOTMs that
   * shipped before the tier lists ranked them get their tiers filled in on a
   * later run. Omit to skip backfill entirely (the default for tests that
   * only exercise the append path).
   */
  backfillSince?: number;
};

/**
 * A change to a `speed_tier` / `aftercore_tier` on an IOTM that already
 * exists in iotms.ts. The tier sheets are treated as authoritative for these
 * two fields, so `from` may be a previously-recorded value the sheet now
 * disagrees with (the PR diff is the human-review gate). Only tier fields are
 * ever updated this way — tradeable / type / img stay untouched.
 */
export type TierUpdate = {
  packaged_id: number;
  packaged_name: string;
  field: "speed_tier" | "aftercore_tier";
  /** Current value in iotms.ts, or undefined if the field was absent. */
  from?: number;
  /** Value from the tier sheet. */
  to: number;
};

export type ScrapeResult = {
  /** Newly discovered IOTMs, in chronological order. */
  newIotms: IOTM[];
  /**
   * Per-IOTM list of fields whose values came from a heuristic fallback
   * rather than a confident detection. Codegen surfaces these as TODO
   * comments so the human reviewer knows what to double-check in the PR.
   * Keyed by packaged_name.
   */
  reviewNotes: Record<string, readonly (keyof IOTM)[]>;
  /** Tier-list rows we couldn't match to any wiki name (for human review). */
  unmatchedTierRows: {
    source: "speed" | "aftercore";
    name: string;
    year?: number;
  }[];
  /**
   * Tier changes to existing iotms.ts entries within the backfill window.
   * Empty when `backfillSince` was not supplied.
   */
  tierUpdates: TierUpdate[];
  /**
   * New index entries whose wiki page couldn't be parsed this run (e.g. a
   * just-released IOTM whose page is still a stub). These are skipped rather
   * than failing the whole run — the next run retries them once the page
   * fills in. Reported so a stuck entry doesn't go silently missing.
   */
  skippedEntries: { packaged_name: string; error: string }[];
};

export async function scrape(opts: ScrapeOptions): Promise<ScrapeResult> {
  const { wiki, tiers, mafia, knownIotms, backfillSince } = opts;

  const indexWikitext = await wiki.fetchWikitext("Mr._Store");
  const index = parseIndex(indexWikitext);

  const cutoff = anchorKey(knownIotms);
  const knownNames = new Set(
    knownIotms.map((i) => i.packaged_name.toLowerCase()),
  );

  const newEntries = index.filter(
    (e) =>
      entryKey(e) > cutoff && !knownNames.has(e.packaged_name.toLowerCase()),
  );

  // Fetch + parse each new entry. Page slugs in the wiki are MediaWiki-style:
  // first letter capitalized, spaces → underscores, then URL-encode the rest.
  const newIotms: IOTM[] = [];
  const reviewNotes: Record<string, readonly (keyof IOTM)[]> = {};
  const skippedEntries: ScrapeResult["skippedEntries"] = [];
  for (const entry of newEntries) {
    const slug = wikiSlug(entry.packaged_name);
    // Isolate per-entry parse failures: a newly-listed IOTM whose wiki page
    // is still a stub shouldn't sink the whole run (or, worse, get committed
    // as a malformed entry). Skip it and let the next run retry once the page
    // fills in.
    // — claude 8043a506, 2026-05-30
    try {
      const { iotm, needsReview } = await parseItemPageWithReview(wiki, mafia, {
        packaged_name: entry.packaged_name,
        packaged_slug: slug,
        year: entry.year,
        ...(entry.month !== undefined ? { month: entry.month } : {}),
      });
      newIotms.push(iotm);
      if (needsReview.length > 0) reviewNotes[iotm.packaged_name] = needsReview;
    } catch (e) {
      skippedEntries.push({
        packaged_name: entry.packaged_name,
        error: e instanceof Error ? e.message : String(e),
      });
    }
  }

  // Tier pass.
  const [speedCsv, aftercoreCsv] = await Promise.all([
    tiers.fetchSpeed(),
    tiers.fetchAftercore(),
  ]);
  const speedRows = parseSpeedSheet(speedCsv);
  const aftercoreRows = parseAftercoreSheet(aftercoreCsv);
  for (const iotm of newIotms) {
    const s = matchSpeedTier(iotm, speedRows);
    if (s) iotm.speed_tier = s.tier;
    const a = matchAftercoreTier(iotm, aftercoreRows);
    if (a) iotm.aftercore_tier = a.tier;
  }

  // Backfill pass: re-match the tier sheets against existing entries inside
  // the window and emit an update wherever the sheet's tier differs from
  // what's recorded (including the common case where it was never set). The
  // sheets are authoritative for tier fields, so we overwrite — the PR is the
  // human-review gate.
  // — claude 8043a506, 2026-05-30
  const tierUpdates: TierUpdate[] = [];
  if (backfillSince !== undefined) {
    for (const iotm of knownIotms) {
      if (iotmKey(iotm) < backfillSince) continue;
      const s = matchSpeedTier(iotm, speedRows);
      if (s && s.tier !== iotm.speed_tier) {
        tierUpdates.push({
          packaged_id: iotm.packaged_id,
          packaged_name: iotm.packaged_name,
          field: "speed_tier",
          ...(iotm.speed_tier !== undefined ? { from: iotm.speed_tier } : {}),
          to: s.tier,
        });
      }
      const a = matchAftercoreTier(iotm, aftercoreRows);
      if (a && a.tier !== iotm.aftercore_tier) {
        tierUpdates.push({
          packaged_id: iotm.packaged_id,
          packaged_name: iotm.packaged_name,
          field: "aftercore_tier",
          ...(iotm.aftercore_tier !== undefined
            ? { from: iotm.aftercore_tier }
            : {}),
          to: a.tier,
        });
      }
    }
  }

  // Surface tier rows that don't correspond to any known IOTM, for human
  // review (likely typos in the sheet, or new IOTMs we haven't picked up).
  // Uses the same normalize + fuzzy matcher as tier assignment, so a row that
  // was successfully placed never also shows up here as "unmatched".
  // — claude 8043a506, 2026-05-30
  const allKnown = [...knownIotms, ...newIotms];
  const unmatchedTierRows: ScrapeResult["unmatchedTierRows"] = [];
  for (const [source, rows] of [
    ["speed", speedRows],
    ["aftercore", aftercoreRows],
  ] as const) {
    for (const row of rows) {
      if (!rowMatchesAnyIotm(row, allKnown)) {
        unmatchedTierRows.push({
          source,
          name: row.name,
          ...(row.year !== undefined ? { year: row.year } : {}),
        });
      }
    }
  }

  return {
    newIotms,
    reviewNotes,
    unmatchedTierRows,
    tierUpdates,
    skippedEntries,
  };
}

/** Sort key for an IndexEntry. IOTYs (no month) sort to month 13. */
function entryKey(e: IndexEntry): number {
  return e.year * 100 + (e.month ?? 0);
}

/** Same `year * 100 + month` key for an IOTM (matches {@link entryKey}). */
function iotmKey(i: IOTM): number {
  return i.year * 100 + (i.month ?? 0);
}

/** Highest (year, month) already present in iotms.ts; everything past this is "new". */
function anchorKey(knownIotms: readonly IOTM[]): number {
  let max = 0;
  for (const i of knownIotms) {
    const k = i.year * 100 + (i.month ?? 0);
    if (k > max) max = k;
  }
  return max;
}

/** MediaWiki page slug for a name. Capitalize first letter, spaces → underscores. */
function wikiSlug(name: string): string {
  const trimmed = name.trim();
  const head = trimmed[0]?.toUpperCase() ?? "";
  return (head + trimmed.slice(1)).replace(/ /g, "_");
}
