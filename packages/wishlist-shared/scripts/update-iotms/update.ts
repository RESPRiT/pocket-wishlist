/**
 * CLI entrypoint: scrapes new IOTMs from the wiki / tier sheets / KoLmafia
 * data files and appends them to packages/wishlist-shared/data/iotms.ts.
 * Idempotent: re-running is a no-op once iotms.ts has caught up to the wiki.
 *
 * Run from the repo root:
 *   bun packages/wishlist-shared/scripts/update-iotms/update.ts
 *
 * After running, review the diff (especially any `// TODO(scraper):`
 * comments next to fields where the scraper used a heuristic fallback)
 * and commit.
 */

import { readFile, writeFile } from "node:fs/promises";
import { iotms as KNOWN_IOTMS } from "../../data/iotms";
import { mergeEntries } from "./codegen";
import { scrape, type MafiaDataClient, type TierListClient, type WikiClient } from "./scrape";

const IOTMS_TS_PATH = new URL("../../data/iotms.ts", import.meta.url).pathname;
const WIKI_BASE = "https://wiki.kingdomofloathing.com/api.php";
const SPEED_SHEET = "https://docs.google.com/spreadsheets/d/1pDTE8VhuSyH03xvkVW5JGvTQf7PYitaNGLMHLVXz_5A/export?format=csv&gid=903911646";
const AFTERCORE_SHEET = "https://docs.google.com/spreadsheets/d/1VtAkiQrV3lioq0NHFD2VEJtc7CaQ589nqbOwhG14NiA/export?format=csv&gid=903911646";
const MAFIA_BASE = "https://raw.githubusercontent.com/kolmafia/kolmafia/main/src/data";
// MediaWiki blocks empty/curl UAs; pretend to be a browser. The wiki is
// public, this is just for that filter.
const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 KHTML/like Gecko Chrome/120.0.0.0 Safari/537.36";

class FetchWikiClient implements WikiClient {
  async fetchWikitext(slug: string): Promise<string> {
    return this.parse(slug, "wikitext");
  }
  async fetchHtml(slug: string): Promise<string> {
    return this.parse(slug, "text");
  }
  private async parse(slug: string, prop: "wikitext" | "text"): Promise<string> {
    const url = `${WIKI_BASE}?action=parse&format=json&page=${slug}&prop=${prop}`;
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (!res.ok) throw new Error(`wiki HTTP ${res.status} for ${slug} (${prop})`);
    const json = (await res.json()) as { parse?: { wikitext?: { "*": string }; text?: { "*": string } }; error?: { code: string; info: string } };
    if (json.error) throw new Error(`wiki error for ${slug}: ${json.error.code} — ${json.error.info}`);
    const body = prop === "wikitext" ? json.parse?.wikitext?.["*"] : json.parse?.text?.["*"];
    if (body === undefined) throw new Error(`wiki returned no ${prop} for ${slug}`);
    return body;
  }
}

class FetchTierListClient implements TierListClient {
  async fetchSpeed(): Promise<string> {
    return this.fetchCsv(SPEED_SHEET, "speed");
  }
  async fetchAftercore(): Promise<string> {
    return this.fetchCsv(AFTERCORE_SHEET, "aftercore");
  }
  private async fetchCsv(url: string, name: string): Promise<string> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${name} sheet HTTP ${res.status}`);
    return res.text();
  }
}

class FetchMafiaDataClient implements MafiaDataClient {
  async fetchItems(): Promise<string> {
    return this.fetchFile("items.txt");
  }
  async fetchFamiliars(): Promise<string> {
    return this.fetchFile("familiars.txt");
  }
  async fetchSkills(): Promise<string> {
    return this.fetchFile("classskills.txt");
  }
  private async fetchFile(name: string): Promise<string> {
    const res = await fetch(`${MAFIA_BASE}/${name}`);
    if (!res.ok) throw new Error(`mafia ${name} HTTP ${res.status}`);
    return res.text();
  }
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  if (dryRun) console.log("(dry run — won't write iotms.ts)");
  console.log("Scraping wiki + tier lists + KoLmafia data...");
  const result = await scrape({
    wiki: new FetchWikiClient(),
    tiers: new FetchTierListClient(),
    mafia: new FetchMafiaDataClient(),
    knownIotms: KNOWN_IOTMS,
  });

  console.log(`Found ${result.newIotms.length} new IOTM(s).`);
  if (result.unmatchedTierRows.length > 0) {
    console.log(`(${result.unmatchedTierRows.length} tier-list row(s) didn't match any known IOTM — see end of output.)`);
  }

  if (result.newIotms.length === 0) {
    console.log("Nothing to do — iotms.ts is up to date.");
    return;
  }

  for (const iotm of result.newIotms) {
    const flags = result.reviewNotes[iotm.packaged_name];
    const flagsNote = flags && flags.length > 0 ? `  (review: ${flags.join(", ")})` : "";
    console.log(`  + ${iotm.year}-${(iotm.month ?? 0).toString().padStart(2, "0")} ${iotm.packaged_name}${flagsNote}`);
  }

  const existing = await readFile(IOTMS_TS_PATH, "utf8");
  const { contents, result: merged } = mergeEntries(existing, result.newIotms, {
    reviewNotes: result.reviewNotes,
  });
  if (merged.added.length === 0) {
    console.log("All entries already present in iotms.ts (idempotent run).");
    return;
  }
  if (dryRun) {
    console.log(`Would write ${merged.added.length} new entr${merged.added.length === 1 ? "y" : "ies"} (dry run, skipped).`);
  } else {
    await writeFile(IOTMS_TS_PATH, contents);
    console.log(`Wrote ${merged.added.length} new entr${merged.added.length === 1 ? "y" : "ies"} to iotms.ts.`);
    console.log("Next: review the diff (especially TODO(scraper) comments), run prettier, and commit.");
  }

  if (result.unmatchedTierRows.length > 0) {
    console.log("\nUnmatched tier-list rows (review for typos or missing IOTMs):");
    for (const row of result.unmatchedTierRows.slice(0, 20)) {
      console.log(`  ${row.source}: "${row.name}"${row.year ? ` (${row.year})` : ""}`);
    }
    if (result.unmatchedTierRows.length > 20) {
      console.log(`  ... (${result.unmatchedTierRows.length - 20} more)`);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
