#!/usr/bin/env bun
// One-shot harness for sanity-checking the mall search + parser without
// running the full refresh job. Logs in, searches for the given item name,
// prints the lowest price, and optionally dumps the raw HTML for parser
// debugging.
//
// Usage:
//   bun run scripts/probe-mall.ts "Mr. Accessory"
//   bun run scripts/probe-mall.ts "Mr. Accessory" --dump=mall.html
//
// Reads KOL_USERNAME, KOL_PASSWORD from packages/wishlist-api/.env (Bun
// auto-loads .env from cwd).

import { searchLowestPrice } from "../src/kol/mall.ts";
import { KoLSession } from "../src/kol/session.ts";

const args = process.argv.slice(2);
const itemName = args.find((a) => !a.startsWith("--"));
const dumpArg = args.find((a) => a.startsWith("--dump="));
const dumpPath = dumpArg?.slice("--dump=".length);

if (!itemName) {
  console.error('Usage: bun run scripts/probe-mall.ts "<item name>" [--dump=<path>]');
  process.exit(1);
}

const username = process.env.KOL_USERNAME;
const password = process.env.KOL_PASSWORD;
if (!username || !password) {
  console.error("KOL_USERNAME and KOL_PASSWORD must be set (try .env in this dir)");
  process.exit(1);
}

const session = new KoLSession();
console.log(`Logging in as ${username}...`);
await session.login(username, password);
console.log("Logged in.");

if (dumpPath) {
  // Fetch raw HTML so we can iterate on the parser if the price comes back null.
  const form = new URLSearchParams({
    pudnuggler: `"${itemName}"`,
    category: "allitems",
    consumable_byme: "0",
    weaponattribute: "3",
    wearable_byme: "0",
    nolimits: "0",
    max_price: "0",
    sortresultsby: "price",
    justitems: "0",
    x_cheapest: "1",
  });
  const res = await session.fetch("/mall.php", {
    method: "POST",
    body: form,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  const html = await res.text();
  await Bun.write(dumpPath, html);
  console.log(`Wrote raw HTML (${html.length} bytes) to ${dumpPath}`);
}

const price = await searchLowestPrice(session, itemName);
console.log(`Lowest mall price for "${itemName}": ${price ?? "null"}`);
