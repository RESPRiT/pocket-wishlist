import { mallPricesQuery } from "@/api/mall";
import { useSuspenseQuery } from "@tanstack/react-query";
import { MallPriceResponseSchema } from "wishlist-shared";

export function useMallPrices() {
  const { data, isPending, error } = useSuspenseQuery(mallPricesQuery);

  // We must re-validate data in case it came from storage
  const result =
    isPending || error
      ? {
          prices: {},
          lastUpdated: new Date(),
        }
      : MallPriceResponseSchema.parse(data);

  return {
    mallPrices: result.prices,
    mallPricesLastUpdated: result.lastUpdated,
    isPending,
    error,
  };
}
