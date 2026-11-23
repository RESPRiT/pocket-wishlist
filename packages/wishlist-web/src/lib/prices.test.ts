import { describe, expect, test } from "bun:test";
import { getMallPrice, getMrARatio } from "./prices";

const MR_A = 76_650_000;

describe("getMallPrice", () => {
  test("no sales history falls back to the lowest mall listing", () => {
    // unopened legendary acorndion on release: listed, never sold
    expect(getMallPrice({ lowestMall: 76_697_000 })).toEqual({
      status: "lowestMall",
      price: 76_697_000,
    });
  });

  test("recent sales above the lowest listing use the sales average", () => {
    expect(
      getMallPrice({ lowestMall: 70_000_000, value: 78_000_000, volume: 23 }),
    ).toEqual({ status: "recentSales", price: 78_000_000 });
  });

  test("recent sales below the lowest listing use the listing", () => {
    expect(
      getMallPrice({ lowestMall: 80_000_000, value: 78_000_000, volume: 23 }),
    ).toEqual({ status: "lowestMall", price: 80_000_000 });
  });

  test("zero-volume sales data is ignored", () => {
    expect(
      getMallPrice({ lowestMall: 80_000_000, value: 90_000_000, volume: 0 }),
    ).toEqual({ status: "lowestMall", price: 80_000_000 });
  });

  test("extinct with no sales history is unknown", () => {
    expect(getMallPrice({ lowestMall: -1 })).toEqual({
      status: "extinct",
      price: -1,
    });
  });

  test("extinct but with recent sales uses the sales average", () => {
    expect(
      getMallPrice({ lowestMall: -1, value: 500_000_000, volume: 2 }),
    ).toEqual({ status: "recentSales", price: 500_000_000 });
  });

  test("missing price entry is unknown", () => {
    expect(getMallPrice(null).price).toBe(-1);
  });
});

describe("getMrARatio", () => {
  test("no sales history yields a finite ratio", () => {
    expect(getMrARatio({ lowestMall: 76_697_000 }, MR_A)).toBeCloseTo(1.0006, 3);
  });

  test("unknown prices are infinitely expensive", () => {
    expect(getMrARatio({ lowestMall: -1 }, MR_A)).toBe(Infinity);
    expect(getMrARatio(null, MR_A)).toBe(Infinity);
  });
});
