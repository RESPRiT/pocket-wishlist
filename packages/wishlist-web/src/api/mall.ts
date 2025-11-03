import {
  MallPriceResponseSchema,
  type MallPriceResponse,
} from "wishlist-shared";

/**
 * Fetches lowest mall prices
 */
export async function fetchMallPrices(): Promise<MallPriceResponse> {
  const url =
    "https://resprit--dd94f3deb77f11f08e0c0224a6c84d84.web.val.run/lowest-mall";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch mall prices: ${response.statusText}`);
  }

  const mallprices = await response.json();
  return MallPriceResponseSchema.parse(mallprices);
}
