import { toggleWishlistMutation, wishlistQuery } from "@/api/wishlist";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { createContext, ReactNode, use } from "react";
import { WishlishToggleRequest, type Wishlist } from "wishlist-shared";

type WishlistContextType = {
  wishlist: Wishlist;
  toggleWishlist: ({
    itemUpdates,
    auth,
  }: {
    itemUpdates: WishlishToggleRequest["itemUpdates"];
    auth: WishlishToggleRequest["auth"];
  }) => void;
  username: string;
  userId: number;
  lastUpdated: number;
  isPending: boolean;
  error: Error | null;
};

const WishlistContext = createContext<WishlistContextType>({
  wishlist: {},
  toggleWishlist: () => {},
  username: "",
  userId: -1,
  lastUpdated: -1,
  isPending: false,
  error: null,
});

// TODO: Even though this should be resolved by the time
// we get it via SSR, we should re-validate persisted data
export const WishlistProvider = ({
  children,
  userId,
}: {
  children: ReactNode;
  userId: number;
}) => {
  const { data, isPending } = useSuspenseQuery(wishlistQuery(userId));
  const wishlistMutation = useMutation(toggleWishlistMutation(userId));

  // some cursed error handling stuff going on here
  const value = {
    username: "",
    wishlist: {},
    lastUpdated: -1,
    error: null,
    ...(data ?? {
      userId,
    }),
  };

  return (
    <WishlistContext
      value={{
        ...value,
        isPending,
        error: value.error,
        toggleWishlist: wishlistMutation.mutate,
      }}
    >
      {children}
    </WishlistContext>
  );
};

export const useWishlist = () => {
  const context = use(WishlistContext);

  if (context === undefined) {
    throw new Error("useWishlist used outside of a WishlistProvider");
  }

  return context;
};
