import type { Price } from "@/types/data";

/**
 * Fetches prices from PriceGun API
 */
export async function fetchPriceGun(itemIds: number[]): Promise<Price[]> {
  const url = `https://pricegun.loathers.net/api/${itemIds.join(",")}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch prices: ${response.statusText}`);
  }

  return response.json();
}
