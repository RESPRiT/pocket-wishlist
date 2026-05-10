/**
 * Parsers for KoLmafia's tab-separated data files. We only extract the
 * fields needed to populate iotms.ts — id, name, image, primary use,
 * tradeable flag — and ignore the rest.
 */

export type MafiaItem = {
  id: number;
  name: string;
  image: string;
  /** Comma-separated primary uses, e.g. "weapon, paste, smith" or "familiar". */
  use: string;
  /** Comma-separated access flags. `t`=tradeable, `d`=discardable, `q`=quest, `g`=gift. */
  access: string;
};

export type MafiaFamiliar = {
  id: number;
  name: string;
  image: string;
};

export type MafiaSkill = {
  id: number;
  name: string;
  image: string;
};

const EQUIPMENT_USES = new Set([
  "hat",
  "weapon",
  "offhand",
  "container",
  "shirt",
  "pants",
  "accessory",
  "familiar",
]);
// (iotms.ts has one item — the cosmic bowling ball — with
// equipment_slot="combat", which doesn't correspond to any KoLmafia use
// flag. We don't try to detect it; the human reviewer fills it in.)

function parseTsvLines(raw: string): string[][] {
  return raw
    .split("\n")
    .filter((l) => l.length > 0 && !l.startsWith("#") && !/^\d+$/.test(l))
    .map((l) => l.split("\t").map(decodeEntities));
}

/**
 * KoLmafia data files encode a few characters as HTML entities (e.g.
 * `MayDay&trade; contract` rather than `MayDay™ contract`). The wishlist
 * data uses the literal Unicode characters, so we decode at parse time.
 */
function decodeEntities(s: string): string {
  return s
    .replace(/&trade;/g, "™")
    .replace(/&reg;/g, "®")
    .replace(/&copy;/g, "©")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCharCode(parseInt(n, 16)));
}

export function parseItemsFile(raw: string): MafiaItem[] {
  return parseTsvLines(raw)
    .filter((cols) => cols.length >= 6 && /^\d+$/.test(cols[0]!))
    .map((cols) => ({
      id: Number(cols[0]),
      name: cols[1]!,
      image: cols[3]!,
      use: cols[4] ?? "",
      access: cols[5] ?? "",
    }));
}

export function parseFamiliarsFile(raw: string): MafiaFamiliar[] {
  return parseTsvLines(raw)
    .filter((cols) => cols.length >= 3 && /^\d+$/.test(cols[0]!))
    .map((cols) => ({
      id: Number(cols[0]),
      name: cols[1]!,
      image: cols[2]!,
    }));
}

export function parseSkillsFile(raw: string): MafiaSkill[] {
  return parseTsvLines(raw)
    .filter((cols) => cols.length >= 3 && /^\d+$/.test(cols[0]!))
    .map((cols) => ({
      id: Number(cols[0]),
      name: cols[1]!,
      image: cols[2]!,
    }));
}

/**
 * Determine the equipment slot for an item, if any. Reads the primary-use
 * column for one of the equipment-shaped values listed in items.txt's
 * header. Translates KoLmafia's "container" → "back" so we match the
 * naming iotms.ts (and modern KoL) uses for the back-equipment slot.
 */
export function equipmentSlotFor(item: MafiaItem): string | undefined {
  const uses = item.use.split(",").map((u) => u.trim());
  const raw = uses.find((u) => EQUIPMENT_USES.has(u));
  if (raw === "container") return "back";
  return raw;
}

/**
 * Build a case-insensitive name → record lookup. KoL item names are
 * normally case-sensitive, but the wiki and tier sheets aren't always
 * consistent about it, so we normalize on lookup.
 */
export function buildNameIndex<T extends { name: string }>(records: readonly T[]): Map<string, T> {
  const index = new Map<string, T>();
  for (const r of records) index.set(r.name.toLowerCase(), r);
  return index;
}
