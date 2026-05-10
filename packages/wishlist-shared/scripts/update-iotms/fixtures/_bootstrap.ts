// One-shot fetch of fixture data for the IOTM scraper tests.
// Run with: bun packages/wishlist-shared/scripts/update-iotms/fixtures/_bootstrap.ts
//
// Re-run only when adding new fixture picks. The output is committed.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { FIXTURE_PICKS, SUPPORT_PICKS } from "./MANIFEST";

const WIKI_BASE = "https://wiki.kingdomofloathing.com/api.php";
const SPEED_SHEET = "https://docs.google.com/spreadsheets/d/1pDTE8VhuSyH03xvkVW5JGvTQf7PYitaNGLMHLVXz_5A/export?format=csv&gid=903911646";
const AFTERCORE_SHEET = "https://docs.google.com/spreadsheets/d/1VtAkiQrV3lioq0NHFD2VEJtc7CaQ589nqbOwhG14NiA/export?format=csv&gid=903911646";
const MAFIA_BASE = "https://raw.githubusercontent.com/kolmafia/kolmafia/main/src/data";
const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 KHTML/like Gecko Chrome/120.0.0.0 Safari/537.36";

const FIXTURES_ROOT = new URL("./", import.meta.url).pathname;
const PAGES_DIR = join(FIXTURES_ROOT, "pages");
const TIERS_DIR = join(FIXTURES_ROOT, "tiers");
const MAFIA_DIR = join(FIXTURES_ROOT, "mafia");

type WikiParseResponse =
  | { parse: { wikitext?: { "*": string }; text?: { "*": string } } }
  | { error: { code: string; info: string } };

async function fetchWikiPage(slug: string, prop: "wikitext" | "text"): Promise<string | null> {
  const url = `${WIKI_BASE}?action=parse&format=json&page=${slug}&prop=${prop}`;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) {
    console.error(`  HTTP ${res.status} for ${slug} (${prop})`);
    return null;
  }
  const json = (await res.json()) as WikiParseResponse;
  if ("error" in json) {
    console.error(`  Wiki error for ${slug} (${prop}): ${json.error.code} — ${json.error.info}`);
    return null;
  }
  const body = prop === "wikitext" ? json.parse.wikitext?.["*"] : json.parse.text?.["*"];
  return body ?? null;
}

async function snapshotPage(slug: string): Promise<{ ok: boolean; reason?: string }> {
  // Filename uses the slug verbatim; we only sanitize path separators and
  // the `:` character (used in airplane charter pages) so the file is writable.
  const safe = slug.replace(/[:/\\]/g, "_");
  const wt = await fetchWikiPage(slug, "wikitext");
  const html = await fetchWikiPage(slug, "text");
  if (wt === null && html === null) return { ok: false, reason: "both fetches failed" };
  if (wt !== null) await writeFile(join(PAGES_DIR, `${safe}.wikitext`), wt);
  if (html !== null) await writeFile(join(PAGES_DIR, `${safe}.html`), html);
  return { ok: true };
}

async function snapshotTier(url: string, name: string): Promise<void> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${name} sheet HTTP ${res.status}`);
  const text = await res.text();
  await writeFile(join(TIERS_DIR, `${name}.csv`), text);
  console.log(`  ${name}.csv: ${text.length} bytes, ${text.split("\n").length} lines`);
}

async function snapshotMafiaFile(name: string): Promise<void> {
  const res = await fetch(`${MAFIA_BASE}/${name}`);
  if (!res.ok) throw new Error(`mafia ${name} HTTP ${res.status}`);
  const text = await res.text();
  await writeFile(join(MAFIA_DIR, name), text);
  console.log(`  ${name}: ${text.length} bytes, ${text.split("\n").length} lines`);
}

async function main() {
  await mkdir(PAGES_DIR, { recursive: true });
  await mkdir(TIERS_DIR, { recursive: true });
  await mkdir(MAFIA_DIR, { recursive: true });

  console.log(`Snapshotting Mr. Store index...`);
  await snapshotPage("Mr._Store");

  const allSlugs = new Set<string>();
  for (const pick of [...FIXTURE_PICKS, ...SUPPORT_PICKS]) {
    allSlugs.add(pick.packaged_slug);
    for (const s of pick.secondary_slugs ?? []) allSlugs.add(s);
  }
  console.log(`Snapshotting ${allSlugs.size} wiki pages...`);

  const failures: string[] = [];
  for (const slug of allSlugs) {
    const decoded = decodeURIComponent(slug);
    process.stdout.write(`  ${decoded} ... `);
    const result = await snapshotPage(slug);
    if (result.ok) console.log("ok");
    else {
      console.log(`FAIL (${result.reason})`);
      failures.push(decoded);
    }
    // Be nice to the wiki
    await new Promise((r) => setTimeout(r, 150));
  }

  console.log(`Snapshotting tier list CSVs...`);
  await snapshotTier(SPEED_SHEET, "speed");
  await snapshotTier(AFTERCORE_SHEET, "aftercore");

  console.log(`Snapshotting KoLmafia data files...`);
  await snapshotMafiaFile("items.txt");
  await snapshotMafiaFile("familiars.txt");
  await snapshotMafiaFile("classskills.txt");

  if (failures.length) {
    console.error(`\n${failures.length} page(s) failed. Fix slugs in MANIFEST.ts and re-run.`);
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
  }
  console.log("\nDone.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
