import { useState, useEffect } from "react";
import { fetchMallPrices } from "@/api/mall";
import { getCachedData, setCachedData, isCacheStale } from "@/lib/cache";
import { MallPrice } from "wishlist-shared";

const CACHE_KEY = "mall";
const TIMESTAMP_KEY = "mallLastUpdated";

export function useMallPrices() {
  const [mallPrices, setMallPrices] = useState<MallPrice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadMallPrices() {
      try {
        if (!isCacheStale(TIMESTAMP_KEY)) {
          const cached = getCachedData<MallPrice[]>(CACHE_KEY);
          if (cached) {
            setMallPrices(cached);
            setIsLoading(false);
            return;
          }
        }

        const data = await fetchMallPrices();
        setMallPrices(data);
        setCachedData(CACHE_KEY, TIMESTAMP_KEY, data);
        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch mall prices")
        );
        setIsLoading(false);
      }
    }

    loadMallPrices();
  }, []);

  return { mallPrices, isLoading, error };
}
