import type { IOTM } from "../../schemas/data";
import type { TierUpdate } from "./scrape";

/**
 * Field order matching the convention in iotms.ts. Determined empirically
 * across all 305 existing entries — every distinct shape uses these fields
 * in this relative order.
 */
const FIELD_ORDER = [
  "packaged_id",
  "packaged_name",
  "opened_ids",
  "opened_names",
  "familiar_ids",
  "familiar_names",
  "skill_ids",
  "skill_names",
  "year",
  "month",
  "speed_tier",
  "aftercore_tier",
  "is_ioty",
  "is_con",
  "tradeable",
  "type",
  "equipment_slot",
  "img",
] as const;

const TODO_COMMENT_PREFIX = "TODO(scraper):";

/**
 * Format one IOTM as the multi-line `{ ... },` block style used in iotms.ts.
 * Indented for nesting inside the top-level `[...]` array (4-space leading
 * indent on field lines).
 *
 * `reviewFields` flags fields whose values came from a heuristic fallback;
 * each gets a trailing `// TODO(scraper): ...` comment so the human reviewer
 * knows what to double-check before merging the PR.
 */
export function formatEntry(
  iotm: IOTM,
  reviewFields?: ReadonlySet<keyof IOTM>,
): string {
  const lines: string[] = ["  {"];
  for (const field of FIELD_ORDER) {
    const value = iotm[field];
    if (value === undefined) continue;
    const todo = reviewFields?.has(field)
      ? ` // ${TODO_COMMENT_PREFIX} ${field} was a heuristic fallback, please verify`
      : "";
    lines.push(`    ${field}: ${formatValue(value)},${todo}`);
  }
  lines.push("  },");
  return lines.join("\n");
}

/**
 * Format a JS value as it would appear on the right-hand side of a property.
 * Handles the cases that occur in iotms.ts: strings, numbers, booleans, and
 * arrays of strings or numbers. Strings prefer double quotes; if the string
 * contains a double quote, switches to single quotes (escaping apostrophes
 * as needed). Mirrors prettier's default behavior for the data shapes we use.
 */
function formatValue(v: unknown): string {
  if (typeof v === "string") return formatString(v);
  if (typeof v === "number") return String(v);
  if (typeof v === "boolean") return v ? "true" : "false";
  if (Array.isArray(v)) {
    const elements = v.map(formatValue);
    const oneLine = `[${elements.join(", ")}]`;
    // Match the iotms.ts convention: short arrays inline, long arrays
    // (anything > 80 chars total or containing strings that put the line
    // past 80 chars when nested) get one-per-line.
    if (
      oneLine.length <= 60 &&
      !v.some((e) => typeof e === "string" && e.length > 20)
    ) {
      return oneLine;
    }
    return ["[", ...elements.map((e) => `      ${e},`), "    ]"].join("\n");
  }
  throw new Error(`formatValue: unsupported type ${typeof v}`);
}

