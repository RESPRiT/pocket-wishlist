# Glossary

For anything not covered here, the [KoL wiki](https://kol.coldfront.net/thekolwiki/index.php/Main_Page)
is the authoritative source.

## Game basics

- **KoL** — *Kingdom of Loathing*, a long-running browser-based RPG.
- **KoLmafia** (or just **mafia**) — A third-party desktop client / scripting
  environment for KoL. Provides a JS/TS-callable API
  (`kolmafia` npm package) for inspecting game state and automating play.
  `packages/wishlist-mafia` builds a script that runs **inside** mafia, not
  as a standalone service. (?)
- **libram** — Helper library on top of `kolmafia` (used in
  `packages/wishlist-mafia/src/wishlist.ts`).
- **Mall** (Mall of Loathing) — The in-game player marketplace.
- **Mr. A** — Mr. Accessory, a premium in-game currency used to redeem IOTMs
  IOTMs from Mr. Store. Effectively the project's reference currency for
  IOTM value.
- **Meat** - The standard currency for all KoL transactions, including the
  mall (player-owned stores) and NPC-owned stores.
- **HC** — Hardcore, an ascension restriction in KoL. A player in HC can't
  see/use most IOTMs they own.
- **Standard** — KoL's rotating-restriction game mode, which prohibits any
  IOTMs not released within the past 3 calendar years (inclusive).

## IOTM model

- **IOTM** — *Item of the Month.* A monthly premium item KoL releases. The
  current IOTM rotates; once an IOTM leaves rotation, it is discontinued.
- **Packaged** / **opened** — IOTMs start in a tradeable "packaged" form
  which a player then *opens* to acquire an untradeable item. For some older
  IOTMs the packaged form *is* the opened form: the IOTM is used directly,
  and can still be traded afterwards. In `iotms.ts` this maps to
  `packaged_id` / `packaged_name` (always present) and the optional
  `opened_ids` / `opened_names` (which may be a single value or an array).
  Mall searches target `packaged_name`.
- **IOTY** — *Item of the Year.* Annual standout IOTM. Rotates each year.
- **KOL Con** — Convention exclusive (an IOTM tied to a real-world KoL
  convention; now, a virtual convention).
- **Clan IOTM** / **VIP Lounge** — A subset of IOTMs install into the clan's
  shared VIP Lounge as infrastructure (pool table, hot tub, speakeasy, etc.)
  rather than going to one player's inventory. They cost 3 Mr. Accessories
  instead of the usual 1.
- **IOTM `type`** — Discriminator on `IOTMSchema.type` and the switch in
  `wishlist-mafia/src/wishlist.ts`'s `haveOpened()`. Possible values:
  - `item` — A regular usable item.
  - `familiar` — Grants a familiar (KoL pet).
  - `skill` — Grants a permanent skill.
  - `campground` — Sits in the player's campground (e.g. workshed items).
  - `eudora` — A correspondence subscription unlocked via the Eudora menu.
  - `slotless` / `content` — Unlocks a feature or zone, tracked by a mafia
    preference (see the `prefs` map in `wishlist.ts`).
  - `custom` — One-off cases that don't fit the others (e.g. Bear Arms).
- **Foldable** / **fold group** — Items that can transform into other items
  (e.g. multi-form gear). Detected via libram's `getFoldGroup`; ownership of
  *any* form counts as ownership of the IOTM.
- **Speed tier** / **aftercore tier** — Community-assigned utility rankings
  for an IOTM in speed-ascension play vs. casual post-ascension ("aftercore")
  play.
  - Speed tierlist: https://docs.google.com/spreadsheets/d/1pDTE8VhuSyH03xvkVW5JGvTQf7PYitaNGLMHLVXz_5A
  - Aftercore tierlist: https://docs.google.com/spreadsheets/d/1VtAkiQrV3lioq0NHFD2VEJtc7CaQ589nqbOwhG14NiA

## External services

- **PriceGun** — Community price-aggregation service at
  `pricegun.loathers.net`. Provides historical sales/volume data per item id.

