import { describe, expect, test } from "bun:test";
import type { IOTM } from "../../schemas/data";
import { IOTMSchema } from "../../schemas/data";
import { FIXTURE_PICKS, SUPPORT_PICKS } from "./fixtures/MANIFEST";
import { parseIndex } from "./parse/mr-store";
import { parseConMerch } from "./parse/con-merch";
import { parseItemPage } from "./parse/item-page";
import { iotms as ALL_IOTMS } from "../../data/iotms";
import {
  assignTierRows,
  parseSpeedSheet,
  parseAftercoreSheet,
  type TierEntry,
} from "./parse/tier-match";
import {
  scrape,
  type MafiaDataClient,
  type TierListClient,
  type WikiClient,
} from "./scrape";
import {
  findKnown,
  FixtureMafiaDataClient,
  FixtureTierListClient,
  FixtureWikiClient,
  knownBefore,
} from "./test-helpers";

const ALL_FIXTURE_SLUGS = new Set<string>([
  "Mr._Store",
  "KoL_Con_13_Merch_Table",
]);
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
        (r) =>
          r.packaged_name.toLowerCase() === pick.packaged_name.toLowerCase(),
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
      expect(parsed.packaged_name.toLowerCase()).toBe(
        known.packaged_name.toLowerCase(),
      );
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
        expect(parsed.type, `wrong type for "${pick.packaged_name}"`).toBe(
          known.type,
        );
      } else {
        expect(parsed.type).toBeDefined();
      }

      // equipment_slot — strictly checked when iotms.ts has one.
      if (known.equipment_slot !== undefined)
        expect(parsed.equipment_slot).toBe(known.equipment_slot);

      // Linked entities (opened item / familiar / skill).
      if (known.opened_ids !== undefined)
        expect(parsed.opened_ids).toEqual(known.opened_ids);
      if (known.opened_names !== undefined) {
        expect(toLowerArray(parsed.opened_names)).toEqual(
          toLowerArray(known.opened_names),
        );
      }
      if (known.familiar_ids !== undefined)
        expect(parsed.familiar_ids).toEqual(known.familiar_ids);
      if (known.familiar_names !== undefined) {
        expect(toLowerArray(parsed.familiar_names)).toEqual(
          toLowerArray(known.familiar_names),
        );
      }
      if (known.skill_ids !== undefined)
        expect(parsed.skill_ids).toEqual(known.skill_ids);
      if (known.skill_names !== undefined) {
        expect(toLowerArray(parsed.skill_names)).toEqual(
          toLowerArray(known.skill_names),
        );
      }
      if (known.is_ioty) expect(parsed.is_ioty).toBe(true);
      // is_con is a manual flag — never auto-detected.
    });
  }
});

