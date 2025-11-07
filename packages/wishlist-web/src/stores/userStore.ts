import { create } from "zustand";
import { persist } from "zustand/middleware";

type ControlStore = {
  currentSort: string;
  currentOrder: boolean;
  setSort: (sort: string) => void;
  setOrder: (direction: boolean) => void;
};

export const useStore = create<ControlStore>()(
  persist(
    (set) => ({
      currentSort: "date",
      currentOrder: false,
      setSort: (sort: string) => set(() => ({ currentSort: sort })),
      setOrder: (direction: boolean) =>
        set(() => ({ currentOrder: direction })),
    }),
    {
      name: "wishlist-store", // in localStorage by default
    },
  ),
);
