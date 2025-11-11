import { wishlistQuery } from "@/api/wishlist";
import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, use } from "react";
import { type Wishlist } from "wishlist-shared";

type WishlistContextType = {
  wishlist: Wishlist;
  username: string;
  userId: number;
  lastUpdated: number;
  isPending: boolean;
  error: Error | null;
};

const WishlistContext = createContext<WishlistContextType>({
  wishlist: {},
  username: "",
  userId: -1,
  lastUpdated: -1,
  isPending: false,
  error: null,
});

export const WishlistProvider = ({
  children,
  userId = 1927026,
}: {
  children: ReactNode;
  userId?: number;
}) => {
  const { data, isPending, error } = useQuery(wishlistQuery(userId));

  const value = {
    ...(data ?? { username: "", userId: -1, wishlist: {}, lastUpdated: -1 }),
    isPending,
    error,
  };

  return <WishlistContext value={value}>{children}</WishlistContext>;
};

export const useWishlist = () => {
  const context = use(WishlistContext);

  if (context === undefined) {
    throw new Error("useWishlist used outside of a WishlistProvider");
  }

  return context;
};
