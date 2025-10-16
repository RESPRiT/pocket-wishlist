import { useState, useEffect } from "react";
import type { WishStatus } from "@/types/data";
import { fetchWishlist } from "@/api/wishlist";

export function useWishlist(userId?: string) {
  const [wishlist, setWishlist] = useState<WishStatus>({
    lastUpdated: -1,
    wishlist: {},
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadWishlist() {
      try {
        const data = await fetchWishlist(userId);
        setWishlist(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch wishlist"));
        setIsLoading(false);
      }
    }

    loadWishlist();
  }, [userId]);

  return { wishlist, isLoading, error };
}
