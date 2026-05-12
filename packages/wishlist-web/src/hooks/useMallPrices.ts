import { mallPricesQuery } from "@/api/mall";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { MallPriceResponseSchema } from "wishlist-shared";

export function useMallPrices() {
  const { data, isPending, error } = useSuspenseQuery(mallPricesQuery);

  // Re-validate data in case it came from storage. Memoize on the raw `data`
  // reference: `MallPriceResponseSchema.parse(data)` produces a new object
  // every call, and downstream consumers (e.g. List) put `mallPrices` in
  // useMemo deps — without memoization here the deps change every render
  // and trigger setState cascades that exceed React's re-render limit.
  const result = useMemo(
    () =>
      isPending || error
        ? { prices: {}, lastUpdated: new Date() }
        : MallPriceResponseSchema.parse(data),
    [data, isPending, error],
  );

  return {
    mallPrices: result.prices,
    mallPricesLastUpdated: result.lastUpdated,
    isPending,
    error,
  };
}
