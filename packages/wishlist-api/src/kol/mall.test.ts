import { describe, expect, it } from "bun:test";
import { extractLowestPrice } from "./mall.ts";

describe("extractLowestPrice", () => {
  it("parses the dot-separated whichitem form (live KoL format)", () => {
    // Real fragment from mall.html — Mr. A at 63,822,000 meat
    const html = `mallstore.php?buying=1&quantity=1&whichitem=194.63822000&ajax=1&pwd=abc`;
    expect(extractLowestPrice(html)).toBe(63822000);
  });

  it("picks the minimum across several dot-form listings", () => {
    const html = `
      <a href="mallstore.php?whichitem=3980.4455">x</a>
      <a href="mallstore.php?whichitem=3980.5000">x</a>
      <a href="mallstore.php?whichitem=3980.1500">x</a>
    `;
    expect(extractLowestPrice(html)).toBe(1500);
  });

  it("returns the minimum across multiple listings", () => {
    // itemId=3980 across three stores at 4455, 5000, 9999 unit prices
    const html = `
      <a href="mallstore.php?buying=1&whichitem=3980000004455&whichstore=1">x</a>
      <a href="mallstore.php?buying=1&whichitem=3980000005000&whichstore=2">x</a>
      <a href="mallstore.php?buying=1&whichitem=3980000009999&whichstore=3">x</a>
    `;
    expect(extractLowestPrice(html)).toBe(4455);
  });

  it("handles itemIds of varying length via modulo split", () => {
    // itemId=12345 (5 digits) with price 1000000 -> encoded 12345001000000
    // itemId=42 (2 digits) with price 200 -> encoded 42000000200
    const html = `
      <a href="mallstore.php?whichitem=12345001000000">x</a>
      <a href="mallstore.php?whichitem=42000000200">x</a>
    `;
    expect(extractLowestPrice(html)).toBe(200);
  });

  it("returns null when no listings appear", () => {
    expect(extractLowestPrice("<html>No matches found</html>")).toBeNull();
  });

  it("ignores zero-price encodings (shouldn't happen but be safe)", () => {
    expect(extractLowestPrice('href="mallstore.php?whichitem=3980000000000"')).toBeNull();
  });
});
