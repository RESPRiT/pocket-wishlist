import type { IOTM } from "../../schemas/data";
import { parseConMerch } from "./parse/con-merch";
import { parseIndex, type IndexEntry } from "./parse/mr-store";
import { loadMafia, parseItemPageWithReview } from "./parse/item-page";
import {
  assignTierRows,
  parseAftercoreSheet,
  parseSpeedSheet,
  type TierMatch,
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
  /**
   * Year recorded on Con merch items discovered this run. The merch page has
   * no release dates, so a daily run stamps the year it first sees an item.
   * Defaults to the current UTC year.
   */
  conYear?: number;
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
  /** The sheet row's name, when it matched only loosely (fuzzy / tokens). */
  looseRow?: string;
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
    /**
     * Same-year IOTMs that this sheet gives no row to — the likely referent
     * of a nickname row. Omitted when there are none (or too many to help).
     */
    unranked?: string[];
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
  const conYear = opts.conYear ?? new Date().getUTCFullYear();

  const [indexWikitext, conWikitext] = await Promise.all([
    wiki.fetchWikitext("Mr._Store"),
    wiki.fetchWikitext(CON_MERCH_SLUG),
  ]);
  const index = parseIndex(indexWikitext);

  const cutoff = anchorKey(knownIotms);
  const knownNames = new Set(
    knownIotms.map((i) => i.packaged_name.toLowerCase()),
  );

  const newMonthly = index.filter(
    (e) =>
      entryKey(e) > cutoff && !knownNames.has(e.packaged_name.toLowerCase()),
  );
  // Con items carry no date to compare against the anchor, so any Mr.
  // Accessory item on the merch table that iotms.ts doesn't know is new.
  // — claude 3dc556f7, 2026-10-18
  const monthlyNames = new Set(
    newMonthly.map((e) => e.packaged_name.toLowerCase()),
  );
  const newCon = [...new Set(parseConMerch(conWikitext))]
    .filter(
      (name) =>
        !knownNames.has(name.toLowerCase()) &&
        !monthlyNames.has(name.toLowerCase()),
    )
    .map((packaged_name) => ({ packaged_name, year: conYear, is_con: true }));
  const newEntries: (IndexEntry & { is_con?: boolean })[] = [
    ...newMonthly,
    ...newCon,
  ];

  // Load the KoLmafia data outside the per-entry isolation below: if it
  // can't be fetched, every entry would fail identically and be reported as
  // "skipped", turning a broken source into a silently-missing IOTM.
  // — claude 3dc556f7, 2026-10-18
  if (newEntries.length > 0) await loadMafia(mafia);

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
        ...(entry.is_con ? { is_con: true } : {}),
      });
      newIotms.push(iotm);
      // A Con item's year is only the year this run first saw it.
      const notes = entry.is_con
        ? [...needsReview, "year" as const]
        : needsReview;
      if (notes.length > 0) reviewNotes[iotm.packaged_name] = notes;
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
  const allKnown = [...knownIotms, ...newIotms];
  const speed = assignTierRows(parseSpeedSheet(speedCsv), allKnown);
  const aftercore = assignTierRows(parseAftercoreSheet(aftercoreCsv), allKnown);
  // A tier taken from a loosely-matched row gets a review TODO like any
  // other heuristic field: the row may belong to a different IOTM.
  // — claude 3dc556f7, 2026-10-18
  for (const iotm of newIotms) {
    const loose: (keyof IOTM)[] = [];
    const s = speed.byIotm.get(iotm);
    if (s) {
      iotm.speed_tier = s.tier;
      if (isLoose(s)) loose.push("speed_tier");
    }
    const a = aftercore.byIotm.get(iotm);
    if (a) {
      iotm.aftercore_tier = a.tier;
      if (isLoose(a)) loose.push("aftercore_tier");
    }
    if (loose.length > 0)
      reviewNotes[iotm.packaged_name] = [
        ...(reviewNotes[iotm.packaged_name] ?? []),
        ...loose,
      ];
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
      const s = speed.byIotm.get(iotm);
      if (s && s.tier !== iotm.speed_tier) {
        tierUpdates.push({
          packaged_id: iotm.packaged_id,
          packaged_name: iotm.packaged_name,
          field: "speed_tier",
          ...(iotm.speed_tier !== undefined ? { from: iotm.speed_tier } : {}),
          to: s.tier,
          ...looseRow(s),
        });
      }
      const a = aftercore.byIotm.get(iotm);
      if (a && a.tier !== iotm.aftercore_tier) {
        tierUpdates.push({
          packaged_id: iotm.packaged_id,
          packaged_name: iotm.packaged_name,
          field: "aftercore_tier",
          ...(iotm.aftercore_tier !== undefined
            ? { from: iotm.aftercore_tier }
            : {}),
          to: a.tier,
          ...looseRow(a),
        });
      }
    }
  }

  // Surface tier rows that don't correspond to any known IOTM, for human
  // review (likely typos in the sheet, or new IOTMs we haven't picked up).
  // Each carries the same-year IOTMs the sheet left unranked: when a row is
  // a nickname, its referent is usually the only one of those, which is
  // what a reviewer needs to write a tier-overrides.ts alias.
  // — claude 3dc556f7, 2026-10-18
  const unmatchedTierRows: ScrapeResult["unmatchedTierRows"] = [];
  for (const [source, assignment] of [
    ["speed", speed],
    ["aftercore", aftercore],
  ] as const) {
    for (const row of assignment.unmatched) {
      const unranked =
        row.year === undefined
          ? []
          : allKnown
              .filter((i) => i.year === row.year && !assignment.byIotm.has(i))
              .map((i) => i.packaged_name);
      unmatchedTierRows.push({
        source,
        name: row.name,
        ...(row.year !== undefined ? { year: row.year } : {}),
        ...(unranked.length > 0 && unranked.length <= MAX_SUGGESTIONS
          ? { unranked }
          : {}),
      });
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

/** Wiki page for the in-game store that sells KoL Con exclusives. */
const CON_MERCH_SLUG = "KoL_Con_13_Merch_Table";

/** Past this many, "same-year unranked IOTMs" stops narrowing anything down. */
const MAX_SUGGESTIONS = 3;

function isLoose(m: TierMatch): boolean {
  return m.kind === "fuzzy" || m.kind === "tokens";
}

function looseRow(m: TierMatch): { looseRow?: string } {
  return isLoose(m) ? { looseRow: m.matchedRow.name } : {};
}

/** Sort key for an IndexEntry. Month-less entries (IOTYs, Con items) sort to month 0. */
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
