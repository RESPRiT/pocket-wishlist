import { queryOptions } from "@tanstack/react-query";
import {
  MallPriceResponseSchema,
  type MallPriceResponse,
} from "wishlist-shared";

/**
 * Fetches lowest mall prices
 */
export async function fetchMallPrices(): Promise<MallPriceResponse> {
  const url =
    "https://resprit--dd94f3deb77f11f08e0c0224a6c84d84.web.val.run/get-prices";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch mall prices: ${response.statusText}`);
  }

  const mallprices = await response.json();
  return MallPriceResponseSchema.parse(mallprices);
}

export const mallPricesQuery = queryOptions({
  queryKey: ["mallPrices"],
  queryFn: fetchMallPrices,
  staleTime: (query) => {
    // We must re-validate data in case it came from storage
    const result = MallPriceResponseSchema.safeParse(query.state.data);

    if (result.success) {
      const sinceLastUpdated = Date.now() - result.data.lastUpdated.getTime();
      return 24 * 60 * 60 * 1000 - sinceLastUpdated;
    }
    return 0;
  },
});
