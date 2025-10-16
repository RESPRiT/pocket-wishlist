import { useState, useEffect } from "react";
import type { Price } from "@/types/data";
import { fetchPriceGun } from "@/api/prices";
import { getCachedData, setCachedData, isCacheStale } from "@/lib/cache";

const CACHE_KEY = "prices";
const TIMESTAMP_KEY = "pricesLastUpdated";

export function usePrices(itemIds: number[]) {
  const [prices, setPrices] = useState<Price[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadPrices() {
      try {
        if (!isCacheStale(TIMESTAMP_KEY)) {
          const cached = getCachedData<Price[]>(CACHE_KEY);
          if (cached) {
            setPrices(cached);
            setIsLoading(false);
            return;
          }
        }

        const data = await fetchPriceGun(itemIds);
        setPrices(data);
        setCachedData(CACHE_KEY, TIMESTAMP_KEY, data);
        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch prices")
        );
        setIsLoading(false);
      }
    }

    loadPrices();
  }, [itemIds]);

  return { prices, isLoading, error };
}
