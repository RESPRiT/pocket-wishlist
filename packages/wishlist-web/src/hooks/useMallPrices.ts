import { mallPricesQuery } from "@/api/mall";
import { useQuery } from "@tanstack/react-query";

export function useMallPrices() {
  const { data, isPending, error } = useQuery(mallPricesQuery);

  return {
    mallPrices: data ? data.prices : {},
    mallPricesLastUpdated: data ? data.lastUpdated : -1,
    isPending,
    error,
  };
}
