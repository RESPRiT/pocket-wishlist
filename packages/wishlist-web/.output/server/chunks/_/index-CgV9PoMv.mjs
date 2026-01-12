import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { u as useTheme, w as wishlistQuery, t as toggleWishlistMutation, m as mallPricesQuery, M as MallPriceResponseSchema } from "./router-BuKlGO_e.mjs";
import { useSuspenseQuery, useMutation, useQuery, queryOptions } from "@tanstack/react-query";
import { createContext, use, useMemo, useRef, useCallback, useEffect, useState, useLayoutEffect } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultRangeExtractor, useWindowVirtualizer } from "@tanstack/react-virtual";
import { ClientOnly } from "@tanstack/react-router";
import "@tanstack/react-router-ssr-query";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "color-bits";
import "@tanstack/react-query-persist-client";
import "@tanstack/query-async-storage-persister";
import "zod";
const iotms = [
  {
    packaged_id: 894,
    packaged_name: "Dark Jill-O-Lantern",
    familiar_ids: 24,
    familiar_names: "Jill-O-Lantern",
    year: 2004,
    month: 10,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "jilldark.gif"
  },
  {
    packaged_id: 914,
    packaged_name: "hand turkey outline",
    familiar_ids: 25,
    familiar_names: "Hand Turkey",
    year: 2004,
    month: 11,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "hand.gif"
  },
  {
    packaged_id: 924,
    packaged_name: "crimbo elfling",
    familiar_ids: 26,
    familiar_names: "Crimbo Elf",
    year: 2004,
    month: 12,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "elfling.gif"
  },
  {
    packaged_id: 954,
    packaged_name: "orphan baby yeti",
    familiar_ids: 28,
    familiar_names: "Baby Yeti",
    year: 2005,
    month: 1,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "babyyeti.gif"
  },
  {
    packaged_id: 961,
    packaged_name: "silk garter snake",
    familiar_ids: 29,
    familiar_names: "Feather Boa Constrictor",
    year: 2005,
    month: 2,
    speed_tier: 5,
    aftercore_tier: 4,
    tradeable: false,
    type: "familiar",
    img: "garter.gif"
  },
  {
    packaged_id: 1040,
    packaged_name: "lucky Tam O'Shanter",
    year: 2005,
    month: 3,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "familiar",
    img: "tamo.gif"
  },
  {
    packaged_id: 1083,
    packaged_name: "personal raindrop",
    familiar_ids: 31,
    familiar_names: "Personal Raincloud",
    year: 2005,
    month: 4,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "raindrop.gif"
  },
  {
    packaged_id: 1152,
    packaged_name: "miniature gravy-covered maypole",
    year: 2005,
    month: 5,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "familiar",
    img: "maypole.gif"
  },
  {
    packaged_id: 1242,
    packaged_name: "deflated inflatable dodecapede",
    familiar_ids: 38,
    familiar_names: "Inflatable Dodecapede",
    year: 2005,
    month: 6,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "deflatdod.gif"
  },
  {
    packaged_id: 1260,
    packaged_name: "wax lips",
    year: 2005,
    month: 7,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "familiar",
    img: "waxlips.gif"
  },
  {
    packaged_id: 1263,
    packaged_name: "pygmy bugbear shaman",
    familiar_ids: 39,
    familiar_names: "Pygmy Bugbear Shaman",
    year: 2005,
    month: 8,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "familiar39.gif"
  },
  {
    packaged_id: 1291,
    packaged_name: "Jekyllin hide belt",
    year: 2005,
    month: 9,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "accessory",
    img: "jbelt.gif"
  },
  {
    packaged_id: 1304,
    packaged_name: "doppelshifter egg",
    familiar_ids: 40,
    familiar_names: "Doppelshifter",
    year: 2005,
    month: 10,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "doppegg.gif"
  },
  {
    packaged_id: 1349,
    packaged_name: "miniscule temporal rip",
    familiar_ids: 43,
    familiar_names: "Temporal Riftlet",
    year: 2005,
    month: 11,
    speed_tier: 4,
    aftercore_tier: 4,
    tradeable: false,
    type: "familiar",
    img: "rip.gif"
  },
  {
    packaged_id: 1373,
    packaged_name: "sweet nutcracker",
    familiar_ids: 44,
    familiar_names: "Sweet Nutcracker",
    year: 2005,
    month: 12,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "nutcracker.gif"
  },
  {
    packaged_id: 898,
    packaged_name: "Cheshire Bitten",
    familiar_ids: 23,
    familiar_names: "Cheshire Bat",
    year: 2005,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "cbitten.gif"
  },
  {
    packaged_id: 897,
    packaged_name: "coffee sprite",
    familiar_ids: 22,
    familiar_names: "Coffee Pixie",
    year: 2005,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "csprite.gif"
  },
  {
    packaged_id: 1411,
    packaged_name: "Tome of Snowcone Summoning",
    skill_ids: 7213,
    skill_names: "Summon Snowcones",
    year: 2006,
    month: 1,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "tome",
    img: "book.gif"
  },
  {
    packaged_id: 1423,
    packaged_name: "iceberglet",
    opened_ids: [1424, 1425, 1426, 1427],
    opened_names: ["ice sickle", "ice baby", "ice skates", "ice pick"],
    year: 2006,
    month: 2,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    img: "iceberglet.gif"
  },
  {
    packaged_id: 1488,
    packaged_name: "March hat",
    familiar_ids: 50,
    familiar_names: "Wild Hare",
    year: 2006,
    month: 3,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "marchhat.gif"
  },
  {
    packaged_id: 1498,
    packaged_name: "McPhee's Grimoire of Hilarious Object Summoning",
    skill_ids: 7226,
    skill_names: "Summon Hilarious Objects",
    year: 2006,
    month: 4,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "grimoire",
    img: "book2.gif"
  },
  {
    packaged_id: 1536,
    packaged_name: "homeless hobo spirit",
    familiar_ids: 52,
    familiar_names: "Spirit Hobo",
    year: 2006,
    month: 5,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "ghoboh.gif"
  },
  {
    packaged_id: 1621,
    packaged_name: "astral badger",
    familiar_ids: 53,
    familiar_names: "Astral Badger",
    year: 2006,
    month: 6,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "badger1.gif"
  },
  {
    packaged_id: 1653,
    packaged_name: "jewel-eyed wizard hat",
    year: 2006,
    month: 7,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "hat",
    img: "wizhat.gif"
  },
  {
    packaged_id: 1703,
    packaged_name: "Comma Chameleon egg",
    familiar_ids: 54,
    familiar_names: "Comma Chameleon",
    year: 2006,
    month: 8,
    speed_tier: 5,
    aftercore_tier: 4,
    tradeable: false,
    type: "familiar",
    img: "commaegg.gif"
  },
  {
    packaged_id: 1792,
    packaged_name: "Travoltan trousers",
    year: 2006,
    month: 9,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "pants",
    img: "travtrou.gif"
  },
  {
    packaged_id: 1971,
    packaged_name: "plastic pumpkin bucket",
    year: 2006,
    month: 10,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "familiar",
    img: "punkin.gif"
  },
  {
    packaged_id: 2090,
    packaged_name: "pilgrim shield",
    year: 2006,
    month: 11,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "offhand",
    img: "pilshield.gif"
  },
  {
    packaged_id: 2190,
    packaged_name: "yuletide troll chrysalis",
    familiar_ids: 65,
    familiar_names: "Ancient Yuletide Troll",
    year: 2006,
    month: 12,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "chrysalis.gif"
  },
  {
    packaged_id: 1307,
    packaged_name: "calm attention-deficit demon",
    familiar_ids: 41,
    familiar_names: "Attention-Deficit Demon",
    year: 2006,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "addemon.gif"
  },
  {
    packaged_id: 1308,
    packaged_name: "unwound cymbal-playing monkey",
    familiar_ids: 42,
    familiar_names: "Cymbal-Playing Monkey",
    year: 2006,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "cmonkey1.gif"
  },
  {
    packaged_id: 2221,
    packaged_name: "Great Ball of Frozen Fire",
    opened_ids: [2222, 2223, 2224, 2225, 2226],
    opened_names: [
      "liar's pants",
      "flaming juggler's balls",
      "flaming pink shirt",
      "flaming familiar doppelgänger",
      "evil flaming eyeball pendant"
    ],
    year: 2007,
    month: 1,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    img: "ffball.gif"
  },
  {
    packaged_id: 2303,
    packaged_name: "Libram of Candy Heart Summoning",
    skill_ids: 7219,
    skill_names: "Summon Candy Heart",
    year: 2007,
    month: 2,
    speed_tier: 3,
    aftercore_tier: 6,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "libram",
    img: "book.gif"
  },
  {
    packaged_id: 2380,
    packaged_name: "dandy lion cub",
    familiar_ids: 66,
    familiar_names: "Dandy Lion",
    year: 2007,
    month: 3,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "dandylioncub.gif"
  },
  {
    packaged_id: 2447,
    packaged_name: "bad penguin egg",
    familiar_ids: 68,
    familiar_names: "Penguin Goodfella",
    year: 2007,
    month: 4,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "pengegg.gif"
  },
  {
    packaged_id: 2541,
    packaged_name: "Mayflower bouquet",
    year: 2007,
    month: 5,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "familiar",
    img: "maybouquet.gif"
  },
  {
    packaged_id: 2650,
    packaged_name: "bottled green pixie",
    familiar_ids: 70,
    familiar_names: "Green Pixie",
    year: 2007,
    month: 6,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "bottledpixie.gif"
  },
  {
    packaged_id: 2834,
    packaged_name: "bottle-rocket crossbow",
    year: 2007,
    month: 7,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "weapon",
    img: "brcrossbow.gif"
  },
  {
    packaged_id: 2836,
    packaged_name: "wizard action figure",
    familiar_ids: 73,
    familiar_names: "Wizard Action Figure",
    year: 2007,
    month: 8,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "waflarva.gif"
  },
  {
    packaged_id: 2844,
    packaged_name: "navel ring of navel gazing",
    year: 2007,
    month: 9,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: true,
    type: "item",
    equipment_slot: "accessory",
    img: "navelring.gif"
  },
  {
    packaged_id: 2845,
    packaged_name: "class five ecto-larva",
    familiar_ids: 74,
    familiar_names: "Gluttonous Green Ghost",
    year: 2007,
    month: 10,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "ectoegg.gif"
  },
  {
    packaged_id: 2946,
    packaged_name: "V for Vivala mask",
    year: 2007,
    month: 11,
    speed_tier: 6,
    aftercore_tier: 5,
    tradeable: true,
    type: "item",
    equipment_slot: "accessory",
    img: "vivala.gif"
  },
  {
    packaged_id: 3042,
    packaged_name: "Crimbo P. R. E. S. S. I. E.",
    familiar_ids: 77,
    familiar_names: "Crimbo P. R. E. S. S. I. E.",
    year: 2007,
    month: 12,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "pressielarva.gif"
  },
  {
    packaged_id: 1967,
    packaged_name: "jitterbug larva",
    familiar_ids: 57,
    familiar_names: "Jitterbug",
    year: 2007,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "jitterlarva.gif"
  },
  {
    packaged_id: 1970,
    packaged_name: "nervous tick egg",
    familiar_ids: 58,
    familiar_names: "Nervous Tick",
    year: 2007,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "tickegg.gif"
  },
  {
    packaged_id: 3117,
    packaged_name: "Libram of Divine Favors",
    skill_ids: 7220,
    skill_names: "Summon Party Favor",
    year: 2008,
    month: 1,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "libram",
    img: "book3.gif"
  },
  {
    packaged_id: 3192,
    packaged_name: "naughty origami kit",
    opened_ids: [3193, 3194, 3195, 3196, 3197],
    opened_names: [
      "naughty fortune teller",
      `origami "gentlemen's" magazine`,
      "naughty paper shuriken",
      "origami pasties",
      "origami riding crop"
    ],
    year: 2008,
    month: 2,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    img: "origamikit.gif"
  },
  {
    packaged_id: 3219,
    packaged_name: "sane hatrack",
    familiar_ids: 82,
    familiar_names: "Mad Hatrack",
    year: 2008,
    month: 3,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "sanehatrack.gif"
  },
  {
    packaged_id: 3263,
    packaged_name: `Sp'n-Zor's Grimoire of "Tasteful" Gifts`,
    skill_ids: 7227,
    skill_names: "Summon Tasteful Items",
    year: 2008,
    month: 4,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "grimoire",
    img: "book4.gif"
  },
  {
    packaged_id: 3321,
    packaged_name: "packet of mayfly bait",
    opened_ids: 3322,
    opened_names: "mayfly bait necklace",
    year: 2008,
    month: 5,
    speed_tier: 5,
    aftercore_tier: 3,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "mayflybait.gif"
  },
  {
    packaged_id: 3351,
    packaged_name: "llama lama cria",
    familiar_ids: 90,
    familiar_names: "Llama Lama",
    year: 2008,
    month: 6,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "cria.gif"
  },
  {
    packaged_id: 3421,
    packaged_name: "little box of fireworks",
    year: 2008,
    month: 7,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "familiar",
    img: "fireworksbox.gif"
  },
  {
    packaged_id: 3431,
    packaged_name: "cotton candy cocoon",
    familiar_ids: 91,
    familiar_names: "Cotton Candy Carnie",
    year: 2008,
    month: 8,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "cccoccoon.gif"
  },
  {
    packaged_id: 3466,
    packaged_name: "haiku katana",
    year: 2008,
    month: 9,
    speed_tier: 6,
    aftercore_tier: 5,
    tradeable: true,
    type: "item",
    equipment_slot: "weapon",
    img: "hkatana.gif"
  },
  {
    packaged_id: 3434,
    packaged_name: "spooky rattling cigar box",
    familiar_ids: 92,
    familiar_names: "Disembodied Hand",
    year: 2008,
    month: 10,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "cigarbox.gif"
  },
  {
    packaged_id: 3507,
    packaged_name: "Scratch 'n' Sniff Sticker Tome",
    skill_ids: 7214,
    skill_names: "Summon Stickers",
    year: 2008,
    month: 11,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "tome",
    img: "book3.gif"
  },
  {
    packaged_id: 3578,
    packaged_name: "candy cornucopia",
    familiar_ids: 101,
    familiar_names: "Sugar Fruit Fairy",
    year: 2008,
    month: 12,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "cornucopia.gif"
  },
  {
    packaged_id: 2937,
    packaged_name: "siesta-ing Casagnova gnome",
    familiar_ids: 75,
    familiar_names: "Casagnova Gnome",
    year: 2008,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "cassasleep.gif"
  },
  {
    packaged_id: 2939,
    packaged_name: "unemployed hunchbacked minion",
    familiar_ids: 76,
    familiar_names: "Hunchbacked Minion",
    year: 2008,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "hunch.gif"
  },
  {
    packaged_id: 3661,
    packaged_name: "container of Spooky Putty",
    opened_ids: [3662, 3663, 3664, 3665, 3666],
    opened_names: [
      "Spooky Putty mitre",
      "Spooky Putty leotard",
      "Spooky Putty ball",
      "Spooky Putty sheet",
      "Spooky Putty snake"
    ],
    year: 2009,
    month: 1,
    speed_tier: 4,
    aftercore_tier: 2,
    tradeable: true,
    type: "item",
    img: "sputtyegg.gif"
  },
  {
    packaged_id: 3753,
    packaged_name: "Libram of Love Songs",
    skill_ids: 7221,
    skill_names: "Summon Love Song",
    year: 2009,
    month: 2,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "libram",
    img: "book4.gif"
  },
  {
    packaged_id: 3799,
    packaged_name: "Apathargic Bandersnatch",
    familiar_ids: 105,
    familiar_names: "Frumious Bandersnatch",
    year: 2009,
    month: 3,
    speed_tier: 0,
    aftercore_tier: 0,
    tradeable: false,
    type: "familiar",
    img: "banderlarva.gif"
  },
  {
    packaged_id: 3836,
    packaged_name: "Elvish sunglasses",
    year: 2009,
    month: 4,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "accessory",
    img: "elvisshades.gif"
  },
  {
    packaged_id: 3963,
    packaged_name: "Clan pool table",
    year: 2009,
    month: 5,
    speed_tier: 2,
    aftercore_tier: 3,
    tradeable: false,
    type: "vip",
    img: "crate.gif"
  },
  {
    packaged_id: 3999,
    packaged_name: "infant sandworm",
    familiar_ids: 111,
    familiar_names: "Baby Sandworm",
    year: 2009,
    month: 6,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "wormlarva.gif"
  },
  {
    packaged_id: 4136,
    packaged_name: "Bag o' Tricks",
    year: 2009,
    month: 7,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "offhand",
    img: "bagotricks.gif"
  },
  {
    packaged_id: 4148,
    packaged_name: "floaty stone sphere",
    familiar_ids: 113,
    familiar_names: "He-Boulder",
    year: 2009,
    month: 8,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "beholderegg.gif"
  },
  {
    packaged_id: 4177,
    packaged_name: "Tome of Sugar Shummoning",
    skill_ids: 7215,
    skill_names: "Summon Sugar Sheets",
    year: 2009,
    month: 9,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "tome",
    img: "book4.gif"
  },
  {
    packaged_id: 4223,
    packaged_name: "squamous polyp",
    familiar_ids: 117,
    familiar_names: "Squamous Gibberer",
    year: 2009,
    month: 10,
    speed_tier: 6,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "polyp.gif"
  },
  {
    packaged_id: 4135,
    packaged_name: "moveable feast",
    year: 2009,
    month: 11,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "familiar",
    img: "movfeast.gif"
  },
  {
    packaged_id: 4328,
    packaged_name: "suspicious stocking",
    familiar_ids: 120,
    familiar_names: "Stocking Mimic",
    year: 2009,
    month: 12,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "susstocking.gif"
  },
  {
    packaged_id: 3482,
    packaged_name: "passed-out psychedelic bear",
    familiar_ids: 95,
    familiar_names: "Psychedelic Bear",
    year: 2009,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "sleepbear.gif"
  },
  {
    packaged_id: 3481,
    packaged_name: "uniclops egg",
    familiar_ids: 94,
    familiar_names: "Uniclops",
    year: 2009,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "uniclopsegg.gif"
  },
  {
    packaged_id: 4398,
    packaged_name: "stinky cheese ball",
    opened_ids: [4399, 4400, 4401, 4402, 4403],
    opened_names: [
      "stinky cheese sword",
      "stinky cheese diaper",
      "stinky cheese wheel",
      "stinky cheese eye",
      "Staff of Queso Escusado"
    ],
    year: 2010,
    month: 1,
    speed_tier: 6,
    aftercore_tier: 4,
    tradeable: true,
    type: "item",
    img: "sc_ball.gif"
  },
  {
    packaged_id: 4468,
    packaged_name: "Libram of BRICKOs",
    skill_ids: 7222,
    skill_names: "Summon BRICKOs",
    year: 2010,
    month: 2,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "libram",
    img: "book2.gif"
  },
  {
    packaged_id: 4507,
    packaged_name: "Clan looking glass",
    year: 2010,
    month: 3,
    tradeable: false,
    type: "vip",
    img: "crate.gif"
  },
  {
    packaged_id: 4574,
    packaged_name: "panicked kernel",
    familiar_ids: 124,
    familiar_names: "Baby Bugged Bugbear",
    year: 2010,
    month: 4,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "kernel.gif"
  },
  {
    packaged_id: 4614,
    packaged_name: "Crown of Thrones",
    year: 2010,
    month: 5,
    speed_tier: 4,
    aftercore_tier: 4,
    tradeable: true,
    type: "item",
    equipment_slot: "hat",
    img: "chairhat.gif"
  },
  {
    packaged_id: 4619,
    packaged_name: "glowing frisbee",
    familiar_ids: 135,
    familiar_names: "Rogue Program",
    year: 2010,
    month: 6,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "trondisc.gif"
  },
  {
    packaged_id: 4644,
    packaged_name: "Juju Mojo Mask",
    year: 2010,
    month: 7,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "accessory",
    img: "jujumask.gif"
  },
  {
    packaged_id: 4648,
    packaged_name: "Schmalz's First Prize Beer",
    familiar_ids: 136,
    familiar_names: "Mini-Hipster",
    year: 2010,
    month: 8,
    speed_tier: 2,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "pbr.gif"
  },
  {
    packaged_id: 4696,
    packaged_name: "Greatest American Pants",
    year: 2010,
    month: 9,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: true,
    type: "item",
    equipment_slot: "pants",
    img: "gapants.gif"
  },
  {
    packaged_id: 4720,
    packaged_name: "organ grinder",
    familiar_ids: 139,
    familiar_names: "Knob Goblin Organ Grinder",
    year: 2010,
    month: 10,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "grinder.gif"
  },
  {
    packaged_id: 4759,
    packaged_name: "Grumpy Bumpkin's Pumpkin Seed Catalog",
    opened_ids: 4760,
    opened_names: "packet of pumpkin seeds",
    year: 2010,
    month: 11,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "campground",
    campground_slot: "garden",
    img: "book2.gif"
  },
  {
    packaged_id: 4827,
    packaged_name: "hibernating robot reindeer",
    familiar_ids: 143,
    familiar_names: "Robot Reindeer",
    year: 2010,
    month: 12,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "hyberdeer.gif"
  },
  {
    packaged_id: 4227,
    packaged_name: "hungover chauvinist pig",
    familiar_ids: 119,
    familiar_names: "Chauvinist Pig",
    year: 2010,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "hungopig.gif"
  },
  {
    packaged_id: 4228,
    packaged_name: "perfectly ordinary frog",
    familiar_ids: 118,
    familiar_names: "Dancing Frog",
    year: 2010,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "normfrog.gif"
  },
  {
    packaged_id: 4908,
    packaged_name: "Loathing Legion knife",
    year: 2011,
    month: 1,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    img: "llknife.gif"
  },
  {
    packaged_id: 4937,
    packaged_name: "a cute angel",
    familiar_ids: 146,
    familiar_names: "Obtuse Angel",
    year: 2011,
    month: 2,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "acuteangel.gif"
  },
  {
    packaged_id: 4965,
    packaged_name: "Sorcerers of the Shore Grimoire",
    skill_ids: 7228,
    skill_names: "Summon Alice's Army Cards",
    year: 2011,
    month: 3,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "grimoire",
    img: "book3.gif"
  },
  {
    packaged_id: 5047,
    packaged_name: "Clan shower",
    year: 2011,
    month: 4,
    tradeable: false,
    type: "vip",
    img: "crate.gif"
  },
  {
    packaged_id: 5112,
    packaged_name: "My Own Pen Pal kit",
    year: 2011,
    month: 5,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "eudora",
    img: "ppkit.gif"
  },
  {
    packaged_id: 5164,
    packaged_name: "mysterious chest",
    familiar_ids: 148,
    familiar_names: "Li'l Xenomorph",
    year: 2011,
    month: 6,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "spacechest.gif"
  },
  {
    packaged_id: 5190,
    packaged_name: "Operation Patriot Shield",
    year: 2011,
    month: 7,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "offhand",
    img: "opshield.gif"
  },
  {
    packaged_id: 4536,
    packaged_name: "fairy-worn boots",
    familiar_ids: 150,
    familiar_names: "Pair of Stomping Boots",
    year: 2011,
    month: 8,
    speed_tier: 0,
    aftercore_tier: 0,
    tradeable: false,
    type: "familiar",
    img: "fairyboots.gif"
  },
  {
    packaged_id: 5223,
    packaged_name: "Tome of Clip Art",
    skill_ids: 7216,
    skill_names: "Summon Clip Art",
    year: 2011,
    month: 9,
    speed_tier: 1,
    aftercore_tier: 4,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "tome",
    img: "book3.gif"
  },
  {
    packaged_id: 5301,
    packaged_name: "Make-Your-Own-Vampire-Fangs kit",
    opened_ids: 5299,
    opened_names: "plastic vampire fangs",
    year: 2011,
    month: 10,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "fangskit.gif"
  },
  {
    packaged_id: 5371,
    packaged_name: "stuffed-shirt scarecrow",
    familiar_ids: 152,
    familiar_names: "Fancypants Scarecrow",
    year: 2011,
    month: 11,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "pantscrow.gif"
  },
  {
    packaged_id: 5403,
    packaged_name: "Mint Salton Pepper's Peppermint Seed Catalog",
    opened_ids: 5404,
    opened_names: "Peppermint Pip Packet",
    year: 2011,
    month: 12,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: false,
    type: "campground",
    campground_slot: "garden",
    img: "pep_catalog.gif"
  },
  {
    packaged_id: 4734,
    packaged_name: "rehearsing dramatic hedgehog",
    familiar_ids: 141,
    familiar_names: "Dramatic Hedgehog",
    year: 2011,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "hearsehog.gif"
  },
  {
    packaged_id: 4732,
    packaged_name: "sleeping piano cat",
    familiar_ids: 140,
    familiar_names: "Piano Cat",
    year: 2011,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "sleepcat.gif"
  },
  {
    packaged_id: 5463,
    packaged_name: "Libram of Resolutions",
    skill_ids: 7224,
    skill_names: "Summon Resolutions",
    year: 2012,
    month: 1,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "libram",
    img: "book5.gif"
  },
  {
    packaged_id: 5553,
    packaged_name: "can of Rain-Doh",
    year: 2012,
    month: 2,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: true,
    type: "item",
    img: "raindoh.gif"
  },
  {
    packaged_id: 5639,
    packaged_name: "Small Medium",
    familiar_ids: 159,
    familiar_names: "Happy Medium",
    year: 2012,
    month: 3,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "medium_small.gif"
  },
  {
    packaged_id: 5648,
    packaged_name: "Boris's Helm",
    year: 2012,
    month: 4,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "hat",
    img: "borishelm.gif"
  },
  {
    packaged_id: 5662,
    packaged_name: "Olympic-sized Clan crate",
    year: 2012,
    month: 5,
    tradeable: false,
    type: "vip",
    img: "crate.gif"
  },
  {
    packaged_id: 5701,
    packaged_name: "Moping Artistic Goth Kid",
    familiar_ids: 160,
    familiar_names: "Artistic Goth Kid",
    year: 2012,
    month: 6,
    speed_tier: 2,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "mopinggoth.gif"
  },
  {
    packaged_id: 5738,
    packaged_name: "Camp Scout backpack",
    year: 2012,
    month: 7,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "back",
    img: "csbackpack.gif"
  },
  {
    packaged_id: 5767,
    packaged_name: "Unagnimated Gnome",
    familiar_ids: 162,
    familiar_names: "Reagnimated Gnome",
    year: 2012,
    month: 8,
    speed_tier: 4,
    aftercore_tier: 4,
    tradeable: false,
    type: "familiar",
    img: "frankenlarva.gif"
  },
  {
    packaged_id: 5790,
    packaged_name: "box of bear arms",
    opened_ids: [5791, 5792],
    opened_names: ["right bear arm", "left bear arm"],
    year: 2012,
    month: 9,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: true,
    type: "custom",
    img: "beararms.gif"
  },
  {
    packaged_id: 5879,
    packaged_name: "Pete & Jackie's Dragon Tooth Emporium Catalog",
    opened_ids: 5880,
    opened_names: "packet of dragon's teeth",
    year: 2012,
    month: 10,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "campground",
    campground_slot: "garden",
    img: "teethcatalog.gif"
  },
  {
    packaged_id: 5910,
    packaged_name: "deactivated nanobots",
    familiar_ids: 167,
    familiar_names: "Nanorhino",
    year: 2012,
    month: 11,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "nanobox.gif"
  },
  {
    packaged_id: 6071,
    packaged_name: "Thinknerd's Grimoire of Geeky Gifts",
    skill_ids: 7229,
    skill_names: "Summon Geeky Gifts",
    year: 2012,
    month: 12,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "grimoire",
    img: "nerdgrimoire.gif"
  },
  {
    packaged_id: 5377,
    packaged_name: "The Groose in the Hoose",
    familiar_ids: 154,
    familiar_names: "Bloovian Groose",
    year: 2012,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "groosehoose.gif"
  },
  {
    packaged_id: 5442,
    packaged_name: "The Kloop in the Coop",
    familiar_ids: 155,
    familiar_names: "Blavious Kloop",
    year: 2012,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "kloopcoop.gif"
  },
  {
    packaged_id: 6150,
    packaged_name: "Snow Suit",
    year: 2013,
    month: 1,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "familiar",
    img: "snowsuit.gif"
  },
  {
    packaged_id: 4712,
    packaged_name: "GameInformPowerDailyPro subscription card",
    year: 2013,
    month: 2,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "eudora",
    img: "subcard.gif"
  },
  {
    packaged_id: 6305,
    packaged_name: "Jarlsberg's pan",
    year: 2013,
    month: 3,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "offhand",
    img: "jarl_fry.gif"
  },
  {
    packaged_id: 6360,
    packaged_name: "Libram of Pulled Taffy",
    skill_ids: 7225,
    skill_names: "Summon Taffy",
    year: 2013,
    month: 4,
    speed_tier: 4,
    aftercore_tier: 4,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "libram",
    img: "book4.gif"
  },
  {
    packaged_id: 6413,
    packaged_name: "Order of the Green Thumb Order Form",
    year: 2013,
    month: 5,
    speed_tier: 3,
    aftercore_tier: 6,
    tradeable: false,
    type: "slotless",
    img: "floristform.gif"
  },
  {
    packaged_id: 6561,
    packaged_name: "adventurer clone egg",
    familiar_ids: 174,
    familiar_names: "Mini-Adventurer",
    year: 2013,
    month: 6,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "cloneegg.gif"
  },
  {
    packaged_id: 6582,
    packaged_name: "Clan hot dog stand",
    year: 2013,
    month: 7,
    tradeable: false,
    type: "vip",
    img: "crate.gif"
  },
  {
    packaged_id: 4930,
    packaged_name: "Folder Holder",
    opened_ids: 6617,
    opened_names: "over-the-shoulder Folder Holder",
    year: 2013,
    month: 8,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "folderholder.gif"
  },
  {
    packaged_id: 6411,
    packaged_name: "KoLHS Pep Squad Box",
    familiar_ids: 158,
    familiar_names: "Steam-Powered Cheerleader",
    year: 2013,
    month: 9,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "crate.gif"
  },
  {
    packaged_id: 6784,
    packaged_name: "deanimated reanimator's coffin",
    familiar_ids: 176,
    familiar_names: "Reanimated Reanimator",
    year: 2013,
    month: 10,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "coffinlid.gif"
  },
  {
    packaged_id: 6860,
    packaged_name: "Pantsgiving",
    year: 2013,
    month: 11,
    speed_tier: 5,
    aftercore_tier: 4,
    tradeable: true,
    type: "item",
    equipment_slot: "pants",
    img: "pantsgiving.gif"
  },
  {
    packaged_id: 7003,
    packaged_name: "The Smith's Tome",
    skill_ids: 7218,
    skill_names: "Summon Smithsness",
    year: 2013,
    month: 12,
    speed_tier: 2,
    aftercore_tier: 6,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "tome",
    img: "book4.gif"
  },
  {
    packaged_id: 5895,
    packaged_name: "avatar of the Unconscious Collective",
    familiar_ids: 166,
    familiar_names: "Unconscious Collective",
    year: 2013,
    speed_tier: 4,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "uclarva.gif"
  },
  {
    packaged_id: 5893,
    packaged_name: "dreaming Jung man",
    familiar_ids: 165,
    familiar_names: "Angry Jung Man",
    year: 2013,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "jungmanlarva.gif"
  },
  {
    packaged_id: 7069,
    packaged_name: "Discontent™ Winter Garden Catalog",
    opened_ids: 7070,
    opened_names: "packet of winter seeds",
    year: 2014,
    month: 1,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "campground",
    campground_slot: "garden",
    img: "wintercatalog.gif"
  },
  {
    packaged_id: 7200,
    packaged_name: "Buddy Bjorn",
    year: 2014,
    month: 2,
    speed_tier: 4,
    aftercore_tier: 3,
    tradeable: true,
    type: "item",
    equipment_slot: "back",
    img: "buddybjorn.gif"
  },
  {
    packaged_id: 7250,
    packaged_name: "Sneaky Pete's leather jacket",
    year: 2014,
    month: 3,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "shirt",
    img: "petejacket.gif"
  },
  {
    packaged_id: 7382,
    packaged_name: "Little Geneticist DNA-Splicing Lab",
    year: 2014,
    month: 4,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: true,
    type: "campground",
    campground_slot: "workshed",
    img: "genelab.gif"
  },
  {
    packaged_id: 7466,
    packaged_name: "airplane charter: Spring Break Beach",
    year: 2014,
    month: 5,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "content",
    img: "aircharter.gif"
  },
  {
    packaged_id: 7312,
    packaged_name: "still grill",
    familiar_ids: 183,
    familiar_names: "Galloping Grill",
    year: 2014,
    month: 6,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "stillgrill.gif"
  },
  {
    packaged_id: 7588,
    packaged_name: "Clan speakeasy",
    year: 2014,
    month: 7,
    tradeable: false,
    type: "vip",
    img: "crate.gif"
  },
  {
    packaged_id: 7706,
    packaged_name: "The Confiscator's Grimoire",
    skill_ids: 7230,
    skill_names: "Summon Confiscated Things",
    year: 2014,
    month: 8,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "grimoire",
    img: "book4.gif"
  },
  {
    packaged_id: 7709,
    packaged_name: "Thor's Pliers",
    year: 2014,
    month: 9,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "weapon",
    img: "thorpliers.gif"
  },
  {
    packaged_id: 7767,
    packaged_name: "airplane charter: Conspiracy Island",
    year: 2014,
    month: 10,
    speed_tier: 5,
    aftercore_tier: 3,
    tradeable: false,
    type: "content",
    img: "aircharter.gif"
  },
  {
    packaged_id: 7920,
    packaged_name: "fist turkey outline",
    familiar_ids: 188,
    familiar_names: "Fist Turkey",
    year: 2014,
    month: 11,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "fistoutline.gif"
  },
  {
    packaged_id: 7956,
    packaged_name: "Crimbo sapling",
    familiar_ids: 189,
    familiar_names: "Crimbo Shrub",
    year: 2014,
    month: 12,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "crimbosapling.gif"
  },
  {
    packaged_id: 7064,
    packaged_name: "hibernating Grimstone Golem",
    familiar_ids: 178,
    familiar_names: "Grimstone Golem",
    year: 2014,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "grimgolem_sleep.gif"
  },
  {
    packaged_id: 7062,
    packaged_name: "praying Grim Brother",
    familiar_ids: 179,
    familiar_names: "Grim Brother",
    year: 2014,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "grimbrotherpray.gif"
  },
  {
    packaged_id: 8019,
    packaged_name: "Chateau Mantegna room key",
    year: 2015,
    month: 1,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "slotless",
    img: "cmkey.gif"
  },
  {
    packaged_id: 8134,
    packaged_name: "bottle of lovebug pheromones",
    year: 2015,
    month: 2,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "slotless",
    img: "lovebugjuice.gif"
  },
  {
    packaged_id: 8184,
    packaged_name: "Ed the Undying exhibit crate",
    opened_ids: 8185,
    opened_names: "The Crown of Ed the Undying",
    year: 2015,
    month: 3,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    img: "crate.gif"
  },
  {
    packaged_id: 8203,
    packaged_name: "airplane charter: Dinseylandfill",
    year: 2015,
    month: 4,
    speed_tier: 5,
    aftercore_tier: 1,
    tradeable: false,
    type: "content",
    img: "aircharter.gif"
  },
  {
    packaged_id: 8260,
    packaged_name: "portable Mayo Clinic",
    year: 2015,
    month: 5,
    speed_tier: 4,
    aftercore_tier: 2,
    tradeable: true,
    type: "campground",
    campground_slot: "workshed",
    img: "mayocase.gif"
  },
  {
    packaged_id: 8287,
    packaged_name: "yellow puck",
    familiar_ids: 196,
    familiar_names: "Puck Man",
    year: 2015,
    month: 6,
    speed_tier: 3,
    aftercore_tier: 4,
    tradeable: false,
    type: "familiar",
    img: "yellapuck.gif"
  },
  {
    packaged_id: 8304,
    packaged_name: "yellow puck with a bow on it",
    familiar_ids: 197,
    familiar_names: "Ms. Puck Man",
    year: 2015,
    month: 6,
    speed_tier: 3,
    aftercore_tier: 4,
    tradeable: false,
    type: "familiar",
    img: "msyellapuck.gif"
  },
  {
    packaged_id: 8381,
    packaged_name: "Pack of Every Card",
    opened_ids: 8382,
    opened_names: "Deck of Every Card",
    year: 2015,
    month: 7,
    speed_tier: 1,
    aftercore_tier: 6,
    tradeable: false,
    type: "item",
    img: "deckbox.gif"
  },
  {
    packaged_id: 8487,
    packaged_name: "airplane charter: That 70s Volcano",
    year: 2015,
    month: 8,
    speed_tier: 5,
    aftercore_tier: 4,
    tradeable: false,
    type: "content",
    img: "aircharter.gif"
  },
  {
    packaged_id: 8564,
    packaged_name: "shrine to the Barrel god",
    year: 2015,
    month: 9,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "slotless",
    img: "crate.gif"
  },
  {
    packaged_id: 8639,
    packaged_name: "haunted doghouse",
    year: 2015,
    month: 10,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "campground",
    img: "crate.gif"
  },
  {
    packaged_id: 8674,
    packaged_name: "airplane charter: The Glaciest",
    year: 2015,
    month: 11,
    speed_tier: 5,
    aftercore_tier: 3,
    tradeable: false,
    type: "content",
    img: "aircharter.gif"
  },
  {
    packaged_id: 8706,
    packaged_name: "machine elf capsule",
    familiar_ids: 199,
    familiar_names: "Machine Elf",
    year: 2015,
    month: 12,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "machelfcapsule.gif"
  },
  {
    packaged_id: 8064,
    packaged_name: "golden monkey statuette",
    familiar_ids: 192,
    familiar_names: "Golden Monkey",
    year: 2015,
    speed_tier: 5,
    aftercore_tier: 5,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "goldmonkeystat.gif"
  },
  {
    packaged_id: 8068,
    packaged_name: "Professor of Spelunkology",
    familiar_ids: 193,
    familiar_names: "Adventurous Spelunker",
    year: 2015,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "spelprof.gif"
  },
  {
    packaged_id: 8600,
    packaged_name: "potted tea tree",
    year: 2015,
    speed_tier: 3,
    aftercore_tier: 5,
    is_con: true,
    tradeable: false,
    type: "campground",
    img: "teatree.gif"
  },
  {
    packaged_id: 8705,
    packaged_name: "X-32-F snowman crate",
    year: 2016,
    month: 1,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "slotless",
    img: "crate.gif"
  },
  {
    packaged_id: 8836,
    packaged_name: "LT&T telegraph office deed",
    year: 2016,
    month: 2,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "content",
    img: "document.gif"
  },
  {
    packaged_id: 8989,
    packaged_name: "Witchess Set",
    year: 2016,
    month: 3,
    speed_tier: 2,
    aftercore_tier: 2,
    tradeable: false,
    type: "campground",
    img: "chessset.gif"
  },
  {
    packaged_id: 9e3,
    packaged_name: "Clan Floundry",
    year: 2016,
    month: 4,
    tradeable: false,
    type: "vip",
    img: "crate.gif"
  },
  {
    packaged_id: 9016,
    packaged_name: "disconnected intergnat",
    familiar_ids: 203,
    familiar_names: "Intergnat",
    year: 2016,
    month: 5,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "discognat.gif"
  },
  {
    packaged_id: 9033,
    packaged_name: "Source terminal",
    year: 2016,
    month: 6,
    speed_tier: 0,
    aftercore_tier: 0,
    tradeable: false,
    type: "campground",
    img: "sourceterminal.gif"
  },
  {
    packaged_id: 9073,
    packaged_name: "detective school application",
    year: 2016,
    month: 7,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "slotless",
    img: "letter.gif"
  },
  {
    packaged_id: 9081,
    packaged_name: "DIY protonic accelerator kit",
    opened_ids: 9082,
    opened_names: "protonic accelerator pack",
    year: 2016,
    month: 8,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "back",
    img: "crate.gif"
  },
  {
    packaged_id: 9103,
    packaged_name: "Dear Past Self Package",
    opened_ids: 9104,
    opened_names: "Time-Spinner",
    year: 2016,
    month: 9,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    img: "pastselfpackage.gif"
  },
  {
    packaged_id: 9136,
    packaged_name: "li'l orphan tot",
    familiar_ids: 206,
    familiar_names: "Trick-or-Treating Tot",
    year: 2016,
    month: 10,
    speed_tier: 3,
    aftercore_tier: 0,
    tradeable: false,
    type: "familiar",
    img: "boredtot.gif"
  },
  {
    packaged_id: 9189,
    packaged_name: "Granny Tood's Thanksgarden Catalog",
    year: 2016,
    month: 11,
    speed_tier: 2,
    aftercore_tier: 6,
    tradeable: false,
    type: "campground",
    campground_slot: "garden",
    img: "thankscatalog.gif"
  },
  {
    packaged_id: 9203,
    packaged_name: "Build-a-City Gingerbread kit",
    year: 2016,
    month: 12,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "content",
    img: "gingercity.gif"
  },
  {
    packaged_id: 9133,
    packaged_name: "KoL Con 13 snowglobe",
    year: 2016,
    speed_tier: 6,
    aftercore_tier: 4,
    is_con: true,
    tradeable: true,
    type: "item",
    equipment_slot: "offhand",
    img: "consnowglobe.gif"
  },
  {
    packaged_id: 8831,
    packaged_name: "basking robin",
    familiar_ids: 201,
    familiar_names: "Rockin' Robin",
    year: 2016,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "baskinrobin.gif"
  },
  {
    packaged_id: 6750,
    packaged_name: "Gordon Beer's Beer Garden Catalog",
    opened_ids: 6751,
    opened_names: "packet of beer seeds",
    year: 2013,
    speed_tier: 5,
    aftercore_tier: 6,
    is_con: true,
    tradeable: false,
    type: "campground",
    campground_slot: "garden",
    img: "beercat.gif"
  },
  {
    packaged_id: 7730,
    packaged_name: "Xi Receiver Unit",
    year: 2014,
    speed_tier: 5,
    aftercore_tier: 6,
    is_con: true,
    tradeable: false,
    type: "eudora",
    img: "transmitter.gif"
  },
  {
    packaged_id: 8795,
    packaged_name: "Batfellow comic",
    year: 2016,
    speed_tier: 6,
    aftercore_tier: 5,
    is_ioty: true,
    tradeable: true,
    type: "item",
    img: "batfellowbook.gif"
  },
  {
    packaged_id: 5862,
    packaged_name: "Tome of Rad Libs",
    skill_ids: 7217,
    skill_names: "Summon Rad Libs",
    year: 2012,
    speed_tier: 5,
    aftercore_tier: 5,
    is_con: true,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "tome",
    img: "radlibtome.gif"
  },
  {
    packaged_id: 9296,
    packaged_name: "space planula",
    familiar_ids: 209,
    familiar_names: "Space Jellyfish",
    year: 2017,
    month: 1,
    speed_tier: 1,
    aftercore_tier: 2,
    tradeable: false,
    type: "familiar",
    img: "planula.gif"
  },
  {
    packaged_id: 9316,
    packaged_name: "heart-shaped crate",
    year: 2017,
    month: 2,
    speed_tier: 2,
    aftercore_tier: 5,
    tradeable: false,
    type: "content",
    img: "heartcrate.gif"
  },
  {
    packaged_id: 9401,
    packaged_name: "unpowered Robortender",
    familiar_ids: 211,
    familiar_names: "Robortender",
    year: 2017,
    month: 3,
    speed_tier: 4,
    aftercore_tier: -1,
    tradeable: false,
    type: "familiar",
    img: "robotenderlarva.gif"
  },
  {
    packaged_id: 9404,
    packaged_name: "Spacegate access badge",
    year: 2017,
    month: 4,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "content",
    img: "sgbadge.gif"
  },
  {
    packaged_id: 9478,
    packaged_name: "New-You Club Membership Form",
    year: 2017,
    month: 5,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "eudora",
    img: "newyouform.gif"
  },
  {
    packaged_id: 9492,
    packaged_name: "suspicious package",
    opened_ids: 9493,
    opened_names: "Kremlin's Greatest Briefcase",
    year: 2017,
    month: 6,
    speed_tier: 2,
    aftercore_tier: 4,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "kgbpackage.gif"
  },
  {
    packaged_id: 9507,
    packaged_name: "LI-11 Motor Pool voucher",
    opened_ids: 9508,
    opened_names: "Asdon Martin keyfob (on ring)",
    year: 2017,
    month: 7,
    speed_tier: 1,
    aftercore_tier: 1,
    tradeable: false,
    type: "campground",
    campground_slot: "workshed",
    img: "l11voucher.gif"
  },
  {
    packaged_id: 9511,
    packaged_name: "Pocket Meteor Guide",
    opened_ids: 9512,
    opened_names: "Pocket Meteor Guide (well-thumbed)",
    skill_ids: 176,
    skill_names: "Meteor Lore",
    year: 2017,
    month: 8,
    speed_tier: 1,
    aftercore_tier: 0,
    tradeable: false,
    type: "skill",
    img: "meteorbook.gif"
  },
  {
    packaged_id: 9528,
    packaged_name: "corked genie bottle",
    opened_ids: 9529,
    opened_names: "genie bottle",
    year: 2017,
    month: 9,
    speed_tier: 1,
    aftercore_tier: 2,
    tradeable: false,
    type: "item",
    img: "gbottle_cork.gif"
  },
  {
    packaged_id: 9541,
    packaged_name: "xo-skeleton-in-a-box",
    familiar_ids: 213,
    familiar_names: "XO Skeleton",
    year: 2017,
    month: 10,
    speed_tier: 2,
    aftercore_tier: 4,
    tradeable: false,
    type: "familiar",
    img: "xobox.gif"
  },
  {
    packaged_id: 9572,
    packaged_name: "pantogram",
    opened_ids: 9573,
    opened_names: "portable pantogram",
    year: 2017,
    month: 11,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    img: "pantogramgram.gif"
  },
  {
    packaged_id: 9591,
    packaged_name: "locked mumming trunk",
    opened_ids: 9592,
    opened_names: "mumming trunk",
    year: 2017,
    month: 12,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    img: "mumtrunk_closed.gif"
  },
  {
    packaged_id: 9303,
    packaged_name: "hopeful candle",
    familiar_ids: 210,
    familiar_names: "Optimistic Candle",
    year: 2017,
    speed_tier: 5,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "hopefulcandle.gif"
  },
  {
    packaged_id: 9689,
    packaged_name: "January's Garbage Tote (unopened)",
    opened_ids: 9690,
    opened_names: "January's Garbage Tote",
    year: 2018,
    month: 1,
    speed_tier: 1,
    aftercore_tier: 3,
    tradeable: false,
    type: "item",
    img: "tote_closed.gif"
  },
  {
    packaged_id: 9712,
    packaged_name: "Clan Carnival Game",
    year: 2018,
    month: 2,
    tradeable: false,
    type: "vip",
    img: "crate.gif"
  },
  {
    packaged_id: 9759,
    packaged_name: "Pokéfam Guide to Capturing All of Them",
    opened_ids: 9760,
    opened_names: "packet of tall grass seeds",
    year: 2018,
    month: 3,
    speed_tier: 5,
    aftercore_tier: 4,
    tradeable: false,
    type: "campground",
    campground_slot: "garden",
    img: "pokebook.gif"
  },
  {
    packaged_id: 9835,
    packaged_name: "FantasyRealm membership packet",
    year: 2018,
    month: 4,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "content",
    img: "fr_packet.gif"
  },
  {
    packaged_id: 9661,
    packaged_name: "God Lobster Egg",
    familiar_ids: 266,
    familiar_names: "God Lobster",
    year: 2018,
    month: 5,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "godlob_egg.gif"
  },
  {
    packaged_id: 9920,
    packaged_name: "SongBoom™ BoomBox Box",
    opened_ids: 9919,
    opened_names: "SongBoom™ BoomBox",
    year: 2018,
    month: 6,
    speed_tier: 4,
    aftercore_tier: 1,
    tradeable: false,
    type: "item",
    img: "songboomboxbox.gif"
  },
  {
    packaged_id: 9939,
    packaged_name: "kitten burglar",
    familiar_ids: 267,
    familiar_names: "Cat Burglar",
    year: 2018,
    month: 7,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "kittenburglar.gif"
  },
  {
    packaged_id: 9927,
    packaged_name: "Bastille Battalion control rig crate",
    opened_ids: 9928,
    opened_names: "Bastille Battalion control rig",
    year: 2018,
    month: 8,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: false,
    type: "item",
    img: "bbattcrate.gif"
  },
  {
    packaged_id: 9942,
    packaged_name: "Neverending Party invitation envelope",
    year: 2018,
    month: 9,
    speed_tier: 2,
    aftercore_tier: 3,
    tradeable: false,
    type: "content",
    img: "npartyinv.gif"
  },
  {
    packaged_id: 9988,
    packaged_name: "latte lovers club card",
    opened_ids: 9987,
    opened_names: "latte lovers member's mug",
    year: 2018,
    month: 10,
    speed_tier: 2,
    aftercore_tier: 4,
    tradeable: false,
    type: "item",
    equipment_slot: "offhand",
    img: "lattecard.gif"
  },
  {
    packaged_id: 9989,
    packaged_name: "voter registration form",
    year: 2018,
    month: 11,
    speed_tier: 2,
    aftercore_tier: 5,
    tradeable: false,
    type: "content",
    img: "vrform.gif"
  },
  {
    packaged_id: 10049,
    packaged_name: "Boxing Day care package",
    year: 2018,
    month: 12,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "content",
    img: "boxingpackage.gif"
  },
  {
    packaged_id: 9679,
    packaged_name: "kerosene-soaked skip",
    familiar_ids: 214,
    familiar_names: "Garbage Fire",
    year: 2018,
    speed_tier: 5,
    aftercore_tier: 5,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "dumpsternofire.gif"
  },
  {
    packaged_id: 10057,
    packaged_name: "Kramco Industries packing carton",
    opened_ids: 10058,
    opened_names: "Kramco Sausage-o-Matic™",
    year: 2019,
    month: 1,
    speed_tier: 0,
    aftercore_tier: 0,
    tradeable: false,
    type: "item",
    equipment_slot: "offhand",
    img: "saugrindbox.gif"
  },
  {
    packaged_id: 10165,
    packaged_name: "mint condition Lil' Doctor™ bag",
    opened_ids: 10166,
    opened_names: "Lil' Doctor™ bag",
    year: 2019,
    month: 2,
    speed_tier: 2,
    aftercore_tier: 4,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "dbag_mint.gif"
  },
  {
    packaged_id: 10241,
    packaged_name: "vampyric cloake pattern",
    opened_ids: 10242,
    opened_names: "vampyric cloake",
    year: 2019,
    month: 3,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "back",
    img: "cloakepattern.gif"
  },
  {
    packaged_id: 10187,
    packaged_name: "PirateRealm membership packet",
    year: 2019,
    month: 4,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "content",
    img: "pr_packet.gif"
  },
  {
    packaged_id: 10250,
    packaged_name: "Fourth of May Cosplay Saber kit",
    opened_ids: 10251,
    opened_names: "Fourth of May Cosplay Saber",
    year: 2019,
    month: 5,
    speed_tier: 1,
    aftercore_tier: 4,
    tradeable: false,
    type: "item",
    equipment_slot: "weapon",
    img: "may4swordkit.gif"
  },
  {
    packaged_id: 10256,
    packaged_name: "rune-strewn spoon cocoon",
    opened_ids: 10254,
    opened_names: "hewn moon-rune spoon",
    year: 2019,
    month: 6,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "spooncocoon.gif"
  },
  {
    packaged_id: 10257,
    packaged_name: "Beach Comb Box",
    opened_ids: 10258,
    opened_names: "Beach Comb",
    year: 2019,
    month: 7,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "beachcombbox.gif"
  },
  {
    packaged_id: 10292,
    packaged_name: "Distant Woods Getaway Brochure",
    year: 2019,
    month: 8,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "slotless",
    img: "campbrochure.gif"
  },
  {
    packaged_id: 10323,
    packaged_name: "packaged Pocket Professor",
    familiar_ids: 274,
    familiar_names: "Pocket Professor",
    year: 2019,
    month: 9,
    speed_tier: 1,
    aftercore_tier: 0,
    tradeable: false,
    type: "familiar",
    img: "lilprofessoroff.gif"
  },
  {
    packaged_id: 10332,
    packaged_name: "Unopened Eight Days a Week Pill Keeper",
    opened_ids: 10333,
    opened_names: "Eight Days a Week Pill Keeper",
    year: 2019,
    month: 10,
    speed_tier: 2,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "pillminderpack.gif"
  },
  {
    packaged_id: 10334,
    packaged_name: "unopened diabolic pizza cube box",
    opened_ids: 10335,
    opened_names: "diabolic pizza cube",
    year: 2019,
    month: 11,
    speed_tier: 2,
    aftercore_tier: 5,
    tradeable: false,
    type: "campground",
    campground_slot: "workshed",
    img: "crate.gif"
  },
  {
    packaged_id: 10345,
    packaged_name: "red-spotted snapper roe",
    familiar_ids: 275,
    familiar_names: "Red-Nosed Snapper",
    year: 2019,
    month: 12,
    speed_tier: 3,
    aftercore_tier: 2,
    tradeable: false,
    type: "familiar",
    img: "redroe.gif"
  },
  {
    packaged_id: 10146,
    packaged_name: "elf sleeper agent",
    familiar_ids: 271,
    familiar_names: "Elf Operative",
    year: 2019,
    speed_tier: 6,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "elfoplarva.gif"
  },
  {
    packaged_id: 10433,
    packaged_name: "unopened Bird-a-Day calendar",
    opened_ids: 10434,
    opened_names: "Bird-a-Day calendar",
    year: 2020,
    month: 1,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    img: "birdcal_unopened.gif"
  },
  {
    packaged_id: 10437,
    packaged_name: "mint-in-box Powerful Glove",
    opened_ids: 10438,
    opened_names: "Powerful Glove",
    year: 2020,
    month: 2,
    speed_tier: 1,
    aftercore_tier: 0,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "pglove_inbox.gif"
  },
  {
    packaged_id: 10481,
    packaged_name: "Better Shrooms and Gardens catalog",
    opened_ids: 10482,
    opened_names: "packet of mushroom spores",
    year: 2020,
    month: 3,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "campground",
    campground_slot: "garden",
    img: "mushcatalog.gif"
  },
  {
    packaged_id: 10502,
    packaged_name: "sinistral homunculus",
    familiar_ids: 278,
    familiar_names: "Left-Hand Man",
    year: 2020,
    month: 4,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "lhmlarva.gif"
  },
  {
    packaged_id: 10532,
    packaged_name: "Guzzlr application",
    opened_ids: 10533,
    opened_names: "Guzzlr tablet",
    year: 2020,
    month: 5,
    speed_tier: 6,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "guzzlrapp.gif"
  },
  {
    packaged_id: 10573,
    packaged_name: "bag of Iunion stones",
    opened_ids: 10574,
    opened_names: "Iunion Crown",
    year: 2020,
    month: 6,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: false,
    type: "item",
    equipment_slot: "hat",
    img: "iunionbag.gif"
  },
  {
    packaged_id: 10579,
    packaged_name: "baby camelCalf",
    familiar_ids: 279,
    familiar_names: "Melodramedary",
    year: 2020,
    month: 7,
    speed_tier: 0,
    aftercore_tier: 2,
    tradeable: false,
    type: "familiar",
    img: "camelcalf.gif"
  },
  {
    packaged_id: 10581,
    packaged_name: "packaged SpinMaster™ lathe",
    opened_ids: 10582,
    opened_names: "SpinMaster™ lathe",
    year: 2020,
    month: 8,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    img: "lathebox.gif"
  },
  {
    packaged_id: 10635,
    packaged_name: "bagged Cargo Cultist Shorts",
    opened_ids: 10636,
    opened_names: "Cargo Cultist Shorts",
    year: 2020,
    month: 9,
    speed_tier: 3,
    aftercore_tier: 6,
    tradeable: false,
    type: "item",
    equipment_slot: "pants",
    img: "cultistshortsbag.gif"
  },
  {
    packaged_id: 10644,
    packaged_name: "Comprehensive Cartographic Compendium",
    opened_ids: 10645,
    opened_names: "Comprehensive Cartographic Compendium (well-read)",
    skill_ids: 196,
    skill_names: "Comprehensive Cartography",
    year: 2020,
    month: 10,
    speed_tier: 1,
    aftercore_tier: 5,
    tradeable: false,
    type: "skill",
    img: "cccbook.gif"
  },
  {
    packaged_id: 10646,
    packaged_name: "packaged knock-off retro superhero cape",
    opened_ids: 10647,
    opened_names: "unwrapped knock-off retro superhero cape",
    year: 2020,
    month: 11,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "back",
    img: "retrocape0.gif"
  },
  {
    packaged_id: 10648,
    packaged_name: "box o' ghosts",
    opened_ids: [10649, 10650, 10651],
    opened_names: [
      "gregarious ghostling",
      "grinning ghostling",
      "greedy ghostling"
    ],
    familiar_ids: [280, 281, 282],
    familiar_names: [
      "Ghost of Crimbo Carols",
      "Ghost of Crimbo Cheer",
      "Ghost of Crimbo Commerce"
    ],
    year: 2020,
    month: 12,
    speed_tier: 5,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "cghostbox.gif"
  },
  {
    packaged_id: 10431,
    packaged_name: "Retrospecs try-at-home kit",
    opened_ids: 10432,
    opened_names: "Retrospecs",
    year: 2020,
    speed_tier: 5,
    aftercore_tier: 5,
    is_ioty: true,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "retrospecsbox.gif"
  },
  {
    packaged_id: 10729,
    packaged_name: "packaged miniature crystal ball",
    opened_ids: 10730,
    opened_names: "miniature crystal ball",
    year: 2021,
    month: 1,
    speed_tier: 1,
    aftercore_tier: 2,
    tradeable: false,
    type: "item",
    equipment_slot: "familiar",
    img: "famballbox.gif"
  },
  {
    packaged_id: 10733,
    packaged_name: "emotion chip",
    opened_ids: 10734,
    opened_names: "spinal-fluid-covered emotion chip",
    skill_ids: 203,
    skill_names: "Emotionally Chipped",
    year: 2021,
    month: 2,
    speed_tier: 0,
    aftercore_tier: 2,
    tradeable: false,
    type: "skill",
    img: "emochip_clean.gif"
  },
  {
    packaged_id: 10737,
    packaged_name: "power seed",
    opened_ids: 10738,
    opened_names: "potted power plant",
    year: 2021,
    month: 3,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    img: "powerseed.gif"
  },
  {
    packaged_id: 10748,
    packaged_name: "packaged backup camera",
    opened_ids: 10749,
    opened_names: "backup camera",
    year: 2021,
    month: 4,
    speed_tier: 0,
    aftercore_tier: 0,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "backcamera_box.gif"
  },
  {
    packaged_id: 10750,
    packaged_name: "shortest-order cook",
    familiar_ids: 283,
    familiar_names: "Shorter-Order Cook",
    year: 2021,
    month: 5,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "shortcheflarva.gif"
  },
  {
    packaged_id: 10760,
    packaged_name: "packaged familiar scrapbook",
    opened_ids: 10759,
    opened_names: "familiar scrapbook",
    year: 2021,
    month: 6,
    speed_tier: 3,
    aftercore_tier: 6,
    tradeable: false,
    type: "item",
    equipment_slot: "offhand",
    img: "fambook_blank.gif"
  },
  {
    packaged_id: 10761,
    packaged_name: "clan underground fireworks shop",
    year: 2021,
    month: 7,
    tradeable: false,
    type: "vip",
    img: "crate.gif"
  },
  {
    packaged_id: 10773,
    packaged_name: "Our Daily Candles™ order form",
    year: 2021,
    month: 8,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: false,
    type: "eudora",
    img: "canclecform.gif"
  },
  {
    packaged_id: 10796,
    packaged_name: "packaged industrial fire extinguisher",
    opened_ids: 10797,
    opened_names: "industrial fire extinguisher",
    year: 2021,
    month: 9,
    speed_tier: 1,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "weapon",
    img: "exting2box.gif"
  },
  {
    packaged_id: 10801,
    packaged_name: "bottled Vampire Vintner",
    familiar_ids: 284,
    familiar_names: "Vampire Vintner",
    year: 2021,
    month: 10,
    speed_tier: 3,
    aftercore_tier: 6,
    tradeable: false,
    type: "familiar",
    img: "vampvintbottle.gif"
  },
  {
    packaged_id: 10803,
    packaged_name: "packaged Daylight Shavings Helmet",
    opened_ids: 10804,
    opened_names: "Daylight Shavings Helmet",
    year: 2021,
    month: 11,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "hat",
    img: "dshelmet_box.gif"
  },
  {
    packaged_id: 10814,
    packaged_name: "packaged cold medicine cabinet",
    opened_ids: 10815,
    opened_names: "cold medicine cabinet",
    year: 2021,
    month: 12,
    speed_tier: 0,
    aftercore_tier: 1,
    tradeable: false,
    type: "campground",
    campground_slot: "workshed",
    img: "cmcabinet_box.gif"
  },
  {
    packaged_id: 10731,
    packaged_name: "fresh can of paint",
    opened_ids: 10732,
    opened_names: "fresh coat of paint",
    year: 2021,
    speed_tier: 6,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "item",
    img: "freshcoat.gif"
  },
  {
    packaged_id: 10890,
    packaged_name: "undrilled cosmic bowling ball",
    opened_ids: 10891,
    opened_names: "cosmic bowling ball",
    year: 2022,
    month: 1,
    speed_tier: 1,
    aftercore_tier: 2,
    tradeable: false,
    type: "item",
    equipment_slot: "combat",
    img: "cosmicball.gif"
  },
  {
    packaged_id: 10892,
    packaged_name: "combat lover's locket lockbox",
    opened_ids: 10893,
    opened_names: "combat lover's locket",
    year: 2022,
    month: 2,
    speed_tier: 2,
    aftercore_tier: 2,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "lovelocketbox.gif"
  },
  {
    packaged_id: 10895,
    packaged_name: "grey gosling",
    familiar_ids: 287,
    familiar_names: "Grey Goose",
    year: 2022,
    month: 3,
    speed_tier: 1,
    aftercore_tier: -1,
    tradeable: false,
    type: "familiar",
    img: "greygosling.gif"
  },
  {
    packaged_id: 10898,
    packaged_name: "undamaged Unbreakable Umbrella",
    opened_ids: 10899,
    opened_names: "unbreakable umbrella",
    year: 2022,
    month: 4,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "offhand",
    img: "unbrella1.gif"
  },
  {
    packaged_id: 10900,
    packaged_name: "MayDay™ contract",
    year: 2022,
    month: 5,
    speed_tier: 4,
    aftercore_tier: 6,
    tradeable: false,
    type: "slotless",
    img: "maydaycontract.gif"
  },
  {
    packaged_id: 10919,
    packaged_name: "packaged June cleaver",
    opened_ids: 10920,
    opened_names: "June cleaver",
    year: 2022,
    month: 6,
    speed_tier: 3,
    aftercore_tier: 3,
    tradeable: false,
    type: "item",
    equipment_slot: "weapon",
    img: "junecleaverbox.gif"
  },
  {
    packaged_id: 10928,
    packaged_name: "designer sweatpants (new old stock)",
    opened_ids: 10929,
    opened_names: "designer sweatpants",
    year: 2022,
    month: 7,
    speed_tier: 4,
    aftercore_tier: 2,
    tradeable: false,
    type: "item",
    equipment_slot: "pants",
    img: "sweats_box.gif"
  },
  {
    packaged_id: 10931,
    packaged_name: "unopened tiny stillsuit",
    opened_ids: 10932,
    opened_names: "tiny stillsuit",
    year: 2022,
    month: 8,
    speed_tier: 3,
    aftercore_tier: 4,
    tradeable: false,
    type: "item",
    equipment_slot: "familiar",
    img: "stillsuit_box.gif"
  },
  {
    packaged_id: 10951,
    packaged_name: "packaged Jurassic Parka",
    opened_ids: 10952,
    opened_names: "Jurassic Parka",
    year: 2022,
    month: 9,
    speed_tier: 0,
    aftercore_tier: 2,
    tradeable: false,
    type: "item",
    equipment_slot: "shirt",
    img: "jparka_box.gif"
  },
  {
    packaged_id: 10953,
    packaged_name: "boxed autumn-aton",
    opened_ids: 10954,
    opened_names: "autumn-aton",
    year: 2022,
    month: 10,
    speed_tier: 1,
    aftercore_tier: 4,
    tradeable: false,
    type: "item",
    img: "crate.gif"
  },
  {
    packaged_id: 10966,
    packaged_name: "mummified entombed cookbookbat",
    familiar_ids: 288,
    familiar_names: "Cookbookbat",
    year: 2022,
    month: 11,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "bbat_larva.gif"
  },
  {
    packaged_id: 11044,
    packaged_name: "packaged model train set",
    opened_ids: 11045,
    opened_names: "model train set",
    year: 2022,
    month: 12,
    speed_tier: 2,
    aftercore_tier: 1,
    tradeable: false,
    type: "campground",
    campground_slot: "workshed",
    img: "modeltrain_box.gif"
  },
  {
    packaged_id: 10884,
    packaged_name: "mint condition magnifying glass",
    opened_ids: 10885,
    opened_names: "cursed magnifying glass",
    year: 2022,
    speed_tier: 3,
    aftercore_tier: 5,
    is_ioty: true,
    tradeable: false,
    type: "item",
    equipment_slot: "offhand",
    img: "cursedmagbox.gif"
  },
  {
    packaged_id: 11099,
    packaged_name: "Rock Garden Guide",
    opened_ids: 11100,
    opened_names: "packet of rock seeds",
    year: 2023,
    month: 1,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "campground",
    campground_slot: "garden",
    img: "rockgardenbook.gif"
  },
  {
    packaged_id: 11115,
    packaged_name: "S.I.T. Course Voucher",
    opened_ids: 11116,
    opened_names: "S.I.T. Course Completion Certificate",
    year: 2023,
    month: 2,
    speed_tier: 4,
    aftercore_tier: 3,
    tradeable: false,
    type: "item",
    img: "sitvoucher.gif"
  },
  {
    packaged_id: 11168,
    packaged_name: "closed-circuit phone system",
    opened_ids: 11169,
    opened_names: "closed-circuit pay phone",
    year: 2023,
    month: 3,
    speed_tier: 1,
    aftercore_tier: 1,
    tradeable: false,
    type: "item",
    img: "rufusbox.gif"
  },
  {
    packaged_id: 11187,
    packaged_name: "cursed monkey glove",
    opened_ids: 11186,
    opened_names: "cursed monkey's paw",
    year: 2023,
    month: 4,
    speed_tier: 1,
    aftercore_tier: 0,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "monkeyglove.gif"
  },
  {
    packaged_id: 11222,
    packaged_name: "shrink-wrapped Cincho de Mayo",
    opened_ids: 11223,
    opened_names: "Cincho de Mayo",
    year: 2023,
    month: 5,
    speed_tier: 1,
    aftercore_tier: 1,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "cinchobox.gif"
  },
  {
    packaged_id: 11256,
    packaged_name: "shrink-wrapped 2002 Mr. Store Catalog",
    opened_ids: 11257,
    opened_names: "2002 Mr. Store Catalog",
    year: 2023,
    month: 6,
    speed_tier: 1,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    img: "2002catalog.gif"
  },
  {
    packaged_id: 11300,
    packaged_name: "sleeping patriotic eagle",
    familiar_ids: 293,
    familiar_names: "Patriotic Eagle",
    year: 2023,
    month: 7,
    speed_tier: 1,
    aftercore_tier: 2,
    tradeable: false,
    type: "familiar",
    img: "pateagle_sleep.gif"
  },
  {
    packaged_id: 11305,
    packaged_name: "boxed august scepter",
    opened_ids: 11306,
    opened_names: "august scepter",
    year: 2023,
    month: 8,
    speed_tier: 2,
    aftercore_tier: 4,
    tradeable: false,
    type: "item",
    equipment_slot: "offhand",
    img: "ascepterbox.gif"
  },
  {
    packaged_id: 11333,
    packaged_name: "book of facts",
    opened_ids: 11334,
    opened_names: "book of facts (dog-eared)",
    skill_ids: 228,
    skill_names: "Just the Facts",
    year: 2023,
    month: 9,
    speed_tier: 0,
    aftercore_tier: 0,
    tradeable: false,
    type: "skill",
    img: "factbook.gif"
  },
  {
    packaged_id: 11335,
    packaged_name: "Dark Jill-of-All-Trades",
    familiar_ids: 294,
    familiar_names: "Jill-of-All-Trades",
    year: 2023,
    month: 10,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "darkjill2.gif"
  },
  {
    packaged_id: 11340,
    packaged_name: "A Guide to Burning Leaves",
    year: 2023,
    month: 11,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "campground",
    img: "al_book.gif"
  },
  {
    packaged_id: 11364,
    packaged_name: "wrapped candy cane sword cane",
    opened_ids: 11363,
    opened_names: "candy cane sword cane",
    year: 2023,
    month: 12,
    speed_tier: 1,
    aftercore_tier: 6,
    tradeable: false,
    type: "item",
    equipment_slot: "weapon",
    img: "ccsword_box.gif"
  },
  {
    packaged_id: 11394,
    packaged_name: "crated wardrobe-o-matic",
    opened_ids: 11390,
    opened_names: "wardrobe-o-matic",
    year: 2023,
    speed_tier: 5,
    aftercore_tier: 5,
    is_con: true,
    tradeable: false,
    type: "item",
    img: "crate.gif"
  },
  {
    packaged_id: 11089,
    packaged_name: "unoccupied sheep suit",
    familiar_ids: 290,
    familiar_names: "Hobo in Sheep's Clothing",
    year: 2023,
    speed_tier: 6,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "familiar",
    img: "hobosheepl.gif"
  },
  {
    packaged_id: 11540,
    packaged_name: "baby chest mimic",
    familiar_ids: 299,
    familiar_names: "Chest Mimic",
    year: 2024,
    month: 1,
    speed_tier: 1,
    aftercore_tier: 1,
    tradeable: false,
    type: "familiar",
    img: "mimicbaby.gif"
  },
  {
    packaged_id: 11545,
    packaged_name: "in-the-box spring shoes",
    opened_ids: 11546,
    opened_names: "spring shoes",
    year: 2024,
    month: 2,
    speed_tier: 1,
    aftercore_tier: 3,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "springshoes_box.gif"
  },
  {
    packaged_id: 11560,
    packaged_name: "packaged Everfull Dart Holster",
    opened_ids: 11561,
    opened_names: "Everfull Dart Holster",
    year: 2024,
    month: 3,
    speed_tier: 1,
    aftercore_tier: 3,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "dartholster_box.gif"
  },
  {
    packaged_id: 11564,
    packaged_name: "boxed Apriling band helmet",
    opened_ids: 11565,
    opened_names: "Apriling band helmet",
    year: 2024,
    month: 4,
    speed_tier: 1,
    aftercore_tier: 2,
    tradeable: false,
    type: "item",
    equipment_slot: "hat",
    img: "aprilinghat_box.gif"
  },
  {
    packaged_id: 11571,
    packaged_name: "boxed Mayam Calendar",
    opened_ids: 11572,
    opened_names: "Mayam Calendar",
    year: 2024,
    month: 5,
    speed_tier: 2,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    img: "yamcalbox.gif"
  },
  {
    packaged_id: 11591,
    packaged_name: "mini kiwi egg",
    familiar_ids: 300,
    familiar_names: "Mini Kiwi",
    year: 2024,
    month: 6,
    speed_tier: 5,
    aftercore_tier: 2,
    tradeable: false,
    type: "familiar",
    img: "kiwi_egg.gif"
  },
  {
    packaged_id: 11608,
    packaged_name: "packaged Roman Candelabra",
    opened_ids: 11609,
    opened_names: "Roman Candelabra",
    year: 2024,
    month: 7,
    speed_tier: 1,
    aftercore_tier: 1,
    tradeable: false,
    type: "item",
    equipment_slot: "offhand",
    img: "romcandelbox.gif"
  },
  {
    packaged_id: 11629,
    packaged_name: "untorn tearaway pants package",
    opened_ids: 11630,
    opened_names: "tearaway pants",
    year: 2024,
    month: 8,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "pants",
    img: "oliver_package.gif"
  },
  {
    packaged_id: 11641,
    packaged_name: "boxed Sept-Ember Censer",
    opened_ids: 11642,
    opened_names: "Sept-Ember Censer",
    year: 2024,
    month: 9,
    speed_tier: 1,
    aftercore_tier: 6,
    tradeable: false,
    type: "item",
    img: "emberbox.gif"
  },
  {
    packaged_id: 11657,
    packaged_name: "boxed bat wings",
    opened_ids: 11658,
    opened_names: "bat wings",
    year: 2024,
    month: 10,
    speed_tier: 0,
    aftercore_tier: 4,
    tradeable: false,
    type: "item",
    equipment_slot: "back",
    img: "batwings_box.gif"
  },
  {
    packaged_id: 11672,
    packaged_name: "peace turkey outline",
    familiar_ids: 306,
    familiar_names: "Peace Turkey",
    year: 2024,
    month: 11,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "familiar",
    img: "pto.gif"
  },
  {
    packaged_id: 11686,
    packaged_name: "Sealed TakerSpace letter of Marque",
    opened_ids: 11687,
    opened_names: "TakerSpace letter of Marque",
    year: 2024,
    month: 12,
    speed_tier: 2,
    aftercore_tier: 4,
    tradeable: false,
    type: "campground",
    campground_slot: "workshed",
    img: "ts_letter2.gif"
  },
  {
    packaged_id: 11471,
    packaged_name: "Black and White Apron Enrollment Form",
    year: 2024,
    speed_tier: 4,
    aftercore_tier: 6,
    is_ioty: true,
    tradeable: false,
    type: "eudora",
    img: "apronform.gif"
  },
  {
    packaged_id: 11626,
    packaged_name: "unevolved organism",
    familiar_ids: 302,
    familiar_names: "Evolving Organism",
    year: 2024,
    speed_tier: 6,
    aftercore_tier: 6,
    is_con: true,
    tradeable: false,
    type: "familiar",
    img: "spore.gif"
  },
  {
    packaged_id: 11782,
    packaged_name: "McHugeLarge deluxe ski set",
    opened_ids: 11783,
    opened_names: "McHugeLarge duffel bag",
    year: 2025,
    month: 1,
    speed_tier: 1,
    aftercore_tier: 3,
    tradeable: false,
    type: "item",
    equipment_slot: "back",
    img: "skibag1.gif"
  },
  {
    packaged_id: 11836,
    packaged_name: "new-in-box toy Cupid bow",
    opened_ids: 11837,
    opened_names: "toy Cupid bow",
    year: 2025,
    month: 2,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "familiar",
    img: "plungebow_box.gif"
  },
  {
    packaged_id: 11860,
    packaged_name: "assemble-it-yourself Leprecondo",
    opened_ids: 11861,
    opened_names: "Leprecondo",
    year: 2025,
    month: 3,
    speed_tier: 2,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    img: "leprecondobox.gif"
  },
  {
    packaged_id: 11883,
    packaged_name: "Packaged April Shower Thoughts Calendar",
    opened_ids: 11884,
    opened_names: "April Shower Thoughts shield",
    year: 2025,
    month: 4,
    speed_tier: 3,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "offhand",
    img: "aprilcal_box.gif"
  },
  {
    packaged_id: 11904,
    packaged_name: "Unpeeled Peridot of Peril",
    opened_ids: 11905,
    opened_names: "Peridot of Peril",
    year: 2025,
    month: 5,
    speed_tier: 1,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "peridot_box.gif"
  },
  {
    packaged_id: 11918,
    packaged_name: "packaged prismatic beret",
    opened_ids: 11919,
    opened_names: "prismatic beret",
    year: 2025,
    month: 6,
    speed_tier: 2,
    aftercore_tier: 4,
    tradeable: false,
    type: "item",
    equipment_slot: "hat",
    img: "prisberet_box.gif"
  },
  {
    packaged_id: 11922,
    packaged_name: "yeti in a travel cooler",
    familiar_ids: 324,
    familiar_names: "Cooler Yeti",
    year: 2025,
    month: 7,
    speed_tier: 4,
    aftercore_tier: 2,
    tradeable: false,
    type: "familiar",
    img: "yeticooler.gif"
  },
  {
    packaged_id: 11941,
    packaged_name: "Möbius ring box",
    opened_ids: 11942,
    opened_names: "Möbius ring",
    year: 2025,
    month: 8,
    speed_tier: 3,
    aftercore_tier: 3,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "moebiusring_box.gif"
  },
  {
    packaged_id: 11807,
    packaged_name: "CyberRealm keycode",
    opened_ids: 11808,
    opened_names: "server room key",
    year: 2025,
    speed_tier: 4,
    aftercore_tier: 5,
    is_ioty: true,
    tradeable: false,
    type: "item",
    img: "cr_keycode.gif"
  },
  {
    packaged_id: 11932,
    packaged_name: "Allied Radio Backpack Pack",
    opened_ids: 11933,
    opened_names: "Allied Radio Backpack",
    year: 2025,
    speed_tier: 2,
    aftercore_tier: 4,
    is_con: true,
    tradeable: false,
    type: "item",
    equipment_slot: "back",
    img: "radiopackpack.gif"
  },
  {
    packaged_id: 3946,
    packaged_name: "Clan VIP Lounge invitation",
    opened_ids: 3947,
    opened_names: "Clan VIP Lounge key",
    year: 2009,
    speed_tier: 2,
    aftercore_tier: 3,
    tradeable: false,
    type: "item",
    img: "envelope.gif"
  },
  {
    packaged_id: 9527,
    packaged_name: "Horsery contract",
    year: 2018,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "slotless",
    img: "horserycontract.gif"
  },
  {
    packaged_id: 11001,
    packaged_name: "deed to Oliver's Place",
    year: 2024,
    speed_tier: 5,
    aftercore_tier: 5,
    tradeable: false,
    type: "slotless",
    img: "oliver_deed.gif"
  },
  {
    packaged_id: 3835,
    packaged_name: "tiny costume wardrobe",
    year: 2013,
    speed_tier: 6,
    aftercore_tier: 6,
    tradeable: true,
    type: "item",
    equipment_slot: "familiar",
    img: "wardrobe.gif"
  },
  {
    packaged_id: 5284,
    packaged_name: "Gygaxian Libram",
    skill_ids: 7223,
    skill_names: "Summon Dice",
    year: 2011,
    speed_tier: 5,
    aftercore_tier: 5,
    is_con: true,
    tradeable: false,
    type: "skill",
    bookshelf_slot: "libram",
    img: "gygaxlibram.gif"
  },
  {
    packaged_id: 4709,
    packaged_name: "hippo tutu",
    familiar_ids: 138,
    familiar_names: "Hippo Ballerina",
    year: 2010,
    speed_tier: 6,
    aftercore_tier: 6,
    is_con: true,
    tradeable: false,
    type: "familiar",
    img: "hippotutu.gif"
  },
  {
    packaged_id: 11974,
    packaged_name: "packaged Monodent of the Sea",
    opened_ids: 11975,
    opened_names: "Monodent of the Sea",
    year: 2025,
    month: 9,
    speed_tier: 4,
    aftercore_tier: 5,
    tradeable: false,
    type: "item",
    equipment_slot: "weapon",
    img: "dentpackage.gif"
  },
  {
    packaged_id: 11986,
    packaged_name: "lab-grown blood cubic zirconia",
    opened_ids: 11987,
    opened_names: "blood cubic zirconia",
    year: 2025,
    month: 10,
    speed_tier: 0,
    aftercore_tier: 1,
    tradeable: false,
    type: "item",
    equipment_slot: "accessory",
    img: "cbz_box.gif"
  },
  {
    packaged_id: 12047,
    packaged_name: "shrunken head in a duffel bag",
    opened_ids: 12048,
    opened_names: "shrunken head",
    year: 2025,
    month: 11,
    speed_tier: 3,
    aftercore_tier: 4,
    tradeable: false,
    type: "item",
    equipment_slot: "offhand",
    img: "headbag.gif"
  },
  {
    packaged_id: 12049,
    packaged_name: "stocking full of bones",
    familiar_ids: 326,
    familiar_names: "Skeleton of Crimbo Past",
    year: 2025,
    month: 12,
    speed_tier: 5,
    aftercore_tier: 1,
    tradeable: false,
    type: "familiar",
    img: "skeletonocp.gif"
  },
  {
    packaged_id: 12133,
    packaged_name: "seal-clubbing club loot box",
    opened_ids: 12134,
    opened_names: "legendary seal-clubbing club",
    year: 2026,
    month: 1,
    speed_tier: 0,
    aftercore_tier: 1,
    tradeable: false,
    type: "item",
    equipment_slot: "weapon",
    img: "leg_club_box.gif"
  },
  {
    packaged_id: 12066,
    packaged_name: "discreetly-wrapped Eternity Codpiece",
    opened_ids: 12067,
    opened_names: "The Eternity Codpiece",
    year: 2026,
    speed_tier: void 0,
    aftercore_tier: void 0,
    tradeable: false,
    is_ioty: true,
    type: "accessory",
    img: "eternitycodbox.gif"
  }
];
const WishlistContext = createContext({
  wishlist: {},
  toggleWishlist: () => {
  },
  username: "",
  userId: -1,
  lastUpdated: -1,
  isPending: false,
  error: null
});
const WishlistProvider = ({
  children,
  userId = 1927026
}) => {
  const { data, isPending, error } = useSuspenseQuery(wishlistQuery(userId));
  const wishlistMutation = useMutation(toggleWishlistMutation(userId));
  const value = data ?? {
    username: "",
    userId: -1,
    wishlist: {},
    lastUpdated: -1
  };
  return /* @__PURE__ */ jsx(
    WishlistContext,
    {
      value: {
        ...value,
        isPending,
        error,
        toggleWishlist: wishlistMutation.mutate
      },
      children
    }
  );
};
const useWishlist = () => {
  const context = use(WishlistContext);
  if (context === void 0) {
    throw new Error("useWishlist used outside of a WishlistProvider");
  }
  return context;
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function useMallPrices() {
  const { data, isPending, error } = useSuspenseQuery(mallPricesQuery);
  const result = isPending || error ? {
    prices: {},
    lastUpdated: /* @__PURE__ */ new Date()
  } : MallPriceResponseSchema.parse(data);
  return {
    mallPrices: result.prices,
    mallPricesLastUpdated: result.lastUpdated,
    isPending,
    error
  };
}
const TIME_RANGES = {
  secondsAgo: 60 * 1e3,
  minutesAgo: 60 * 60 * 1e3,
  hoursAgo: 24 * 60 * 60 * 1e3,
  yesterday: 2 * 24 * 60 * 60 * 1e3,
  daysAgo: 7 * 24 * 60 * 60 * 1e3,
  weeksAgo: 30 * 24 * 60 * 60 * 1e3
};
const TIME_AMOUNTS = {
  seconds: 1e3,
  minutes: 60 * 1e3,
  hours: 60 * 60 * 1e3,
  days: 24 * 60 * 60 * 1e3,
  weeks: 7 * 24 * 60 * 60 * 1e3,
  months: 30 * 24 * 60 * 60 * 1e3
};
function Header() {
  const { username, lastUpdated } = useWishlist();
  const { mallPricesLastUpdated } = useMallPrices();
  const { theme, setTheme, isTransitioning } = useTheme();
  const formatTimeSince = (time) => {
    if (time <= 0) return "";
    const pluralize = (count, singular) => `${count} ${singular}${count === 1 ? "" : "s"} ago`;
    const timeSince = Date.now() - time;
    if (timeSince < TIME_RANGES.secondsAgo) {
      return pluralize(Math.floor(timeSince / TIME_AMOUNTS.seconds), "second");
    } else if (timeSince < TIME_RANGES.minutesAgo) {
      return pluralize(Math.floor(timeSince / TIME_AMOUNTS.minutes), "minute");
    } else if (timeSince < TIME_RANGES.hoursAgo) {
      return pluralize(Math.floor(timeSince / TIME_AMOUNTS.hours), "hour");
    } else if (timeSince < TIME_RANGES.yesterday) {
      return "yesterday";
    } else if (timeSince < TIME_RANGES.daysAgo) {
      return pluralize(Math.floor(timeSince / TIME_AMOUNTS.days), "day");
    } else if (timeSince < TIME_RANGES.weeksAgo) {
      return pluralize(Math.floor(timeSince / TIME_AMOUNTS.weeks), "week");
    }
    return pluralize(Math.floor(timeSince / TIME_AMOUNTS.months), "month");
  };
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: "clamp-[mt,4,10,xs,sm] flex flex-col justify-between gap-2\n        sm:flex-row sm:items-end",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "clamp-[ml,0,0.5,sm,md] clamp-[text,3xl,4xl,xs,sm]\n            font-medium",
              children: "pocket wishlist"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                `clamp-[h,6,5,xs,sm] clamp-[w,6,5,xs,sm] cursor-pointer rounded-full
            bg-accent duration-100 hover:bg-foreground`,
                isTransitioning && "opacity-60"
              ),
              onClick: () => setTheme(theme === "dark" ? "light" : "dark")
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:items-end", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-accent", children: `prices updated: ${formatTimeSince(
            mallPricesLastUpdated.getTime()
          )}` }),
          /* @__PURE__ */ jsxs("span", { className: "clamp-[text,sm,base,xs,sm] text-foreground", children: [
            `${username}'s wishlist `,
            /* @__PURE__ */ jsx("span", { className: "clamp-[text,xs,sm,xs,sm]", children: "as of " }),
            /* @__PURE__ */ jsx("b", { children: formatTimeSince(lastUpdated ?? 0) })
          ] })
        ] })
      ]
    }
  );
}
const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function IconButton({
  icon,
  label,
  scale = "scale-100",
  color = "text-muted-foreground",
  accent = "text-accent-foreground",
  hover = "hover:text-foreground",
  filled = true,
  selected = false,
  ...props
}) {
  const solidIcon = ["fas", icon];
  const regIcon = ["far", icon];
  return /* @__PURE__ */ jsxs(
    Button,
    {
      variant: "link",
      className: `${selected ? accent : color} ${hover} ${scale}
        clamp-[gap,0.5,1.5,sm,md] clamp-[text,base,xl,sm,md] font-normal`,
      ...props,
      children: [
        selected || filled ? /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: solidIcon, color, size: "xs" }) : /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: regIcon, color, size: "xs" }),
        label
      ]
    }
  );
}
function Menu() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "mt-3 flex shrink-0 items-center rounded-md bg-primary px-4\n        py-2",
      children: /* @__PURE__ */ jsx(IconButton, { icon: "home", label: "all iotms", selected: true })
    }
  );
}
const useSettingsStore = create()(
  persist(
    (set) => ({
      currentSort: "date",
      currentOrder: false,
      setSort: (sort) => set(() => ({ currentSort: sort })),
      setOrder: (direction) => set(() => ({ currentOrder: direction }))
    }),
    {
      name: "wishlist-store",
      // in localStorage by default
      skipHydration: true
      // doesn't hydrate immediately bc of SSR
    }
  )
);
const useHydratedSettingsStore = () => {
  useEffect(() => {
    useSettingsStore.persist.rehydrate();
  }, []);
  return useSettingsStore();
};
function priceSort(a, b, skipTie = false) {
  const aPrice = a.price?.volume ?? 0 > 0 ? a.price?.value : null;
  const bPrice = b.price?.volume ?? 0 > 0 ? b.price?.value : null;
  const aLowest = Math.min(
    aPrice || Infinity,
    a.price?.lowestMall === -1 ? Infinity : a.price?.lowestMall || Infinity
  );
  const bLowest = Math.min(
    bPrice || Infinity,
    b.price?.lowestMall === -1 ? Infinity : b.price?.lowestMall || Infinity
  );
  if (aLowest === bLowest) {
    return skipTie ? a.name.localeCompare(b.name) : dateSort(a, b, true);
  }
  return aLowest - bLowest;
}
function dateSort(a, b, skipTie = false) {
  if (a.year !== b.year) return b.year - a.year;
  if ((a.month ?? 0) !== (b.month ?? 0)) return (b.month ?? 0) - (a.month ?? 0);
  if (a.isIOTY && !b.isIOTY) return -1;
  if (!a.isIOTY && b.isIOTY) return 1;
  if (a.isCon && !b.isCon) return -1;
  if (!a.isCon && b.isCon) return 1;
  if (skipTie) return a.name.localeCompare(b.name);
  return priceSort(a, b, true);
}
function tierSort(a, b) {
  const averageA = ((a.speed !== void 0 ? a.speed : 6) + (a.farm !== void 0 ? a.farm : 6)) / 2;
  const averageB = ((b.speed !== void 0 ? b.speed : 6) + (b.farm !== void 0 ? b.farm : 6)) / 2;
  return averageA - averageB !== 0 ? averageA - averageB : priceSort(a, b);
}
function getSortFunction(sort) {
  if (sort === "price") {
    return priceSort;
  } else if (sort === "tier") {
    return tierSort;
  }
  return dateSort;
}
const PRICE_BRACKETS = [
  [1, 2],
  [2, 3],
  [3, 5],
  [5, 10],
  [10, 50],
  [50, 12500]
];
function interpolateColorScale(percent) {
  return {
    backgroundColor: `color-mix(in srgb, var(--destructive) ${100 * percent}%, var(--secondary))`
  };
}
function adjustLightness(startColor, endColor = "black", percent, contrastColor = "white") {
  const adjustedColor = `color-mix(in oklch, ${startColor} ${100 - Math.abs(percent)}%, ${percent < 0 ? endColor : contrastColor})`;
  return {
    backgroundColor: adjustedColor
  };
}
function logBracketScale(x, range = [0, -30], brackets = PRICE_BRACKETS) {
  const bracketNum = brackets.findIndex(
    (bracket) => Math.ceil(x - 0.8) >= bracket[0] && Math.ceil(x - 0.8) < bracket[1]
  );
  if (bracketNum === -1) return range[1];
  const from = brackets[bracketNum];
  const to = [
    range[0] + (range[1] - range[0]) * bracketNum / brackets.length,
    range[0] + (range[1] - range[0]) * (bracketNum + 0.5) / brackets.length
  ];
  return to[0] + (Math.log(x) - Math.log(from[0])) * (to[1] - to[0]) / (Math.log(from[1]) - Math.log(from[0]));
}
const BASE_COLOR_CONFIG = {
  maxYears: 3,
  lightThemeOffset: 35,
  // "top half" of the mix
  darkThemeOffset: 0,
  // "bottom half" of the mix
  mixRange: 65
};
const PRICE_DARKNESS_RANGE = {
  light: [0, -30],
  dark: [0, -60]
};
function getBaseColor(isStandard, standardYear, theme) {
  if (!isStandard) return "var(--primary)";
  const themeVar = theme === "light" ? "var(--secondary-light)" : "var(--secondary-dark)";
  const themeOffset = theme === "light" ? BASE_COLOR_CONFIG.lightThemeOffset : BASE_COLOR_CONFIG.darkThemeOffset;
  const yearPercent = 1 - standardYear / BASE_COLOR_CONFIG.maxYears;
  const mixPercent = themeOffset + BASE_COLOR_CONFIG.mixRange * yearPercent;
  return `color-mix(in oklch, ${themeVar} ${mixPercent}%, var(--primary))`;
}
function getEndColor(isStandard, theme) {
  if (!isStandard) return "var(--destructive)";
  return theme === "light" ? "black" : "white";
}
function getPriceDarkness(priceRatio, theme) {
  const range = theme === "light" ? PRICE_DARKNESS_RANGE.light : PRICE_DARKNESS_RANGE.dark;
  return logBracketScale(priceRatio ?? -1, range);
}
function getContrastColor(theme) {
  return theme === "light" ? "white" : "black";
}
function useEntryBackgroundColor({
  status,
  isStandard,
  standardYear,
  priceRatio,
  theme
}) {
  const bgStyle = useMemo(() => {
    if (status === "OPENED") {
      return { backgroundColor: "var(--confirm)" };
    }
    if (status === "PACKAGED") {
      return {
        backgroundColor: `oklch(from color-mix(in hsl, var(--accent) ${theme === "light" ? "70%, white 30%" : "80%, black 20%"}) l ${theme === "light" ? "0.1" : "0.06"} h)`
      };
    }
    return adjustLightness(
      getBaseColor(isStandard, standardYear, theme),
      getEndColor(isStandard, theme),
      getPriceDarkness(priceRatio, theme),
      getContrastColor(theme)
    );
  }, [status, isStandard, standardYear, priceRatio, theme]);
  const textureClass = useMemo(() => {
    const classes = [];
    if (status === "PACKAGED") {
      classes.push("houndstooth");
    } else if (status === "OPENED") {
      classes.push("banknote");
    } else if (isStandard) {
      classes.push("dotted");
    }
    return classes.join(" ");
  }, [status, isStandard]);
  return { bgStyle, textureClass };
}
const ENTRY_HEIGHT_PX = 2;
const HOVER_PADDING_MULTIPLIER = 1.5;
const TOP_OFFSET = 24;
const MINIMAP_MIN_VIEWPORT_WIDTH = 1080;
function MiniMapEntry({
  entry,
  theme
}) {
  const standardYear = useMemo(() => {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    if (entry.packagedName === "Clan VIP Lounge invitation") return 0;
    return currentYear - entry.year;
  }, [entry.year, entry.packagedName]);
  const mall = entry.price?.value || entry.price?.lowestMall ? Math.min(
    entry.price?.value ?? Infinity,
    entry.price?.lowestMall ?? Infinity
  ) : null;
  const priceRatio = mall && entry.mrAs ? mall / entry.mrAs : null;
  const isStandard = standardYear < 3;
  const { bgStyle } = useEntryBackgroundColor({
    status: entry.status,
    isStandard,
    standardYear,
    priceRatio,
    theme
  });
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "h-0.5 w-full transition-colors duration-400",
      style: bgStyle
    }
  );
}
function ListMiniMap({
  entries,
  height,
  pageHeight
}) {
  const { theme } = useTheme();
  const scrollWindowRef = useRef(null);
  const scrollThrottle = useRef(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [initialScrollPosition, setInitialScrollPosition] = useState(0);
  const [initialScrollY, setInitialScrollY] = useState(null);
  const [innerHeight, setInnerHeight] = useState(1080);
  const [innerWidth, setInnerWidth] = useState(1920);
  const [isActive, setIsActive] = useState(false);
  const [showMiniMap, setShowMiniMap] = useState(true);
  const scrollFactor = pageHeight / (entries.length * ENTRY_HEIGHT_PX);
  const miniMapWidth = innerWidth / scrollFactor;
  useEffect(() => {
    const handleWindowResize = () => {
      const _innerWidth = window.innerWidth;
      setShowMiniMap(_innerWidth >= MINIMAP_MIN_VIEWPORT_WIDTH);
      setInnerWidth(_innerWidth);
      setInnerHeight(window.innerHeight);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (initialScrollY !== null || scrollThrottle.current) return;
      scrollThrottle.current = true;
      requestAnimationFrame(() => {
        setScrollPosition(window.scrollY / scrollFactor);
        scrollThrottle.current = false;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialScrollY, scrollFactor]);
  const handlePointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setInitialScrollY(e.clientY);
    setInitialScrollPosition(scrollPosition);
    setIsActive(true);
  };
  const handlePointerMove = (e) => {
    if (initialScrollY === null) return;
    const maxScrollHeight = innerHeight / scrollFactor;
    const maxScrollAmount = pageHeight / scrollFactor - maxScrollHeight;
    const _scrollPosition = Math.min(
      Math.max(initialScrollPosition + e.clientY - initialScrollY, 0),
      maxScrollAmount
    );
    setScrollPosition(_scrollPosition);
    if (scrollPosition !== _scrollPosition) {
      window.scroll(0, _scrollPosition * scrollFactor);
    }
  };
  const handlePointerUp = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setInitialScrollY(null);
    setIsActive(false);
  };
  const handleJumpPointerDown = (e) => {
    if (initialScrollY === null) {
      const maxScrollHeight = innerHeight / scrollFactor;
      const maxScrollAmount = pageHeight / scrollFactor - maxScrollHeight;
      const jumpY = Math.min(
        Math.max(e.clientY - TOP_OFFSET - maxScrollHeight / 2, 0),
        maxScrollAmount
      );
      setScrollPosition(jumpY);
      window.scroll(0, jumpY * scrollFactor);
      if (!scrollWindowRef.current) {
        throw new Error(
          "Could not find scroll window element (and we really should!)"
        );
      }
      scrollWindowRef.current.setPointerCapture(e.pointerId);
      setInitialScrollY(e.clientY);
      setInitialScrollPosition(jumpY);
      setIsActive(true);
    }
  };
  const entryList = entries.map((entry, index) => /* @__PURE__ */ jsx(MiniMapEntry, { entry, theme }, index));
  return showMiniMap && /* @__PURE__ */ jsxs("div", { className: "group absolute -right-6 select-none", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed top-0 h-full",
        style: {
          width: miniMapWidth * HOVER_PADDING_MULTIPLIER,
          // shift by half of extra size to center
          transform: `translateX(-${miniMapWidth * (HOVER_PADDING_MULTIPLIER - 1) / 2}px)`
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          `fixed z-0 rounded-xs bg-background/0 opacity-25 outline-1
            outline-foreground/50 transition-opacity duration-200
            group-hover:opacity-100`,
          isActive && "opacity-100"
        ),
        style: { width: miniMapWidth, top: TOP_OFFSET },
        onPointerDown: handleJumpPointerDown,
        children: entryList
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: scrollWindowRef,
        className: cn(
          `fixed top-0 z-10 opacity-10 outline-2 outline-foreground
            transition-opacity duration-200 group-hover:opacity-100
            hover:cursor-pointer hover:bg-background/20
            hover:outline-foreground/50`,
          isActive && `opacity-100 hover:cursor-grabbing hover:bg-background/50
              hover:outline-foreground/25`
        ),
        style: {
          width: miniMapWidth,
          transform: `translateY(${TOP_OFFSET + scrollPosition}px)`,
          height: (innerHeight - Math.max(
            0,
            pageHeight - height - scrollPosition * scrollFactor
          )) / scrollFactor
        },
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: handlePointerUp
      }
    )
  ] });
}
function EntrySpacer({ className = "" }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: `clamp-[h,5,6,md,lg] clamp-[w,1,1.5,md,lg] rounded-sm
        bg-background/65 ${className}`,
      "aria-hidden": "true"
    }
  );
}
function EntryBackground({
  status,
  isStandard,
  standardYear,
  priceRatio
}) {
  const { theme } = useTheme();
  const { bgStyle, textureClass } = useEntryBackgroundColor({
    status,
    isStandard,
    standardYear,
    priceRatio,
    theme
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        suppressHydrationWarning: true,
        className: cn(
          "-z-20 col-start-1 row-start-1 h-full w-full",
          status === "WISHED" && "opacity-100"
        ),
        style: bgStyle
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "-z-10 col-start-1 row-start-1 h-full w-full",
          status === "WISHED" ? "starred" : textureClass
        )
      }
    )
  ] });
}
function EntryRibbon({ show, variant }) {
  if (!show) return null;
  const bgClass = variant === "ioty" ? "bg-accent/60" : "bg-secondary/60";
  const label = variant === "ioty" ? "IOTY" : "Con";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "absolute left-0 flex h-full items-center justify-center rounded-l-md",
        bgClass
      ),
      style: { writingMode: "sideways-lr" },
      children: /* @__PURE__ */ jsx(
        "span",
        {
          className: "ml-px clamp-[text,0.55rem,xs,xs,sm] text-muted-foreground\n          select-none md:clamp-[text,xs,sm,md,lg]",
          children: label
        }
      )
    }
  );
}
function EntryItem({
  children,
  className = "",
  label
}) {
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col items-center gap-0.5 ${className}`, children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "clamp-[text,0.6rem,0.7rem,xs,md] font-normal\n          text-muted-foreground select-none md:clamp-[text,0.7rem,xs,md,lg]",
        children: label
      }
    ),
    children
  ] });
}
function EntrySection({
  children,
  className = "gap-5"
}) {
  return /* @__PURE__ */ jsx("div", { className: `flex items-center justify-center ${className}`, children });
}
const CDN_BASE = "https://s3.amazonaws.com/images.kingdomofloathing.com";
async function fetchImg(src) {
  const url = src.startsWith("./") ? src : `${CDN_BASE}/${src}`;
  const image = await fetch(url);
  if (!image.ok) throw new Error(`${image.status}`);
  const blob = await image.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = () => reject;
    reader.readAsDataURL(blob);
  });
}
const imgQuery = (src) => queryOptions({
  queryKey: ["img", src],
  queryFn: () => fetchImg(src),
  staleTime: Infinity,
  // don't garbage collect inactive images (e.g. dark mode when in light mode)
  gcTime: Infinity
});
function useCachedImage(src) {
  const { data, isPending, error } = useQuery(imgQuery(src));
  return {
    imgSrc: data ?? "",
    isPending,
    error
  };
}
const animatedImages = [
  "addemon.gif",
  "baskinrobin.gif",
  "cassasleep.gif",
  "cbitten.gif",
  "csprite.gif",
  "goldmonkeystat.gif",
  "grimbrotherpray.gif",
  "grimgolem_sleep.gif",
  "hearsehog.gif",
  "hopefulcandle.gif",
  "hunch.gif",
  "hungopig.gif",
  "jitterlarva.gif",
  "jungmanlarva.gif",
  "normfrog.gif",
  "sleepbear.gif",
  "sleepcat.gif",
  "spelprof.gif",
  "tickegg.gif",
  "uclarva.gif",
  "uniclopsegg.gif"
];
const animatedSet = new Set(animatedImages);
function ThemedImg({
  className,
  style,
  src,
  alt,
  reColor,
  bgColor,
  ...props
}) {
  const filename = src.split("/").pop() ?? "";
  const isAnimated = animatedSet.has(filename);
  if (isAnimated) {
    return /* @__PURE__ */ jsx(
      AnimatedThemedImg,
      {
        className,
        style,
        src,
        alt,
        reColor,
        bgColor,
        ...props
      }
    );
  }
  return /* @__PURE__ */ jsx(
    StaticThemedImg,
    {
      className,
      style,
      alt,
      filename,
      bgColor,
      ...props
    }
  );
}
function StaticThemedImg({
  className,
  style,
  alt,
  filename,
  bgColor,
  ...props
}) {
  const { theme } = useTheme();
  const pngFilename = filename.replace(/\.gif$/i, ".png");
  const themedSrc = `./itemimages/${theme}/${pngFilename}`;
  const { imgSrc } = useCachedImage(themedSrc);
  return /* @__PURE__ */ jsxs("div", { className: "grid select-none", children: [
    bgColor && /* @__PURE__ */ jsx("div", { className: cn("col-start-1 row-start-1", bgColor) }),
    /* @__PURE__ */ jsx("div", { className: cn("col-start-1 row-start-1", className), ...props, children: /* @__PURE__ */ jsx(ClientOnly, { children: imgSrc && /* @__PURE__ */ jsx(
      "img",
      {
        src: imgSrc,
        alt,
        style,
        className: "h-full w-full object-cover"
      }
    ) }) })
  ] });
}
function AnimatedThemedImg({
  className,
  style,
  src,
  alt,
  reColor,
  bgColor,
  ...props
}) {
  const { imgSrc } = useCachedImage(src);
  return /* @__PURE__ */ jsxs("div", { className: "grid select-none", ...props, children: [
    bgColor !== void 0 ? /* @__PURE__ */ jsx("div", { className: `col-start-1 row-start-1 ${bgColor}` }) : /* @__PURE__ */ jsx(Fragment, {}),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          className,
          `col-start-1 row-start-1 [mix-blend-mode:var(--image-blend)]
          filter-(--image-filter)`
        ),
        children: /* @__PURE__ */ jsx(ClientOnly, { children: imgSrc && /* @__PURE__ */ jsx(
          "img",
          {
            src: imgSrc,
            alt,
            style,
            className: cn("h-full w-full object-cover")
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          reColor,
          "col-start-1 row-start-1 [mix-blend-mode:var(--image-overlay-blend)]"
        )
      }
    )
  ] });
}
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
function EntryInfoSection({
  img,
  name,
  type,
  year,
  wikiUrl,
  isStandard,
  yearPercent,
  status
}) {
  const yearLabel = isStandard ? "standard" : year <= 2014 && type === "item" || name === "The Crown of Ed the Undying" ? "softcore" : "hardcore";
  return /* @__PURE__ */ jsxs(EntrySection, { className: "w-0 basis-full gap-5 lg:w-auto lg:basis-auto", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: wikiUrl,
        className: cn(
          `min-h-fit min-w-fit overflow-hidden rounded-sm outline-foreground
          hover:outline-2 hover:outline-foreground hover:outline-solid`,
          status === "WISHED" && "outline-2 -outline-offset-1 outline-foreground/50 outline-dashed",
          status === "WISHED" && isStandard && "outline-secondary"
        ),
        children: /* @__PURE__ */ jsx(
          ThemedImg,
          {
            src: `itemimages/${img}`,
            alt: name,
            reColor: "bg-foreground",
            bgColor: status === "WISHED" ? "bg-transparent" : "bg-background",
            className: cn("m-2 clamp-[size,6,7,sm,md]")
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(EntryItem, { label: type, className: "-mt-0.5 clamp-[w,42,56,md,lg]", children: /* @__PURE__ */ jsx(
      "span",
      {
        className: "text-center clamp-[text,sm,base,xs,sm] font-normal\n            text-balance text-primary-foreground",
        children: name
      }
    ) }),
    /* @__PURE__ */ jsx(EntryItem, { label: yearLabel, children: /* @__PURE__ */ jsx(
      Badge,
      {
        className: cn(
          "w-14 clamp-[text,sm,base,md,lg] text-background",
          status === "WISHED" && `text-foreground/50 outline-[1.5px] -outline-offset-1
              outline-foreground/50 outline-dashed`,
          status === "WISHED" && isStandard && "text-secondary outline-secondary"
        ),
        style: status === "WISHED" ? { backgroundColor: "transparent" } : interpolateColorScale(yearPercent),
        children: year
      }
    ) })
  ] });
}
function TierBadge({
  label,
  value,
  status,
  isStandard,
  className = ""
}) {
  const percent = value !== void 0 ? Math.max(0, (value - 1) / 6) : null;
  const displayValue = value !== void 0 ? value : "?";
  return /* @__PURE__ */ jsx(EntryItem, { label, children: /* @__PURE__ */ jsx(
    Badge,
    {
      className: cn(
        `max-w-7 clamp-[text,xs,sm,xs,sm] text-background
          md:clamp-[text,sm,base,md,lg] lg:max-w-full`,
        value ?? `bg-background/0 font-light text-muted-foreground outline-[1.5px]
            -outline-offset-1 outline-muted-foreground outline-dashed`,
        status === "WISHED" && `bg-transparent text-foreground/50 outline-[1.5px] -outline-offset-1
            outline-foreground/50 outline-dashed`,
        status === "WISHED" && isStandard && "text-secondary outline-secondary",
        className
      ),
      style: percent !== null && status !== "WISHED" ? interpolateColorScale(percent) : void 0,
      children: displayValue
    }
  ) });
}
function EntryTiersSection({
  speed,
  farm,
  status,
  isStandard
}) {
  const avg = speed !== void 0 && farm !== void 0 ? (speed + farm) / 2 : void 0;
  return /* @__PURE__ */ jsxs(
    EntrySection,
    {
      className: "clamp-[mr,1,1.5,xs,sm] clamp-[w,26,32,xs,sm]\n        clamp-[gap,2.5,3.5,xs,sm] md:clamp-[w,32,36,md,lg]\n        md:clamp-[gap,3.5,5,md,lg] lg:mr-0",
      children: [
        /* @__PURE__ */ jsx(
          TierBadge,
          {
            label: "speed",
            value: speed,
            status,
            isStandard
          }
        ),
        /* @__PURE__ */ jsx(
          TierBadge,
          {
            label: "freed",
            value: farm,
            status,
            isStandard
          }
        ),
        /* @__PURE__ */ jsx(
          TierBadge,
          {
            className: "clamp-[w,7,9,sm,md] max-w-full",
            label: "avg.",
            value: avg,
            status,
            isStandard
          }
        )
      ]
    }
  );
}
function EntryPriceSection({
  mrAs,
  price,
  packagedName
}) {
  const mallStatus = price?.value === void 0 && price?.lowestMall === -1 ? "extinct" : price?.value === void 0 || price?.volume === 0 ? "lowestMall" : price.value < price.lowestMall ? "recentSales" : "lowestMall";
  const lowestPrice = (mallStatus === "lowestMall" ? price?.lowestMall : mallStatus === "recentSales" ? price?.value : -1) ?? -1;
  const statusText = {
    extinct: "Mall extinct, no recent sales data",
    lowestMall: "Based on lowest mall listing",
    recentSales: `Based on ${price?.volume} recent sale${(price?.volume ?? 1) !== 1 ? "s" : ""}`
  };
  const mafiaUrl = `http://127.0.0.1:60080/mall.php?didadv=0&pudnuggler=${encodeURIComponent(packagedName)}&category=allitems&food_sortitemsby=name&booze_sortitemsby=name&othercon_sortitemsby=name&consumable_byme=0&hats_sortitemsby=name&shirts_sortitemsby=name&pants_sortitemsby=name&weapons_sortitemsby=name&weaponattribute=3&weaponhands=3&acc_sortitemsby=name&offhand_sortitemsby=name&wearable_byme=0&famequip_sortitemsby=name&nolimits=0&justitems=0&sortresultsby=price&max_price=0&x_cheapest=200&consumable_tier_1=0&consumable_tier_2=0&consumable_tier_3=0&consumable_tier_4=0&consumable_tier_5=0`;
  const formatMeatPrice = () => {
    if (price === null) return "x";
    if (mallStatus === "extinct") return "∞";
    const millions = Math.round(lowestPrice / 1e6);
    return millions < 1e3 ? (
      // Use whole millions below billion
      `${millions}m`
    ) : (
      // Use 1 digit for sub-10 billion, whole beyond
      `${Math.min(lowestPrice / 1e9, 999).toFixed(
        millions < 1e4 ? 1 : 0
      )}b`
    );
  };
  const formatMrARatio = () => {
    if (price === null) return "x";
    if (mallStatus === "extinct") return "∞";
    const ratio = lowestPrice / mrAs;
    if (lowestPrice < mrAs * 100) return ratio.toFixed(1);
    if (ratio < 1e3) return Math.round(ratio).toString();
    return `${Math.round(ratio / 1e3)}k`;
  };
  const isExpensive = lowestPrice && Math.round(lowestPrice / 1e6) >= 1e3;
  const isInfinite = lowestPrice === -1;
  const fontClass = isInfinite ? "font-bold lg:text-2xl" : isExpensive ? "lg:text-xl" : "";
  return /* @__PURE__ */ jsx(EntryItem, { label: "est. mall price", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex clamp-[w,31,38,xs,sm] items-center justify-center\n          clamp-[gap,0.5,1.25,xs,sm] font-roboto-mono clamp-[text,sm,base,xs,sm]\n          font-normal md:clamp-[w,38,40,md,lg] md:clamp-[gap,1.25,1.5,md,lg]\n          md:clamp-[text,base,lg,md,lg] lg:w-42",
      title: statusText[mallStatus],
      children: [
        /* @__PURE__ */ jsxs("div", { className: "group flex items-center", children: [
          /* @__PURE__ */ jsx(
            ThemedImg,
            {
              src: "itemimages/meat.gif",
              alt: "meat",
              reColor: "bg-foreground",
              className: `clamp-[size,5,6,xs,sm]
              ${mallStatus === "lowestMall" && "group-hover:opacity-70"}`
            }
          ),
          mallStatus !== "lowestMall" ? /* @__PURE__ */ jsx("span", { className: cn("text-primary-foreground", fontClass), children: `${formatMeatPrice()}` }) : /* @__PURE__ */ jsx(
            "a",
            {
              href: mafiaUrl,
              className: cn(
                `text-primary-foreground underline underline-offset-2
                  group-hover:text-primary-foreground/80`,
                fontClass
              ),
              children: formatMeatPrice()
            }
          )
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground select-none", children: "/" }),
        /* @__PURE__ */ jsx(
          ThemedImg,
          {
            src: "itemimages/mracc.gif",
            alt: "Mr. Accessories",
            reColor: "bg-accent-foreground",
            className: "clamp-[mr,-0.6,-0.5,xs,sm] clamp-[size,6,7,xs,sm]"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: cn("text-accent-foreground", fontClass), children: formatMrARatio() })
      ]
    }
  ) });
}
function ListEntry({
  img,
  name,
  packagedName,
  id,
  type,
  year,
  speed,
  farm,
  isIOTY,
  isCon,
  price,
  mrAs,
  status
}) {
  const { toggleWishlist } = useWishlist();
  const [toggleLock, setToggleLock] = useState(false);
  const yearPercent = useMemo(() => {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return Math.min(5 / 6, (currentYear - year) / (currentYear - 2004));
  }, [year]);
  const wikiUrl = useMemo(
    () => `https://wiki.kingdomofloathing.com/${encodeURIComponent(
      packagedName.charAt(0).toUpperCase().concat(packagedName.slice(1).replace(/ /g, "_"))
    )}`,
    [packagedName]
  );
  const standardYear = useMemo(() => {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    if (packagedName === "Clan VIP Lounge invitation") return 0;
    return currentYear - year;
  }, [year, packagedName]);
  const mall = price?.value || price?.lowestMall ? Math.min(price?.value ?? Infinity, price?.lowestMall ?? Infinity) : null;
  const priceRatio = mall && mrAs ? mall / mrAs : null;
  const isStandard = standardYear < 3;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        `grid overflow-hidden rounded-md hover:outline-0
        hover:outline-foreground/30 hover:outline-solid`,
        isStandard && "hover:outline-secondary/80",
        (status === "WISHED" || status === "NONE") && `hover:cursor-pointer hover:outline-2 active:translate-y-0.5
          active:opacity-80 active:-outline-offset-2
          active:outline-foreground/20`,
        status === "WISHED" && "outline-2 -outline-offset-1 outline-foreground/30 outline-dashed",
        status === "WISHED" && isStandard && "outline-secondary/80",
        (toggleLock || status === "WISHED") && "active:outline-dashed"
      ),
      onPointerDown: () => {
        if (toggleLock || status !== "NONE") return;
        setToggleLock(true);
        toggleWishlist({
          itemUpdates: [{ id, status: true }],
          auth: ""
        });
      },
      onPointerUp: () => {
        if (toggleLock) {
          setToggleLock(false);
          return;
        }
        if (status !== "WISHED") return;
        toggleWishlist({
          itemUpdates: [{ id, status: false }],
          auth: ""
        });
      },
      children: [
        /* @__PURE__ */ jsx(
          EntryBackground,
          {
            status,
            isStandard,
            standardYear,
            priceRatio
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              `relative col-start-1 row-start-1 flex h-full min-w-[290px] flex-wrap
          items-center justify-center clamp-[gap-x,1.5,2.25,xs,sm] gap-y-2
          overflow-hidden clamp-[px,5,6,xs,sm] py-3 hover:outline-2
          md:clamp-[gap-x,2.25,6,md,lg] lg:w-full lg:flex-nowrap`
            ),
            children: [
              /* @__PURE__ */ jsx(EntryRibbon, { show: isIOTY || isCon, variant: isIOTY ? "ioty" : "con" }),
              /* @__PURE__ */ jsx(
                EntryInfoSection,
                {
                  img,
                  name,
                  type,
                  year,
                  wikiUrl,
                  isStandard,
                  yearPercent,
                  status
                }
              ),
              /* @__PURE__ */ jsx(EntrySpacer, { className: "hidden lg:inline" }),
              /* @__PURE__ */ jsx(
                EntryTiersSection,
                {
                  speed,
                  farm,
                  status,
                  isStandard
                }
              ),
              /* @__PURE__ */ jsx(EntrySpacer, {}),
              /* @__PURE__ */ jsx(
                EntryPriceSection,
                {
                  mrAs,
                  price,
                  packagedName
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function ListHeading({ type, label, status, info }) {
  function StatusBadge({
    statusItem,
    type: type2
  }) {
    if (statusItem.total <= 0) return /* @__PURE__ */ jsx(Fragment, {});
    const bgColor = type2 === "iotms" ? "bg-[color-mix(in_oklch,var(--confirm)_90%,white)]" : type2 === "iotys" ? "bg-[color-mix(in_oklch,var(--accent)_70%,white)]" : "bg-[color-mix(in_oklch,var(--secondary)_70%,white)]";
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between gap-1", children: [
      /* @__PURE__ */ jsx(
        Badge,
        {
          className: cn(
            "text-xs tracking-tighter",
            type2 === "iotms" ? "w-11" : "w-9",
            bgColor
          ),
          children: `${statusItem.owned} / ${statusItem.total}`
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "col-start-1 row-start-1 h-0.5 origin-left rounded-md",
              type2 === "iotms" ? "w-10" : "w-8",
              bgColor
            ),
            style: {
              transform: `scaleX(${statusItem.owned / statusItem.total * 100}%)`
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "col-start-1 row-start-1 h-0.5 rounded-md opacity-25",
              type2 === "iotms" ? "w-10" : "w-8",
              bgColor
            )
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "clamp-[mx,1,2,sm,md] clamp-[mt,7,10,xs,md] flex flex-wrap\n        justify-between gap-1",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              `flex items-start gap-1 rounded-md bg-background px-4 py-2
          outline-[1.5px] -outline-offset-1 outline-foreground`
            ),
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    `mr-2 text-center clamp-[text,lg,xl,xs,sm] font-normal text-nowrap
            text-foreground`,
                    type === "year" && "clamp-[w,10,12,xs,sm]",
                    type === "tier" && "clamp-[w,12,15,xs,sm]",
                    type === "price" && "clamp-[w,26,32,xs,sm]"
                  ),
                  children: label
                }
              ),
              /* @__PURE__ */ jsx(StatusBadge, { statusItem: status.iotms, type: "iotms" }),
              /* @__PURE__ */ jsx(StatusBadge, { statusItem: status.iotys, type: "iotys" }),
              /* @__PURE__ */ jsx(StatusBadge, { statusItem: status.special, type: "special" })
            ]
          }
        ),
        false
      ]
    }
  );
}
function ListSubHeading({
  type,
  owned
}) {
  const { currentSort } = useHydratedSettingsStore();
  const textColor = type === "iotm" ? "text-[oklch(from_var(--confirm)_var(--foreground-lightness)_0.09_h)]" : type === "ioty" ? "text-[oklch(from_var(--accent)_var(--foreground-lightness)_0.09_h)]" : "text-[oklch(from_var(--secondary)_var(--foreground-lightness)_0.09_h)]";
  const iconColor = type === "iotm" ? "bg-[oklch(from_var(--confirm)_var(--foreground-lightness)_0.075_h)]" : type === "ioty" ? "bg-[oklch(from_var(--accent)_var(--foreground-lightness)_0.075_h)]" : "bg-[oklch(from_var(--secondary)_var(--foreground-lightness)_0.075_h)]";
  const label = type === "iotm" ? "IOTMS" : type === "ioty" ? "IOTYS" : "KOL CON & ETC.";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "mx-2 mt-1 flex w-full items-center justify-start gap-2 font-medium",
        textColor
      ),
      children: [
        /* @__PURE__ */ jsx("span", { className: cn("shrink-0 clamp-[text,xs,sm,xs,sm]", textColor), children: label }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex min-w-0 flex-wrap items-center justify-start gap-0.75\n          rounded-sm bg-primary px-2 py-1",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "mr-1 text-xs tracking-tighter", children: [
                owned.filter((v) => v === "OPENED" || v === "PACKAGED").length,
                " /",
                " ",
                owned.length
              ] }),
              currentSort === "date" || owned.length <= 4 ? owned.map((v, i) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "h-2.5 w-1.5 rounded-xs",
                    v === "OPENED" ? iconColor : v === "PACKAGED" ? [iconColor, "opacity-40"] : "border-[0.5px] border-dashed border-foreground"
                  )
                },
                i
              )) : /* @__PURE__ */ jsxs("div", { className: "grid overflow-hidden rounded-xs", children: [
                /* @__PURE__ */ jsxs("div", { className: "col-start-1 row-start-1 flex", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn("h-2.5", iconColor),
                      style: {
                        width: owned.filter((v) => v === "OPENED").length * 2.5
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn("h-2.5 opacity-40", iconColor),
                      style: {
                        width: owned.filter((v) => v === "PACKAGED").length * 2.5
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "col-start-1 row-start-1 h-2.5 opacity-25",
                      iconColor
                    ),
                    style: {
                      width: owned.length * 2.5
                    }
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
function ListItem({ item }) {
  if (item.itemType === "heading") {
    return /* @__PURE__ */ jsx("div", { className: "sticky -top-4 z-20 h-min w-full", children: /* @__PURE__ */ jsx(
      ListHeading,
      {
        type: item.headingType,
        label: item.label,
        status: item.status,
        info: item.info
      }
    ) }, item.key);
  } else if (item.itemType === "subheading") {
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ListSubHeading, { type: item.subheadingType, owned: item.owned }) }, item.key);
  }
  return /* @__PURE__ */ jsx("div", { className: "grow", children: /* @__PURE__ */ jsx(ListEntry, { ...item.entry }) }, item.key);
}
function MeasurementContainer({
  virtualItems,
  containerRef
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: "invisible absolute top-0 left-0 -z-10 flex w-full flex-wrap\n        items-stretch gap-2",
      children: virtualItems.map((v) => /* @__PURE__ */ jsx(ListItem, { item: v }, v.key))
    }
  );
}
const PRICE_RANGES = [
  { max: 1, label: "<1 Mr. A" },
  { max: 2, label: "1-2 Mr. As" },
  { max: 3, label: "2-3 Mr. As" },
  { max: 5, label: "3-5 Mr. As" },
  { max: 10, label: "5-10 Mr. As" },
  { max: 50, label: "10-50 Mr. As" },
  { max: Infinity, label: "50+ Mr. As" }
];
function getYearGroup(entry) {
  return String(entry.year);
}
function getTierGroup(entry) {
  const speed = entry.speed ?? 6;
  const farm = entry.farm ?? 6;
  const average = (speed + farm) / 2;
  const tier = Math.floor(average);
  return `Tier ${tier}`;
}
function getPriceGroup(entry) {
  const price = entry.price;
  const mallStatus = price?.value === void 0 && price?.lowestMall === -1 ? "extinct" : price?.value === void 0 || price?.volume === 0 ? "lowestMall" : price.value < price.lowestMall ? "recentSales" : "lowestMall";
  const lowestPrice = (mallStatus === "lowestMall" ? price?.lowestMall : mallStatus === "recentSales" ? price?.value : -1) ?? -1;
  const costInMrAs = lowestPrice === -1 ? Infinity : lowestPrice / entry.mrAs;
  for (const range of PRICE_RANGES) {
    if (costInMrAs < range.max) {
      return range.label;
    }
  }
  return PRICE_RANGES[PRICE_RANGES.length - 1].label;
}
function insertListHeadings(entries, currentSort) {
  let getGroup;
  let headingType;
  if (currentSort === "date") {
    getGroup = getYearGroup;
    headingType = "year";
  } else if (currentSort === "tier") {
    getGroup = getTierGroup;
    headingType = "tier";
  } else if (currentSort === "price") {
    getGroup = getPriceGroup;
    headingType = "price";
  } else {
    return entries.map((entry) => ({
      entry,
      itemType: "entry",
      key: entry.packagedName
    }));
  }
  const groupedEntries = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    const group = getGroup(entry);
    if (!groupedEntries.has(group)) {
      groupedEntries.set(group, []);
    }
    groupedEntries.get(group).push(entry);
  }
  const groupStatus = /* @__PURE__ */ new Map();
  const groupInfo = /* @__PURE__ */ new Map();
  for (const [group, groupEntries] of groupedEntries) {
    const status = {
      iotms: { owned: 0, total: 0 },
      iotys: { owned: 0, total: 0 },
      special: { owned: 0, total: 0 }
    };
    for (const entry of groupEntries) {
      if (entry.month !== void 0) {
        status.iotms.total++;
        if (entry.status === "OPENED" || entry.status === "PACKAGED")
          status.iotms.owned++;
      } else if (entry.isIOTY) {
        status.iotys.total++;
        if (entry.status === "OPENED" || entry.status === "PACKAGED")
          status.iotys.owned++;
      } else {
        status.special.total++;
        if (entry.status === "OPENED" || entry.status === "PACKAGED")
          status.special.owned++;
      }
    }
    groupStatus.set(group, status);
    const pricesOutliersRemoved = groupEntries.map((entry) => entry.price?.lowestMall ?? Infinity).sort((a, b) => a - b).slice(1, -1);
    const info = {
      avgPrice: pricesOutliersRemoved.reduce((acc, price) => acc + price, 0) / pricesOutliersRemoved.length
    };
    groupInfo.set(group, info);
  }
  const subGroupedEntries = /* @__PURE__ */ new Map();
  for (const [group, groupEntries] of groupedEntries) {
    const iotms2 = groupEntries.filter((e) => e.month !== void 0);
    const iotys = groupEntries.filter((e) => e.month === void 0 && e.isIOTY);
    const specials = groupEntries.filter(
      (e) => e.month === void 0 && !e.isIOTY
    );
    subGroupedEntries.set(group, { iotms: iotms2, iotys, specials });
  }
  const seenGroups = /* @__PURE__ */ new Set();
  const result = [];
  for (const entry of entries) {
    const group = getGroup(entry);
    if (seenGroups.has(group)) {
      continue;
    }
    seenGroups.add(group);
    result.push({
      itemType: "heading",
      headingType,
      label: group,
      key: `heading-${headingType}-${group}`,
      status: groupStatus.get(group),
      info: groupInfo.get(group)
    });
    const subGroups = subGroupedEntries.get(group);
    if (subGroups.iotms.length > 0) {
      result.push({
        itemType: "subheading",
        subheadingType: "iotm",
        key: `subheading-iotm-${group}`,
        owned: subGroups.iotms.map((entry2) => entry2.status)
      });
      subGroups.iotms.forEach(
        (e) => result.push({
          entry: e,
          itemType: "entry",
          key: e.packagedName
        })
      );
    }
    if (subGroups.iotys.length > 0) {
      result.push({
        itemType: "subheading",
        subheadingType: "ioty",
        key: `subheading-ioty-${group}`,
        owned: subGroups.iotys.map((entry2) => entry2.status)
      });
      subGroups.iotys.forEach(
        (e) => result.push({
          entry: e,
          itemType: "entry",
          key: e.packagedName
        })
      );
    }
    if (subGroups.specials.length > 0) {
      result.push({
        itemType: "subheading",
        subheadingType: "special",
        key: `subheading-specials-${group}`,
        owned: subGroups.specials.map((entry2) => entry2.status)
      });
      subGroups.specials.forEach(
        (e) => result.push({
          entry: e,
          itemType: "entry",
          key: e.packagedName
        })
      );
    }
  }
  return result;
}
const DEFAULT_HEIGHTS = {
  entry: 75,
  heading: 40 + 44,
  subheading: 4 + 28
};
function useEntryHeights(virtualItems) {
  const [itemHeights, setItemHeights] = useState(
    /* @__PURE__ */ new Map()
  );
  const [pageHeight, setPageHeight] = useState(
    virtualItems.reduce((acc, v) => acc + DEFAULT_HEIGHTS[v.itemType], 0)
  );
  const needsMeasurement = virtualItems.filter((v) => !itemHeights.has(v.key));
  const containerRef = useRef(null);
  const [lastKeySet, setLastKeySet] = useState(/* @__PURE__ */ new Set());
  const headingHeightRef = useRef(0);
  const lastWindowWidthRef = useRef(0);
  useLayoutEffect(() => {
    if (containerRef.current === null) return;
    if (virtualItems.length === lastKeySet.size && virtualItems.every((v) => lastKeySet.has(v.key))) {
      return;
    }
    const newHeights = new Map(itemHeights);
    Array.from(containerRef.current.children).forEach((el, i) => {
      const item = needsMeasurement[i];
      if (item.key !== null && !itemHeights.has(item.key)) {
        if (item?.itemType === "heading") {
          if (headingHeightRef.current > 0) {
            newHeights.set(item.key, headingHeightRef.current);
            return;
          }
          headingHeightRef.current = el.clientHeight;
        }
        newHeights.set(item.key, el.clientHeight);
      }
    });
    setLastKeySet(new Set(virtualItems.map((v) => v.key)));
    setItemHeights(newHeights);
  }, [itemHeights, lastKeySet, needsMeasurement, virtualItems]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const innerWidth = window.innerWidth;
        if (lastWindowWidthRef.current >= 1024 && innerWidth >= 1024 || lastWindowWidthRef.current < 320 && innerWidth < 320)
          return;
        setLastKeySet(/* @__PURE__ */ new Set());
        setItemHeights(/* @__PURE__ */ new Map());
        headingHeightRef.current = 0;
        lastWindowWidthRef.current = innerWidth;
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [virtualItems]);
  const { isTransitioning } = useTheme();
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (isTransitioning) return;
      const newPageHeight = document.documentElement.scrollHeight;
      setPageHeight(newPageHeight);
    });
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [isTransitioning]);
  return {
    itemHeights,
    pageHeight,
    needsMeasurement,
    containerRef
  };
}
function getUnboxedName(item) {
  if (item.type !== "skill" && item.opened_names && !Array.isArray(item.opened_names)) {
    return item.opened_names;
  } else if (item.familiar_names && !Array.isArray(item.familiar_names)) {
    return item.familiar_names;
  } else {
    return item.packaged_name;
  }
}
function List() {
  "use no memo";
  const { currentOrder, currentSort } = useHydratedSettingsStore();
  const { mallPrices } = useMallPrices();
  const { wishlist } = useWishlist();
  const data = useMemo(
    () => iotms.filter((item) => item.type !== "vip").map(
      (item) => ({
        img: item.img,
        name: getUnboxedName(item),
        packagedName: item.packaged_name,
        id: item.packaged_id,
        type: item.type,
        year: item.year,
        month: item.month,
        speed: item.speed_tier,
        farm: item.aftercore_tier,
        isIOTY: item.is_ioty || false,
        isCon: item.is_con || false,
        price: mallPrices[item.packaged_id] ?? null,
        mrAs: mallPrices[194]?.value ?? Infinity,
        // don't love this here
        status: wishlist[item.packaged_id] ?? "NONE"
      })
    ),
    [mallPrices, wishlist]
  );
  const orderedData = useMemo(() => {
    const sortedData = data.slice().sort(getSortFunction(currentSort));
    return currentOrder ? sortedData.slice().reverse() : sortedData;
  }, [data, currentSort, currentOrder]);
  const virtualItems = useMemo(
    () => insertListHeadings(orderedData, currentSort),
    [orderedData, currentSort]
  );
  const { itemHeights, pageHeight, needsMeasurement, containerRef } = useEntryHeights(virtualItems);
  const listRef = useRef(null);
  const stickyIndexes = useMemo(
    () => virtualItems.map((item, index) => item.itemType === "heading" ? index : null).filter((index) => index !== null),
    [virtualItems]
  );
  const activeStickyIndexRef = useRef(0);
  const rangeExtractor = useCallback(
    (range) => {
      activeStickyIndexRef.current = [...stickyIndexes].reverse().find((index) => range.startIndex >= index) ?? 0;
      const activeIdx = stickyIndexes.indexOf(activeStickyIndexRef.current);
      const previousStickyIndex = activeIdx > 0 ? stickyIndexes[activeIdx - 1] : null;
      const includePrevious = previousStickyIndex !== null && range.startIndex <= activeStickyIndexRef.current + 1;
      const next = /* @__PURE__ */ new Set([
        activeStickyIndexRef.current,
        ...includePrevious ? [previousStickyIndex] : [],
        ...defaultRangeExtractor(range)
      ]);
      return [...next].sort((a, b) => a - b);
    },
    [stickyIndexes]
  );
  const virtualizerOptions = useMemo(() => {
    return {
      count: virtualItems.length,
      estimateSize: (index) => {
        return itemHeights.get(virtualItems[index].key) ?? 75;
      },
      gap: 8,
      scrollMargin: listRef.current?.offsetTop ?? 0,
      overscan: 3,
      rangeExtractor,
      // size of the window during SSR
      initialRect: {
        height: 15 * (75 + 8),
        width: (64 - 5) * 16
      },
      getItemKey: (index) => {
        return virtualItems[index].key;
      }
    };
  }, [virtualItems, itemHeights, rangeExtractor]);
  const virtualizer = useWindowVirtualizer(virtualizerOptions);
  const viewportItems = virtualizer.getVirtualItems();
  const viewportItemsKey = viewportItems.map((v) => v.key).join(",");
  const firstNaturalIdx = viewportItems.findIndex((item, i) => {
    if (i === viewportItems.length - 1) return true;
    return viewportItems[i + 1].index === item.index + 1;
  });
  const safeFirstNaturalIdx = firstNaturalIdx === -1 ? 0 : firstNaturalIdx;
  const firstNaturalItem = viewportItems[safeFirstNaturalIdx];
  const gap = virtualizer.options.gap;
  let persistedHeight = 0;
  for (let i = 0; i < safeFirstNaturalIdx; i++) {
    persistedHeight += viewportItems[i].size + gap;
  }
  const height = viewportItems[viewportItems.length - 1].end - firstNaturalItem.start + persistedHeight;
  const offset = firstNaturalItem ? firstNaturalItem.start - virtualizer.options.scrollMargin - persistedHeight : 0;
  const renderedViewport = useMemo(
    () => viewportItems.map((row) => /* @__PURE__ */ jsx(
      ListItem,
      {
        item: virtualItems[row.index]
      },
      virtualItems[row.index].key
    )),
    // update when item values change, not array reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [viewportItemsKey, virtualItems]
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: listRef,
      className: "relative mb-12 w-full",
      style: {
        height: `${virtualizer.getTotalSize()}px`
      },
      children: [
        needsMeasurement.length > 0 && /* @__PURE__ */ jsx(
          MeasurementContainer,
          {
            virtualItems: needsMeasurement,
            containerRef
          }
        ),
        /* @__PURE__ */ jsx(ClientOnly, { children: /* @__PURE__ */ jsx(
          ListMiniMap,
          {
            entries: orderedData,
            height: virtualizer.getTotalSize(),
            pageHeight
          }
        ) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-0 left-0 flex w-full flex-wrap items-stretch\n          gap-2",
            style: {
              // transform: `translateY(${offset}px)`,
              // TODO: do the annoying math to make sticky play nicely with transform
              //   top works for now, but it forces layout calculation
              top: offset,
              height,
              viewTransitionName: "foreground"
            },
            children: renderedViewport
          }
        )
      ]
    }
  );
}
function ListControlMenu() {
  const { currentSort, setSort, currentOrder, setOrder } = useHydratedSettingsStore();
  return /* @__PURE__ */ jsx("div", { className: "z-30 flex justify-center", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "m-2 flex min-w-min flex-wrap items-center justify-center\n          gap-0 rounded-md bg-background/95 p-1",
      children: [
        /* @__PURE__ */ jsx(
          IconButton,
          {
            icon: currentSort === "date" && currentOrder === true ? "arrow-up-wide-short" : "arrow-down-short-wide",
            label: "sort by date",
            color: "text-primary",
            selected: currentSort === "date",
            onClick: () => {
              if (currentSort === "date") {
                setOrder(!currentOrder);
              } else {
                setSort("date");
                setOrder(false);
              }
            }
          }
        ),
        /* @__PURE__ */ jsx(
          IconButton,
          {
            icon: currentSort === "tier" && currentOrder === true ? "arrow-up-wide-short" : "arrow-down-short-wide",
            label: "sort by tier",
            color: "text-primary",
            selected: currentSort === "tier",
            onClick: () => {
              if (currentSort === "tier") {
                setOrder(!currentOrder);
              } else {
                setSort("tier");
                setOrder(false);
              }
            }
          }
        ),
        /* @__PURE__ */ jsx(
          IconButton,
          {
            icon: currentSort === "price" && currentOrder === true ? "arrow-up-wide-short" : "arrow-down-short-wide",
            label: "sort by price",
            color: "text-primary",
            selected: currentSort === "price",
            onClick: () => {
              if (currentSort === "price") {
                setOrder(!currentOrder);
              } else {
                setSort("price");
                setOrder(false);
              }
            }
          }
        )
      ]
    }
  ) });
}
function ListView() {
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ jsx(ListControlMenu, {}),
    /* @__PURE__ */ jsx(List, {})
  ] });
}
function App() {
  const { isTransitioning } = useTheme();
  return /* @__PURE__ */ jsxs("main", { className: "flex justify-center selection:bg-select", children: [
    /* @__PURE__ */ jsx("div", { className: "striped fixed -z-50 h-full w-full invert" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex w-full flex-col clamp-[px,4,10,md,lg] lg:max-w-5xl",
          // disable scroll while changing theme
          isTransitioning && "h-screen overflow-y-hidden"
        ),
        children: /* @__PURE__ */ jsxs(WishlistProvider, { children: [
          /* @__PURE__ */ jsx(Header, {}),
          /* @__PURE__ */ jsx(Menu, {}),
          /* @__PURE__ */ jsx(ListView, {})
        ] })
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsx(App, {});
}
export {
  Index as component
};
