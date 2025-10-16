import type { WishStatus } from "@/types/data";

/**
 * Fetches user wishlist status
 * TODO: Un-hardcode user ID
 */
export async function fetchWishlist(userId: string = "1927026"): Promise<WishStatus> {
  const url = `https://resprit--94d09ed2946611f08e910224a6c84d84.web.val.run/get-wishlist?u=${userId}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch wishlist: ${response.statusText}`);
  }

  return response.json();
}
