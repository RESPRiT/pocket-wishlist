import { Wishlist, WishlistSchema } from "wishlist-shared";

/**
 * Fetches user wishlist status
 * TODO: Un-hardcode user ID
 */
export async function fetchWishlist(
  userId: string = "1927026"
): Promise<Wishlist> {
  const url = `https://resprit--dd94f3deb77f11f08e0c0224a6c84d84.web.val.run/get-wishlist?u=${userId}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch wishlist: ${response.statusText}`);
  }

  const wishlist = await response.json();
  return WishlistSchema.parse(wishlist);
}
