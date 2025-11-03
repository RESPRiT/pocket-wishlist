import { PriceGun, PriceGunSchema } from "wishlist-shared";

/**
 * Fetches prices from PriceGun API
 */
export async function fetchPriceGun(itemIds: number[]): Promise<PriceGun> {
  const url = `https://pricegun.loathers.net/api/${itemIds.join(",")}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch prices: ${response.statusText}`);
  }

  const pricegun = await response.json();
  return PriceGunSchema.parse(pricegun);
}
