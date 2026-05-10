import type { IOTM } from "../../schemas/data";
import { parseIndex, type IndexEntry } from "./parse/mr-store";
import { parseItemPageWithReview } from "./parse/item-page";
import {
  matchAftercoreTier,
  matchSpeedTier,
  parseAftercoreSheet,
  parseSpeedSheet,
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
  unmatchedTierRows: { source: "speed" | "aftercore"; name: string; year?: number }[];
};

export async function scrape(opts: ScrapeOptions): Promise<ScrapeResult> {
  const { wiki, tiers, mafia, knownIotms } = opts;

  const indexWikitext = await wiki.fetchWikitext("Mr._Store");
  const index = parseIndex(indexWikitext);

  const cutoff = anchorKey(knownIotms);
  const knownNames = new Set(knownIotms.map((i) => i.packaged_name.toLowerCase()));

  const newEntries = index.filter((e) => entryKey(e) > cutoff && !knownNames.has(e.packaged_name.toLowerCase()));

  // Fetch + parse each new entry. Page slugs in the wiki are MediaWiki-style:
  // first letter capitalized, spaces → underscores, then URL-encode the rest.
  const newIotms: IOTM[] = [];
  const reviewNotes: Record<string, readonly (keyof IOTM)[]> = {};
  for (const entry of newEntries) {
    const slug = wikiSlug(entry.packaged_name);
    const { iotm, needsReview } = await parseItemPageWithReview(wiki, mafia, {
      packaged_name: entry.packaged_name,
      packaged_slug: slug,
      year: entry.year,
      ...(entry.month !== undefined ? { month: entry.month } : {}),
    });
    newIotms.push(iotm);
    if (needsReview.length > 0) reviewNotes[iotm.packaged_name] = needsReview;
  }

  // Tier pass.
  const [speedCsv, aftercoreCsv] = await Promise.all([tiers.fetchSpeed(), tiers.fetchAftercore()]);
  const speedRows = parseSpeedSheet(speedCsv);
  const aftercoreRows = parseAftercoreSheet(aftercoreCsv);
  for (const iotm of newIotms) {
    const s = matchSpeedTier(iotm, speedRows);
    if (s) iotm.speed_tier = s.tier;
    const a = matchAftercoreTier(iotm, aftercoreRows);
    if (a) iotm.aftercore_tier = a.tier;
  }

  // Surface tier rows that don't correspond to any known IOTM, for human
  // review (likely typos in the sheet, or new IOTMs we haven't picked up).
  const allKnown = [...knownIotms, ...newIotms];
  const unmatchedTierRows: ScrapeResult["unmatchedTierRows"] = [];
  for (const row of speedRows) {
    if (!findIotmByName(allKnown, row.name)) {
      unmatchedTierRows.push({
        source: "speed",
        name: row.name,
        ...(row.year !== undefined ? { year: row.year } : {}),
      });
    }
  }
  for (const row of aftercoreRows) {
    if (!findIotmByName(allKnown, row.name)) {
      unmatchedTierRows.push({
        source: "aftercore",
        name: row.name,
        ...(row.year !== undefined ? { year: row.year } : {}),
      });
    }
  }

  return { newIotms, reviewNotes, unmatchedTierRows };
}

/** Sort key for an IndexEntry. IOTYs (no month) sort to month 13. */
function entryKey(e: IndexEntry): number {
  return e.year * 100 + (e.month ?? 0);
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

function findIotmByName(iotms: readonly IOTM[], name: string): IOTM | undefined {
  const norm = name.toLowerCase();
  for (const i of iotms) {
    if (i.packaged_name.toLowerCase() === norm) return i;
    if (matchesAny(i.opened_names, norm)) return i;
    if (matchesAny(i.familiar_names, norm)) return i;
    if (matchesAny(i.skill_names, norm)) return i;
  }
  return undefined;
}

function matchesAny(v: string | readonly string[] | undefined, normalizedName: string): boolean {
  if (v === undefined) return false;
  if (typeof v === "string") return v.toLowerCase() === normalizedName;
  return v.some((s) => s.toLowerCase() === normalizedName);
}
