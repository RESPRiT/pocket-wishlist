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
  CREATE TABLE IF NOT EXISTS kv (
    key TEXT PRIMARY KEY,
    value_json TEXT NOT NULL,
    updated_at INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS wishlists (
    user_id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    last_updated INTEGER NOT NULL,
    wishlist_json TEXT NOT NULL
  );
`);

const getKVStmt = db.query<{ value_json: string }, [string]>(
  "SELECT value_json FROM kv WHERE key = ?"
);
const setKVStmt = db.query<unknown, [string, string, number]>(
  "INSERT INTO kv (key, value_json, updated_at) VALUES (?, ?, ?) " +
    "ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at"
);

function getKV<T>(key: string): T | undefined {
  const row = getKVStmt.get(key);
  return row ? (JSON.parse(row.value_json) as T) : undefined;
}

function setKV(key: string, value: unknown): void {
  setKVStmt.run(key, JSON.stringify(value), Date.now());
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
  getPrices: () => getKV<CombinedPrice>("prices"),
  setPrices: (value: CombinedPrice) => setKV("prices", value),
  getPricesLastUpdate: () => getKV<string | number>("pricesLastUpdate"),
  setPricesLastUpdate: (value: Date) => setKV("pricesLastUpdate", value),
  getLowestMall: () => getKV<MallPrice>("lowestMall"),
  setLowestMall: (value: MallPrice) => setKV("lowestMall", value),
  getPricegun: () => getKV<PriceGunResponse>("pricegun"),
  setPricegun: (value: PriceGunResponse) => setKV("pricegun", value),
  getWishlist,
  setWishlist,
};
