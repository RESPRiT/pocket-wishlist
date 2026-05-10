import type { IOTM } from "../../../schemas/data";

export type TierEntry = {
  /** Raw name as it appears in the sheet (may be messy/non-canonical). */
  name: string;
  year?: number;
  tier: number;
};

export type TierMatch = {
  tier: number;
  matchedRow: TierEntry;
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
function parseSheet(csv: string, headerPattern: RegExp, tierColumnIdx: number): TierEntry[] {
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

export function matchSpeedTier(iotm: IOTM, entries: readonly TierEntry[]): TierMatch | null {
  return matchTier(iotm, entries);
}

export function matchAftercoreTier(iotm: IOTM, entries: readonly TierEntry[]): TierMatch | null {
  return matchTier(iotm, entries);
}

/**
 * Match an IOTM against a tier-list entry by trying each of its candidate
 * names (packaged, opened, familiar, skill) in priority order. Tier-list
 * authors are inconsistent — some entries use the packaged name, others use
 * the opened/familiar form, others use shorthand nicknames — so we cast a
 * wide net.
 *
 * Match priority: exact (case-insensitive, whitespace-normalized) > fuzzy
 * (Levenshtein distance ≤ 2 with year agreement). We never return a fuzzy
 * match without year agreement, since cross-year false positives are easy.
 */
function matchTier(iotm: IOTM, entries: readonly TierEntry[]): TierMatch | null {
  const candidates = candidateNames(iotm);
  const normalized = candidates.map(normalize);

  for (const norm of normalized) {
    for (const e of entries) {
      if (normalize(e.name) === norm) return { tier: e.tier, matchedRow: e };
    }
  }

  // Fuzzy fallback. Require year agreement to avoid false positives.
  let best: { tier: number; matchedRow: TierEntry; distance: number } | null = null;
  for (const norm of normalized) {
    for (const e of entries) {
      if (e.year !== undefined && e.year !== iotm.year) continue;
      const en = normalize(e.name);
      const dist = boundedLevenshtein(en, norm, 2);
      if (dist <= 2 && (!best || dist < best.distance)) {
        best = { tier: e.tier, matchedRow: e, distance: dist };
      }
    }
  }
  if (best) return { tier: best.tier, matchedRow: best.matchedRow };
  return null;
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
  return s
    .toLowerCase()
    .replace(/[™®©]/g, "")
    .replace(/[\s_]+/g, " ")
    .replace(/[^a-z0-9 '-]/g, "")
    .trim();
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
