/**
 * Validation harness: runs parseItemPage against every IOTM in canonical
 * iotms.ts and reports per-field accuracy. Fetches live wiki pages on
 * demand (with a small delay) for entries not already in the fixture set,
 * so first run takes a couple minutes for ~290 entries.
 *
 * Run with: bun packages/wishlist-shared/scripts/update-iotms/_validate.ts
 *
 * Not part of the test suite — it depends on live network and is meant to
 * inform iteration on the parser rules.
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { iotms } from "../../data/iotms";
import type { IOTM } from "../../schemas/data";
import { parseItemPage } from "./parse/item-page";
import type { MafiaDataClient, WikiClient } from "./scrape";
import { FixtureMafiaDataClient } from "./test-helpers";

const WIKI_BASE = "https://wiki.kingdomofloathing.com/api.php";
const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 KHTML/like Gecko Chrome/120.0.0.0 Safari/537.36";
const FIXTURES_PAGES = new URL("./fixtures/pages/", import.meta.url).pathname;
const CACHE_DIR = new URL("./fixtures/_validation-cache/", import.meta.url).pathname;

class CachingWikiClient implements WikiClient {
  async fetchWikitext(slug: string): Promise<string> {
    return this.read(slug, "wikitext");
  }
  async fetchHtml(slug: string): Promise<string> {
    return this.read(slug, "html");
  }
  private async read(slug: string, kind: "wikitext" | "html"): Promise<string> {
    const safe = slug.replace(/[:/\\]/g, "_");
    // Try fixtures first.
    const fixturePath = join(FIXTURES_PAGES, `${safe}.${kind}`);
    if (existsSync(fixturePath)) return readFile(fixturePath, "utf8");
    // Then validation cache.
    const cachePath = join(CACHE_DIR, `${safe}.${kind}`);
    if (existsSync(cachePath)) return readFile(cachePath, "utf8");
    // Otherwise fetch live.
    const url = `${WIKI_BASE}?action=parse&format=json&page=${slug}&prop=${kind === "wikitext" ? "wikitext" : "text"}`;
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${slug} (${kind})`);
    const json = (await res.json()) as { parse?: { wikitext?: { "*": string }; text?: { "*": string } }; error?: unknown };
    if (json.error) throw new Error(`wiki error for ${slug}: ${JSON.stringify(json.error)}`);
    const body = kind === "wikitext" ? json.parse?.wikitext?.["*"] : json.parse?.text?.["*"];
    if (body === undefined) throw new Error(`no ${kind} for ${slug}`);
    await writeFile(cachePath, body);
    await new Promise((r) => setTimeout(r, 120)); // be nice to the wiki
    return body;
  }
}

function wikiSlug(name: string): string {
  const trimmed = name.trim();
  const head = trimmed[0]?.toUpperCase() ?? "";
  return (head + trimmed.slice(1)).replace(/ /g, "_");
}

function eq<T>(a: T, b: T): boolean {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((v, i) => v === b[i]);
  }
  return a === b;
}

type FieldResult = "ok" | "mismatch" | "missing-expected" | "missing-actual";

const FIELDS: (keyof IOTM)[] = [
  "packaged_id",
  "img",
  "type",
  "tradeable",
  "equipment_slot",
  "opened_ids",
  "opened_names",
  "familiar_ids",
  "familiar_names",
  "skill_ids",
  "skill_names",
  "is_ioty",
];

async function main() {
  await mkdir(CACHE_DIR, { recursive: true });
  const wiki = new CachingWikiClient();
  const mafia: MafiaDataClient = new FixtureMafiaDataClient();

  // Skip categories the scraper isn't responsible for.
  const candidates = iotms.filter((i) => !i.is_con && i.type !== "custom");
  console.log(`Validating against ${candidates.length} of ${iotms.length} IOTMs (excludes is_con + type=custom).`);

  const tally: Record<string, Record<FieldResult, number>> = {};
  for (const f of FIELDS) tally[f] = { ok: 0, mismatch: 0, "missing-expected": 0, "missing-actual": 0 };
  const mismatches: { name: string; field: string; expected: unknown; actual: unknown }[] = [];
  let processed = 0;
  let errors = 0;

  for (const expected of candidates) {
    processed++;
    if (processed % 25 === 0) console.log(`  ... ${processed}/${candidates.length}`);
    let actual: IOTM;
    try {
      actual = await parseItemPage(wiki, mafia, {
        packaged_name: expected.packaged_name,
        packaged_slug: wikiSlug(expected.packaged_name),
        year: expected.year,
        ...(expected.month !== undefined ? { month: expected.month } : {}),
      });
    } catch (e) {
      errors++;
      console.log(`  ERROR ${expected.packaged_name}: ${(e as Error).message}`);
      continue;
    }
    for (const f of FIELDS) {
      const e = expected[f];
      const a = actual[f];
      if (e === undefined && a === undefined) {
        tally[f]!.ok++;
      } else if (e !== undefined && a === undefined) {
        tally[f]!["missing-actual"]++;
        mismatches.push({ name: expected.packaged_name, field: f, expected: e, actual: a });
      } else if (e === undefined && a !== undefined) {
        tally[f]!["missing-expected"]++;
        mismatches.push({ name: expected.packaged_name, field: f, expected: e, actual: a });
      } else if (eq(e, a)) {
        tally[f]!.ok++;
      } else {
        tally[f]!.mismatch++;
        mismatches.push({ name: expected.packaged_name, field: f, expected: e, actual: a });
      }
    }
  }

  console.log(`\nValidation complete. Processed ${processed - errors}/${candidates.length} (${errors} fetch errors).\n`);
  console.log("Per-field accuracy:");
  for (const f of FIELDS) {
    const t = tally[f]!;
    const total = t.ok + t.mismatch + t["missing-expected"] + t["missing-actual"];
    const pct = total ? ((t.ok / total) * 100).toFixed(1) : "n/a";
    console.log(`  ${f.padEnd(16)} ${pct.padStart(5)}%  (ok=${t.ok}, mismatch=${t.mismatch}, missing-actual=${t["missing-actual"]}, missing-expected=${t["missing-expected"]})`);
  }

  // Per-field mismatch breakdowns (limited to keep output manageable).
  for (const f of FIELDS) {
    const fieldMisses = mismatches.filter((m) => m.field === f);
    if (fieldMisses.length === 0) continue;
    console.log(`\n=== mismatches for ${f} (${fieldMisses.length}) ===`);
    for (const m of fieldMisses.slice(0, 30)) {
      console.log(`  ${m.name.padEnd(50)} expected=${JSON.stringify(m.expected)} actual=${JSON.stringify(m.actual)}`);
    }
    if (fieldMisses.length > 30) console.log(`  ... (${fieldMisses.length - 30} more)`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
