import {
  availableAmount,
  closetAmount,
  displayAmount,
  equippedAmount,
  Familiar,
  haveFamiliar,
  haveSkill,
  Item,
  itemAmount,
  myId,
  print,
  Skill,
  storageAmount,
  visitUrl,
  xpath,
} from "kolmafia";
import { getFoldGroup, haveInCampground } from "libram";
import { IOTM, iotms } from "./data/index.js";
import { getBoolean } from "libram/dist/property.js";
import jsoncrush from "jsoncrush";

const eudoras: Record<number, number> = {
  5112: 1,
  4712: 2,
  7730: 3,
  9478: 4,
  10773: 5,
  11471: 6,
};

const prefs: Record<number, string> = {
  6413: "ownsFloristFriar",
  7466: "sleazeAirportAlways",
  7767: "spookyAirportAlways",
  8019: "chateauAvailable",
  8134: "lovebugsUnlocked",
  8203: "stenchAirportAlways",
  8487: "hotAirportAlways",
  8564: "barrelShrineUnlocked",
  8674: "coldAirportAlways",
  8705: "snojoAvailable",
  8836: "telegraphOfficeAvailable",
  9073: "hasDetectiveSchool",
  9203: "gingerbreadCityAvailable",
  9316: "loveTunnelAvailable",
  9404: "spacegateAlways",
  9527: "horseryAvailable",
  9835: "frAlways",
  9942: "neverendingPartyAlways",
  9989: "voteAlways",
  10049: "daycareOpen",
  10187: "prAlways",
  10292: "getawayCampsiteUnlocked",
  10890: "hasCosmicBowlingBall", //checked via item
  10900: "hasMaydayContract",
  10953: "hasAutumnaton", // checked via item
  11001: "ownsSpeakeasy",
};

function arrayOf<T>(items: T | T[] | undefined): T[] {
  if (items === undefined) return [];
  return Array.isArray(items) ? items : [items];
}

function haveItem(item: Item): boolean {
  return [
    availableAmount,
    closetAmount,
    displayAmount,
    equippedAmount,
    itemAmount,
    storageAmount,
  ]
    .map((fn) => fn(item))
    .some((q) => q > 0);
}

function haveOpened(iotm: IOTM): boolean {
  const packaged = Item.get(iotm.packaged_id);

  // TODO: special handling for
  // - batfellow comic
  // - bear arms
  switch (iotm.type) {
    case "custom": {
      if (iotm.packaged_id == 5790) {
        return (
          haveItem(Item.get("box of bear arms")) ||
          haveItem(Item.get("left bear arm")) ||
          haveItem(Item.get("right bear arm"))
        );
      }
      return false;
    }

    case "campground": {
      return (
        haveItem(packaged) ||
        haveInCampground(packaged) ||
        arrayOf(iotm.opened_ids)
          .map((i) => Item.get(i))
          .some((i) => haveItem(i) || haveInCampground(i))
      );
    }

    case "eudora": {
      const eudoraId = eudoras[iotm.packaged_id];

      return xpath(
        visitUrl("account.php?tab=correspondence"),
        `//select[@name="whichpenpal"]/option/@value`
      ).includes(eudoraId.toString());
    }

    case "familiar": {
      return arrayOf(iotm.familiar_ids)
        .map((f) => Familiar.get(f))
        .every((f) => haveFamiliar(f));
    }

    case "item": {
      if (iotm.tradeable) {
        return arrayOf(iotm.packaged_id)
          .concat(arrayOf(iotm.opened_ids))
          .map((i) => Item.get(i))
          .flatMap((i) => {
            const group = getFoldGroup(i);
            return group.length > 0 ? group : i;
          })
          .some((i) => haveItem(i));
      } else {
        return arrayOf(iotm.opened_ids)
          .map((i) => Item.get(i))
          .flatMap((i) => {
            const group = getFoldGroup(i);
            return group.length > 0 ? group : i;
          })
          .some((i) => haveItem(i));
      }
    }

    case "skill": {
      return arrayOf(iotm.skill_ids)
        .map((s) => Skill.get(s))
        .some((s) => haveSkill(s));
    }

    case "slotless":
    case "content":
      return getBoolean(prefs[iotm.packaged_id]);
  }

  return false;
}

function getStatus(iotm: IOTM) {
  if (haveOpened(iotm)) return "OPENED";
  if (haveItem(Item.get(iotm.packaged_id))) return "PACKAGED";
  return "NONE";
}

function checkIOTMs(): Record<number, string> {
  return Object.fromEntries(
    iotms.map((iotm) => [iotm.packaged_id, getStatus(iotm)])
  );
}

export function main(): void {
  print("Checking IOTMs...");

  const data = {
    user: myId(),
    wishlist: checkIOTMs(),
  };
  const crushed = encodeURIComponent(jsoncrush.crush(JSON.stringify(data)));

  const link = `https://resprit--94d09ed2946611f08e910224a6c84d84.web.val.run/update-wishlist?d=${crushed}`;

  // for some reason, (I think) Mafia strips query strings when you make a POST request?
  visitUrl(link, false, true);

  print("Updated!");
}
