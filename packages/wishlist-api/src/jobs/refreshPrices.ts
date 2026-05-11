import { iotms, type MallPrice } from "wishlist-shared";
import { store } from "../db.ts";
import { searchLowestPrice } from "../kol/mall.ts";
import { fetchPricegun } from "../kol/pricegun.ts";
import { KoLSession } from "../kol/session.ts";

// Item ID 194 is Mr. Accessory — included alongside the IOTMs since the app
// tracks Mr. A prices as a baseline currency reference.
const MR_A_ID = 194;
const MR_A_NAME = "Mr. Accessory";

const RATE_FLOOR_MS = 200;

// Sentinel written to prices.lowest_mall when KoL's mall search explicitly
// returns "no results" for an item. Distinct from NULL (which means "we
// haven't successfully probed this") so the frontend can render the
// mall-extinct state (∞) instead of the unknown state (X).
const MALL_EMPTY_SENTINEL = -1;

type Target = { id: number; name: string };

export type RefreshSummary = {
  itemsAttempted: number;
  // Items KoL returned a real price for.
  lowestMallListed: number;
  // Items KoL explicitly reported no listings for. Persisted as the empty
  // sentinel so the UI can show ∞ instead of X.
  lowestMallEmpty: number;
  // Items where the scrape didn't get a trustworthy answer (network/HTTP
  // failure, login wall, malformed response). Not persisted — leaves the
  // last-known-good value in the DB; eligible for retry on the next cron.
  lowestMallErrors: number;
  pricegunCount: number;
  durationMs: number;
};

export async function refreshPrices(): Promise<RefreshSummary> {
  const username = process.env.KOL_USERNAME;
  const password = process.env.KOL_PASSWORD;
  if (!username || !password) {
    throw new Error("KOL_USERNAME and KOL_PASSWORD must be set");
  }

  const started = Date.now();
  const targets: Target[] = [
    { id: MR_A_ID, name: MR_A_NAME },
    ...iotms.map((i) => ({ id: i.packaged_id, name: i.packaged_name })),
  ];

  // --- KoL mall pass ---
  const session = new KoLSession();
  await session.login(username, password);

  const lowestMall: MallPrice = {};
  let listed = 0;
  let empty = 0;
  let errors = 0;
  let last = 0;
  for (const target of targets) {
    const wait = RATE_FLOOR_MS - (Date.now() - last);
    if (wait > 0) await Bun.sleep(wait);
    last = Date.now();
    const result = await searchLowestPrice(session, target.name);
    switch (result.kind) {
      case "listed":
        lowestMall[target.id] = result.price;
        listed += 1;
        break;
      case "empty":
        lowestMall[target.id] = MALL_EMPTY_SENTINEL;
        empty += 1;
        break;
      case "error":
        console.error(
          `mall search error for ${target.id} "${target.name}": ${result.reason}`,
        );
        errors += 1;
        break;
    }
  }
  store.setLowestMall(lowestMall);

  // --- Pricegun pass ---
  const pricegun = await fetchPricegun(targets.map((t) => t.id));
  store.setPricegun(pricegun);

  return {
    itemsAttempted: targets.length,
    lowestMallListed: listed,
    lowestMallEmpty: empty,
    lowestMallErrors: errors,
    pricegunCount: pricegun.length,
    durationMs: Date.now() - started,
  };
}
