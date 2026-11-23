import { describe, expect, test } from "bun:test";
import type { ListEntryProps } from "@/components/ListEntry";
import type { Price } from "wishlist-shared";
import { getSortFunction } from "./sortWishlist";

const entry = (name: string, price: Price | null) =>
  ({ name, price, year: 2026, month: 1 }) as ListEntryProps;

describe("price sort", () => {
  test("entries without sales history sort by their lowest listing", () => {
    const sorted = [
      entry("pricey", {
        lowestMall: 900_000_000,
        value: 950_000_000,
        volume: 3,
      }),
      entry("extinct", { lowestMall: -1 }),
      entry("no sales", { lowestMall: 76_697_000 }),
      entry("unpriced", null),
      entry("mid", { lowestMall: 150_000_000, value: 160_000_000, volume: 9 }),
    ].sort(getSortFunction("price"));

    expect(sorted.map((e) => e.name)).toEqual([
      "no sales",
      "mid",
      "pricey",
      "extinct",
      "unpriced",
    ]);
  });
});
