import {
  type PriceGunResponse,
  PriceGunResponseSchema,
} from "wishlist-shared";

const PRICEGUN_BASE = "https://pricegun.loathers.net/api";

export async function fetchPricegun(
  itemIds: readonly number[],
): Promise<PriceGunResponse> {
  if (itemIds.length === 0) return [];
  const res = await fetch(`${PRICEGUN_BASE}/${itemIds.join(",")}`);
  if (!res.ok) {
    throw new Error(`pricegun fetch failed: ${res.status} ${res.statusText}`);
  }
  return PriceGunResponseSchema.parse(await res.json());
}
