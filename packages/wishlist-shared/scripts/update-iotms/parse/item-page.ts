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
import { TRADEABLE_CUTOFF_YEAR, TRADEABLE_PACKAGED_IDS } from "./tradeable-overrides";

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

export type ParseItemResult = {
  iotm: IOTM;
  /** Field names whose values came from a heuristic fallback rather than a
   * confident detection. Codegen surfaces these as TODO comments. */
  needsReview: readonly (keyof IOTM)[];
};

/**
 * Fetches and parses one IOTM and any secondary pages it links to. Tier
 * values are NOT populated here — they come from the tier-list pass.
 *
 * Returns the IOTM directly. To get the heuristic-fallback flags, call
 * `parseItemPageWithReview()` instead.
 */
export async function parseItemPage(
  wiki: WikiClient,
  mafia: MafiaDataClient,
  ctx: ParseItemContext
): Promise<IOTM> {
  return (await parseItemPageWithReview(wiki, mafia, ctx)).iotm;
}

/** Like {@link parseItemPage} but also returns the list of fields whose
 * values came from a heuristic fallback. */
export async function parseItemPageWithReview(
  wiki: WikiClient,
  mafia: MafiaDataClient,
  ctx: ParseItemContext
): Promise<ParseItemResult> {
  const { itemsByName, familiarsByName, skillsByName } = await loadMafia(mafia);

  // Look up the package itself in items.txt.
  const pkg = itemsByName.get(ctx.packaged_name.toLowerCase());
  if (!pkg) {
    throw new Error(
      `parseItemPage: "${ctx.packaged_name}" not found in items.txt — name mismatch with KoLmafia data`
    );
  }

  const wt = await wiki.fetchWikitext(ctx.packaged_slug);

  // If the package itself is wearable equipment (Tam, Bjorn, Camp Scout
  // backpack, etc.), iotms.ts treats it as the item directly — no opened
  // forms recorded — and the equipment_slot is the package's own slot. In
  // that case we skip the package→opened-item discovery to avoid pulling
  // in the random per-use drops (which aren't iotms.ts contents).
  const packageSlot = equipmentSlotFor(pkg);

  const linked = packageSlot ? { openedItems: [], familiars: [], skills: [] } : discoverLinks(wt);

  // Resolve linked names to mafia data, then sort by id ascending — that's
  // the ordering convention iotms.ts uses for multi-form arrays (e.g. the
  // 5 forms of naughty origami kit, the 5 forms of Spooky Putty).
  // Some wikitext acquire calls reference a state-suffixed name (e.g.
  // "unbreakable umbrella (broken)") while items.txt only has the canonical
  // "unbreakable umbrella" — strip parenthetical suffixes as a fallback.
  const opened = linked.openedItems
    .map((n) => {
      const direct = itemsByName.get(n.toLowerCase());
      if (direct) return direct;
      const stripped = n.replace(/\s*\([^)]*\)\s*$/, "").toLowerCase();
      return stripped !== n.toLowerCase() ? itemsByName.get(stripped) : undefined;
    })
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

  // Equipment slot resolution:
  //   - if package itself is equipment, that's the slot (Tam, Bjorn, ...);
  //   - else if there's exactly one opened form with a slot, use that;
  //   - else if multiple opened forms have different slots (foldable items
  //     like origami kit, Spooky Putty), iotms.ts records no slot.
  const openedSlots = opened.map(equipmentSlotFor).filter((s): s is string => !!s);
  const distinctOpenedSlots = new Set(openedSlots);
  const headlineSlot =
    packageSlot ??
    (distinctOpenedSlots.size === 1 ? openedSlots[0] : undefined);

  // Type discrimination, in priority order. Strong signals (skill / familiar
  // links) take precedence over wikitext heuristics.
  const typeInf = inferType({
    wt,
    pkg,
    hasOpened: opened.length > 0,
    hasFamiliar: familiars.length > 0,
    hasSkill: skills.length > 0,
    ...(headlineSlot !== undefined ? { headlineSlot } : {}),
  });
  const type = typeInf.type;

  // iotms.ts img convention: always the package image. (A handful of recent
  // entries use the opened/familiar image instead, but the overwhelming
  // majority — including all old familiar IOTMs — use the package.)
  const img = pkg.image;

  // equipment_slot resolved up-front via `headlineSlot` (used by inferType
  // and reused here so we don't recompute).
  const equipment_slot = headlineSlot;

  // Tradeable: not derivable from any external source (KoLmafia's `t` flag
  // means mall-tradeable, which doesn't match iotms.ts semantics). Empirically
  // every IOTM from 2017+ is untradeable; for older IOTMs we look up against
  // a static list extracted from canonical iotms.ts. New IOTMs (always 2026+)
  // therefore reliably default to false with no human review needed.
  const tradeable =
    ctx.year < TRADEABLE_CUTOFF_YEAR && TRADEABLE_PACKAGED_IDS.has(pkg.id);

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

  const needsReview: (keyof IOTM)[] = [];
  if (!typeInf.confident) needsReview.push("type");

  return { iotm: result, needsReview };
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

  // Restrict acquire-scanning to the "When Used" / "When Folded" /
  // "When Squished" section so we don't pick up unrelated drop tables,
  // reward listings, or reference notes from elsewhere on the page.
  const whenUsedSection = extractSection(wt, /^==\s*When [\w]+\s*==/m);

  // {{useitem|...}} blocks. `becomes=` directly identifies what the package
  // turns into; `type=familiar` flags it as a familiar package.
  for (const block of extractTemplateBlocks(wt, "useitem")) {
    const args = parseTemplateArgs(block);
    if (args.type === "familiar") {
      // Prefer `becomes` (the familiar's species). `fname` is sometimes a
      // templated placeholder for the user's chosen nickname.
      const famName = args.becomes ?? args.fname;
      if (famName) familiars.push(stripWikitext(famName));
    } else if (args.becomes) {
      openedItems.push(stripWikitext(args.becomes));
    }
  }

  // Skill grants: {{Mystic Book|skill=Foo}} (older) and
  // {{acquireSkill|skill=Foo}} (modern, used inside posteffect=).
  for (const tplName of ["Mystic Book", "acquireSkill"]) {
    for (const block of extractTemplateBlocks(wt, tplName)) {
      const args = parseTemplateArgs(block);
      if (args.skill) skills.push(stripWikitext(args.skill));
    }
  }

  // Item grants via {{acquire|item=foo}}. These appear in two places: nested
  // inside useitem (origami kit, box of bear arms) or as siblings just after
  // (cursed monkey glove, packaged cold medicine cabinet). We accept both
  // by scanning the entire "When Used" section, but skip if `becomes=`
  // already gave us the answer (avoids double-counting).
  if (openedItems.length === 0 && whenUsedSection) {
    for (const acqBlock of extractTemplateBlocks(whenUsedSection, "acquire")) {
      const args = parseTemplateArgs(acqBlock);
      if (args.item) openedItems.push(stripWikitext(args.item));
    }
  }

  return { openedItems, familiars, skills };
}

