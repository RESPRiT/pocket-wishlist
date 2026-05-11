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

type Target = { id: number; name: string };

export type RefreshSummary = {
  itemsAttempted: number;
  lowestMallWritten: number;
  lowestMallFailed: number;
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
  let failed = 0;
  let last = 0;
  for (const target of targets) {
    const wait = RATE_FLOOR_MS - (Date.now() - last);
    if (wait > 0) await Bun.sleep(wait);
    last = Date.now();
    try {
      const price = await searchLowestPrice(session, target.name);
      if (price !== null) lowestMall[target.id] = price;
      else failed += 1;
    } catch (e) {
      console.error(`mall search failed for ${target.id} "${target.name}":`, e);
      failed += 1;
    }
  }
  store.setLowestMall(lowestMall);

  // --- Pricegun pass ---
  const pricegun = await fetchPricegun(targets.map((t) => t.id));
  store.setPricegun(pricegun);

  return {
    itemsAttempted: targets.length,
    lowestMallWritten: Object.keys(lowestMall).length,
    lowestMallFailed: failed,
    pricegunCount: pricegun.length,
    durationMs: Date.now() - started,
  };
}
