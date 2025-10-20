import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import type { WishStatus } from "@/types/data";
import { fetchWishlist } from "@/api/wishlist";
import { getCachedData, setCachedData, isCacheStale } from "@/lib/cache";

const WISHLIST_KEY = "wishlist";
const TIMESTAMP_KEY = "wishlistLastUpdated";
const USERNAME_KEY = "wishlistUsername";
const USER_ID_KEY = "wishlistUserId";

interface WishlistContextType {
  wishlist: WishStatus;
  isLoading: boolean;
  error: Error | null;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({
  children,
  userId,
}: {
  children: ReactNode;
  userId?: string;
}) {
  const [wishlist, setWishlist] = useState<WishStatus>({
    username: "",
    userId: -1,
    wishlist: {},
    lastUpdated: -1,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadWishlist() {
      try {
        if (!isCacheStale(TIMESTAMP_KEY)) {
          const cachedWishlist =
            getCachedData<Record<number, "NONE" | "PACKAGED" | "OPENED">>(
              WISHLIST_KEY
            );
          const cachedUsername = getCachedData<string>(USERNAME_KEY);
          const cachedUserId = getCachedData<number>(USER_ID_KEY);
          const cachedTimestamp = getCachedData<number>(TIMESTAMP_KEY);

          if (
            cachedWishlist &&
            cachedUsername &&
            cachedUserId &&
            cachedTimestamp
          ) {
            setWishlist({
              username: cachedUsername,
              userId: cachedUserId,
              wishlist: cachedWishlist,
              lastUpdated: cachedTimestamp,
            });
            setIsLoading(false);
            return;
          }
        }

        const data = await fetchWishlist(userId);
        setWishlist(data);

        // Store each field separately in localStorage
        setCachedData(
          WISHLIST_KEY,
          TIMESTAMP_KEY,
          data.wishlist,
          String(data.lastUpdated ?? Date.now())
        );
        // TODO: How do we feel about setCachedData? Awkward here
        localStorage.setItem(USERNAME_KEY, JSON.stringify(data.username));
        localStorage.setItem(USER_ID_KEY, JSON.stringify(data.userId));

        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch wishlist")
        );
        setIsLoading(false);
      }
    }

    loadWishlist();
  }, [userId]);

  return (
    <WishlistContext.Provider value={{ wishlist, isLoading, error }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlistContext() {
  const context = useContext(WishlistContext);
  if (context === null) {
    throw new Error(
      "useWishlistContext must be used within a WishlistProvider"
    );
  }
  return context;
}
