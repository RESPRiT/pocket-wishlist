import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import type { WishStatus } from "@/types/data";
import { fetchWishlist } from "@/api/wishlist";

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
        const data = await fetchWishlist(userId);
        setWishlist(data);
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
