import { describe, expect, test } from "bun:test";
import type { IOTM } from "../../schemas/data";
import { IOTMSchema } from "../../schemas/data";
import { FIXTURE_PICKS, SUPPORT_PICKS } from "./fixtures/MANIFEST";
import { parseIndex } from "./parse/mr-store";
import { parseItemPage } from "./parse/item-page";
import { matchSpeedTier, matchAftercoreTier, parseSpeedSheet, parseAftercoreSheet } from "./parse/tier-match";
import { scrape } from "./scrape";
import {
  findKnown,
  FixtureMafiaDataClient,
  FixtureTierListClient,
  FixtureWikiClient,
  knownBefore,
} from "./test-helpers";

const ALL_FIXTURE_SLUGS = new Set<string>(["Mr._Store"]);
for (const pick of [...FIXTURE_PICKS, ...SUPPORT_PICKS]) {
  ALL_FIXTURE_SLUGS.add(pick.packaged_slug);
  for (const s of pick.secondary_slugs ?? []) ALL_FIXTURE_SLUGS.add(s);
}

const wiki = new FixtureWikiClient(ALL_FIXTURE_SLUGS);
const tiers = new FixtureTierListClient();
const mafia = new FixtureMafiaDataClient();

/**
 * The `type` discriminator (item / familiar / skill / vip / campground / etc.)
 * is auto-detectable for some types but only best-effort for others. The
 * scraper aims to be right for these common types; rarer types fall back to a
 * sensible default and the human reviewer fixes up in the PR.
 */
const STRICTLY_TYPED = new Set(["item", "familiar", "skill"]);

// ---------------------------------------------------------------------------
// Index parser
// ---------------------------------------------------------------------------

describe("parseIndex (Mr. Store wikitext)", () => {
  test("extracts every Mr. Store fixture pick from the index, with correct year/month", async () => {
    const wt = await wiki.fetchWikitext("Mr._Store");
    const index = parseIndex(wt);

    // Con/custom IOTMs are distributed outside Mr. Store and don't appear on
    // this page; they're added to iotms.ts manually. The index parser is only
    // responsible for finding Mr-Store-distributed IOTMs.
    const skipFromIndex = new Set(["custom"]);

    for (const pick of FIXTURE_PICKS) {
      const known = findKnown(pick.packaged_name);
      if (known.is_con) continue;
      if (skipFromIndex.has(known.type)) continue;
      // The wikitext sometimes uses different first-letter casing than iotms.ts
      // (e.g. "Naughty origami kit" vs "naughty origami kit"). The canonical
      // name is recovered later via per-page parsing; for index purposes we
      // match case-insensitively.
      const row = index.find(
        (r) => r.packaged_name.toLowerCase() === pick.packaged_name.toLowerCase()
      );
      expect(row, `index missing "${pick.packaged_name}"`).toBeDefined();
      expect(row!.year).toBe(known.year);
      if (known.month !== undefined) expect(row!.month).toBe(known.month);
    }
  });

  test("preserves chronological order", async () => {
    const wt = await wiki.fetchWikitext("Mr._Store");
    const index = parseIndex(wt);
    for (let i = 1; i < index.length; i++) {
      const prev = index[i - 1]!;
      const cur = index[i]!;
      // IOTYs sort to month=0 (start of year); see knownBefore + anchorKey.
      const prevKey = prev.year * 12 + (prev.month ?? 0);
      const curKey = cur.year * 12 + (cur.month ?? 0);
      expect(curKey).toBeGreaterThanOrEqual(prevKey);
    }
  });
});

// ---------------------------------------------------------------------------
// Per-page structural tests — one per fixture, checks scraped IOTM matches
// the canonical entry in iotms.ts (modulo tier values, which the tier sheets
// govern separately).
// ---------------------------------------------------------------------------

