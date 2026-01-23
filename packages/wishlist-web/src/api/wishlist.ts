import { mutationOptions, queryOptions } from "@tanstack/react-query";
import {
  WishlishToggleRequest,
  WishlistResponse,
  WishlistResponseSchema,
} from "wishlist-shared";

/**
 * Fetches user wishlist status
 */
async function fetchWishlist(userId: number): Promise<WishlistResponse> {
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
    staleTime: 5000, // prevent client for immediately refetching
    refetchOnWindowFocus: false, // a bit much
  });

export async function requestWishlistToggle(
  body: WishlishToggleRequest,
): Promise<WishlishToggleRequest["itemUpdates"]> {
  const url = `https://resprit--dd94f3deb77f11f08e0c0224a6c84d84.web.val.run/toggle-wishlist`;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch wishlist: ${response.statusText}`);
  }

  return response.json();
}

export const toggleWishlistMutation = (userId: number) =>
  mutationOptions({
    mutationFn: ({
      itemUpdates,
      auth = "",
    }: {
      itemUpdates: WishlishToggleRequest["itemUpdates"];
      auth: WishlishToggleRequest["auth"];
    }) => requestWishlistToggle({ userId, auth, itemUpdates }),
    onMutate: async (
      {
        itemUpdates,
        auth,
      }: {
        itemUpdates: WishlishToggleRequest["itemUpdates"];
        auth: WishlishToggleRequest["auth"];
      },
      context,
    ) => {
      const prevWishlist: WishlistResponse | undefined =
        context.client.getQueryData(["wishlist", userId]);

      if (prevWishlist === undefined)
        throw new Error("Couldn't update wishlist");

      const updatedWishlist = structuredClone(prevWishlist);

      itemUpdates.forEach(({ id, status }) => {
        updatedWishlist.wishlist[id] = status ? "WISHED" : "NONE";
      });

      context.client.setQueryData(["wishlist", userId], updatedWishlist);

      return { prevWishlist };
    },
    onError: async (_err, _vars, result, context) => {
      context.client.setQueryData(["wishlist", userId], result?.prevWishlist);
    },
  });
