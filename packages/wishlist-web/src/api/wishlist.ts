import { queryOptions } from "@tanstack/react-query";
import { WishlistResponse, WishlistResponseSchema } from "wishlist-shared";

/**
 * Fetches user wishlist status
 * TODO: Un-hardcode user ID
 */
export async function fetchWishlist(
  userId: number = 1927026,
): Promise<WishlistResponse> {
  const url = `https://resprit--dd94f3deb77f11f08e0c0224a6c84d84.web.val.run/get-wishlist?u=${userId}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch wishlist: ${response.statusText}`);
  }

  const wishlist = await response.json();
  return WishlistResponseSchema.parse(wishlist);
}

export const wishlistQuery = (userId: number) =>
  queryOptions({
    queryKey: ["wishlist", userId],
    queryFn: () => fetchWishlist(userId),
  });
