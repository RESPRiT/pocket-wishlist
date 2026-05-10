import type { IOTM } from "../../../schemas/data";
import type { MafiaDataClient, WikiClient } from "../scrape";
import {
  buildNameIndex,
  equipmentSlotFor,
  parseFamiliarsFile,
  parseItemsFile,
  parseSkillsFile,
  type MafiaFamiliar,
  type MafiaItem,
  type MafiaSkill,
} from "./mafia-data";

export type ParseItemContext = {
  packaged_name: string;
  packaged_slug: string;
  year: number;
  month?: number;
};

let cachedMafia: {
  itemsByName: Map<string, MafiaItem>;
  familiarsByName: Map<string, MafiaFamiliar>;
  skillsByName: Map<string, MafiaSkill>;
} | null = null;

async function loadMafia(mafia: MafiaDataClient) {
  if (cachedMafia) return cachedMafia;
  const [itemsRaw, famsRaw, skillsRaw] = await Promise.all([
    mafia.fetchItems(),
    mafia.fetchFamiliars(),
    mafia.fetchSkills(),
  ]);
  cachedMafia = {
    itemsByName: buildNameIndex(parseItemsFile(itemsRaw)),
    familiarsByName: buildNameIndex(parseFamiliarsFile(famsRaw)),
    skillsByName: buildNameIndex(parseSkillsFile(skillsRaw)),
  };
  return cachedMafia;
}

/**
 * Fetches and parses one IOTM and any secondary pages it links to. Tier
 * values are NOT populated here — they come from the tier-list pass.
 */
export async function parseItemPage(
  wiki: WikiClient,
  mafia: MafiaDataClient,
  ctx: ParseItemContext
): Promise<IOTM> {
  const { itemsByName, familiarsByName, skillsByName } = await loadMafia(mafia);

  // Look up the package itself in items.txt.
  const pkg = itemsByName.get(ctx.packaged_name.toLowerCase());
  if (!pkg) {
    throw new Error(
      `parseItemPage: "${ctx.packaged_name}" not found in items.txt — name mismatch with KoLmafia data`
    );
  }

  const wt = await wiki.fetchWikitext(ctx.packaged_slug);

  // Discover linked entities by scanning the wikitext for templates that
  // identify what this IOTM "becomes" when used.
  const linked = discoverLinks(wt);

  // Resolve linked names to mafia data, then sort by id ascending — that's
  // the ordering convention iotms.ts uses for multi-form arrays (e.g. the
  // 5 forms of naughty origami kit, the 5 forms of Spooky Putty).
  const opened = linked.openedItems
    .map((n) => itemsByName.get(n.toLowerCase()))
    .filter((x): x is MafiaItem => x !== undefined)
    .sort((a, b) => a.id - b.id);
  const familiars = linked.familiars
    .map((n) => familiarsByName.get(n.toLowerCase()))
    .filter((x): x is MafiaFamiliar => x !== undefined)
    .sort((a, b) => a.id - b.id);
  const skills = linked.skills
    .map((n) => skillsByName.get(n.toLowerCase()))
    .filter((x): x is MafiaSkill => x !== undefined)
    .sort((a, b) => a.id - b.id);

  // Type discrimination, in priority order. Strong signals (skill / familiar
  // links) take precedence over wikitext heuristics.
  const type = inferType({ wt, pkg, hasOpened: opened.length > 0, hasFamiliar: familiars.length > 0, hasSkill: skills.length > 0 });

  // iotms.ts img convention: always the package image. (A handful of recent
  // entries use the opened/familiar image instead, but the overwhelming
  // majority — including all old familiar IOTMs — use the package.)
  const img = pkg.image;

  // Equipment slot: only relevant for item-type IOTMs whose opened/headline
  // form is wearable equipment. Read it from the appropriate items.txt row.
  const headlineItem = opened[0] ?? pkg;
  const equipment_slot = equipmentSlotFor(headlineItem);

  // Tradeable: KoLmafia's `t` access flag indicates mall-tradeable, but
  // iotms.ts uses a stricter notion (related to whether the IOTM as a whole
  // can be exchanged among players, which depends on Mr. A trade rules and
  // is not derivable from items.txt alone). Default to false; the human
  // reviewer flips for the rare tradeable IOTMs.
  const tradeable = false;

  const isIoty = ctx.month === undefined;

  const result: IOTM = {
    packaged_id: pkg.id,
    packaged_name: pkg.name,
    year: ctx.year,
    tradeable,
    type,
    img,
  };

  if (ctx.month !== undefined) result.month = ctx.month;

  if (opened.length === 1) {
    result.opened_ids = opened[0]!.id;
    result.opened_names = opened[0]!.name;
  } else if (opened.length > 1) {
    result.opened_ids = opened.map((o) => o.id);
    result.opened_names = opened.map((o) => o.name);
  }

  if (familiars.length === 1) {
    result.familiar_ids = familiars[0]!.id;
    result.familiar_names = familiars[0]!.name;
  } else if (familiars.length > 1) {
    result.familiar_ids = familiars.map((f) => f.id);
    result.familiar_names = familiars.map((f) => f.name);
  }

  if (skills.length === 1) {
    result.skill_ids = skills[0]!.id;
    result.skill_names = skills[0]!.name;
  } else if (skills.length > 1) {
    result.skill_ids = skills.map((s) => s.id);
    result.skill_names = skills.map((s) => s.name);
  }

  if (equipment_slot !== undefined) result.equipment_slot = equipment_slot;
  if (isIoty) result.is_ioty = true;

  return result;
}

