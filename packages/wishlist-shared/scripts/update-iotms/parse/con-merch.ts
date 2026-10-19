/**
 * Parses the "KoL Con 13 Merch Table" wiki page — the in-game store (in the
 * Time-Twitching Tower) where convention-exclusive IOTMs are sold — into the
 * packaged names it offers for Mr. Accessories. Items priced in other
 * currencies (e.g. Chroner) aren't IOTMs and are left out.
 *
 * The page carries no release dates, so the caller supplies the year.
 */
export function parseConMerch(wikitext: string): string[] {
  const names: string[] = [];
  for (const m of wikitext.matchAll(/\{\{StoreItem\|([^}]*)\}\}/g)) {
    const params = new Map<string, string>();
    for (const part of m[1]!.split("|")) {
      const eq = part.indexOf("=");
      if (eq > 0)
        params.set(part.slice(0, eq).trim(), part.slice(eq + 1).trim());
    }
    const item = params.get("item");
    if (item && params.get("currency") === "Mr. Accessory") names.push(item);
  }
  return names;
}
