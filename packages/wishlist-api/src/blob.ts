// In-memory stub matching Val Town's blob API surface.
// Replaced by SQLite-backed storage in pocket-wishlist-ubs.
const store = new Map<string, unknown>();

export const blob = {
  getJSON: async <T = unknown>(key: string): Promise<T | undefined> => {
    return store.get(key) as T | undefined;
  },
  setJSON: async (key: string, value: unknown): Promise<void> => {
    store.set(key, value);
  },
};
