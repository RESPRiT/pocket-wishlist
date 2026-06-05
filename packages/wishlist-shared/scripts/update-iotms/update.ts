/**
 * CLI entrypoint: scrapes new IOTMs from the wiki / tier sheets / KoLmafia
 * data files and updates packages/wishlist-shared/data/iotms.ts. Two kinds of
 * change: it appends newly-released IOTMs, and it backfills `speed_tier` /
 * `aftercore_tier` on recently-released entries once the tier sheets rank
 * them. Idempotent: re-running is a no-op once iotms.ts has caught up.
 *
 * Run from the repo root:
 *   bun packages/wishlist-shared/scripts/update-iotms/update.ts
 *
 * Flags:
 *   --dry-run            scrape + log, but don't write iotms.ts
 *   --report=<path>      write a markdown summary (used as the PR body by the
 *                        daily GitHub Action; see .github/workflows)
 *
 * After running, review the diff (especially any `// TODO(scraper):`
 * comments and the always-manual `tradeable` field) and commit.
 */

import { readFile, writeFile } from "node:fs/promises";
import { iotms as KNOWN_IOTMS } from "../../data/iotms";
import { applyTierUpdates, mergeEntries } from "./codegen";
import {
  scrape,
  type MafiaDataClient,
  type ScrapeResult,
  type TierListClient,
  type WikiClient,
} from "./scrape";

/**
 * How far back the tier-backfill pass reaches, in months. Tier lists often
 * rank an IOTM weeks-to-months after it ships, so the window has to cover
 * that lag; 18 months is comfortably past it without re-touching the long
 * tail of old entries (which invites bad fuzzy name matches).
 */
const BACKFILL_WINDOW_MONTHS = 18;

const IOTMS_TS_PATH = new URL("../../data/iotms.ts", import.meta.url).pathname;
const WIKI_BASE = "https://wiki.kingdomofloathing.com/api.php";
const SPEED_SHEET =
  "https://docs.google.com/spreadsheets/d/1pDTE8VhuSyH03xvkVW5JGvTQf7PYitaNGLMHLVXz_5A/export?format=csv&gid=903911646";
const AFTERCORE_SHEET =
  "https://docs.google.com/spreadsheets/d/1VtAkiQrV3lioq0NHFD2VEJtc7CaQ589nqbOwhG14NiA/export?format=csv&gid=903911646";
// Human-facing (non-CSV) spreadsheet links for the PR body, so a reviewer can
// open the tier sheets the backfills came from.
const SPEED_SHEET_HUMAN =
  "https://docs.google.com/spreadsheets/d/1pDTE8VhuSyH03xvkVW5JGvTQf7PYitaNGLMHLVXz_5A";
const AFTERCORE_SHEET_HUMAN =
  "https://docs.google.com/spreadsheets/d/1VtAkiQrV3lioq0NHFD2VEJtc7CaQ589nqbOwhG14NiA";
const MAFIA_BASE =
  "https://raw.githubusercontent.com/kolmafia/kolmafia/main/src/data";
// MediaWiki blocks empty/curl UAs; pretend to be a browser. The wiki is
// public, this is just for that filter.
const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 KHTML/like Gecko Chrome/120.0.0.0 Safari/537.36";

