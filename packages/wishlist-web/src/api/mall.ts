import type { MallPrice } from "@/data";

/**
 * Fetches lowest mall prices
 */
export async function fetchMallPrices(): Promise<MallPrice[]> {
  const url = "https://resprit--3e24629c912a11f0b6710224a6c84d84.web.val.run/lowest-mall";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch mall prices: ${response.statusText}`);
  }

  return response.json();
}
