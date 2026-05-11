import { describe, expect, it } from "bun:test";
import {
  classifyMallResponse,
  extractLowestPrice,
  htmlEncodeForMall,
} from "./mall.ts";

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

  it("returns the minimum across multiple concatenated listings", () => {
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

  it("parses the store-link form (searchitem + searchprice)", () => {
    // Buddy Bjorn at ~1B meat — KoL omits the dotted quick-buy link for
    // very high-priced items and emits only the store-link URL form.
    const html = `<a href="mallstore.php?whichstore=812686&searchitem=7200&searchprice=1049000000">1,049,000,000</a>`;
    expect(extractLowestPrice(html)).toBe(1049000000);
  });

  it("picks the lowest across mixed URL formats", () => {
    const html = `
      <a href="mallstore.php?whichitem=194.500">x</a>
      <a href="mallstore.php?whichstore=1&searchitem=194&searchprice=300">x</a>
      <a href="mallstore.php?whichitem=194.700">x</a>
    `;
    expect(extractLowestPrice(html)).toBe(300);
  });

  it("returns null when no listings appear", () => {
    expect(extractLowestPrice("<html>No matches found</html>")).toBeNull();
  });

  it("ignores zero-price encodings (shouldn't happen but be safe)", () => {
    expect(extractLowestPrice('href="mallstore.php?whichitem=3980000000000"')).toBeNull();
  });
});

describe("htmlEncodeForMall", () => {
  it("passes ASCII through untouched", () => {
    expect(htmlEncodeForMall("Mr. Accessory")).toBe("Mr. Accessory");
    expect(htmlEncodeForMall("Buddy Bjorn")).toBe("Buddy Bjorn");
  });

  it("encodes the four characters present in iotms.ts", () => {
    expect(htmlEncodeForMall("Möbius ring box")).toBe("M&ouml;bius ring box");
    expect(htmlEncodeForMall("packaged SpinMaster™ lathe")).toBe(
      "packaged SpinMaster&trade; lathe",
    );
    expect(htmlEncodeForMall("ä é")).toBe("&auml; &eacute;");
  });

  it("leaves unknown non-ASCII chars unchanged (caller will see the silent-empty in logs)", () => {
    // ß isn't in the known set — pass through rather than guess.
    expect(htmlEncodeForMall("schloß")).toBe("schloß");
  });
});

describe("classifyMallResponse", () => {
  const mallShell = (inner: string) =>
    `<html><body><h1>Mall of Loathing</h1><form name="searchform">${inner}</form></body></html>`;

  it("returns 'listed' when listings are present", () => {
    const html = mallShell(`<a href="mallstore.php?whichitem=194.500">x</a>`);
    expect(classifyMallResponse(html)).toEqual({ kind: "listed", price: 500 });
  });

  it("returns 'empty' on a mall page with the 'no results' banner", () => {
    const html = mallShell(`<div>Sorry, no results.</div>`);
    expect(classifyMallResponse(html)).toEqual({ kind: "empty" });
  });

  it("returns 'error' when the response is a login wall", () => {
    const html = `<form><input name="loginname"><input name="password"></form>`;
    expect(classifyMallResponse(html).kind).toBe("error");
  });

  it("returns 'error' when the response doesn't look like a mall page", () => {
    const html = `<html><body><h1>fight.php</h1></body></html>`;
    expect(classifyMallResponse(html).kind).toBe("error");
  });

  it("returns 'error' when a mall page has neither listings nor 'no results' banner", () => {
    // Defensive: prefer retry over false-empty.
    const html = mallShell(`<div>something weird</div>`);
    expect(classifyMallResponse(html).kind).toBe("error");
  });
});