/**
 * Returns the wikitext between the heading matched by `headingPattern` and
 * the next `==`-level heading (or end of document). `null` if not found.
 */
function extractSection(wt: string, headingPattern: RegExp): string | null {
  const headerMatch = headingPattern.exec(wt);
  if (!headerMatch) return null;
  const start = headerMatch.index + headerMatch[0].length;
  const rest = wt.slice(start);
  const next = /^==\s*\w/m.exec(rest);
  return next ? rest.slice(0, next.index) : rest;
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

/**
 * Infer the iotms.ts `type` discriminator. Strong link signals (familiar /
 * skill) take precedence; everything else uses wikitext heuristics. The
 * `confident` flag distinguishes deterministic detections from heuristic
 * fallbacks — the latter get a TODO marker in codegen for human review.
 */
export type TypeInference = { type: string; confident: boolean };

function inferType(args: {
  wt: string;
  pkg: MafiaItem;
  hasOpened: boolean;
  hasFamiliar: boolean;
  hasSkill: boolean;
  headlineSlot?: string;
}): TypeInference {
  if (args.hasFamiliar) return { type: "familiar", confident: true };
  if (args.hasSkill) return { type: "skill", confident: true };

  const wt = args.wt;

  // VIP Lounge items cost 3 Mr. Accessories instead of 1 and are installed
  // into the clan's shared infrastructure.
  if (/3\s*\[\[Mr\.\s*Accessor/i.test(wt) || /Clan VIP Lounge/.test(wt)) {
    return { type: "vip", confident: true };
  }

  // Eudora correspondence subscriptions surface in the Eudora menu.
  if (/\{\{Eudora/.test(wt) || /\[\[Correspondence\]\]/.test(wt) || /Eudora menu/i.test(wt)) {
    return { type: "eudora", confident: true };
  }

  // Campground items install at the campsite (garden, workshed, dwelling).
  // Multiple variants because the wiki uses different verbs across years.
  if (
    /in your (workshed|campsite|campground|garden|dwelling|kitchen)/i.test(wt) ||
    /campground (garden|patch)/i.test(wt) ||
    /\[\[A Pumpkin Patch\]\]/.test(wt) ||
    /(install|set up|build|plant|hang|place)s? (a |an |the )?[\w- ]+ in (your |the )?(workshed|campsite|campground|kitchen)/i.test(wt) ||
    /Adds? \[\[A [\w ]+\]\] to your campsite/i.test(wt)
  ) {
    return { type: "campground", confident: true };
  }

  // Content unlockers: zone/realm/area access. Multiple signals because
  // tagging is inconsistent across pages.
  if (
    /\[\[Category:Content Unlockers\]\]/.test(wt) ||
    /Allows access to \[\[/.test(wt) ||
    /access to \[\[[\w '_-]+(?:\|[^\]]+)?\]\]/.test(wt) ||
    /Unlocks? a (?:new )?(?:realm|zone|area|world|city|facility)/i.test(wt) ||
    /Unlocks? \[\[[\w '_-]+(?:\|[^\]]+)?\]\] in (Seaside Town|the [\w ]+)/i.test(wt)
  ) {
    return { type: "content", confident: true };
  }

  // Slotless one-time unlocks (lovebug pheromones, MayDay-style perks)
  // permanently grant something with no campground/workshed/zone footprint.
  if (/permanently unlocked/i.test(wt) || /signed up for the/i.test(wt) || /granted .* skill/i.test(wt)) {
    return { type: "slotless", confident: true };
  }

  // Equipment items: anything with a headline equipment slot. Less
  // confident here since iotms.ts sometimes uses bespoke types
  // (e.g. type="accessory" for the lone Eternity Codpiece).
  if (args.headlineSlot) return { type: "item", confident: false };

  return { type: "item", confident: false };
}
