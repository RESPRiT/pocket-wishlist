import { createContext, useState, useEffect, ReactNode } from "react";
import { fetchWishlist } from "@/api/wishlist";
import { WishlistResponse, type Wishlist } from "wishlist-shared";

interface WishlistContextType {
  wishlist: Wishlist;
  username: string;
  userId: number;
  lastUpdated: number;
  isLoading: boolean;
  error: Error | null;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

const WishlistProvider = ({
  children,
  userId,
}: {
  children: ReactNode;
  userId?: string;
}) => {
  const [wishlist, setWishlist] = useState<WishlistResponse>({
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
        console.error(err);
        setIsLoading(false);
      }
    }

    loadWishlist();
  }, [userId]);

  return (
    <WishlistContext value={{ ...wishlist, isLoading, error }}>
      {children}
    </WishlistContext>
  );
};

export { WishlistContext, WishlistProvider };