/** Match prettier's quote-selection rule for the strings in iotms.ts. */
function formatString(s: string): string {
  if (s.includes('"')) {
    // Switch to single quotes; escape any apostrophes inside.
    return `'${s.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
  }
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

export type MergeResult = {
  /** New entries actually written to the file. */
  added: IOTM[];
  /** Entries the scraper found but already present in the file (by packaged_id). */
  skipped: IOTM[];
};

export type MergeOptions = {
  /** Per-IOTM list of fields needing TODO comments. Keyed by packaged_name. */
  reviewNotes?: Record<string, readonly (keyof IOTM)[]>;
};

/**
 * Insert new IOTM entries into iotms.ts before the closing `];`. Idempotent:
 * entries whose packaged_id already appears in the file are skipped.
 *
 * Returns the would-be-modified file contents and the merge result without
 * writing — callers handle persistence (the test suite uses this to assert
 * format properties without touching the canonical file).
 */
export function mergeEntries(
  existingFileContents: string,
  newEntries: readonly IOTM[],
  opts: MergeOptions = {},
): { contents: string; result: MergeResult } {
  const existingIds = extractExistingIds(existingFileContents);
  const added: IOTM[] = [];
  const skipped: IOTM[] = [];

  for (const e of newEntries) {
    if (existingIds.has(e.packaged_id)) skipped.push(e);
    else added.push(e);
  }

  if (added.length === 0) {
    return { contents: existingFileContents, result: { added, skipped } };
  }

  // Build the formatted block to insert.
  const blocks = added.map((iotm) => {
    const reviewSet = new Set(opts.reviewNotes?.[iotm.packaged_name] ?? []);
    return formatEntry(iotm, reviewSet);
  });
  const insertion = blocks.join("\n") + "\n";

  // Insert before the closing `];`. iotms.ts ends with `};\n];\n` (the final
  // entry's closing brace, then the array's closing bracket on its own line).
  // We splice in just before the `];` line.
  const closingPattern = /\n\];\s*$/;
  const match = closingPattern.exec(existingFileContents);
  if (!match) {
    throw new Error(
      "mergeEntries: couldn't find the closing `];` of the iotms array",
    );
  }
  const before = existingFileContents.slice(0, match.index);
  const closing = existingFileContents.slice(match.index);
  const contents = before + "\n" + insertion + closing;

  return { contents, result: { added, skipped } };
}

/** Pull every `packaged_id: <number>` value from the file for dedup. */
function extractExistingIds(src: string): Set<number> {
  const ids = new Set<number>();
  for (const m of src.matchAll(/packaged_id:\s*(\d+)/g)) {
    ids.add(Number(m[1]));
  }
  return ids;
}

/**
 * Apply tier-backfill updates in place: for each update, locate the existing
 * entry by packaged_id and set its `speed_tier` / `aftercore_tier` to the new
 * value — replacing the value if the field is already present, or inserting
 * the field at its FIELD_ORDER position if it's absent.
 *
 * Returns the modified contents and the subset of updates actually applied
 * (an update whose value already matches the file, or whose packaged_id isn't
 * found, is a no-op and not reported as applied). Like {@link mergeEntries},
 * this doesn't write — the caller persists. CI runs prettier afterward, so
 * inserted lines only need to be valid TS, not whitespace-perfect.
 */
export function applyTierUpdates(
  existingFileContents: string,
  updates: readonly TierUpdate[],
): { contents: string; applied: TierUpdate[] } {
  let contents = existingFileContents;
  const applied: TierUpdate[] = [];
  for (const u of updates) {
    const next = setNumericFieldById(contents, u.packaged_id, u.field, u.to);
    if (next !== contents) {
      contents = next;
      applied.push(u);
    }
  }
  return { contents, applied };
}

/**
 * Set a numeric field on the entry block identified by `packaged_id`. Entry
 * blocks contain no nested `{}` (values are scalars or `[...]` arrays), so the
 * first `}` after the packaged_id line reliably closes the block.
 */
function setNumericFieldById(
  src: string,
  id: number,
  field: string,
  value: number,
): string {
  const idMatch = new RegExp(`packaged_id:\\s*${id}\\b`).exec(src);
  if (!idMatch) return src;
  const openIdx = src.lastIndexOf("{", idMatch.index);
  const closeIdx = src.indexOf("}", idMatch.index);
  if (openIdx === -1 || closeIdx === -1) return src;

  const block = src.slice(openIdx, closeIdx + 1);
  const updated = setNumericFieldInBlock(block, field, value);
  if (updated === block) return src;
  return src.slice(0, openIdx) + updated + src.slice(closeIdx + 1);
}

/** Replace or insert `field: <number>` within a single `{ ... }` entry block. */
function setNumericFieldInBlock(
  block: string,
  field: string,
  value: number,
): string {
  // Already present: swap just the numeric value, preserving any trailing
  // comment on the line.
  const existing = new RegExp(`(\\n\\s*${field}:\\s*)\\d+`);
  if (existing.test(block)) {
    return block.replace(existing, `$1${value}`);
  }

  // Absent: insert at the FIELD_ORDER position. Walk the block's field lines
  // and insert before the first field that sorts after `field`; if none
  // does, insert just before the closing brace.
  // — claude 8043a506, 2026-05-30
  const order = (FIELD_ORDER as readonly string[]).indexOf(field);
  const fieldLine = /\n([ \t]+)([a-z_]+):/g;
  let indent = "    ";
  let insertAt = -1;
  let m: RegExpExecArray | null;
  while ((m = fieldLine.exec(block)) !== null) {
    indent = m[1]!;
    if ((FIELD_ORDER as readonly string[]).indexOf(m[2]!) > order) {
      insertAt = m.index; // the leading "\n" of that field's line
      break;
    }
  }
  const line = `\n${indent}${field}: ${value},`;
  if (insertAt === -1) {
    const close = /\n[ \t]*\}$/.exec(block);
    if (!close) return block;
    return block.slice(0, close.index) + line + block.slice(close.index);
  }
  return block.slice(0, insertAt) + line + block.slice(insertAt);
}