/** Normalize a string-or-array to a lowercased string array, for case-insensitive equality. */
function toLowerArray(
  v: string | readonly string[] | undefined,
): string[] | undefined {
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
  // these, assignTierRows correctly leaves them without a row. Anything
  // outside this list that gets no row is a real matcher bug.
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
    const speed = assignTierRows(
      parseSpeedSheet(await tiers.fetchSpeed()),
      ALL_IOTMS,
    );
    for (const pick of FIXTURE_PICKS) {
      const known = findKnown(pick.packaged_name);
      if (known.speed_tier === undefined) continue;
      const match = speed.byIotm.get(known) ?? null;
      if (EXPECTED_NULL_SPEED.has(pick.packaged_name)) {
        expect(
          match,
          `expected no speed match for "${pick.packaged_name}"`,
        ).toBeNull();
        continue;
      }
      expect(
        match,
        `expected a speed match for "${pick.packaged_name}"`,
      ).not.toBeNull();
      // The matched row's tier should agree with iotms.ts within 1, allowing
      // for routine sheet drift between iotms.ts updates.
      expect(
        Math.abs(match!.tier - known.speed_tier),
        `speed_tier drift > 1 for "${pick.packaged_name}": sheet=${match!.tier}, iotms.ts=${known.speed_tier}`,
      ).toBeLessThanOrEqual(1);
    }
  });

  test("aftercore tier matcher: each fixture matches its sheet row (or is in the expected-null set)", async () => {
    const aftercore = assignTierRows(
      parseAftercoreSheet(await tiers.fetchAftercore()),
      ALL_IOTMS,
    );
    for (const pick of FIXTURE_PICKS) {
      const known = findKnown(pick.packaged_name);
      if (known.aftercore_tier === undefined) continue;
      const match = aftercore.byIotm.get(known) ?? null;
      if (EXPECTED_NULL_AFTERCORE.has(pick.packaged_name)) {
        expect(
          match,
          `expected no aftercore match for "${pick.packaged_name}"`,
        ).toBeNull();
        continue;
      }
      expect(
        match,
        `expected an aftercore match for "${pick.packaged_name}"`,
      ).not.toBeNull();
      expect(
        Math.abs(match!.tier - known.aftercore_tier),
        `aftercore_tier drift > 1 for "${pick.packaged_name}": sheet=${match!.tier}, iotms.ts=${known.aftercore_tier}`,
      ).toBeLessThanOrEqual(1);
    }
  });

  // assignTierRows backs both tier assignment and the "unmatched tier rows"
  // report, so a placed row is never also flagged as orphaned — these lock
  // the normalization cases the report depends on, plus the token pass.
  describe("assignTierRows", () => {
    let nextId = 1;
    const iotm = (
      packaged_name: string,
      year: number,
      extra: Partial<IOTM> = {},
    ): IOTM => ({
      packaged_id: nextId++,
      packaged_name,
      year,
      tradeable: false,
      type: "item",
      img: "x.gif",
      ...extra,
    });
    const row = (name: string, year?: number, tier = 1): TierEntry => ({
      name,
      ...(year !== undefined ? { year } : {}),
      tier,
    });
    const matched = (r: TierEntry, pool: IOTM[]) =>
      assignTierRows([r], pool).unmatched.length === 0;

    const sample: IOTM[] = [
      iotm("Black and White Apron Enrollment Form", 2024),
      iotm("X-32-F snowman crate", 2016),
      iotm("SongBoom™ BoomBox Box", 2018),
    ];

    test("matches across an ampersand vs. 'and' difference", () => {
      expect(
        matched(row("Black & White Apron Enrollment Form", 2024), sample),
      ).toBe(true);
    });

    test("matches a slash-alias row against its canonical segment", () => {
      expect(matched(row("X-32-F snowman crate/Snojo", 2016), sample)).toBe(
        true,
      );
    });

    test("matches a row carrying an HTML entity", () => {
      expect(matched(row("SongBoom&trade; BoomBox Box", 2018), sample)).toBe(
        true,
      );
    });

    test("flags a genuinely unknown row as unmatched", () => {
      expect(matched(row("zorblax", 2005), sample)).toBe(false);
    });

    test("one slash row can rank several IOTMs", () => {
      const puck = iotm("yellow puck", 2015);
      const bowed = iotm("yellow puck with a bow on it", 2015);
      const r = row("yellow puck/with a bow on it", 2015, 4);
      const { byIotm, unmatched } = assignTierRows([r], [puck, bowed]);
      expect(unmatched).toEqual([]);
      expect(byIotm.get(puck)?.matchedRow).toBe(r);
      expect(byIotm.get(bowed)?.matchedRow).toBe(r);
    });

    test("an alias ties a nickname row, but only in its own year", () => {
      const comma = iotm("Comma Chameleon egg", 2006);
      const overrides = {
        aliases: [
          { row: "cc", year: 2006, packaged_name: "Comma Chameleon egg" },
        ],
        ignored: [],
      };
      const hit = assignTierRows([row("cc", 2006)], [comma], overrides);
      expect(hit.byIotm.get(comma)).toMatchObject({ kind: "alias" });
      const miss = assignTierRows([row("cc", 2007)], [comma], overrides);
      expect(miss.unmatched).toHaveLength(1);
    });

    test("an ignored row is neither matched nor reported", () => {
      const manuel = iotm("mm", 2006);
      const overrides = {
        aliases: [],
        ignored: [{ row: "mm", year: 2006, why: "not tracked" }],
      };
      const { byIotm, unmatched } = assignTierRows(
        [row("mm", 2006)],
        [manuel],
        overrides,
      );
      expect(unmatched).toEqual([]);
      expect(byIotm.size).toBe(0);
    });

    describe("token pass", () => {
      test("matches shorthand that is a word-subset of a candidate name", () => {
        const taker = iotm("Sealed TakerSpace letter of Marque", 2024);
        const paint = iotm("fresh can of paint", 2021, {
          opened_names: "fresh coat of paint",
        });
        const { byIotm, unmatched } = assignTierRows(
          [row("TakerSpace", 2024, 4), row("coat of paint", 2021, 6)],
          [taker, paint],
        );
        expect(unmatched).toEqual([]);
        expect(byIotm.get(taker)).toMatchObject({ tier: 4, kind: "tokens" });
        expect(byIotm.get(paint)).toMatchObject({ tier: 6, kind: "tokens" });
      });

      test("matches a row that adds words to the canonical name", () => {
        const pants = iotm("designer sweatpants (new old stock)", 2022, {
          opened_names: "designer sweatpants",
        });
        expect(
          matched(row("pair of high-end designer sweatpants", 2022), [pants]),
        ).toBe(true);
      });

      test("tolerates one diverging word out of four", () => {
        const cal = iotm("Packaged April Shower Thoughts Calendar", 2025);
        expect(
          matched(row("packaged April Shower Thoughts Catalog", 2025), [cal]),
        ).toBe(true);
      });

      test("requires year agreement", () => {
        const taker = iotm("Sealed TakerSpace letter of Marque", 2024);
        expect(matched(row("TakerSpace", 2023), [taker])).toBe(false);
        expect(matched(row("TakerSpace"), [taker])).toBe(false);
      });

      test("the strongest overlap claims an IOTM, whatever the sheet order", () => {
        const cal = iotm("Packaged April Shower Thoughts Calendar", 2025);
        const weak = row("April Shower Thoughts Catalog", 2025, 1); // 3/4
        const strong = row("Shower Thoughts Calendar", 2025, 3); // subset
        const { byIotm, unmatched } = assignTierRows([weak, strong], [cal]);
        expect(byIotm.get(cal)).toMatchObject({ matchedRow: strong });
        expect(unmatched).toEqual([weak]);
      });

      test("refuses to choose between equally-good IOTMs", () => {
        const a = iotm("crimson widget box", 2030);
        const b = iotm("crimson widget crate", 2030);
        expect(matched(row("crimson widget", 2030), [a, b])).toBe(false);
      });

      test("never displaces a stricter match", () => {
        const cal = iotm("Packaged April Shower Thoughts Calendar", 2025);
        const exact = row("Packaged April Shower Thoughts Calendar", 2025, 3);
        const loose = row("April Shower Thoughts", 2025, 5);
        const { byIotm, unmatched } = assignTierRows([loose, exact], [cal]);
        expect(byIotm.get(cal)).toMatchObject({ matchedRow: exact });
        expect(unmatched).toEqual([loose]);
      });

      test("ignores overlaps on a short noise-length word", () => {
        const ski = iotm("McHugeLarge deluxe ski set", 2025);
        expect(matched(row("set", 2025), [ski])).toBe(false);
      });
    });
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

    const namesLower = result.newIotms.map((i) =>
      i.packaged_name.toLowerCase(),
    );
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
      expect(
        names.has(noteName),
        `reviewNotes references unknown IOTM "${noteName}"`,
      ).toBe(true);
    }
  });
});

