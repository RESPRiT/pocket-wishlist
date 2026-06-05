import { Database } from "bun:sqlite";
import {
  type CombinedPrice,
  type MallPrice,
  type PriceGunResponse,
  type WishlistResponse,
} from "wishlist-shared";

const DB_PATH = process.env.DB_PATH ?? "./wishlist.db";

const db = new Database(DB_PATH, { create: true });
db.exec("PRAGMA journal_mode = WAL");
db.exec(`
  CREATE TABLE IF NOT EXISTS prices (
    item_id INTEGER PRIMARY KEY,
    lowest_mall INTEGER,
    pricegun_value REAL,
    pricegun_volume INTEGER,
    updated_at INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS wishlists (
    user_id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    last_updated INTEGER NOT NULL,
    wishlist_json TEXT NOT NULL
  );
`);

type PriceRow = {
  item_id: number;
  lowest_mall: number | null;
  pricegun_value: number | null;
  pricegun_volume: number | null;
  updated_at: number;
};

const selectAllPricesStmt = db.query<PriceRow, []>(
  "SELECT item_id, lowest_mall, pricegun_value, pricegun_volume, updated_at FROM prices"
);
const selectLowestMallStmt = db.query<{ item_id: number; lowest_mall: number }, []>(
  "SELECT item_id, lowest_mall FROM prices WHERE lowest_mall IS NOT NULL"
);
const selectMaxUpdatedStmt = db.query<{ max_updated: number | null }, []>(
  "SELECT MAX(updated_at) AS max_updated FROM prices"
);
const selectItemIdsStmt = db.query<{ item_id: number }, []>(
  "SELECT item_id FROM prices"
);
const upsertLowestMallStmt = db.query<unknown, [number, number, number]>(
  "INSERT INTO prices (item_id, lowest_mall, updated_at) VALUES (?, ?, ?) " +
    "ON CONFLICT(item_id) DO UPDATE SET " +
    "lowest_mall = excluded.lowest_mall, updated_at = excluded.updated_at"
);
const upsertPricegunStmt = db.query<unknown, [number, number, number, number]>(
  "INSERT INTO prices (item_id, pricegun_value, pricegun_volume, updated_at) VALUES (?, ?, ?, ?) " +
    "ON CONFLICT(item_id) DO UPDATE SET " +
    "pricegun_value = excluded.pricegun_value, pricegun_volume = excluded.pricegun_volume, updated_at = excluded.updated_at"
);

function getPrices(): CombinedPrice {
  const out: CombinedPrice = {};
  for (const row of selectAllPricesStmt.all()) {
    if (row.lowest_mall == null) continue;
    out[row.item_id] = {
      lowestMall: row.lowest_mall,
      value: row.pricegun_value ?? undefined,
      volume: row.pricegun_volume ?? undefined,
    };
  }
  return out;
}

function getLowestMall(): MallPrice {
  const out: MallPrice = {};
  for (const row of selectLowestMallStmt.all()) {
    out[row.item_id] = row.lowest_mall;
  }
  return out;
}

// Item ids that have any row in the prices table — i.e. have been probed at
// least once. The boot-time backfill diffs IOTM ids against this to find newly
// added entries that have never been priced.
// — claude 06de4a57, 2026-06-02
function getPricedItemIds(): Set<number> {
  return new Set(selectItemIdsStmt.all().map((r) => r.item_id));
}

function getPricesLastUpdate(): number {
  // MAX(updated_at) is null on an empty table; return epoch so consumers see
  // a valid Date (interpreted as "very stale, please refresh") rather than
  // having `MallPriceResponseSchema.parse` choke on undefined.
  return selectMaxUpdatedStmt.get()?.max_updated ?? 0;
}

function setLowestMall(value: MallPrice): void {
  const now = Date.now();
  const tx = db.transaction((entries: [number, number][]) => {
    for (const [id, price] of entries) upsertLowestMallStmt.run(id, price, now);
  });
  tx(Object.entries(value).map(([id, p]) => [Number(id), p]));
}

function setPricegun(value: PriceGunResponse): void {
  const now = Date.now();
  const tx = db.transaction((rows: PriceGunResponse) => {
    for (const r of rows) upsertPricegunStmt.run(r.itemId, r.value, r.volume, now);
  });
  tx(value);
}

const getWishlistStmt = db.query<
  { user_id: number; username: string; last_updated: number; wishlist_json: string },
  [number]
>("SELECT user_id, username, last_updated, wishlist_json FROM wishlists WHERE user_id = ?");
const setWishlistStmt = db.query<unknown, [number, string, number, string]>(
  "INSERT INTO wishlists (user_id, username, last_updated, wishlist_json) VALUES (?, ?, ?, ?) " +
    "ON CONFLICT(user_id) DO UPDATE SET " +
    "username = excluded.username, last_updated = excluded.last_updated, wishlist_json = excluded.wishlist_json"
);

function getWishlist(userId: number): WishlistResponse | undefined {
  const row = getWishlistStmt.get(userId);
  if (!row) return undefined;
  return {
    userId: row.user_id,
    username: row.username,
    lastUpdated: row.last_updated,
    wishlist: JSON.parse(row.wishlist_json),
  };
}

function setWishlist(userId: number, response: WishlistResponse): void {
  setWishlistStmt.run(
    userId,
    response.username,
    response.lastUpdated,
    JSON.stringify(response.wishlist)
  );
}

export const store = {
  getPrices,
  getPricedItemIds,
  getPricesLastUpdate,
  getLowestMall,
  setLowestMall,
  setPricegun,
  getWishlist,
  setWishlist,
};
