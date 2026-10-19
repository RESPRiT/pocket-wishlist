/**
 * Hand-curated decisions about tier-sheet rows that no heuristic can make.
 * Both lists key on the row's name (normalized the same way as everything
 * else) plus its year column, so an override can't leak onto an unrelated
 * row in another year.
 *
 * When the update PR lists an "unmatched tier row": if it is a known IOTM
 * under another name, add an alias (the row's `unranked` hint usually names
 * it); if it is something iotms.ts deliberately doesn't track, ignore it.
 * — claude 3dc556f7, 2026-10-18
 */

export type TierRowAlias = { row: string; year: number; packaged_name: string };
export type IgnoredTierRow = { row: string; year: number; why: string };

/** Both lists, as `assignTierRows` takes them (tests pass their own). */
export type TierOverrides = {
  aliases: readonly TierRowAlias[];
  ignored: readonly IgnoredTierRow[];
};

/** Rows that are nicknames for an iotms.ts entry. */
export const TIER_ROW_ALIASES: readonly TierRowAlias[] = [
  {
    row: "clan vip photo booth",
    year: 2024,
    packaged_name: "photo booth sized crate",
  },
];

/** Rows for items iotms.ts deliberately doesn't track; never reported. */
export const IGNORED_TIER_ROWS: readonly IgnoredTierRow[] = [
  {
    row: "mm",
    year: 2006,
    why: "Monster Manuel: a permanent Mr. Store item, not an IOTM",
  },
];