// ---------------------------------------------------------------------------
// Tier backfill: re-sync tiers on existing in-window entries
// ---------------------------------------------------------------------------

describe("scrape (tier backfill)", () => {
  // A "complete" known set (nothing new in the index) so the backfill pass is
  // observed in isolation from the append path.
  async function completeKnown() {
    const first = await scrape({
      wiki,
      tiers,
      mafia,
      knownIotms: knownBefore(2025, 12),
    });
    return [...knownBefore(2025, 12), ...first.newIotms];
  }

  test("omitting backfillSince produces no tier updates", async () => {
    const result = await scrape({
      wiki,
      tiers,
      mafia,
      knownIotms: await completeKnown(),
    });
    expect(result.tierUpdates).toEqual([]);
  });

  test("flips a stale tier on an in-window entry to the sheet value", async () => {
    const complete = await completeKnown();
    const target = complete.find(
      (i) => i.packaged_name.toLowerCase() === "seal-clubbing club loot box",
    )!;
    // Corrupt its speed_tier so the sheet (tier 0) disagrees.
    const corrupted = complete.map((i) =>
      i === target ? { ...i, speed_tier: 99 } : i,
    );
    const result = await scrape({
      wiki,
      tiers,
      mafia,
      knownIotms: corrupted,
      backfillSince: 202401,
    });

    expect(result.newIotms).toEqual([]);
    const u = result.tierUpdates.find(
      (u) =>
        u.packaged_name === target.packaged_name && u.field === "speed_tier",
    );
    expect(u).toBeDefined();
    expect(u!.from).toBe(99);
    expect(u!.to).toBe(0);
  });

  test("does not backfill entries released before the window", async () => {
    const complete = await completeKnown();
    // Window starts in the future → nothing qualifies, even with corrupted tiers.
    const corrupted = complete.map((i) => ({ ...i, speed_tier: 99 }));
    const result = await scrape({
      wiki,
      tiers,
      mafia,
      knownIotms: corrupted,
      backfillSince: 209901,
    });
    expect(result.tierUpdates).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Parse-failure isolation: a stub wiki page skips one entry, not the run
// ---------------------------------------------------------------------------

describe("scrape (parse failure isolation)", () => {
  /** Delegates to the fixture wiki client but throws for one item slug. */
  class FlakyWikiClient implements WikiClient {
    constructor(
      private readonly inner: WikiClient,
      private readonly breakSlug: string,
    ) {}
    fetchWikitext(slug: string): Promise<string> {
      if (slug === this.breakSlug) throw new Error("wiki page is a stub");
      return this.inner.fetchWikitext(slug);
    }
    fetchHtml(slug: string): Promise<string> {
      if (slug === this.breakSlug) throw new Error("wiki page is a stub");
      return this.inner.fetchHtml(slug);
    }
  }

  test("a failing entry is skipped and reported; the rest still parse", async () => {
    const flaky = new FlakyWikiClient(wiki, "Stocking_full_of_bones");
    const result = await scrape({
      wiki: flaky,
      tiers,
      mafia,
      knownIotms: knownBefore(2025, 12),
    });

    const newNames = result.newIotms.map((i) => i.packaged_name.toLowerCase());
    expect(newNames).not.toContain("stocking full of bones");
    // A sibling release from the same run still comes through.
    expect(newNames).toContain("pasta wand loot box");
    // The skip is surfaced, not swallowed.
    expect(
      result.skippedEntries.map((s) => s.packaged_name.toLowerCase()),
    ).toContain("stocking full of bones");
  });
});

// ---------------------------------------------------------------------------
// A broken KoLmafia source fails the run instead of skipping every entry
// ---------------------------------------------------------------------------

describe("scrape (mafia data unavailable)", () => {
  class BrokenMafiaDataClient implements MafiaDataClient {
    fetchItems(): Promise<string> {
      return Promise.reject(new Error("mafia items.txt HTTP 404"));
    }
    fetchFamiliars(): Promise<string> {
      return Promise.reject(new Error("mafia familiars.txt HTTP 404"));
    }
    fetchSkills(): Promise<string> {
      return Promise.reject(new Error("mafia classskills.txt HTTP 404"));
    }
  }

  test("rejects rather than reporting new entries as skipped", async () => {
    await expect(
      scrape({
        wiki,
        tiers,
        mafia: new BrokenMafiaDataClient(),
        knownIotms: knownBefore(2025, 12),
      }),
    ).rejects.toThrow("HTTP 404");
  });
});

// ---------------------------------------------------------------------------
// Con merch table: convention exclusives have no Mr. Store month
// ---------------------------------------------------------------------------

describe("scrape (Con merch)", () => {
  test("parses only the Mr. Accessory items off the merch table", async () => {
    const names = parseConMerch(
      await wiki.fetchWikitext("KoL_Con_13_Merch_Table"),
    );
    expect(names).toContain("hippo tutu");
    expect(names).toContain("crated wardrobe-o-matic");
    // Priced in Chroner, not an IOTM.
    expect(names).not.toContain("Twitching Television Tattoo");
  });

  test("an unknown merch item comes back as a Con item stamped with conYear", async () => {
    const known = ALL_IOTMS.filter((i) => i.packaged_name !== "hippo tutu");
    const result = await scrape({
      wiki,
      tiers,
      mafia,
      knownIotms: known,
      conYear: 2031,
    });
    const tutu = result.newIotms.find((i) => i.packaged_name === "hippo tutu");
    expect(tutu).toMatchObject({ year: 2031, is_con: true });
    expect(tutu!.month).toBeUndefined();
    expect(tutu!.is_ioty).toBeUndefined();
    // The year is a guess (first-seen), so the reviewer is asked to check it.
    expect(result.reviewNotes["hippo tutu"]).toContain("year");
  });
});

// ---------------------------------------------------------------------------
// Tier report details: loose-match flags and unranked hints
// ---------------------------------------------------------------------------

describe("scrape (tier report details)", () => {
  /** Serves the same synthetic rows as both tier sheets. */
  class SyntheticTierListClient implements TierListClient {
    private readonly csv: string;
    constructor(rows: readonly [name: string, year: number, tier: number][]) {
      this.csv = [
        "Mr. Store Item,Year,Tier",
        ...rows.map(([n, y, t]) => `"${n}",${y},${t}`),
      ].join("\n");
    }
    fetchSpeed(): Promise<string> {
      return Promise.resolve(this.csv);
    }
    fetchAftercore(): Promise<string> {
      return Promise.resolve(this.csv);
    }
  }

  test("a backfill from a loosely-matched row names that row", async () => {
    const result = await scrape({
      wiki,
      tiers: new SyntheticTierListClient([["TakerSpace", 2024, 9]]),
      mafia,
      knownIotms: ALL_IOTMS,
      backfillSince: 202401,
    });
    const u = result.tierUpdates.find(
      (u) => u.packaged_name === "Sealed TakerSpace letter of Marque",
    );
    expect(u).toMatchObject({ to: 9, looseRow: "TakerSpace" });
  });

  test("an unmatched row lists the one same-year IOTM the sheet left unranked", async () => {
    const [target, ...rest] = ALL_IOTMS.filter((i) => i.year === 2010);
    const result = await scrape({
      wiki,
      tiers: new SyntheticTierListClient([
        ...rest.map((i): [string, number, number] => [
          i.packaged_name,
          2010,
          3,
        ]),
        ["zorblax", 2010, 3],
      ]),
      mafia,
      knownIotms: ALL_IOTMS,
    });
    const row = result.unmatchedTierRows.find((r) => r.name === "zorblax");
    expect(row?.unranked).toEqual([target!.packaged_name]);
  });
});