describe("parseItemPage", () => {
  for (const pick of FIXTURE_PICKS) {
    test(`parses "${pick.packaged_name}" matching iotms.ts`, async () => {
      const known = findKnown(pick.packaged_name);
      const scraped = await parseItemPage(wiki, mafia, {
        packaged_name: pick.packaged_name,
        packaged_slug: pick.packaged_slug,
        year: known.year,
        ...(known.month !== undefined ? { month: known.month } : {}),
      });

      const parsed = IOTMSchema.parse(scraped);

      expect(parsed.packaged_id).toBe(known.packaged_id);
      expect(parsed.packaged_name.toLowerCase()).toBe(known.packaged_name.toLowerCase());
      // A handful of iotms.ts entries use the opened-form image instead of
      // the package image (manually edited inconsistencies). The scraper
      // emits the package image for everything; check the prefix as a
      // sanity check rather than strict equality.
      expect(parsed.img.endsWith(".gif")).toBe(true);
      expect(parsed.year).toBe(known.year);
      if (known.month !== undefined) expect(parsed.month).toBe(known.month);

      // Type — strictly checked for the three common types; best-effort for
      // the rarer ones, where we just assert SOMETHING was emitted.
      if (STRICTLY_TYPED.has(known.type)) {
        expect(parsed.type, `wrong type for "${pick.packaged_name}"`).toBe(known.type);
      } else {
        expect(parsed.type).toBeDefined();
      }

      // equipment_slot — strictly checked when iotms.ts has one.
      if (known.equipment_slot !== undefined) expect(parsed.equipment_slot).toBe(known.equipment_slot);

      // Linked entities (opened item / familiar / skill).
      if (known.opened_ids !== undefined) expect(parsed.opened_ids).toEqual(known.opened_ids);
      if (known.opened_names !== undefined) {
        expect(toLowerArray(parsed.opened_names)).toEqual(toLowerArray(known.opened_names));
      }
      if (known.familiar_ids !== undefined) expect(parsed.familiar_ids).toEqual(known.familiar_ids);
      if (known.familiar_names !== undefined) {
        expect(toLowerArray(parsed.familiar_names)).toEqual(toLowerArray(known.familiar_names));
      }
      if (known.skill_ids !== undefined) expect(parsed.skill_ids).toEqual(known.skill_ids);
      if (known.skill_names !== undefined) {
        expect(toLowerArray(parsed.skill_names)).toEqual(toLowerArray(known.skill_names));
      }
      if (known.is_ioty) expect(parsed.is_ioty).toBe(true);
      // is_con is a manual flag — never auto-detected.
    });
  }
});

/** Normalize a string-or-array to a lowercased string array, for case-insensitive equality. */
function toLowerArray(v: string | readonly string[] | undefined): string[] | undefined {
  if (v === undefined) return undefined;
  if (typeof v === "string") return [v.toLowerCase()];
  return v.map((s) => s.toLowerCase());
}

// ---------------------------------------------------------------------------
// Tier matching — fuzzy name match against messy tier-list rows
// ---------------------------------------------------------------------------

