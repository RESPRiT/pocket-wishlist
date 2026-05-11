import type { KoLSession } from "./session.ts";

/**
 * Search the mall for an item by exact name and return the lowest unit price,
 * or null if no listings exist. Matches the form fields KoLmafia's
 * MallSearchRequest uses (see kolmafia src/.../MallSearchRequest.java).
 */
export async function searchLowestPrice(
  session: KoLSession,
  itemName: string,
): Promise<number | null> {
  const form = new URLSearchParams({
    // Wrapping in quotes makes the item matcher do an exact-name lookup.
    pudnuggler: `"${itemName}"`,
    category: "allitems",
    consumable_byme: "0",
    weaponattribute: "3",
    wearable_byme: "0",
    nolimits: "0",
    max_price: "0",
    sortresultsby: "price",
    justitems: "0",
    // 1 = single cheapest store per item. KoL still returns ALL stores in
    // the result table when there's only one matching item; the param mostly
    // affects ordering when many items match. We extract the lowest ourselves.
    x_cheapest: "1",
  });

  const res = await session.fetch("/mall.php", {
    method: "POST",
    body: form,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  const html = await res.text();
  return extractLowestPrice(html);
}

/**
 * Pull the cheapest unit price out of a mall.php response.
 *
 * Each store listing has an `mallstore.php?...whichitem=N...` link where N is
 * `itemId * 10^9 + unitPrice` (price padded with leading zeros to 9 digits).
 * Extracting via this URL parameter is more stable than parsing the visible
 * price cell, which has comma separators and surrounding markup that varies.
 */
const PRICE_DIVISOR = 1_000_000_000;

export function extractLowestPrice(html: string): number | null {
  let lowest = Number.POSITIVE_INFINITY;
  let found = false;
  for (const m of html.matchAll(/whichitem=(\d{10,})/g)) {
    const encoded = Number.parseInt(m[1]!, 10);
    if (!Number.isFinite(encoded)) continue;
    const price = encoded % PRICE_DIVISOR;
    if (price <= 0) continue;
    if (price < lowest) lowest = price;
    found = true;
  }
  return found ? lowest : null;
}
