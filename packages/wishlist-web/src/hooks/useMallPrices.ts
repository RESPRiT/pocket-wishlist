import { useState, useEffect } from "react";
import { fetchMallPrices } from "@/api/mall";
import { getCachedData, setCachedData, isCacheStale } from "@/lib/cache";
import { CombinedPrice } from "wishlist-shared";

const CACHE_KEY = "prices";
const TIMESTAMP_KEY = "pricesLastUpdated";

// TODO: Change this error pattern - I would rather it just goes straight to stderr
export function useMallPrices() {
  const [mallPrices, setMallPrices] = useState<CombinedPrice>({});
  const [mallPricesLastUpdated, setMallPricesLastUpdated] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadMallPrices() {
      try {
        if (!isCacheStale(TIMESTAMP_KEY)) {
          const cached = getCachedData<CombinedPrice>(CACHE_KEY);
          if (cached) {
            setMallPrices(cached);
            setMallPricesLastUpdated(
              new Date(localStorage.getItem(TIMESTAMP_KEY) ?? -1).getTime(),
            );
            setIsLoading(false);
            return;
          }
        }

        const data = await fetchMallPrices();
        setMallPrices(data.prices);
        setMallPricesLastUpdated(data.lastUpdated.getTime());
        setCachedData(
          CACHE_KEY,
          TIMESTAMP_KEY,
          data.prices,
          String(data.lastUpdated),
        );
        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch mall prices"),
        );
        console.error("Failed to fetch mall prices", err);
        setIsLoading(false);
      }
    }

    loadMallPrices();
  }, []);

  return { mallPrices, mallPricesLastUpdated, isLoading, error };
}
