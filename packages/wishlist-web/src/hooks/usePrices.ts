import { useState, useEffect } from "react";
import { fetchPriceGun } from "@/api/prices";
import { getCachedData, setCachedData, isCacheStale } from "@/lib/cache";
import { PriceGun } from "wishlist-shared";

const CACHE_KEY = "prices";
const TIMESTAMP_KEY = "pricesLastUpdated";

export function usePrices(itemIds: number[]) {
  const [prices, setPrices] = useState<PriceGun[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadPrices() {
      try {
        if (!isCacheStale(TIMESTAMP_KEY)) {
          const cached = getCachedData<PriceGun[]>(CACHE_KEY);
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
        console.error("Failed to fetch PriceGun prices", err);
        setIsLoading(false);
      }
    }

    loadPrices();
  }, [itemIds]);

  return { prices, isLoading, error };
}