describe("tier matching", () => {
  test("speed sheet parses into tier entries", async () => {
    const csv = await tiers.fetchSpeed();
    const entries = parseSpeedSheet(csv);
    expect(entries.length).toBeGreaterThan(50);
    for (const e of entries) {
      expect(typeof e.name).toBe("string");
      expect(e.name.length).toBeGreaterThan(0);
      expect(typeof e.tier).toBe("number");
    }
  });

  test("aftercore sheet parses into tier entries", async () => {
    const csv = await tiers.fetchAftercore();
    const entries = parseAftercoreSheet(csv);
    expect(entries.length).toBeGreaterThan(50);
  });

  // Tier sheets exclude certain IOTM categories (VIP/clan items aren't rated;
  // Con items get filtered; brand-new IOTYs haven't been rated yet). For
  // these, matchTier correctly returns null. Anything outside this list that
  // also returns null is a real matcher bug.
  const EXPECTED_NULL_SPEED = new Set([
    "Clan pool table",
    "Clan hot dog stand",
    "clan underground fireworks shop",
    "hippo tutu",
    "Gygaxian Libram",
    "Tome of Rad Libs",
  ]);
  const EXPECTED_NULL_AFTERCORE = new Set([
    "Clan pool table",
    "Clan hot dog stand",
    "clan underground fireworks shop",
    "hippo tutu",
    "discreetly-wrapped Eternity Codpiece",
  ]);

  test("speed tier matcher: each fixture matches its sheet row (or is in the expected-null set)", async () => {
    const speedEntries = parseSpeedSheet(await tiers.fetchSpeed());
    for (const pick of FIXTURE_PICKS) {
      const known = findKnown(pick.packaged_name);
      if (known.speed_tier === undefined) continue;
      const match = matchSpeedTier(known, speedEntries);
      if (EXPECTED_NULL_SPEED.has(pick.packaged_name)) {
        expect(match, `expected no speed match for "${pick.packaged_name}"`).toBeNull();
        continue;
      }
      expect(match, `expected a speed match for "${pick.packaged_name}"`).not.toBeNull();
      // The matched row's tier should agree with iotms.ts within 1, allowing
      // for routine sheet drift between iotms.ts updates.
      expect(
        Math.abs(match!.tier - known.speed_tier),
        `speed_tier drift > 1 for "${pick.packaged_name}": sheet=${match!.tier}, iotms.ts=${known.speed_tier}`
      ).toBeLessThanOrEqual(1);
    }
  });

  test("aftercore tier matcher: each fixture matches its sheet row (or is in the expected-null set)", async () => {
    const aftercoreEntries = parseAftercoreSheet(await tiers.fetchAftercore());
    for (const pick of FIXTURE_PICKS) {
      const known = findKnown(pick.packaged_name);
      if (known.aftercore_tier === undefined) continue;
      const match = matchAftercoreTier(known, aftercoreEntries);
      if (EXPECTED_NULL_AFTERCORE.has(pick.packaged_name)) {
        expect(match, `expected no aftercore match for "${pick.packaged_name}"`).toBeNull();
        continue;
      }
      expect(match, `expected an aftercore match for "${pick.packaged_name}"`).not.toBeNull();
      expect(
        Math.abs(match!.tier - known.aftercore_tier),
        `aftercore_tier drift > 1 for "${pick.packaged_name}": sheet=${match!.tier}, iotms.ts=${known.aftercore_tier}`
      ).toBeLessThanOrEqual(1);
    }
  });
});

// ---------------------------------------------------------------------------
// End-to-end: the scrape() entrypoint with a recent anchor
// ---------------------------------------------------------------------------

describe("scrape (end-to-end)", () => {
  test("with anchor at 2025-11, discovers all IOTMs the wiki has after that point", async () => {
    const result = await scrape({
      wiki,
      tiers,
      mafia,
      knownIotms: knownBefore(2025, 12),
    });

    const namesLower = result.newIotms.map((i) => i.packaged_name.toLowerCase());
    // Everything in the live Mr. Store table from Dec 2025 onward, including
    // both monthly IOTMs and the 2026 IOTY. iotms.ts itself is several months
    // out of date — that's exactly the scenario the scraper exists to fix.
    const expected = [
      "stocking full of bones",
      "seal-clubbing club loot box",
      "boxed Heartstone",
      "boxed Archaeologist's Spade",
      "wrapped Baseball Diamond",
      "pasta wand loot box",
      "discreetly-wrapped Eternity Codpiece",
    ];
    for (const e of expected) expect(namesLower).toContain(e.toLowerCase());
  });

  test("returns nothing new when knownIotms covers everything in the wiki index", async () => {
    // Synthesize a "future" knownIotms set by running scrape once and feeding
    // its output back as known. The second call should find nothing new.
    const first = await scrape({
      wiki,
      tiers,
      mafia,
      knownIotms: knownBefore(2025, 12),
    });
    const second = await scrape({
      wiki,
      tiers,
      mafia,
      knownIotms: [...knownBefore(2025, 12), ...first.newIotms],
    });
    expect(second.newIotms).toEqual([]);
  });

  test("returned IOTMs all validate against IOTMSchema", async () => {
    const result = await scrape({
      wiki,
      tiers,
      mafia,
      knownIotms: knownBefore(2025, 12),
    });
    for (const iotm of result.newIotms) {
      const parsed: IOTM = IOTMSchema.parse(iotm);
      expect(parsed.packaged_id).toBeGreaterThan(0);
    }
  });

  test("reviewNotes only contains entries from result.newIotms", async () => {
    const result = await scrape({
      wiki,
      tiers,
      mafia,
      knownIotms: knownBefore(2025, 12),
    });
    const names = new Set(result.newIotms.map((i) => i.packaged_name));
    for (const noteName of Object.keys(result.reviewNotes)) {
      expect(names.has(noteName), `reviewNotes references unknown IOTM "${noteName}"`).toBe(true);
    }
  });
});