type Linked = {
  openedItems: string[];
  familiars: string[];
  skills: string[];
};

/**
 * Scans IOTM-package wikitext for the templates that reveal what the package
 * "becomes". Three patterns cover essentially every modern IOTM:
 *
 *   {{useitem|...|type=familiar|fname=Foo|becomes=PackageItem}}
 *   {{useitem|...|becomes=OpenedItem}}
 *   {{Mystic Book|skill=SkillName}}
 *
 * Older or one-off packages can also use:
 *
 *   {{acquire|item=foo|num=N}}    — explicit grant inside a useitem text
 *   ;Item :[[opened name]]         — "Obtained From" reverse links from the
 *                                    opened-item page; not seen on packages
 *
 * The order of returned items matches the order of appearance, which matters
 * for multi-form packages (e.g. naughty origami kit → 5 items).
 */
function discoverLinks(wt: string): Linked {
  const openedItems: string[] = [];
  const familiars: string[] = [];
  const skills: string[] = [];

  // {{useitem|...}} blocks can span multiple lines. Extract each whole block
  // by counting balanced braces from "{{useitem".
  for (const block of extractTemplateBlocks(wt, "useitem")) {
    const args = parseTemplateArgs(block);
    if (args.type === "familiar") {
      // The package opens a familiar. `becomes` is the familiar's species
      // name (canonical); `fname` is sometimes a templated placeholder for
      // the user's chosen nickname, so it's not safe to rely on.
      const famName = args.becomes ?? args.fname;
      if (famName) familiars.push(stripWikitext(famName));
    } else if (args.becomes) {
      openedItems.push(stripWikitext(args.becomes));
    }
  }

  // {{Mystic Book|skill=Foo}} for tomes/librams.
  for (const block of extractTemplateBlocks(wt, "Mystic Book")) {
    const args = parseTemplateArgs(block);
    if (args.skill) skills.push(stripWikitext(args.skill));
  }

  // {{acquire|item=foo|...}} inside useitem text — used for packages that
  // explicitly hand you specific items on use (e.g. naughty origami kit).
  // Only count if no `becomes=` was found (otherwise we double-count).
  if (openedItems.length === 0) {
    for (const block of extractTemplateBlocks(wt, "acquire")) {
      const args = parseTemplateArgs(block);
      if (args.item) openedItems.push(stripWikitext(args.item));
    }
  }

  return { openedItems, familiars, skills };
}

