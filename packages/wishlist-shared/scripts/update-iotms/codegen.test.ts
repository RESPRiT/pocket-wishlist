import { describe, expect, test } from "bun:test";
import type { IOTM } from "../../schemas/data";
import { formatEntry, mergeEntries } from "./codegen";
import { findKnown } from "./test-helpers";

/**
 * Pull the canonical text of one IOTM block out of iotms.ts so we can
 * compare formatEntry's output to the source-of-truth byte-for-byte.
 */
function canonicalBlockFor(packaged_name: string, source: string): string {
  // Walk from the opening `{` of the block containing this packaged_name
  // forward to its `},` (with the trailing comma — every entry in iotms.ts
  // ends that way). The packaged_name is the most reliable anchor.
  const escapedName = packaged_name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`\\{[^{}]*packaged_name:\\s*"${escapedName}"[^{}]*\\},`, "s");
  const m = re.exec(source);
  if (!m) throw new Error(`No canonical block for "${packaged_name}"`);
  // Include leading 2-space indent that precedes the `{`.
  return "  " + m[0];
}

const IOTMS_TS = await Bun.file(new URL("../../data/iotms.ts", import.meta.url).pathname).text();

// ---------------------------------------------------------------------------
// formatEntry: byte-equivalent output for a representative cross-section
// ---------------------------------------------------------------------------

describe("formatEntry", () => {
  // Picks cover every shape combination present in iotms.ts: simple item,
  // familiar package, skill grant, foldable multi-form, IOTY (no month),
  // tradeable+equipment, opened-with-equipment-slot.
  const SHAPE_PICKS = [
    "Dark Jill-O-Lantern",
    "lucky Tam O'Shanter",
    "miniature gravy-covered maypole",
    "Cheshire Bitten",
    "naughty origami kit",
    "container of Spooky Putty",
    "stocking full of bones",
    "seal-clubbing club loot box",
    "Buddy Bjorn",
    "cursed monkey glove",
    // (the Eternity Codpiece is the only iotms.ts entry whose field order
    // diverges from the established `is_ioty, tradeable` convention — see
    // codegen.ts FIELD_ORDER. Excluded so the rest of the suite asserts
    // strict byte equivalence.)
  ];

  for (const name of SHAPE_PICKS) {
    test(`emits "${name}" matching its canonical iotms.ts block`, () => {
      const known = findKnown(name);
      const formatted = formatEntry(known);
      const canonical = canonicalBlockFor(name, IOTMS_TS);
      expect(formatted).toBe(canonical);
    });
  }

  test("emits a TODO comment for fields in reviewFields", () => {
    const known = findKnown("seal-clubbing club loot box");
    const out = formatEntry(known, new Set(["type", "tradeable"]));
    expect(out).toMatch(/type: "item",\s*\/\/\s*TODO\(scraper\): type/);
    expect(out).toMatch(/tradeable: false,\s*\/\/\s*TODO\(scraper\): tradeable/);
    // Fields not flagged should NOT have a TODO.
    expect(out).not.toMatch(/img:[^\n]*TODO/);
  });
});

// ---------------------------------------------------------------------------
// mergeEntries: idempotency, dedup, structure preservation
// ---------------------------------------------------------------------------

const SAMPLE_FILE = `export const iotms = [
  {
    packaged_id: 1,
    packaged_name: "first",
    year: 2020,
    tradeable: false,
    type: "item",
    img: "first.gif",
  },
  {
    packaged_id: 2,
    packaged_name: "second",
    year: 2021,
    tradeable: false,
    type: "item",
    img: "second.gif",
  },
];
`;

const NEW_ENTRY: IOTM = {
  packaged_id: 999,
  packaged_name: "brand new IOTM",
  year: 2026,
  month: 6,
  tradeable: false,
  type: "item",
  img: "new.gif",
};

describe("mergeEntries", () => {
  test("appends a new entry before the closing `];`", () => {
    const { contents, result } = mergeEntries(SAMPLE_FILE, [NEW_ENTRY]);
    expect(result.added.map((e) => e.packaged_id)).toEqual([999]);
    expect(result.skipped).toEqual([]);
    // The first two entries are still present unchanged.
    expect(contents).toContain('packaged_name: "first"');
    expect(contents).toContain('packaged_name: "second"');
    // The new entry is present, and appears before the closing `];`.
    expect(contents).toContain('packaged_name: "brand new IOTM"');
    expect(contents.indexOf('packaged_name: "brand new IOTM"')).toBeLessThan(contents.lastIndexOf("];"));
  });

  test("is idempotent: re-running with already-present packaged_ids skips them", () => {
    // First merge.
    const { contents: once } = mergeEntries(SAMPLE_FILE, [NEW_ENTRY]);
    // Second merge feeding the same entry back in.
    const { contents: twice, result } = mergeEntries(once, [NEW_ENTRY]);
    expect(result.added).toEqual([]);
    expect(result.skipped.map((e) => e.packaged_id)).toEqual([999]);
    expect(twice).toBe(once);
  });

  test("preserves existing entries verbatim (no reformatting)", () => {
    const { contents } = mergeEntries(SAMPLE_FILE, [NEW_ENTRY]);
    // The exact bytes of the original two entries are untouched.
    const originalBlock = `  {
    packaged_id: 1,
    packaged_name: "first",
    year: 2020,
    tradeable: false,
    type: "item",
    img: "first.gif",
  },
  {
    packaged_id: 2,
    packaged_name: "second",
    year: 2021,
    tradeable: false,
    type: "item",
    img: "second.gif",
  },`;
    expect(contents).toContain(originalBlock);
  });

  test("returns input unchanged when nothing new to add", () => {
    const existing: IOTM = {
      packaged_id: 1,
      packaged_name: "first",
      year: 2020,
      tradeable: false,
      type: "item",
      img: "first.gif",
    };
    const { contents, result } = mergeEntries(SAMPLE_FILE, [existing]);
    expect(contents).toBe(SAMPLE_FILE);
    expect(result.added).toEqual([]);
    expect(result.skipped.map((e) => e.packaged_id)).toEqual([1]);
  });

  test("merged output still parses as valid JS (round-trips through the existing iotms.ts)", async () => {
    const { contents } = mergeEntries(IOTMS_TS, [NEW_ENTRY]);
    // Bun's transpiler will throw if the output isn't syntactically valid TS.
    const tmp = `/tmp/iotms-merge-test-${Date.now()}.ts`;
    await Bun.write(tmp, contents);
    const mod = await import(tmp);
    expect(Array.isArray(mod.iotms)).toBe(true);
    // The new entry should be present and at the end.
    const last = mod.iotms[mod.iotms.length - 1];
    expect(last.packaged_id).toBe(999);
  });

  test("attaches review-note TODO comments to flagged fields", () => {
    const { contents } = mergeEntries(SAMPLE_FILE, [NEW_ENTRY], {
      reviewNotes: { "brand new IOTM": ["type"] },
    });
    expect(contents).toMatch(/type: "item",\s*\/\/\s*TODO\(scraper\): type/);
  });
});
