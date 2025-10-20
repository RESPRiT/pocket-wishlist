export type Price = {
  value: number;
  volume: number;
  date: Date;
  itemId: number;
  tradeable?: boolean;
};

export type WishStatus = {
  username: string;
  userId: number;
  wishlist: Record<number, "NONE" | "PACKAGED" | "OPENED">;
  lastUpdated: number;
};
