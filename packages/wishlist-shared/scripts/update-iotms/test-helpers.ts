import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { IOTM } from "../../schemas/data";
import { iotms as ALL_IOTMS } from "../../data/iotms";
import type { MafiaDataClient, TierListClient, WikiClient } from "./scrape";

const FIXTURES_ROOT = new URL("./fixtures/", import.meta.url).pathname;

/** WikiClient that reads from the on-disk fixture set. */
export class FixtureWikiClient implements WikiClient {
  constructor(private readonly knownSlugs: ReadonlySet<string>) {}

  async fetchWikitext(slug: string): Promise<string> {
    return this.read(slug, "wikitext");
  }
  async fetchHtml(slug: string): Promise<string> {
    return this.read(slug, "html");
  }
  private async read(slug: string, kind: "wikitext" | "html"): Promise<string> {
    // The MediaWiki API accepts both URL-encoded and raw forms (e.g.
    // "Foo%27s_Bar" and "Foo's_Bar" both resolve). MANIFEST.ts stores the
    // URL-encoded form for apostrophes and non-ASCII chars (the bootstrap
    // uses these for filenames), but the scraper emits raw form at runtime.
    // Try both so the test tolerates either.
    const encoded = encodeForWiki(slug);
    const candidates = encoded === slug ? [slug] : [slug, encoded];
    for (const cand of candidates) {
      if (this.knownSlugs.has(cand)) {
        const safe = cand.replace(/[:/\\]/g, "_");
        return readFile(join(FIXTURES_ROOT, "pages", `${safe}.${kind}`), "utf8");
      }
    }
    throw new Error(
      `FixtureWikiClient: page "${slug}" not in fixture set. Add it to MANIFEST.ts and re-run _bootstrap.ts.`
    );
  }
}

/**
 * Normalize a wiki slug to the form MANIFEST.ts uses: percent-encode
 * apostrophes and non-ASCII characters; leave ASCII (incl. underscore,
 * colon) as-is.
 */
function encodeForWiki(slug: string): string {
  let out = "";
  for (const c of slug) {
    if (c === "'") out += "%27";
    else if (c.charCodeAt(0) > 0x7e) out += encodeURIComponent(c);
    else out += c;
  }
  return out;
}

export class FixtureTierListClient implements TierListClient {
  async fetchSpeed(): Promise<string> {
    return readFile(join(FIXTURES_ROOT, "tiers/speed.csv"), "utf8");
  }
  async fetchAftercore(): Promise<string> {
    return readFile(join(FIXTURES_ROOT, "tiers/aftercore.csv"), "utf8");
  }
}

export class FixtureMafiaDataClient implements MafiaDataClient {
  async fetchItems(): Promise<string> {
    return readFile(join(FIXTURES_ROOT, "mafia/items.txt"), "utf8");
  }
  async fetchFamiliars(): Promise<string> {
    return readFile(join(FIXTURES_ROOT, "mafia/familiars.txt"), "utf8");
  }
  async fetchSkills(): Promise<string> {
    return readFile(join(FIXTURES_ROOT, "mafia/classskills.txt"), "utf8");
  }
}

/** Look up an IOTM by packaged_name from the canonical iotms.ts data. */
export function findKnown(packaged_name: string): IOTM {
  const found = ALL_IOTMS.find((i) => i.packaged_name === packaged_name);
  if (!found) throw new Error(`No IOTM with packaged_name="${packaged_name}" in iotms.ts`);
  return found;
}

/**
 * Slice of iotms.ts containing only entries released strictly before the
 * given (year, month). Used as `knownIotms` to drive "what's new" tests.
 *
 * IOTY entries (no month) sort to the START of their year (month=0), since
 * the IOTY headlines the year and is released around January.
 */
export function knownBefore(year: number, month: number): IOTM[] {
  const cutoff = year * 12 + month;
  return ALL_IOTMS.filter((i) => {
    const m = i.month ?? 0;
    return i.year * 12 + m < cutoff;
  });
}
