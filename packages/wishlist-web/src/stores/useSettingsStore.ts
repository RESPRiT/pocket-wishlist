import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SettingsStore = {
  currentSort: string;
  currentOrder: boolean;
  setSort: (sort: string) => void;
  setOrder: (direction: boolean) => void;
};

export const useSettingsStore = create<SettingsStore>()(
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
      skipHydration: true, // doesn't hydrate immediately bc of SSR
    },
  ),
);

// puts hydration in useEffect so that it's client-side
export const useHydratedSettingsStore = () => {
  useEffect(() => {
    useSettingsStore.persist.rehydrate();
  }, []);

  return useSettingsStore();
};
