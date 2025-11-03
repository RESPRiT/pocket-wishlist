import { PriceGunResponse, PriceGunResponseSchema } from "wishlist-shared";

/**
 * Fetches prices from PriceGun API
 */
export async function fetchPriceGun(
  itemIds: number[]
): Promise<PriceGunResponse> {
  const url = `https://pricegun.loathers.net/api/${itemIds.join(",")}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch prices: ${response.statusText}`);
  }

  const pricegun = await response.json();
  return PriceGunResponseSchema.parse(pricegun);
}
