import type { IOTM } from "../../../schemas/data";
import { IGNORED_TIER_ROWS, TIER_ROW_ALIASES } from "./tier-overrides";

export type TierEntry = {
  /** Raw name as it appears in the sheet (may be messy/non-canonical). */
  name: string;
  year?: number;
  tier: number;
};

/**
 * How a row was tied to its IOTM, strongest first. Lower-ranked kinds never
 * displace a stronger one for the same IOTM.
 */
export type TierMatchKind = "alias" | "exact" | "fuzzy" | "tokens";

export type TierMatch = {
  tier: number;
  matchedRow: TierEntry;
  kind: TierMatchKind;
};

export type TierAssignment = {
  /** The row each IOTM took its tier from. IOTMs with no row are absent. */
  byIotm: Map<IOTM, TierMatch>;
  /** Rows that tied to no IOTM, in sheet order. */
  unmatched: TierEntry[];
};

export function parseSpeedSheet(csv: string): TierEntry[] {
  return parseSheet(csv, /^Mr\.?\s*Store Item\b/i, 2);
}

export function parseAftercoreSheet(csv: string): TierEntry[] {
  // The aftercore sheet's header row looks slightly broken (cell A1 reads
  // "frock"), but the column order is the same as speed: Name, Year, Tier.
  // We anchor on either the canonical header or the known-bad first row.
  return parseSheet(csv, /^(Mr\.?\s*Store Item|frock)\b/i, 2);
}

/**
 * Walks CSV rows after the header and yields {name, year, tier} from columns
 * 0, 1, and `tierColumnIdx`. Tolerant of empty rows and malformed numbers.
 */
function parseSheet(
  csv: string,
  headerPattern: RegExp,
  tierColumnIdx: number,
): TierEntry[] {
  const rows = splitCsv(csv);
  let headerSeen = false;
  const out: TierEntry[] = [];
  for (const row of rows) {
    const first = row[0]?.trim() ?? "";
    if (!headerSeen) {
      if (headerPattern.test(first)) headerSeen = true;
      continue;
    }
    if (!first) continue;
    const tierRaw = row[tierColumnIdx];
    if (tierRaw === undefined) continue;
    const tier = Number(tierRaw);
    if (!Number.isFinite(tier)) continue;
    const yearRaw = row[1];
    const year = yearRaw ? Number(yearRaw) : undefined;
    out.push({
      name: first,
      ...(year !== undefined && Number.isFinite(year) ? { year } : {}),
      tier,
    });
  }
  return out;
}

