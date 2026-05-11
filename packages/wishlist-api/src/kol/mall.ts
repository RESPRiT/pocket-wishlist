import type { KoLSession } from "./session.ts";

/**
 * The mall search has three possible outcomes per item:
 *
 *   listed — KoL returned a result page with at least one store offering.
 *   empty  — KoL returned the standard "no results" page. Authoritative
 *            signal that the mall has nothing listed for this name *right
 *            now* (callers should treat as "mall extinct").
 *   error  — Something unexpected: network/HTTP failure, the response didn't
 *            look like a mall page (session collapse, login wall, KoL down),
 *            or the page had no listing URLs *and* no "no results" banner.
 *            Caller should treat as "we don't know yet, try again later" —
 *            never as authoritative empty.
 */
export type MallResult =
  | { kind: "listed"; price: number }
  | { kind: "empty" }
  | { kind: "error"; reason: string };

/**
 * KoL stores item display names with non-ASCII characters as HTML named
 * entities (see kolmafia src/data/items.txt — e.g. "M&ouml;bius ring box",
 * "packaged SpinMaster&trade; lathe"). The mall search compares the raw
 * `pudnuggler` bytes against that indexed form, so a raw-UTF-8 query for
 * "Möbius" silently returns "no results" while "M&ouml;bius" finds the
 * listings. (Numeric entities like `&#246;` are also rejected — only named
 * entities work, empirically.)
 *
 * Today's iotms.ts uses these four characters. Extend as new IOTMs ship.
 * For an unknown non-ASCII char we leave it as-is rather than guessing an
 * entity that KoL won't accept; the worst case is the existing
 * silent-empty behavior, which the refresh job logs.
 */
const ENTITY_MAP: Record<string, string> = {
  "ä": "&auml;",
  "é": "&eacute;",
  "ö": "&ouml;",
  "™": "&trade;",
};

export function htmlEncodeForMall(name: string): string {
  let out = "";
  for (const ch of name) {
    out += ENTITY_MAP[ch] ?? ch;
  }
  return out;
}

/**
 * Search the mall for an item by exact name and return a tagged outcome.
 * Matches the form fields KoLmafia's MallSearchRequest uses (see kolmafia
 * src/.../MallSearchRequest.java). Wrapping the name in quotes makes the
 * matcher do an exact-name lookup.
 */
export async function searchLowestPrice(
  session: KoLSession,
  itemName: string,
): Promise<MallResult> {
  const form = new URLSearchParams({
    pudnuggler: `"${htmlEncodeForMall(itemName)}"`,
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

  let res: Response;
  try {
    res = await session.fetch("/mall.php", {
      method: "POST",
      body: form,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
  } catch (e) {
    return {
      kind: "error",
      reason: `network: ${e instanceof Error ? e.message : String(e)}`,
    };
  }

  if (res.status < 200 || res.status >= 400) {
    return { kind: "error", reason: `http ${res.status}` };
  }

  const html = await res.text();
  return classifyMallResponse(html);
}

/**
 * Inspect a mall.php response and decide whether it represents a real
 * listing, a confirmed-empty search, or something we shouldn't trust.
 * Exported for tests; production callers go through `searchLowestPrice`.
 */
export function classifyMallResponse(html: string): MallResult {
  // Session collapse / login wall: KoL redirects unauthenticated requests
  // to a page with login fields. Don't trust this as either listed or empty.
  if (/name=["']?loginname/i.test(html) || /name=["']?password/i.test(html)) {
    return { kind: "error", reason: "login wall in response body" };
  }
  // Must look structurally like a mall search page. Empty results still
  // contain the "Mall of Loathing" header / the search form; a redirect
  // to some other endpoint won't.
  const looksLikeMall =
    /Mall of Loathing/i.test(html) || /name=["']?pudnuggler/i.test(html);
  if (!looksLikeMall) {
    return { kind: "error", reason: "response did not look like a mall page" };
  }

  const price = extractLowestPrice(html);
  if (price !== null) return { kind: "listed", price };

  // No listing URLs anywhere. KoL prints the literal phrase "no results"
  // on a successful-but-empty search. Anything else (mall-shaped page, no
  // listings, no banner) is suspicious — prefer retry over false-empty.
  if (/no results/i.test(html)) return { kind: "empty" };
  return {
    kind: "error",
    reason: "mall page with no listings and no 'no results' banner",
  };
}

/**
 * Pull the cheapest unit price out of a mall.php response. KoL embeds each
 * listing's price in one of three URL shapes:
 *
 *   mallstore.php?...whichitem=N.P           — dotted "quick buy" form
 *                                              (typical for normal-priced
 *                                              items)
 *   mallstore.php?...whichitem=NNNPPPPPPPPP  — concatenated
 *                                              `itemId * 10^9 + price`
 *                                              (legacy / alternate endpoints,
 *                                              per KoLmafia source comments)
 *   mallstore.php?whichstore=S&searchitem=N&searchprice=P
 *                                            — store-link form, sometimes the
 *                                              ONLY form rendered for very
 *                                              high-priced listings (Buddy
 *                                              Bjorn at ~1B meat omits the
 *                                              quick-buy link entirely)
 *
 * We accept any of them and pick the lowest.
 */
const PRICE_DIVISOR = 1_000_000_000;

export function extractLowestPrice(html: string): number | null {
  let lowest = Number.POSITIVE_INFINITY;
  let found = false;

  for (const m of html.matchAll(/whichitem=(\d+)\.(\d+)/g)) {
    const price = Number.parseInt(m[2]!, 10);
    if (Number.isFinite(price) && price > 0 && price < lowest) {
      lowest = price;
      found = true;
    }
  }

  for (const m of html.matchAll(/searchitem=\d+&searchprice=(\d+)/g)) {
    const price = Number.parseInt(m[1]!, 10);
    if (Number.isFinite(price) && price > 0 && price < lowest) {
      lowest = price;
      found = true;
    }
  }

  // Fallback for the concatenated encoding (no dot, 10+ digits = itemId + price).
  if (!found) {
    for (const m of html.matchAll(/whichitem=(\d{10,})\b/g)) {
      const encoded = Number.parseInt(m[1]!, 10);
      if (!Number.isFinite(encoded)) continue;
      const price = encoded % PRICE_DIVISOR;
      if (price > 0 && price < lowest) {
        lowest = price;
        found = true;
      }
    }
  }

  return found ? lowest : null;
}