class FetchWikiClient implements WikiClient {
  async fetchWikitext(slug: string): Promise<string> {
    return this.parse(slug, "wikitext");
  }
  async fetchHtml(slug: string): Promise<string> {
    return this.parse(slug, "text");
  }
  private async parse(
    slug: string,
    prop: "wikitext" | "text",
  ): Promise<string> {
    const url = `${WIKI_BASE}?action=parse&format=json&page=${slug}&prop=${prop}`;
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (!res.ok)
      throw new Error(`wiki HTTP ${res.status} for ${slug} (${prop})`);
    const json = (await res.json()) as {
      parse?: { wikitext?: { "*": string }; text?: { "*": string } };
      error?: { code: string; info: string };
    };
    if (json.error)
      throw new Error(
        `wiki error for ${slug}: ${json.error.code} — ${json.error.info}`,
      );
    const body =
      prop === "wikitext"
        ? json.parse?.wikitext?.["*"]
        : json.parse?.text?.["*"];
    if (body === undefined)
      throw new Error(`wiki returned no ${prop} for ${slug}`);
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
  const reportPath = process.argv
    .find((a) => a.startsWith("--report="))
    ?.slice("--report=".length);
  const titlePath = process.argv
    .find((a) => a.startsWith("--title-out="))
    ?.slice("--title-out=".length);
  if (dryRun) console.log("(dry run — won't write iotms.ts)");
  console.log("Scraping wiki + tier lists + KoLmafia data...");
  const result = await scrape({
    wiki: new FetchWikiClient(),
    tiers: new FetchTierListClient(),
    mafia: new FetchMafiaDataClient(),
    knownIotms: KNOWN_IOTMS,
    backfillSince: backfillCutoff(BACKFILL_WINDOW_MONTHS),
  });

  console.log(
    `Found ${result.newIotms.length} new IOTM(s), ${result.tierUpdates.length} tier update(s).`,
  );
  if (result.skippedEntries.length > 0) {
    console.log(
      `(${result.skippedEntries.length} entry/entries skipped — see below; they'll retry next run.)`,
    );
  }
  if (result.unmatchedTierRows.length > 0) {
    console.log(
      `(${result.unmatchedTierRows.length} tier-list row(s) didn't match any known IOTM — see end of output.)`,
    );
  }

  for (const iotm of result.newIotms) {
    const flags = result.reviewNotes[iotm.packaged_name];
    const flagsNote =
      flags && flags.length > 0 ? `  (review: ${flags.join(", ")})` : "";
    console.log(
      `  + ${iotm.year}-${(iotm.month ?? 0).toString().padStart(2, "0")} ${iotm.packaged_name}${flagsNote}`,
    );
  }

  // Append new entries, then patch tier backfills onto existing ones.
  const existing = await readFile(IOTMS_TS_PATH, "utf8");
  const { contents: appended, result: merged } = mergeEntries(
    existing,
    result.newIotms,
    {
      reviewNotes: result.reviewNotes,
    },
  );
  const { contents, applied } = applyTierUpdates(appended, result.tierUpdates);

  for (const u of applied) {
    console.log(
      `  ~ ${u.packaged_name}: ${u.field} ${u.from ?? "—"} → ${u.to}`,
    );
  }

  const changed = merged.added.length > 0 || applied.length > 0;
  if (!changed) {
    console.log("Nothing to do — iotms.ts is up to date.");
  } else if (dryRun) {
    console.log(
      `Would write ${merged.added.length} new + ${applied.length} tier update(s) (dry run, skipped).`,
    );
  } else {
    await writeFile(IOTMS_TS_PATH, contents);
    console.log(
      `Wrote ${merged.added.length} new entr${merged.added.length === 1 ? "y" : "ies"} + ${applied.length} tier update(s).`,
    );
    console.log(
      "Next: review the diff (especially TODO(scraper) comments and tradeable), run prettier, and commit.",
    );
  }

  if (result.skippedEntries.length > 0) {
    console.log(
      "\nSkipped entries (wiki page not parseable yet — retried next run):",
    );
    for (const s of result.skippedEntries)
      console.log(`  ! ${s.packaged_name}: ${s.error}`);
  }

  if (result.unmatchedTierRows.length > 0) {
    console.log(
      "\nUnmatched tier-list rows (review for typos or missing IOTMs):",
    );
    for (const row of result.unmatchedTierRows.slice(0, 20)) {
      console.log(
        `  ${row.source}: "${row.name}"${row.year ? ` (${row.year})` : ""}`,
      );
    }
    if (result.unmatchedTierRows.length > 20) {
      console.log(`  ... (${result.unmatchedTierRows.length - 20} more)`);
    }
  }

  if (reportPath) {
    await writeFile(reportPath, renderReport(result, applied, changed));
    console.log(`\nWrote PR-body report to ${reportPath}.`);
  }

  if (titlePath) {
    await writeFile(titlePath, prTitle(result.newIotms.length, applied.length));
    console.log(`Wrote PR title to ${titlePath}.`);
  }
}

/**
 * PR title summarising the run, e.g. `Update IOTMs — 2 new, 5 backfills
 * (2026-06-02)`. The daily Action reads this so the rolling PR's title reflects
 * the latest contents instead of a fixed string. UTC date to match the
 * workflow's schedule.
 */
function prTitle(newCount: number, backfillCount: number): string {
  const plural = (n: number, word: string) =>
    `${n} ${word}${n === 1 ? "" : "s"}`;
  const parts: string[] = [];
  if (newCount > 0) parts.push(plural(newCount, "new"));
  if (backfillCount > 0) parts.push(plural(backfillCount, "backfill"));
  const summary = parts.length > 0 ? ` — ${parts.join(", ")}` : "";
  const date = new Date().toISOString().slice(0, 10);
  return `Update IOTMs${summary} (${date})`;
}

/**
 * `year * 100 + month` cutoff `monthsBack` months before today — the lower
 * bound passed to scrape's tier-backfill pass.
 */
function backfillCutoff(monthsBack: number): number {
  const now = new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1 - monthsBack; // getMonth() is 0-based
  while (m <= 0) {
    m += 12;
    y -= 1;
  }
  return y * 100 + m;
}

/** Render the scrape result as a markdown PR body for the daily Action. */
function renderReport(
  result: ScrapeResult,
  applied: readonly {
    packaged_name: string;
    field: string;
    from?: number;
    to: number;
  }[],
  changed: boolean,
): string {
  const lines: string[] = ["## IOTM update", ""];
  if (!changed) {
    lines.push(
      "No changes — iotms.ts is already in sync with the wiki and tier sheets.",
    );
    return lines.join("\n") + "\n";
  }

  if (result.newIotms.length > 0) {
    lines.push(`### New IOTMs (${result.newIotms.length})`, "");
    lines.push(
      "> ⚠️ `tradeable` is never derivable from the sources — confirm it on every new entry.",
      "",
    );
    for (const iotm of result.newIotms) {
      const flags = result.reviewNotes[iotm.packaged_name];
      const flagNote =
        flags && flags.length > 0 ? ` — verify: ${flags.join(", ")}` : "";
      const ym = `${iotm.year}-${(iotm.month ?? 0).toString().padStart(2, "0")}`;
      lines.push(`- **${iotm.packaged_name}** (${ym})${flagNote}`);
    }
    lines.push("");
  }

  if (applied.length > 0) {
    lines.push(`### Tier backfills (${applied.length})`, "");
    for (const u of applied) {
      lines.push(
        `- **${u.packaged_name}**: \`${u.field}\` ${u.from ?? "_unset_"} → **${u.to}**`,
      );
    }
    lines.push("");
  }

  if (result.skippedEntries.length > 0) {
    lines.push(
      `### Skipped (wiki page not ready — will retry) (${result.skippedEntries.length})`,
      "",
    );
    for (const s of result.skippedEntries)
      lines.push(`- ${s.packaged_name}: ${s.error}`);
    lines.push("");
  }

  if (result.unmatchedTierRows.length > 0) {
    lines.push(
      `### Unmatched tier rows (${result.unmatchedTierRows.length})`,
      "",
    );
    lines.push(
      "Tier-sheet rows that matched no known IOTM (likely a sheet typo or an IOTM we haven't picked up):",
      "",
    );
    for (const row of result.unmatchedTierRows.slice(0, 30)) {
      lines.push(
        `- ${row.source}: "${row.name}"${row.year ? ` (${row.year})` : ""}`,
      );
    }
    if (result.unmatchedTierRows.length > 30)
      lines.push(`- …and ${result.unmatchedTierRows.length - 30} more`);
    lines.push("");
  }

  lines.push(
    "---",
    "Tier sources: " +
      `[speed](${SPEED_SHEET_HUMAN}) · [aftercore](${AFTERCORE_SHEET_HUMAN})`,
    "",
    "🤖 Generated by the daily IOTM update workflow. Review the diff before merging.",
  );
  return lines.join("\n") + "\n";
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