/** Extract `{{name|...}}` blocks (brace-balanced) from wikitext. */
function extractTemplateBlocks(wt: string, name: string): string[] {
  const blocks: string[] = [];
  const opener = `{{${name}`;
  let i = 0;
  while (i < wt.length) {
    const start = wt.indexOf(opener, i);
    if (start < 0) break;
    // The next char must be `|` or `}` to confirm template name boundary
    // (so "{{Mr Store" doesn't match "{{Mr Store 2026}}").
    const after = wt[start + opener.length];
    if (after !== "|" && after !== "}" && after !== "\n" && after !== " ") {
      i = start + opener.length;
      continue;
    }
    let depth = 1;
    let j = start + 2; // after the initial `{{`
    while (j < wt.length && depth > 0) {
      if (wt[j] === "{" && wt[j + 1] === "{") {
        depth++;
        j += 2;
      } else if (wt[j] === "}" && wt[j + 1] === "}") {
        depth--;
        j += 2;
      } else {
        j++;
      }
    }
    blocks.push(wt.slice(start, j));
    i = j;
  }
  return blocks;
}

/**
 * Parses `{{name|key=val|...|positional|key2=val2}}` into a flat record. We
 * only care about named arguments (the link-discovery patterns all use them).
 * Whitespace around keys/values is trimmed; nested templates inside values
 * are preserved intact.
 */
function parseTemplateArgs(block: string): Record<string, string> {
  // Strip outer `{{` `}}`.
  const inner = block.slice(2, -2);
  // Split on `|` at depth 0 (don't split inside nested templates / links).
  const parts: string[] = [];
  let depth = 0;
  let buf = "";
  for (let i = 0; i < inner.length; i++) {
    const c = inner[i]!;
    const next = inner[i + 1];
    if (c === "{" && next === "{") {
      depth++;
      buf += "{{";
      i++;
      continue;
    }
    if (c === "}" && next === "}") {
      depth--;
      buf += "}}";
      i++;
      continue;
    }
    if (c === "[" && next === "[") {
      depth++;
      buf += "[[";
      i++;
      continue;
    }
    if (c === "]" && next === "]") {
      depth--;
      buf += "]]";
      i++;
      continue;
    }
    if (c === "|" && depth === 0) {
      parts.push(buf);
      buf = "";
      continue;
    }
    buf += c;
  }
  parts.push(buf);
  // First part is the template name; skip it.
  const args: Record<string, string> = {};
  for (const p of parts.slice(1)) {
    const eq = p.indexOf("=");
    if (eq < 0) continue;
    const key = p.slice(0, eq).trim();
    const value = p.slice(eq + 1).trim();
    args[key] = value;
  }
  return args;
}

/** Strip wiki link syntax `[[Foo]]` / `[[Foo|Bar]]` to plain text. */
function stripWikitext(s: string): string {
  return s
    .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .trim();
}

function inferType(args: {
  wt: string;
  pkg: MafiaItem;
  hasOpened: boolean;
  hasFamiliar: boolean;
  hasSkill: boolean;
}): string {
  if (args.hasFamiliar) return "familiar";
  if (args.hasSkill) return "skill";

  // Heuristics for non-equipment item subtypes.
  // VIP lounge items cost 3 Mr. Accessories instead of the usual 1.
  if (/3 \[\[Mr\. Accessor/.test(args.wt) || /Clan VIP Lounge/i.test(args.wt)) return "vip";

  // Campground items install themselves at the campsite when used.
  if (/(your |the )?campsite|campground/i.test(args.wt) && /workshed|garden|patch|installs?/i.test(args.wt))
    return "campground";

  // Eudora subscriptions show up under the Eudora menu after use.
  if (/[Ee]udora|subscription/.test(args.wt)) return "eudora";

  return "item";
}
