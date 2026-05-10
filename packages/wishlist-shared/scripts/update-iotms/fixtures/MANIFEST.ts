// Curated set of historical IOTMs used as test fixtures.
// Picked to cover all `type` values and edge cases (is_ioty, is_con,
// foldable, multi-form opened_ids, every equipment_slot variant).
// See pocket-wishlist-1tg for the rationale table.

export type FixturePick = {
  /** packaged_name as it appears in iotms.ts */
  packaged_name: string;
  /** wiki page slug for the packaged form (URL component, before encoding) */
  packaged_slug: string;
  /** secondary page slugs to also snapshot, if any */
  secondary_slugs?: string[];
};

export const FIXTURE_PICKS: FixturePick[] = [
  { packaged_name: "Dark Jill-O-Lantern", packaged_slug: "Dark_Jill-O-Lantern", secondary_slugs: ["Jill-O-Lantern"] },
  { packaged_name: "lucky Tam O'Shanter", packaged_slug: "Lucky_Tam_O%27Shanter" },
  { packaged_name: "miniature gravy-covered maypole", packaged_slug: "Miniature_gravy-covered_maypole" },
  { packaged_name: "Cheshire Bitten", packaged_slug: "Cheshire_Bitten" },
  { packaged_name: "Tome of Snowcone Summoning", packaged_slug: "Tome_of_Snowcone_Summoning", secondary_slugs: ["Summon_Snowcones"] },
  { packaged_name: "jitterbug larva", packaged_slug: "Jitterbug_larva", secondary_slugs: ["Jitterbug"] },
  { packaged_name: "Scratch 'n' Sniff Sticker Tome", packaged_slug: "Scratch_%27n%27_Sniff_Sticker_Tome", secondary_slugs: ["Summon_Stickers"] },
  { packaged_name: "Clan pool table", packaged_slug: "Clan_pool_table" },
  { packaged_name: "hippo tutu", packaged_slug: "Hippo_tutu" },
  { packaged_name: "Grumpy Bumpkin's Pumpkin Seed Catalog", packaged_slug: "Grumpy_Bumpkin%27s_Pumpkin_Seed_Catalog" },
  { packaged_name: "My Own Pen Pal kit", packaged_slug: "My_Own_Pen_Pal_kit" },
  { packaged_name: "Gygaxian Libram", packaged_slug: "Gygaxian_Libram", secondary_slugs: ["Summon_Sugar_Sheets"] },
  { packaged_name: "rehearsing dramatic hedgehog", packaged_slug: "Rehearsing_dramatic_hedgehog", secondary_slugs: ["Dramatic_Hedgehog"] },
  { packaged_name: "naughty origami kit", packaged_slug: "Naughty_origami_kit" },
  { packaged_name: "container of Spooky Putty", packaged_slug: "Container_of_Spooky_Putty" },
  { packaged_name: "box of bear arms", packaged_slug: "Box_of_bear_arms" },
  { packaged_name: "Tome of Rad Libs", packaged_slug: "Tome_of_Rad_Libs", secondary_slugs: ["Summon_Rad_Libs"] },
  { packaged_name: "airplane charter: Spring Break Beach", packaged_slug: "Airplane_charter:_Spring_Break_Beach" },
  { packaged_name: "bottle of lovebug pheromones", packaged_slug: "Bottle_of_lovebug_pheromones" },
  { packaged_name: "portable Mayo Clinic", packaged_slug: "Portable_Mayo_Clinic" },
  { packaged_name: "Clan hot dog stand", packaged_slug: "Clan_hot_dog_stand" },
  { packaged_name: "New-You Club Membership Form", packaged_slug: "New-You_Club_Membership_Form" },
  { packaged_name: "space planula", packaged_slug: "Space_planula", secondary_slugs: ["Space_Jellyfish"] },
  { packaged_name: "Neverending Party invitation envelope", packaged_slug: "Neverending_Party_invitation_envelope" },
  { packaged_name: "rune-strewn spoon cocoon", packaged_slug: "Rune-strewn_spoon_cocoon", secondary_slugs: ["Hewn_moon-rune_spoon"] },
  { packaged_name: "Better Shrooms and Gardens catalog", packaged_slug: "Better_Shrooms_and_Gardens_catalog" },
  { packaged_name: "clan underground fireworks shop", packaged_slug: "Clan_underground_fireworks_shop" },
  { packaged_name: "MayDay™ contract", packaged_slug: "MayDay%E2%84%A2_contract" },
  { packaged_name: "unoccupied sheep suit", packaged_slug: "Unoccupied_sheep_suit", secondary_slugs: ["Hobo_in_Sheep%27s_Clothing"] },
  { packaged_name: "cursed monkey glove", packaged_slug: "Cursed_monkey_glove", secondary_slugs: ["Cursed_monkey%27s_paw"] },
  { packaged_name: "stocking full of bones", packaged_slug: "Stocking_full_of_bones", secondary_slugs: ["Skeleton_of_Crimbo_Past"] },
  { packaged_name: "seal-clubbing club loot box", packaged_slug: "Seal-clubbing_club_loot_box", secondary_slugs: ["Legendary_seal-clubbing_club"] },
  { packaged_name: "discreetly-wrapped Eternity Codpiece", packaged_slug: "Discreetly-wrapped_Eternity_Codpiece", secondary_slugs: ["The_Eternity_Codpiece"] },
];

/**
 * Wiki pages we snapshot only so the end-to-end scrape() test can fetch
 * them — these IOTMs appear in the live Mr. Store index but haven't been
 * added to iotms.ts yet. Per-page parser tests skip these (they have no
 * canonical iotms.ts entry to assert against).
 */
export const SUPPORT_PICKS: FixturePick[] = [
  { packaged_name: "boxed Heartstone", packaged_slug: "Boxed_Heartstone", secondary_slugs: ["Heartstone"] },
  { packaged_name: "boxed Archaeologist's Spade", packaged_slug: "Boxed_Archaeologist%27s_Spade", secondary_slugs: ["Archaeologist%27s_Spade"] },
  { packaged_name: "wrapped Baseball Diamond", packaged_slug: "Wrapped_Baseball_Diamond", secondary_slugs: ["Baseball_Diamond"] },
  { packaged_name: "pasta wand loot box", packaged_slug: "Pasta_wand_loot_box", secondary_slugs: ["Legendary_pasta_wand"] },
];