/** Minimal RFC-4180-ish CSV splitter. Handles quoted fields with commas/newlines. */
function splitCsv(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < csv.length; i++) {
    const c = csv[i]!;
    if (inQuotes) {
      if (c === '"' && csv[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        field += c;
      }
      continue;
    }
    if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (c === "\r") {
      // ignore
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

/**
 * Ties the rows of one tier sheet to IOTMs. Tier-list authors are
 * inconsistent — some rows use the packaged name, others the opened/familiar
 * form, others a shorthand — so matching runs progressively looser passes:
 *
 * 1. alias — a hand-curated override in tier-overrides.ts.
 * 2. exact — case/whitespace/entity-normalized equality with any candidate
 *    name (packaged, opened, familiar, skill).
 * 3. fuzzy — Levenshtein ≤ 2 with year agreement (typos).
 * 4. tokens — word-set containment with year agreement (shorthand like
 *    "TakerSpace" or "coat of paint"); see {@link tokenScore}.
 *
 * Passes 1–3 are IOTM-centric, and one row may serve several IOTMs
 * ("yellow puck/with a bow on it" ranks both pucks). The token pass is the
 * loosest, so it only considers rows no stricter pass explains, pairs each
 * with at most one same-year IOTM that has no row yet, and refuses ties
 * rather than guess between two plausible IOTMs. Tier assignment and the
 * "unmatched rows" report both come out of this one function so they can't
 * disagree. Rows on the ignore list in tier-overrides.ts take part in
 * neither.
 * — claude 3dc556f7, 2026-10-18
 */
export function assignTierRows(
  rows: readonly TierEntry[],
  iotms: readonly IOTM[],
  overrides: TierOverrides = {
    aliases: TIER_ROW_ALIASES,
    ignored: IGNORED_TIER_ROWS,
  },
): TierAssignment {
  const named = iotms.map((iotm) => ({
    iotm,
    norms: candidateNames(iotm).map(normalize),
  }));
  const prepared = rows
    .map((row) => ({ row, norms: rowNameVariants(row.name).map(normalize) }))
    .filter(
      (p) =>
        !overrides.ignored.some(
          (i) => i.year === p.row.year && normalize(i.row) === p.norms[0],
        ),
    );

  const byIotm = new Map<IOTM, TierMatch>();
  for (const n of named) {
    const m = strictMatch(n, prepared, overrides.aliases);
    if (m) byIotm.set(n.iotm, m);
  }

  const unmatched: TierEntry[] = [];
  for (const p of prepared) {
    if (named.some((n) => strictlyExplains(n, p, overrides.aliases))) continue;
    const hit =
      p.row.year === undefined
        ? null
        : bestTokenMatch(
            p,
            named.filter(
              (n) => n.iotm.year === p.row.year && !byIotm.has(n.iotm),
            ),
          );
    if (hit)
      byIotm.set(hit, { tier: p.row.tier, matchedRow: p.row, kind: "tokens" });
    else unmatched.push(p.row);
  }

  return { byIotm, unmatched };
}

/** The tier-overrides.ts lists; a parameter so tests can supply their own. */
export type TierOverrides = {
  aliases: typeof TIER_ROW_ALIASES;
  ignored: typeof IGNORED_TIER_ROWS;
};

type NamedIotm = { iotm: IOTM; norms: string[] };
type PreparedRow = { row: TierEntry; norms: string[] };

function isAliasFor(
  n: NamedIotm,
  p: PreparedRow,
  aliases: TierOverrides["aliases"],
): boolean {
  const target = normalize(n.iotm.packaged_name);
  return aliases.some(
    (a) =>
      a.year === p.row.year &&
      normalize(a.row) === p.norms[0] &&
      normalize(a.packaged_name) === target,
  );
}

function isExact(n: NamedIotm, p: PreparedRow): boolean {
  return n.norms.some((c) => p.norms.includes(c));
}

/** Levenshtein distance ≤ 2 with year agreement, or undefined if none. */
function fuzzyDistance(n: NamedIotm, p: PreparedRow): number | undefined {
  if (p.row.year !== undefined && p.row.year !== n.iotm.year) return undefined;
  let best: number | undefined;
  for (const c of n.norms) {
    for (const r of p.norms) {
      const d = boundedLevenshtein(c, r, 2);
      if (d <= 2 && (best === undefined || d < best)) best = d;
    }
  }
  return best;
}

/** Best row for one IOTM via alias > exact > fuzzy (first row wins ties). */
function strictMatch(
  n: NamedIotm,
  prepared: readonly PreparedRow[],
  aliases: TierOverrides["aliases"],
): TierMatch | null {
  const hit = (p: PreparedRow, kind: TierMatchKind): TierMatch => ({
    tier: p.row.tier,
    matchedRow: p.row,
    kind,
  });
  const alias = prepared.find((p) => isAliasFor(n, p, aliases));
  if (alias) return hit(alias, "alias");
  // Earlier candidate names win (a packaged-name row beats an opened-name one).
  for (const c of n.norms) {
    const exact = prepared.find((p) => p.norms.includes(c));
    if (exact) return hit(exact, "exact");
  }
  let best: { p: PreparedRow; d: number } | null = null;
  for (const p of prepared) {
    const d = fuzzyDistance(n, p);
    if (d !== undefined && (!best || d < best.d)) best = { p, d };
  }
  return best ? hit(best.p, "fuzzy") : null;
}

function strictlyExplains(
  n: NamedIotm,
  p: PreparedRow,
  aliases: TierOverrides["aliases"],
): boolean {
  return (
    isAliasFor(n, p, aliases) ||
    isExact(n, p) ||
    fuzzyDistance(n, p) !== undefined
  );
}

/** Below this, a token overlap is treated as coincidence. */
const TOKEN_SCORE_MIN = 0.75;

function bestTokenMatch(
  p: PreparedRow,
  pool: readonly NamedIotm[],
): IOTM | null {
  const rowTokens = p.norms.map(tokens);
  let best: { iotm: IOTM; score: number } | null = null;
  let tied = false;
  for (const n of pool) {
    let score = 0;
    for (const c of n.norms) {
      const ct = tokens(c);
      for (const rt of rowTokens) score = Math.max(score, tokenScore(rt, ct));
    }
    if (score < TOKEN_SCORE_MIN) continue;
    if (!best || score > best.score) {
      best = { iotm: n.iotm, score };
      tied = false;
    } else if (score === best.score) {
      tied = true;
    }
  }
  return best && !tied ? best.iotm : null;
}

/**
 * Overlap of two word sets relative to the smaller one: 1 when either name's
 * words are a subset of the other's ("TakerSpace" ⊂ "TakerSpace letter of
 * Marque"; "designer sweatpants" ⊂ "pair of high-end designer sweatpants"),
 * lower as they diverge ("April Shower Thoughts Catalog" vs "… Calendar" is
 * 3/4). Overlaps sharing under 5 letters score 0, so a lone short word like
 * "set" can't carry a match.
 * — claude 3dc556f7, 2026-10-18
 */
function tokenScore(a: ReadonlySet<string>, b: ReadonlySet<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  let sharedChars = 0;
  for (const t of a) {
    if (b.has(t)) {
      shared++;
      sharedChars += t.length;
    }
  }
  if (sharedChars < 5) return 0;
  return shared / Math.min(a.size, b.size);
}

/**
 * Words that carry no identity: connectives, plus the packaging adjectives
 * that sheets add or drop freely ("packaged train set" vs "model train set").
 */
const NOISE_WORDS = new Set([
  "a",
  "an",
  "and",
  "of",
  "the",
  "o'",
  "packaged",
  "boxed",
  "wrapped",
  "shrink-wrapped",
  "sealed",
  "crated",
  "unopened",
]);

function tokens(normalized: string): Set<string> {
  return new Set(
    normalized.split(" ").filter((t) => t.length > 0 && !NOISE_WORDS.has(t)),
  );
}

function candidateNames(iotm: IOTM): string[] {
  const out: string[] = [iotm.packaged_name];
  for (const v of [iotm.opened_names, iotm.familiar_names, iotm.skill_names]) {
    if (typeof v === "string") out.push(v);
    else if (Array.isArray(v)) out.push(...v);
  }
  return out;
}

function normalize(s: string): string {
  return (
    decodeEntities(s)
      .toLowerCase()
      .replace(/[™®©]/g, "")
      // Sheets write the ampersand literally ("Black & White Apron…") where
      // iotms.ts spells it out ("Black and White…"); fold them together.
      // — claude 8043a506, 2026-05-30
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9 '-]/g, "")
      .replace(/[\s_]+/g, " ")
      .trim()
  );
}

/**
 * Tier-sheet rows sometimes pack an alias after a slash, e.g.
 * "X-32-F snowman crate/Snojo" or "yellow puck/with a bow on it". Expand a
 * row name into the whole string plus each slash-separated part, so either
 * form can match. Candidate IOTM names from iotms.ts are clean, so this only
 * applies to the row side of a comparison.
 */
function rowNameVariants(name: string): string[] {
  if (!name.includes("/")) return [name];
  return [
    name,
    ...name
      .split("/")
      .map((p) => p.trim())
      .filter(Boolean),
  ];
}

/**
 * Tier-list rows sometimes contain HTML entities (`&trade;`, `&eacute;`)
 * because they were copy-pasted from the wiki. Decode the common ones so
 * names like "Pok&eacute;fam Guide" match iotms.ts's "Pokéfam Guide".
 */
function decodeEntities(s: string): string {
  return s
    .replace(/&trade;/g, "™")
    .replace(/&reg;/g, "®")
    .replace(/&copy;/g, "©")
    .replace(/&amp;/g, "&")
    .replace(/&eacute;/g, "é")
    .replace(/&aacute;/g, "á")
    .replace(/&iacute;/g, "í")
    .replace(/&oacute;/g, "ó")
    .replace(/&uacute;/g, "ú")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) =>
      String.fromCharCode(parseInt(n, 16)),
    );
}

/**
 * Levenshtein distance, but bails out early when distance exceeds `max`.
 * For our short item names (~30 chars) the full O(n*m) algorithm would be
 * fast enough, but the early-exit is essentially free and keeps the inner
 * loop tight.
 */
function boundedLevenshtein(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  if (a === b) return 0;
  let prev = new Array<number>(b.length + 1);
  let curr = new Array<number>(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    let minRow = curr[0]!;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j]! + 1, curr[j - 1]! + 1, prev[j - 1]! + cost);
      if (curr[j]! < minRow) minRow = curr[j]!;
    }
    if (minRow > max) return max + 1;
    [prev, curr] = [curr, prev];
  }
  return prev[b.length]!;
}
