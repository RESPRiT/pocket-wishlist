"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// src/wishlist.ts
var wishlist_exports = {};
__export(wishlist_exports, {
  main: function() {
    return main;
  }
});
module.exports = __toCommonJS(wishlist_exports);

// kolmafia-polyfill.js
var kolmafia = require("kolmafia"), console = {
  log: kolmafia.print
};

// src/wishlist.ts
var import_kolmafia4 = require("kolmafia");

// ../../node_modules/libram/dist/lib.js
var import_kolmafia3 = require("kolmafia");

// ../../node_modules/libram/dist/property.js
var import_kolmafia = require("kolmafia");

// ../../node_modules/libram/dist/propertyTypes.js
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_faxDataChanged", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSatisfyWithShop", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "batWingsBatHoleEntrance", "batWingsBatratBurrow", "batWingsBeanbatChamber", "batWingsGuanoJunction", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "bookOfIronyAvailable", "booPeakLit", "bootsCharged", "breakfastCompleted", "burlyBodyguardReceivedBonus", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crAlways", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "cyberDatastickCollected", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "enqueueForConsumption", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "grandpaUnlockedBlankPrescriptionSheet", "grandpaUnlockedEelSauce", "grandpaUnlockedFishyWand", "grandpaUnlockedGlowingSyringe", "grandpaUnlockedGroupieSpangles", "grandpaUnlockedHairOfTheFish", "grandpaUnlockedHalibut", "grandpaUnlockedHeavilyInvestedInPunFutures", "grandpaUnlockedJellyfishGel", "grandpaUnlockedMarineAquamarine", "grandpaUnlockedMidgetClownfish", "grandpaUnlockedSeaRadish", "grandpaUnlockedTrophyFish", "grandpaUnlockedWaterPoloCap", "grandpaUnlockedWaterPoloMitt", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "intenseCurrents", "isMerkinGladiatorChampion", "isMerkinHighPriest", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makeHandheldRadiosHardcore", "makeHandheldRadiosSoftcore", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "maximizerUseScope", "merkinElementaryBathroomUnlock", "merkinElementaryJanitorUnlock", "merkinElementaryTeacherUnlock", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pirateRealmUnlockedAnemometer", "pirateRealmUnlockedBlunderbuss", "pirateRealmUnlockedBreastplate", "pirateRealmUnlockedClipper", "pirateRealmUnlockedCrabsicle", "pirateRealmUnlockedFlag", "pirateRealmUnlockedFork", "pirateRealmUnlockedGoldRing", "pirateRealmUnlockedManOWar", "pirateRealmUnlockedPlushie", "pirateRealmUnlockedRadioRing", "pirateRealmUnlockedRhum", "pirateRealmUnlockedScurvySkillbook", "pirateRealmUnlockedShavingCream", "pirateRealmUnlockedSpyglass", "pirateRealmUnlockedTattoo", "pirateRealmUnlockedThirdCrewmate", "pirateRealmUnlockedTikiSkillbook", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pumpkinSpiceWhorlUsed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayDecorateJsCommands", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "serverAddsBothCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "shubJigguwattDefeated", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressCyberRealmDarkMode", "suppressCyberRealmGreenImages", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "yogUrtDefeated", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_alliedRadioMaterielIntel", "_alliedRadioWildsunBoon", "_aprilShower", "_aprilShowerGlobsCollected", "_aprilShowerLungingThrustSmack", "_aprilShowerNorthernExplosion", "_aprilShowerSimmer", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bloodBagDoctorBag", "_bloodBagCloake", "_bloodBankIntimidated", "_bloodBankVisited", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_coolerYetiAdventures", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_crToday", "_cursedKegUsed", "_cursedMicrowaveUsed", "_cyberTrashCollected", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_douseFoeSuccess", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_emberingHulkFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_gnomePart", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_infiniteJellyUsed", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_miniKiwiIntoxicatingSpiritsBought", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateDinghyUsed", "_pirateForkUsed", "_pirateRealmSoldCompass", "_pirateRealmWindicleUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_punchingMirrorUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_saladForkUsed", "_seadentWaveUsed", "_seaJellyHarvested", "_septEmberBalanceChecked", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_structuralEmberUsed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_takerSpaceSuppliesDelivered", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_unblemishedPearlAnemoneMine", "_unblemishedPearlDiveBar", "_unblemishedPearlMadnessReef", "_unblemishedPearlMarinaraTrench", "_unblemishedPearlTheBriniestDeepests", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_yamBatteryUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"], numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autopsyTweezersUsed", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableSeptEmbers", "availableStoreCredits", "availableSwagger", "avantGuardPoints", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bodyguardCharge", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "bookOfIronyCost", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "bwApronMealsEaten", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "cookbookbatIngredientsCharge", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingPlansCharges", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "cupidBowFights", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructorItemQuantity", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "droneSelfDestructChipsUsed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "ironicSwagger", "jarlsbergPoints", "juicyGarbageUsed", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lassoTrainingCount", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "leprecondoLastNeedChange", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "markYourTerritoryCharges", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniKiwiAiolisUsed", "miniMartinisDrunk", "mixedBerryJellyUses", "moleTunnelLevel", "momSeaMonkeeProgress", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nanopolymerSpiderWebsUsed", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "peaceTurkeyIndex", "pendingMapReflections", "phosphorTracesUses", "pingpongSkill", "pirateRealmPlasticPiratesDefeated", "pirateRealmShipsDestroyed", "pirateRealmStormsEscaped", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "pokefamPoints", "poolSharkCount", "poolSkill", "powerPillProgress", "preworkoutPowderUses", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "romanCandelabraRedCasts", "romanCandelabraBlueCasts", "romanCandelabraYellowCasts", "romanCandelabraGreenCasts", "romanCandelabraPurpleCasts", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seadentConstructKills", "seadentLevel", "seaodesFound", "seaPoints", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "shrunkenHeadZombieHP", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn236", "skillBurn237", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel245", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "stockCertificateTurn", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "takerSpaceAnchor", "takerSpaceGold", "takerSpaceMast", "takerSpaceRum", "takerSpaceSilk", "takerSpaceSpice", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeposedTopHats", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProgress", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "zootSpecimensPrepared", "zootomistPoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_alliedRadioDropsUsed", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilShowerDiscoNap", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_astralDrops", "_augSkillsCast", "_assertYourAuthorityCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_batWingsCauldronUsed", "_batWingsFreeFights", "_batWingsRestUsed", "_batWingsSwoopUsed", "_bczBloodGeyserCasts", "_bczRefractedGazeCasts", "_bczSweatBulletsCasts", "_bczBloodBathCasts", "_bczDialitupCasts", "_bczSweatEquityCasts", "_bczBloodThinnerCasts", "_bczSpinalTapasCasts", "_bczPheromoneCocktailCasts", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_beretBlastUses", "_beretBoastUses", "_beretBuskingUses", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candyEggsDeviled", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_clocksUsed", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_concoctionDatabaseRefreshes", "_cookbookbatCrafting", "_cookbookbatCombatsUntilNewQuest", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_cyberFreeFights", "_cyberZone1Turns", "_cyberZone2Turns", "_cyberZone3Turns", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_durableDolphinWhistleUsed", "_edDefeats", "_edLashCount", "_eldritchTentaclesFoughtToday", "_elfGuardCookingUsed", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_generateIronyUsed", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holidayMultitaskingUsed", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_ironTricornHeadbuttUsed", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverAdvs", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastFitzsimmonsHatch", "_lastMobiusStripTurn", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_lawOfAveragesUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_leprecondoRearrangements", "_leprecondoFurniture", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayamRests", "_mayflowerDrops", "_mayflySummons", "_mcHugeLargeAvalancheUses", "_mcHugeLargeSkiPlowUses", "_mcHugeLargeSlashUses", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniKiwiDrops", "_miniMartiniDrops", "_mobiusStripEncounters", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_oldSchoolCocktailCraftingUsed", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_perilsForeseen", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_photoBoothEffects", "_photoBoothEquipment", "_pieDrops", "_piePartsCount", "_pirateRealmGold", "_pirateRealmGlue", "_pirateRealmGrog", "_pirateRealmGrub", "_pirateRealmGuns", "_pirateRealmIslandMonstersDefeated", "_pirateRealmSailingTurns", "_pirateRealmShipSpeed", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_seadentLightningUsed", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_slimeVialsHarvested", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_smoochArmyHQCombats", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowmanHatPlaceUsed", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spiritOfTheMountainsAdvs", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_summonResortPassesUsed", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_tearawayPantsAdvs", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeCopsFoughtToday", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unblemishedPearlAnemoneMineProgress", "_unblemishedPearlDiveBarProgress", "_unblemishedPearlMadnessReefProgress", "_unblemishedPearlMarinaraTrenchProgress", "_unblemishedPearlTheBriniestDeepestsProgress", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed", "lastNoncombat15", "lastNoncombat257", "lastNoncombat270", "lastNoncombat273", "lastNoncombat280", "lastNoncombat283", "lastNoncombat297", "lastNoncombat322", "lastNoncombat323", "lastNoncombat324", "lastNoncombat341", "lastNoncombat343", "lastNoncombat384", "lastNoncombat386", "lastNoncombat391", "lastNoncombat392", "lastNoncombat394", "lastNoncombat405", "lastNoncombat406", "lastNoncombat408", "lastNoncombat439", "lastNoncombat440", "lastNoncombat441", "lastNoncombat450", "lastNoncombat528", "lastNoncombat533", "lastNoncombat539", "lastNoncombat540", "lastNoncombat541", "lastNoncombat588", "lastNoncombat589", "lastNoncombat590", "lastNoncombat591", "lastNoncombat592"], monsterProperties = ["beGregariousMonster", "bodyguardChatMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "shrunkenHeadZombieMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_afterimageMonster", "_chainedRelativityMonster", "_chainedPurpleCandleMonster", "_chainedAfterimageMonster", "_cookbookbatQuestMonster", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"], monsterNumericProperties = [], locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "holdHandsLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_cookbookbatQuestLastLocation", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_lastPirateRealmIsland", "_sotParcelLocation"], stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "antiScientificMethod", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beastSkillsAvailable", "beastSkillsKnown", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "coolerYetiMode", "counterScript", "copperheadClubHazard", "crimbo23ArmoryControl", "crimbo23BarControl", "crimbo23CafeControl", "crimbo23CottageControl", "crimbo23FoundryControl", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "demonName14", "demonName14Segments", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "dreadScrollGuesses", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "everfullDartPerks", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "holdHandsMonsterCount", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventureContainer", "lastAdventureTrail", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "lastSelectedFaxbot", "lastSuccessfulFaxbot", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "leprecondoCurrentNeed", "leprecondoDiscovered", "leprecondoInstalled", "leprecondoNeedOrder", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "maximizerLastFilters", "mayoInMouth", "mayoMinderSetting", "merkinCatalogChoices", "merkinQuestPath", "mimicEggMonsters", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mineState1", "mineState2", "mineState3", "mineState4", "mineState5", "mineState6", "mpAutoRecoveryItems", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "noncombatForcers", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayChatCLITrigger", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "shrunkenHeadZombieAbilities", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trackedMonsters", "trackedPhyla", "trainsetConfiguration", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "warProgress", "watchedPreferences", "wereProfessorAdvancedResearch", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "zootGraftedMods", "zootMilkCrueltyMods", "zootMilkKindnessMods", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_cupidBowFamiliars", "_currentDartboard", "_cyberZone1Defense", "_cyberZone1Hacker", "_cyberZone1Owner", "_cyberZone2Defense", "_cyberZone2Hacker", "_cyberZone2Owner", "_cyberZone3Defense", "_cyberZone3Hacker", "_cyberZone3Owner", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatActions", "_lastCombatStarted", "_locketMonstersFought", "_mayamSymbolsUsed", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_perilLocations", "_pirateRealmCrewmate", "_pirateRealmCrewmate1", "_pirateRealmCrewmate2", "_pirateRealmCrewmate3", "_pirateRealmShip", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_questPirateRealm", "_roboDrinks", "_roninStoragePulls", "_savageBeastMods", "_seadentWaveZone", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_trickOrTreatBlock", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"], numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505", "choiceAdventure1528", "choiceAdventure1534", "choiceAdventure1538", "choiceAdventure1539", "choiceAdventure1540", "choiceAdventure1541", "choiceAdventure1542", "choiceAdventure1545", "choiceAdventure1546", "choiceAdventure1547", "choiceAdventure1548", "choiceAdventure1549", "choiceAdventure1550"], familiarProperties = ["commaFamiliar", "cupidBowLastFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"], familiarNumericProperties = ["cupidBowLastFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"], statProperties = ["nsChallenge1", "snojoSetting"], phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"], itemProperties = ["commerceGhostItem", "daycareInstructorItem", "doctorBagQuestItem", "dolphinItem", "guzzlrQuestBooze", "implementGlitchItem", "muffinOnOrder", "rufusDesiredArtifact", "rufusDesiredItems", "shenQuestItem", "trapperOre", "walfordBucketItem", "_cookbookbatQuestIngredient", "_dailySpecial", "_pirateRealmCurio"], itemNumericProperties = ["daycareInstructorItem"];

// ../../node_modules/libram/dist/propertyTyping.js
var booleanPropertiesSet = new Set(booleanProperties), numericPropertiesSet = new Set(numericProperties), numericOrStringPropertiesSet = new Set(numericOrStringProperties), stringPropertiesSet = new Set(stringProperties), locationPropertiesSet = new Set(locationProperties), monsterPropertiesSet = new Set(monsterProperties), familiarPropertiesSet = new Set(familiarProperties), statPropertiesSet = new Set(statProperties), phylumPropertiesSet = new Set(phylumProperties), itemPropertiesSet = new Set(itemProperties);
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}
function isItemProperty(property) {
  return itemPropertiesSet.has(property);
}

// ../../node_modules/libram/dist/property.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
var createPropertyGetter = function(transform2) {
  return function(property, default_) {
    var value = (0, import_kolmafia.getProperty)(property);
    return default_ !== void 0 && value === "" ? default_ : transform2(value, property);
  };
};
function createMafiaClassPropertyGetter(Type, toType) {
  var numericPropertyNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  return createPropertyGetter(function(value, property) {
    if (value === "") return null;
    var v = numericPropertyNames.includes(property) ? value.match(/^[0-9]+$/) ? toType(parseInt(value)) : null : toType(value);
    return v === Type.none ? null : v;
  });
}
var getString = createPropertyGetter(function(value) {
  return value;
}), getCommaSeparated = createPropertyGetter(function(value) {
  return value.split(/, ?/);
}), getBoolean = createPropertyGetter(function(value) {
  return value === "true";
}), getNumber = createPropertyGetter(function(value) {
  return Number(value);
}), getBounty = createMafiaClassPropertyGetter(import_kolmafia.Bounty, import_kolmafia.toBounty), getClass = createMafiaClassPropertyGetter(import_kolmafia.Class, import_kolmafia.toClass), getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia.Coinmaster, import_kolmafia.toCoinmaster), getEffect = createMafiaClassPropertyGetter(import_kolmafia.Effect, import_kolmafia.toEffect), getElement = createMafiaClassPropertyGetter(import_kolmafia.Element, import_kolmafia.toElement), getFamiliar = createMafiaClassPropertyGetter(import_kolmafia.Familiar, import_kolmafia.toFamiliar, familiarNumericProperties), getItem = createMafiaClassPropertyGetter(import_kolmafia.Item, import_kolmafia.toItem, itemNumericProperties), getLocation = createMafiaClassPropertyGetter(import_kolmafia.Location, import_kolmafia.toLocation), getMonster = createMafiaClassPropertyGetter(import_kolmafia.Monster, import_kolmafia.toMonster, monsterNumericProperties), getPhylum = createMafiaClassPropertyGetter(import_kolmafia.Phylum, import_kolmafia.toPhylum), getServant = createMafiaClassPropertyGetter(import_kolmafia.Servant, import_kolmafia.toServant), getSkill = createMafiaClassPropertyGetter(import_kolmafia.Skill, import_kolmafia.toSkill), getSlot = createMafiaClassPropertyGetter(import_kolmafia.Slot, import_kolmafia.toSlot), getStat = createMafiaClassPropertyGetter(import_kolmafia.Stat, import_kolmafia.toStat), getThrall = createMafiaClassPropertyGetter(import_kolmafia.Thrall, import_kolmafia.toThrall);
function get(property, _default3) {
  var value = getString(property);
  return isBooleanProperty(property) ? getBoolean(property, _default3) ?? !1 : isNumericProperty(property) ? getNumber(property, _default3) ?? 0 : isNumericOrStringProperty(property) ? value.match(/^\d+$/) ? parseInt(value) : value : isLocationProperty(property) ? getLocation(property, _default3) : isMonsterProperty(property) ? getMonster(property, _default3) : isFamiliarProperty(property) ? getFamiliar(property, _default3) : isStatProperty(property) ? getStat(property, _default3) : isPhylumProperty(property) ? getPhylum(property, _default3) : isItemProperty(property) ? getItem(property, _default3) : isStringProperty(property) ? value === "" && _default3 !== void 0 ? _default3 : value : _default3 instanceof import_kolmafia.Location ? getLocation(property, _default3) : _default3 instanceof import_kolmafia.Monster ? getMonster(property, _default3) : _default3 instanceof import_kolmafia.Familiar ? getFamiliar(property, _default3) : _default3 instanceof import_kolmafia.Stat ? getStat(property, _default3) : _default3 instanceof import_kolmafia.Phylum ? getPhylum(property, _default3) : _default3 instanceof import_kolmafia.Item ? getItem(property, _default3) : typeof _default3 == "boolean" ? value === "true" ? !0 : value === "false" ? !1 : _default3 : typeof _default3 == "number" ? value === "" ? _default3 : parseInt(value) : value === "" ? _default3 === void 0 ? "" : _default3 : value;
}
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  return (0, import_kolmafia.setProperty)(property, stringValue), value;
}
var PropertiesManager = /* @__PURE__ */ (function() {
  function PropertiesManager2() {
    _classCallCheck(this, PropertiesManager2), _defineProperty(this, "properties", {});
  }
  return _createClass(PropertiesManager2, [{
    key: "storedValues",
    get: function() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), propertyName = _Object$entries2$_i[0], propertyValue = _Object$entries2$_i[1];
        propertyName in this.properties || (this.properties[propertyName] = (0, import_kolmafia.propertyExists)(propertyName) ? get(propertyName) : PropertiesManager2.EMPTY_PREFERENCE), _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2), choiceNumber = _ref6[0], choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function(choiceToSet, value) {
      this.setChoices({
        [choiceToSet]: value
      });
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
  }, {
    key: "reset",
    value: function() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++)
        properties[_key] = arguments[_key];
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (property in this.properties) {
          var value = this.properties[property];
          value === PropertiesManager2.EMPTY_PREFERENCE ? (0, import_kolmafia.removeProperty)(property) : _set(property, value);
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function() {
      this.reset.apply(this, _toConsumableArray(Object.keys(this.properties)));
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
  }, {
    key: "clear",
    value: function() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        properties[_key2] = arguments[_key2];
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        this.properties[property] && delete this.properties[property];
      }
    }
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function(property, value) {
      return get(property, 0) < value ? (this.set({
        [property]: value
      }), !0) : !1;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function(property, value) {
      return get(property, 0) > value ? (this.set({
        [property]: value
      }), !0) : !1;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function() {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = this.storedValues, newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
  }, {
    key: "clamp",
    value: function(property, min, max) {
      if (max < min) return !1;
      var start = get(property);
      return this.setMinimumValue(property, min), this.setMaximumValue(property, max), start !== get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
  }, {
    key: "equals",
    value: function(other) {
      var thisProps = Object.entries(this.storedValues), otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size) return !1;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2), propertyName = _thisProps$_i[0], propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue) return !1;
      }
      return !0;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function(other) {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = _objectSpread(_objectSpread({}, this.properties), other.properties), newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
  }], [{
    key: "merge",
    value: function() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
        mergees[_key3] = arguments[_key3];
      return mergees.length === 0 ? new PropertiesManager2() : mergees.reduce(function(a, b) {
        return a.merge(b);
      });
    }
  }]);
})();
_defineProperty(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));

// ../../node_modules/libram/dist/template-string.js
var import_kolmafia2 = require("kolmafia");

// ../../node_modules/libram/dist/utils.js
function _createForOfIteratorHelper(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray2(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray2(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0;
  }
}
function _arrayLikeToArray2(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function splitByCommasWithEscapes(str) {
  var returnValue = [], ignoreNext = !1, currentString = "", _iterator2 = _createForOfIteratorHelper(str.split("")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      char === "\\" ? ignoreNext = !0 : (char == "," && !ignoreNext ? (returnValue.push(currentString.trim()), currentString = "") : currentString += char, ignoreNext = !1);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return returnValue.push(currentString.trim()), returnValue;
}
function undelay(delayedObject) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
    args[_key2 - 1] = arguments[_key2];
  return typeof delayedObject == "function" ? delayedObject.apply(void 0, args) : delayedObject;
}
function makeByXFunction(source) {
  return function(options, alternateSource) {
    var val = undelay(alternateSource ?? source);
    return "default" in options ? options[val] ?? options.default : options[val];
  };
}

// ../../node_modules/libram/dist/template-string.js
var concatTemplateString = function(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    placeholders[_key - 1] = arguments[_key];
  return literals.raw.reduce(function(acc, literal2, i) {
    return acc + literal2 + (placeholders[i] ?? "");
  }, "");
}, handleTypeGetError = function(Type, error46) {
  var message = "".concat(error46), match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  match ? (0, import_kolmafia2.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red") : (0, import_kolmafia2.print)(message);
}, createSingleConstant = function(Type, converter) {
  var tagFunction = function(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
      placeholders[_key2 - 1] = arguments[_key2];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error46) {
      handleTypeGetError(Type, error46);
    }
    (0, import_kolmafia2.abort)();
  };
  return tagFunction.cls = Type, tagFunction.none = Type.none, tagFunction.get = function(name) {
    var value = converter(name);
    return value === Type.none ? null : value;
  }, tagFunction;
}, createPluralConstant = function(Type) {
  var tagFunction = function(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)
      placeholders[_key3 - 1] = arguments[_key3];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "")
      return Type.all();
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error46) {
      handleTypeGetError(Type, error46);
    }
    (0, import_kolmafia2.abort)();
  };
  return tagFunction.all = function() {
    return Type.all();
  }, tagFunction;
}, $bounty = createSingleConstant(import_kolmafia2.Bounty, import_kolmafia2.toBounty), $bounties = createPluralConstant(import_kolmafia2.Bounty), $class = createSingleConstant(import_kolmafia2.Class, import_kolmafia2.toClass), $classes = createPluralConstant(import_kolmafia2.Class), $coinmaster = createSingleConstant(import_kolmafia2.Coinmaster, import_kolmafia2.toCoinmaster), $coinmasters = createPluralConstant(import_kolmafia2.Coinmaster), $effect = createSingleConstant(import_kolmafia2.Effect, import_kolmafia2.toEffect), $effects = createPluralConstant(import_kolmafia2.Effect), $element = createSingleConstant(import_kolmafia2.Element, import_kolmafia2.toElement), $elements = createPluralConstant(import_kolmafia2.Element), $familiar = createSingleConstant(import_kolmafia2.Familiar, import_kolmafia2.toFamiliar), $familiars = createPluralConstant(import_kolmafia2.Familiar), $item = createSingleConstant(import_kolmafia2.Item, import_kolmafia2.toItem), $items = createPluralConstant(import_kolmafia2.Item), $location = createSingleConstant(import_kolmafia2.Location, import_kolmafia2.toLocation), $locations = createPluralConstant(import_kolmafia2.Location), $modifier = createSingleConstant(import_kolmafia2.Modifier, import_kolmafia2.toModifier), $modifiers = createPluralConstant(import_kolmafia2.Modifier), $monster = createSingleConstant(import_kolmafia2.Monster, import_kolmafia2.toMonster), $monsters = createPluralConstant(import_kolmafia2.Monster), $path = createSingleConstant(import_kolmafia2.Path, import_kolmafia2.toPath), $paths = createPluralConstant(import_kolmafia2.Path), $phylum = createSingleConstant(import_kolmafia2.Phylum, import_kolmafia2.toPhylum), $phyla = createPluralConstant(import_kolmafia2.Phylum), $servant = createSingleConstant(import_kolmafia2.Servant, import_kolmafia2.toServant), $servants = createPluralConstant(import_kolmafia2.Servant), $skill = createSingleConstant(import_kolmafia2.Skill, import_kolmafia2.toSkill), $skills = createPluralConstant(import_kolmafia2.Skill), $slot = createSingleConstant(import_kolmafia2.Slot, import_kolmafia2.toSlot), $slots = createPluralConstant(import_kolmafia2.Slot), $stat = createSingleConstant(import_kolmafia2.Stat, import_kolmafia2.toStat), $stats = createPluralConstant(import_kolmafia2.Stat), $thrall = createSingleConstant(import_kolmafia2.Thrall, import_kolmafia2.toThrall), $thralls = createPluralConstant(import_kolmafia2.Thrall);

// ../../node_modules/libram/dist/lib.js
var _templateObject1, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
var _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52;
function _createForOfIteratorHelper2(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray3(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _slicedToArray2(r, e) {
  return _arrayWithHoles2(r) || _iterableToArrayLimit2(r, e) || _unsupportedIterableToArray3(r, e) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray3(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray3(r, a) : void 0;
  }
}
function _arrayLikeToArray3(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit2(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles2(r) {
  if (Array.isArray(r)) return r;
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function haveInCampground(item) {
  return Object.keys((0, import_kolmafia3.getCampground)()).map(function(i) {
    return import_kolmafia3.Item.get(i);
  }).includes(item);
}
var Wanderer;
(function(Wanderer2) {
  Wanderer2.Digitize = "Digitize Monster", Wanderer2.Enamorang = "Enamorang Monster", Wanderer2.Familiar = "Familiar", Wanderer2.Holiday = "Holiday Monster", Wanderer2.Kramco = "Kramco", Wanderer2.Nemesis = "Nemesis Assassin", Wanderer2.Portscan = "portscan.edu", Wanderer2.Romantic = "Romantic Monster", Wanderer2.Vote = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
var foldGroupCache = /* @__PURE__ */ new Map();
function getFoldGroup(item) {
  var cache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (cache) {
    var cached2 = foldGroupCache.get(item);
    if (cached2 !== void 0) return cached2;
  }
  var result = Object.entries((0, import_kolmafia3.getRelated)(item, "fold")).sort(function(_ref, _ref2) {
    var _ref3 = _slicedToArray2(_ref, 2), a = _ref3[1], _ref4 = _slicedToArray2(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray2(_ref5, 1), i = _ref6[0];
    return import_kolmafia3.Item.get(i);
  }), _iterator = _createForOfIteratorHelper2(result), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var fold = _step.value;
      foldGroupCache.set(fold, result);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject1 || (_templateObject1 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]), telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);
var byStat = makeByXFunction(function() {
  return (0, import_kolmafia3.myPrimestat)().toString();
}), byClass = makeByXFunction(function() {
  return (0, import_kolmafia3.myClass)().toString();
});
function makeScalerCalcFunction(cache, pattern) {
  return function(monster) {
    var _pattern$exec, current = cache.get(monster);
    if (current !== void 0) return (0, import_kolmafia3.monsterEval)(current);
    var result = (((_pattern$exec = pattern.exec(monster.attributes)) === null || _pattern$exec === void 0 ? void 0 : _pattern$exec.slice(1)) ?? []).find(function(m) {
      return m !== void 0;
    }) ?? "0";
    return cache.set(monster, result), (0, import_kolmafia3.monsterEval)(result);
  };
}
var scalerRates = /* @__PURE__ */ new Map(), scalerCaps = /* @__PURE__ */ new Map(), SCALE_RATE_PATTERN = /Scale: (?:\[([^\]]*)\]|(\d*))/, SCALE_CAP_PATTERN = /Cap: (?:\[([^\]]*)\]|(\d*))/, getScalingRate = makeScalerCalcFunction(scalerRates, SCALE_RATE_PATTERN), getScalingCap = makeScalerCalcFunction(scalerCaps, SCALE_CAP_PATTERN);
var makeBulkFunction = function(action) {
  return function(items) {
    (0, import_kolmafia3.batchOpen)();
    var _iterator2 = _createForOfIteratorHelper2(items.entries()), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _step2$value = _slicedToArray2(_step2.value, 2), item = _step2$value[0], quantity = _step2$value[1];
        action(quantity, item);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return (0, import_kolmafia3.batchClose)();
  };
}, bulkAutosell = makeBulkFunction(import_kolmafia3.autosell), bulkPutCloset = makeBulkFunction(import_kolmafia3.putCloset), bulkPutDisplay = makeBulkFunction(import_kolmafia3.putDisplay), bulkPutStash = makeBulkFunction(import_kolmafia3.putStash), bulkTakeCloset = makeBulkFunction(import_kolmafia3.takeCloset), bulkTakeDisplay = makeBulkFunction(import_kolmafia3.takeDisplay), bulkTakeShop = makeBulkFunction(import_kolmafia3.takeShop), bulkTakeStash = makeBulkFunction(import_kolmafia3.takeStash), bulkTakeStorage = makeBulkFunction(import_kolmafia3.takeStorage);
var regularFamiliarTags = Object.freeze(["animal", "insect", "haseyes", "haswings", "fast", "bite", "flies", "hashands", "wearsclothes", "organic", "vegetable", "hovers", "edible", "food", "sentient", "cute", "mineral", "polygonal", "object", "undead", "cantalk", "evil", "orb", "spooky", "sleaze", "aquatic", "swims", "isclothes", "phallic", "stench", "hot", "hasbeak", "haslegs", "robot", "technological", "hard", "cold", "hasbones", "hasclaws", "reallyevil", "good", "person", "humanoid", "animatedart", "software", "hasshell", "hasstinger"]), regularFamiliarTagSet = new Set(regularFamiliarTags), pokefamUltTags = Object.freeze(["ult_bearhug", "ult_sticktreats", "ult_owlstare", "ult_bloodbath", "ult_pepperscorn", "ult_rainbowstorm"]), SPECIAL_ULTS = /* @__PURE__ */ new Map([[$familiar(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["Nursine"]))), ["ult_bearhug"]], [$familiar(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["Caramel"]))), ["ult_sticktreats"]], [$familiar(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["Smashmoth"]))), ["ult_owlstare"]], [$familiar(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["Slotter"]))), ["ult_bloodbath"]], [$familiar(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["Cornbeefadon"]))), ["ult_pepperscorn"]], [$familiar(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["Mu"]))), ["ult_rainbowstorm"]]]);

// ../wishlist-shared/data/iotms.ts
var iotms = [{
  packaged_id: 894,
  packaged_name: "Dark Jill-O-Lantern",
  familiar_ids: 24,
  familiar_names: "Jill-O-Lantern",
  year: 2004,
  month: 10,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "jilldark.gif"
}, {
  packaged_id: 914,
  packaged_name: "hand turkey outline",
  familiar_ids: 25,
  familiar_names: "Hand Turkey",
  year: 2004,
  month: 11,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "hand.gif"
}, {
  packaged_id: 924,
  packaged_name: "crimbo elfling",
  familiar_ids: 26,
  familiar_names: "Crimbo Elf",
  year: 2004,
  month: 12,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "elfling.gif"
}, {
  packaged_id: 954,
  packaged_name: "orphan baby yeti",
  familiar_ids: 28,
  familiar_names: "Baby Yeti",
  year: 2005,
  month: 1,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "babyyeti.gif"
}, {
  packaged_id: 961,
  packaged_name: "silk garter snake",
  familiar_ids: 29,
  familiar_names: "Feather Boa Constrictor",
  year: 2005,
  month: 2,
  speed_tier: 5,
  aftercore_tier: 4,
  tradeable: !1,
  type: "familiar",
  img: "garter.gif"
}, {
  packaged_id: 1040,
  packaged_name: "lucky Tam O'Shanter",
  year: 2005,
  month: 3,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "familiar",
  img: "tamo.gif"
}, {
  packaged_id: 1083,
  packaged_name: "personal raindrop",
  familiar_ids: 31,
  familiar_names: "Personal Raincloud",
  year: 2005,
  month: 4,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "raindrop.gif"
}, {
  packaged_id: 1152,
  packaged_name: "miniature gravy-covered maypole",
  year: 2005,
  month: 5,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "familiar",
  img: "maypole.gif"
}, {
  packaged_id: 1242,
  packaged_name: "deflated inflatable dodecapede",
  familiar_ids: 38,
  familiar_names: "Inflatable Dodecapede",
  year: 2005,
  month: 6,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "deflatdod.gif"
}, {
  packaged_id: 1260,
  packaged_name: "wax lips",
  year: 2005,
  month: 7,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "familiar",
  img: "waxlips.gif"
}, {
  packaged_id: 1263,
  packaged_name: "pygmy bugbear shaman",
  familiar_ids: 39,
  familiar_names: "Pygmy Bugbear Shaman",
  year: 2005,
  month: 8,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "familiar39.gif"
}, {
  packaged_id: 1291,
  packaged_name: "Jekyllin hide belt",
  year: 2005,
  month: 9,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "accessory",
  img: "jbelt.gif"
}, {
  packaged_id: 1304,
  packaged_name: "doppelshifter egg",
  familiar_ids: 40,
  familiar_names: "Doppelshifter",
  year: 2005,
  month: 10,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "doppegg.gif"
}, {
  packaged_id: 1349,
  packaged_name: "miniscule temporal rip",
  familiar_ids: 43,
  familiar_names: "Temporal Riftlet",
  year: 2005,
  month: 11,
  speed_tier: 4,
  aftercore_tier: 4,
  tradeable: !1,
  type: "familiar",
  img: "rip.gif"
}, {
  packaged_id: 1373,
  packaged_name: "sweet nutcracker",
  familiar_ids: 44,
  familiar_names: "Sweet Nutcracker",
  year: 2005,
  month: 12,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "nutcracker.gif"
}, {
  packaged_id: 898,
  packaged_name: "Cheshire Bitten",
  familiar_ids: 23,
  familiar_names: "Cheshire Bat",
  year: 2005,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "cbitten.gif"
}, {
  packaged_id: 897,
  packaged_name: "coffee sprite",
  familiar_ids: 22,
  familiar_names: "Coffee Pixie",
  year: 2005,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "csprite.gif"
}, {
  packaged_id: 1411,
  packaged_name: "Tome of Snowcone Summoning",
  skill_ids: 7213,
  skill_names: "Summon Snowcones",
  year: 2006,
  month: 1,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "tome",
  img: "book.gif"
}, {
  packaged_id: 1423,
  packaged_name: "iceberglet",
  opened_ids: [1424, 1425, 1426, 1427],
  opened_names: ["ice sickle", "ice baby", "ice skates", "ice pick"],
  year: 2006,
  month: 2,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  img: "iceberglet.gif"
}, {
  packaged_id: 1488,
  packaged_name: "March hat",
  familiar_ids: 50,
  familiar_names: "Wild Hare",
  year: 2006,
  month: 3,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "marchhat.gif"
}, {
  packaged_id: 1498,
  packaged_name: "McPhee's Grimoire of Hilarious Object Summoning",
  skill_ids: 7226,
  skill_names: "Summon Hilarious Objects",
  year: 2006,
  month: 4,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "grimoire",
  img: "book2.gif"
}, {
  packaged_id: 1536,
  packaged_name: "homeless hobo spirit",
  familiar_ids: 52,
  familiar_names: "Spirit Hobo",
  year: 2006,
  month: 5,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "ghoboh.gif"
}, {
  packaged_id: 1621,
  packaged_name: "astral badger",
  familiar_ids: 53,
  familiar_names: "Astral Badger",
  year: 2006,
  month: 6,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "badger1.gif"
}, {
  packaged_id: 1653,
  packaged_name: "jewel-eyed wizard hat",
  year: 2006,
  month: 7,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "hat",
  img: "wizhat.gif"
}, {
  packaged_id: 1703,
  packaged_name: "Comma Chameleon egg",
  familiar_ids: 54,
  familiar_names: "Comma Chameleon",
  year: 2006,
  month: 8,
  speed_tier: 5,
  aftercore_tier: 4,
  tradeable: !1,
  type: "familiar",
  img: "commaegg.gif"
}, {
  packaged_id: 1792,
  packaged_name: "Travoltan trousers",
  year: 2006,
  month: 9,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "pants",
  img: "travtrou.gif"
}, {
  packaged_id: 1971,
  packaged_name: "plastic pumpkin bucket",
  year: 2006,
  month: 10,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "familiar",
  img: "punkin.gif"
}, {
  packaged_id: 2090,
  packaged_name: "pilgrim shield",
  year: 2006,
  month: 11,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "offhand",
  img: "pilshield.gif"
}, {
  packaged_id: 2190,
  packaged_name: "yuletide troll chrysalis",
  familiar_ids: 65,
  familiar_names: "Ancient Yuletide Troll",
  year: 2006,
  month: 12,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "chrysalis.gif"
}, {
  packaged_id: 1307,
  packaged_name: "calm attention-deficit demon",
  familiar_ids: 41,
  familiar_names: "Attention-Deficit Demon",
  year: 2006,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "addemon.gif"
}, {
  packaged_id: 1308,
  packaged_name: "unwound cymbal-playing monkey",
  familiar_ids: 42,
  familiar_names: "Cymbal-Playing Monkey",
  year: 2006,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "cmonkey1.gif"
}, {
  packaged_id: 2221,
  packaged_name: "Great Ball of Frozen Fire",
  opened_ids: [2222, 2223, 2224, 2225, 2226],
  opened_names: ["liar's pants", "flaming juggler's balls", "flaming pink shirt", "flaming familiar doppelg\xE4nger", "evil flaming eyeball pendant"],
  year: 2007,
  month: 1,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  img: "ffball.gif"
}, {
  packaged_id: 2303,
  packaged_name: "Libram of Candy Heart Summoning",
  skill_ids: 7219,
  skill_names: "Summon Candy Heart",
  year: 2007,
  month: 2,
  speed_tier: 3,
  aftercore_tier: 6,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "libram",
  img: "book.gif"
}, {
  packaged_id: 2380,
  packaged_name: "dandy lion cub",
  familiar_ids: 66,
  familiar_names: "Dandy Lion",
  year: 2007,
  month: 3,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "dandylioncub.gif"
}, {
  packaged_id: 2447,
  packaged_name: "bad penguin egg",
  familiar_ids: 68,
  familiar_names: "Penguin Goodfella",
  year: 2007,
  month: 4,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "pengegg.gif"
}, {
  packaged_id: 2541,
  packaged_name: "Mayflower bouquet",
  year: 2007,
  month: 5,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "familiar",
  img: "maybouquet.gif"
}, {
  packaged_id: 2650,
  packaged_name: "bottled green pixie",
  familiar_ids: 70,
  familiar_names: "Green Pixie",
  year: 2007,
  month: 6,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "bottledpixie.gif"
}, {
  packaged_id: 2834,
  packaged_name: "bottle-rocket crossbow",
  year: 2007,
  month: 7,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "weapon",
  img: "brcrossbow.gif"
}, {
  packaged_id: 2836,
  packaged_name: "wizard action figure",
  familiar_ids: 73,
  familiar_names: "Wizard Action Figure",
  year: 2007,
  month: 8,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "waflarva.gif"
}, {
  packaged_id: 2844,
  packaged_name: "navel ring of navel gazing",
  year: 2007,
  month: 9,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !0,
  type: "item",
  equipment_slot: "accessory",
  img: "navelring.gif"
}, {
  packaged_id: 2845,
  packaged_name: "class five ecto-larva",
  familiar_ids: 74,
  familiar_names: "Gluttonous Green Ghost",
  year: 2007,
  month: 10,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "ectoegg.gif"
}, {
  packaged_id: 2946,
  packaged_name: "V for Vivala mask",
  year: 2007,
  month: 11,
  speed_tier: 6,
  aftercore_tier: 5,
  tradeable: !0,
  type: "item",
  equipment_slot: "accessory",
  img: "vivala.gif"
}, {
  packaged_id: 3042,
  packaged_name: "Crimbo P. R. E. S. S. I. E.",
  familiar_ids: 77,
  familiar_names: "Crimbo P. R. E. S. S. I. E.",
  year: 2007,
  month: 12,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "pressielarva.gif"
}, {
  packaged_id: 1967,
  packaged_name: "jitterbug larva",
  familiar_ids: 57,
  familiar_names: "Jitterbug",
  year: 2007,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "jitterlarva.gif"
}, {
  packaged_id: 1970,
  packaged_name: "nervous tick egg",
  familiar_ids: 58,
  familiar_names: "Nervous Tick",
  year: 2007,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "tickegg.gif"
}, {
  packaged_id: 3117,
  packaged_name: "Libram of Divine Favors",
  skill_ids: 7220,
  skill_names: "Summon Party Favor",
  year: 2008,
  month: 1,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "libram",
  img: "book3.gif"
}, {
  packaged_id: 3192,
  packaged_name: "naughty origami kit",
  opened_ids: [3193, 3194, 3195, 3196, 3197],
  opened_names: ["naughty fortune teller", 'origami "gentlemen\'s" magazine', "naughty paper shuriken", "origami pasties", "origami riding crop"],
  year: 2008,
  month: 2,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  img: "origamikit.gif"
}, {
  packaged_id: 3219,
  packaged_name: "sane hatrack",
  familiar_ids: 82,
  familiar_names: "Mad Hatrack",
  year: 2008,
  month: 3,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "sanehatrack.gif"
}, {
  packaged_id: 3263,
  packaged_name: "Sp'n-Zor's Grimoire of \"Tasteful\" Gifts",
  skill_ids: 7227,
  skill_names: "Summon Tasteful Items",
  year: 2008,
  month: 4,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "grimoire",
  img: "book4.gif"
}, {
  packaged_id: 3321,
  packaged_name: "packet of mayfly bait",
  opened_ids: 3322,
  opened_names: "mayfly bait necklace",
  year: 2008,
  month: 5,
  speed_tier: 5,
  aftercore_tier: 3,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "mayflybait.gif"
}, {
  packaged_id: 3351,
  packaged_name: "llama lama cria",
  familiar_ids: 90,
  familiar_names: "Llama Lama",
  year: 2008,
  month: 6,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "cria.gif"
}, {
  packaged_id: 3421,
  packaged_name: "little box of fireworks",
  year: 2008,
  month: 7,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "familiar",
  img: "fireworksbox.gif"
}, {
  packaged_id: 3431,
  packaged_name: "cotton candy cocoon",
  familiar_ids: 91,
  familiar_names: "Cotton Candy Carnie",
  year: 2008,
  month: 8,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "cccoccoon.gif"
}, {
  packaged_id: 3466,
  packaged_name: "haiku katana",
  year: 2008,
  month: 9,
  speed_tier: 6,
  aftercore_tier: 5,
  tradeable: !0,
  type: "item",
  equipment_slot: "weapon",
  img: "hkatana.gif"
}, {
  packaged_id: 3434,
  packaged_name: "spooky rattling cigar box",
  familiar_ids: 92,
  familiar_names: "Disembodied Hand",
  year: 2008,
  month: 10,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "cigarbox.gif"
}, {
  packaged_id: 3507,
  packaged_name: "Scratch 'n' Sniff Sticker Tome",
  skill_ids: 7214,
  skill_names: "Summon Stickers",
  year: 2008,
  month: 11,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "tome",
  img: "book3.gif"
}, {
  packaged_id: 3578,
  packaged_name: "candy cornucopia",
  familiar_ids: 101,
  familiar_names: "Sugar Fruit Fairy",
  year: 2008,
  month: 12,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "cornucopia.gif"
}, {
  packaged_id: 2937,
  packaged_name: "siesta-ing Casagnova gnome",
  familiar_ids: 75,
  familiar_names: "Casagnova Gnome",
  year: 2008,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "cassasleep.gif"
}, {
  packaged_id: 2939,
  packaged_name: "unemployed hunchbacked minion",
  familiar_ids: 76,
  familiar_names: "Hunchbacked Minion",
  year: 2008,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "hunch.gif"
}, {
  packaged_id: 3661,
  packaged_name: "container of Spooky Putty",
  opened_ids: [3662, 3663, 3664, 3665, 3666],
  opened_names: ["Spooky Putty mitre", "Spooky Putty leotard", "Spooky Putty ball", "Spooky Putty sheet", "Spooky Putty snake"],
  year: 2009,
  month: 1,
  speed_tier: 4,
  aftercore_tier: 2,
  tradeable: !0,
  type: "item",
  img: "sputtyegg.gif"
}, {
  packaged_id: 3753,
  packaged_name: "Libram of Love Songs",
  skill_ids: 7221,
  skill_names: "Summon Love Song",
  year: 2009,
  month: 2,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "libram",
  img: "book4.gif"
}, {
  packaged_id: 3799,
  packaged_name: "Apathargic Bandersnatch",
  familiar_ids: 105,
  familiar_names: "Frumious Bandersnatch",
  year: 2009,
  month: 3,
  speed_tier: 0,
  aftercore_tier: 0,
  tradeable: !1,
  type: "familiar",
  img: "banderlarva.gif"
}, {
  packaged_id: 3836,
  packaged_name: "Elvish sunglasses",
  year: 2009,
  month: 4,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "accessory",
  img: "elvisshades.gif"
}, {
  packaged_id: 3963,
  packaged_name: "Clan pool table",
  year: 2009,
  month: 5,
  speed_tier: 2,
  aftercore_tier: 3,
  tradeable: !1,
  type: "vip",
  img: "crate.gif"
}, {
  packaged_id: 3999,
  packaged_name: "infant sandworm",
  familiar_ids: 111,
  familiar_names: "Baby Sandworm",
  year: 2009,
  month: 6,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "wormlarva.gif"
}, {
  packaged_id: 4136,
  packaged_name: "Bag o' Tricks",
  year: 2009,
  month: 7,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "offhand",
  img: "bagotricks.gif"
}, {
  packaged_id: 4148,
  packaged_name: "floaty stone sphere",
  familiar_ids: 113,
  familiar_names: "He-Boulder",
  year: 2009,
  month: 8,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "beholderegg.gif"
}, {
  packaged_id: 4177,
  packaged_name: "Tome of Sugar Shummoning",
  skill_ids: 7215,
  skill_names: "Summon Sugar Sheets",
  year: 2009,
  month: 9,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "tome",
  img: "book4.gif"
}, {
  packaged_id: 4223,
  packaged_name: "squamous polyp",
  familiar_ids: 117,
  familiar_names: "Squamous Gibberer",
  year: 2009,
  month: 10,
  speed_tier: 6,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "polyp.gif"
}, {
  packaged_id: 4135,
  packaged_name: "moveable feast",
  year: 2009,
  month: 11,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "familiar",
  img: "movfeast.gif"
}, {
  packaged_id: 4328,
  packaged_name: "suspicious stocking",
  familiar_ids: 120,
  familiar_names: "Stocking Mimic",
  year: 2009,
  month: 12,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "susstocking.gif"
}, {
  packaged_id: 3482,
  packaged_name: "passed-out psychedelic bear",
  familiar_ids: 95,
  familiar_names: "Psychedelic Bear",
  year: 2009,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "sleepbear.gif"
}, {
  packaged_id: 3481,
  packaged_name: "uniclops egg",
  familiar_ids: 94,
  familiar_names: "Uniclops",
  year: 2009,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "uniclopsegg.gif"
}, {
  packaged_id: 4398,
  packaged_name: "stinky cheese ball",
  opened_ids: [4399, 4400, 4401, 4402, 4403],
  opened_names: ["stinky cheese sword", "stinky cheese diaper", "stinky cheese wheel", "stinky cheese eye", "Staff of Queso Escusado"],
  year: 2010,
  month: 1,
  speed_tier: 6,
  aftercore_tier: 4,
  tradeable: !0,
  type: "item",
  img: "sc_ball.gif"
}, {
  packaged_id: 4468,
  packaged_name: "Libram of BRICKOs",
  skill_ids: 7222,
  skill_names: "Summon BRICKOs",
  year: 2010,
  month: 2,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "libram",
  img: "book2.gif"
}, {
  packaged_id: 4507,
  packaged_name: "Clan looking glass",
  year: 2010,
  month: 3,
  tradeable: !1,
  type: "vip",
  img: "crate.gif"
}, {
  packaged_id: 4574,
  packaged_name: "panicked kernel",
  familiar_ids: 124,
  familiar_names: "Baby Bugged Bugbear",
  year: 2010,
  month: 4,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "kernel.gif"
}, {
  packaged_id: 4614,
  packaged_name: "Crown of Thrones",
  year: 2010,
  month: 5,
  speed_tier: 4,
  aftercore_tier: 4,
  tradeable: !0,
  type: "item",
  equipment_slot: "hat",
  img: "chairhat.gif"
}, {
  packaged_id: 4619,
  packaged_name: "glowing frisbee",
  familiar_ids: 135,
  familiar_names: "Rogue Program",
  year: 2010,
  month: 6,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "trondisc.gif"
}, {
  packaged_id: 4644,
  packaged_name: "Juju Mojo Mask",
  year: 2010,
  month: 7,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "accessory",
  img: "jujumask.gif"
}, {
  packaged_id: 4648,
  packaged_name: "Schmalz's First Prize Beer",
  familiar_ids: 136,
  familiar_names: "Mini-Hipster",
  year: 2010,
  month: 8,
  speed_tier: 2,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "pbr.gif"
}, {
  packaged_id: 4696,
  packaged_name: "Greatest American Pants",
  year: 2010,
  month: 9,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !0,
  type: "item",
  equipment_slot: "pants",
  img: "gapants.gif"
}, {
  packaged_id: 4720,
  packaged_name: "organ grinder",
  familiar_ids: 139,
  familiar_names: "Knob Goblin Organ Grinder",
  year: 2010,
  month: 10,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "grinder.gif"
}, {
  packaged_id: 4759,
  packaged_name: "Grumpy Bumpkin's Pumpkin Seed Catalog",
  opened_ids: 4760,
  opened_names: "packet of pumpkin seeds",
  year: 2010,
  month: 11,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "campground",
  campground_slot: "garden",
  img: "book2.gif"
}, {
  packaged_id: 4827,
  packaged_name: "hibernating robot reindeer",
  familiar_ids: 143,
  familiar_names: "Robot Reindeer",
  year: 2010,
  month: 12,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "hyberdeer.gif"
}, {
  packaged_id: 4227,
  packaged_name: "hungover chauvinist pig",
  familiar_ids: 119,
  familiar_names: "Chauvinist Pig",
  year: 2010,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "hungopig.gif"
}, {
  packaged_id: 4228,
  packaged_name: "perfectly ordinary frog",
  familiar_ids: 118,
  familiar_names: "Dancing Frog",
  year: 2010,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "normfrog.gif"
}, {
  packaged_id: 4908,
  packaged_name: "Loathing Legion knife",
  year: 2011,
  month: 1,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  img: "llknife.gif"
}, {
  packaged_id: 4937,
  packaged_name: "a cute angel",
  familiar_ids: 146,
  familiar_names: "Obtuse Angel",
  year: 2011,
  month: 2,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "acuteangel.gif"
}, {
  packaged_id: 4965,
  packaged_name: "Sorcerers of the Shore Grimoire",
  skill_ids: 7228,
  skill_names: "Summon Alice's Army Cards",
  year: 2011,
  month: 3,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "grimoire",
  img: "book3.gif"
}, {
  packaged_id: 5047,
  packaged_name: "Clan shower",
  year: 2011,
  month: 4,
  tradeable: !1,
  type: "vip",
  img: "crate.gif"
}, {
  packaged_id: 5112,
  packaged_name: "My Own Pen Pal kit",
  year: 2011,
  month: 5,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "eudora",
  img: "ppkit.gif"
}, {
  packaged_id: 5164,
  packaged_name: "mysterious chest",
  familiar_ids: 148,
  familiar_names: "Li'l Xenomorph",
  year: 2011,
  month: 6,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "spacechest.gif"
}, {
  packaged_id: 5190,
  packaged_name: "Operation Patriot Shield",
  year: 2011,
  month: 7,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "offhand",
  img: "opshield.gif"
}, {
  packaged_id: 4536,
  packaged_name: "fairy-worn boots",
  familiar_ids: 150,
  familiar_names: "Pair of Stomping Boots",
  year: 2011,
  month: 8,
  speed_tier: 0,
  aftercore_tier: 0,
  tradeable: !1,
  type: "familiar",
  img: "fairyboots.gif"
}, {
  packaged_id: 5223,
  packaged_name: "Tome of Clip Art",
  skill_ids: 7216,
  skill_names: "Summon Clip Art",
  year: 2011,
  month: 9,
  speed_tier: 1,
  aftercore_tier: 4,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "tome",
  img: "book3.gif"
}, {
  packaged_id: 5301,
  packaged_name: "Make-Your-Own-Vampire-Fangs kit",
  opened_ids: 5299,
  opened_names: "plastic vampire fangs",
  year: 2011,
  month: 10,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "fangskit.gif"
}, {
  packaged_id: 5371,
  packaged_name: "stuffed-shirt scarecrow",
  familiar_ids: 152,
  familiar_names: "Fancypants Scarecrow",
  year: 2011,
  month: 11,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "pantscrow.gif"
}, {
  packaged_id: 5403,
  packaged_name: "Mint Salton Pepper's Peppermint Seed Catalog",
  opened_ids: 5404,
  opened_names: "Peppermint Pip Packet",
  year: 2011,
  month: 12,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !1,
  type: "campground",
  campground_slot: "garden",
  img: "pep_catalog.gif"
}, {
  packaged_id: 4734,
  packaged_name: "rehearsing dramatic hedgehog",
  familiar_ids: 141,
  familiar_names: "Dramatic Hedgehog",
  year: 2011,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "hearsehog.gif"
}, {
  packaged_id: 4732,
  packaged_name: "sleeping piano cat",
  familiar_ids: 140,
  familiar_names: "Piano Cat",
  year: 2011,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "sleepcat.gif"
}, {
  packaged_id: 5463,
  packaged_name: "Libram of Resolutions",
  skill_ids: 7224,
  skill_names: "Summon Resolutions",
  year: 2012,
  month: 1,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "libram",
  img: "book5.gif"
}, {
  packaged_id: 5553,
  packaged_name: "can of Rain-Doh",
  year: 2012,
  month: 2,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !0,
  type: "item",
  img: "raindoh.gif"
}, {
  packaged_id: 5639,
  packaged_name: "Small Medium",
  familiar_ids: 159,
  familiar_names: "Happy Medium",
  year: 2012,
  month: 3,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "medium_small.gif"
}, {
  packaged_id: 5648,
  packaged_name: "Boris's Helm",
  year: 2012,
  month: 4,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "hat",
  img: "borishelm.gif"
}, {
  packaged_id: 5662,
  packaged_name: "Olympic-sized Clan crate",
  year: 2012,
  month: 5,
  tradeable: !1,
  type: "vip",
  img: "crate.gif"
}, {
  packaged_id: 5701,
  packaged_name: "Moping Artistic Goth Kid",
  familiar_ids: 160,
  familiar_names: "Artistic Goth Kid",
  year: 2012,
  month: 6,
  speed_tier: 2,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "mopinggoth.gif"
}, {
  packaged_id: 5738,
  packaged_name: "Camp Scout backpack",
  year: 2012,
  month: 7,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "back",
  img: "csbackpack.gif"
}, {
  packaged_id: 5767,
  packaged_name: "Unagnimated Gnome",
  familiar_ids: 162,
  familiar_names: "Reagnimated Gnome",
  year: 2012,
  month: 8,
  speed_tier: 4,
  aftercore_tier: 4,
  tradeable: !1,
  type: "familiar",
  img: "frankenlarva.gif"
}, {
  packaged_id: 5790,
  packaged_name: "box of bear arms",
  opened_ids: [5791, 5792],
  opened_names: ["right bear arm", "left bear arm"],
  year: 2012,
  month: 9,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !0,
  type: "custom",
  img: "beararms.gif"
}, {
  packaged_id: 5879,
  packaged_name: "Pete & Jackie's Dragon Tooth Emporium Catalog",
  opened_ids: 5880,
  opened_names: "packet of dragon's teeth",
  year: 2012,
  month: 10,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "campground",
  campground_slot: "garden",
  img: "teethcatalog.gif"
}, {
  packaged_id: 5910,
  packaged_name: "deactivated nanobots",
  familiar_ids: 167,
  familiar_names: "Nanorhino",
  year: 2012,
  month: 11,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "nanobox.gif"
}, {
  packaged_id: 6071,
  packaged_name: "Thinknerd's Grimoire of Geeky Gifts",
  skill_ids: 7229,
  skill_names: "Summon Geeky Gifts",
  year: 2012,
  month: 12,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "grimoire",
  img: "nerdgrimoire.gif"
}, {
  packaged_id: 5377,
  packaged_name: "The Groose in the Hoose",
  familiar_ids: 154,
  familiar_names: "Bloovian Groose",
  year: 2012,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "groosehoose.gif"
}, {
  packaged_id: 5442,
  packaged_name: "The Kloop in the Coop",
  familiar_ids: 155,
  familiar_names: "Blavious Kloop",
  year: 2012,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "kloopcoop.gif"
}, {
  packaged_id: 6150,
  packaged_name: "Snow Suit",
  year: 2013,
  month: 1,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "familiar",
  img: "snowsuit.gif"
}, {
  packaged_id: 4712,
  packaged_name: "GameInformPowerDailyPro subscription card",
  year: 2013,
  month: 2,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "eudora",
  img: "subcard.gif"
}, {
  packaged_id: 6305,
  packaged_name: "Jarlsberg's pan",
  year: 2013,
  month: 3,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "offhand",
  img: "jarl_fry.gif"
}, {
  packaged_id: 6360,
  packaged_name: "Libram of Pulled Taffy",
  skill_ids: 7225,
  skill_names: "Summon Taffy",
  year: 2013,
  month: 4,
  speed_tier: 4,
  aftercore_tier: 4,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "libram",
  img: "book4.gif"
}, {
  packaged_id: 6413,
  packaged_name: "Order of the Green Thumb Order Form",
  year: 2013,
  month: 5,
  speed_tier: 3,
  aftercore_tier: 6,
  tradeable: !1,
  type: "slotless",
  img: "floristform.gif"
}, {
  packaged_id: 6561,
  packaged_name: "adventurer clone egg",
  familiar_ids: 174,
  familiar_names: "Mini-Adventurer",
  year: 2013,
  month: 6,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "cloneegg.gif"
}, {
  packaged_id: 6582,
  packaged_name: "Clan hot dog stand",
  year: 2013,
  month: 7,
  tradeable: !1,
  type: "vip",
  img: "crate.gif"
}, {
  packaged_id: 4930,
  packaged_name: "Folder Holder",
  opened_ids: 6617,
  opened_names: "over-the-shoulder Folder Holder",
  year: 2013,
  month: 8,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "folderholder.gif"
}, {
  packaged_id: 6411,
  packaged_name: "KoLHS Pep Squad Box",
  familiar_ids: 158,
  familiar_names: "Steam-Powered Cheerleader",
  year: 2013,
  month: 9,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "crate.gif"
}, {
  packaged_id: 6784,
  packaged_name: "deanimated reanimator's coffin",
  familiar_ids: 176,
  familiar_names: "Reanimated Reanimator",
  year: 2013,
  month: 10,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "coffinlid.gif"
}, {
  packaged_id: 6860,
  packaged_name: "Pantsgiving",
  year: 2013,
  month: 11,
  speed_tier: 5,
  aftercore_tier: 4,
  tradeable: !0,
  type: "item",
  equipment_slot: "pants",
  img: "pantsgiving.gif"
}, {
  packaged_id: 7003,
  packaged_name: "The Smith's Tome",
  skill_ids: 7218,
  skill_names: "Summon Smithsness",
  year: 2013,
  month: 12,
  speed_tier: 2,
  aftercore_tier: 6,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "tome",
  img: "book4.gif"
}, {
  packaged_id: 5895,
  packaged_name: "avatar of the Unconscious Collective",
  familiar_ids: 166,
  familiar_names: "Unconscious Collective",
  year: 2013,
  speed_tier: 4,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "uclarva.gif"
}, {
  packaged_id: 5893,
  packaged_name: "dreaming Jung man",
  familiar_ids: 165,
  familiar_names: "Angry Jung Man",
  year: 2013,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "jungmanlarva.gif"
}, {
  packaged_id: 7069,
  packaged_name: "Discontent\u2122 Winter Garden Catalog",
  opened_ids: 7070,
  opened_names: "packet of winter seeds",
  year: 2014,
  month: 1,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "campground",
  campground_slot: "garden",
  img: "wintercatalog.gif"
}, {
  packaged_id: 7200,
  packaged_name: "Buddy Bjorn",
  year: 2014,
  month: 2,
  speed_tier: 4,
  aftercore_tier: 3,
  tradeable: !0,
  type: "item",
  equipment_slot: "back",
  img: "buddybjorn.gif"
}, {
  packaged_id: 7250,
  packaged_name: "Sneaky Pete's leather jacket",
  year: 2014,
  month: 3,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "shirt",
  img: "petejacket.gif"
}, {
  packaged_id: 7382,
  packaged_name: "Little Geneticist DNA-Splicing Lab",
  year: 2014,
  month: 4,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !0,
  type: "campground",
  campground_slot: "workshed",
  img: "genelab.gif"
}, {
  packaged_id: 7466,
  packaged_name: "airplane charter: Spring Break Beach",
  year: 2014,
  month: 5,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "content",
  img: "aircharter.gif"
}, {
  packaged_id: 7312,
  packaged_name: "still grill",
  familiar_ids: 183,
  familiar_names: "Galloping Grill",
  year: 2014,
  month: 6,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "stillgrill.gif"
}, {
  packaged_id: 7588,
  packaged_name: "Clan speakeasy",
  year: 2014,
  month: 7,
  tradeable: !1,
  type: "vip",
  img: "crate.gif"
}, {
  packaged_id: 7706,
  packaged_name: "The Confiscator's Grimoire",
  skill_ids: 7230,
  skill_names: "Summon Confiscated Things",
  year: 2014,
  month: 8,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "grimoire",
  img: "book4.gif"
}, {
  packaged_id: 7709,
  packaged_name: "Thor's Pliers",
  year: 2014,
  month: 9,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "weapon",
  img: "thorpliers.gif"
}, {
  packaged_id: 7767,
  packaged_name: "airplane charter: Conspiracy Island",
  year: 2014,
  month: 10,
  speed_tier: 5,
  aftercore_tier: 3,
  tradeable: !1,
  type: "content",
  img: "aircharter.gif"
}, {
  packaged_id: 7920,
  packaged_name: "fist turkey outline",
  familiar_ids: 188,
  familiar_names: "Fist Turkey",
  year: 2014,
  month: 11,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "fistoutline.gif"
}, {
  packaged_id: 7956,
  packaged_name: "Crimbo sapling",
  familiar_ids: 189,
  familiar_names: "Crimbo Shrub",
  year: 2014,
  month: 12,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "crimbosapling.gif"
}, {
  packaged_id: 7064,
  packaged_name: "hibernating Grimstone Golem",
  familiar_ids: 178,
  familiar_names: "Grimstone Golem",
  year: 2014,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "grimgolem_sleep.gif"
}, {
  packaged_id: 7062,
  packaged_name: "praying Grim Brother",
  familiar_ids: 179,
  familiar_names: "Grim Brother",
  year: 2014,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "grimbrotherpray.gif"
}, {
  packaged_id: 8019,
  packaged_name: "Chateau Mantegna room key",
  year: 2015,
  month: 1,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "slotless",
  img: "cmkey.gif"
}, {
  packaged_id: 8134,
  packaged_name: "bottle of lovebug pheromones",
  year: 2015,
  month: 2,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "slotless",
  img: "lovebugjuice.gif"
}, {
  packaged_id: 8184,
  packaged_name: "Ed the Undying exhibit crate",
  opened_ids: 8185,
  opened_names: "The Crown of Ed the Undying",
  year: 2015,
  month: 3,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  img: "crate.gif"
}, {
  packaged_id: 8203,
  packaged_name: "airplane charter: Dinseylandfill",
  year: 2015,
  month: 4,
  speed_tier: 5,
  aftercore_tier: 1,
  tradeable: !1,
  type: "content",
  img: "aircharter.gif"
}, {
  packaged_id: 8260,
  packaged_name: "portable Mayo Clinic",
  year: 2015,
  month: 5,
  speed_tier: 4,
  aftercore_tier: 2,
  tradeable: !0,
  type: "campground",
  campground_slot: "workshed",
  img: "mayocase.gif"
}, {
  packaged_id: 8287,
  packaged_name: "yellow puck",
  familiar_ids: 196,
  familiar_names: "Puck Man",
  year: 2015,
  month: 6,
  speed_tier: 3,
  aftercore_tier: 4,
  tradeable: !1,
  type: "familiar",
  img: "yellapuck.gif"
}, {
  packaged_id: 8304,
  packaged_name: "yellow puck with a bow on it",
  familiar_ids: 197,
  familiar_names: "Ms. Puck Man",
  year: 2015,
  month: 6,
  speed_tier: 3,
  aftercore_tier: 4,
  tradeable: !1,
  type: "familiar",
  img: "msyellapuck.gif"
}, {
  packaged_id: 8381,
  packaged_name: "Pack of Every Card",
  opened_ids: 8382,
  opened_names: "Deck of Every Card",
  year: 2015,
  month: 7,
  speed_tier: 1,
  aftercore_tier: 6,
  tradeable: !1,
  type: "item",
  img: "deckbox.gif"
}, {
  packaged_id: 8487,
  packaged_name: "airplane charter: That 70s Volcano",
  year: 2015,
  month: 8,
  speed_tier: 5,
  aftercore_tier: 4,
  tradeable: !1,
  type: "content",
  img: "aircharter.gif"
}, {
  packaged_id: 8564,
  packaged_name: "shrine to the Barrel god",
  year: 2015,
  month: 9,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "slotless",
  img: "crate.gif"
}, {
  packaged_id: 8639,
  packaged_name: "haunted doghouse",
  year: 2015,
  month: 10,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "campground",
  img: "crate.gif"
}, {
  packaged_id: 8674,
  packaged_name: "airplane charter: The Glaciest",
  year: 2015,
  month: 11,
  speed_tier: 5,
  aftercore_tier: 3,
  tradeable: !1,
  type: "content",
  img: "aircharter.gif"
}, {
  packaged_id: 8706,
  packaged_name: "machine elf capsule",
  familiar_ids: 199,
  familiar_names: "Machine Elf",
  year: 2015,
  month: 12,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "machelfcapsule.gif"
}, {
  packaged_id: 8064,
  packaged_name: "golden monkey statuette",
  familiar_ids: 192,
  familiar_names: "Golden Monkey",
  year: 2015,
  speed_tier: 5,
  aftercore_tier: 5,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "goldmonkeystat.gif"
}, {
  packaged_id: 8068,
  packaged_name: "Professor of Spelunkology",
  familiar_ids: 193,
  familiar_names: "Adventurous Spelunker",
  year: 2015,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "spelprof.gif"
}, {
  packaged_id: 8600,
  packaged_name: "potted tea tree",
  year: 2015,
  speed_tier: 3,
  aftercore_tier: 5,
  is_con: !0,
  tradeable: !1,
  type: "campground",
  img: "teatree.gif"
}, {
  packaged_id: 8705,
  packaged_name: "X-32-F snowman crate",
  year: 2016,
  month: 1,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "slotless",
  img: "crate.gif"
}, {
  packaged_id: 8836,
  packaged_name: "LT&T telegraph office deed",
  year: 2016,
  month: 2,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "content",
  img: "document.gif"
}, {
  packaged_id: 8989,
  packaged_name: "Witchess Set",
  year: 2016,
  month: 3,
  speed_tier: 2,
  aftercore_tier: 2,
  tradeable: !1,
  type: "campground",
  img: "chessset.gif"
}, {
  packaged_id: 9e3,
  packaged_name: "Clan Floundry",
  year: 2016,
  month: 4,
  tradeable: !1,
  type: "vip",
  img: "crate.gif"
}, {
  packaged_id: 9016,
  packaged_name: "disconnected intergnat",
  familiar_ids: 203,
  familiar_names: "Intergnat",
  year: 2016,
  month: 5,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "discognat.gif"
}, {
  packaged_id: 9033,
  packaged_name: "Source terminal",
  year: 2016,
  month: 6,
  speed_tier: 0,
  aftercore_tier: 0,
  tradeable: !1,
  type: "campground",
  img: "sourceterminal.gif"
}, {
  packaged_id: 9073,
  packaged_name: "detective school application",
  year: 2016,
  month: 7,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "slotless",
  img: "letter.gif"
}, {
  packaged_id: 9081,
  packaged_name: "DIY protonic accelerator kit",
  opened_ids: 9082,
  opened_names: "protonic accelerator pack",
  year: 2016,
  month: 8,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "back",
  img: "crate.gif"
}, {
  packaged_id: 9103,
  packaged_name: "Dear Past Self Package",
  opened_ids: 9104,
  opened_names: "Time-Spinner",
  year: 2016,
  month: 9,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  img: "pastselfpackage.gif"
}, {
  packaged_id: 9136,
  packaged_name: "li'l orphan tot",
  familiar_ids: 206,
  familiar_names: "Trick-or-Treating Tot",
  year: 2016,
  month: 10,
  speed_tier: 3,
  aftercore_tier: 0,
  tradeable: !1,
  type: "familiar",
  img: "boredtot.gif"
}, {
  packaged_id: 9189,
  packaged_name: "Granny Tood's Thanksgarden Catalog",
  year: 2016,
  month: 11,
  speed_tier: 2,
  aftercore_tier: 6,
  tradeable: !1,
  type: "campground",
  campground_slot: "garden",
  img: "thankscatalog.gif"
}, {
  packaged_id: 9203,
  packaged_name: "Build-a-City Gingerbread kit",
  year: 2016,
  month: 12,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "content",
  img: "gingercity.gif"
}, {
  packaged_id: 9133,
  packaged_name: "KoL Con 13 snowglobe",
  year: 2016,
  speed_tier: 6,
  aftercore_tier: 4,
  is_con: !0,
  tradeable: !0,
  type: "item",
  equipment_slot: "offhand",
  img: "consnowglobe.gif"
}, {
  packaged_id: 8831,
  packaged_name: "basking robin",
  familiar_ids: 201,
  familiar_names: "Rockin' Robin",
  year: 2016,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "baskinrobin.gif"
}, {
  packaged_id: 6750,
  packaged_name: "Gordon Beer's Beer Garden Catalog",
  opened_ids: 6751,
  opened_names: "packet of beer seeds",
  year: 2013,
  speed_tier: 5,
  aftercore_tier: 6,
  is_con: !0,
  tradeable: !1,
  type: "campground",
  campground_slot: "garden",
  img: "beercat.gif"
}, {
  packaged_id: 7730,
  packaged_name: "Xi Receiver Unit",
  year: 2014,
  speed_tier: 5,
  aftercore_tier: 6,
  is_con: !0,
  tradeable: !1,
  type: "eudora",
  img: "transmitter.gif"
}, {
  packaged_id: 8795,
  packaged_name: "Batfellow comic",
  year: 2016,
  speed_tier: 6,
  aftercore_tier: 5,
  is_ioty: !0,
  tradeable: !0,
  type: "item",
  img: "batfellowbook.gif"
}, {
  packaged_id: 5862,
  packaged_name: "Tome of Rad Libs",
  skill_ids: 7217,
  skill_names: "Summon Rad Libs",
  year: 2012,
  speed_tier: 5,
  aftercore_tier: 5,
  is_con: !0,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "tome",
  img: "radlibtome.gif"
}, {
  packaged_id: 9296,
  packaged_name: "space planula",
  familiar_ids: 209,
  familiar_names: "Space Jellyfish",
  year: 2017,
  month: 1,
  speed_tier: 1,
  aftercore_tier: 2,
  tradeable: !1,
  type: "familiar",
  img: "planula.gif"
}, {
  packaged_id: 9316,
  packaged_name: "heart-shaped crate",
  year: 2017,
  month: 2,
  speed_tier: 2,
  aftercore_tier: 5,
  tradeable: !1,
  type: "content",
  img: "heartcrate.gif"
}, {
  packaged_id: 9401,
  packaged_name: "unpowered Robortender",
  familiar_ids: 211,
  familiar_names: "Robortender",
  year: 2017,
  month: 3,
  speed_tier: 4,
  aftercore_tier: -1,
  tradeable: !1,
  type: "familiar",
  img: "robotenderlarva.gif"
}, {
  packaged_id: 9404,
  packaged_name: "Spacegate access badge",
  year: 2017,
  month: 4,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "content",
  img: "sgbadge.gif"
}, {
  packaged_id: 9478,
  packaged_name: "New-You Club Membership Form",
  year: 2017,
  month: 5,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "eudora",
  img: "newyouform.gif"
}, {
  packaged_id: 9492,
  packaged_name: "suspicious package",
  opened_ids: 9493,
  opened_names: "Kremlin's Greatest Briefcase",
  year: 2017,
  month: 6,
  speed_tier: 2,
  aftercore_tier: 4,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "kgbpackage.gif"
}, {
  packaged_id: 9507,
  packaged_name: "LI-11 Motor Pool voucher",
  opened_ids: 9508,
  opened_names: "Asdon Martin keyfob (on ring)",
  year: 2017,
  month: 7,
  speed_tier: 1,
  aftercore_tier: 1,
  tradeable: !1,
  type: "campground",
  campground_slot: "workshed",
  img: "l11voucher.gif"
}, {
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
  tradeable: !1,
  type: "skill",
  img: "meteorbook.gif"
}, {
  packaged_id: 9528,
  packaged_name: "corked genie bottle",
  opened_ids: 9529,
  opened_names: "genie bottle",
  year: 2017,
  month: 9,
  speed_tier: 1,
  aftercore_tier: 2,
  tradeable: !1,
  type: "item",
  img: "gbottle_cork.gif"
}, {
  packaged_id: 9541,
  packaged_name: "xo-skeleton-in-a-box",
  familiar_ids: 213,
  familiar_names: "XO Skeleton",
  year: 2017,
  month: 10,
  speed_tier: 2,
  aftercore_tier: 4,
  tradeable: !1,
  type: "familiar",
  img: "xobox.gif"
}, {
  packaged_id: 9572,
  packaged_name: "pantogram",
  opened_ids: 9573,
  opened_names: "portable pantogram",
  year: 2017,
  month: 11,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  img: "pantogramgram.gif"
}, {
  packaged_id: 9591,
  packaged_name: "locked mumming trunk",
  opened_ids: 9592,
  opened_names: "mumming trunk",
  year: 2017,
  month: 12,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  img: "mumtrunk_closed.gif"
}, {
  packaged_id: 9303,
  packaged_name: "hopeful candle",
  familiar_ids: 210,
  familiar_names: "Optimistic Candle",
  year: 2017,
  speed_tier: 5,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "hopefulcandle.gif"
}, {
  packaged_id: 9689,
  packaged_name: "January's Garbage Tote (unopened)",
  opened_ids: 9690,
  opened_names: "January's Garbage Tote",
  year: 2018,
  month: 1,
  speed_tier: 1,
  aftercore_tier: 3,
  tradeable: !1,
  type: "item",
  img: "tote_closed.gif"
}, {
  packaged_id: 9712,
  packaged_name: "Clan Carnival Game",
  year: 2018,
  month: 2,
  tradeable: !1,
  type: "vip",
  img: "crate.gif"
}, {
  packaged_id: 9759,
  packaged_name: "Pok\xE9fam Guide to Capturing All of Them",
  opened_ids: 9760,
  opened_names: "packet of tall grass seeds",
  year: 2018,
  month: 3,
  speed_tier: 5,
  aftercore_tier: 4,
  tradeable: !1,
  type: "campground",
  campground_slot: "garden",
  img: "pokebook.gif"
}, {
  packaged_id: 9835,
  packaged_name: "FantasyRealm membership packet",
  year: 2018,
  month: 4,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "content",
  img: "fr_packet.gif"
}, {
  packaged_id: 9661,
  packaged_name: "God Lobster Egg",
  familiar_ids: 266,
  familiar_names: "God Lobster",
  year: 2018,
  month: 5,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "godlob_egg.gif"
}, {
  packaged_id: 9920,
  packaged_name: "SongBoom\u2122 BoomBox Box",
  opened_ids: 9919,
  opened_names: "SongBoom\u2122 BoomBox",
  year: 2018,
  month: 6,
  speed_tier: 4,
  aftercore_tier: 1,
  tradeable: !1,
  type: "item",
  img: "songboomboxbox.gif"
}, {
  packaged_id: 9939,
  packaged_name: "kitten burglar",
  familiar_ids: 267,
  familiar_names: "Cat Burglar",
  year: 2018,
  month: 7,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "kittenburglar.gif"
}, {
  packaged_id: 9927,
  packaged_name: "Bastille Battalion control rig crate",
  opened_ids: 9928,
  opened_names: "Bastille Battalion control rig",
  year: 2018,
  month: 8,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !1,
  type: "item",
  img: "bbattcrate.gif"
}, {
  packaged_id: 9942,
  packaged_name: "Neverending Party invitation envelope",
  year: 2018,
  month: 9,
  speed_tier: 2,
  aftercore_tier: 3,
  tradeable: !1,
  type: "content",
  img: "npartyinv.gif"
}, {
  packaged_id: 9988,
  packaged_name: "latte lovers club card",
  opened_ids: 9987,
  opened_names: "latte lovers member's mug",
  year: 2018,
  month: 10,
  speed_tier: 2,
  aftercore_tier: 4,
  tradeable: !1,
  type: "item",
  equipment_slot: "offhand",
  img: "lattecard.gif"
}, {
  packaged_id: 9989,
  packaged_name: "voter registration form",
  year: 2018,
  month: 11,
  speed_tier: 2,
  aftercore_tier: 5,
  tradeable: !1,
  type: "content",
  img: "vrform.gif"
}, {
  packaged_id: 10049,
  packaged_name: "Boxing Day care package",
  year: 2018,
  month: 12,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "content",
  img: "boxingpackage.gif"
}, {
  packaged_id: 9679,
  packaged_name: "kerosene-soaked skip",
  familiar_ids: 214,
  familiar_names: "Garbage Fire",
  year: 2018,
  speed_tier: 5,
  aftercore_tier: 5,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "dumpsternofire.gif"
}, {
  packaged_id: 10057,
  packaged_name: "Kramco Industries packing carton",
  opened_ids: 10058,
  opened_names: "Kramco Sausage-o-Matic\u2122",
  year: 2019,
  month: 1,
  speed_tier: 0,
  aftercore_tier: 0,
  tradeable: !1,
  type: "item",
  equipment_slot: "offhand",
  img: "saugrindbox.gif"
}, {
  packaged_id: 10165,
  packaged_name: "mint condition Lil' Doctor\u2122 bag",
  opened_ids: 10166,
  opened_names: "Lil' Doctor\u2122 bag",
  year: 2019,
  month: 2,
  speed_tier: 2,
  aftercore_tier: 4,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "dbag_mint.gif"
}, {
  packaged_id: 10241,
  packaged_name: "vampyric cloake pattern",
  opened_ids: 10242,
  opened_names: "vampyric cloake",
  year: 2019,
  month: 3,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "back",
  img: "cloakepattern.gif"
}, {
  packaged_id: 10187,
  packaged_name: "PirateRealm membership packet",
  year: 2019,
  month: 4,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "content",
  img: "pr_packet.gif"
}, {
  packaged_id: 10250,
  packaged_name: "Fourth of May Cosplay Saber kit",
  opened_ids: 10251,
  opened_names: "Fourth of May Cosplay Saber",
  year: 2019,
  month: 5,
  speed_tier: 1,
  aftercore_tier: 4,
  tradeable: !1,
  type: "item",
  equipment_slot: "weapon",
  img: "may4swordkit.gif"
}, {
  packaged_id: 10256,
  packaged_name: "rune-strewn spoon cocoon",
  opened_ids: 10254,
  opened_names: "hewn moon-rune spoon",
  year: 2019,
  month: 6,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "spooncocoon.gif"
}, {
  packaged_id: 10257,
  packaged_name: "Beach Comb Box",
  opened_ids: 10258,
  opened_names: "Beach Comb",
  year: 2019,
  month: 7,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "beachcombbox.gif"
}, {
  packaged_id: 10292,
  packaged_name: "Distant Woods Getaway Brochure",
  year: 2019,
  month: 8,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "slotless",
  img: "campbrochure.gif"
}, {
  packaged_id: 10323,
  packaged_name: "packaged Pocket Professor",
  familiar_ids: 274,
  familiar_names: "Pocket Professor",
  year: 2019,
  month: 9,
  speed_tier: 1,
  aftercore_tier: 0,
  tradeable: !1,
  type: "familiar",
  img: "lilprofessoroff.gif"
}, {
  packaged_id: 10332,
  packaged_name: "Unopened Eight Days a Week Pill Keeper",
  opened_ids: 10333,
  opened_names: "Eight Days a Week Pill Keeper",
  year: 2019,
  month: 10,
  speed_tier: 2,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "pillminderpack.gif"
}, {
  packaged_id: 10334,
  packaged_name: "unopened diabolic pizza cube box",
  opened_ids: 10335,
  opened_names: "diabolic pizza cube",
  year: 2019,
  month: 11,
  speed_tier: 2,
  aftercore_tier: 5,
  tradeable: !1,
  type: "campground",
  campground_slot: "workshed",
  img: "crate.gif"
}, {
  packaged_id: 10345,
  packaged_name: "red-spotted snapper roe",
  familiar_ids: 275,
  familiar_names: "Red-Nosed Snapper",
  year: 2019,
  month: 12,
  speed_tier: 3,
  aftercore_tier: 2,
  tradeable: !1,
  type: "familiar",
  img: "redroe.gif"
}, {
  packaged_id: 10146,
  packaged_name: "elf sleeper agent",
  familiar_ids: 271,
  familiar_names: "Elf Operative",
  year: 2019,
  speed_tier: 6,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "elfoplarva.gif"
}, {
  packaged_id: 10433,
  packaged_name: "unopened Bird-a-Day calendar",
  opened_ids: 10434,
  opened_names: "Bird-a-Day calendar",
  year: 2020,
  month: 1,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  img: "birdcal_unopened.gif"
}, {
  packaged_id: 10437,
  packaged_name: "mint-in-box Powerful Glove",
  opened_ids: 10438,
  opened_names: "Powerful Glove",
  year: 2020,
  month: 2,
  speed_tier: 1,
  aftercore_tier: 0,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "pglove_inbox.gif"
}, {
  packaged_id: 10481,
  packaged_name: "Better Shrooms and Gardens catalog",
  opened_ids: 10482,
  opened_names: "packet of mushroom spores",
  year: 2020,
  month: 3,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "campground",
  campground_slot: "garden",
  img: "mushcatalog.gif"
}, {
  packaged_id: 10502,
  packaged_name: "sinistral homunculus",
  familiar_ids: 278,
  familiar_names: "Left-Hand Man",
  year: 2020,
  month: 4,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "lhmlarva.gif"
}, {
  packaged_id: 10532,
  packaged_name: "Guzzlr application",
  opened_ids: 10533,
  opened_names: "Guzzlr tablet",
  year: 2020,
  month: 5,
  speed_tier: 6,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "guzzlrapp.gif"
}, {
  packaged_id: 10573,
  packaged_name: "bag of Iunion stones",
  opened_ids: 10574,
  opened_names: "Iunion Crown",
  year: 2020,
  month: 6,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !1,
  type: "item",
  equipment_slot: "hat",
  img: "iunionbag.gif"
}, {
  packaged_id: 10579,
  packaged_name: "baby camelCalf",
  familiar_ids: 279,
  familiar_names: "Melodramedary",
  year: 2020,
  month: 7,
  speed_tier: 0,
  aftercore_tier: 2,
  tradeable: !1,
  type: "familiar",
  img: "camelcalf.gif"
}, {
  packaged_id: 10581,
  packaged_name: "packaged SpinMaster\u2122 lathe",
  opened_ids: 10582,
  opened_names: "SpinMaster\u2122 lathe",
  year: 2020,
  month: 8,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  img: "lathebox.gif"
}, {
  packaged_id: 10635,
  packaged_name: "bagged Cargo Cultist Shorts",
  opened_ids: 10636,
  opened_names: "Cargo Cultist Shorts",
  year: 2020,
  month: 9,
  speed_tier: 3,
  aftercore_tier: 6,
  tradeable: !1,
  type: "item",
  equipment_slot: "pants",
  img: "cultistshortsbag.gif"
}, {
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
  tradeable: !1,
  type: "skill",
  img: "cccbook.gif"
}, {
  packaged_id: 10646,
  packaged_name: "packaged knock-off retro superhero cape",
  opened_ids: 10647,
  opened_names: "unwrapped knock-off retro superhero cape",
  year: 2020,
  month: 11,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "back",
  img: "retrocape0.gif"
}, {
  packaged_id: 10648,
  packaged_name: "box o' ghosts",
  opened_ids: [10649, 10650, 10651],
  opened_names: ["gregarious ghostling", "grinning ghostling", "greedy ghostling"],
  familiar_ids: [280, 281, 282],
  familiar_names: ["Ghost of Crimbo Carols", "Ghost of Crimbo Cheer", "Ghost of Crimbo Commerce"],
  year: 2020,
  month: 12,
  speed_tier: 5,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "cghostbox.gif"
}, {
  packaged_id: 10431,
  packaged_name: "Retrospecs try-at-home kit",
  opened_ids: 10432,
  opened_names: "Retrospecs",
  year: 2020,
  speed_tier: 5,
  aftercore_tier: 5,
  is_ioty: !0,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "retrospecsbox.gif"
}, {
  packaged_id: 10729,
  packaged_name: "packaged miniature crystal ball",
  opened_ids: 10730,
  opened_names: "miniature crystal ball",
  year: 2021,
  month: 1,
  speed_tier: 1,
  aftercore_tier: 2,
  tradeable: !1,
  type: "item",
  equipment_slot: "familiar",
  img: "famballbox.gif"
}, {
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
  tradeable: !1,
  type: "skill",
  img: "emochip_clean.gif"
}, {
  packaged_id: 10737,
  packaged_name: "power seed",
  opened_ids: 10738,
  opened_names: "potted power plant",
  year: 2021,
  month: 3,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  img: "powerseed.gif"
}, {
  packaged_id: 10748,
  packaged_name: "packaged backup camera",
  opened_ids: 10749,
  opened_names: "backup camera",
  year: 2021,
  month: 4,
  speed_tier: 0,
  aftercore_tier: 0,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "backcamera_box.gif"
}, {
  packaged_id: 10750,
  packaged_name: "shortest-order cook",
  familiar_ids: 283,
  familiar_names: "Shorter-Order Cook",
  year: 2021,
  month: 5,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "shortcheflarva.gif"
}, {
  packaged_id: 10760,
  packaged_name: "packaged familiar scrapbook",
  opened_ids: 10759,
  opened_names: "familiar scrapbook",
  year: 2021,
  month: 6,
  speed_tier: 3,
  aftercore_tier: 6,
  tradeable: !1,
  type: "item",
  equipment_slot: "offhand",
  img: "fambook_blank.gif"
}, {
  packaged_id: 10761,
  packaged_name: "clan underground fireworks shop",
  year: 2021,
  month: 7,
  tradeable: !1,
  type: "vip",
  img: "crate.gif"
}, {
  packaged_id: 10773,
  packaged_name: "Our Daily Candles\u2122 order form",
  year: 2021,
  month: 8,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !1,
  type: "eudora",
  img: "canclecform.gif"
}, {
  packaged_id: 10796,
  packaged_name: "packaged industrial fire extinguisher",
  opened_ids: 10797,
  opened_names: "industrial fire extinguisher",
  year: 2021,
  month: 9,
  speed_tier: 1,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "weapon",
  img: "exting2box.gif"
}, {
  packaged_id: 10801,
  packaged_name: "bottled Vampire Vintner",
  familiar_ids: 284,
  familiar_names: "Vampire Vintner",
  year: 2021,
  month: 10,
  speed_tier: 3,
  aftercore_tier: 6,
  tradeable: !1,
  type: "familiar",
  img: "vampvintbottle.gif"
}, {
  packaged_id: 10803,
  packaged_name: "packaged Daylight Shavings Helmet",
  opened_ids: 10804,
  opened_names: "Daylight Shavings Helmet",
  year: 2021,
  month: 11,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "hat",
  img: "dshelmet_box.gif"
}, {
  packaged_id: 10814,
  packaged_name: "packaged cold medicine cabinet",
  opened_ids: 10815,
  opened_names: "cold medicine cabinet",
  year: 2021,
  month: 12,
  speed_tier: 0,
  aftercore_tier: 1,
  tradeable: !1,
  type: "campground",
  campground_slot: "workshed",
  img: "cmcabinet_box.gif"
}, {
  packaged_id: 10731,
  packaged_name: "fresh can of paint",
  opened_ids: 10732,
  opened_names: "fresh coat of paint",
  year: 2021,
  speed_tier: 6,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "item",
  img: "freshcoat.gif"
}, {
  packaged_id: 10890,
  packaged_name: "undrilled cosmic bowling ball",
  opened_ids: 10891,
  opened_names: "cosmic bowling ball",
  year: 2022,
  month: 1,
  speed_tier: 1,
  aftercore_tier: 2,
  tradeable: !1,
  type: "item",
  equipment_slot: "combat",
  img: "cosmicball.gif"
}, {
  packaged_id: 10892,
  packaged_name: "combat lover's locket lockbox",
  opened_ids: 10893,
  opened_names: "combat lover's locket",
  year: 2022,
  month: 2,
  speed_tier: 2,
  aftercore_tier: 2,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "lovelocketbox.gif"
}, {
  packaged_id: 10895,
  packaged_name: "grey gosling",
  familiar_ids: 287,
  familiar_names: "Grey Goose",
  year: 2022,
  month: 3,
  speed_tier: 1,
  aftercore_tier: -1,
  tradeable: !1,
  type: "familiar",
  img: "greygosling.gif"
}, {
  packaged_id: 10898,
  packaged_name: "undamaged Unbreakable Umbrella",
  opened_ids: 10899,
  opened_names: "unbreakable umbrella",
  year: 2022,
  month: 4,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "offhand",
  img: "unbrella1.gif"
}, {
  packaged_id: 10900,
  packaged_name: "MayDay\u2122 contract",
  year: 2022,
  month: 5,
  speed_tier: 4,
  aftercore_tier: 6,
  tradeable: !1,
  type: "slotless",
  img: "maydaycontract.gif"
}, {
  packaged_id: 10919,
  packaged_name: "packaged June cleaver",
  opened_ids: 10920,
  opened_names: "June cleaver",
  year: 2022,
  month: 6,
  speed_tier: 3,
  aftercore_tier: 3,
  tradeable: !1,
  type: "item",
  equipment_slot: "weapon",
  img: "junecleaverbox.gif"
}, {
  packaged_id: 10928,
  packaged_name: "designer sweatpants (new old stock)",
  opened_ids: 10929,
  opened_names: "designer sweatpants",
  year: 2022,
  month: 7,
  speed_tier: 4,
  aftercore_tier: 2,
  tradeable: !1,
  type: "item",
  equipment_slot: "pants",
  img: "sweats_box.gif"
}, {
  packaged_id: 10931,
  packaged_name: "unopened tiny stillsuit",
  opened_ids: 10932,
  opened_names: "tiny stillsuit",
  year: 2022,
  month: 8,
  speed_tier: 3,
  aftercore_tier: 4,
  tradeable: !1,
  type: "item",
  equipment_slot: "familiar",
  img: "stillsuit_box.gif"
}, {
  packaged_id: 10951,
  packaged_name: "packaged Jurassic Parka",
  opened_ids: 10952,
  opened_names: "Jurassic Parka",
  year: 2022,
  month: 9,
  speed_tier: 0,
  aftercore_tier: 2,
  tradeable: !1,
  type: "item",
  equipment_slot: "shirt",
  img: "jparka_box.gif"
}, {
  packaged_id: 10953,
  packaged_name: "boxed autumn-aton",
  opened_ids: 10954,
  opened_names: "autumn-aton",
  year: 2022,
  month: 10,
  speed_tier: 1,
  aftercore_tier: 4,
  tradeable: !1,
  type: "item",
  img: "crate.gif"
}, {
  packaged_id: 10966,
  packaged_name: "mummified entombed cookbookbat",
  familiar_ids: 288,
  familiar_names: "Cookbookbat",
  year: 2022,
  month: 11,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "bbat_larva.gif"
}, {
  packaged_id: 11044,
  packaged_name: "packaged model train set",
  opened_ids: 11045,
  opened_names: "model train set",
  year: 2022,
  month: 12,
  speed_tier: 2,
  aftercore_tier: 1,
  tradeable: !1,
  type: "campground",
  campground_slot: "workshed",
  img: "modeltrain_box.gif"
}, {
  packaged_id: 10884,
  packaged_name: "mint condition magnifying glass",
  opened_ids: 10885,
  opened_names: "cursed magnifying glass",
  year: 2022,
  speed_tier: 3,
  aftercore_tier: 5,
  is_ioty: !0,
  tradeable: !1,
  type: "item",
  equipment_slot: "offhand",
  img: "cursedmagbox.gif"
}, {
  packaged_id: 11099,
  packaged_name: "Rock Garden Guide",
  opened_ids: 11100,
  opened_names: "packet of rock seeds",
  year: 2023,
  month: 1,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "campground",
  campground_slot: "garden",
  img: "rockgardenbook.gif"
}, {
  packaged_id: 11115,
  packaged_name: "S.I.T. Course Voucher",
  opened_ids: 11116,
  opened_names: "S.I.T. Course Completion Certificate",
  year: 2023,
  month: 2,
  speed_tier: 4,
  aftercore_tier: 3,
  tradeable: !1,
  type: "item",
  img: "sitvoucher.gif"
}, {
  packaged_id: 11168,
  packaged_name: "closed-circuit phone system",
  opened_ids: 11169,
  opened_names: "closed-circuit pay phone",
  year: 2023,
  month: 3,
  speed_tier: 1,
  aftercore_tier: 1,
  tradeable: !1,
  type: "item",
  img: "rufusbox.gif"
}, {
  packaged_id: 11187,
  packaged_name: "cursed monkey glove",
  opened_ids: 11186,
  opened_names: "cursed monkey's paw",
  year: 2023,
  month: 4,
  speed_tier: 1,
  aftercore_tier: 0,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "monkeyglove.gif"
}, {
  packaged_id: 11222,
  packaged_name: "shrink-wrapped Cincho de Mayo",
  opened_ids: 11223,
  opened_names: "Cincho de Mayo",
  year: 2023,
  month: 5,
  speed_tier: 1,
  aftercore_tier: 1,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "cinchobox.gif"
}, {
  packaged_id: 11256,
  packaged_name: "shrink-wrapped 2002 Mr. Store Catalog",
  opened_ids: 11257,
  opened_names: "2002 Mr. Store Catalog",
  year: 2023,
  month: 6,
  speed_tier: 1,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  img: "2002catalog.gif"
}, {
  packaged_id: 11300,
  packaged_name: "sleeping patriotic eagle",
  familiar_ids: 293,
  familiar_names: "Patriotic Eagle",
  year: 2023,
  month: 7,
  speed_tier: 1,
  aftercore_tier: 2,
  tradeable: !1,
  type: "familiar",
  img: "pateagle_sleep.gif"
}, {
  packaged_id: 11305,
  packaged_name: "boxed august scepter",
  opened_ids: 11306,
  opened_names: "august scepter",
  year: 2023,
  month: 8,
  speed_tier: 2,
  aftercore_tier: 4,
  tradeable: !1,
  type: "item",
  equipment_slot: "offhand",
  img: "ascepterbox.gif"
}, {
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
  tradeable: !1,
  type: "skill",
  img: "factbook.gif"
}, {
  packaged_id: 11335,
  packaged_name: "Dark Jill-of-All-Trades",
  familiar_ids: 294,
  familiar_names: "Jill-of-All-Trades",
  year: 2023,
  month: 10,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "darkjill2.gif"
}, {
  packaged_id: 11340,
  packaged_name: "A Guide to Burning Leaves",
  year: 2023,
  month: 11,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "campground",
  img: "al_book.gif"
}, {
  packaged_id: 11364,
  packaged_name: "wrapped candy cane sword cane",
  opened_ids: 11363,
  opened_names: "candy cane sword cane",
  year: 2023,
  month: 12,
  speed_tier: 1,
  aftercore_tier: 6,
  tradeable: !1,
  type: "item",
  equipment_slot: "weapon",
  img: "ccsword_box.gif"
}, {
  packaged_id: 11394,
  packaged_name: "crated wardrobe-o-matic",
  opened_ids: 11390,
  opened_names: "wardrobe-o-matic",
  year: 2023,
  speed_tier: 5,
  aftercore_tier: 5,
  is_con: !0,
  tradeable: !1,
  type: "item",
  img: "crate.gif"
}, {
  packaged_id: 11089,
  packaged_name: "unoccupied sheep suit",
  familiar_ids: 290,
  familiar_names: "Hobo in Sheep's Clothing",
  year: 2023,
  speed_tier: 6,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "familiar",
  img: "hobosheepl.gif"
}, {
  packaged_id: 11540,
  packaged_name: "baby chest mimic",
  familiar_ids: 299,
  familiar_names: "Chest Mimic",
  year: 2024,
  month: 1,
  speed_tier: 1,
  aftercore_tier: 1,
  tradeable: !1,
  type: "familiar",
  img: "mimicbaby.gif"
}, {
  packaged_id: 11545,
  packaged_name: "in-the-box spring shoes",
  opened_ids: 11546,
  opened_names: "spring shoes",
  year: 2024,
  month: 2,
  speed_tier: 1,
  aftercore_tier: 3,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "springshoes_box.gif"
}, {
  packaged_id: 11560,
  packaged_name: "packaged Everfull Dart Holster",
  opened_ids: 11561,
  opened_names: "Everfull Dart Holster",
  year: 2024,
  month: 3,
  speed_tier: 1,
  aftercore_tier: 3,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "dartholster_box.gif"
}, {
  packaged_id: 11564,
  packaged_name: "boxed Apriling band helmet",
  opened_ids: 11565,
  opened_names: "Apriling band helmet",
  year: 2024,
  month: 4,
  speed_tier: 1,
  aftercore_tier: 2,
  tradeable: !1,
  type: "item",
  equipment_slot: "hat",
  img: "aprilinghat_box.gif"
}, {
  packaged_id: 11571,
  packaged_name: "boxed Mayam Calendar",
  opened_ids: 11572,
  opened_names: "Mayam Calendar",
  year: 2024,
  month: 5,
  speed_tier: 2,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  img: "yamcalbox.gif"
}, {
  packaged_id: 11591,
  packaged_name: "mini kiwi egg",
  familiar_ids: 300,
  familiar_names: "Mini Kiwi",
  year: 2024,
  month: 6,
  speed_tier: 5,
  aftercore_tier: 2,
  tradeable: !1,
  type: "familiar",
  img: "kiwi_egg.gif"
}, {
  packaged_id: 11608,
  packaged_name: "packaged Roman Candelabra",
  opened_ids: 11609,
  opened_names: "Roman Candelabra",
  year: 2024,
  month: 7,
  speed_tier: 1,
  aftercore_tier: 1,
  tradeable: !1,
  type: "item",
  equipment_slot: "offhand",
  img: "romcandelbox.gif"
}, {
  packaged_id: 11629,
  packaged_name: "untorn tearaway pants package",
  opened_ids: 11630,
  opened_names: "tearaway pants",
  year: 2024,
  month: 8,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "pants",
  img: "oliver_package.gif"
}, {
  packaged_id: 11641,
  packaged_name: "boxed Sept-Ember Censer",
  opened_ids: 11642,
  opened_names: "Sept-Ember Censer",
  year: 2024,
  month: 9,
  speed_tier: 1,
  aftercore_tier: 6,
  tradeable: !1,
  type: "item",
  img: "emberbox.gif"
}, {
  packaged_id: 11657,
  packaged_name: "boxed bat wings",
  opened_ids: 11658,
  opened_names: "bat wings",
  year: 2024,
  month: 10,
  speed_tier: 0,
  aftercore_tier: 4,
  tradeable: !1,
  type: "item",
  equipment_slot: "back",
  img: "batwings_box.gif"
}, {
  packaged_id: 11672,
  packaged_name: "peace turkey outline",
  familiar_ids: 306,
  familiar_names: "Peace Turkey",
  year: 2024,
  month: 11,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "familiar",
  img: "pto.gif"
}, {
  packaged_id: 11686,
  packaged_name: "Sealed TakerSpace letter of Marque",
  opened_ids: 11687,
  opened_names: "TakerSpace letter of Marque",
  year: 2024,
  month: 12,
  speed_tier: 2,
  aftercore_tier: 4,
  tradeable: !1,
  type: "campground",
  campground_slot: "workshed",
  img: "ts_letter2.gif"
}, {
  packaged_id: 11471,
  packaged_name: "Black and White Apron Enrollment Form",
  year: 2024,
  speed_tier: 4,
  aftercore_tier: 6,
  is_ioty: !0,
  tradeable: !1,
  type: "eudora",
  img: "apronform.gif"
}, {
  packaged_id: 11626,
  packaged_name: "unevolved organism",
  familiar_ids: 302,
  familiar_names: "Evolving Organism",
  year: 2024,
  speed_tier: 6,
  aftercore_tier: 6,
  is_con: !0,
  tradeable: !1,
  type: "familiar",
  img: "spore.gif"
}, {
  packaged_id: 11782,
  packaged_name: "McHugeLarge deluxe ski set",
  opened_ids: 11783,
  opened_names: "McHugeLarge duffel bag",
  year: 2025,
  month: 1,
  speed_tier: 1,
  aftercore_tier: 3,
  tradeable: !1,
  type: "item",
  equipment_slot: "back",
  img: "skibag1.gif"
}, {
  packaged_id: 11836,
  packaged_name: "new-in-box toy Cupid bow",
  opened_ids: 11837,
  opened_names: "toy Cupid bow",
  year: 2025,
  month: 2,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "familiar",
  img: "plungebow_box.gif"
}, {
  packaged_id: 11860,
  packaged_name: "assemble-it-yourself Leprecondo",
  opened_ids: 11861,
  opened_names: "Leprecondo",
  year: 2025,
  month: 3,
  speed_tier: 2,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  img: "leprecondobox.gif"
}, {
  packaged_id: 11883,
  packaged_name: "Packaged April Shower Thoughts Calendar",
  opened_ids: 11884,
  opened_names: "April Shower Thoughts shield",
  year: 2025,
  month: 4,
  speed_tier: 3,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "offhand",
  img: "aprilcal_box.gif"
}, {
  packaged_id: 11904,
  packaged_name: "Unpeeled Peridot of Peril",
  opened_ids: 11905,
  opened_names: "Peridot of Peril",
  year: 2025,
  month: 5,
  speed_tier: 1,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "peridot_box.gif"
}, {
  packaged_id: 11918,
  packaged_name: "packaged prismatic beret",
  opened_ids: 11919,
  opened_names: "prismatic beret",
  year: 2025,
  month: 6,
  speed_tier: 2,
  aftercore_tier: 4,
  tradeable: !1,
  type: "item",
  equipment_slot: "hat",
  img: "prisberet_box.gif"
}, {
  packaged_id: 11922,
  packaged_name: "yeti in a travel cooler",
  familiar_ids: 324,
  familiar_names: "Cooler Yeti",
  year: 2025,
  month: 7,
  speed_tier: 4,
  aftercore_tier: 2,
  tradeable: !1,
  type: "familiar",
  img: "yeticooler.gif"
}, {
  packaged_id: 11941,
  packaged_name: "M\xF6bius ring box",
  opened_ids: 11942,
  opened_names: "M\xF6bius ring",
  year: 2025,
  month: 8,
  speed_tier: 3,
  aftercore_tier: 3,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "moebiusring_box.gif"
}, {
  packaged_id: 11807,
  packaged_name: "CyberRealm keycode",
  opened_ids: 11808,
  opened_names: "server room key",
  year: 2025,
  speed_tier: 4,
  aftercore_tier: 5,
  is_ioty: !0,
  tradeable: !1,
  type: "item",
  img: "cr_keycode.gif"
}, {
  packaged_id: 11932,
  packaged_name: "Allied Radio Backpack Pack",
  opened_ids: 11933,
  opened_names: "Allied Radio Backpack",
  year: 2025,
  speed_tier: 2,
  aftercore_tier: 4,
  is_con: !0,
  tradeable: !1,
  type: "item",
  equipment_slot: "back",
  img: "radiopackpack.gif"
}, {
  packaged_id: 3946,
  packaged_name: "Clan VIP Lounge invitation",
  opened_ids: 3947,
  opened_names: "Clan VIP Lounge key",
  year: 2009,
  speed_tier: 2,
  aftercore_tier: 3,
  tradeable: !1,
  type: "item",
  img: "envelope.gif"
}, {
  packaged_id: 9527,
  packaged_name: "Horsery contract",
  year: 2018,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "slotless",
  img: "horserycontract.gif"
}, {
  packaged_id: 11001,
  packaged_name: "deed to Oliver's Place",
  year: 2024,
  speed_tier: 5,
  aftercore_tier: 5,
  tradeable: !1,
  type: "slotless",
  img: "oliver_deed.gif"
}, {
  packaged_id: 3835,
  packaged_name: "tiny costume wardrobe",
  year: 2013,
  speed_tier: 6,
  aftercore_tier: 6,
  tradeable: !0,
  type: "item",
  equipment_slot: "familiar",
  img: "wardrobe.gif"
}, {
  packaged_id: 5284,
  packaged_name: "Gygaxian Libram",
  skill_ids: 7223,
  skill_names: "Summon Dice",
  year: 2011,
  speed_tier: 5,
  aftercore_tier: 5,
  is_con: !0,
  tradeable: !1,
  type: "skill",
  bookshelf_slot: "libram",
  img: "gygaxlibram.gif"
}, {
  packaged_id: 4709,
  packaged_name: "hippo tutu",
  familiar_ids: 138,
  familiar_names: "Hippo Ballerina",
  year: 2010,
  speed_tier: 6,
  aftercore_tier: 6,
  is_con: !0,
  tradeable: !1,
  type: "familiar",
  img: "hippotutu.gif"
}, {
  packaged_id: 11974,
  packaged_name: "packaged Monodent of the Sea",
  opened_ids: 11975,
  opened_names: "Monodent of the Sea",
  year: 2025,
  month: 9,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  type: "item",
  equipment_slot: "weapon",
  img: "dentpackage.gif"
}, {
  packaged_id: 11986,
  packaged_name: "lab-grown blood cubic zirconia",
  opened_ids: 11987,
  opened_names: "blood cubic zirconia",
  year: 2025,
  month: 10,
  speed_tier: 0,
  aftercore_tier: 1,
  tradeable: !1,
  type: "item",
  equipment_slot: "accessory",
  img: "cbz_box.gif"
}, {
  packaged_id: 12047,
  packaged_name: "shrunken head in a duffel bag",
  opened_ids: 12048,
  opened_names: "shrunken head",
  year: 2025,
  month: 11,
  speed_tier: 3,
  aftercore_tier: 4,
  tradeable: !1,
  type: "item",
  equipment_slot: "offhand",
  img: "headbag.gif"
}, {
  packaged_id: 12049,
  packaged_name: "stocking full of bones",
  familiar_ids: 326,
  familiar_names: "Skeleton of Crimbo Past",
  year: 2025,
  month: 12,
  speed_tier: 5,
  aftercore_tier: 1,
  tradeable: !1,
  type: "familiar",
  img: "skeletonocp.gif"
}, {
  packaged_id: 12133,
  packaged_name: "seal-clubbing club loot box",
  opened_ids: 12134,
  opened_names: "legendary seal-clubbing club",
  year: 2026,
  month: 1,
  speed_tier: 0,
  aftercore_tier: 1,
  tradeable: !1,
  type: "item",
  equipment_slot: "weapon",
  img: "leg_club_box.gif"
}, {
  packaged_id: 12066,
  packaged_name: "discreetly-wrapped Eternity Codpiece",
  opened_ids: 12067,
  opened_names: "The Eternity Codpiece",
  year: 2026,
  speed_tier: 4,
  aftercore_tier: 5,
  tradeable: !1,
  is_ioty: !0,
  type: "accessory",
  img: "eternitycodbox.gif"
}];

// ../../node_modules/zod/v4/classic/external.js
var external_exports = {};
__export(external_exports, {
  $brand: function() {
    return $brand;
  },
  $input: function() {
    return $input;
  },
  $output: function() {
    return $output;
  },
  NEVER: function() {
    return NEVER;
  },
  TimePrecision: function() {
    return TimePrecision;
  },
  ZodAny: function() {
    return ZodAny;
  },
  ZodArray: function() {
    return ZodArray;
  },
  ZodBase64: function() {
    return ZodBase64;
  },
  ZodBase64URL: function() {
    return ZodBase64URL;
  },
  ZodBigInt: function() {
    return ZodBigInt;
  },
  ZodBigIntFormat: function() {
    return ZodBigIntFormat;
  },
  ZodBoolean: function() {
    return ZodBoolean;
  },
  ZodCIDRv4: function() {
    return ZodCIDRv4;
  },
  ZodCIDRv6: function() {
    return ZodCIDRv6;
  },
  ZodCUID: function() {
    return ZodCUID;
  },
  ZodCUID2: function() {
    return ZodCUID2;
  },
  ZodCatch: function() {
    return ZodCatch;
  },
  ZodCodec: function() {
    return ZodCodec;
  },
  ZodCustom: function() {
    return ZodCustom;
  },
  ZodCustomStringFormat: function() {
    return ZodCustomStringFormat;
  },
  ZodDate: function() {
    return ZodDate;
  },
  ZodDefault: function() {
    return ZodDefault;
  },
  ZodDiscriminatedUnion: function() {
    return ZodDiscriminatedUnion;
  },
  ZodE164: function() {
    return ZodE164;
  },
  ZodEmail: function() {
    return ZodEmail;
  },
  ZodEmoji: function() {
    return ZodEmoji;
  },
  ZodEnum: function() {
    return ZodEnum;
  },
  ZodError: function() {
    return ZodError;
  },
  ZodFile: function() {
    return ZodFile;
  },
  ZodFirstPartyTypeKind: function() {
    return ZodFirstPartyTypeKind;
  },
  ZodFunction: function() {
    return ZodFunction;
  },
  ZodGUID: function() {
    return ZodGUID;
  },
  ZodIPv4: function() {
    return ZodIPv4;
  },
  ZodIPv6: function() {
    return ZodIPv6;
  },
  ZodISODate: function() {
    return ZodISODate;
  },
  ZodISODateTime: function() {
    return ZodISODateTime;
  },
  ZodISODuration: function() {
    return ZodISODuration;
  },
  ZodISOTime: function() {
    return ZodISOTime;
  },
  ZodIntersection: function() {
    return ZodIntersection;
  },
  ZodIssueCode: function() {
    return ZodIssueCode;
  },
  ZodJWT: function() {
    return ZodJWT;
  },
  ZodKSUID: function() {
    return ZodKSUID;
  },
  ZodLazy: function() {
    return ZodLazy;
  },
  ZodLiteral: function() {
    return ZodLiteral;
  },
  ZodMAC: function() {
    return ZodMAC;
  },
  ZodMap: function() {
    return ZodMap;
  },
  ZodNaN: function() {
    return ZodNaN;
  },
  ZodNanoID: function() {
    return ZodNanoID;
  },
  ZodNever: function() {
    return ZodNever;
  },
  ZodNonOptional: function() {
    return ZodNonOptional;
  },
  ZodNull: function() {
    return ZodNull;
  },
  ZodNullable: function() {
    return ZodNullable;
  },
  ZodNumber: function() {
    return ZodNumber;
  },
  ZodNumberFormat: function() {
    return ZodNumberFormat;
  },
  ZodObject: function() {
    return ZodObject;
  },
  ZodOptional: function() {
    return ZodOptional;
  },
  ZodPipe: function() {
    return ZodPipe;
  },
  ZodPrefault: function() {
    return ZodPrefault;
  },
  ZodPromise: function() {
    return ZodPromise;
  },
  ZodReadonly: function() {
    return ZodReadonly;
  },
  ZodRealError: function() {
    return ZodRealError;
  },
  ZodRecord: function() {
    return ZodRecord;
  },
  ZodSet: function() {
    return ZodSet;
  },
  ZodString: function() {
    return ZodString;
  },
  ZodStringFormat: function() {
    return ZodStringFormat;
  },
  ZodSuccess: function() {
    return ZodSuccess;
  },
  ZodSymbol: function() {
    return ZodSymbol;
  },
  ZodTemplateLiteral: function() {
    return ZodTemplateLiteral;
  },
  ZodTransform: function() {
    return ZodTransform;
  },
  ZodTuple: function() {
    return ZodTuple;
  },
  ZodType: function() {
    return ZodType;
  },
  ZodULID: function() {
    return ZodULID;
  },
  ZodURL: function() {
    return ZodURL;
  },
  ZodUUID: function() {
    return ZodUUID;
  },
  ZodUndefined: function() {
    return ZodUndefined;
  },
  ZodUnion: function() {
    return ZodUnion;
  },
  ZodUnknown: function() {
    return ZodUnknown;
  },
  ZodVoid: function() {
    return ZodVoid;
  },
  ZodXID: function() {
    return ZodXID;
  },
  _ZodString: function() {
    return _ZodString;
  },
  _default: function() {
    return _default2;
  },
  _function: function() {
    return _function;
  },
  any: function() {
    return any;
  },
  array: function() {
    return array;
  },
  base64: function() {
    return base642;
  },
  base64url: function() {
    return base64url2;
  },
  bigint: function() {
    return bigint2;
  },
  boolean: function() {
    return boolean2;
  },
  catch: function() {
    return _catch2;
  },
  check: function() {
    return check;
  },
  cidrv4: function() {
    return cidrv42;
  },
  cidrv6: function() {
    return cidrv62;
  },
  clone: function() {
    return clone;
  },
  codec: function() {
    return codec;
  },
  coerce: function() {
    return coerce_exports;
  },
  config: function() {
    return config;
  },
  core: function() {
    return core_exports2;
  },
  cuid: function() {
    return cuid3;
  },
  cuid2: function() {
    return cuid22;
  },
  custom: function() {
    return custom;
  },
  date: function() {
    return date3;
  },
  decode: function() {
    return decode2;
  },
  decodeAsync: function() {
    return decodeAsync2;
  },
  describe: function() {
    return describe2;
  },
  discriminatedUnion: function() {
    return discriminatedUnion;
  },
  e164: function() {
    return e1642;
  },
  email: function() {
    return email2;
  },
  emoji: function() {
    return emoji2;
  },
  encode: function() {
    return encode2;
  },
  encodeAsync: function() {
    return encodeAsync2;
  },
  endsWith: function() {
    return _endsWith;
  },
  enum: function() {
    return _enum2;
  },
  file: function() {
    return file;
  },
  flattenError: function() {
    return flattenError;
  },
  float32: function() {
    return float32;
  },
  float64: function() {
    return float64;
  },
  formatError: function() {
    return formatError;
  },
  function: function() {
    return _function;
  },
  getErrorMap: function() {
    return getErrorMap;
  },
  globalRegistry: function() {
    return globalRegistry;
  },
  gt: function() {
    return _gt;
  },
  gte: function() {
    return _gte;
  },
  guid: function() {
    return guid2;
  },
  hash: function() {
    return hash;
  },
  hex: function() {
    return hex2;
  },
  hostname: function() {
    return hostname2;
  },
  httpUrl: function() {
    return httpUrl;
  },
  includes: function() {
    return _includes;
  },
  instanceof: function() {
    return _instanceof;
  },
  int: function() {
    return int;
  },
  int32: function() {
    return int32;
  },
  int64: function() {
    return int64;
  },
  intersection: function() {
    return intersection;
  },
  ipv4: function() {
    return ipv42;
  },
  ipv6: function() {
    return ipv62;
  },
  iso: function() {
    return iso_exports;
  },
  json: function() {
    return json;
  },
  jwt: function() {
    return jwt;
  },
  keyof: function() {
    return keyof;
  },
  ksuid: function() {
    return ksuid2;
  },
  lazy: function() {
    return lazy;
  },
  length: function() {
    return _length;
  },
  literal: function() {
    return literal;
  },
  locales: function() {
    return locales_exports;
  },
  looseObject: function() {
    return looseObject;
  },
  lowercase: function() {
    return _lowercase;
  },
  lt: function() {
    return _lt;
  },
  lte: function() {
    return _lte;
  },
  mac: function() {
    return mac2;
  },
  map: function() {
    return map;
  },
  maxLength: function() {
    return _maxLength;
  },
  maxSize: function() {
    return _maxSize;
  },
  meta: function() {
    return meta2;
  },
  mime: function() {
    return _mime;
  },
  minLength: function() {
    return _minLength;
  },
  minSize: function() {
    return _minSize;
  },
  multipleOf: function() {
    return _multipleOf;
  },
  nan: function() {
    return nan;
  },
  nanoid: function() {
    return nanoid2;
  },
  nativeEnum: function() {
    return nativeEnum;
  },
  negative: function() {
    return _negative;
  },
  never: function() {
    return never;
  },
  nonnegative: function() {
    return _nonnegative;
  },
  nonoptional: function() {
    return nonoptional;
  },
  nonpositive: function() {
    return _nonpositive;
  },
  normalize: function() {
    return _normalize;
  },
  null: function() {
    return _null3;
  },
  nullable: function() {
    return nullable;
  },
  nullish: function() {
    return nullish2;
  },
  number: function() {
    return number2;
  },
  object: function() {
    return object;
  },
  optional: function() {
    return optional;
  },
  overwrite: function() {
    return _overwrite;
  },
  parse: function() {
    return parse2;
  },
  parseAsync: function() {
    return parseAsync2;
  },
  partialRecord: function() {
    return partialRecord;
  },
  pipe: function() {
    return pipe;
  },
  positive: function() {
    return _positive;
  },
  prefault: function() {
    return prefault;
  },
  preprocess: function() {
    return preprocess;
  },
  prettifyError: function() {
    return prettifyError;
  },
  promise: function() {
    return promise;
  },
  property: function() {
    return _property;
  },
  readonly: function() {
    return readonly;
  },
  record: function() {
    return record;
  },
  refine: function() {
    return refine;
  },
  regex: function() {
    return _regex;
  },
  regexes: function() {
    return regexes_exports;
  },
  registry: function() {
    return registry;
  },
  safeDecode: function() {
    return safeDecode2;
  },
  safeDecodeAsync: function() {
    return safeDecodeAsync2;
  },
  safeEncode: function() {
    return safeEncode2;
  },
  safeEncodeAsync: function() {
    return safeEncodeAsync2;
  },
  safeParse: function() {
    return safeParse2;
  },
  safeParseAsync: function() {
    return safeParseAsync2;
  },
  set: function() {
    return set;
  },
  setErrorMap: function() {
    return setErrorMap;
  },
  size: function() {
    return _size;
  },
  slugify: function() {
    return _slugify;
  },
  startsWith: function() {
    return _startsWith;
  },
  strictObject: function() {
    return strictObject;
  },
  string: function() {
    return string2;
  },
  stringFormat: function() {
    return stringFormat;
  },
  stringbool: function() {
    return stringbool;
  },
  success: function() {
    return success;
  },
  superRefine: function() {
    return superRefine;
  },
  symbol: function() {
    return symbol;
  },
  templateLiteral: function() {
    return templateLiteral;
  },
  toJSONSchema: function() {
    return toJSONSchema;
  },
  toLowerCase: function() {
    return _toLowerCase;
  },
  toUpperCase: function() {
    return _toUpperCase;
  },
  transform: function() {
    return transform;
  },
  treeifyError: function() {
    return treeifyError;
  },
  trim: function() {
    return _trim;
  },
  tuple: function() {
    return tuple;
  },
  uint32: function() {
    return uint32;
  },
  uint64: function() {
    return uint64;
  },
  ulid: function() {
    return ulid2;
  },
  undefined: function() {
    return _undefined3;
  },
  union: function() {
    return union;
  },
  unknown: function() {
    return unknown;
  },
  uppercase: function() {
    return _uppercase;
  },
  url: function() {
    return url;
  },
  util: function() {
    return util_exports;
  },
  uuid: function() {
    return uuid2;
  },
  uuidv4: function() {
    return uuidv4;
  },
  uuidv6: function() {
    return uuidv6;
  },
  uuidv7: function() {
    return uuidv7;
  },
  void: function() {
    return _void2;
  },
  xid: function() {
    return xid2;
  }
});

// ../../node_modules/zod/v4/core/index.js
var core_exports2 = {};
__export(core_exports2, {
  $ZodAny: function() {
    return $ZodAny;
  },
  $ZodArray: function() {
    return $ZodArray;
  },
  $ZodAsyncError: function() {
    return $ZodAsyncError;
  },
  $ZodBase64: function() {
    return $ZodBase64;
  },
  $ZodBase64URL: function() {
    return $ZodBase64URL;
  },
  $ZodBigInt: function() {
    return $ZodBigInt;
  },
  $ZodBigIntFormat: function() {
    return $ZodBigIntFormat;
  },
  $ZodBoolean: function() {
    return $ZodBoolean;
  },
  $ZodCIDRv4: function() {
    return $ZodCIDRv4;
  },
  $ZodCIDRv6: function() {
    return $ZodCIDRv6;
  },
  $ZodCUID: function() {
    return $ZodCUID;
  },
  $ZodCUID2: function() {
    return $ZodCUID2;
  },
  $ZodCatch: function() {
    return $ZodCatch;
  },
  $ZodCheck: function() {
    return $ZodCheck;
  },
  $ZodCheckBigIntFormat: function() {
    return $ZodCheckBigIntFormat;
  },
  $ZodCheckEndsWith: function() {
    return $ZodCheckEndsWith;
  },
  $ZodCheckGreaterThan: function() {
    return $ZodCheckGreaterThan;
  },
  $ZodCheckIncludes: function() {
    return $ZodCheckIncludes;
  },
  $ZodCheckLengthEquals: function() {
    return $ZodCheckLengthEquals;
  },
  $ZodCheckLessThan: function() {
    return $ZodCheckLessThan;
  },
  $ZodCheckLowerCase: function() {
    return $ZodCheckLowerCase;
  },
  $ZodCheckMaxLength: function() {
    return $ZodCheckMaxLength;
  },
  $ZodCheckMaxSize: function() {
    return $ZodCheckMaxSize;
  },
  $ZodCheckMimeType: function() {
    return $ZodCheckMimeType;
  },
  $ZodCheckMinLength: function() {
    return $ZodCheckMinLength;
  },
  $ZodCheckMinSize: function() {
    return $ZodCheckMinSize;
  },
  $ZodCheckMultipleOf: function() {
    return $ZodCheckMultipleOf;
  },
  $ZodCheckNumberFormat: function() {
    return $ZodCheckNumberFormat;
  },
  $ZodCheckOverwrite: function() {
    return $ZodCheckOverwrite;
  },
  $ZodCheckProperty: function() {
    return $ZodCheckProperty;
  },
  $ZodCheckRegex: function() {
    return $ZodCheckRegex;
  },
  $ZodCheckSizeEquals: function() {
    return $ZodCheckSizeEquals;
  },
  $ZodCheckStartsWith: function() {
    return $ZodCheckStartsWith;
  },
  $ZodCheckStringFormat: function() {
    return $ZodCheckStringFormat;
  },
  $ZodCheckUpperCase: function() {
    return $ZodCheckUpperCase;
  },
  $ZodCodec: function() {
    return $ZodCodec;
  },
  $ZodCustom: function() {
    return $ZodCustom;
  },
  $ZodCustomStringFormat: function() {
    return $ZodCustomStringFormat;
  },
  $ZodDate: function() {
    return $ZodDate;
  },
  $ZodDefault: function() {
    return $ZodDefault;
  },
  $ZodDiscriminatedUnion: function() {
    return $ZodDiscriminatedUnion;
  },
  $ZodE164: function() {
    return $ZodE164;
  },
  $ZodEmail: function() {
    return $ZodEmail;
  },
  $ZodEmoji: function() {
    return $ZodEmoji;
  },
  $ZodEncodeError: function() {
    return $ZodEncodeError;
  },
  $ZodEnum: function() {
    return $ZodEnum;
  },
  $ZodError: function() {
    return $ZodError;
  },
  $ZodFile: function() {
    return $ZodFile;
  },
  $ZodFunction: function() {
    return $ZodFunction;
  },
  $ZodGUID: function() {
    return $ZodGUID;
  },
  $ZodIPv4: function() {
    return $ZodIPv4;
  },
  $ZodIPv6: function() {
    return $ZodIPv6;
  },
  $ZodISODate: function() {
    return $ZodISODate;
  },
  $ZodISODateTime: function() {
    return $ZodISODateTime;
  },
  $ZodISODuration: function() {
    return $ZodISODuration;
  },
  $ZodISOTime: function() {
    return $ZodISOTime;
  },
  $ZodIntersection: function() {
    return $ZodIntersection;
  },
  $ZodJWT: function() {
    return $ZodJWT;
  },
  $ZodKSUID: function() {
    return $ZodKSUID;
  },
  $ZodLazy: function() {
    return $ZodLazy;
  },
  $ZodLiteral: function() {
    return $ZodLiteral;
  },
  $ZodMAC: function() {
    return $ZodMAC;
  },
  $ZodMap: function() {
    return $ZodMap;
  },
  $ZodNaN: function() {
    return $ZodNaN;
  },
  $ZodNanoID: function() {
    return $ZodNanoID;
  },
  $ZodNever: function() {
    return $ZodNever;
  },
  $ZodNonOptional: function() {
    return $ZodNonOptional;
  },
  $ZodNull: function() {
    return $ZodNull;
  },
  $ZodNullable: function() {
    return $ZodNullable;
  },
  $ZodNumber: function() {
    return $ZodNumber;
  },
  $ZodNumberFormat: function() {
    return $ZodNumberFormat;
  },
  $ZodObject: function() {
    return $ZodObject;
  },
  $ZodObjectJIT: function() {
    return $ZodObjectJIT;
  },
  $ZodOptional: function() {
    return $ZodOptional;
  },
  $ZodPipe: function() {
    return $ZodPipe;
  },
  $ZodPrefault: function() {
    return $ZodPrefault;
  },
  $ZodPromise: function() {
    return $ZodPromise;
  },
  $ZodReadonly: function() {
    return $ZodReadonly;
  },
  $ZodRealError: function() {
    return $ZodRealError;
  },
  $ZodRecord: function() {
    return $ZodRecord;
  },
  $ZodRegistry: function() {
    return $ZodRegistry;
  },
  $ZodSet: function() {
    return $ZodSet;
  },
  $ZodString: function() {
    return $ZodString;
  },
  $ZodStringFormat: function() {
    return $ZodStringFormat;
  },
  $ZodSuccess: function() {
    return $ZodSuccess;
  },
  $ZodSymbol: function() {
    return $ZodSymbol;
  },
  $ZodTemplateLiteral: function() {
    return $ZodTemplateLiteral;
  },
  $ZodTransform: function() {
    return $ZodTransform;
  },
  $ZodTuple: function() {
    return $ZodTuple;
  },
  $ZodType: function() {
    return $ZodType;
  },
  $ZodULID: function() {
    return $ZodULID;
  },
  $ZodURL: function() {
    return $ZodURL;
  },
  $ZodUUID: function() {
    return $ZodUUID;
  },
  $ZodUndefined: function() {
    return $ZodUndefined;
  },
  $ZodUnion: function() {
    return $ZodUnion;
  },
  $ZodUnknown: function() {
    return $ZodUnknown;
  },
  $ZodVoid: function() {
    return $ZodVoid;
  },
  $ZodXID: function() {
    return $ZodXID;
  },
  $brand: function() {
    return $brand;
  },
  $constructor: function() {
    return $constructor;
  },
  $input: function() {
    return $input;
  },
  $output: function() {
    return $output;
  },
  Doc: function() {
    return Doc;
  },
  JSONSchema: function() {
    return json_schema_exports;
  },
  JSONSchemaGenerator: function() {
    return JSONSchemaGenerator;
  },
  NEVER: function() {
    return NEVER;
  },
  TimePrecision: function() {
    return TimePrecision;
  },
  _any: function() {
    return _any;
  },
  _array: function() {
    return _array;
  },
  _base64: function() {
    return _base64;
  },
  _base64url: function() {
    return _base64url;
  },
  _bigint: function() {
    return _bigint;
  },
  _boolean: function() {
    return _boolean;
  },
  _catch: function() {
    return _catch;
  },
  _check: function() {
    return _check;
  },
  _cidrv4: function() {
    return _cidrv4;
  },
  _cidrv6: function() {
    return _cidrv6;
  },
  _coercedBigint: function() {
    return _coercedBigint;
  },
  _coercedBoolean: function() {
    return _coercedBoolean;
  },
  _coercedDate: function() {
    return _coercedDate;
  },
  _coercedNumber: function() {
    return _coercedNumber;
  },
  _coercedString: function() {
    return _coercedString;
  },
  _cuid: function() {
    return _cuid;
  },
  _cuid2: function() {
    return _cuid2;
  },
  _custom: function() {
    return _custom;
  },
  _date: function() {
    return _date;
  },
  _decode: function() {
    return _decode;
  },
  _decodeAsync: function() {
    return _decodeAsync;
  },
  _default: function() {
    return _default;
  },
  _discriminatedUnion: function() {
    return _discriminatedUnion;
  },
  _e164: function() {
    return _e164;
  },
  _email: function() {
    return _email;
  },
  _emoji: function() {
    return _emoji2;
  },
  _encode: function() {
    return _encode;
  },
  _encodeAsync: function() {
    return _encodeAsync;
  },
  _endsWith: function() {
    return _endsWith;
  },
  _enum: function() {
    return _enum;
  },
  _file: function() {
    return _file;
  },
  _float32: function() {
    return _float32;
  },
  _float64: function() {
    return _float64;
  },
  _gt: function() {
    return _gt;
  },
  _gte: function() {
    return _gte;
  },
  _guid: function() {
    return _guid;
  },
  _includes: function() {
    return _includes;
  },
  _int: function() {
    return _int;
  },
  _int32: function() {
    return _int32;
  },
  _int64: function() {
    return _int64;
  },
  _intersection: function() {
    return _intersection;
  },
  _ipv4: function() {
    return _ipv4;
  },
  _ipv6: function() {
    return _ipv6;
  },
  _isoDate: function() {
    return _isoDate;
  },
  _isoDateTime: function() {
    return _isoDateTime;
  },
  _isoDuration: function() {
    return _isoDuration;
  },
  _isoTime: function() {
    return _isoTime;
  },
  _jwt: function() {
    return _jwt;
  },
  _ksuid: function() {
    return _ksuid;
  },
  _lazy: function() {
    return _lazy;
  },
  _length: function() {
    return _length;
  },
  _literal: function() {
    return _literal;
  },
  _lowercase: function() {
    return _lowercase;
  },
  _lt: function() {
    return _lt;
  },
  _lte: function() {
    return _lte;
  },
  _mac: function() {
    return _mac;
  },
  _map: function() {
    return _map;
  },
  _max: function() {
    return _lte;
  },
  _maxLength: function() {
    return _maxLength;
  },
  _maxSize: function() {
    return _maxSize;
  },
  _mime: function() {
    return _mime;
  },
  _min: function() {
    return _gte;
  },
  _minLength: function() {
    return _minLength;
  },
  _minSize: function() {
    return _minSize;
  },
  _multipleOf: function() {
    return _multipleOf;
  },
  _nan: function() {
    return _nan;
  },
  _nanoid: function() {
    return _nanoid;
  },
  _nativeEnum: function() {
    return _nativeEnum;
  },
  _negative: function() {
    return _negative;
  },
  _never: function() {
    return _never;
  },
  _nonnegative: function() {
    return _nonnegative;
  },
  _nonoptional: function() {
    return _nonoptional;
  },
  _nonpositive: function() {
    return _nonpositive;
  },
  _normalize: function() {
    return _normalize;
  },
  _null: function() {
    return _null2;
  },
  _nullable: function() {
    return _nullable;
  },
  _number: function() {
    return _number;
  },
  _optional: function() {
    return _optional;
  },
  _overwrite: function() {
    return _overwrite;
  },
  _parse: function() {
    return _parse;
  },
  _parseAsync: function() {
    return _parseAsync;
  },
  _pipe: function() {
    return _pipe;
  },
  _positive: function() {
    return _positive;
  },
  _promise: function() {
    return _promise;
  },
  _property: function() {
    return _property;
  },
  _readonly: function() {
    return _readonly;
  },
  _record: function() {
    return _record;
  },
  _refine: function() {
    return _refine;
  },
  _regex: function() {
    return _regex;
  },
  _safeDecode: function() {
    return _safeDecode;
  },
  _safeDecodeAsync: function() {
    return _safeDecodeAsync;
  },
  _safeEncode: function() {
    return _safeEncode;
  },
  _safeEncodeAsync: function() {
    return _safeEncodeAsync;
  },
  _safeParse: function() {
    return _safeParse;
  },
  _safeParseAsync: function() {
    return _safeParseAsync;
  },
  _set: function() {
    return _set2;
  },
  _size: function() {
    return _size;
  },
  _slugify: function() {
    return _slugify;
  },
  _startsWith: function() {
    return _startsWith;
  },
  _string: function() {
    return _string;
  },
  _stringFormat: function() {
    return _stringFormat;
  },
  _stringbool: function() {
    return _stringbool;
  },
  _success: function() {
    return _success;
  },
  _superRefine: function() {
    return _superRefine;
  },
  _symbol: function() {
    return _symbol;
  },
  _templateLiteral: function() {
    return _templateLiteral;
  },
  _toLowerCase: function() {
    return _toLowerCase;
  },
  _toUpperCase: function() {
    return _toUpperCase;
  },
  _transform: function() {
    return _transform;
  },
  _trim: function() {
    return _trim;
  },
  _tuple: function() {
    return _tuple;
  },
  _uint32: function() {
    return _uint32;
  },
  _uint64: function() {
    return _uint64;
  },
  _ulid: function() {
    return _ulid;
  },
  _undefined: function() {
    return _undefined2;
  },
  _union: function() {
    return _union;
  },
  _unknown: function() {
    return _unknown;
  },
  _uppercase: function() {
    return _uppercase;
  },
  _url: function() {
    return _url;
  },
  _uuid: function() {
    return _uuid;
  },
  _uuidv4: function() {
    return _uuidv4;
  },
  _uuidv6: function() {
    return _uuidv6;
  },
  _uuidv7: function() {
    return _uuidv7;
  },
  _void: function() {
    return _void;
  },
  _xid: function() {
    return _xid;
  },
  clone: function() {
    return clone;
  },
  config: function() {
    return config;
  },
  decode: function() {
    return decode;
  },
  decodeAsync: function() {
    return decodeAsync;
  },
  describe: function() {
    return describe;
  },
  encode: function() {
    return encode;
  },
  encodeAsync: function() {
    return encodeAsync;
  },
  flattenError: function() {
    return flattenError;
  },
  formatError: function() {
    return formatError;
  },
  globalConfig: function() {
    return globalConfig;
  },
  globalRegistry: function() {
    return globalRegistry;
  },
  isValidBase64: function() {
    return isValidBase64;
  },
  isValidBase64URL: function() {
    return isValidBase64URL;
  },
  isValidJWT: function() {
    return isValidJWT;
  },
  locales: function() {
    return locales_exports;
  },
  meta: function() {
    return meta;
  },
  parse: function() {
    return parse;
  },
  parseAsync: function() {
    return parseAsync;
  },
  prettifyError: function() {
    return prettifyError;
  },
  regexes: function() {
    return regexes_exports;
  },
  registry: function() {
    return registry;
  },
  safeDecode: function() {
    return safeDecode;
  },
  safeDecodeAsync: function() {
    return safeDecodeAsync;
  },
  safeEncode: function() {
    return safeEncode;
  },
  safeEncodeAsync: function() {
    return safeEncodeAsync;
  },
  safeParse: function() {
    return safeParse;
  },
  safeParseAsync: function() {
    return safeParseAsync;
  },
  toDotPath: function() {
    return toDotPath;
  },
  toJSONSchema: function() {
    return toJSONSchema;
  },
  treeifyError: function() {
    return treeifyError;
  },
  util: function() {
    return util_exports;
  },
  version: function() {
    return version;
  }
});

// ../../node_modules/zod/v4/core/core.js
function _wrapNativeSuper(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function(t2) {
    if (t2 === null || !_isNativeFunction(t2)) return t2;
    if (typeof t2 != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(t2)) return r.get(t2);
      r.set(t2, Wrapper);
    }
    function Wrapper() {
      return _construct(t2, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t2.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t2);
  }, _wrapNativeSuper(t);
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeFunction(t) {
  try {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  } catch (n) {
    return typeof t == "function";
  }
}
function _createForOfIteratorHelper3(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray4(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray4(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray4(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray4(r, a) : void 0;
  }
}
function _arrayLikeToArray4(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _defineProperties2(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey2(o.key), o);
  }
}
function _createClass2(e, r, t) {
  return r && _defineProperties2(e.prototype, r), t && _defineProperties2(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive2(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _classCallCheck2(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t;
  })();
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
var NEVER = Object.freeze({
  status: "aborted"
});
// @__NO_SIDE_EFFECTS__
function $constructor(name, initializer3, params) {
  function init(inst, def) {
    if (inst._zod || Object.defineProperty(inst, "_zod", {
      value: {
        def,
        constr: _,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), !inst._zod.traits.has(name)) {
      inst._zod.traits.add(name), initializer3(inst, def);
      for (var proto = _.prototype, keys = Object.keys(proto), i = 0; i < keys.length; i++) {
        var k = keys[i];
        k in inst || (inst[k] = proto[k].bind(inst));
      }
    }
  }
  var Parent = (params == null ? void 0 : params.Parent) ?? Object, Definition = /* @__PURE__ */ (function(_Parent) {
    function Definition2() {
      return _classCallCheck2(this, Definition2), _callSuper(this, Definition2, arguments);
    }
    return _inherits(Definition2, _Parent), _createClass2(Definition2);
  })(Parent);
  Object.defineProperty(Definition, "name", {
    value: name
  });
  function _(def) {
    var _a2, inst = params != null && params.Parent ? new Definition() : this;
    init(inst, def), (_a2 = inst._zod).deferred ?? (_a2.deferred = []);
    var _iterator = _createForOfIteratorHelper3(inst._zod.deferred), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var fn = _step.value;
        fn();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return inst;
  }
  return Object.defineProperty(_, "init", {
    value: init
  }), Object.defineProperty(_, Symbol.hasInstance, {
    value: function(inst) {
      var _inst$_zod;
      return params != null && params.Parent && inst instanceof params.Parent ? !0 : inst == null || (_inst$_zod = inst._zod) === null || _inst$_zod === void 0 || (_inst$_zod = _inst$_zod.traits) === null || _inst$_zod === void 0 ? void 0 : _inst$_zod.has(name);
    }
  }), Object.defineProperty(_, "name", {
    value: name
  }), _;
}
var $brand = Symbol("zod_brand"), $ZodAsyncError = /* @__PURE__ */ (function(_Error) {
  function $ZodAsyncError2() {
    return _classCallCheck2(this, $ZodAsyncError2), _callSuper(this, $ZodAsyncError2, ["Encountered Promise during synchronous parse. Use .parseAsync() instead."]);
  }
  return _inherits($ZodAsyncError2, _Error), _createClass2($ZodAsyncError2);
})(/* @__PURE__ */ _wrapNativeSuper(Error)), $ZodEncodeError = /* @__PURE__ */ (function(_Error2) {
  function $ZodEncodeError2(name) {
    var _this;
    return _classCallCheck2(this, $ZodEncodeError2), _this = _callSuper(this, $ZodEncodeError2, ["Encountered unidirectional transform during encode: ".concat(name)]), _this.name = "ZodEncodeError", _this;
  }
  return _inherits($ZodEncodeError2, _Error2), _createClass2($ZodEncodeError2);
})(/* @__PURE__ */ _wrapNativeSuper(Error)), globalConfig = {};
function config(newConfig) {
  return newConfig && Object.assign(globalConfig, newConfig), globalConfig;
}

// ../../node_modules/zod/v4/core/util.js
var util_exports = {};
__export(util_exports, {
  BIGINT_FORMAT_RANGES: function() {
    return BIGINT_FORMAT_RANGES;
  },
  Class: function() {
    return Class3;
  },
  NUMBER_FORMAT_RANGES: function() {
    return NUMBER_FORMAT_RANGES;
  },
  aborted: function() {
    return aborted;
  },
  allowsEval: function() {
    return allowsEval;
  },
  assert: function() {
    return assert;
  },
  assertEqual: function() {
    return assertEqual;
  },
  assertIs: function() {
    return assertIs;
  },
  assertNever: function() {
    return assertNever;
  },
  assertNotEqual: function() {
    return assertNotEqual;
  },
  assignProp: function() {
    return assignProp;
  },
  base64ToUint8Array: function() {
    return base64ToUint8Array;
  },
  base64urlToUint8Array: function() {
    return base64urlToUint8Array;
  },
  cached: function() {
    return cached;
  },
  captureStackTrace: function() {
    return captureStackTrace;
  },
  cleanEnum: function() {
    return cleanEnum;
  },
  cleanRegex: function() {
    return cleanRegex;
  },
  clone: function() {
    return clone;
  },
  cloneDef: function() {
    return cloneDef;
  },
  createTransparentProxy: function() {
    return createTransparentProxy;
  },
  defineLazy: function() {
    return defineLazy;
  },
  esc: function() {
    return esc;
  },
  escapeRegex: function() {
    return escapeRegex;
  },
  extend: function() {
    return extend;
  },
  finalizeIssue: function() {
    return finalizeIssue;
  },
  floatSafeRemainder: function() {
    return floatSafeRemainder;
  },
  getElementAtPath: function() {
    return getElementAtPath;
  },
  getEnumValues: function() {
    return getEnumValues;
  },
  getLengthableOrigin: function() {
    return getLengthableOrigin;
  },
  getParsedType: function() {
    return getParsedType;
  },
  getSizableOrigin: function() {
    return getSizableOrigin;
  },
  hexToUint8Array: function() {
    return hexToUint8Array;
  },
  isObject: function() {
    return isObject;
  },
  isPlainObject: function() {
    return isPlainObject;
  },
  issue: function() {
    return issue;
  },
  joinValues: function() {
    return joinValues;
  },
  jsonStringifyReplacer: function() {
    return jsonStringifyReplacer;
  },
  merge: function() {
    return merge;
  },
  mergeDefs: function() {
    return mergeDefs;
  },
  normalizeParams: function() {
    return normalizeParams;
  },
  nullish: function() {
    return nullish;
  },
  numKeys: function() {
    return numKeys;
  },
  objectClone: function() {
    return objectClone;
  },
  omit: function() {
    return omit;
  },
  optionalKeys: function() {
    return optionalKeys;
  },
  partial: function() {
    return partial;
  },
  pick: function() {
    return pick;
  },
  prefixIssues: function() {
    return prefixIssues;
  },
  primitiveTypes: function() {
    return primitiveTypes;
  },
  promiseAllObject: function() {
    return promiseAllObject;
  },
  propertyKeyTypes: function() {
    return propertyKeyTypes;
  },
  randomString: function() {
    return randomString;
  },
  required: function() {
    return required;
  },
  safeExtend: function() {
    return safeExtend;
  },
  shallowClone: function() {
    return shallowClone;
  },
  slugify: function() {
    return slugify;
  },
  stringifyPrimitive: function() {
    return stringifyPrimitive;
  },
  uint8ArrayToBase64: function() {
    return uint8ArrayToBase64;
  },
  uint8ArrayToBase64url: function() {
    return uint8ArrayToBase64url;
  },
  uint8ArrayToHex: function() {
    return uint8ArrayToHex;
  },
  unwrapMessage: function() {
    return unwrapMessage;
  }
});
function _defineProperties3(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey3(o.key), o);
  }
}
function _createClass3(e, r, t) {
  return r && _defineProperties3(e.prototype, r), t && _defineProperties3(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _classCallCheck3(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _toConsumableArray2(r) {
  return _arrayWithoutHoles2(r) || _iterableToArray2(r) || _unsupportedIterableToArray5(r) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray2(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles2(r) {
  if (Array.isArray(r)) return _arrayLikeToArray5(r);
}
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), !0).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty2(e, r, t) {
  return (r = _toPropertyKey3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive3(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _slicedToArray3(r, e) {
  return _arrayWithHoles3(r) || _iterableToArrayLimit3(r, e) || _unsupportedIterableToArray5(r, e) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray5(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray5(r, a) : void 0;
  }
}
function _arrayLikeToArray5(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit3(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles3(r) {
  if (Array.isArray(r)) return r;
}
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function assertIs(_arg) {
}
function assertNever(_x) {
  throw new Error();
}
function assert(_) {
}
function getEnumValues(entries) {
  var numericValues = Object.values(entries).filter(function(v) {
    return typeof v == "number";
  }), values = Object.entries(entries).filter(function(_ref) {
    var _ref2 = _slicedToArray3(_ref, 2), k = _ref2[0], _ = _ref2[1];
    return numericValues.indexOf(+k) === -1;
  }).map(function(_ref3) {
    var _ref4 = _slicedToArray3(_ref3, 2), _ = _ref4[0], v = _ref4[1];
    return v;
  });
  return values;
}
function joinValues(array2) {
  var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "|";
  return array2.map(function(val) {
    return stringifyPrimitive(val);
  }).join(separator);
}
function jsonStringifyReplacer(_, value) {
  return typeof value == "bigint" ? value.toString() : value;
}
function cached(getter) {
  var set2 = !1;
  return {
    get value() {
      if (!set2) {
        var value = getter();
        return Object.defineProperty(this, "value", {
          value
        }), value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish(input) {
  return input == null;
}
function cleanRegex(source) {
  var start = source.startsWith("^") ? 1 : 0, end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  var valDecCount = (val.toString().split(".")[1] || "").length, stepString = step.toString(), stepDecCount = (stepString.split(".")[1] || "").length;
  if (stepDecCount === 0 && /\d?e-\d?/.test(stepString)) {
    var match = stepString.match(/\d?e-(\d?)/);
    match != null && match[1] && (stepDecCount = Number.parseInt(match[1]));
  }
  var decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount, valInt = Number.parseInt(val.toFixed(decCount).replace(".", "")), stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var EVALUATING = Symbol("evaluating");
function defineLazy(object2, key, getter) {
  var value = void 0;
  Object.defineProperty(object2, key, {
    get: function() {
      if (value !== EVALUATING)
        return value === void 0 && (value = EVALUATING, value = getter()), value;
    },
    set: function(v) {
      Object.defineProperty(object2, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function mergeDefs() {
  for (var mergedDescriptors = {}, _len = arguments.length, defs = new Array(_len), _key = 0; _key < _len; _key++)
    defs[_key] = arguments[_key];
  for (var _i = 0, _defs = defs; _i < _defs.length; _i++) {
    var def = _defs[_i], descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
  return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
  return path ? path.reduce(function(acc, key) {
    return acc == null ? void 0 : acc[key];
  }, obj) : obj;
}
function promiseAllObject(promisesObj) {
  var keys = Object.keys(promisesObj), promises = keys.map(function(key) {
    return promisesObj[key];
  });
  return Promise.all(promises).then(function(results) {
    for (var resolvedObj = {}, i = 0; i < keys.length; i++)
      resolvedObj[keys[i]] = results[i];
    return resolvedObj;
  });
}
function randomString() {
  for (var length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, chars = "abcdefghijklmnopqrstuvwxyz", str = "", i = 0; i < length; i++)
    str += chars[Math.floor(Math.random() * chars.length)];
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : function() {
};
function isObject(data) {
  return typeof data == "object" && data !== null && !Array.isArray(data);
}
var allowsEval = cached(function() {
  var _navigator;
  if (typeof navigator < "u" && (_navigator = navigator) !== null && _navigator !== void 0 && (_navigator = _navigator.userAgent) !== null && _navigator !== void 0 && _navigator.includes("Cloudflare"))
    return !1;
  try {
    var F = Function;
    return new F(""), !0;
  } catch (_) {
    return !1;
  }
});
function isPlainObject(o) {
  if (isObject(o) === !1) return !1;
  var ctor = o.constructor;
  if (ctor === void 0 || typeof ctor != "function") return !0;
  var prot = ctor.prototype;
  return !(isObject(prot) === !1 || Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === !1);
}
function shallowClone(o) {
  return isPlainObject(o) ? _objectSpread2({}, o) : Array.isArray(o) ? _toConsumableArray2(o) : o;
}
function numKeys(data) {
  var keyCount = 0;
  for (var key in data)
    Object.prototype.hasOwnProperty.call(data, key) && keyCount++;
  return keyCount;
}
var getParsedType = function(data) {
  var t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      return Array.isArray(data) ? "array" : data === null ? "null" : data.then && typeof data.then == "function" && data.catch && typeof data.catch == "function" ? "promise" : typeof Map < "u" && data instanceof Map ? "map" : typeof Set < "u" && data instanceof Set ? "set" : typeof Date < "u" && data instanceof Date ? "date" : typeof File < "u" && data instanceof File ? "file" : "object";
    default:
      throw new Error("Unknown data type: ".concat(t));
  }
}, propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]), primitiveTypes = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  var cl = new inst._zod.constr(def ?? inst._zod.def);
  return (!def || params != null && params.parent) && (cl._zod.parent = inst), cl;
}
function normalizeParams(_params) {
  var params = _params;
  if (!params) return {};
  if (typeof params == "string") return {
    error: function() {
      return params;
    }
  };
  if ((params == null ? void 0 : params.message) !== void 0) {
    if ((params == null ? void 0 : params.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  return delete params.message, typeof params.error == "string" ? _objectSpread2(_objectSpread2({}, params), {}, {
    error: function() {
      return params.error;
    }
  }) : params;
}
function createTransparentProxy(getter) {
  var target;
  return new Proxy({}, {
    get: function(_, prop, receiver) {
      return target ?? (target = getter()), Reflect.get(target, prop, receiver);
    },
    set: function(_, prop, value, receiver) {
      return target ?? (target = getter()), Reflect.set(target, prop, value, receiver);
    },
    has: function(_, prop) {
      return target ?? (target = getter()), Reflect.has(target, prop);
    },
    deleteProperty: function(_, prop) {
      return target ?? (target = getter()), Reflect.deleteProperty(target, prop);
    },
    ownKeys: function(_) {
      return target ?? (target = getter()), Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor: function(_, prop) {
      return target ?? (target = getter()), Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty: function(_, prop, descriptor) {
      return target ?? (target = getter()), Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  return typeof value == "bigint" ? value.toString() + "n" : typeof value == "string" ? '"'.concat(value, '"') : "".concat(value);
}
function optionalKeys(shape) {
  return Object.keys(shape).filter(function(k) {
    return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  var currDef = schema._zod.def, def = mergeDefs(schema._zod.def, {
    get shape() {
      var newShape = {};
      for (var key in mask) {
        if (!(key in currDef.shape))
          throw new Error('Unrecognized key: "'.concat(key, '"'));
        mask[key] && (newShape[key] = currDef.shape[key]);
      }
      return assignProp(this, "shape", newShape), newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function omit(schema, mask) {
  var currDef = schema._zod.def, def = mergeDefs(schema._zod.def, {
    get shape() {
      var newShape = _objectSpread2({}, schema._zod.def.shape);
      for (var key in mask) {
        if (!(key in currDef.shape))
          throw new Error('Unrecognized key: "'.concat(key, '"'));
        mask[key] && delete newShape[key];
      }
      return assignProp(this, "shape", newShape), newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function extend(schema, shape) {
  if (!isPlainObject(shape))
    throw new Error("Invalid input to extend: expected a plain object");
  var checks = schema._zod.def.checks, hasChecks = checks && checks.length > 0;
  if (hasChecks)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  var def = mergeDefs(schema._zod.def, {
    get shape() {
      var _shape = _objectSpread2(_objectSpread2({}, schema._zod.def.shape), shape);
      return assignProp(this, "shape", _shape), _shape;
    },
    checks: []
  });
  return clone(schema, def);
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  var def = _objectSpread2(_objectSpread2({}, schema._zod.def), {}, {
    get shape() {
      var _shape = _objectSpread2(_objectSpread2({}, schema._zod.def.shape), shape);
      return assignProp(this, "shape", _shape), _shape;
    },
    checks: schema._zod.def.checks
  });
  return clone(schema, def);
}
function merge(a, b) {
  var def = mergeDefs(a._zod.def, {
    get shape() {
      var _shape = _objectSpread2(_objectSpread2({}, a._zod.def.shape), b._zod.def.shape);
      return assignProp(this, "shape", _shape), _shape;
    },
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return clone(a, def);
}
function partial(Class5, schema, mask) {
  var def = mergeDefs(schema._zod.def, {
    get shape() {
      var oldShape = schema._zod.def.shape, shape = _objectSpread2({}, oldShape);
      if (mask)
        for (var key in mask) {
          if (!(key in oldShape))
            throw new Error('Unrecognized key: "'.concat(key, '"'));
          mask[key] && (shape[key] = Class5 ? new Class5({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key]);
        }
      else
        for (var _key2 in oldShape)
          shape[_key2] = Class5 ? new Class5({
            type: "optional",
            innerType: oldShape[_key2]
          }) : oldShape[_key2];
      return assignProp(this, "shape", shape), shape;
    },
    checks: []
  });
  return clone(schema, def);
}
function required(Class5, schema, mask) {
  var def = mergeDefs(schema._zod.def, {
    get shape() {
      var oldShape = schema._zod.def.shape, shape = _objectSpread2({}, oldShape);
      if (mask)
        for (var key in mask) {
          if (!(key in shape))
            throw new Error('Unrecognized key: "'.concat(key, '"'));
          mask[key] && (shape[key] = new Class5({
            type: "nonoptional",
            innerType: oldShape[key]
          }));
        }
      else
        for (var _key3 in oldShape)
          shape[_key3] = new Class5({
            type: "nonoptional",
            innerType: oldShape[_key3]
          });
      return assignProp(this, "shape", shape), shape;
    },
    checks: []
  });
  return clone(schema, def);
}
function aborted(x) {
  var startIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (x.aborted === !0) return !0;
  for (var i = startIndex; i < x.issues.length; i++) {
    var _x$issues$i;
    if (((_x$issues$i = x.issues[i]) === null || _x$issues$i === void 0 ? void 0 : _x$issues$i.continue) !== !0)
      return !0;
  }
  return !1;
}
function prefixIssues(path, issues) {
  return issues.map(function(iss) {
    var _a2;
    return (_a2 = iss).path ?? (_a2.path = []), iss.path.unshift(path), iss;
  });
}
function unwrapMessage(message) {
  return typeof message == "string" ? message : message == null ? void 0 : message.message;
}
function finalizeIssue(iss, ctx, config2) {
  var full = _objectSpread2(_objectSpread2({}, iss), {}, {
    path: iss.path ?? []
  });
  if (!iss.message) {
    var _iss$inst, _iss$inst$error, _ctx$error, _config$customError, _config$localeError, message = unwrapMessage((_iss$inst = iss.inst) === null || _iss$inst === void 0 || (_iss$inst = _iss$inst._zod.def) === null || _iss$inst === void 0 || (_iss$inst$error = _iss$inst.error) === null || _iss$inst$error === void 0 ? void 0 : _iss$inst$error.call(_iss$inst, iss)) ?? unwrapMessage(ctx == null || (_ctx$error = ctx.error) === null || _ctx$error === void 0 ? void 0 : _ctx$error.call(ctx, iss)) ?? unwrapMessage((_config$customError = config2.customError) === null || _config$customError === void 0 ? void 0 : _config$customError.call(config2, iss)) ?? unwrapMessage((_config$localeError = config2.localeError) === null || _config$localeError === void 0 ? void 0 : _config$localeError.call(config2, iss)) ?? "Invalid input";
    full.message = message;
  }
  return delete full.inst, delete full.continue, ctx != null && ctx.reportInput || delete full.input, full;
}
function getSizableOrigin(input) {
  return input instanceof Set ? "set" : input instanceof Map ? "map" : input instanceof File ? "file" : "unknown";
}
function getLengthableOrigin(input) {
  return Array.isArray(input) ? "array" : typeof input == "string" ? "string" : "unknown";
}
function issue() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key4 = 0; _key4 < _len2; _key4++)
    args[_key4] = arguments[_key4];
  var iss = args[0], input = args[1], inst = args[2];
  return typeof iss == "string" ? {
    message: iss,
    code: "custom",
    input,
    inst
  } : _objectSpread2({}, iss);
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(function(_ref5) {
    var _ref6 = _slicedToArray3(_ref5, 2), k = _ref6[0], _ = _ref6[1];
    return Number.isNaN(Number.parseInt(k, 10));
  }).map(function(el) {
    return el[1];
  });
}
function base64ToUint8Array(base643) {
  for (var binaryString = atob(base643), bytes = new Uint8Array(binaryString.length), i = 0; i < binaryString.length; i++)
    bytes[i] = binaryString.charCodeAt(i);
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  for (var binaryString = "", i = 0; i < bytes.length; i++)
    binaryString += String.fromCharCode(bytes[i]);
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url3) {
  var base643 = base64url3.replace(/-/g, "+").replace(/_/g, "/"), padding = "=".repeat((4 - base643.length % 4) % 4);
  return base64ToUint8Array(base643 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex3) {
  var cleanHex = hex3.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0)
    throw new Error("Invalid hex string length");
  for (var bytes = new Uint8Array(cleanHex.length / 2), i = 0; i < cleanHex.length; i += 2)
    bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map(function(b) {
    return b.toString(16).padStart(2, "0");
  }).join("");
}
var Class3 = /* @__PURE__ */ _createClass3(function Class4() {
  _classCallCheck3(this, Class4);
});

// ../../node_modules/zod/v4/core/errors.js
function _toConsumableArray3(r) {
  return _arrayWithoutHoles3(r) || _iterableToArray3(r) || _unsupportedIterableToArray6(r) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray3(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles3(r) {
  if (Array.isArray(r)) return _arrayLikeToArray6(r);
}
function _createForOfIteratorHelper4(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray6(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray6(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray6(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray6(r, a) : void 0;
  }
}
function _arrayLikeToArray6(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var initializer = function(inst, def) {
  inst.name = "$ZodError", Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: !1
  }), Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: !1
  }), inst.message = JSON.stringify(def, jsonStringifyReplacer, 2), Object.defineProperty(inst, "toString", {
    value: function() {
      return inst.message;
    },
    enumerable: !1
  });
}, $ZodError = $constructor("$ZodError", initializer), $ZodRealError = $constructor("$ZodError", initializer, {
  Parent: Error
});
function flattenError(error46) {
  var mapper = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(issue2) {
    return issue2.message;
  }, fieldErrors = {}, formErrors = [], _iterator = _createForOfIteratorHelper4(error46.issues), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var sub = _step.value;
      sub.path.length > 0 ? (fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [], fieldErrors[sub.path[0]].push(mapper(sub))) : formErrors.push(mapper(sub));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return {
    formErrors,
    fieldErrors
  };
}
function formatError(error46) {
  var mapper = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(issue2) {
    return issue2.message;
  }, fieldErrors = {
    _errors: []
  }, processError = function(error47) {
    var _iterator2 = _createForOfIteratorHelper4(error47.issues), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var issue2 = _step2.value;
        if (issue2.code === "invalid_union" && issue2.errors.length)
          issue2.errors.map(function(issues) {
            return processError({
              issues
            });
          });
        else if (issue2.code === "invalid_key")
          processError({
            issues: issue2.issues
          });
        else if (issue2.code === "invalid_element")
          processError({
            issues: issue2.issues
          });
        else if (issue2.path.length === 0)
          fieldErrors._errors.push(mapper(issue2));
        else
          for (var curr = fieldErrors, i = 0; i < issue2.path.length; ) {
            var el = issue2.path[i], terminal = i === issue2.path.length - 1;
            terminal ? (curr[el] = curr[el] || {
              _errors: []
            }, curr[el]._errors.push(mapper(issue2))) : curr[el] = curr[el] || {
              _errors: []
            }, curr = curr[el], i++;
          }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  return processError(error46), fieldErrors;
}
function treeifyError(error46) {
  var mapper = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(issue2) {
    return issue2.message;
  }, result = {
    errors: []
  }, _processError = function(error47) {
    var path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], _a2, _b, _iterator3 = _createForOfIteratorHelper4(error47.issues), _step3;
    try {
      var _loop = function() {
        var issue2 = _step3.value;
        if (issue2.code === "invalid_union" && issue2.errors.length)
          issue2.errors.map(function(issues) {
            return _processError({
              issues
            }, issue2.path);
          });
        else if (issue2.code === "invalid_key")
          _processError({
            issues: issue2.issues
          }, issue2.path);
        else if (issue2.code === "invalid_element")
          _processError({
            issues: issue2.issues
          }, issue2.path);
        else {
          var fullpath = [].concat(_toConsumableArray3(path), _toConsumableArray3(issue2.path));
          if (fullpath.length === 0)
            return result.errors.push(mapper(issue2)), 1;
          for (var curr = result, i = 0; i < fullpath.length; ) {
            var el = fullpath[i], terminal = i === fullpath.length - 1;
            typeof el == "string" ? (curr.properties ?? (curr.properties = {}), (_a2 = curr.properties)[el] ?? (_a2[el] = {
              errors: []
            }), curr = curr.properties[el]) : (curr.items ?? (curr.items = []), (_b = curr.items)[el] ?? (_b[el] = {
              errors: []
            }), curr = curr.items[el]), terminal && curr.errors.push(mapper(issue2)), i++;
          }
        }
      };
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; )
        _loop();
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  };
  return _processError(error46), result;
}
function toDotPath(_path) {
  var segs = [], path = _path.map(function(seg2) {
    return typeof seg2 == "object" ? seg2.key : seg2;
  }), _iterator4 = _createForOfIteratorHelper4(path), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var seg = _step4.value;
      typeof seg == "number" ? segs.push("[".concat(seg, "]")) : typeof seg == "symbol" ? segs.push("[".concat(JSON.stringify(String(seg)), "]")) : /[^\w$]/.test(seg) ? segs.push("[".concat(JSON.stringify(seg), "]")) : (segs.length && segs.push("."), segs.push(seg));
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return segs.join("");
}
function prettifyError(error46) {
  var lines = [], issues = _toConsumableArray3(error46.issues).sort(function(a, b) {
    return (a.path ?? []).length - (b.path ?? []).length;
  }), _iterator5 = _createForOfIteratorHelper4(issues), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var _issue$path, issue2 = _step5.value;
      lines.push("\u2716 ".concat(issue2.message)), (_issue$path = issue2.path) !== null && _issue$path !== void 0 && _issue$path.length && lines.push("  \u2192 at ".concat(toDotPath(issue2.path)));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return lines.join("\n");
}

// ../../node_modules/zod/v4/core/parse.js
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), !0).forEach(function(r2) {
      _defineProperty3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty3(e, r, t) {
  return (r = _toPropertyKey4(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive4(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _regenerator() {
  var e, t, r = typeof Symbol == "function" ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
  function i(r2, n2, o2, i2) {
    var c2 = n2 && n2.prototype instanceof Generator ? n2 : Generator, u2 = Object.create(c2.prototype);
    return _regeneratorDefine2(u2, "_invoke", (function(r3, n3, o3) {
      var i3, c3, u3, f2 = 0, p = o3 || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function(t2, r4) {
        return i3 = t2, c3 = 0, u3 = e, G.n = r4, a;
      } };
      function d(r4, n4) {
        for (c3 = r4, u3 = n4, t = 0; !y && f2 && !o4 && t < p.length; t++) {
          var o4, i4 = p[t], d2 = G.p, l = i4[2];
          r4 > 3 ? (o4 = l === n4) && (u3 = i4[(c3 = i4[4]) ? 5 : (c3 = 3, 3)], i4[4] = i4[5] = e) : i4[0] <= d2 && ((o4 = r4 < 2 && d2 < i4[1]) ? (c3 = 0, G.v = n4, G.n = i4[1]) : d2 < l && (o4 = r4 < 3 || i4[0] > n4 || n4 > l) && (i4[4] = r4, i4[5] = n4, G.n = l, c3 = 0));
        }
        if (o4 || r4 > 1) return a;
        throw y = !0, n4;
      }
      return function(o4, p2, l) {
        if (f2 > 1) throw TypeError("Generator is already running");
        for (y && p2 === 1 && d(p2, l), c3 = p2, u3 = l; (t = c3 < 2 ? e : u3) || !y; ) {
          i3 || (c3 ? c3 < 3 ? (c3 > 1 && (G.n = -1), d(c3, u3)) : G.n = u3 : G.v = u3);
          try {
            if (f2 = 2, i3) {
              if (c3 || (o4 = "next"), t = i3[o4]) {
                if (!(t = t.call(i3, u3))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u3 = t.value, c3 < 2 && (c3 = 0);
              } else c3 === 1 && (t = i3.return) && t.call(i3), c3 < 2 && (u3 = TypeError("The iterator does not provide a '" + o4 + "' method"), c3 = 1);
              i3 = e;
            } else if ((t = (y = G.n < 0) ? u3 : r3.call(n3, G)) !== a) break;
          } catch (t2) {
            i3 = e, c3 = 1, u3 = t2;
          } finally {
            f2 = 1;
          }
        }
        return { value: t, done: y };
      };
    })(r2, o2, i2), !0), u2;
  }
  var a = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function() {
    return this;
  }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e2) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e2, GeneratorFunctionPrototype) : (e2.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e2, o, "GeneratorFunction")), e2.prototype = Object.create(u), e2;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function() {
    return this;
  }), _regeneratorDefine2(u, "toString", function() {
    return "[object Generator]";
  }), (_regenerator = function() {
    return { w: i, m: f };
  })();
}
function _regeneratorDefine2(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e2) {
    i = 0;
  }
  _regeneratorDefine2 = function(e2, r2, n2, t2) {
    function o(r3, n3) {
      _regeneratorDefine2(e2, r3, function(e3) {
        return this._invoke(r3, n3, e3);
      });
    }
    r2 ? i ? i(e2, r2, { value: n2, enumerable: !t2, configurable: !t2, writable: !t2 }) : e2[r2] = n2 : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine2(e, r, n, t);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var _parse = function(_Err) {
  return function(schema, value, _ctx, _params) {
    var ctx = _ctx ? Object.assign(_ctx, {
      async: !1
    }) : {
      async: !1
    }, result = schema._zod.run({
      value,
      issues: []
    }, ctx);
    if (result instanceof Promise)
      throw new $ZodAsyncError();
    if (result.issues.length) {
      var e = new ((_params == null ? void 0 : _params.Err) ?? _Err)(result.issues.map(function(iss) {
        return finalizeIssue(iss, ctx, config());
      }));
      throw captureStackTrace(e, _params == null ? void 0 : _params.callee), e;
    }
    return result.value;
  };
}, parse = /* @__PURE__ */ _parse($ZodRealError), _parseAsync = function(_Err) {
  return /* @__PURE__ */ (function() {
    var _ref = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee(schema, value, _ctx, params) {
      var ctx, result, e;
      return _regenerator().w(function(_context) {
        for (; ; ) switch (_context.n) {
          case 0:
            if (ctx = _ctx ? Object.assign(_ctx, {
              async: !0
            }) : {
              async: !0
            }, result = schema._zod.run({
              value,
              issues: []
            }, ctx), !(result instanceof Promise)) {
              _context.n = 2;
              break;
            }
            return _context.n = 1, result;
          case 1:
            result = _context.v;
          case 2:
            if (!result.issues.length) {
              _context.n = 3;
              break;
            }
            throw e = new ((params == null ? void 0 : params.Err) ?? _Err)(result.issues.map(function(iss) {
              return finalizeIssue(iss, ctx, config());
            })), captureStackTrace(e, params == null ? void 0 : params.callee), e;
          case 3:
            return _context.a(2, result.value);
        }
      }, _callee);
    }));
    return function(_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  })();
}, parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError), _safeParse = function(_Err) {
  return function(schema, value, _ctx) {
    var ctx = _ctx ? _objectSpread3(_objectSpread3({}, _ctx), {}, {
      async: !1
    }) : {
      async: !1
    }, result = schema._zod.run({
      value,
      issues: []
    }, ctx);
    if (result instanceof Promise)
      throw new $ZodAsyncError();
    return result.issues.length ? {
      success: !1,
      error: new (_Err ?? $ZodError)(result.issues.map(function(iss) {
        return finalizeIssue(iss, ctx, config());
      }))
    } : {
      success: !0,
      data: result.value
    };
  };
}, safeParse = /* @__PURE__ */ _safeParse($ZodRealError), _safeParseAsync = function(_Err) {
  return /* @__PURE__ */ (function() {
    var _ref2 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee2(schema, value, _ctx) {
      var ctx, result;
      return _regenerator().w(function(_context2) {
        for (; ; ) switch (_context2.n) {
          case 0:
            if (ctx = _ctx ? Object.assign(_ctx, {
              async: !0
            }) : {
              async: !0
            }, result = schema._zod.run({
              value,
              issues: []
            }, ctx), !(result instanceof Promise)) {
              _context2.n = 2;
              break;
            }
            return _context2.n = 1, result;
          case 1:
            result = _context2.v;
          case 2:
            return _context2.a(2, result.issues.length ? {
              success: !1,
              error: new _Err(result.issues.map(function(iss) {
                return finalizeIssue(iss, ctx, config());
              }))
            } : {
              success: !0,
              data: result.value
            });
        }
      }, _callee2);
    }));
    return function(_x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  })();
}, safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError), _encode = function(_Err) {
  return function(schema, value, _ctx) {
    var ctx = _ctx ? Object.assign(_ctx, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return _parse(_Err)(schema, value, ctx);
  };
}, encode = /* @__PURE__ */ _encode($ZodRealError), _decode = function(_Err) {
  return function(schema, value, _ctx) {
    return _parse(_Err)(schema, value, _ctx);
  };
}, decode = /* @__PURE__ */ _decode($ZodRealError), _encodeAsync = function(_Err) {
  return /* @__PURE__ */ (function() {
    var _ref3 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee3(schema, value, _ctx) {
      var ctx;
      return _regenerator().w(function(_context3) {
        for (; ; ) switch (_context3.n) {
          case 0:
            return ctx = _ctx ? Object.assign(_ctx, {
              direction: "backward"
            }) : {
              direction: "backward"
            }, _context3.a(2, _parseAsync(_Err)(schema, value, ctx));
        }
      }, _callee3);
    }));
    return function(_x8, _x9, _x0) {
      return _ref3.apply(this, arguments);
    };
  })();
}, encodeAsync = /* @__PURE__ */ _encodeAsync($ZodRealError), _decodeAsync = function(_Err) {
  return /* @__PURE__ */ (function() {
    var _ref4 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee4(schema, value, _ctx) {
      return _regenerator().w(function(_context4) {
        for (; ; ) switch (_context4.n) {
          case 0:
            return _context4.a(2, _parseAsync(_Err)(schema, value, _ctx));
        }
      }, _callee4);
    }));
    return function(_x1, _x10, _x11) {
      return _ref4.apply(this, arguments);
    };
  })();
}, decodeAsync = /* @__PURE__ */ _decodeAsync($ZodRealError), _safeEncode = function(_Err) {
  return function(schema, value, _ctx) {
    var ctx = _ctx ? Object.assign(_ctx, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return _safeParse(_Err)(schema, value, ctx);
  };
}, safeEncode = /* @__PURE__ */ _safeEncode($ZodRealError), _safeDecode = function(_Err) {
  return function(schema, value, _ctx) {
    return _safeParse(_Err)(schema, value, _ctx);
  };
}, safeDecode = /* @__PURE__ */ _safeDecode($ZodRealError), _safeEncodeAsync = function(_Err) {
  return /* @__PURE__ */ (function() {
    var _ref5 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee5(schema, value, _ctx) {
      var ctx;
      return _regenerator().w(function(_context5) {
        for (; ; ) switch (_context5.n) {
          case 0:
            return ctx = _ctx ? Object.assign(_ctx, {
              direction: "backward"
            }) : {
              direction: "backward"
            }, _context5.a(2, _safeParseAsync(_Err)(schema, value, ctx));
        }
      }, _callee5);
    }));
    return function(_x12, _x13, _x14) {
      return _ref5.apply(this, arguments);
    };
  })();
}, safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync($ZodRealError), _safeDecodeAsync = function(_Err) {
  return /* @__PURE__ */ (function() {
    var _ref6 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee6(schema, value, _ctx) {
      return _regenerator().w(function(_context6) {
        for (; ; ) switch (_context6.n) {
          case 0:
            return _context6.a(2, _safeParseAsync(_Err)(schema, value, _ctx));
        }
      }, _callee6);
    }));
    return function(_x15, _x16, _x17) {
      return _ref6.apply(this, arguments);
    };
  })();
}, safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync($ZodRealError);

// ../../node_modules/zod/v4/core/regexes.js
var regexes_exports = {};
__export(regexes_exports, {
  base64: function() {
    return base64;
  },
  base64url: function() {
    return base64url;
  },
  bigint: function() {
    return bigint;
  },
  boolean: function() {
    return boolean;
  },
  browserEmail: function() {
    return browserEmail;
  },
  cidrv4: function() {
    return cidrv4;
  },
  cidrv6: function() {
    return cidrv6;
  },
  cuid: function() {
    return cuid;
  },
  cuid2: function() {
    return cuid2;
  },
  date: function() {
    return date;
  },
  datetime: function() {
    return datetime;
  },
  domain: function() {
    return domain;
  },
  duration: function() {
    return duration;
  },
  e164: function() {
    return e164;
  },
  email: function() {
    return email;
  },
  emoji: function() {
    return emoji;
  },
  extendedDuration: function() {
    return extendedDuration;
  },
  guid: function() {
    return guid;
  },
  hex: function() {
    return hex;
  },
  hostname: function() {
    return hostname;
  },
  html5Email: function() {
    return html5Email;
  },
  idnEmail: function() {
    return idnEmail;
  },
  integer: function() {
    return integer;
  },
  ipv4: function() {
    return ipv4;
  },
  ipv6: function() {
    return ipv6;
  },
  ksuid: function() {
    return ksuid;
  },
  lowercase: function() {
    return lowercase;
  },
  mac: function() {
    return mac;
  },
  md5_base64: function() {
    return md5_base64;
  },
  md5_base64url: function() {
    return md5_base64url;
  },
  md5_hex: function() {
    return md5_hex;
  },
  nanoid: function() {
    return nanoid;
  },
  null: function() {
    return _null;
  },
  number: function() {
    return number;
  },
  rfc5322Email: function() {
    return rfc5322Email;
  },
  sha1_base64: function() {
    return sha1_base64;
  },
  sha1_base64url: function() {
    return sha1_base64url;
  },
  sha1_hex: function() {
    return sha1_hex;
  },
  sha256_base64: function() {
    return sha256_base64;
  },
  sha256_base64url: function() {
    return sha256_base64url;
  },
  sha256_hex: function() {
    return sha256_hex;
  },
  sha384_base64: function() {
    return sha384_base64;
  },
  sha384_base64url: function() {
    return sha384_base64url;
  },
  sha384_hex: function() {
    return sha384_hex;
  },
  sha512_base64: function() {
    return sha512_base64;
  },
  sha512_base64url: function() {
    return sha512_base64url;
  },
  sha512_hex: function() {
    return sha512_hex;
  },
  string: function() {
    return string;
  },
  time: function() {
    return time;
  },
  ulid: function() {
    return ulid;
  },
  undefined: function() {
    return _undefined;
  },
  unicodeEmail: function() {
    return unicodeEmail;
  },
  uppercase: function() {
    return uppercase;
  },
  uuid: function() {
    return uuid;
  },
  uuid4: function() {
    return uuid4;
  },
  uuid6: function() {
    return uuid6;
  },
  uuid7: function() {
    return uuid7;
  },
  xid: function() {
    return xid;
  }
});
var cuid = /^[cC][^\s-]{8,}$/, cuid2 = /^[0-9a-z]+$/, ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, xid = /^[0-9a-vA-V]{20}$/, ksuid = /^[A-Za-z0-9]{27}$/, nanoid = /^[a-zA-Z0-9_-]{21}$/, duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, uuid = function(version2) {
  return version2 ? new RegExp("^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-".concat(version2, "[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$")) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
}, uuid4 = /* @__PURE__ */ uuid(4), uuid6 = /* @__PURE__ */ uuid(6), uuid7 = /* @__PURE__ */ uuid(7), email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, unicodeEmail = /^(?:[\0-\x08\x0E-\x1F!#-\?A-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){1,64}@(?:[\0-\x08\x0E-\x1F!-\?A-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){1,255}$/, idnEmail = unicodeEmail, browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, _emoji = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, mac = function(delimiter) {
  var escapedDelim = escapeRegex(delimiter ?? ":");
  return new RegExp("^(?:[0-9A-F]{2}".concat(escapedDelim, "){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}").concat(escapedDelim, "){5}[0-9a-f]{2}$"));
}, cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, base64url = /^[A-Za-z0-9_-]*$/, hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, e164 = /^\+(?:[0-9]){6,14}[0-9]$/, dateSource = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", date = /* @__PURE__ */ new RegExp("^".concat(dateSource, "$"));
function timeSource(args) {
  var hhmm = "(?:[01]\\d|2[0-3]):[0-5]\\d", regex = typeof args.precision == "number" ? args.precision === -1 ? "".concat(hhmm) : args.precision === 0 ? "".concat(hhmm, ":[0-5]\\d") : "".concat(hhmm, ":[0-5]\\d\\.\\d{").concat(args.precision, "}") : "".concat(hhmm, "(?::[0-5]\\d(?:\\.\\d+)?)?");
  return regex;
}
function time(args) {
  return new RegExp("^".concat(timeSource(args), "$"));
}
function datetime(args) {
  var time3 = timeSource({
    precision: args.precision
  }), opts = ["Z"];
  args.local && opts.push(""), args.offset && opts.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  var timeRegex = "".concat(time3, "(?:").concat(opts.join("|"), ")");
  return new RegExp("^".concat(dateSource, "T(?:").concat(timeRegex, ")$"));
}
var string = function(params) {
  var regex = params ? "[\\s\\S]{".concat((params == null ? void 0 : params.minimum) ?? 0, ",").concat((params == null ? void 0 : params.maximum) ?? "", "}") : "[\\s\\S]*";
  return new RegExp("^".concat(regex, "$"));
}, bigint = /^-?\d+n?$/, integer = /^-?\d+$/, number = /^-?\d+(?:\.\d+)?/, boolean = /^(?:true|false)$/i, _null = /^null$/i;
var _undefined = /^undefined$/i;
var lowercase = /^[^A-Z]*$/, uppercase = /^[^a-z]*$/, hex = /^[0-9a-fA-F]*$/;
function fixedBase64(bodyLength, padding) {
  return new RegExp("^[A-Za-z0-9+/]{".concat(bodyLength, "}").concat(padding, "$"));
}
function fixedBase64url(length) {
  return new RegExp("^[A-Za-z0-9_-]{".concat(length, "}$"));
}
var md5_hex = /^[0-9a-fA-F]{32}$/, md5_base64 = /* @__PURE__ */ fixedBase64(22, "=="), md5_base64url = /* @__PURE__ */ fixedBase64url(22), sha1_hex = /^[0-9a-fA-F]{40}$/, sha1_base64 = /* @__PURE__ */ fixedBase64(27, "="), sha1_base64url = /* @__PURE__ */ fixedBase64url(27), sha256_hex = /^[0-9a-fA-F]{64}$/, sha256_base64 = /* @__PURE__ */ fixedBase64(43, "="), sha256_base64url = /* @__PURE__ */ fixedBase64url(43), sha384_hex = /^[0-9a-fA-F]{96}$/, sha384_base64 = /* @__PURE__ */ fixedBase64(64, ""), sha384_base64url = /* @__PURE__ */ fixedBase64url(64), sha512_hex = /^[0-9a-fA-F]{128}$/, sha512_base64 = /* @__PURE__ */ fixedBase64(86, "=="), sha512_base64url = /* @__PURE__ */ fixedBase64url(86);

// ../../node_modules/zod/v4/core/checks.js
function _toConsumableArray4(r) {
  return _arrayWithoutHoles4(r) || _iterableToArray4(r) || _unsupportedIterableToArray7(r) || _nonIterableSpread4();
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray4(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles4(r) {
  if (Array.isArray(r)) return _arrayLikeToArray7(r);
}
function ownKeys4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys4(Object(t), !0).forEach(function(r2) {
      _defineProperty4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty4(e, r, t) {
  return (r = _toPropertyKey5(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey5(t) {
  var i = _toPrimitive5(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive5(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _slicedToArray4(r, e) {
  return _arrayWithHoles4(r) || _iterableToArrayLimit4(r, e) || _unsupportedIterableToArray7(r, e) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray7(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray7(r, a) : void 0;
  }
}
function _arrayLikeToArray7(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit4(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles4(r) {
  if (Array.isArray(r)) return r;
}
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", function(inst, def) {
  var _a2;
  inst._zod ?? (inst._zod = {}), inst._zod.def = def, (_a2 = inst._zod).onattach ?? (_a2.onattach = []);
}), numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", function(inst, def) {
  $ZodCheck.init(inst, def);
  var origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push(function(inst2) {
    var bag = inst2._zod.bag, curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    def.value < curr && (def.inclusive ? bag.maximum = def.value : bag.exclusiveMaximum = def.value);
  }), inst._zod.check = function(payload) {
    (def.inclusive ? payload.value <= def.value : payload.value < def.value) || payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", function(inst, def) {
  $ZodCheck.init(inst, def);
  var origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push(function(inst2) {
    var bag = inst2._zod.bag, curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    def.value > curr && (def.inclusive ? bag.minimum = def.value : bag.exclusiveMinimum = def.value);
  }), inst._zod.check = function(payload) {
    (def.inclusive ? payload.value >= def.value : payload.value > def.value) || payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", function(inst, def) {
  $ZodCheck.init(inst, def), inst._zod.onattach.push(function(inst2) {
    var _a2;
    (_a2 = inst2._zod.bag).multipleOf ?? (_a2.multipleOf = def.value);
  }), inst._zod.check = function(payload) {
    if (typeof payload.value != typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
    var isMultiple = typeof payload.value == "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
    isMultiple || payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", function(inst, def) {
  var _def$format;
  $ZodCheck.init(inst, def), def.format = def.format || "float64";
  var isInt = (_def$format = def.format) === null || _def$format === void 0 ? void 0 : _def$format.includes("int"), origin = isInt ? "int" : "number", _util$NUMBER_FORMAT_R = _slicedToArray4(NUMBER_FORMAT_RANGES[def.format], 2), minimum = _util$NUMBER_FORMAT_R[0], maximum = _util$NUMBER_FORMAT_R[1];
  inst._zod.onattach.push(function(inst2) {
    var bag = inst2._zod.bag;
    bag.format = def.format, bag.minimum = minimum, bag.maximum = maximum, isInt && (bag.pattern = integer);
  }), inst._zod.check = function(payload) {
    var input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: !1,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        input > 0 ? payload.issues.push({
          input,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst,
          origin,
          continue: !def.abort
        }) : payload.issues.push({
          input,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst,
          origin,
          continue: !def.abort
        });
        return;
      }
    }
    input < minimum && payload.issues.push({
      origin: "number",
      input,
      code: "too_small",
      minimum,
      inclusive: !0,
      inst,
      continue: !def.abort
    }), input > maximum && payload.issues.push({
      origin: "number",
      input,
      code: "too_big",
      maximum,
      inst
    });
  };
}), $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", function(inst, def) {
  $ZodCheck.init(inst, def);
  var _util$BIGINT_FORMAT_R = _slicedToArray4(BIGINT_FORMAT_RANGES[def.format], 2), minimum = _util$BIGINT_FORMAT_R[0], maximum = _util$BIGINT_FORMAT_R[1];
  inst._zod.onattach.push(function(inst2) {
    var bag = inst2._zod.bag;
    bag.format = def.format, bag.minimum = minimum, bag.maximum = maximum;
  }), inst._zod.check = function(payload) {
    var input = payload.value;
    input < minimum && payload.issues.push({
      origin: "bigint",
      input,
      code: "too_small",
      minimum,
      inclusive: !0,
      inst,
      continue: !def.abort
    }), input > maximum && payload.issues.push({
      origin: "bigint",
      input,
      code: "too_big",
      maximum,
      inst
    });
  };
}), $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", function(inst, def) {
  var _a2;
  $ZodCheck.init(inst, def), (_a2 = inst._zod.def).when ?? (_a2.when = function(payload) {
    var val = payload.value;
    return !nullish(val) && val.size !== void 0;
  }), inst._zod.onattach.push(function(inst2) {
    var curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    def.maximum < curr && (inst2._zod.bag.maximum = def.maximum);
  }), inst._zod.check = function(payload) {
    var input = payload.value, size = input.size;
    size <= def.maximum || payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_big",
      maximum: def.maximum,
      inclusive: !0,
      input,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", function(inst, def) {
  var _a2;
  $ZodCheck.init(inst, def), (_a2 = inst._zod.def).when ?? (_a2.when = function(payload) {
    var val = payload.value;
    return !nullish(val) && val.size !== void 0;
  }), inst._zod.onattach.push(function(inst2) {
    var curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    def.minimum > curr && (inst2._zod.bag.minimum = def.minimum);
  }), inst._zod.check = function(payload) {
    var input = payload.value, size = input.size;
    size >= def.minimum || payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_small",
      minimum: def.minimum,
      inclusive: !0,
      input,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", function(inst, def) {
  var _a2;
  $ZodCheck.init(inst, def), (_a2 = inst._zod.def).when ?? (_a2.when = function(payload) {
    var val = payload.value;
    return !nullish(val) && val.size !== void 0;
  }), inst._zod.onattach.push(function(inst2) {
    var bag = inst2._zod.bag;
    bag.minimum = def.size, bag.maximum = def.size, bag.size = def.size;
  }), inst._zod.check = function(payload) {
    var input = payload.value, size = input.size;
    if (size !== def.size) {
      var tooBig = size > def.size;
      payload.issues.push(_objectSpread4(_objectSpread4({
        origin: getSizableOrigin(input)
      }, tooBig ? {
        code: "too_big",
        maximum: def.size
      } : {
        code: "too_small",
        minimum: def.size
      }), {}, {
        inclusive: !0,
        exact: !0,
        input: payload.value,
        inst,
        continue: !def.abort
      }));
    }
  };
}), $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", function(inst, def) {
  var _a2;
  $ZodCheck.init(inst, def), (_a2 = inst._zod.def).when ?? (_a2.when = function(payload) {
    var val = payload.value;
    return !nullish(val) && val.length !== void 0;
  }), inst._zod.onattach.push(function(inst2) {
    var curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    def.maximum < curr && (inst2._zod.bag.maximum = def.maximum);
  }), inst._zod.check = function(payload) {
    var input = payload.value, length = input.length;
    if (!(length <= def.maximum)) {
      var origin = getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_big",
        maximum: def.maximum,
        inclusive: !0,
        input,
        inst,
        continue: !def.abort
      });
    }
  };
}), $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", function(inst, def) {
  var _a2;
  $ZodCheck.init(inst, def), (_a2 = inst._zod.def).when ?? (_a2.when = function(payload) {
    var val = payload.value;
    return !nullish(val) && val.length !== void 0;
  }), inst._zod.onattach.push(function(inst2) {
    var curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    def.minimum > curr && (inst2._zod.bag.minimum = def.minimum);
  }), inst._zod.check = function(payload) {
    var input = payload.value, length = input.length;
    if (!(length >= def.minimum)) {
      var origin = getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_small",
        minimum: def.minimum,
        inclusive: !0,
        input,
        inst,
        continue: !def.abort
      });
    }
  };
}), $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", function(inst, def) {
  var _a2;
  $ZodCheck.init(inst, def), (_a2 = inst._zod.def).when ?? (_a2.when = function(payload) {
    var val = payload.value;
    return !nullish(val) && val.length !== void 0;
  }), inst._zod.onattach.push(function(inst2) {
    var bag = inst2._zod.bag;
    bag.minimum = def.length, bag.maximum = def.length, bag.length = def.length;
  }), inst._zod.check = function(payload) {
    var input = payload.value, length = input.length;
    if (length !== def.length) {
      var origin = getLengthableOrigin(input), tooBig = length > def.length;
      payload.issues.push(_objectSpread4(_objectSpread4({
        origin
      }, tooBig ? {
        code: "too_big",
        maximum: def.length
      } : {
        code: "too_small",
        minimum: def.length
      }), {}, {
        inclusive: !0,
        exact: !0,
        input: payload.value,
        inst,
        continue: !def.abort
      }));
    }
  };
}), $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", function(inst, def) {
  var _a2, _b;
  $ZodCheck.init(inst, def), inst._zod.onattach.push(function(inst2) {
    var bag = inst2._zod.bag;
    bag.format = def.format, def.pattern && (bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set()), bag.patterns.add(def.pattern));
  }), def.pattern ? (_a2 = inst._zod).check ?? (_a2.check = function(payload) {
    def.pattern.lastIndex = 0, !def.pattern.test(payload.value) && payload.issues.push(_objectSpread4(_objectSpread4({
      origin: "string",
      code: "invalid_format",
      format: def.format,
      input: payload.value
    }, def.pattern ? {
      pattern: def.pattern.toString()
    } : {}), {}, {
      inst,
      continue: !def.abort
    }));
  }) : (_b = inst._zod).check ?? (_b.check = function() {
  });
}), $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", function(inst, def) {
  $ZodCheckStringFormat.init(inst, def), inst._zod.check = function(payload) {
    def.pattern.lastIndex = 0, !def.pattern.test(payload.value) && payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", function(inst, def) {
  def.pattern ?? (def.pattern = lowercase), $ZodCheckStringFormat.init(inst, def);
}), $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", function(inst, def) {
  def.pattern ?? (def.pattern = uppercase), $ZodCheckStringFormat.init(inst, def);
}), $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", function(inst, def) {
  $ZodCheck.init(inst, def);
  var escapedRegex = escapeRegex(def.includes), pattern = new RegExp(typeof def.position == "number" ? "^.{".concat(def.position, "}").concat(escapedRegex) : escapedRegex);
  def.pattern = pattern, inst._zod.onattach.push(function(inst2) {
    var bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set()), bag.patterns.add(pattern);
  }), inst._zod.check = function(payload) {
    payload.value.includes(def.includes, def.position) || payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", function(inst, def) {
  $ZodCheck.init(inst, def);
  var pattern = new RegExp("^".concat(escapeRegex(def.prefix), ".*"));
  def.pattern ?? (def.pattern = pattern), inst._zod.onattach.push(function(inst2) {
    var bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set()), bag.patterns.add(pattern);
  }), inst._zod.check = function(payload) {
    payload.value.startsWith(def.prefix) || payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", function(inst, def) {
  $ZodCheck.init(inst, def);
  var pattern = new RegExp(".*".concat(escapeRegex(def.suffix), "$"));
  def.pattern ?? (def.pattern = pattern), inst._zod.onattach.push(function(inst2) {
    var bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set()), bag.patterns.add(pattern);
  }), inst._zod.check = function(payload) {
    payload.value.endsWith(def.suffix) || payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function handleCheckPropertyResult(result, payload, property) {
  if (result.issues.length) {
    var _payload$issues;
    (_payload$issues = payload.issues).push.apply(_payload$issues, _toConsumableArray4(prefixIssues(property, result.issues)));
  }
}
var $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", function(inst, def) {
  $ZodCheck.init(inst, def), inst._zod.check = function(payload) {
    var result = def.schema._zod.run({
      value: payload.value[def.property],
      issues: []
    }, {});
    if (result instanceof Promise)
      return result.then(function(result2) {
        return handleCheckPropertyResult(result2, payload, def.property);
      });
    handleCheckPropertyResult(result, payload, def.property);
  };
}), $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", function(inst, def) {
  $ZodCheck.init(inst, def);
  var mimeSet = new Set(def.mime);
  inst._zod.onattach.push(function(inst2) {
    inst2._zod.bag.mime = def.mime;
  }), inst._zod.check = function(payload) {
    mimeSet.has(payload.value.type) || payload.issues.push({
      code: "invalid_value",
      values: def.mime,
      input: payload.value.type,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", function(inst, def) {
  $ZodCheck.init(inst, def), inst._zod.check = function(payload) {
    payload.value = def.tx(payload.value);
  };
});

// ../../node_modules/zod/v4/core/doc.js
function _construct2(t, e, r) {
  if (_isNativeReflectConstruct2()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf2(p, r.prototype), p;
}
function _setPrototypeOf2(t, e) {
  return _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf2(t, e);
}
function _isNativeReflectConstruct2() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct2 = function() {
    return !!t;
  })();
}
function _createForOfIteratorHelper5(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray8(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _toConsumableArray5(r) {
  return _arrayWithoutHoles5(r) || _iterableToArray5(r) || _unsupportedIterableToArray8(r) || _nonIterableSpread5();
}
function _nonIterableSpread5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray8(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray8(r, a) : void 0;
  }
}
function _iterableToArray5(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles5(r) {
  if (Array.isArray(r)) return _arrayLikeToArray8(r);
}
function _arrayLikeToArray8(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck4(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties4(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey6(o.key), o);
  }
}
function _createClass4(e, r, t) {
  return r && _defineProperties4(e.prototype, r), t && _defineProperties4(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _toPropertyKey6(t) {
  var i = _toPrimitive6(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive6(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var Doc = /* @__PURE__ */ (function() {
  function Doc2() {
    var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    _classCallCheck4(this, Doc2), this.content = [], this.indent = 0, this && (this.args = args);
  }
  return _createClass4(Doc2, [{
    key: "indented",
    value: function(fn) {
      this.indent += 1, fn(this), this.indent -= 1;
    }
  }, {
    key: "write",
    value: function(arg) {
      var _this = this;
      if (typeof arg == "function") {
        arg(this, {
          execution: "sync"
        }), arg(this, {
          execution: "async"
        });
        return;
      }
      var content = arg, lines = content.split("\n").filter(function(x) {
        return x;
      }), minIndent = Math.min.apply(Math, _toConsumableArray5(lines.map(function(x) {
        return x.length - x.trimStart().length;
      }))), dedented = lines.map(function(x) {
        return x.slice(minIndent);
      }).map(function(x) {
        return " ".repeat(_this.indent * 2) + x;
      }), _iterator = _createForOfIteratorHelper5(dedented), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var line = _step.value;
          this.content.push(line);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "compile",
    value: function() {
      var F = Function, args = this === null || this === void 0 ? void 0 : this.args, content = (this === null || this === void 0 ? void 0 : this.content) ?? [""], lines = _toConsumableArray5(content.map(function(x) {
        return "  ".concat(x);
      }));
      return _construct2(F, _toConsumableArray5(args).concat([lines.join("\n")]));
    }
  }]);
})();

// ../../node_modules/zod/v4/core/versions.js
var version = {
  major: 4,
  minor: 1,
  patch: 13
};

// ../../node_modules/zod/v4/core/schemas.js
function _slicedToArray5(r, e) {
  return _arrayWithHoles5(r) || _iterableToArrayLimit5(r, e) || _unsupportedIterableToArray9(r, e) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit5(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles5(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys5(Object(t), !0).forEach(function(r2) {
      _defineProperty5(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty5(e, r, t) {
  return (r = _toPropertyKey7(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey7(t) {
  var i = _toPrimitive7(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive7(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _regenerator2() {
  var e, t, r = typeof Symbol == "function" ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
  function i(r2, n2, o2, i2) {
    var c2 = n2 && n2.prototype instanceof Generator ? n2 : Generator, u2 = Object.create(c2.prototype);
    return _regeneratorDefine22(u2, "_invoke", (function(r3, n3, o3) {
      var i3, c3, u3, f2 = 0, p = o3 || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function(t2, r4) {
        return i3 = t2, c3 = 0, u3 = e, G.n = r4, a;
      } };
      function d(r4, n4) {
        for (c3 = r4, u3 = n4, t = 0; !y && f2 && !o4 && t < p.length; t++) {
          var o4, i4 = p[t], d2 = G.p, l = i4[2];
          r4 > 3 ? (o4 = l === n4) && (u3 = i4[(c3 = i4[4]) ? 5 : (c3 = 3, 3)], i4[4] = i4[5] = e) : i4[0] <= d2 && ((o4 = r4 < 2 && d2 < i4[1]) ? (c3 = 0, G.v = n4, G.n = i4[1]) : d2 < l && (o4 = r4 < 3 || i4[0] > n4 || n4 > l) && (i4[4] = r4, i4[5] = n4, G.n = l, c3 = 0));
        }
        if (o4 || r4 > 1) return a;
        throw y = !0, n4;
      }
      return function(o4, p2, l) {
        if (f2 > 1) throw TypeError("Generator is already running");
        for (y && p2 === 1 && d(p2, l), c3 = p2, u3 = l; (t = c3 < 2 ? e : u3) || !y; ) {
          i3 || (c3 ? c3 < 3 ? (c3 > 1 && (G.n = -1), d(c3, u3)) : G.n = u3 : G.v = u3);
          try {
            if (f2 = 2, i3) {
              if (c3 || (o4 = "next"), t = i3[o4]) {
                if (!(t = t.call(i3, u3))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u3 = t.value, c3 < 2 && (c3 = 0);
              } else c3 === 1 && (t = i3.return) && t.call(i3), c3 < 2 && (u3 = TypeError("The iterator does not provide a '" + o4 + "' method"), c3 = 1);
              i3 = e;
            } else if ((t = (y = G.n < 0) ? u3 : r3.call(n3, G)) !== a) break;
          } catch (t2) {
            i3 = e, c3 = 1, u3 = t2;
          } finally {
            f2 = 1;
          }
        }
        return { value: t, done: y };
      };
    })(r2, o2, i2), !0), u2;
  }
  var a = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine22(t = {}, n, function() {
    return this;
  }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e2) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e2, GeneratorFunctionPrototype) : (e2.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine22(e2, o, "GeneratorFunction")), e2.prototype = Object.create(u), e2;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine22(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine22(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine22(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine22(u), _regeneratorDefine22(u, o, "Generator"), _regeneratorDefine22(u, n, function() {
    return this;
  }), _regeneratorDefine22(u, "toString", function() {
    return "[object Generator]";
  }), (_regenerator2 = function() {
    return { w: i, m: f };
  })();
}
function _regeneratorDefine22(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e2) {
    i = 0;
  }
  _regeneratorDefine22 = function(e2, r2, n2, t2) {
    function o(r3, n3) {
      _regeneratorDefine22(e2, r3, function(e3) {
        return this._invoke(r3, n3, e3);
      });
    }
    r2 ? i ? i(e2, r2, { value: n2, enumerable: !t2, configurable: !t2, writable: !t2 }) : e2[r2] = n2 : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine22(e, r, n, t);
}
function asyncGeneratorStep2(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator2(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep2(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep2(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper6(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray9(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _toConsumableArray6(r) {
  return _arrayWithoutHoles6(r) || _iterableToArray6(r) || _unsupportedIterableToArray9(r) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray9(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray9(r, a) : void 0;
  }
}
function _iterableToArray6(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles6(r) {
  if (Array.isArray(r)) return _arrayLikeToArray9(r);
}
function _arrayLikeToArray9(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", function(inst, def) {
  var _a2;
  inst ?? (inst = {}), inst._zod.def = def, inst._zod.bag = inst._zod.bag || {}, inst._zod.version = version;
  var checks = _toConsumableArray6(inst._zod.def.checks ?? []);
  inst._zod.traits.has("$ZodCheck") && checks.unshift(inst);
  var _iterator = _createForOfIteratorHelper6(checks), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var ch = _step.value, _iterator3 = _createForOfIteratorHelper6(ch._zod.onattach), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var fn = _step3.value;
          fn(inst);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (checks.length === 0) {
    var _inst$_zod$deferred;
    (_a2 = inst._zod).deferred ?? (_a2.deferred = []), (_inst$_zod$deferred = inst._zod.deferred) === null || _inst$_zod$deferred === void 0 || _inst$_zod$deferred.push(function() {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    var runChecks = function(payload, checks2, ctx) {
      var isAborted = aborted(payload), asyncResult, _iterator2 = _createForOfIteratorHelper6(checks2), _step2;
      try {
        var _loop = function() {
          var ch2 = _step2.value;
          if (ch2._zod.def.when) {
            var shouldRun = ch2._zod.def.when(payload);
            if (!shouldRun) return 0;
          } else if (isAborted)
            return 0;
          var currLen = payload.issues.length, _ = ch2._zod.check(payload);
          if (_ instanceof Promise && (ctx == null ? void 0 : ctx.async) === !1)
            throw new $ZodAsyncError();
          if (asyncResult || _ instanceof Promise)
            asyncResult = (asyncResult ?? Promise.resolve()).then(/* @__PURE__ */ _asyncToGenerator2(/* @__PURE__ */ _regenerator2().m(function _callee() {
              var nextLen2;
              return _regenerator2().w(function(_context) {
                for (; ; ) switch (_context.n) {
                  case 0:
                    return _context.n = 1, _;
                  case 1:
                    if (nextLen2 = payload.issues.length, nextLen2 !== currLen) {
                      _context.n = 2;
                      break;
                    }
                    return _context.a(2);
                  case 2:
                    isAborted || (isAborted = aborted(payload, currLen));
                  case 3:
                    return _context.a(2);
                }
              }, _callee);
            })));
          else {
            var nextLen = payload.issues.length;
            if (nextLen === currLen) return 0;
            isAborted || (isAborted = aborted(payload, currLen));
          }
        }, _ret;
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; )
          _ret = _loop();
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return asyncResult ? asyncResult.then(function() {
        return payload;
      }) : payload;
    }, handleCanaryResult = function(canary, payload, ctx) {
      if (aborted(canary))
        return canary.aborted = !0, canary;
      var checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === !1) throw new $ZodAsyncError();
        return checkResult.then(function(checkResult2) {
          return inst._zod.parse(checkResult2, ctx);
        });
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = function(payload, ctx) {
      if (ctx.skipChecks)
        return inst._zod.parse(payload, ctx);
      if (ctx.direction === "backward") {
        var canary = inst._zod.parse({
          value: payload.value,
          issues: []
        }, _objectSpread5(_objectSpread5({}, ctx), {}, {
          skipChecks: !0
        }));
        return canary instanceof Promise ? canary.then(function(canary2) {
          return handleCanaryResult(canary2, payload, ctx);
        }) : handleCanaryResult(canary, payload, ctx);
      }
      var result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === !1) throw new $ZodAsyncError();
        return result.then(function(result2) {
          return runChecks(result2, checks, ctx);
        });
      }
      return runChecks(result, checks, ctx);
    };
  }
  inst["~standard"] = {
    validate: function(value) {
      try {
        var _r$error, r = safeParse(inst, value);
        return r.success ? {
          value: r.data
        } : {
          issues: (_r$error = r.error) === null || _r$error === void 0 ? void 0 : _r$error.issues
        };
      } catch (_) {
        return safeParseAsync(inst, value).then(function(r2) {
          var _r$error2;
          return r2.success ? {
            value: r2.data
          } : {
            issues: (_r$error2 = r2.error) === null || _r$error2 === void 0 ? void 0 : _r$error2.issues
          };
        });
      }
    },
    vendor: "zod",
    version: 1
  };
}), $ZodString = /* @__PURE__ */ $constructor("$ZodString", function(inst, def) {
  var _inst$_zod$bag;
  $ZodType.init(inst, def), inst._zod.pattern = _toConsumableArray6((inst == null || (_inst$_zod$bag = inst._zod.bag) === null || _inst$_zod$bag === void 0 ? void 0 : _inst$_zod$bag.patterns) ?? []).pop() ?? string(inst._zod.bag), inst._zod.parse = function(payload, _) {
    if (def.coerce) try {
      payload.value = String(payload.value);
    } catch (_2) {
    }
    return typeof payload.value == "string" || payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    }), payload;
  };
}), $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", function(inst, def) {
  $ZodCheckStringFormat.init(inst, def), $ZodString.init(inst, def);
}), $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", function(inst, def) {
  def.pattern ?? (def.pattern = guid), $ZodStringFormat.init(inst, def);
}), $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", function(inst, def) {
  if (def.version) {
    var versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }, v = versionMap[def.version];
    if (v === void 0) throw new Error('Invalid UUID version: "'.concat(def.version, '"'));
    def.pattern ?? (def.pattern = uuid(v));
  } else def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
}), $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", function(inst, def) {
  def.pattern ?? (def.pattern = email), $ZodStringFormat.init(inst, def);
}), $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", function(inst, def) {
  $ZodStringFormat.init(inst, def), inst._zod.check = function(payload) {
    try {
      var trimmed = payload.value.trim(), url2 = new URL(trimmed);
      def.hostname && (def.hostname.lastIndex = 0, def.hostname.test(url2.hostname) || payload.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: def.hostname.source,
        input: payload.value,
        inst,
        continue: !def.abort
      })), def.protocol && (def.protocol.lastIndex = 0, def.protocol.test(url2.protocol.endsWith(":") ? url2.protocol.slice(0, -1) : url2.protocol) || payload.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: def.protocol.source,
        input: payload.value,
        inst,
        continue: !def.abort
      })), def.normalize ? payload.value = url2.href : payload.value = trimmed;
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
}), $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", function(inst, def) {
  def.pattern ?? (def.pattern = emoji()), $ZodStringFormat.init(inst, def);
}), $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", function(inst, def) {
  def.pattern ?? (def.pattern = nanoid), $ZodStringFormat.init(inst, def);
}), $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", function(inst, def) {
  def.pattern ?? (def.pattern = cuid), $ZodStringFormat.init(inst, def);
}), $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", function(inst, def) {
  def.pattern ?? (def.pattern = cuid2), $ZodStringFormat.init(inst, def);
}), $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", function(inst, def) {
  def.pattern ?? (def.pattern = ulid), $ZodStringFormat.init(inst, def);
}), $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", function(inst, def) {
  def.pattern ?? (def.pattern = xid), $ZodStringFormat.init(inst, def);
}), $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", function(inst, def) {
  def.pattern ?? (def.pattern = ksuid), $ZodStringFormat.init(inst, def);
}), $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", function(inst, def) {
  def.pattern ?? (def.pattern = datetime(def)), $ZodStringFormat.init(inst, def);
}), $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", function(inst, def) {
  def.pattern ?? (def.pattern = date), $ZodStringFormat.init(inst, def);
}), $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", function(inst, def) {
  def.pattern ?? (def.pattern = time(def)), $ZodStringFormat.init(inst, def);
}), $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", function(inst, def) {
  def.pattern ?? (def.pattern = duration), $ZodStringFormat.init(inst, def);
}), $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", function(inst, def) {
  def.pattern ?? (def.pattern = ipv4), $ZodStringFormat.init(inst, def), inst._zod.bag.format = "ipv4";
}), $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", function(inst, def) {
  def.pattern ?? (def.pattern = ipv6), $ZodStringFormat.init(inst, def), inst._zod.bag.format = "ipv6", inst._zod.check = function(payload) {
    try {
      new URL("http://[".concat(payload.value, "]"));
    } catch (_unused) {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
}), $ZodMAC = /* @__PURE__ */ $constructor("$ZodMAC", function(inst, def) {
  def.pattern ?? (def.pattern = mac(def.delimiter)), $ZodStringFormat.init(inst, def), inst._zod.bag.format = "mac";
}), $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", function(inst, def) {
  def.pattern ?? (def.pattern = cidrv4), $ZodStringFormat.init(inst, def);
}), $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", function(inst, def) {
  def.pattern ?? (def.pattern = cidrv6), $ZodStringFormat.init(inst, def), inst._zod.check = function(payload) {
    var parts = payload.value.split("/");
    try {
      if (parts.length !== 2) throw new Error();
      var _parts = _slicedToArray5(parts, 2), address = _parts[0], prefix = _parts[1];
      if (!prefix) throw new Error();
      var prefixNum = Number(prefix);
      if ("".concat(prefixNum) !== prefix) throw new Error();
      if (prefixNum < 0 || prefixNum > 128) throw new Error();
      new URL("http://[".concat(address, "]"));
    } catch (_unused2) {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "") return !0;
  if (data.length % 4 !== 0) return !1;
  try {
    return atob(data), !0;
  } catch (_unused3) {
    return !1;
  }
}
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", function(inst, def) {
  def.pattern ?? (def.pattern = base64), $ZodStringFormat.init(inst, def), inst._zod.bag.contentEncoding = "base64", inst._zod.check = function(payload) {
    isValidBase64(payload.value) || payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function isValidBase64URL(data) {
  if (!base64url.test(data)) return !1;
  var base643 = data.replace(/[-_]/g, function(c) {
    return c === "-" ? "+" : "/";
  }), padded = base643.padEnd(Math.ceil(base643.length / 4) * 4, "=");
  return isValidBase64(padded);
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", function(inst, def) {
  def.pattern ?? (def.pattern = base64url), $ZodStringFormat.init(inst, def), inst._zod.bag.contentEncoding = "base64url", inst._zod.check = function(payload) {
    isValidBase64URL(payload.value) || payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", function(inst, def) {
  def.pattern ?? (def.pattern = e164), $ZodStringFormat.init(inst, def);
});
function isValidJWT(token) {
  var algorithm = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  try {
    var tokensParts = token.split(".");
    if (tokensParts.length !== 3) return !1;
    var _tokensParts = _slicedToArray5(tokensParts, 1), header = _tokensParts[0];
    if (!header) return !1;
    var parsedHeader = JSON.parse(atob(header));
    return !("typ" in parsedHeader && (parsedHeader == null ? void 0 : parsedHeader.typ) !== "JWT" || !parsedHeader.alg || algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm));
  } catch (_unused4) {
    return !1;
  }
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", function(inst, def) {
  $ZodStringFormat.init(inst, def), inst._zod.check = function(payload) {
    isValidJWT(payload.value, def.alg) || payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", function(inst, def) {
  $ZodStringFormat.init(inst, def), inst._zod.check = function(payload) {
    def.fn(payload.value) || payload.issues.push({
      code: "invalid_format",
      format: def.format,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.pattern = inst._zod.bag.pattern ?? number, inst._zod.parse = function(payload, _ctx) {
    if (def.coerce) try {
      payload.value = Number(payload.value);
    } catch (_) {
    }
    var input = payload.value;
    if (typeof input == "number" && !Number.isNaN(input) && Number.isFinite(input))
      return payload;
    var received = typeof input == "number" ? Number.isNaN(input) ? "NaN" : Number.isFinite(input) ? void 0 : "Infinity" : void 0;
    return payload.issues.push(_objectSpread5({
      expected: "number",
      code: "invalid_type",
      input,
      inst
    }, received ? {
      received
    } : {})), payload;
  };
}), $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", function(inst, def) {
  $ZodCheckNumberFormat.init(inst, def), $ZodNumber.init(inst, def);
}), $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.pattern = boolean, inst._zod.parse = function(payload, _ctx) {
    if (def.coerce) try {
      payload.value = !!payload.value;
    } catch (_) {
    }
    var input = payload.value;
    return typeof input == "boolean" || payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
}), $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.pattern = bigint, inst._zod.parse = function(payload, _ctx) {
    if (def.coerce) try {
      payload.value = BigInt(payload.value);
    } catch (_) {
    }
    return typeof payload.value == "bigint" || payload.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: payload.value,
      inst
    }), payload;
  };
}), $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigIntFormat", function(inst, def) {
  $ZodCheckBigIntFormat.init(inst, def), $ZodBigInt.init(inst, def);
}), $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, _ctx) {
    var input = payload.value;
    return typeof input == "symbol" || payload.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
}), $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.pattern = _undefined, inst._zod.values = /* @__PURE__ */ new Set([void 0]), inst._zod.optin = "optional", inst._zod.optout = "optional", inst._zod.parse = function(payload, _ctx) {
    var input = payload.value;
    return typeof input > "u" || payload.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
}), $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.pattern = _null, inst._zod.values = /* @__PURE__ */ new Set([null]), inst._zod.parse = function(payload, _ctx) {
    var input = payload.value;
    return input === null || payload.issues.push({
      expected: "null",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
}), $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload) {
    return payload;
  };
}), $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload) {
    return payload;
  };
}), $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, _ctx) {
    return payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    }), payload;
  };
}), $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, _ctx) {
    var input = payload.value;
    return typeof input > "u" || payload.issues.push({
      expected: "void",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
}), $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, _ctx) {
    if (def.coerce)
      try {
        payload.value = new Date(payload.value);
      } catch (_err) {
      }
    var input = payload.value, isDate = input instanceof Date, isValidDate = isDate && !Number.isNaN(input.getTime());
    return isValidDate || payload.issues.push(_objectSpread5(_objectSpread5({
      expected: "date",
      code: "invalid_type",
      input
    }, isDate ? {
      received: "Invalid Date"
    } : {}), {}, {
      inst
    })), payload;
  };
});
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    var _final$issues;
    (_final$issues = final.issues).push.apply(_final$issues, _toConsumableArray6(prefixIssues(index, result.issues)));
  }
  final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, ctx) {
    var input = payload.value;
    if (!Array.isArray(input))
      return payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      }), payload;
    payload.value = Array(input.length);
    for (var proms = [], _loop2 = function(i2) {
      var item = input[i2], result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      result instanceof Promise ? proms.push(result.then(function(result2) {
        return handleArrayResult(result2, payload, i2);
      })) : handleArrayResult(result, payload, i2);
    }, i = 0; i < input.length; i++)
      _loop2(i);
    return proms.length ? Promise.all(proms).then(function() {
      return payload;
    }) : payload;
  };
});
function handlePropertyResult(result, final, key, input) {
  if (result.issues.length) {
    var _final$issues2;
    (_final$issues2 = final.issues).push.apply(_final$issues2, _toConsumableArray6(prefixIssues(key, result.issues)));
  }
  result.value === void 0 ? key in input && (final.value[key] = void 0) : final.value[key] = result.value;
}
function normalizeDef(def) {
  for (var keys = Object.keys(def.shape), _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var _def$shape, k = _keys[_i];
    if (!((_def$shape = def.shape) !== null && _def$shape !== void 0 && (_def$shape = _def$shape[k]) !== null && _def$shape !== void 0 && (_def$shape = _def$shape._zod) !== null && _def$shape !== void 0 && (_def$shape = _def$shape.traits) !== null && _def$shape !== void 0 && _def$shape.has("$ZodType")))
      throw new Error('Invalid element at key "'.concat(k, '": expected a Zod schema'));
  }
  var okeys = optionalKeys(def.shape);
  return _objectSpread5(_objectSpread5({}, def), {}, {
    keys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  });
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
  var unrecognized = [], keySet = def.keySet, _catchall = def.catchall._zod, t = _catchall.def.type, _loop3 = function(key2) {
    if (keySet.has(key2)) return 0;
    if (t === "never")
      return unrecognized.push(key2), 0;
    var r = _catchall.run({
      value: input[key2],
      issues: []
    }, ctx);
    r instanceof Promise ? proms.push(r.then(function(r2) {
      return handlePropertyResult(r2, payload, key2, input);
    })) : handlePropertyResult(r, payload, key2, input);
  }, _ret2;
  for (var key in input)
    _ret2 = _loop3(key);
  return unrecognized.length && payload.issues.push({
    code: "unrecognized_keys",
    keys: unrecognized,
    input,
    inst
  }), proms.length ? Promise.all(proms).then(function() {
    return payload;
  }) : payload;
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", function(inst, def) {
  $ZodType.init(inst, def);
  var desc = Object.getOwnPropertyDescriptor(def, "shape");
  if (!(desc != null && desc.get)) {
    var sh = def.shape;
    Object.defineProperty(def, "shape", {
      get: function() {
        var newSh = _objectSpread5({}, sh);
        return Object.defineProperty(def, "shape", {
          value: newSh
        }), newSh;
      }
    });
  }
  var _normalized = cached(function() {
    return normalizeDef(def);
  });
  defineLazy(inst._zod, "propValues", function() {
    var shape = def.shape, propValues = {};
    for (var key in shape) {
      var field = shape[key]._zod;
      if (field.values) {
        propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
        var _iterator4 = _createForOfIteratorHelper6(field.values), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var v = _step4.value;
            propValues[key].add(v);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
    return propValues;
  });
  var isObject2 = isObject, catchall = def.catchall, value;
  inst._zod.parse = function(payload, ctx) {
    value ?? (value = _normalized.value);
    var input = payload.value;
    if (!isObject2(input))
      return payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      }), payload;
    payload.value = {};
    var proms = [], shape = value.shape, _iterator5 = _createForOfIteratorHelper6(value.keys), _step5;
    try {
      var _loop4 = function() {
        var key = _step5.value, el = shape[key], r = el._zod.run({
          value: input[key],
          issues: []
        }, ctx);
        r instanceof Promise ? proms.push(r.then(function(r2) {
          return handlePropertyResult(r2, payload, key, input);
        })) : handlePropertyResult(r, payload, key, input);
      };
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; )
        _loop4();
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return catchall ? handleCatchall(proms, input, payload, ctx, _normalized.value, inst) : proms.length ? Promise.all(proms).then(function() {
      return payload;
    }) : payload;
  };
}), $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", function(inst, def) {
  $ZodObject.init(inst, def);
  var superParse = inst._zod.parse, _normalized = cached(function() {
    return normalizeDef(def);
  }), generateFastpass = function(shape) {
    var doc = new Doc(["shape", "payload", "ctx"]), normalized = _normalized.value, parseStr = function(key2) {
      var k2 = esc(key2);
      return "shape[".concat(k2, "]._zod.run({ value: input[").concat(k2, "], issues: [] }, ctx)");
    };
    doc.write("const input = payload.value;");
    var ids = /* @__PURE__ */ Object.create(null), counter = 0, _iterator6 = _createForOfIteratorHelper6(normalized.keys), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        var key = _step6.value;
        ids[key] = "key_".concat(counter++);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    doc.write("const newResult = {};");
    var _iterator7 = _createForOfIteratorHelper6(normalized.keys), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        var _key = _step7.value, id = ids[_key], k = esc(_key);
        doc.write("const ".concat(id, " = ").concat(parseStr(_key), ";")), doc.write("\n        if (".concat(id, ".issues.length) {\n          payload.issues = payload.issues.concat(").concat(id, ".issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [").concat(k, ", ...iss.path] : [").concat(k, "]\n          })));\n        }\n        \n        \n        if (").concat(id, ".value === undefined) {\n          if (").concat(k, " in input) {\n            newResult[").concat(k, "] = undefined;\n          }\n        } else {\n          newResult[").concat(k, "] = ").concat(id, ".value;\n        }\n        \n      "));
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    doc.write("payload.value = newResult;"), doc.write("return payload;");
    var fn = doc.compile();
    return function(payload, ctx) {
      return fn(shape, payload, ctx);
    };
  }, fastpass, isObject2 = isObject, jit = !globalConfig.jitless, allowsEval2 = allowsEval, fastEnabled = jit && allowsEval2.value, catchall = def.catchall, value;
  inst._zod.parse = function(payload, ctx) {
    value ?? (value = _normalized.value);
    var input = payload.value;
    return isObject2(input) ? jit && fastEnabled && (ctx == null ? void 0 : ctx.async) === !1 && ctx.jitless !== !0 ? (fastpass || (fastpass = generateFastpass(def.shape)), payload = fastpass(payload, ctx), catchall ? handleCatchall([], input, payload, ctx, value, inst) : payload) : superParse(payload, ctx) : (payload.issues.push({
      expected: "object",
      code: "invalid_type",
      input,
      inst
    }), payload);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  var _iterator8 = _createForOfIteratorHelper6(results), _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      var result = _step8.value;
      if (result.issues.length === 0)
        return final.value = result.value, final;
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  var nonaborted = results.filter(function(r) {
    return !aborted(r);
  });
  return nonaborted.length === 1 ? (final.value = nonaborted[0].value, nonaborted[0]) : (final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map(function(result2) {
      return result2.issues.map(function(iss) {
        return finalizeIssue(iss, ctx, config());
      });
    })
  }), final);
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", function(inst, def) {
  $ZodType.init(inst, def), defineLazy(inst._zod, "optin", function() {
    return def.options.some(function(o) {
      return o._zod.optin === "optional";
    }) ? "optional" : void 0;
  }), defineLazy(inst._zod, "optout", function() {
    return def.options.some(function(o) {
      return o._zod.optout === "optional";
    }) ? "optional" : void 0;
  }), defineLazy(inst._zod, "values", function() {
    if (def.options.every(function(o) {
      return o._zod.values;
    }))
      return new Set(def.options.flatMap(function(option) {
        return Array.from(option._zod.values);
      }));
  }), defineLazy(inst._zod, "pattern", function() {
    if (def.options.every(function(o) {
      return o._zod.pattern;
    })) {
      var patterns = def.options.map(function(o) {
        return o._zod.pattern;
      });
      return new RegExp("^(".concat(patterns.map(function(p) {
        return cleanRegex(p.source);
      }).join("|"), ")$"));
    }
  });
  var single = def.options.length === 1, first = def.options[0]._zod.run;
  inst._zod.parse = function(payload, ctx) {
    if (single)
      return first(payload, ctx);
    var async = !1, results = [], _iterator9 = _createForOfIteratorHelper6(def.options), _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
        var option = _step9.value, result = option._zod.run({
          value: payload.value,
          issues: []
        }, ctx);
        if (result instanceof Promise)
          results.push(result), async = !0;
        else {
          if (result.issues.length === 0) return result;
          results.push(result);
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return async ? Promise.all(results).then(function(results2) {
      return handleUnionResults(results2, payload, inst, ctx);
    }) : handleUnionResults(results, payload, inst, ctx);
  };
}), $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", function(inst, def) {
  $ZodUnion.init(inst, def);
  var _super = inst._zod.parse;
  defineLazy(inst._zod, "propValues", function() {
    var propValues = {}, _iterator0 = _createForOfIteratorHelper6(def.options), _step0;
    try {
      for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
        var option = _step0.value, pv = option._zod.propValues;
        if (!pv || Object.keys(pv).length === 0) throw new Error('Invalid discriminated union option at index "'.concat(def.options.indexOf(option), '"'));
        for (var _i2 = 0, _Object$entries = Object.entries(pv); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray5(_Object$entries[_i2], 2), k = _Object$entries$_i[0], v = _Object$entries$_i[1];
          propValues[k] || (propValues[k] = /* @__PURE__ */ new Set());
          var _iterator1 = _createForOfIteratorHelper6(v), _step1;
          try {
            for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
              var val = _step1.value;
              propValues[k].add(val);
            }
          } catch (err) {
            _iterator1.e(err);
          } finally {
            _iterator1.f();
          }
        }
      }
    } catch (err) {
      _iterator0.e(err);
    } finally {
      _iterator0.f();
    }
    return propValues;
  });
  var disc = cached(function() {
    var opts = def.options, map2 = /* @__PURE__ */ new Map(), _iterator10 = _createForOfIteratorHelper6(opts), _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
        var _o$_zod$propValues, o = _step10.value, values = (_o$_zod$propValues = o._zod.propValues) === null || _o$_zod$propValues === void 0 ? void 0 : _o$_zod$propValues[def.discriminator];
        if (!values || values.size === 0) throw new Error('Invalid discriminated union option at index "'.concat(def.options.indexOf(o), '"'));
        var _iterator11 = _createForOfIteratorHelper6(values), _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
            var v = _step11.value;
            if (map2.has(v))
              throw new Error('Duplicate discriminator value "'.concat(String(v), '"'));
            map2.set(v, o);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    return map2;
  });
  inst._zod.parse = function(payload, ctx) {
    var input = payload.value;
    if (!isObject(input))
      return payload.issues.push({
        code: "invalid_type",
        expected: "object",
        input,
        inst
      }), payload;
    var opt = disc.value.get(input == null ? void 0 : input[def.discriminator]);
    return opt ? opt._zod.run(payload, ctx) : def.unionFallback ? _super(payload, ctx) : (payload.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: def.discriminator,
      input,
      path: [def.discriminator],
      inst
    }), payload);
  };
}), $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, ctx) {
    var input = payload.value, left = def.left._zod.run({
      value: input,
      issues: []
    }, ctx), right = def.right._zod.run({
      value: input,
      issues: []
    }, ctx), async = left instanceof Promise || right instanceof Promise;
    return async ? Promise.all([left, right]).then(function(_ref2) {
      var _ref3 = _slicedToArray5(_ref2, 2), left2 = _ref3[0], right2 = _ref3[1];
      return handleIntersectionResults(payload, left2, right2);
    }) : handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b)
    return {
      valid: !0,
      data: a
    };
  if (a instanceof Date && b instanceof Date && +a == +b)
    return {
      valid: !0,
      data: a
    };
  if (isPlainObject(a) && isPlainObject(b)) {
    var bKeys = Object.keys(b), sharedKeys = Object.keys(a).filter(function(key2) {
      return bKeys.indexOf(key2) !== -1;
    }), newObj = _objectSpread5(_objectSpread5({}, a), b), _iterator12 = _createForOfIteratorHelper6(sharedKeys), _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
        var key = _step12.value, sharedValue = mergeValues(a[key], b[key]);
        if (!sharedValue.valid)
          return {
            valid: !1,
            mergeErrorPath: [key].concat(_toConsumableArray6(sharedValue.mergeErrorPath))
          };
        newObj[key] = sharedValue.data;
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    return {
      valid: !0,
      data: newObj
    };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length)
      return {
        valid: !1,
        mergeErrorPath: []
      };
    for (var newArray = [], index = 0; index < a.length; index++) {
      var itemA = a[index], itemB = b[index], _sharedValue = mergeValues(itemA, itemB);
      if (!_sharedValue.valid)
        return {
          valid: !1,
          mergeErrorPath: [index].concat(_toConsumableArray6(_sharedValue.mergeErrorPath))
        };
      newArray.push(_sharedValue.data);
    }
    return {
      valid: !0,
      data: newArray
    };
  }
  return {
    valid: !1,
    mergeErrorPath: []
  };
}
function handleIntersectionResults(result, left, right) {
  if (left.issues.length) {
    var _result$issues;
    (_result$issues = result.issues).push.apply(_result$issues, _toConsumableArray6(left.issues));
  }
  if (right.issues.length) {
    var _result$issues2;
    (_result$issues2 = result.issues).push.apply(_result$issues2, _toConsumableArray6(right.issues));
  }
  if (aborted(result)) return result;
  var merged = mergeValues(left.value, right.value);
  if (!merged.valid)
    throw new Error("Unmergable intersection. Error path: " + "".concat(JSON.stringify(merged.mergeErrorPath)));
  return result.value = merged.data, result;
}
var $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", function(inst, def) {
  $ZodType.init(inst, def);
  var items = def.items;
  inst._zod.parse = function(payload, ctx) {
    var input = payload.value;
    if (!Array.isArray(input))
      return payload.issues.push({
        input,
        inst,
        expected: "tuple",
        code: "invalid_type"
      }), payload;
    payload.value = [];
    var proms = [], reversedIndex = _toConsumableArray6(items).reverse().findIndex(function(item2) {
      return item2._zod.optin !== "optional";
    }), optStart = reversedIndex === -1 ? 0 : items.length - reversedIndex;
    if (!def.rest) {
      var tooBig = input.length > items.length, tooSmall = input.length < optStart - 1;
      if (tooBig || tooSmall)
        return payload.issues.push(_objectSpread5(_objectSpread5({}, tooBig ? {
          code: "too_big",
          maximum: items.length
        } : {
          code: "too_small",
          minimum: items.length
        }), {}, {
          input,
          inst,
          origin: "array"
        })), payload;
    }
    var i = -1, _iterator13 = _createForOfIteratorHelper6(items), _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
        var item = _step13.value;
        if (i++, !(i >= input.length && i >= optStart)) {
          var _result = item._zod.run({
            value: input[i],
            issues: []
          }, ctx);
          _result instanceof Promise ? proms.push(_result.then(function(result2) {
            return handleTupleResult(result2, payload, i);
          })) : handleTupleResult(_result, payload, i);
        }
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
    if (def.rest) {
      var rest = input.slice(items.length), _iterator14 = _createForOfIteratorHelper6(rest), _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
          var el = _step14.value;
          i++;
          var result = def.rest._zod.run({
            value: el,
            issues: []
          }, ctx);
          result instanceof Promise ? proms.push(result.then(function(result2) {
            return handleTupleResult(result2, payload, i);
          })) : handleTupleResult(result, payload, i);
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
    return proms.length ? Promise.all(proms).then(function() {
      return payload;
    }) : payload;
  };
});
function handleTupleResult(result, final, index) {
  if (result.issues.length) {
    var _final$issues3;
    (_final$issues3 = final.issues).push.apply(_final$issues3, _toConsumableArray6(prefixIssues(index, result.issues)));
  }
  final.value[index] = result.value;
}
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, ctx) {
    var input = payload.value;
    if (!isPlainObject(input))
      return payload.issues.push({
        expected: "record",
        code: "invalid_type",
        input,
        inst
      }), payload;
    var proms = [], values = def.keyType._zod.values;
    if (values) {
      payload.value = {};
      var recordKeys = /* @__PURE__ */ new Set(), _iterator15 = _createForOfIteratorHelper6(values), _step15;
      try {
        var _loop5 = function() {
          var key2 = _step15.value;
          if (typeof key2 == "string" || typeof key2 == "number" || typeof key2 == "symbol") {
            recordKeys.add(typeof key2 == "number" ? key2.toString() : key2);
            var result = def.valueType._zod.run({
              value: input[key2],
              issues: []
            }, ctx);
            if (result instanceof Promise)
              proms.push(result.then(function(result2) {
                if (result2.issues.length) {
                  var _payload$issues;
                  (_payload$issues = payload.issues).push.apply(_payload$issues, _toConsumableArray6(prefixIssues(key2, result2.issues)));
                }
                payload.value[key2] = result2.value;
              }));
            else {
              if (result.issues.length) {
                var _payload$issues2;
                (_payload$issues2 = payload.issues).push.apply(_payload$issues2, _toConsumableArray6(prefixIssues(key2, result.issues)));
              }
              payload.value[key2] = result.value;
            }
          }
        };
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done; )
          _loop5();
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
      var unrecognized;
      for (var key in input)
        recordKeys.has(key) || (unrecognized = unrecognized ?? [], unrecognized.push(key));
      unrecognized && unrecognized.length > 0 && payload.issues.push({
        code: "unrecognized_keys",
        input,
        inst,
        keys: unrecognized
      });
    } else {
      payload.value = {};
      var _iterator16 = _createForOfIteratorHelper6(Reflect.ownKeys(input)), _step16;
      try {
        var _loop6 = function() {
          var key2 = _step16.value;
          if (key2 === "__proto__") return 0;
          var keyResult = def.keyType._zod.run({
            value: key2,
            issues: []
          }, ctx);
          if (keyResult instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          if (keyResult.issues.length)
            return payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map(function(iss) {
                return finalizeIssue(iss, ctx, config());
              }),
              input: key2,
              path: [key2],
              inst
            }), payload.value[keyResult.value] = keyResult.value, 0;
          var result = def.valueType._zod.run({
            value: input[key2],
            issues: []
          }, ctx);
          if (result instanceof Promise)
            proms.push(result.then(function(result2) {
              if (result2.issues.length) {
                var _payload$issues3;
                (_payload$issues3 = payload.issues).push.apply(_payload$issues3, _toConsumableArray6(prefixIssues(key2, result2.issues)));
              }
              payload.value[keyResult.value] = result2.value;
            }));
          else {
            if (result.issues.length) {
              var _payload$issues4;
              (_payload$issues4 = payload.issues).push.apply(_payload$issues4, _toConsumableArray6(prefixIssues(key2, result.issues)));
            }
            payload.value[keyResult.value] = result.value;
          }
        }, _ret3;
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done; )
          _ret3 = _loop6();
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    }
    return proms.length ? Promise.all(proms).then(function() {
      return payload;
    }) : payload;
  };
}), $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, ctx) {
    var input = payload.value;
    if (!(input instanceof Map))
      return payload.issues.push({
        expected: "map",
        code: "invalid_type",
        input,
        inst
      }), payload;
    var proms = [];
    payload.value = /* @__PURE__ */ new Map();
    var _iterator17 = _createForOfIteratorHelper6(input), _step17;
    try {
      var _loop7 = function() {
        var _step17$value = _slicedToArray5(_step17.value, 2), key = _step17$value[0], value = _step17$value[1], keyResult = def.keyType._zod.run({
          value: key,
          issues: []
        }, ctx), valueResult = def.valueType._zod.run({
          value,
          issues: []
        }, ctx);
        keyResult instanceof Promise || valueResult instanceof Promise ? proms.push(Promise.all([keyResult, valueResult]).then(function(_ref4) {
          var _ref5 = _slicedToArray5(_ref4, 2), keyResult2 = _ref5[0], valueResult2 = _ref5[1];
          handleMapResult(keyResult2, valueResult2, payload, key, input, inst, ctx);
        })) : handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
      };
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done; )
        _loop7();
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    return proms.length ? Promise.all(proms).then(function() {
      return payload;
    }) : payload;
  };
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
  if (keyResult.issues.length)
    if (propertyKeyTypes.has(typeof key)) {
      var _final$issues4;
      (_final$issues4 = final.issues).push.apply(_final$issues4, _toConsumableArray6(prefixIssues(key, keyResult.issues)));
    } else
      final.issues.push({
        code: "invalid_key",
        origin: "map",
        input,
        inst,
        issues: keyResult.issues.map(function(iss) {
          return finalizeIssue(iss, ctx, config());
        })
      });
  if (valueResult.issues.length)
    if (propertyKeyTypes.has(typeof key)) {
      var _final$issues5;
      (_final$issues5 = final.issues).push.apply(_final$issues5, _toConsumableArray6(prefixIssues(key, valueResult.issues)));
    } else
      final.issues.push({
        origin: "map",
        code: "invalid_element",
        input,
        inst,
        key,
        issues: valueResult.issues.map(function(iss) {
          return finalizeIssue(iss, ctx, config());
        })
      });
  final.value.set(keyResult.value, valueResult.value);
}
var $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, ctx) {
    var input = payload.value;
    if (!(input instanceof Set))
      return payload.issues.push({
        input,
        inst,
        expected: "set",
        code: "invalid_type"
      }), payload;
    var proms = [];
    payload.value = /* @__PURE__ */ new Set();
    var _iterator18 = _createForOfIteratorHelper6(input), _step18;
    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
        var item = _step18.value, result = def.valueType._zod.run({
          value: item,
          issues: []
        }, ctx);
        result instanceof Promise ? proms.push(result.then(function(result2) {
          return handleSetResult(result2, payload);
        })) : handleSetResult(result, payload);
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
    return proms.length ? Promise.all(proms).then(function() {
      return payload;
    }) : payload;
  };
});
function handleSetResult(result, final) {
  if (result.issues.length) {
    var _final$issues6;
    (_final$issues6 = final.issues).push.apply(_final$issues6, _toConsumableArray6(result.issues));
  }
  final.value.add(result.value);
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", function(inst, def) {
  $ZodType.init(inst, def);
  var values = getEnumValues(def.entries), valuesSet = new Set(values);
  inst._zod.values = valuesSet, inst._zod.pattern = new RegExp("^(".concat(values.filter(function(k) {
    return propertyKeyTypes.has(typeof k);
  }).map(function(o) {
    return typeof o == "string" ? escapeRegex(o) : o.toString();
  }).join("|"), ")$")), inst._zod.parse = function(payload, _ctx) {
    var input = payload.value;
    return valuesSet.has(input) || payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    }), payload;
  };
}), $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", function(inst, def) {
  if ($ZodType.init(inst, def), def.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  var values = new Set(def.values);
  inst._zod.values = values, inst._zod.pattern = new RegExp("^(".concat(def.values.map(function(o) {
    return typeof o == "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o);
  }).join("|"), ")$")), inst._zod.parse = function(payload, _ctx) {
    var input = payload.value;
    return values.has(input) || payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    }), payload;
  };
}), $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, _ctx) {
    var input = payload.value;
    return input instanceof File || payload.issues.push({
      expected: "file",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
}), $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, ctx) {
    if (ctx.direction === "backward")
      throw new $ZodEncodeError(inst.constructor.name);
    var _out = def.transform(payload.value, payload);
    if (ctx.async) {
      var output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then(function(output2) {
        return payload.value = output2, payload;
      });
    }
    if (_out instanceof Promise)
      throw new $ZodAsyncError();
    return payload.value = _out, payload;
  };
});
function handleOptionalResult(result, input) {
  return result.issues.length && input === void 0 ? {
    issues: [],
    value: void 0
  } : result;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.optin = "optional", inst._zod.optout = "optional", defineLazy(inst._zod, "values", function() {
    return def.innerType._zod.values ? new Set([].concat(_toConsumableArray6(def.innerType._zod.values), [void 0])) : void 0;
  }), defineLazy(inst._zod, "pattern", function() {
    var pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp("^(".concat(cleanRegex(pattern.source), ")?$")) : void 0;
  }), inst._zod.parse = function(payload, ctx) {
    if (def.innerType._zod.optin === "optional") {
      var result = def.innerType._zod.run(payload, ctx);
      return result instanceof Promise ? result.then(function(r) {
        return handleOptionalResult(r, payload.value);
      }) : handleOptionalResult(result, payload.value);
    }
    return payload.value === void 0 ? payload : def.innerType._zod.run(payload, ctx);
  };
}), $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", function(inst, def) {
  $ZodType.init(inst, def), defineLazy(inst._zod, "optin", function() {
    return def.innerType._zod.optin;
  }), defineLazy(inst._zod, "optout", function() {
    return def.innerType._zod.optout;
  }), defineLazy(inst._zod, "pattern", function() {
    var pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp("^(".concat(cleanRegex(pattern.source), "|null)$")) : void 0;
  }), defineLazy(inst._zod, "values", function() {
    return def.innerType._zod.values ? new Set([].concat(_toConsumableArray6(def.innerType._zod.values), [null])) : void 0;
  }), inst._zod.parse = function(payload, ctx) {
    return payload.value === null ? payload : def.innerType._zod.run(payload, ctx);
  };
}), $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.optin = "optional", defineLazy(inst._zod, "values", function() {
    return def.innerType._zod.values;
  }), inst._zod.parse = function(payload, ctx) {
    if (ctx.direction === "backward")
      return def.innerType._zod.run(payload, ctx);
    if (payload.value === void 0)
      return payload.value = def.defaultValue, payload;
    var result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then(function(result2) {
      return handleDefaultResult(result2, def);
    }) : handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  return payload.value === void 0 && (payload.value = def.defaultValue), payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.optin = "optional", defineLazy(inst._zod, "values", function() {
    return def.innerType._zod.values;
  }), inst._zod.parse = function(payload, ctx) {
    return ctx.direction === "backward" || payload.value === void 0 && (payload.value = def.defaultValue), def.innerType._zod.run(payload, ctx);
  };
}), $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", function(inst, def) {
  $ZodType.init(inst, def), defineLazy(inst._zod, "values", function() {
    var v = def.innerType._zod.values;
    return v ? new Set(_toConsumableArray6(v).filter(function(x) {
      return x !== void 0;
    })) : void 0;
  }), inst._zod.parse = function(payload, ctx) {
    var result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then(function(result2) {
      return handleNonOptionalResult(result2, inst);
    }) : handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  return !payload.issues.length && payload.value === void 0 && payload.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: payload.value,
    inst
  }), payload;
}
var $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, ctx) {
    if (ctx.direction === "backward")
      throw new $ZodEncodeError("ZodSuccess");
    var result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then(function(result2) {
      return payload.value = result2.issues.length === 0, payload;
    }) : (payload.value = result.issues.length === 0, payload);
  };
}), $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", function(inst, def) {
  $ZodType.init(inst, def), defineLazy(inst._zod, "optin", function() {
    return def.innerType._zod.optin;
  }), defineLazy(inst._zod, "optout", function() {
    return def.innerType._zod.optout;
  }), defineLazy(inst._zod, "values", function() {
    return def.innerType._zod.values;
  }), inst._zod.parse = function(payload, ctx) {
    if (ctx.direction === "backward")
      return def.innerType._zod.run(payload, ctx);
    var result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then(function(result2) {
      return payload.value = result2.value, result2.issues.length && (payload.value = def.catchValue(_objectSpread5(_objectSpread5({}, payload), {}, {
        error: {
          issues: result2.issues.map(function(iss) {
            return finalizeIssue(iss, ctx, config());
          })
        },
        input: payload.value
      })), payload.issues = []), payload;
    }) : (payload.value = result.value, result.issues.length && (payload.value = def.catchValue(_objectSpread5(_objectSpread5({}, payload), {}, {
      error: {
        issues: result.issues.map(function(iss) {
          return finalizeIssue(iss, ctx, config());
        })
      },
      input: payload.value
    })), payload.issues = []), payload);
  };
}), $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, _ctx) {
    return (typeof payload.value != "number" || !Number.isNaN(payload.value)) && payload.issues.push({
      input: payload.value,
      inst,
      expected: "nan",
      code: "invalid_type"
    }), payload;
  };
}), $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", function(inst, def) {
  $ZodType.init(inst, def), defineLazy(inst._zod, "values", function() {
    return def.in._zod.values;
  }), defineLazy(inst._zod, "optin", function() {
    return def.in._zod.optin;
  }), defineLazy(inst._zod, "optout", function() {
    return def.out._zod.optout;
  }), defineLazy(inst._zod, "propValues", function() {
    return def.in._zod.propValues;
  }), inst._zod.parse = function(payload, ctx) {
    if (ctx.direction === "backward") {
      var right = def.out._zod.run(payload, ctx);
      return right instanceof Promise ? right.then(function(right2) {
        return handlePipeResult(right2, def.in, ctx);
      }) : handlePipeResult(right, def.in, ctx);
    }
    var left = def.in._zod.run(payload, ctx);
    return left instanceof Promise ? left.then(function(left2) {
      return handlePipeResult(left2, def.out, ctx);
    }) : handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  return left.issues.length ? (left.aborted = !0, left) : next._zod.run({
    value: left.value,
    issues: left.issues
  }, ctx);
}
var $ZodCodec = /* @__PURE__ */ $constructor("$ZodCodec", function(inst, def) {
  $ZodType.init(inst, def), defineLazy(inst._zod, "values", function() {
    return def.in._zod.values;
  }), defineLazy(inst._zod, "optin", function() {
    return def.in._zod.optin;
  }), defineLazy(inst._zod, "optout", function() {
    return def.out._zod.optout;
  }), defineLazy(inst._zod, "propValues", function() {
    return def.in._zod.propValues;
  }), inst._zod.parse = function(payload, ctx) {
    var direction = ctx.direction || "forward";
    if (direction === "forward") {
      var left = def.in._zod.run(payload, ctx);
      return left instanceof Promise ? left.then(function(left2) {
        return handleCodecAResult(left2, def, ctx);
      }) : handleCodecAResult(left, def, ctx);
    } else {
      var right = def.out._zod.run(payload, ctx);
      return right instanceof Promise ? right.then(function(right2) {
        return handleCodecAResult(right2, def, ctx);
      }) : handleCodecAResult(right, def, ctx);
    }
  };
});
function handleCodecAResult(result, def, ctx) {
  if (result.issues.length)
    return result.aborted = !0, result;
  var direction = ctx.direction || "forward";
  if (direction === "forward") {
    var transformed = def.transform(result.value, result);
    return transformed instanceof Promise ? transformed.then(function(value) {
      return handleCodecTxResult(result, value, def.out, ctx);
    }) : handleCodecTxResult(result, transformed, def.out, ctx);
  } else {
    var _transformed = def.reverseTransform(result.value, result);
    return _transformed instanceof Promise ? _transformed.then(function(value) {
      return handleCodecTxResult(result, value, def.in, ctx);
    }) : handleCodecTxResult(result, _transformed, def.in, ctx);
  }
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
  return left.issues.length ? (left.aborted = !0, left) : nextSchema._zod.run({
    value,
    issues: left.issues
  }, ctx);
}
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", function(inst, def) {
  $ZodType.init(inst, def), defineLazy(inst._zod, "propValues", function() {
    return def.innerType._zod.propValues;
  }), defineLazy(inst._zod, "values", function() {
    return def.innerType._zod.values;
  }), defineLazy(inst._zod, "optin", function() {
    var _def$innerType;
    return (_def$innerType = def.innerType) === null || _def$innerType === void 0 || (_def$innerType = _def$innerType._zod) === null || _def$innerType === void 0 ? void 0 : _def$innerType.optin;
  }), defineLazy(inst._zod, "optout", function() {
    var _def$innerType2;
    return (_def$innerType2 = def.innerType) === null || _def$innerType2 === void 0 || (_def$innerType2 = _def$innerType2._zod) === null || _def$innerType2 === void 0 ? void 0 : _def$innerType2.optout;
  }), inst._zod.parse = function(payload, ctx) {
    if (ctx.direction === "backward")
      return def.innerType._zod.run(payload, ctx);
    var result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then(handleReadonlyResult) : handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  return payload.value = Object.freeze(payload.value), payload;
}
var $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", function(inst, def) {
  $ZodType.init(inst, def);
  var regexParts = [], _iterator19 = _createForOfIteratorHelper6(def.parts), _step19;
  try {
    for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
      var part = _step19.value;
      if (typeof part == "object" && part !== null) {
        if (!part._zod.pattern)
          throw new Error("Invalid template literal part, no pattern found: ".concat(_toConsumableArray6(part._zod.traits).shift()));
        var source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
        if (!source) throw new Error("Invalid template literal part: ".concat(part._zod.traits));
        var start = source.startsWith("^") ? 1 : 0, end = source.endsWith("$") ? source.length - 1 : source.length;
        regexParts.push(source.slice(start, end));
      } else if (part === null || primitiveTypes.has(typeof part))
        regexParts.push(escapeRegex("".concat(part)));
      else
        throw new Error("Invalid template literal part: ".concat(part));
    }
  } catch (err) {
    _iterator19.e(err);
  } finally {
    _iterator19.f();
  }
  inst._zod.pattern = new RegExp("^".concat(regexParts.join(""), "$")), inst._zod.parse = function(payload, _ctx) {
    return typeof payload.value != "string" ? (payload.issues.push({
      input: payload.value,
      inst,
      expected: "template_literal",
      code: "invalid_type"
    }), payload) : (inst._zod.pattern.lastIndex = 0, inst._zod.pattern.test(payload.value) || payload.issues.push({
      input: payload.value,
      inst,
      code: "invalid_format",
      format: def.format ?? "template_literal",
      pattern: inst._zod.pattern.source
    }), payload);
  };
}), $ZodFunction = /* @__PURE__ */ $constructor("$ZodFunction", function(inst, def) {
  return $ZodType.init(inst, def), inst._def = def, inst._zod.def = def, inst.implement = function(func) {
    if (typeof func != "function")
      throw new Error("implement() must be called with a function");
    return function() {
      for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++)
        args[_key2] = arguments[_key2];
      var parsedArgs = inst._def.input ? parse(inst._def.input, args) : args, result = Reflect.apply(func, this, parsedArgs);
      return inst._def.output ? parse(inst._def.output, result) : result;
    };
  }, inst.implementAsync = function(func) {
    if (typeof func != "function")
      throw new Error("implementAsync() must be called with a function");
    return /* @__PURE__ */ _asyncToGenerator2(/* @__PURE__ */ _regenerator2().m(function _callee2() {
      var _len2, args, _key3, parsedArgs, result, _args2 = arguments, _t;
      return _regenerator2().w(function(_context2) {
        for (; ; ) switch (_context2.n) {
          case 0:
            for (_len2 = _args2.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++)
              args[_key3] = _args2[_key3];
            if (!inst._def.input) {
              _context2.n = 2;
              break;
            }
            return _context2.n = 1, parseAsync(inst._def.input, args);
          case 1:
            _t = _context2.v, _context2.n = 3;
            break;
          case 2:
            _t = args;
          case 3:
            return parsedArgs = _t, _context2.n = 4, Reflect.apply(func, this, parsedArgs);
          case 4:
            if (result = _context2.v, !inst._def.output) {
              _context2.n = 6;
              break;
            }
            return _context2.n = 5, parseAsync(inst._def.output, result);
          case 5:
            return _context2.a(2, _context2.v);
          case 6:
            return _context2.a(2, result);
        }
      }, _callee2, this);
    }));
  }, inst._zod.parse = function(payload, _ctx) {
    if (typeof payload.value != "function")
      return payload.issues.push({
        code: "invalid_type",
        expected: "function",
        input: payload.value,
        inst
      }), payload;
    var hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
    return hasPromiseOutput ? payload.value = inst.implementAsync(payload.value) : payload.value = inst.implement(payload.value), payload;
  }, inst.input = function() {
    var F = inst.constructor;
    return Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) ? new F({
      type: "function",
      input: new $ZodTuple({
        type: "tuple",
        items: arguments.length <= 0 ? void 0 : arguments[0],
        rest: arguments.length <= 1 ? void 0 : arguments[1]
      }),
      output: inst._def.output
    }) : new F({
      type: "function",
      input: arguments.length <= 0 ? void 0 : arguments[0],
      output: inst._def.output
    });
  }, inst.output = function(output) {
    var F = inst.constructor;
    return new F({
      type: "function",
      input: inst._def.input,
      output
    });
  }, inst;
}), $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", function(inst, def) {
  $ZodType.init(inst, def), inst._zod.parse = function(payload, ctx) {
    return Promise.resolve(payload.value).then(function(inner) {
      return def.innerType._zod.run({
        value: inner,
        issues: []
      }, ctx);
    });
  };
}), $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", function(inst, def) {
  $ZodType.init(inst, def), defineLazy(inst._zod, "innerType", function() {
    return def.getter();
  }), defineLazy(inst._zod, "pattern", function() {
    var _inst$_zod$innerType;
    return (_inst$_zod$innerType = inst._zod.innerType) === null || _inst$_zod$innerType === void 0 || (_inst$_zod$innerType = _inst$_zod$innerType._zod) === null || _inst$_zod$innerType === void 0 ? void 0 : _inst$_zod$innerType.pattern;
  }), defineLazy(inst._zod, "propValues", function() {
    var _inst$_zod$innerType2;
    return (_inst$_zod$innerType2 = inst._zod.innerType) === null || _inst$_zod$innerType2 === void 0 || (_inst$_zod$innerType2 = _inst$_zod$innerType2._zod) === null || _inst$_zod$innerType2 === void 0 ? void 0 : _inst$_zod$innerType2.propValues;
  }), defineLazy(inst._zod, "optin", function() {
    var _inst$_zod$innerType3;
    return ((_inst$_zod$innerType3 = inst._zod.innerType) === null || _inst$_zod$innerType3 === void 0 || (_inst$_zod$innerType3 = _inst$_zod$innerType3._zod) === null || _inst$_zod$innerType3 === void 0 ? void 0 : _inst$_zod$innerType3.optin) ?? void 0;
  }), defineLazy(inst._zod, "optout", function() {
    var _inst$_zod$innerType4;
    return ((_inst$_zod$innerType4 = inst._zod.innerType) === null || _inst$_zod$innerType4 === void 0 || (_inst$_zod$innerType4 = _inst$_zod$innerType4._zod) === null || _inst$_zod$innerType4 === void 0 ? void 0 : _inst$_zod$innerType4.optout) ?? void 0;
  }), inst._zod.parse = function(payload, ctx) {
    var inner = inst._zod.innerType;
    return inner._zod.run(payload, ctx);
  };
}), $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", function(inst, def) {
  $ZodCheck.init(inst, def), $ZodType.init(inst, def), inst._zod.parse = function(payload, _) {
    return payload;
  }, inst._zod.check = function(payload) {
    var input = payload.value, r = def.fn(input);
    if (r instanceof Promise)
      return r.then(function(r2) {
        return handleRefineResult(r2, payload, input, inst);
      });
    handleRefineResult(r, payload, input, inst);
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    var _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: _toConsumableArray6(inst._zod.def.path ?? []),
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    inst._zod.def.params && (_iss.params = inst._zod.def.params), payload.issues.push(issue(_iss));
  }
}

// ../../node_modules/zod/v4/locales/index.js
var locales_exports = {};
__export(locales_exports, {
  ar: function() {
    return ar_default;
  },
  az: function() {
    return az_default;
  },
  be: function() {
    return be_default;
  },
  bg: function() {
    return bg_default;
  },
  ca: function() {
    return ca_default;
  },
  cs: function() {
    return cs_default;
  },
  da: function() {
    return da_default;
  },
  de: function() {
    return de_default;
  },
  en: function() {
    return en_default;
  },
  eo: function() {
    return eo_default;
  },
  es: function() {
    return es_default;
  },
  fa: function() {
    return fa_default;
  },
  fi: function() {
    return fi_default;
  },
  fr: function() {
    return fr_default;
  },
  frCA: function() {
    return fr_CA_default;
  },
  he: function() {
    return he_default;
  },
  hu: function() {
    return hu_default;
  },
  id: function() {
    return id_default;
  },
  is: function() {
    return is_default;
  },
  it: function() {
    return it_default;
  },
  ja: function() {
    return ja_default;
  },
  ka: function() {
    return ka_default;
  },
  kh: function() {
    return kh_default;
  },
  km: function() {
    return km_default;
  },
  ko: function() {
    return ko_default;
  },
  lt: function() {
    return lt_default;
  },
  mk: function() {
    return mk_default;
  },
  ms: function() {
    return ms_default;
  },
  nl: function() {
    return nl_default;
  },
  no: function() {
    return no_default;
  },
  ota: function() {
    return ota_default;
  },
  pl: function() {
    return pl_default;
  },
  ps: function() {
    return ps_default;
  },
  pt: function() {
    return pt_default;
  },
  ru: function() {
    return ru_default;
  },
  sl: function() {
    return sl_default;
  },
  sv: function() {
    return sv_default;
  },
  ta: function() {
    return ta_default;
  },
  th: function() {
    return th_default;
  },
  tr: function() {
    return tr_default;
  },
  ua: function() {
    return ua_default;
  },
  uk: function() {
    return uk_default;
  },
  ur: function() {
    return ur_default;
  },
  vi: function() {
    return vi_default;
  },
  yo: function() {
    return yo_default;
  },
  zhCN: function() {
    return zh_CN_default;
  },
  zhTW: function() {
    return zh_TW_default;
  }
});

// ../../node_modules/zod/v4/locales/ar.js
var error = function() {
  var Sizable = {
    string: {
      unit: "\u062D\u0631\u0641",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A"
    },
    file: {
      unit: "\u0628\u0627\u064A\u062A",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A"
    },
    array: {
      unit: "\u0639\u0646\u0635\u0631",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A"
    },
    set: {
      unit: "\u0639\u0646\u0635\u0631",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(data))
          return "array";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u0645\u062F\u062E\u0644",
    email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    url: "\u0631\u0627\u0628\u0637",
    emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
    ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
    cidrv4: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
    cidrv6: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
    base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
    base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
    json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
    e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
    jwt: "JWT",
    template_literal: "\u0645\u062F\u062E\u0644"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ".concat(issue2.expected, "\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ".concat(stringifyPrimitive(issue2.values[0])) : "\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? " \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ".concat(issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629", " ").concat(adj, " ").concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\u0639\u0646\u0635\u0631") : "\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ".concat(issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629", " ").concat(adj, " ").concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ".concat(issue2.origin, " \u0623\u0646 \u064A\u0643\u0648\u0646 ").concat(_adj, " ").concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ".concat(issue2.origin, " \u0623\u0646 \u064A\u0643\u0648\u0646 ").concat(_adj, " ").concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "'.concat(issue2.prefix, '"') : _issue.format === "ends_with" ? '\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? '\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ".concat(_issue.pattern) : "".concat(Nouns[_issue.format] ?? issue2.format, " \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644");
      }
      case "not_multiple_of":
        return "\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "\u0645\u0639\u0631\u0641".concat(issue2.keys.length > 1 ? "\u0627\u062A" : "", " \u063A\u0631\u064A\u0628").concat(issue2.keys.length > 1 ? "\u0629" : "", ": ").concat(joinValues(issue2.keys, "\u060C "));
      case "invalid_key":
        return "\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ".concat(issue2.origin);
      case "invalid_union":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      case "invalid_element":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ".concat(issue2.origin);
      default:
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
    }
  };
};
function ar_default() {
  return {
    localeError: error()
  };
}

// ../../node_modules/zod/v4/locales/az.js
var error2 = function() {
  var Sizable = {
    string: {
      unit: "simvol",
      verb: "olmal\u0131d\u0131r"
    },
    file: {
      unit: "bayt",
      verb: "olmal\u0131d\u0131r"
    },
    array: {
      unit: "element",
      verb: "olmal\u0131d\u0131r"
    },
    set: {
      unit: "element",
      verb: "olmal\u0131d\u0131r"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(data))
          return "array";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ".concat(issue2.expected, ", daxil olan ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ".concat(stringifyPrimitive(issue2.values[0])) : "Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ".concat(issue2.origin ?? "d\u0259y\u0259r", " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "element") : "\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ".concat(issue2.origin ?? "d\u0259y\u0259r", " ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Yanl\u0131\u015F m\u0259tn: "'.concat(_issue.prefix, '" il\u0259 ba\u015Flamal\u0131d\u0131r') : _issue.format === "ends_with" ? 'Yanl\u0131\u015F m\u0259tn: "'.concat(_issue.suffix, '" il\u0259 bitm\u0259lidir') : _issue.format === "includes" ? 'Yanl\u0131\u015F m\u0259tn: "'.concat(_issue.includes, '" daxil olmal\u0131d\u0131r') : _issue.format === "regex" ? "Yanl\u0131\u015F m\u0259tn: ".concat(_issue.pattern, " \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r") : "Yanl\u0131\u015F ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Yanl\u0131\u015F \u0259d\u0259d: ".concat(issue2.divisor, " il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r");
      case "unrecognized_keys":
        return "Tan\u0131nmayan a\xE7ar".concat(issue2.keys.length > 1 ? "lar" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "".concat(issue2.origin, " daxilind\u0259 yanl\u0131\u015F a\xE7ar");
      case "invalid_union":
        return "Yanl\u0131\u015F d\u0259y\u0259r";
      case "invalid_element":
        return "".concat(issue2.origin, " daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r");
      default:
        return "Yanl\u0131\u015F d\u0259y\u0259r";
    }
  };
};
function az_default() {
  return {
    localeError: error2()
  };
}

// ../../node_modules/zod/v4/locales/be.js
function getBelarusianPlural(count, one, few, many) {
  var absCount = Math.abs(count), lastDigit = absCount % 10, lastTwoDigits = absCount % 100;
  return lastTwoDigits >= 11 && lastTwoDigits <= 19 ? many : lastDigit === 1 ? one : lastDigit >= 2 && lastDigit <= 4 ? few : many;
}
var error3 = function() {
  var Sizable = {
    string: {
      unit: {
        one: "\u0441\u0456\u043C\u0432\u0430\u043B",
        few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
        many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u044B",
        many: "\u0431\u0430\u0439\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "\u043B\u0456\u043A";
      case "object": {
        if (Array.isArray(data))
          return "\u043C\u0430\u0441\u0456\u045E";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u0443\u0432\u043E\u0434",
    email: "email \u0430\u0434\u0440\u0430\u0441",
    url: "URL",
    emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0447\u0430\u0441",
    duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
    ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
    cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
    base64: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
    base64url: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
    json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
    e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0443\u0432\u043E\u0434"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ".concat(issue2.expected, ", \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ".concat(stringifyPrimitive(issue2.values[0])) : "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        if (sizing) {
          var maxValue = Number(issue2.maximum), unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return "\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ".concat(issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435", " \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ").concat(sizing.verb, " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(unit);
        }
        return "\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ".concat(issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435", " \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        if (_sizing) {
          var minValue = Number(issue2.minimum), _unit = getBelarusianPlural(minValue, _sizing.unit.one, _sizing.unit.few, _sizing.unit.many);
          return "\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ".concat(issue2.origin, " \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ").concat(_sizing.verb, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_unit);
        }
        return "\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ".concat(issue2.origin, " \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? '\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? '\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ".concat(_issue.pattern) : "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ".concat(issue2.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ".concat(issue2.origin);
      case "invalid_union":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      case "invalid_element":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ".concat(issue2.origin);
      default:
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
    }
  };
};
function be_default() {
  return {
    localeError: error3()
  };
}

// ../../node_modules/zod/v4/locales/bg.js
var parsedType = function(data) {
  var t = typeof data;
  switch (t) {
    case "number":
      return Number.isNaN(data) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
    case "object": {
      if (Array.isArray(data))
        return "\u043C\u0430\u0441\u0438\u0432";
      if (data === null)
        return "null";
      if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
        return data.constructor.name;
    }
  }
  return t;
}, error4 = function() {
  var Sizable = {
    string: {
      unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
      verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"
    },
    file: {
      unit: "\u0431\u0430\u0439\u0442\u0430",
      verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"
    },
    array: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
      verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"
    },
    set: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
      verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var Nouns = {
    regex: "\u0432\u0445\u043E\u0434",
    email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0432\u0440\u0435\u043C\u0435",
    duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
    cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
    base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
    json_string: "JSON \u043D\u0438\u0437",
    e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
    jwt: "JWT",
    template_literal: "\u0432\u0445\u043E\u0434"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ".concat(issue2.expected, ", \u043F\u043E\u043B\u0443\u0447\u0435\u043D ").concat(parsedType(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ".concat(stringifyPrimitive(issue2.values[0])) : "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ".concat(issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442", " \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430") : "\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ".concat(issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442", " \u0434\u0430 \u0431\u044A\u0434\u0435 ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ".concat(issue2.origin, " \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ".concat(issue2.origin, " \u0434\u0430 \u0431\u044A\u0434\u0435 ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        if (_issue.format === "starts_with")
          return '\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "'.concat(_issue.prefix, '"');
        if (_issue.format === "ends_with") return '\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "'.concat(_issue.suffix, '"');
        if (_issue.format === "includes") return '\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "'.concat(_issue.includes, '"');
        if (_issue.format === "regex") return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ".concat(_issue.pattern);
        var invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
        return _issue.format === "emoji" && (invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"), _issue.format === "datetime" && (invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"), _issue.format === "date" && (invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"), _issue.format === "time" && (invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"), _issue.format === "duration" && (invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"), "".concat(invalid_adj, " ").concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442".concat(issue2.keys.length > 1 ? "\u0438" : "", " \u043A\u043B\u044E\u0447").concat(issue2.keys.length > 1 ? "\u043E\u0432\u0435" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ".concat(issue2.origin);
      case "invalid_union":
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
      case "invalid_element":
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ".concat(issue2.origin);
      default:
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
    }
  };
};
function bg_default() {
  return {
    localeError: error4()
  };
}

// ../../node_modules/zod/v4/locales/ca.js
var error5 = function() {
  var Sizable = {
    string: {
      unit: "car\xE0cters",
      verb: "contenir"
    },
    file: {
      unit: "bytes",
      verb: "contenir"
    },
    array: {
      unit: "elements",
      verb: "contenir"
    },
    set: {
      unit: "elements",
      verb: "contenir"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(data))
          return "array";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "entrada",
    email: "adre\xE7a electr\xF2nica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adre\xE7a IPv4",
    ipv6: "adre\xE7a IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Tipus inv\xE0lid: s'esperava ".concat(issue2.expected, ", s'ha rebut ").concat(parsedType8(issue2.input));
      // return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return issue2.values.length === 1 ? "Valor inv\xE0lid: s'esperava ".concat(stringifyPrimitive(issue2.values[0])) : "Opci\xF3 inv\xE0lida: s'esperava una de ".concat(joinValues(issue2.values, " o "));
      case "too_big": {
        var adj = issue2.inclusive ? "com a m\xE0xim" : "menys de", sizing = getSizing(issue2.origin);
        return sizing ? "Massa gran: s'esperava que ".concat(issue2.origin ?? "el valor", " contingu\xE9s ").concat(adj, " ").concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elements") : "Massa gran: s'esperava que ".concat(issue2.origin ?? "el valor", " fos ").concat(adj, " ").concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? "com a m\xEDnim" : "m\xE9s de", _sizing = getSizing(issue2.origin);
        return _sizing ? "Massa petit: s'esperava que ".concat(issue2.origin, " contingu\xE9s ").concat(_adj, " ").concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Massa petit: s'esperava que ".concat(issue2.origin, " fos ").concat(_adj, " ").concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Format inv\xE0lid: ha de comen\xE7ar amb "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? "Format inv\xE0lid: ha d'acabar amb \"".concat(_issue.suffix, '"') : _issue.format === "includes" ? "Format inv\xE0lid: ha d'incloure \"".concat(_issue.includes, '"') : _issue.format === "regex" ? "Format inv\xE0lid: ha de coincidir amb el patr\xF3 ".concat(_issue.pattern) : "Format inv\xE0lid per a ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Clau".concat(issue2.keys.length > 1 ? "s" : "", " no reconeguda").concat(issue2.keys.length > 1 ? "s" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Clau inv\xE0lida a ".concat(issue2.origin);
      case "invalid_union":
        return "Entrada inv\xE0lida";
      // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
      case "invalid_element":
        return "Element inv\xE0lid a ".concat(issue2.origin);
      default:
        return "Entrada inv\xE0lida";
    }
  };
};
function ca_default() {
  return {
    localeError: error5()
  };
}

// ../../node_modules/zod/v4/locales/cs.js
var error6 = function() {
  var Sizable = {
    string: {
      unit: "znak\u016F",
      verb: "m\xEDt"
    },
    file: {
      unit: "bajt\u016F",
      verb: "m\xEDt"
    },
    array: {
      unit: "prvk\u016F",
      verb: "m\xEDt"
    },
    set: {
      unit: "prvk\u016F",
      verb: "m\xEDt"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "\u010D\xEDslo";
      case "string":
        return "\u0159et\u011Bzec";
      case "boolean":
        return "boolean";
      case "bigint":
        return "bigint";
      case "function":
        return "funkce";
      case "symbol":
        return "symbol";
      case "undefined":
        return "undefined";
      case "object": {
        if (Array.isArray(data))
          return "pole";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "regul\xE1rn\xED v\xFDraz",
    email: "e-mailov\xE1 adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a \u010Das ve form\xE1tu ISO",
    date: "datum ve form\xE1tu ISO",
    time: "\u010Das ve form\xE1tu ISO",
    duration: "doba trv\xE1n\xED ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
    base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
    json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
    e164: "\u010D\xEDslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ".concat(issue2.expected, ", obdr\u017Eeno ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ".concat(stringifyPrimitive(issue2.values[0])) : "Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Hodnota je p\u0159\xEDli\u0161 velk\xE1: ".concat(issue2.origin ?? "hodnota", " mus\xED m\xEDt ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "prvk\u016F") : "Hodnota je p\u0159\xEDli\u0161 velk\xE1: ".concat(issue2.origin ?? "hodnota", " mus\xED b\xFDt ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Hodnota je p\u0159\xEDli\u0161 mal\xE1: ".concat(issue2.origin ?? "hodnota", " mus\xED m\xEDt ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit ?? "prvk\u016F") : "Hodnota je p\u0159\xEDli\u0161 mal\xE1: ".concat(issue2.origin ?? "hodnota", " mus\xED b\xFDt ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ".concat(_issue.pattern) : "Neplatn\xFD form\xE1t ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Nezn\xE1m\xE9 kl\xED\u010De: ".concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Neplatn\xFD kl\xED\u010D v ".concat(issue2.origin);
      case "invalid_union":
        return "Neplatn\xFD vstup";
      case "invalid_element":
        return "Neplatn\xE1 hodnota v ".concat(issue2.origin);
      default:
        return "Neplatn\xFD vstup";
    }
  };
};
function cs_default() {
  return {
    localeError: error6()
  };
}

// ../../node_modules/zod/v4/locales/da.js
var error7 = function() {
  var Sizable = {
    string: {
      unit: "tegn",
      verb: "havde"
    },
    file: {
      unit: "bytes",
      verb: "havde"
    },
    array: {
      unit: "elementer",
      verb: "indeholdt"
    },
    set: {
      unit: "elementer",
      verb: "indeholdt"
    }
  }, TypeNames = {
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "s\xE6t",
    file: "fil"
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  function getTypeName(type) {
    return TypeNames[type] ?? type;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "tal";
      case "object":
        return Array.isArray(data) ? "liste" : data === null ? "null" : Object.getPrototypeOf(data) !== Object.prototype && data.constructor ? data.constructor.name : "objekt";
    }
    return t;
  }, Nouns = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkesl\xE6t",
    date: "ISO-dato",
    time: "ISO-klokkesl\xE6t",
    duration: "ISO-varighed",
    ipv4: "IPv4-omr\xE5de",
    ipv6: "IPv6-omr\xE5de",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Ugyldigt input: forventede ".concat(getTypeName(issue2.expected), ", fik ").concat(getTypeName(parsedType8(issue2.input)));
      case "invalid_value":
        return issue2.values.length === 1 ? "Ugyldig v\xE6rdi: forventede ".concat(stringifyPrimitive(issue2.values[0])) : "Ugyldigt valg: forventede en af f\xF8lgende ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin), origin = getTypeName(issue2.origin);
        return sizing ? "For stor: forventede ".concat(origin ?? "value", " ").concat(sizing.verb, " ").concat(adj, " ").concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elementer") : "For stor: forventede ".concat(origin ?? "value", " havde ").concat(adj, " ").concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin), _origin = getTypeName(issue2.origin);
        return _sizing ? "For lille: forventede ".concat(_origin, " ").concat(_sizing.verb, " ").concat(_adj, " ").concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "For lille: forventede ".concat(_origin, " havde ").concat(_adj, " ").concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Ugyldig streng: skal starte med "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Ugyldig streng: skal ende med "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Ugyldig streng: skal indeholde "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Ugyldig streng: skal matche m\xF8nsteret ".concat(_issue.pattern) : "Ugyldig ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Ugyldigt tal: skal v\xE6re deleligt med ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "".concat(issue2.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Ugyldig n\xF8gle i ".concat(issue2.origin);
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return "Ugyldig v\xE6rdi i ".concat(issue2.origin);
      default:
        return "Ugyldigt input";
    }
  };
};
function da_default() {
  return {
    localeError: error7()
  };
}

// ../../node_modules/zod/v4/locales/de.js
var error8 = function() {
  var Sizable = {
    string: {
      unit: "Zeichen",
      verb: "zu haben"
    },
    file: {
      unit: "Bytes",
      verb: "zu haben"
    },
    array: {
      unit: "Elemente",
      verb: "zu haben"
    },
    set: {
      unit: "Elemente",
      verb: "zu haben"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "Zahl";
      case "object": {
        if (Array.isArray(data))
          return "Array";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Ung\xFCltige Eingabe: erwartet ".concat(issue2.expected, ", erhalten ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Ung\xFCltige Eingabe: erwartet ".concat(stringifyPrimitive(issue2.values[0])) : "Ung\xFCltige Option: erwartet eine von ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Zu gro\xDF: erwartet, dass ".concat(issue2.origin ?? "Wert", " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "Elemente", " hat") : "Zu gro\xDF: erwartet, dass ".concat(issue2.origin ?? "Wert", " ").concat(adj).concat(issue2.maximum.toString(), " ist");
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Zu klein: erwartet, dass ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit, " hat") : "Zu klein: erwartet, dass ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString(), " ist");
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Ung\xFCltiger String: muss mit "'.concat(_issue.prefix, '" beginnen') : _issue.format === "ends_with" ? 'Ung\xFCltiger String: muss mit "'.concat(_issue.suffix, '" enden') : _issue.format === "includes" ? 'Ung\xFCltiger String: muss "'.concat(_issue.includes, '" enthalten') : _issue.format === "regex" ? "Ung\xFCltiger String: muss dem Muster ".concat(_issue.pattern, " entsprechen") : "Ung\xFCltig: ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Ung\xFCltige Zahl: muss ein Vielfaches von ".concat(issue2.divisor, " sein");
      case "unrecognized_keys":
        return "".concat(issue2.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Ung\xFCltiger Schl\xFCssel in ".concat(issue2.origin);
      case "invalid_union":
        return "Ung\xFCltige Eingabe";
      case "invalid_element":
        return "Ung\xFCltiger Wert in ".concat(issue2.origin);
      default:
        return "Ung\xFCltige Eingabe";
    }
  };
};
function de_default() {
  return {
    localeError: error8()
  };
}

// ../../node_modules/zod/v4/locales/en.js
var parsedType2 = function(data) {
  var t = typeof data;
  switch (t) {
    case "number":
      return Number.isNaN(data) ? "NaN" : "number";
    case "object": {
      if (Array.isArray(data))
        return "array";
      if (data === null)
        return "null";
      if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
        return data.constructor.name;
    }
  }
  return t;
}, error9 = function() {
  var Sizable = {
    string: {
      unit: "characters",
      verb: "to have"
    },
    file: {
      unit: "bytes",
      verb: "to have"
    },
    array: {
      unit: "items",
      verb: "to have"
    },
    set: {
      unit: "items",
      verb: "to have"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var Nouns = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Invalid input: expected ".concat(issue2.expected, ", received ").concat(parsedType2(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Invalid input: expected ".concat(stringifyPrimitive(issue2.values[0])) : "Invalid option: expected one of ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Too big: expected ".concat(issue2.origin ?? "value", " to have ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elements") : "Too big: expected ".concat(issue2.origin ?? "value", " to be ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Too small: expected ".concat(issue2.origin, " to have ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Too small: expected ".concat(issue2.origin, " to be ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Invalid string: must start with "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Invalid string: must end with "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Invalid string: must include "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Invalid string: must match pattern ".concat(_issue.pattern) : "Invalid ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Invalid number: must be a multiple of ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Unrecognized key".concat(issue2.keys.length > 1 ? "s" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Invalid key in ".concat(issue2.origin);
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return "Invalid value in ".concat(issue2.origin);
      default:
        return "Invalid input";
    }
  };
};
function en_default() {
  return {
    localeError: error9()
  };
}

// ../../node_modules/zod/v4/locales/eo.js
var parsedType3 = function(data) {
  var t = typeof data;
  switch (t) {
    case "number":
      return Number.isNaN(data) ? "NaN" : "nombro";
    case "object": {
      if (Array.isArray(data))
        return "tabelo";
      if (data === null)
        return "senvalora";
      if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
        return data.constructor.name;
    }
  }
  return t;
}, error10 = function() {
  var Sizable = {
    string: {
      unit: "karaktrojn",
      verb: "havi"
    },
    file: {
      unit: "bajtojn",
      verb: "havi"
    },
    array: {
      unit: "elementojn",
      verb: "havi"
    },
    set: {
      unit: "elementojn",
      verb: "havi"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var Nouns = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emo\u011Dio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-da\u016Dro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Nevalida enigo: atendi\u011Dis ".concat(issue2.expected, ", ricevi\u011Dis ").concat(parsedType3(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Nevalida enigo: atendi\u011Dis ".concat(stringifyPrimitive(issue2.values[0])) : "Nevalida opcio: atendi\u011Dis unu el ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Tro granda: atendi\u011Dis ke ".concat(issue2.origin ?? "valoro", " havu ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elementojn") : "Tro granda: atendi\u011Dis ke ".concat(issue2.origin ?? "valoro", " havu ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Tro malgranda: atendi\u011Dis ke ".concat(issue2.origin, " havu ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Tro malgranda: atendi\u011Dis ke ".concat(issue2.origin, " estu ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Nevalida karaktraro: devas komenci\u011Di per "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Nevalida karaktraro: devas fini\u011Di per "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Nevalida karaktraro: devas inkluzivi "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Nevalida karaktraro: devas kongrui kun la modelo ".concat(_issue.pattern) : "Nevalida ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Nevalida nombro: devas esti oblo de ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Nekonata".concat(issue2.keys.length > 1 ? "j" : "", " \u015Dlosilo").concat(issue2.keys.length > 1 ? "j" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Nevalida \u015Dlosilo en ".concat(issue2.origin);
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return "Nevalida valoro en ".concat(issue2.origin);
      default:
        return "Nevalida enigo";
    }
  };
};
function eo_default() {
  return {
    localeError: error10()
  };
}

// ../../node_modules/zod/v4/locales/es.js
var error11 = function() {
  var Sizable = {
    string: {
      unit: "caracteres",
      verb: "tener"
    },
    file: {
      unit: "bytes",
      verb: "tener"
    },
    array: {
      unit: "elementos",
      verb: "tener"
    },
    set: {
      unit: "elementos",
      verb: "tener"
    }
  }, TypeNames = {
    string: "texto",
    number: "n\xFAmero",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "n\xFAmero grande",
    symbol: "s\xEDmbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "funci\xF3n",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeraci\xF3n",
    union: "uni\xF3n",
    literal: "literal",
    promise: "promesa",
    void: "vac\xEDo",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  function getTypeName(type) {
    return TypeNames[type] ?? type;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "number";
      case "object":
        return Array.isArray(data) ? "array" : data === null ? "null" : Object.getPrototypeOf(data) !== Object.prototype ? data.constructor.name : "object";
    }
    return t;
  }, Nouns = {
    regex: "entrada",
    email: "direcci\xF3n de correo electr\xF3nico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duraci\xF3n ISO",
    ipv4: "direcci\xF3n IPv4",
    ipv6: "direcci\xF3n IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Entrada inv\xE1lida: se esperaba ".concat(getTypeName(issue2.expected), ", recibido ").concat(getTypeName(parsedType8(issue2.input)));
      // return `Entrada inválida: se esperaba ${issue.expected}, recibido ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return issue2.values.length === 1 ? "Entrada inv\xE1lida: se esperaba ".concat(stringifyPrimitive(issue2.values[0])) : "Opci\xF3n inv\xE1lida: se esperaba una de ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin), origin = getTypeName(issue2.origin);
        return sizing ? "Demasiado grande: se esperaba que ".concat(origin ?? "valor", " tuviera ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elementos") : "Demasiado grande: se esperaba que ".concat(origin ?? "valor", " fuera ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin), _origin = getTypeName(issue2.origin);
        return _sizing ? "Demasiado peque\xF1o: se esperaba que ".concat(_origin, " tuviera ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Demasiado peque\xF1o: se esperaba que ".concat(_origin, " fuera ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Cadena inv\xE1lida: debe comenzar con "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Cadena inv\xE1lida: debe terminar en "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Cadena inv\xE1lida: debe incluir "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Cadena inv\xE1lida: debe coincidir con el patr\xF3n ".concat(_issue.pattern) : "Inv\xE1lido ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Llave".concat(issue2.keys.length > 1 ? "s" : "", " desconocida").concat(issue2.keys.length > 1 ? "s" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Llave inv\xE1lida en ".concat(getTypeName(issue2.origin));
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return "Valor inv\xE1lido en ".concat(getTypeName(issue2.origin));
      default:
        return "Entrada inv\xE1lida";
    }
  };
};
function es_default() {
  return {
    localeError: error11()
  };
}

// ../../node_modules/zod/v4/locales/fa.js
var error12 = function() {
  var Sizable = {
    string: {
      unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F"
    },
    file: {
      unit: "\u0628\u0627\u06CC\u062A",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F"
    },
    array: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F"
    },
    set: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "\u0639\u062F\u062F";
      case "object": {
        if (Array.isArray(data))
          return "\u0622\u0631\u0627\u06CC\u0647";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u0648\u0631\u0648\u062F\u06CC",
    email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
    url: "URL",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
    time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    ipv4: "IPv4 \u0622\u062F\u0631\u0633",
    ipv6: "IPv6 \u0622\u062F\u0631\u0633",
    cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
    cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
    base64: "base64-encoded \u0631\u0634\u062A\u0647",
    base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
    json_string: "JSON \u0631\u0634\u062A\u0647",
    e164: "E.164 \u0639\u062F\u062F",
    jwt: "JWT",
    template_literal: "\u0648\u0631\u0648\u062F\u06CC"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ".concat(issue2.expected, " \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ").concat(parsedType8(issue2.input), " \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F");
      case "invalid_value":
        return issue2.values.length === 1 ? "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ".concat(stringifyPrimitive(issue2.values[0]), " \u0645\u06CC\u200C\u0628\u0648\u062F") : "\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ".concat(joinValues(issue2.values, "|"), " \u0645\u06CC\u200C\u0628\u0648\u062F");
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ".concat(issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631", " \u0628\u0627\u06CC\u062F ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\u0639\u0646\u0635\u0631", " \u0628\u0627\u0634\u062F") : "\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ".concat(issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631", " \u0628\u0627\u06CC\u062F ").concat(adj).concat(issue2.maximum.toString(), " \u0628\u0627\u0634\u062F");
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ".concat(issue2.origin, " \u0628\u0627\u06CC\u062F ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit, " \u0628\u0627\u0634\u062F") : "\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ".concat(issue2.origin, " \u0628\u0627\u06CC\u062F ").concat(_adj).concat(issue2.minimum.toString(), " \u0628\u0627\u0634\u062F");
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "'.concat(_issue.prefix, '" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F') : _issue.format === "ends_with" ? '\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "'.concat(_issue.suffix, '" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F') : _issue.format === "includes" ? '\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "'.concat(_issue.includes, '" \u0628\u0627\u0634\u062F') : _issue.format === "regex" ? "\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ".concat(_issue.pattern, " \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F") : "".concat(Nouns[_issue.format] ?? issue2.format, " \u0646\u0627\u0645\u0639\u062A\u0628\u0631");
      }
      case "not_multiple_of":
        return "\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ".concat(issue2.divisor, " \u0628\u0627\u0634\u062F");
      case "unrecognized_keys":
        return "\u06A9\u0644\u06CC\u062F".concat(issue2.keys.length > 1 ? "\u0647\u0627\u06CC" : "", " \u0646\u0627\u0634\u0646\u0627\u0633: ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ".concat(issue2.origin);
      case "invalid_union":
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
      case "invalid_element":
        return "\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ".concat(issue2.origin);
      default:
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
    }
  };
};
function fa_default() {
  return {
    localeError: error12()
  };
}

// ../../node_modules/zod/v4/locales/fi.js
var error13 = function() {
  var Sizable = {
    string: {
      unit: "merkki\xE4",
      subject: "merkkijonon"
    },
    file: {
      unit: "tavua",
      subject: "tiedoston"
    },
    array: {
      unit: "alkiota",
      subject: "listan"
    },
    set: {
      unit: "alkiota",
      subject: "joukon"
    },
    number: {
      unit: "",
      subject: "luvun"
    },
    bigint: {
      unit: "",
      subject: "suuren kokonaisluvun"
    },
    int: {
      unit: "",
      subject: "kokonaisluvun"
    },
    date: {
      unit: "",
      subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(data))
          return "array";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "s\xE4\xE4nn\xF6llinen lauseke",
    email: "s\xE4hk\xF6postiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Virheellinen tyyppi: odotettiin ".concat(issue2.expected, ", oli ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Virheellinen sy\xF6te: t\xE4ytyy olla ".concat(stringifyPrimitive(issue2.values[0])) : "Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Liian suuri: ".concat(sizing.subject, " t\xE4ytyy olla ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit).trim() : "Liian suuri: arvon t\xE4ytyy olla ".concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Liian pieni: ".concat(_sizing.subject, " t\xE4ytyy olla ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit).trim() : "Liian pieni: arvon t\xE4ytyy olla ".concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Virheellinen sy\xF6te: t\xE4ytyy alkaa "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Virheellinen sy\xF6te: t\xE4ytyy loppua "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ".concat(_issue.pattern) : "Virheellinen ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Virheellinen luku: t\xE4ytyy olla luvun ".concat(issue2.divisor, " monikerta");
      case "unrecognized_keys":
        return "".concat(issue2.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen sy\xF6te";
    }
  };
};
function fi_default() {
  return {
    localeError: error13()
  };
}

// ../../node_modules/zod/v4/locales/fr.js
var error14 = function() {
  var Sizable = {
    string: {
      unit: "caract\xE8res",
      verb: "avoir"
    },
    file: {
      unit: "octets",
      verb: "avoir"
    },
    array: {
      unit: "\xE9l\xE9ments",
      verb: "avoir"
    },
    set: {
      unit: "\xE9l\xE9ments",
      verb: "avoir"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "nombre";
      case "object": {
        if (Array.isArray(data))
          return "tableau";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "entr\xE9e",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "dur\xE9e ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "cha\xEEne encod\xE9e en base64",
    base64url: "cha\xEEne encod\xE9e en base64url",
    json_string: "cha\xEEne JSON",
    e164: "num\xE9ro E.164",
    jwt: "JWT",
    template_literal: "entr\xE9e"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Entr\xE9e invalide : ".concat(issue2.expected, " attendu, ").concat(parsedType8(issue2.input), " re\xE7u");
      case "invalid_value":
        return issue2.values.length === 1 ? "Entr\xE9e invalide : ".concat(stringifyPrimitive(issue2.values[0]), " attendu") : "Option invalide : une valeur parmi ".concat(joinValues(issue2.values, "|"), " attendue");
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Trop grand : ".concat(issue2.origin ?? "valeur", " doit ").concat(sizing.verb, " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\xE9l\xE9ment(s)") : "Trop grand : ".concat(issue2.origin ?? "valeur", " doit \xEAtre ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Trop petit : ".concat(issue2.origin, " doit ").concat(_sizing.verb, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Trop petit : ".concat(issue2.origin, " doit \xEAtre ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Cha\xEEne invalide : doit commencer par "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Cha\xEEne invalide : doit se terminer par "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Cha\xEEne invalide : doit inclure "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Cha\xEEne invalide : doit correspondre au mod\xE8le ".concat(_issue.pattern) : "".concat(Nouns[_issue.format] ?? issue2.format, " invalide");
      }
      case "not_multiple_of":
        return "Nombre invalide : doit \xEAtre un multiple de ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Cl\xE9".concat(issue2.keys.length > 1 ? "s" : "", " non reconnue").concat(issue2.keys.length > 1 ? "s" : "", " : ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Cl\xE9 invalide dans ".concat(issue2.origin);
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return "Valeur invalide dans ".concat(issue2.origin);
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function fr_default() {
  return {
    localeError: error14()
  };
}

// ../../node_modules/zod/v4/locales/fr-CA.js
var error15 = function() {
  var Sizable = {
    string: {
      unit: "caract\xE8res",
      verb: "avoir"
    },
    file: {
      unit: "octets",
      verb: "avoir"
    },
    array: {
      unit: "\xE9l\xE9ments",
      verb: "avoir"
    },
    set: {
      unit: "\xE9l\xE9ments",
      verb: "avoir"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(data))
          return "array";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "entr\xE9e",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "dur\xE9e ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "cha\xEEne encod\xE9e en base64",
    base64url: "cha\xEEne encod\xE9e en base64url",
    json_string: "cha\xEEne JSON",
    e164: "num\xE9ro E.164",
    jwt: "JWT",
    template_literal: "entr\xE9e"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Entr\xE9e invalide : attendu ".concat(issue2.expected, ", re\xE7u ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Entr\xE9e invalide : attendu ".concat(stringifyPrimitive(issue2.values[0])) : "Option invalide : attendu l'une des valeurs suivantes ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "\u2264" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Trop grand : attendu que ".concat(issue2.origin ?? "la valeur", " ait ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit) : "Trop grand : attendu que ".concat(issue2.origin ?? "la valeur", " soit ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? "\u2265" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Trop petit : attendu que ".concat(issue2.origin, " ait ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Trop petit : attendu que ".concat(issue2.origin, " soit ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Cha\xEEne invalide : doit commencer par "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Cha\xEEne invalide : doit se terminer par "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Cha\xEEne invalide : doit inclure "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Cha\xEEne invalide : doit correspondre au motif ".concat(_issue.pattern) : "".concat(Nouns[_issue.format] ?? issue2.format, " invalide");
      }
      case "not_multiple_of":
        return "Nombre invalide : doit \xEAtre un multiple de ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Cl\xE9".concat(issue2.keys.length > 1 ? "s" : "", " non reconnue").concat(issue2.keys.length > 1 ? "s" : "", " : ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Cl\xE9 invalide dans ".concat(issue2.origin);
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return "Valeur invalide dans ".concat(issue2.origin);
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function fr_CA_default() {
  return {
    localeError: error15()
  };
}

// ../../node_modules/zod/v4/locales/he.js
var error16 = function() {
  var TypeNames = {
    string: {
      label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA",
      gender: "f"
    },
    number: {
      label: "\u05DE\u05E1\u05E4\u05E8",
      gender: "m"
    },
    boolean: {
      label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9",
      gender: "m"
    },
    bigint: {
      label: "BigInt",
      gender: "m"
    },
    date: {
      label: "\u05EA\u05D0\u05E8\u05D9\u05DA",
      gender: "m"
    },
    array: {
      label: "\u05DE\u05E2\u05E8\u05DA",
      gender: "m"
    },
    object: {
      label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8",
      gender: "m"
    },
    null: {
      label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)",
      gender: "m"
    },
    undefined: {
      label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)",
      gender: "m"
    },
    symbol: {
      label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)",
      gender: "m"
    },
    function: {
      label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4",
      gender: "f"
    },
    map: {
      label: "\u05DE\u05E4\u05D4 (Map)",
      gender: "f"
    },
    set: {
      label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)",
      gender: "f"
    },
    file: {
      label: "\u05E7\u05D5\u05D1\u05E5",
      gender: "m"
    },
    promise: {
      label: "Promise",
      gender: "m"
    },
    NaN: {
      label: "NaN",
      gender: "m"
    },
    unknown: {
      label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2",
      gender: "m"
    },
    value: {
      label: "\u05E2\u05E8\u05DA",
      gender: "m"
    }
  }, Sizable = {
    string: {
      unit: "\u05EA\u05D5\u05D5\u05D9\u05DD",
      shortLabel: "\u05E7\u05E6\u05E8",
      longLabel: "\u05D0\u05E8\u05D5\u05DA"
    },
    file: {
      unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD",
      shortLabel: "\u05E7\u05D8\u05DF",
      longLabel: "\u05D2\u05D3\u05D5\u05DC"
    },
    array: {
      unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
      shortLabel: "\u05E7\u05D8\u05DF",
      longLabel: "\u05D2\u05D3\u05D5\u05DC"
    },
    set: {
      unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
      shortLabel: "\u05E7\u05D8\u05DF",
      longLabel: "\u05D2\u05D3\u05D5\u05DC"
    },
    number: {
      unit: "",
      shortLabel: "\u05E7\u05D8\u05DF",
      longLabel: "\u05D2\u05D3\u05D5\u05DC"
    }
    // no unit
  }, typeEntry = function(t) {
    return t ? TypeNames[t] : void 0;
  }, typeLabel = function(t) {
    var e = typeEntry(t);
    return e ? e.label : t ?? TypeNames.unknown.label;
  }, withDefinite = function(t) {
    return "\u05D4".concat(typeLabel(t));
  }, verbFor = function(t) {
    var e = typeEntry(t), gender = (e == null ? void 0 : e.gender) ?? "m";
    return gender === "f" ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA" : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA";
  }, getSizing = function(origin) {
    return origin ? Sizable[origin] ?? null : null;
  }, parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "number";
      case "object":
        return Array.isArray(data) ? "array" : data === null ? "null" : Object.getPrototypeOf(data) !== Object.prototype && data.constructor ? data.constructor.name : "object";
      default:
        return t;
    }
  }, Nouns = {
    regex: {
      label: "\u05E7\u05DC\u05D8",
      gender: "m"
    },
    email: {
      label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
      gender: "f"
    },
    url: {
      label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA",
      gender: "f"
    },
    emoji: {
      label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9",
      gender: "m"
    },
    uuid: {
      label: "UUID",
      gender: "m"
    },
    nanoid: {
      label: "nanoid",
      gender: "m"
    },
    guid: {
      label: "GUID",
      gender: "m"
    },
    cuid: {
      label: "cuid",
      gender: "m"
    },
    cuid2: {
      label: "cuid2",
      gender: "m"
    },
    ulid: {
      label: "ULID",
      gender: "m"
    },
    xid: {
      label: "XID",
      gender: "m"
    },
    ksuid: {
      label: "KSUID",
      gender: "m"
    },
    datetime: {
      label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO",
      gender: "m"
    },
    date: {
      label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO",
      gender: "m"
    },
    time: {
      label: "\u05D6\u05DE\u05DF ISO",
      gender: "m"
    },
    duration: {
      label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO",
      gender: "m"
    },
    ipv4: {
      label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4",
      gender: "f"
    },
    ipv6: {
      label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6",
      gender: "f"
    },
    cidrv4: {
      label: "\u05D8\u05D5\u05D5\u05D7 IPv4",
      gender: "m"
    },
    cidrv6: {
      label: "\u05D8\u05D5\u05D5\u05D7 IPv6",
      gender: "m"
    },
    base64: {
      label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64",
      gender: "f"
    },
    base64url: {
      label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
      gender: "f"
    },
    json_string: {
      label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON",
      gender: "f"
    },
    e164: {
      label: "\u05DE\u05E1\u05E4\u05E8 E.164",
      gender: "m"
    },
    jwt: {
      label: "JWT",
      gender: "m"
    },
    ends_with: {
      label: "\u05E7\u05DC\u05D8",
      gender: "m"
    },
    includes: {
      label: "\u05E7\u05DC\u05D8",
      gender: "m"
    },
    lowercase: {
      label: "\u05E7\u05DC\u05D8",
      gender: "m"
    },
    starts_with: {
      label: "\u05E7\u05DC\u05D8",
      gender: "m"
    },
    uppercase: {
      label: "\u05E7\u05DC\u05D8",
      gender: "m"
    }
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type": {
        var _TypeNames$receivedKe, expectedKey = issue2.expected, expected = typeLabel(expectedKey), receivedKey = parsedType8(issue2.input), received = ((_TypeNames$receivedKe = TypeNames[receivedKey]) === null || _TypeNames$receivedKe === void 0 ? void 0 : _TypeNames$receivedKe.label) ?? receivedKey;
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ".concat(expected, ", \u05D4\u05EA\u05E7\u05D1\u05DC ").concat(received);
      }
      case "invalid_value": {
        if (issue2.values.length === 1)
          return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ".concat(stringifyPrimitive(issue2.values[0]));
        var stringified = issue2.values.map(function(v) {
          return stringifyPrimitive(v);
        });
        if (issue2.values.length === 2)
          return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ".concat(stringified[0], " \u05D0\u05D5 ").concat(stringified[1]);
        var lastValue = stringified[stringified.length - 1], restValues = stringified.slice(0, -1).join(", ");
        return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ".concat(restValues, " \u05D0\u05D5 ").concat(lastValue);
      }
      case "too_big": {
        var sizing = getSizing(issue2.origin), subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string")
          return "".concat((sizing == null ? void 0 : sizing.longLabel) ?? "\u05D0\u05E8\u05D5\u05DA", " \u05DE\u05D3\u05D9: ").concat(subject, " \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ").concat(issue2.maximum.toString(), " ").concat((sizing == null ? void 0 : sizing.unit) ?? "", " ").concat(issue2.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8").trim();
        if (issue2.origin === "number") {
          var comparison = issue2.inclusive ? "\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-".concat(issue2.maximum) : "\u05E7\u05D8\u05DF \u05DE-".concat(issue2.maximum);
          return "\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ".concat(subject, " \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ").concat(comparison);
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          var verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA", _comparison = issue2.inclusive ? "".concat(issue2.maximum, " ").concat((sizing == null ? void 0 : sizing.unit) ?? "", " \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA") : "\u05E4\u05D7\u05D5\u05EA \u05DE-".concat(issue2.maximum, " ").concat((sizing == null ? void 0 : sizing.unit) ?? "");
          return "\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ".concat(subject, " ").concat(verb, " \u05DC\u05D4\u05DB\u05D9\u05DC ").concat(_comparison).trim();
        }
        var adj = issue2.inclusive ? "<=" : "<", be = verbFor(issue2.origin ?? "value");
        return sizing != null && sizing.unit ? "".concat(sizing.longLabel, " \u05DE\u05D3\u05D9: ").concat(subject, " ").concat(be, " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit) : "".concat((sizing == null ? void 0 : sizing.longLabel) ?? "\u05D2\u05D3\u05D5\u05DC", " \u05DE\u05D3\u05D9: ").concat(subject, " ").concat(be, " ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _sizing = getSizing(issue2.origin), _subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string")
          return "".concat((_sizing == null ? void 0 : _sizing.shortLabel) ?? "\u05E7\u05E6\u05E8", " \u05DE\u05D3\u05D9: ").concat(_subject, " \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ").concat(issue2.minimum.toString(), " ").concat((_sizing == null ? void 0 : _sizing.unit) ?? "", " ").concat(issue2.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA").trim();
        if (issue2.origin === "number") {
          var _comparison2 = issue2.inclusive ? "\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-".concat(issue2.minimum) : "\u05D2\u05D3\u05D5\u05DC \u05DE-".concat(issue2.minimum);
          return "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ".concat(_subject, " \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ").concat(_comparison2);
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          var _verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
          if (issue2.minimum === 1 && issue2.inclusive) {
            var singularPhrase = (issue2.origin === "set", "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3");
            return "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ".concat(_subject, " ").concat(_verb, " \u05DC\u05D4\u05DB\u05D9\u05DC ").concat(singularPhrase);
          }
          var _comparison3 = issue2.inclusive ? "".concat(issue2.minimum, " ").concat((_sizing == null ? void 0 : _sizing.unit) ?? "", " \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8") : "\u05D9\u05D5\u05EA\u05E8 \u05DE-".concat(issue2.minimum, " ").concat((_sizing == null ? void 0 : _sizing.unit) ?? "");
          return "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ".concat(_subject, " ").concat(_verb, " \u05DC\u05D4\u05DB\u05D9\u05DC ").concat(_comparison3).trim();
        }
        var _adj = issue2.inclusive ? ">=" : ">", _be = verbFor(issue2.origin ?? "value");
        return _sizing != null && _sizing.unit ? "".concat(_sizing.shortLabel, " \u05DE\u05D3\u05D9: ").concat(_subject, " ").concat(_be, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "".concat((_sizing == null ? void 0 : _sizing.shortLabel) ?? "\u05E7\u05D8\u05DF", " \u05DE\u05D3\u05D9: ").concat(_subject, " ").concat(_be, " ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        if (_issue.format === "starts_with") return '\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "'.concat(_issue.prefix, '"');
        if (_issue.format === "ends_with") return '\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "'.concat(_issue.suffix, '"');
        if (_issue.format === "includes") return '\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "'.concat(_issue.includes, '"');
        if (_issue.format === "regex") return "\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ".concat(_issue.pattern);
        var nounEntry = Nouns[_issue.format], noun = (nounEntry == null ? void 0 : nounEntry.label) ?? _issue.format, gender = (nounEntry == null ? void 0 : nounEntry.gender) ?? "m", adjective = gender === "f" ? "\u05EA\u05E7\u05D9\u05E0\u05D4" : "\u05EA\u05E7\u05D9\u05DF";
        return "".concat(noun, " \u05DC\u05D0 ").concat(adjective);
      }
      case "not_multiple_of":
        return "\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "\u05DE\u05E4\u05EA\u05D7".concat(issue2.keys.length > 1 ? "\u05D5\u05EA" : "", " \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4").concat(issue2.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
      case "invalid_union":
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
      case "invalid_element": {
        var place = withDefinite(issue2.origin ?? "array");
        return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1".concat(place);
      }
      default:
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
    }
  };
};
function he_default() {
  return {
    localeError: error16()
  };
}

// ../../node_modules/zod/v4/locales/hu.js
var error17 = function() {
  var Sizable = {
    string: {
      unit: "karakter",
      verb: "legyen"
    },
    file: {
      unit: "byte",
      verb: "legyen"
    },
    array: {
      unit: "elem",
      verb: "legyen"
    },
    set: {
      unit: "elem",
      verb: "legyen"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "sz\xE1m";
      case "object": {
        if (Array.isArray(data))
          return "t\xF6mb";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "bemenet",
    email: "email c\xEDm",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO id\u0151b\xE9lyeg",
    date: "ISO d\xE1tum",
    time: "ISO id\u0151",
    duration: "ISO id\u0151intervallum",
    ipv4: "IPv4 c\xEDm",
    ipv6: "IPv6 c\xEDm",
    cidrv4: "IPv4 tartom\xE1ny",
    cidrv6: "IPv6 tartom\xE1ny",
    base64: "base64-k\xF3dolt string",
    base64url: "base64url-k\xF3dolt string",
    json_string: "JSON string",
    e164: "E.164 sz\xE1m",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ".concat(issue2.expected, ", a kapott \xE9rt\xE9k ").concat(parsedType8(issue2.input));
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return issue2.values.length === 1 ? "\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ".concat(stringifyPrimitive(issue2.values[0])) : "\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "T\xFAl nagy: ".concat(issue2.origin ?? "\xE9rt\xE9k", " m\xE9rete t\xFAl nagy ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elem") : "T\xFAl nagy: a bemeneti \xE9rt\xE9k ".concat(issue2.origin ?? "\xE9rt\xE9k", " t\xFAl nagy: ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "T\xFAl kicsi: a bemeneti \xE9rt\xE9k ".concat(issue2.origin, " m\xE9rete t\xFAl kicsi ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "T\xFAl kicsi: a bemeneti \xE9rt\xE9k ".concat(issue2.origin, " t\xFAl kicsi ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\xC9rv\xE9nytelen string: "'.concat(_issue.prefix, '" \xE9rt\xE9kkel kell kezd\u0151dnie') : _issue.format === "ends_with" ? '\xC9rv\xE9nytelen string: "'.concat(_issue.suffix, '" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie') : _issue.format === "includes" ? '\xC9rv\xE9nytelen string: "'.concat(_issue.includes, '" \xE9rt\xE9ket kell tartalmaznia') : _issue.format === "regex" ? "\xC9rv\xE9nytelen string: ".concat(_issue.pattern, " mint\xE1nak kell megfelelnie") : "\xC9rv\xE9nytelen ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\xC9rv\xE9nytelen sz\xE1m: ".concat(issue2.divisor, " t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie");
      case "unrecognized_keys":
        return "Ismeretlen kulcs".concat(issue2.keys.length > 1 ? "s" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\xC9rv\xE9nytelen kulcs ".concat(issue2.origin);
      case "invalid_union":
        return "\xC9rv\xE9nytelen bemenet";
      case "invalid_element":
        return "\xC9rv\xE9nytelen \xE9rt\xE9k: ".concat(issue2.origin);
      default:
        return "\xC9rv\xE9nytelen bemenet";
    }
  };
};
function hu_default() {
  return {
    localeError: error17()
  };
}

// ../../node_modules/zod/v4/locales/id.js
var error18 = function() {
  var Sizable = {
    string: {
      unit: "karakter",
      verb: "memiliki"
    },
    file: {
      unit: "byte",
      verb: "memiliki"
    },
    array: {
      unit: "item",
      verb: "memiliki"
    },
    set: {
      unit: "item",
      verb: "memiliki"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(data))
          return "array";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Input tidak valid: diharapkan ".concat(issue2.expected, ", diterima ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Input tidak valid: diharapkan ".concat(stringifyPrimitive(issue2.values[0])) : "Pilihan tidak valid: diharapkan salah satu dari ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Terlalu besar: diharapkan ".concat(issue2.origin ?? "value", " memiliki ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elemen") : "Terlalu besar: diharapkan ".concat(issue2.origin ?? "value", " menjadi ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Terlalu kecil: diharapkan ".concat(issue2.origin, " memiliki ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Terlalu kecil: diharapkan ".concat(issue2.origin, " menjadi ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'String tidak valid: harus dimulai dengan "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'String tidak valid: harus berakhir dengan "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'String tidak valid: harus menyertakan "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "String tidak valid: harus sesuai pola ".concat(_issue.pattern) : "".concat(Nouns[_issue.format] ?? issue2.format, " tidak valid");
      }
      case "not_multiple_of":
        return "Angka tidak valid: harus kelipatan dari ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Kunci tidak dikenali ".concat(issue2.keys.length > 1 ? "s" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Kunci tidak valid di ".concat(issue2.origin);
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return "Nilai tidak valid di ".concat(issue2.origin);
      default:
        return "Input tidak valid";
    }
  };
};
function id_default() {
  return {
    localeError: error18()
  };
}

// ../../node_modules/zod/v4/locales/is.js
var parsedType4 = function(data) {
  var t = typeof data;
  switch (t) {
    case "number":
      return Number.isNaN(data) ? "NaN" : "n\xFAmer";
    case "object": {
      if (Array.isArray(data))
        return "fylki";
      if (data === null)
        return "null";
      if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
        return data.constructor.name;
    }
  }
  return t;
}, error19 = function() {
  var Sizable = {
    string: {
      unit: "stafi",
      verb: "a\xF0 hafa"
    },
    file: {
      unit: "b\xE6ti",
      verb: "a\xF0 hafa"
    },
    array: {
      unit: "hluti",
      verb: "a\xF0 hafa"
    },
    set: {
      unit: "hluti",
      verb: "a\xF0 hafa"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var Nouns = {
    regex: "gildi",
    email: "netfang",
    url: "vefsl\xF3\xF0",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og t\xEDmi",
    date: "ISO dagsetning",
    time: "ISO t\xEDmi",
    duration: "ISO t\xEDmalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 t\xF6lugildi",
    jwt: "JWT",
    template_literal: "gildi"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Rangt gildi: \xDE\xFA sl\xF3st inn ".concat(parsedType4(issue2.input), " \xFEar sem \xE1 a\xF0 vera ").concat(issue2.expected);
      case "invalid_value":
        return issue2.values.length === 1 ? "Rangt gildi: gert r\xE1\xF0 fyrir ".concat(stringifyPrimitive(issue2.values[0])) : "\xD3gilt val: m\xE1 vera eitt af eftirfarandi ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ".concat(issue2.origin ?? "gildi", " hafi ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "hluti") : "Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ".concat(issue2.origin ?? "gildi", " s\xE9 ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ".concat(issue2.origin, " hafi ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ".concat(issue2.origin, " s\xE9 ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? '\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? '\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ".concat(_issue.pattern) : "Rangt ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "\xD3\xFEekkt ".concat(issue2.keys.length > 1 ? "ir lyklar" : "ur lykill", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Rangur lykill \xED ".concat(issue2.origin);
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return "Rangt gildi \xED ".concat(issue2.origin);
      default:
        return "Rangt gildi";
    }
  };
};
function is_default() {
  return {
    localeError: error19()
  };
}

// ../../node_modules/zod/v4/locales/it.js
var error20 = function() {
  var Sizable = {
    string: {
      unit: "caratteri",
      verb: "avere"
    },
    file: {
      unit: "byte",
      verb: "avere"
    },
    array: {
      unit: "elementi",
      verb: "avere"
    },
    set: {
      unit: "elementi",
      verb: "avere"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "numero";
      case "object": {
        if (Array.isArray(data))
          return "vettore";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Input non valido: atteso ".concat(issue2.expected, ", ricevuto ").concat(parsedType8(issue2.input));
      // return `Input non valido: atteso ${issue.expected}, ricevuto ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return issue2.values.length === 1 ? "Input non valido: atteso ".concat(stringifyPrimitive(issue2.values[0])) : "Opzione non valida: atteso uno tra ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Troppo grande: ".concat(issue2.origin ?? "valore", " deve avere ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elementi") : "Troppo grande: ".concat(issue2.origin ?? "valore", " deve essere ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Troppo piccolo: ".concat(issue2.origin, " deve avere ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Troppo piccolo: ".concat(issue2.origin, " deve essere ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Stringa non valida: deve iniziare con "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Stringa non valida: deve terminare con "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Stringa non valida: deve includere "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Stringa non valida: deve corrispondere al pattern ".concat(_issue.pattern) : "Invalid ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Numero non valido: deve essere un multiplo di ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Chiav".concat(issue2.keys.length > 1 ? "i" : "e", " non riconosciut").concat(issue2.keys.length > 1 ? "e" : "a", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Chiave non valida in ".concat(issue2.origin);
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return "Valore non valido in ".concat(issue2.origin);
      default:
        return "Input non valido";
    }
  };
};
function it_default() {
  return {
    localeError: error20()
  };
}

// ../../node_modules/zod/v4/locales/ja.js
var error21 = function() {
  var Sizable = {
    string: {
      unit: "\u6587\u5B57",
      verb: "\u3067\u3042\u308B"
    },
    file: {
      unit: "\u30D0\u30A4\u30C8",
      verb: "\u3067\u3042\u308B"
    },
    array: {
      unit: "\u8981\u7D20",
      verb: "\u3067\u3042\u308B"
    },
    set: {
      unit: "\u8981\u7D20",
      verb: "\u3067\u3042\u308B"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "\u6570\u5024";
      case "object": {
        if (Array.isArray(data))
          return "\u914D\u5217";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u5165\u529B\u5024",
    email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    url: "URL",
    emoji: "\u7D75\u6587\u5B57",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO\u65E5\u6642",
    date: "ISO\u65E5\u4ED8",
    time: "ISO\u6642\u523B",
    duration: "ISO\u671F\u9593",
    ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
    ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
    cidrv4: "IPv4\u7BC4\u56F2",
    cidrv6: "IPv6\u7BC4\u56F2",
    base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
    base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
    json_string: "JSON\u6587\u5B57\u5217",
    e164: "E.164\u756A\u53F7",
    jwt: "JWT",
    template_literal: "\u5165\u529B\u5024"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u7121\u52B9\u306A\u5165\u529B: ".concat(issue2.expected, "\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001").concat(parsedType8(issue2.input), "\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F");
      case "invalid_value":
        return issue2.values.length === 1 ? "\u7121\u52B9\u306A\u5165\u529B: ".concat(stringifyPrimitive(issue2.values[0]), "\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F") : "\u7121\u52B9\u306A\u9078\u629E: ".concat(joinValues(issue2.values, "\u3001"), "\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059");
      case "too_big": {
        var adj = issue2.inclusive ? "\u4EE5\u4E0B\u3067\u3042\u308B" : "\u3088\u308A\u5C0F\u3055\u3044", sizing = getSizing(issue2.origin);
        return sizing ? "\u5927\u304D\u3059\u304E\u308B\u5024: ".concat(issue2.origin ?? "\u5024", "\u306F").concat(issue2.maximum.toString()).concat(sizing.unit ?? "\u8981\u7D20").concat(adj, "\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059") : "\u5927\u304D\u3059\u304E\u308B\u5024: ".concat(issue2.origin ?? "\u5024", "\u306F").concat(issue2.maximum.toString()).concat(adj, "\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059");
      }
      case "too_small": {
        var _adj = issue2.inclusive ? "\u4EE5\u4E0A\u3067\u3042\u308B" : "\u3088\u308A\u5927\u304D\u3044", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u5C0F\u3055\u3059\u304E\u308B\u5024: ".concat(issue2.origin, "\u306F").concat(issue2.minimum.toString()).concat(_sizing.unit).concat(_adj, "\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059") : "\u5C0F\u3055\u3059\u304E\u308B\u5024: ".concat(issue2.origin, "\u306F").concat(issue2.minimum.toString()).concat(_adj, "\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059");
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u7121\u52B9\u306A\u6587\u5B57\u5217: "'.concat(_issue.prefix, '"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059') : _issue.format === "ends_with" ? '\u7121\u52B9\u306A\u6587\u5B57\u5217: "'.concat(_issue.suffix, '"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059') : _issue.format === "includes" ? '\u7121\u52B9\u306A\u6587\u5B57\u5217: "'.concat(_issue.includes, '"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059') : _issue.format === "regex" ? "\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3".concat(_issue.pattern, "\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059") : "\u7121\u52B9\u306A".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u7121\u52B9\u306A\u6570\u5024: ".concat(issue2.divisor, "\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059");
      case "unrecognized_keys":
        return "\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC".concat(issue2.keys.length > 1 ? "\u7FA4" : "", ": ").concat(joinValues(issue2.keys, "\u3001"));
      case "invalid_key":
        return "".concat(issue2.origin, "\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC");
      case "invalid_union":
        return "\u7121\u52B9\u306A\u5165\u529B";
      case "invalid_element":
        return "".concat(issue2.origin, "\u5185\u306E\u7121\u52B9\u306A\u5024");
      default:
        return "\u7121\u52B9\u306A\u5165\u529B";
    }
  };
};
function ja_default() {
  return {
    localeError: error21()
  };
}

// ../../node_modules/zod/v4/locales/ka.js
var parsedType5 = function(data) {
  var t = typeof data;
  switch (t) {
    case "number":
      return Number.isNaN(data) ? "NaN" : "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8";
    case "object": {
      if (Array.isArray(data))
        return "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8";
      if (data === null)
        return "null";
      if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
        return data.constructor.name;
    }
  }
  var typeMap = {
    string: "\u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
    boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
    undefined: "undefined",
    bigint: "bigint",
    symbol: "symbol",
    function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0"
  };
  return typeMap[t] ?? t;
}, error22 = function() {
  var Sizable = {
    string: {
      unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD",
      verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1"
    },
    file: {
      unit: "\u10D1\u10D0\u10D8\u10E2\u10D8",
      verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1"
    },
    array: {
      unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
      verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1"
    },
    set: {
      unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
      verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var Nouns = {
    regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
    email: "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    url: "URL",
    emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
    date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
    time: "\u10D3\u10E0\u10DD",
    duration: "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
    ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    cidrv4: "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
    cidrv6: "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
    base64: "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
    base64url: "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
    json_string: "JSON \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
    e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
    jwt: "JWT",
    template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ".concat(issue2.expected, ", \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ").concat(parsedType5(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ".concat(stringifyPrimitive(issue2.values[0])) : "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ".concat(joinValues(issue2.values, "|"), "-\u10D3\u10D0\u10DC");
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ".concat(issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0", " ").concat(sizing.verb, " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit) : "\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ".concat(issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0", " \u10D8\u10E7\u10DD\u10E1 ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ".concat(issue2.origin, " ").concat(_sizing.verb, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ".concat(issue2.origin, " \u10D8\u10E7\u10DD\u10E1 ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "'.concat(_issue.prefix, '"-\u10D8\u10D7') : _issue.format === "ends_with" ? '\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "'.concat(_issue.suffix, '"-\u10D8\u10D7') : _issue.format === "includes" ? '\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "'.concat(_issue.includes, '"-\u10E1') : _issue.format === "regex" ? "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ".concat(_issue.pattern) : "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ".concat(issue2.divisor, "-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8");
      case "unrecognized_keys":
        return "\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1".concat(issue2.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ".concat(issue2.origin, "-\u10E8\u10D8");
      case "invalid_union":
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
      case "invalid_element":
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ".concat(issue2.origin, "-\u10E8\u10D8");
      default:
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
    }
  };
};
function ka_default() {
  return {
    localeError: error22()
  };
}

// ../../node_modules/zod/v4/locales/km.js
var error23 = function() {
  var Sizable = {
    string: {
      unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793"
    },
    file: {
      unit: "\u1794\u17C3",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793"
    },
    array: {
      unit: "\u1792\u17B6\u178F\u17BB",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793"
    },
    set: {
      unit: "\u1792\u17B6\u178F\u17BB",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "\u1798\u17B7\u1793\u1798\u17C2\u1793\u1787\u17B6\u179B\u17C1\u1781 (NaN)" : "\u179B\u17C1\u1781";
      case "object": {
        if (Array.isArray(data))
          return "\u17A2\u17B6\u179A\u17C1 (Array)";
        if (data === null)
          return "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
    email: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
    url: "URL",
    emoji: "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
    date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
    time: "\u1798\u17C9\u17C4\u1784 ISO",
    duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
    ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
    ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
    cidrv4: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
    cidrv6: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
    base64: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
    base64url: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
    json_string: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
    e164: "\u179B\u17C1\u1781 E.164",
    jwt: "JWT",
    template_literal: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ".concat(issue2.expected, " \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ".concat(stringifyPrimitive(issue2.values[0])) : "\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ".concat(issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3", " ").concat(adj, " ").concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\u1792\u17B6\u178F\u17BB") : "\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ".concat(issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3", " ").concat(adj, " ").concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ".concat(issue2.origin, " ").concat(_adj, " ").concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ".concat(issue2.origin, " ").concat(_adj, " ").concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? '\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? '\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ".concat(_issue.pattern) : "\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ".concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ".concat(issue2.origin);
      case "invalid_union":
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
      case "invalid_element":
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ".concat(issue2.origin);
      default:
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
    }
  };
};
function km_default() {
  return {
    localeError: error23()
  };
}

// ../../node_modules/zod/v4/locales/kh.js
function kh_default() {
  return km_default();
}

// ../../node_modules/zod/v4/locales/ko.js
var error24 = function() {
  var Sizable = {
    string: {
      unit: "\uBB38\uC790",
      verb: "to have"
    },
    file: {
      unit: "\uBC14\uC774\uD2B8",
      verb: "to have"
    },
    array: {
      unit: "\uAC1C",
      verb: "to have"
    },
    set: {
      unit: "\uAC1C",
      verb: "to have"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(data))
          return "array";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\uC785\uB825",
    email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
    url: "URL",
    emoji: "\uC774\uBAA8\uC9C0",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
    date: "ISO \uB0A0\uC9DC",
    time: "ISO \uC2DC\uAC04",
    duration: "ISO \uAE30\uAC04",
    ipv4: "IPv4 \uC8FC\uC18C",
    ipv6: "IPv6 \uC8FC\uC18C",
    cidrv4: "IPv4 \uBC94\uC704",
    cidrv6: "IPv6 \uBC94\uC704",
    base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
    base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
    json_string: "JSON \uBB38\uC790\uC5F4",
    e164: "E.164 \uBC88\uD638",
    jwt: "JWT",
    template_literal: "\uC785\uB825"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ".concat(issue2.expected, ", \uBC1B\uC740 \uD0C0\uC785\uC740 ").concat(parsedType8(issue2.input), "\uC785\uB2C8\uB2E4");
      case "invalid_value":
        return issue2.values.length === 1 ? "\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ".concat(stringifyPrimitive(issue2.values[0]), " \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4") : "\uC798\uBABB\uB41C \uC635\uC158: ".concat(joinValues(issue2.values, "\uB610\uB294 "), " \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4");
      case "too_big": {
        var adj = issue2.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC", suffix = adj === "\uBBF8\uB9CC" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4", sizing = getSizing(issue2.origin), unit = (sizing == null ? void 0 : sizing.unit) ?? "\uC694\uC18C";
        return sizing ? "".concat(issue2.origin ?? "\uAC12", "\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ").concat(issue2.maximum.toString()).concat(unit, " ").concat(adj).concat(suffix) : "".concat(issue2.origin ?? "\uAC12", "\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ").concat(issue2.maximum.toString(), " ").concat(adj).concat(suffix);
      }
      case "too_small": {
        var _adj = issue2.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC", _suffix = _adj === "\uC774\uC0C1" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4", _sizing = getSizing(issue2.origin), _unit = (_sizing == null ? void 0 : _sizing.unit) ?? "\uC694\uC18C";
        return _sizing ? "".concat(issue2.origin ?? "\uAC12", "\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ").concat(issue2.minimum.toString()).concat(_unit, " ").concat(_adj).concat(_suffix) : "".concat(issue2.origin ?? "\uAC12", "\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ").concat(issue2.minimum.toString(), " ").concat(_adj).concat(_suffix);
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "'.concat(_issue.prefix, '"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4') : _issue.format === "ends_with" ? '\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "'.concat(_issue.suffix, '"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4') : _issue.format === "includes" ? '\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "'.concat(_issue.includes, '"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4') : _issue.format === "regex" ? "\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ".concat(_issue.pattern, " \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4") : "\uC798\uBABB\uB41C ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\uC798\uBABB\uB41C \uC22B\uC790: ".concat(issue2.divisor, "\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4");
      case "unrecognized_keys":
        return "\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ".concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\uC798\uBABB\uB41C \uD0A4: ".concat(issue2.origin);
      case "invalid_union":
        return "\uC798\uBABB\uB41C \uC785\uB825";
      case "invalid_element":
        return "\uC798\uBABB\uB41C \uAC12: ".concat(issue2.origin);
      default:
        return "\uC798\uBABB\uB41C \uC785\uB825";
    }
  };
};
function ko_default() {
  return {
    localeError: error24()
  };
}

// ../../node_modules/zod/v4/locales/lt.js
var parsedType6 = function(data) {
  var t = typeof data;
  return parsedTypeFromType(t, data);
}, parsedTypeFromType = function(t) {
  var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  switch (t) {
    case "number":
      return Number.isNaN(data) ? "NaN" : "skai\u010Dius";
    case "bigint":
      return "sveikasis skai\u010Dius";
    case "string":
      return "eilut\u0117";
    case "boolean":
      return "login\u0117 reik\u0161m\u0117";
    case "undefined":
    case "void":
      return "neapibr\u0117\u017Eta reik\u0161m\u0117";
    case "function":
      return "funkcija";
    case "symbol":
      return "simbolis";
    case "object":
      return data === void 0 ? "ne\u017Einomas objektas" : data === null ? "nulin\u0117 reik\u0161m\u0117" : Array.isArray(data) ? "masyvas" : Object.getPrototypeOf(data) !== Object.prototype && data.constructor ? data.constructor.name : "objektas";
    //Zod types below
    case "null":
      return "nulin\u0117 reik\u0161m\u0117";
  }
  return t;
}, capitalizeFirstCharacter = function(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
function getUnitTypeFromNumber(number4) {
  var abs = Math.abs(number4), last = abs % 10, last2 = abs % 100;
  return last2 >= 11 && last2 <= 19 || last === 0 ? "many" : last === 1 ? "one" : "few";
}
var error25 = function() {
  var Sizable = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simboli\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
          notInclusive: "turi b\u016Bti trumpesn\u0117 kaip"
        },
        bigger: {
          inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
          notInclusive: "turi b\u016Bti ilgesn\u0117 kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "bait\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi b\u016Bti ne didesnis kaip",
          notInclusive: "turi b\u016Bti ma\u017Eesnis kaip"
        },
        bigger: {
          inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip",
          notInclusive: "turi b\u016Bti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "element\u0105",
        few: "elementus",
        many: "element\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi tur\u0117ti ne daugiau kaip",
          notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
        },
        bigger: {
          inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
          notInclusive: "turi tur\u0117ti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "element\u0105",
        few: "elementus",
        many: "element\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi tur\u0117ti ne daugiau kaip",
          notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
        },
        bigger: {
          inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
          notInclusive: "turi tur\u0117ti daugiau kaip"
        }
      }
    }
  };
  function getSizing(origin, unitType, inclusive, targetShouldBe) {
    var result = Sizable[origin] ?? null;
    return result === null ? result : {
      unit: result.unit[unitType],
      verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"]
    };
  }
  var Nouns = {
    regex: "\u012Fvestis",
    email: "el. pa\u0161to adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukm\u0117",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 u\u017Ekoduota eilut\u0117",
    base64url: "base64url u\u017Ekoduota eilut\u0117",
    json_string: "JSON eilut\u0117",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "\u012Fvestis"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Gautas tipas ".concat(parsedType6(issue2.input), ", o tik\u0117tasi - ").concat(parsedTypeFromType(issue2.expected));
      case "invalid_value":
        return issue2.values.length === 1 ? "Privalo b\u016Bti ".concat(stringifyPrimitive(issue2.values[0])) : "Privalo b\u016Bti vienas i\u0161 ".concat(joinValues(issue2.values, "|"), " pasirinkim\u0173");
      case "too_big": {
        var origin = parsedTypeFromType(issue2.origin), sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.maximum)), issue2.inclusive ?? !1, "smaller");
        if (sizing != null && sizing.verb) return "".concat(capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117"), " ").concat(sizing.verb, " ").concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "element\u0173");
        var adj = issue2.inclusive ? "ne didesnis kaip" : "ma\u017Eesnis kaip";
        return "".concat(capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117"), " turi b\u016Bti ").concat(adj, " ").concat(issue2.maximum.toString(), " ").concat(sizing == null ? void 0 : sizing.unit);
      }
      case "too_small": {
        var _origin = parsedTypeFromType(issue2.origin), _sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.minimum)), issue2.inclusive ?? !1, "bigger");
        if (_sizing != null && _sizing.verb) return "".concat(capitalizeFirstCharacter(_origin ?? issue2.origin ?? "reik\u0161m\u0117"), " ").concat(_sizing.verb, " ").concat(issue2.minimum.toString(), " ").concat(_sizing.unit ?? "element\u0173");
        var _adj = issue2.inclusive ? "ne ma\u017Eesnis kaip" : "didesnis kaip";
        return "".concat(capitalizeFirstCharacter(_origin ?? issue2.origin ?? "reik\u0161m\u0117"), " turi b\u016Bti ").concat(_adj, " ").concat(issue2.minimum.toString(), " ").concat(_sizing == null ? void 0 : _sizing.unit);
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Eilut\u0117 privalo prasid\u0117ti "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Eilut\u0117 privalo pasibaigti "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Eilut\u0117 privalo \u012Ftraukti "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Eilut\u0117 privalo atitikti ".concat(_issue.pattern) : "Neteisingas ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Skai\u010Dius privalo b\u016Bti ".concat(issue2.divisor, " kartotinis.");
      case "unrecognized_keys":
        return "Neatpa\u017Eint".concat(issue2.keys.length > 1 ? "i" : "as", " rakt").concat(issue2.keys.length > 1 ? "ai" : "as", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga \u012Fvestis";
      case "invalid_element": {
        var _origin2 = parsedTypeFromType(issue2.origin);
        return "".concat(capitalizeFirstCharacter(_origin2 ?? issue2.origin ?? "reik\u0161m\u0117"), " turi klaiding\u0105 \u012Fvest\u012F");
      }
      default:
        return "Klaidinga \u012Fvestis";
    }
  };
};
function lt_default() {
  return {
    localeError: error25()
  };
}

// ../../node_modules/zod/v4/locales/mk.js
var error26 = function() {
  var Sizable = {
    string: {
      unit: "\u0437\u043D\u0430\u0446\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442"
    },
    file: {
      unit: "\u0431\u0430\u0458\u0442\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442"
    },
    array: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442"
    },
    set: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "\u0431\u0440\u043E\u0458";
      case "object": {
        if (Array.isArray(data))
          return "\u043D\u0438\u0437\u0430";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u0432\u043D\u0435\u0441",
    email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u045F\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
    date: "ISO \u0434\u0430\u0442\u0443\u043C",
    time: "ISO \u0432\u0440\u0435\u043C\u0435",
    duration: "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
    cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
    cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
    base64: "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
    base64url: "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
    json_string: "JSON \u043D\u0438\u0437\u0430",
    e164: "E.164 \u0431\u0440\u043E\u0458",
    jwt: "JWT",
    template_literal: "\u0432\u043D\u0435\u0441"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ".concat(issue2.expected, ", \u043F\u0440\u0438\u043C\u0435\u043D\u043E ").concat(parsedType8(issue2.input));
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return issue2.values.length === 1 ? "Invalid input: expected ".concat(stringifyPrimitive(issue2.values[0])) : "\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ".concat(issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430", " \u0434\u0430 \u0438\u043C\u0430 ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438") : "\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ".concat(issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430", " \u0434\u0430 \u0431\u0438\u0434\u0435 ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ".concat(issue2.origin, " \u0434\u0430 \u0438\u043C\u0430 ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ".concat(issue2.origin, " \u0434\u0430 \u0431\u0438\u0434\u0435 ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? '\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? '\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ".concat(_issue.pattern) : "Invalid ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "".concat(issue2.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ".concat(issue2.origin);
      case "invalid_union":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
      case "invalid_element":
        return "\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ".concat(issue2.origin);
      default:
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
    }
  };
};
function mk_default() {
  return {
    localeError: error26()
  };
}

// ../../node_modules/zod/v4/locales/ms.js
var error27 = function() {
  var Sizable = {
    string: {
      unit: "aksara",
      verb: "mempunyai"
    },
    file: {
      unit: "bait",
      verb: "mempunyai"
    },
    array: {
      unit: "elemen",
      verb: "mempunyai"
    },
    set: {
      unit: "elemen",
      verb: "mempunyai"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "nombor";
      case "object": {
        if (Array.isArray(data))
          return "array";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Input tidak sah: dijangka ".concat(issue2.expected, ", diterima ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Input tidak sah: dijangka ".concat(stringifyPrimitive(issue2.values[0])) : "Pilihan tidak sah: dijangka salah satu daripada ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Terlalu besar: dijangka ".concat(issue2.origin ?? "nilai", " ").concat(sizing.verb, " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elemen") : "Terlalu besar: dijangka ".concat(issue2.origin ?? "nilai", " adalah ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Terlalu kecil: dijangka ".concat(issue2.origin, " ").concat(_sizing.verb, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Terlalu kecil: dijangka ".concat(issue2.origin, " adalah ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'String tidak sah: mesti bermula dengan "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'String tidak sah: mesti berakhir dengan "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'String tidak sah: mesti mengandungi "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "String tidak sah: mesti sepadan dengan corak ".concat(_issue.pattern) : "".concat(Nouns[_issue.format] ?? issue2.format, " tidak sah");
      }
      case "not_multiple_of":
        return "Nombor tidak sah: perlu gandaan ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Kunci tidak dikenali: ".concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Kunci tidak sah dalam ".concat(issue2.origin);
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return "Nilai tidak sah dalam ".concat(issue2.origin);
      default:
        return "Input tidak sah";
    }
  };
};
function ms_default() {
  return {
    localeError: error27()
  };
}

// ../../node_modules/zod/v4/locales/nl.js
var error28 = function() {
  var Sizable = {
    string: {
      unit: "tekens",
      verb: "te hebben"
    },
    file: {
      unit: "bytes",
      verb: "te hebben"
    },
    array: {
      unit: "elementen",
      verb: "te hebben"
    },
    set: {
      unit: "elementen",
      verb: "te hebben"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "getal";
      case "object": {
        if (Array.isArray(data))
          return "array";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Ongeldige invoer: verwacht ".concat(issue2.expected, ", ontving ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Ongeldige invoer: verwacht ".concat(stringifyPrimitive(issue2.values[0])) : "Ongeldige optie: verwacht \xE9\xE9n van ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Te groot: verwacht dat ".concat(issue2.origin ?? "waarde", " ").concat(sizing.verb, " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elementen") : "Te groot: verwacht dat ".concat(issue2.origin ?? "waarde", " ").concat(adj).concat(issue2.maximum.toString(), " is");
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Te klein: verwacht dat ".concat(issue2.origin, " ").concat(_sizing.verb, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Te klein: verwacht dat ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString(), " is");
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Ongeldige tekst: moet met "'.concat(_issue.prefix, '" beginnen') : _issue.format === "ends_with" ? 'Ongeldige tekst: moet op "'.concat(_issue.suffix, '" eindigen') : _issue.format === "includes" ? 'Ongeldige tekst: moet "'.concat(_issue.includes, '" bevatten') : _issue.format === "regex" ? "Ongeldige tekst: moet overeenkomen met patroon ".concat(_issue.pattern) : "Ongeldig: ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Ongeldig getal: moet een veelvoud van ".concat(issue2.divisor, " zijn");
      case "unrecognized_keys":
        return "Onbekende key".concat(issue2.keys.length > 1 ? "s" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Ongeldige key in ".concat(issue2.origin);
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return "Ongeldige waarde in ".concat(issue2.origin);
      default:
        return "Ongeldige invoer";
    }
  };
};
function nl_default() {
  return {
    localeError: error28()
  };
}

// ../../node_modules/zod/v4/locales/no.js
var error29 = function() {
  var Sizable = {
    string: {
      unit: "tegn",
      verb: "\xE5 ha"
    },
    file: {
      unit: "bytes",
      verb: "\xE5 ha"
    },
    array: {
      unit: "elementer",
      verb: "\xE5 inneholde"
    },
    set: {
      unit: "elementer",
      verb: "\xE5 inneholde"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "tall";
      case "object": {
        if (Array.isArray(data))
          return "liste";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-omr\xE5de",
    ipv6: "IPv6-omr\xE5de",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Ugyldig input: forventet ".concat(issue2.expected, ", fikk ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Ugyldig verdi: forventet ".concat(stringifyPrimitive(issue2.values[0])) : "Ugyldig valg: forventet en av ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "For stor(t): forventet ".concat(issue2.origin ?? "value", " til \xE5 ha ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elementer") : "For stor(t): forventet ".concat(issue2.origin ?? "value", " til \xE5 ha ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "For lite(n): forventet ".concat(issue2.origin, " til \xE5 ha ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "For lite(n): forventet ".concat(issue2.origin, " til \xE5 ha ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Ugyldig streng: m\xE5 starte med "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Ugyldig streng: m\xE5 ende med "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Ugyldig streng: m\xE5 inneholde "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Ugyldig streng: m\xE5 matche m\xF8nsteret ".concat(_issue.pattern) : "Ugyldig ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Ugyldig tall: m\xE5 v\xE6re et multiplum av ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "".concat(issue2.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Ugyldig n\xF8kkel i ".concat(issue2.origin);
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return "Ugyldig verdi i ".concat(issue2.origin);
      default:
        return "Ugyldig input";
    }
  };
};
function no_default() {
  return {
    localeError: error29()
  };
}

// ../../node_modules/zod/v4/locales/ota.js
var error30 = function() {
  var Sizable = {
    string: {
      unit: "harf",
      verb: "olmal\u0131d\u0131r"
    },
    file: {
      unit: "bayt",
      verb: "olmal\u0131d\u0131r"
    },
    array: {
      unit: "unsur",
      verb: "olmal\u0131d\u0131r"
    },
    set: {
      unit: "unsur",
      verb: "olmal\u0131d\u0131r"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "numara";
      case "object": {
        if (Array.isArray(data))
          return "saf";
        if (data === null)
          return "gayb";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "giren",
    email: "epostag\xE2h",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO heng\xE2m\u0131",
    date: "ISO tarihi",
    time: "ISO zaman\u0131",
    duration: "ISO m\xFCddeti",
    ipv4: "IPv4 ni\u015F\xE2n\u0131",
    ipv6: "IPv6 ni\u015F\xE2n\u0131",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-\u015Fifreli metin",
    base64url: "base64url-\u015Fifreli metin",
    json_string: "JSON metin",
    e164: "E.164 say\u0131s\u0131",
    jwt: "JWT",
    template_literal: "giren"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "F\xE2sit giren: umulan ".concat(issue2.expected, ", al\u0131nan ").concat(parsedType8(issue2.input));
      // return `Fâsit giren: umulan ${issue.expected}, alınan ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return issue2.values.length === 1 ? "F\xE2sit giren: umulan ".concat(stringifyPrimitive(issue2.values[0])) : "F\xE2sit tercih: m\xFBteberler ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Fazla b\xFCy\xFCk: ".concat(issue2.origin ?? "value", ", ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elements", " sahip olmal\u0131yd\u0131.") : "Fazla b\xFCy\xFCk: ".concat(issue2.origin ?? "value", ", ").concat(adj).concat(issue2.maximum.toString(), " olmal\u0131yd\u0131.");
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Fazla k\xFC\xE7\xFCk: ".concat(issue2.origin, ", ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit, " sahip olmal\u0131yd\u0131.") : "Fazla k\xFC\xE7\xFCk: ".concat(issue2.origin, ", ").concat(_adj).concat(issue2.minimum.toString(), " olmal\u0131yd\u0131.");
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'F\xE2sit metin: "'.concat(_issue.prefix, '" ile ba\u015Flamal\u0131.') : _issue.format === "ends_with" ? 'F\xE2sit metin: "'.concat(_issue.suffix, '" ile bitmeli.') : _issue.format === "includes" ? 'F\xE2sit metin: "'.concat(_issue.includes, '" ihtiv\xE2 etmeli.') : _issue.format === "regex" ? "F\xE2sit metin: ".concat(_issue.pattern, " nak\u015F\u0131na uymal\u0131.") : "F\xE2sit ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "F\xE2sit say\u0131: ".concat(issue2.divisor, " kat\u0131 olmal\u0131yd\u0131.");
      case "unrecognized_keys":
        return "Tan\u0131nmayan anahtar ".concat(issue2.keys.length > 1 ? "s" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "".concat(issue2.origin, " i\xE7in tan\u0131nmayan anahtar var.");
      case "invalid_union":
        return "Giren tan\u0131namad\u0131.";
      case "invalid_element":
        return "".concat(issue2.origin, " i\xE7in tan\u0131nmayan k\u0131ymet var.");
      default:
        return "K\u0131ymet tan\u0131namad\u0131.";
    }
  };
};
function ota_default() {
  return {
    localeError: error30()
  };
}

// ../../node_modules/zod/v4/locales/ps.js
var error31 = function() {
  var Sizable = {
    string: {
      unit: "\u062A\u0648\u06A9\u064A",
      verb: "\u0648\u0644\u0631\u064A"
    },
    file: {
      unit: "\u0628\u0627\u06CC\u067C\u0633",
      verb: "\u0648\u0644\u0631\u064A"
    },
    array: {
      unit: "\u062A\u0648\u06A9\u064A",
      verb: "\u0648\u0644\u0631\u064A"
    },
    set: {
      unit: "\u062A\u0648\u06A9\u064A",
      verb: "\u0648\u0644\u0631\u064A"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "\u0639\u062F\u062F";
      case "object": {
        if (Array.isArray(data))
          return "\u0627\u0631\u06D0";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u0648\u0631\u0648\u062F\u064A",
    email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
    url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
    date: "\u0646\u06D0\u067C\u0647",
    time: "\u0648\u062E\u062A",
    duration: "\u0645\u0648\u062F\u0647",
    ipv4: "\u062F IPv4 \u067E\u062A\u0647",
    ipv6: "\u062F IPv6 \u067E\u062A\u0647",
    cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
    cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
    base64: "base64-encoded \u0645\u062A\u0646",
    base64url: "base64url-encoded \u0645\u062A\u0646",
    json_string: "JSON \u0645\u062A\u0646",
    e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
    jwt: "JWT",
    template_literal: "\u0648\u0631\u0648\u062F\u064A"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ".concat(issue2.expected, " \u0648\u0627\u06CC, \u0645\u06AB\u0631 ").concat(parsedType8(issue2.input), " \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648");
      case "invalid_value":
        return issue2.values.length === 1 ? "\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ".concat(stringifyPrimitive(issue2.values[0]), " \u0648\u0627\u06CC") : "\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ".concat(joinValues(issue2.values, "|"), " \u0685\u062E\u0647 \u0648\u0627\u06CC");
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\u0689\u06CC\u0631 \u0644\u0648\u06CC: ".concat(issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A", " \u0628\u0627\u06CC\u062F ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647", " \u0648\u0644\u0631\u064A") : "\u0689\u06CC\u0631 \u0644\u0648\u06CC: ".concat(issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A", " \u0628\u0627\u06CC\u062F ").concat(adj).concat(issue2.maximum.toString(), " \u0648\u064A");
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ".concat(issue2.origin, " \u0628\u0627\u06CC\u062F ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit, " \u0648\u0644\u0631\u064A") : "\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ".concat(issue2.origin, " \u0628\u0627\u06CC\u062F ").concat(_adj).concat(issue2.minimum.toString(), " \u0648\u064A");
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "'.concat(_issue.prefix, '" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A') : _issue.format === "ends_with" ? '\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "'.concat(_issue.suffix, '" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A') : _issue.format === "includes" ? '\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "'.concat(_issue.includes, '" \u0648\u0644\u0631\u064A') : _issue.format === "regex" ? "\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ".concat(_issue.pattern, " \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A") : "".concat(Nouns[_issue.format] ?? issue2.format, " \u0646\u0627\u0633\u0645 \u062F\u06CC");
      }
      case "not_multiple_of":
        return "\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ".concat(issue2.divisor, " \u0645\u0636\u0631\u0628 \u0648\u064A");
      case "unrecognized_keys":
        return "\u0646\u0627\u0633\u0645 ".concat(issue2.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ".concat(issue2.origin, " \u06A9\u06D0");
      case "invalid_union":
        return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
      case "invalid_element":
        return "\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ".concat(issue2.origin, " \u06A9\u06D0");
      default:
        return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
    }
  };
};
function ps_default() {
  return {
    localeError: error31()
  };
}

// ../../node_modules/zod/v4/locales/pl.js
var error32 = function() {
  var Sizable = {
    string: {
      unit: "znak\xF3w",
      verb: "mie\u0107"
    },
    file: {
      unit: "bajt\xF3w",
      verb: "mie\u0107"
    },
    array: {
      unit: "element\xF3w",
      verb: "mie\u0107"
    },
    set: {
      unit: "element\xF3w",
      verb: "mie\u0107"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "liczba";
      case "object": {
        if (Array.isArray(data))
          return "tablica";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "wyra\u017Cenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
    base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
    json_string: "ci\u0105g znak\xF3w w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wej\u015Bcie"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ".concat(issue2.expected, ", otrzymano ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ".concat(stringifyPrimitive(issue2.values[0])) : "Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ".concat(issue2.origin ?? "warto\u015B\u0107", " b\u0119dzie mie\u0107 ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "element\xF3w") : "Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ".concat(issue2.origin ?? "warto\u015B\u0107", " b\u0119dzie wynosi\u0107 ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ".concat(issue2.origin ?? "warto\u015B\u0107", " b\u0119dzie mie\u0107 ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit ?? "element\xF3w") : "Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ".concat(issue2.origin ?? "warto\u015B\u0107", " b\u0119dzie wynosi\u0107 ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ".concat(_issue.pattern) : "Nieprawid\u0142ow(y/a/e) ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Nierozpoznane klucze".concat(issue2.keys.length > 1 ? "s" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Nieprawid\u0142owy klucz w ".concat(issue2.origin);
      case "invalid_union":
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
      case "invalid_element":
        return "Nieprawid\u0142owa warto\u015B\u0107 w ".concat(issue2.origin);
      default:
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
    }
  };
};
function pl_default() {
  return {
    localeError: error32()
  };
}

// ../../node_modules/zod/v4/locales/pt.js
var error33 = function() {
  var Sizable = {
    string: {
      unit: "caracteres",
      verb: "ter"
    },
    file: {
      unit: "bytes",
      verb: "ter"
    },
    array: {
      unit: "itens",
      verb: "ter"
    },
    set: {
      unit: "itens",
      verb: "ter"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "n\xFAmero";
      case "object": {
        if (Array.isArray(data))
          return "array";
        if (data === null)
          return "nulo";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "padr\xE3o",
    email: "endere\xE7o de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "dura\xE7\xE3o ISO",
    ipv4: "endere\xE7o IPv4",
    ipv6: "endere\xE7o IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Tipo inv\xE1lido: esperado ".concat(issue2.expected, ", recebido ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Entrada inv\xE1lida: esperado ".concat(stringifyPrimitive(issue2.values[0])) : "Op\xE7\xE3o inv\xE1lida: esperada uma das ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Muito grande: esperado que ".concat(issue2.origin ?? "valor", " tivesse ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elementos") : "Muito grande: esperado que ".concat(issue2.origin ?? "valor", " fosse ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Muito pequeno: esperado que ".concat(issue2.origin, " tivesse ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Muito pequeno: esperado que ".concat(issue2.origin, " fosse ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Texto inv\xE1lido: deve come\xE7ar com "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Texto inv\xE1lido: deve terminar com "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Texto inv\xE1lido: deve incluir "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Texto inv\xE1lido: deve corresponder ao padr\xE3o ".concat(_issue.pattern) : "".concat(Nouns[_issue.format] ?? issue2.format, " inv\xE1lido");
      }
      case "not_multiple_of":
        return "N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Chave".concat(issue2.keys.length > 1 ? "s" : "", " desconhecida").concat(issue2.keys.length > 1 ? "s" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Chave inv\xE1lida em ".concat(issue2.origin);
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return "Valor inv\xE1lido em ".concat(issue2.origin);
      default:
        return "Campo inv\xE1lido";
    }
  };
};
function pt_default() {
  return {
    localeError: error33()
  };
}

// ../../node_modules/zod/v4/locales/ru.js
function getRussianPlural(count, one, few, many) {
  var absCount = Math.abs(count), lastDigit = absCount % 10, lastTwoDigits = absCount % 100;
  return lastTwoDigits >= 11 && lastTwoDigits <= 19 ? many : lastDigit === 1 ? one : lastDigit >= 2 && lastDigit <= 4 ? few : many;
}
var error34 = function() {
  var Sizable = {
    string: {
      unit: {
        one: "\u0441\u0438\u043C\u0432\u043E\u043B",
        few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
        many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u0430",
        many: "\u0431\u0430\u0439\u0442"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
      case "object": {
        if (Array.isArray(data))
          return "\u043C\u0430\u0441\u0441\u0438\u0432";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u0432\u0432\u043E\u0434",
    email: "email \u0430\u0434\u0440\u0435\u0441",
    url: "URL",
    emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0432\u0440\u0435\u043C\u044F",
    duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
    cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
    base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
    json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
    e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0432\u0432\u043E\u0434"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ".concat(issue2.expected, ", \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ".concat(stringifyPrimitive(issue2.values[0])) : "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        if (sizing) {
          var maxValue = Number(issue2.maximum), unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ".concat(issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435", " \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ").concat(adj).concat(issue2.maximum.toString(), " ").concat(unit);
        }
        return "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ".concat(issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435", " \u0431\u0443\u0434\u0435\u0442 ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        if (_sizing) {
          var minValue = Number(issue2.minimum), _unit = getRussianPlural(minValue, _sizing.unit.one, _sizing.unit.few, _sizing.unit.many);
          return "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ".concat(issue2.origin, " \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_unit);
        }
        return "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ".concat(issue2.origin, " \u0431\u0443\u0434\u0435\u0442 ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? '\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? '\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ".concat(_issue.pattern) : "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D".concat(issue2.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439", " \u043A\u043B\u044E\u0447").concat(issue2.keys.length > 1 ? "\u0438" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ".concat(issue2.origin);
      case "invalid_union":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      case "invalid_element":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ".concat(issue2.origin);
      default:
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
    }
  };
};
function ru_default() {
  return {
    localeError: error34()
  };
}

// ../../node_modules/zod/v4/locales/sl.js
var error35 = function() {
  var Sizable = {
    string: {
      unit: "znakov",
      verb: "imeti"
    },
    file: {
      unit: "bajtov",
      verb: "imeti"
    },
    array: {
      unit: "elementov",
      verb: "imeti"
    },
    set: {
      unit: "elementov",
      verb: "imeti"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "\u0161tevilo";
      case "object": {
        if (Array.isArray(data))
          return "tabela";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "vnos",
    email: "e-po\u0161tni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in \u010Das",
    date: "ISO datum",
    time: "ISO \u010Das",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 \u0161tevilka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Neveljaven vnos: pri\u010Dakovano ".concat(issue2.expected, ", prejeto ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Neveljaven vnos: pri\u010Dakovano ".concat(stringifyPrimitive(issue2.values[0])) : "Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Preveliko: pri\u010Dakovano, da bo ".concat(issue2.origin ?? "vrednost", " imelo ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "elementov") : "Preveliko: pri\u010Dakovano, da bo ".concat(issue2.origin ?? "vrednost", " ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Premajhno: pri\u010Dakovano, da bo ".concat(issue2.origin, " imelo ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Premajhno: pri\u010Dakovano, da bo ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Neveljaven niz: mora se za\u010Deti z "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Neveljaven niz: mora se kon\u010Dati z "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Neveljaven niz: mora vsebovati "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Neveljaven niz: mora ustrezati vzorcu ".concat(_issue.pattern) : "Neveljaven ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Neprepoznan".concat(issue2.keys.length > 1 ? "i klju\u010Di" : " klju\u010D", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Neveljaven klju\u010D v ".concat(issue2.origin);
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return "Neveljavna vrednost v ".concat(issue2.origin);
      default:
        return "Neveljaven vnos";
    }
  };
};
function sl_default() {
  return {
    localeError: error35()
  };
}

// ../../node_modules/zod/v4/locales/sv.js
var error36 = function() {
  var Sizable = {
    string: {
      unit: "tecken",
      verb: "att ha"
    },
    file: {
      unit: "bytes",
      verb: "att ha"
    },
    array: {
      unit: "objekt",
      verb: "att inneh\xE5lla"
    },
    set: {
      unit: "objekt",
      verb: "att inneh\xE5lla"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "antal";
      case "object": {
        if (Array.isArray(data))
          return "lista";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "regulj\xE4rt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad str\xE4ng",
    base64url: "base64url-kodad str\xE4ng",
    json_string: "JSON-str\xE4ng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Ogiltig inmatning: f\xF6rv\xE4ntat ".concat(issue2.expected, ", fick ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Ogiltig inmatning: f\xF6rv\xE4ntat ".concat(stringifyPrimitive(issue2.values[0])) : "Ogiltigt val: f\xF6rv\xE4ntade en av ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "F\xF6r stor(t): f\xF6rv\xE4ntade ".concat(issue2.origin ?? "v\xE4rdet", " att ha ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "element") : "F\xF6r stor(t): f\xF6rv\xE4ntat ".concat(issue2.origin ?? "v\xE4rdet", " att ha ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "F\xF6r lite(t): f\xF6rv\xE4ntade ".concat(issue2.origin ?? "v\xE4rdet", " att ha ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "F\xF6r lite(t): f\xF6rv\xE4ntade ".concat(issue2.origin ?? "v\xE4rdet", " att ha ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Ogiltig str\xE4ng: m\xE5ste sluta med "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "'.concat(_issue.includes, '"') : _issue.format === "regex" ? 'Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "'.concat(_issue.pattern, '"') : "Ogiltig(t) ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Ogiltigt tal: m\xE5ste vara en multipel av ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "".concat(issue2.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Ogiltig nyckel i ".concat(issue2.origin ?? "v\xE4rdet");
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return "Ogiltigt v\xE4rde i ".concat(issue2.origin ?? "v\xE4rdet");
      default:
        return "Ogiltig input";
    }
  };
};
function sv_default() {
  return {
    localeError: error36()
  };
}

// ../../node_modules/zod/v4/locales/ta.js
var error37 = function() {
  var Sizable = {
    string: {
      unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD"
    },
    file: {
      unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD"
    },
    array: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD"
    },
    set: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "\u0B8E\u0BA3\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BBE\u0BA4\u0BA4\u0BC1" : "\u0B8E\u0BA3\u0BCD";
      case "object": {
        if (Array.isArray(data))
          return "\u0B85\u0BA3\u0BBF";
        if (data === null)
          return "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
    email: "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
    date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
    time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
    duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
    ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
    base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
    json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
    e164: "E.164 \u0B8E\u0BA3\u0BCD",
    jwt: "JWT",
    template_literal: "input"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ".concat(issue2.expected, ", \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ".concat(stringifyPrimitive(issue2.values[0])) : "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ".concat(joinValues(issue2.values, "|"), " \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1");
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ".concat(issue2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1", " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", " \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD") : "\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ".concat(issue2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1", " ").concat(adj).concat(issue2.maximum.toString(), " \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD");
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit, " \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD") : "\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString(), " \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD");
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "'.concat(_issue.prefix, '" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD') : _issue.format === "ends_with" ? '\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "'.concat(_issue.suffix, '" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD') : _issue.format === "includes" ? '\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "'.concat(_issue.includes, '" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD') : _issue.format === "regex" ? "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ".concat(_issue.pattern, " \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD") : "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ".concat(issue2.divisor, " \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD");
      case "unrecognized_keys":
        return "\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8".concat(issue2.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "".concat(issue2.origin, " \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8");
      case "invalid_union":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
      case "invalid_element":
        return "".concat(issue2.origin, " \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1");
      default:
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
    }
  };
};
function ta_default() {
  return {
    localeError: error37()
  };
}

// ../../node_modules/zod/v4/locales/th.js
var error38 = function() {
  var Sizable = {
    string: {
      unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35"
    },
    file: {
      unit: "\u0E44\u0E1A\u0E15\u0E4C",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35"
    },
    array: {
      unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35"
    },
    set: {
      unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 (NaN)" : "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02";
      case "object": {
        if (Array.isArray(data))
          return "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)";
        if (data === null)
          return "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
    email: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
    url: "URL",
    emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
    time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    duration: "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
    ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
    cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
    cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
    base64: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
    base64url: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
    json_string: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
    e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
    jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
    template_literal: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ".concat(issue2.expected, " \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ".concat(stringifyPrimitive(issue2.values[0])) : "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19" : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32", sizing = getSizing(issue2.origin);
        return sizing ? "\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ".concat(issue2.origin ?? "\u0E04\u0E48\u0E32", " \u0E04\u0E27\u0E23\u0E21\u0E35").concat(adj, " ").concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23") : "\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ".concat(issue2.origin ?? "\u0E04\u0E48\u0E32", " \u0E04\u0E27\u0E23\u0E21\u0E35").concat(adj, " ").concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22" : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ".concat(issue2.origin, " \u0E04\u0E27\u0E23\u0E21\u0E35").concat(_adj, " ").concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ".concat(issue2.origin, " \u0E04\u0E27\u0E23\u0E21\u0E35").concat(_adj, " ").concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? '\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? '\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "'.concat(_issue.includes, '" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21') : _issue.format === "regex" ? "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ".concat(_issue.pattern) : "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ".concat(issue2.divisor, " \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27");
      case "unrecognized_keys":
        return "\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ".concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ".concat(issue2.origin);
      case "invalid_union":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
      case "invalid_element":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ".concat(issue2.origin);
      default:
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
    }
  };
};
function th_default() {
  return {
    localeError: error38()
  };
}

// ../../node_modules/zod/v4/locales/tr.js
var parsedType7 = function(data) {
  var t = typeof data;
  switch (t) {
    case "number":
      return Number.isNaN(data) ? "NaN" : "number";
    case "object": {
      if (Array.isArray(data))
        return "array";
      if (data === null)
        return "null";
      if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
        return data.constructor.name;
    }
  }
  return t;
}, error39 = function() {
  var Sizable = {
    string: {
      unit: "karakter",
      verb: "olmal\u0131"
    },
    file: {
      unit: "bayt",
      verb: "olmal\u0131"
    },
    array: {
      unit: "\xF6\u011Fe",
      verb: "olmal\u0131"
    },
    set: {
      unit: "\xF6\u011Fe",
      verb: "olmal\u0131"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var Nouns = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO s\xFCre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aral\u0131\u011F\u0131",
    cidrv6: "IPv6 aral\u0131\u011F\u0131",
    base64: "base64 ile \u015Fifrelenmi\u015F metin",
    base64url: "base64url ile \u015Fifrelenmi\u015F metin",
    json_string: "JSON dizesi",
    e164: "E.164 say\u0131s\u0131",
    jwt: "JWT",
    template_literal: "\u015Eablon dizesi"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "Ge\xE7ersiz de\u011Fer: beklenen ".concat(issue2.expected, ", al\u0131nan ").concat(parsedType7(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "Ge\xE7ersiz de\u011Fer: beklenen ".concat(stringifyPrimitive(issue2.values[0])) : "Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\xC7ok b\xFCy\xFCk: beklenen ".concat(issue2.origin ?? "de\u011Fer", " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\xF6\u011Fe") : "\xC7ok b\xFCy\xFCk: beklenen ".concat(issue2.origin ?? "de\u011Fer", " ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\xC7ok k\xFC\xE7\xFCk: beklenen ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "\xC7ok k\xFC\xE7\xFCk: beklenen ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Ge\xE7ersiz metin: "'.concat(_issue.prefix, '" ile ba\u015Flamal\u0131') : _issue.format === "ends_with" ? 'Ge\xE7ersiz metin: "'.concat(_issue.suffix, '" ile bitmeli') : _issue.format === "includes" ? 'Ge\xE7ersiz metin: "'.concat(_issue.includes, '" i\xE7ermeli') : _issue.format === "regex" ? "Ge\xE7ersiz metin: ".concat(_issue.pattern, " desenine uymal\u0131") : "Ge\xE7ersiz ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "Ge\xE7ersiz say\u0131: ".concat(issue2.divisor, " ile tam b\xF6l\xFCnebilmeli");
      case "unrecognized_keys":
        return "Tan\u0131nmayan anahtar".concat(issue2.keys.length > 1 ? "lar" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "".concat(issue2.origin, " i\xE7inde ge\xE7ersiz anahtar");
      case "invalid_union":
        return "Ge\xE7ersiz de\u011Fer";
      case "invalid_element":
        return "".concat(issue2.origin, " i\xE7inde ge\xE7ersiz de\u011Fer");
      default:
        return "Ge\xE7ersiz de\u011Fer";
    }
  };
};
function tr_default() {
  return {
    localeError: error39()
  };
}

// ../../node_modules/zod/v4/locales/uk.js
var error40 = function() {
  var Sizable = {
    string: {
      unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435"
    },
    file: {
      unit: "\u0431\u0430\u0439\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435"
    },
    array: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435"
    },
    set: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
      case "object": {
        if (Array.isArray(data))
          return "\u043C\u0430\u0441\u0438\u0432";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
    email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
    date: "\u0434\u0430\u0442\u0430 ISO",
    time: "\u0447\u0430\u0441 ISO",
    duration: "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
    ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
    ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
    cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
    cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
    base64: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
    base64url: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
    json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
    e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ".concat(issue2.expected, ", \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ").concat(parsedType8(issue2.input));
      // return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return issue2.values.length === 1 ? "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ".concat(stringifyPrimitive(issue2.values[0])) : "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ".concat(issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F", " ").concat(sizing.verb, " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432") : "\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ".concat(issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F", " \u0431\u0443\u0434\u0435 ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ".concat(issue2.origin, " ").concat(_sizing.verb, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ".concat(issue2.origin, " \u0431\u0443\u0434\u0435 ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? '\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? '\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ".concat(_issue.pattern) : "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447".concat(issue2.keys.length > 1 ? "\u0456" : "", ": ").concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ".concat(issue2.origin);
      case "invalid_union":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
      case "invalid_element":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ".concat(issue2.origin);
      default:
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
    }
  };
};
function uk_default() {
  return {
    localeError: error40()
  };
}

// ../../node_modules/zod/v4/locales/ua.js
function ua_default() {
  return uk_default();
}

// ../../node_modules/zod/v4/locales/ur.js
var error41 = function() {
  var Sizable = {
    string: {
      unit: "\u062D\u0631\u0648\u0641",
      verb: "\u06C1\u0648\u0646\u0627"
    },
    file: {
      unit: "\u0628\u0627\u0626\u0679\u0633",
      verb: "\u06C1\u0648\u0646\u0627"
    },
    array: {
      unit: "\u0622\u0626\u0679\u0645\u0632",
      verb: "\u06C1\u0648\u0646\u0627"
    },
    set: {
      unit: "\u0622\u0626\u0679\u0645\u0632",
      verb: "\u06C1\u0648\u0646\u0627"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "\u0646\u0645\u0628\u0631";
      case "object": {
        if (Array.isArray(data))
          return "\u0622\u0631\u06D2";
        if (data === null)
          return "\u0646\u0644";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u0627\u0646 \u067E\u0679",
    email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
    uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
    uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
    nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
    ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
    xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
    ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    datetime: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
    date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
    time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
    duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
    ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
    cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
    base64: "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
    base64url: "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
    json_string: "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
    e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
    jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
    template_literal: "\u0627\u0646 \u067E\u0679"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ".concat(issue2.expected, " \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ").concat(parsedType8(issue2.input), " \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627");
      case "invalid_value":
        return issue2.values.length === 1 ? "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ".concat(stringifyPrimitive(issue2.values[0]), " \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627") : "\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ".concat(joinValues(issue2.values, "|"), " \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627");
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\u0628\u06C1\u062A \u0628\u0691\u0627: ".concat(issue2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648", " \u06A9\u06D2 ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\u0639\u0646\u0627\u0635\u0631", " \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2") : "\u0628\u06C1\u062A \u0628\u0691\u0627: ".concat(issue2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648", " \u06A9\u0627 ").concat(adj).concat(issue2.maximum.toString(), " \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627");
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ".concat(issue2.origin, " \u06A9\u06D2 ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit, " \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2") : "\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ".concat(issue2.origin, " \u06A9\u0627 ").concat(_adj).concat(issue2.minimum.toString(), " \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627");
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "'.concat(_issue.prefix, '" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2') : _issue.format === "ends_with" ? '\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "'.concat(_issue.suffix, '" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2') : _issue.format === "includes" ? '\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "'.concat(_issue.includes, '" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2') : _issue.format === "regex" ? "\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ".concat(_issue.pattern, " \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2") : "\u063A\u0644\u0637 ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ".concat(issue2.divisor, " \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2");
      case "unrecognized_keys":
        return "\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC".concat(issue2.keys.length > 1 ? "\u0632" : "", ": ").concat(joinValues(issue2.keys, "\u060C "));
      case "invalid_key":
        return "".concat(issue2.origin, " \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC");
      case "invalid_union":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
      case "invalid_element":
        return "".concat(issue2.origin, " \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648");
      default:
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
    }
  };
};
function ur_default() {
  return {
    localeError: error41()
  };
}

// ../../node_modules/zod/v4/locales/vi.js
var error42 = function() {
  var Sizable = {
    string: {
      unit: "k\xFD t\u1EF1",
      verb: "c\xF3"
    },
    file: {
      unit: "byte",
      verb: "c\xF3"
    },
    array: {
      unit: "ph\u1EA7n t\u1EED",
      verb: "c\xF3"
    },
    set: {
      unit: "ph\u1EA7n t\u1EED",
      verb: "c\xF3"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "s\u1ED1";
      case "object": {
        if (Array.isArray(data))
          return "m\u1EA3ng";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u0111\u1EA7u v\xE0o",
    email: "\u0111\u1ECBa ch\u1EC9 email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ng\xE0y gi\u1EDD ISO",
    date: "ng\xE0y ISO",
    time: "gi\u1EDD ISO",
    duration: "kho\u1EA3ng th\u1EDDi gian ISO",
    ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
    ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
    cidrv4: "d\u1EA3i IPv4",
    cidrv6: "d\u1EA3i IPv6",
    base64: "chu\u1ED7i m\xE3 h\xF3a base64",
    base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
    json_string: "chu\u1ED7i JSON",
    e164: "s\u1ED1 E.164",
    jwt: "JWT",
    template_literal: "\u0111\u1EA7u v\xE0o"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ".concat(issue2.expected, ", nh\u1EADn \u0111\u01B0\u1EE3c ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ".concat(stringifyPrimitive(issue2.values[0])) : "T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ".concat(issue2.origin ?? "gi\xE1 tr\u1ECB", " ").concat(sizing.verb, " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "ph\u1EA7n t\u1EED") : "Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ".concat(issue2.origin ?? "gi\xE1 tr\u1ECB", " ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ".concat(issue2.origin, " ").concat(_sizing.verb, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? 'Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? 'Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? 'Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ".concat(_issue.pattern) : "".concat(Nouns[_issue.format] ?? issue2.format, " kh\xF4ng h\u1EE3p l\u1EC7");
      }
      case "not_multiple_of":
        return "S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ".concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ".concat(issue2.origin);
      case "invalid_union":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
      case "invalid_element":
        return "Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ".concat(issue2.origin);
      default:
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
    }
  };
};
function vi_default() {
  return {
    localeError: error42()
  };
}

// ../../node_modules/zod/v4/locales/zh-CN.js
var error43 = function() {
  var Sizable = {
    string: {
      unit: "\u5B57\u7B26",
      verb: "\u5305\u542B"
    },
    file: {
      unit: "\u5B57\u8282",
      verb: "\u5305\u542B"
    },
    array: {
      unit: "\u9879",
      verb: "\u5305\u542B"
    },
    set: {
      unit: "\u9879",
      verb: "\u5305\u542B"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "\u975E\u6570\u5B57(NaN)" : "\u6570\u5B57";
      case "object": {
        if (Array.isArray(data))
          return "\u6570\u7EC4";
        if (data === null)
          return "\u7A7A\u503C(null)";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u8F93\u5165",
    email: "\u7535\u5B50\u90AE\u4EF6",
    url: "URL",
    emoji: "\u8868\u60C5\u7B26\u53F7",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO\u65E5\u671F\u65F6\u95F4",
    date: "ISO\u65E5\u671F",
    time: "ISO\u65F6\u95F4",
    duration: "ISO\u65F6\u957F",
    ipv4: "IPv4\u5730\u5740",
    ipv6: "IPv6\u5730\u5740",
    cidrv4: "IPv4\u7F51\u6BB5",
    cidrv6: "IPv6\u7F51\u6BB5",
    base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
    base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
    json_string: "JSON\u5B57\u7B26\u4E32",
    e164: "E.164\u53F7\u7801",
    jwt: "JWT",
    template_literal: "\u8F93\u5165"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ".concat(issue2.expected, "\uFF0C\u5B9E\u9645\u63A5\u6536 ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ".concat(stringifyPrimitive(issue2.values[0])) : "\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ".concat(issue2.origin ?? "\u503C", " ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\u4E2A\u5143\u7D20") : "\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ".concat(issue2.origin ?? "\u503C", " ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ".concat(issue2.origin, " ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "'.concat(_issue.prefix, '" \u5F00\u5934') : _issue.format === "ends_with" ? '\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "'.concat(_issue.suffix, '" \u7ED3\u5C3E') : _issue.format === "includes" ? '\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ".concat(_issue.pattern) : "\u65E0\u6548".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ".concat(issue2.divisor, " \u7684\u500D\u6570");
      case "unrecognized_keys":
        return "\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ".concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "".concat(issue2.origin, " \u4E2D\u7684\u952E(key)\u65E0\u6548");
      case "invalid_union":
        return "\u65E0\u6548\u8F93\u5165";
      case "invalid_element":
        return "".concat(issue2.origin, " \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)");
      default:
        return "\u65E0\u6548\u8F93\u5165";
    }
  };
};
function zh_CN_default() {
  return {
    localeError: error43()
  };
}

// ../../node_modules/zod/v4/locales/zh-TW.js
var error44 = function() {
  var Sizable = {
    string: {
      unit: "\u5B57\u5143",
      verb: "\u64C1\u6709"
    },
    file: {
      unit: "\u4F4D\u5143\u7D44",
      verb: "\u64C1\u6709"
    },
    array: {
      unit: "\u9805\u76EE",
      verb: "\u64C1\u6709"
    },
    set: {
      unit: "\u9805\u76EE",
      verb: "\u64C1\u6709"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(data))
          return "array";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u8F38\u5165",
    email: "\u90F5\u4EF6\u5730\u5740",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u65E5\u671F\u6642\u9593",
    date: "ISO \u65E5\u671F",
    time: "ISO \u6642\u9593",
    duration: "ISO \u671F\u9593",
    ipv4: "IPv4 \u4F4D\u5740",
    ipv6: "IPv6 \u4F4D\u5740",
    cidrv4: "IPv4 \u7BC4\u570D",
    cidrv6: "IPv6 \u7BC4\u570D",
    base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
    base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
    json_string: "JSON \u5B57\u4E32",
    e164: "E.164 \u6578\u503C",
    jwt: "JWT",
    template_literal: "\u8F38\u5165"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ".concat(issue2.expected, "\uFF0C\u4F46\u6536\u5230 ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ".concat(stringifyPrimitive(issue2.values[0])) : "\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ".concat(issue2.origin ?? "\u503C", " \u61C9\u70BA ").concat(adj).concat(issue2.maximum.toString(), " ").concat(sizing.unit ?? "\u500B\u5143\u7D20") : "\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ".concat(issue2.origin ?? "\u503C", " \u61C9\u70BA ").concat(adj).concat(issue2.maximum.toString());
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ".concat(issue2.origin, " \u61C9\u70BA ").concat(_adj).concat(issue2.minimum.toString(), " ").concat(_sizing.unit) : "\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ".concat(issue2.origin, " \u61C9\u70BA ").concat(_adj).concat(issue2.minimum.toString());
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "'.concat(_issue.prefix, '" \u958B\u982D') : _issue.format === "ends_with" ? '\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "'.concat(_issue.suffix, '" \u7D50\u5C3E') : _issue.format === "includes" ? '\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ".concat(_issue.pattern) : "\u7121\u6548\u7684 ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ".concat(issue2.divisor, " \u7684\u500D\u6578");
      case "unrecognized_keys":
        return "\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C".concat(issue2.keys.length > 1 ? "\u5011" : "", "\uFF1A").concat(joinValues(issue2.keys, "\u3001"));
      case "invalid_key":
        return "".concat(issue2.origin, " \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C");
      case "invalid_union":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
      case "invalid_element":
        return "".concat(issue2.origin, " \u4E2D\u6709\u7121\u6548\u7684\u503C");
      default:
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
    }
  };
};
function zh_TW_default() {
  return {
    localeError: error44()
  };
}

// ../../node_modules/zod/v4/locales/yo.js
var error45 = function() {
  var Sizable = {
    string: {
      unit: "\xE0mi",
      verb: "n\xED"
    },
    file: {
      unit: "bytes",
      verb: "n\xED"
    },
    array: {
      unit: "nkan",
      verb: "n\xED"
    },
    set: {
      unit: "nkan",
      verb: "n\xED"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  var parsedType8 = function(data) {
    var t = typeof data;
    switch (t) {
      case "number":
        return Number.isNaN(data) ? "NaN" : "n\u1ECD\u0301mb\xE0";
      case "object": {
        if (Array.isArray(data))
          return "akop\u1ECD";
        if (data === null)
          return "null";
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor)
          return data.constructor.name;
      }
    }
    return t;
  }, Nouns = {
    regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
    email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\xE0k\xF3k\xF2 ISO",
    date: "\u1ECDj\u1ECD\u0301 ISO",
    time: "\xE0k\xF3k\xF2 ISO",
    duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
    ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
    ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
    cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
    cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
    base64: "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
    base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
    json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
    e164: "n\u1ECD\u0301mb\xE0 E.164",
    jwt: "JWT",
    template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9"
  };
  return function(issue2) {
    switch (issue2.code) {
      case "invalid_type":
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ".concat(issue2.expected, ", \xE0m\u1ECD\u0300 a r\xED ").concat(parsedType8(issue2.input));
      case "invalid_value":
        return issue2.values.length === 1 ? "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ".concat(stringifyPrimitive(issue2.values[0])) : "\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ".concat(joinValues(issue2.values, "|"));
      case "too_big": {
        var adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? "T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ".concat(issue2.origin ?? "iye", " ").concat(sizing.verb, " ").concat(adj).concat(issue2.maximum, " ").concat(sizing.unit) : "T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ".concat(adj).concat(issue2.maximum);
      }
      case "too_small": {
        var _adj = issue2.inclusive ? ">=" : ">", _sizing = getSizing(issue2.origin);
        return _sizing ? "K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ".concat(issue2.origin, " ").concat(_sizing.verb, " ").concat(_adj).concat(issue2.minimum, " ").concat(_sizing.unit) : "K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ".concat(_adj).concat(issue2.minimum);
      }
      case "invalid_format": {
        var _issue = issue2;
        return _issue.format === "starts_with" ? '\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "'.concat(_issue.prefix, '"') : _issue.format === "ends_with" ? '\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "'.concat(_issue.suffix, '"') : _issue.format === "includes" ? '\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "'.concat(_issue.includes, '"') : _issue.format === "regex" ? "\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ".concat(_issue.pattern) : "A\u1E63\xEC\u1E63e: ".concat(Nouns[_issue.format] ?? issue2.format);
      }
      case "not_multiple_of":
        return "N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ".concat(issue2.divisor);
      case "unrecognized_keys":
        return "B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ".concat(joinValues(issue2.keys, ", "));
      case "invalid_key":
        return "B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ".concat(issue2.origin);
      case "invalid_union":
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
      case "invalid_element":
        return "Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ".concat(issue2.origin);
      default:
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
    }
  };
};
function yo_default() {
  return {
    localeError: error45()
  };
}

// ../../node_modules/zod/v4/core/registries.js
function ownKeys6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys6(Object(t), !0).forEach(function(r2) {
      _defineProperty6(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty6(e, r, t) {
  return (r = _toPropertyKey8(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _classCallCheck5(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties5(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey8(o.key), o);
  }
}
function _createClass5(e, r, t) {
  return r && _defineProperties5(e.prototype, r), t && _defineProperties5(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _toPropertyKey8(t) {
  var i = _toPrimitive8(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive8(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var _a, $output = Symbol("ZodOutput"), $input = Symbol("ZodInput"), $ZodRegistry = /* @__PURE__ */ (function() {
  function $ZodRegistry2() {
    _classCallCheck5(this, $ZodRegistry2), this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  return _createClass5($ZodRegistry2, [{
    key: "add",
    value: function(schema) {
      var meta3 = arguments.length <= 1 ? void 0 : arguments[1];
      if (this._map.set(schema, meta3), meta3 && typeof meta3 == "object" && "id" in meta3) {
        if (this._idmap.has(meta3.id))
          throw new Error("ID ".concat(meta3.id, " already exists in the registry"));
        this._idmap.set(meta3.id, schema);
      }
      return this;
    }
  }, {
    key: "clear",
    value: function() {
      return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
    }
  }, {
    key: "remove",
    value: function(schema) {
      var meta3 = this._map.get(schema);
      return meta3 && typeof meta3 == "object" && "id" in meta3 && this._idmap.delete(meta3.id), this._map.delete(schema), this;
    }
  }, {
    key: "get",
    value: function(schema) {
      var p = schema._zod.parent;
      if (p) {
        var pm = _objectSpread6({}, this.get(p) ?? {});
        delete pm.id;
        var f = _objectSpread6(_objectSpread6({}, pm), this._map.get(schema));
        return Object.keys(f).length ? f : void 0;
      }
      return this._map.get(schema);
    }
  }, {
    key: "has",
    value: function(schema) {
      return this._map.has(schema);
    }
  }]);
})();
function registry() {
  return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;

// ../../node_modules/zod/v4/core/api.js
function _toConsumableArray7(r) {
  return _arrayWithoutHoles7(r) || _iterableToArray7(r) || _unsupportedIterableToArray10(r) || _nonIterableSpread7();
}
function _nonIterableSpread7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray10(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray10(r, a) : void 0;
  }
}
function _iterableToArray7(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles7(r) {
  if (Array.isArray(r)) return _arrayLikeToArray10(r);
}
function _arrayLikeToArray10(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function ownKeys7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys7(Object(t), !0).forEach(function(r2) {
      _defineProperty7(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty7(e, r, t) {
  return (r = _toPropertyKey9(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey9(t) {
  var i = _toPrimitive9(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive9(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _string(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string"
  }, normalizeParams(params)));
}
function _coercedString(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    coerce: !0
  }, normalizeParams(params)));
}
function _email(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _guid(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _uuid(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _uuidv4(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4"
  }, normalizeParams(params)));
}
function _uuidv6(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6"
  }, normalizeParams(params)));
}
function _uuidv7(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7"
  }, normalizeParams(params)));
}
function _url(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _emoji2(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _nanoid(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _cuid(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _cuid2(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _ulid(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _xid(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _ksuid(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _ipv4(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _ipv6(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _mac(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _cidrv4(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _cidrv6(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _base64(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _base64url(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _e164(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
function _jwt(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1
  }, normalizeParams(params)));
}
var TimePrecision = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function _isoDateTime(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null
  }, normalizeParams(params)));
}
function _isoDate(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "date",
    check: "string_format"
  }, normalizeParams(params)));
}
function _isoTime(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null
  }, normalizeParams(params)));
}
function _isoDuration(Class5, params) {
  return new Class5(_objectSpread7({
    type: "string",
    format: "duration",
    check: "string_format"
  }, normalizeParams(params)));
}
function _number(Class5, params) {
  return new Class5(_objectSpread7({
    type: "number",
    checks: []
  }, normalizeParams(params)));
}
function _coercedNumber(Class5, params) {
  return new Class5(_objectSpread7({
    type: "number",
    coerce: !0,
    checks: []
  }, normalizeParams(params)));
}
function _int(Class5, params) {
  return new Class5(_objectSpread7({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint"
  }, normalizeParams(params)));
}
function _float32(Class5, params) {
  return new Class5(_objectSpread7({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32"
  }, normalizeParams(params)));
}
function _float64(Class5, params) {
  return new Class5(_objectSpread7({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64"
  }, normalizeParams(params)));
}
function _int32(Class5, params) {
  return new Class5(_objectSpread7({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32"
  }, normalizeParams(params)));
}
function _uint32(Class5, params) {
  return new Class5(_objectSpread7({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32"
  }, normalizeParams(params)));
}
function _boolean(Class5, params) {
  return new Class5(_objectSpread7({
    type: "boolean"
  }, normalizeParams(params)));
}
function _coercedBoolean(Class5, params) {
  return new Class5(_objectSpread7({
    type: "boolean",
    coerce: !0
  }, normalizeParams(params)));
}
function _bigint(Class5, params) {
  return new Class5(_objectSpread7({
    type: "bigint"
  }, normalizeParams(params)));
}
function _coercedBigint(Class5, params) {
  return new Class5(_objectSpread7({
    type: "bigint",
    coerce: !0
  }, normalizeParams(params)));
}
function _int64(Class5, params) {
  return new Class5(_objectSpread7({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64"
  }, normalizeParams(params)));
}
function _uint64(Class5, params) {
  return new Class5(_objectSpread7({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64"
  }, normalizeParams(params)));
}
function _symbol(Class5, params) {
  return new Class5(_objectSpread7({
    type: "symbol"
  }, normalizeParams(params)));
}
function _undefined2(Class5, params) {
  return new Class5(_objectSpread7({
    type: "undefined"
  }, normalizeParams(params)));
}
function _null2(Class5, params) {
  return new Class5(_objectSpread7({
    type: "null"
  }, normalizeParams(params)));
}
function _any(Class5) {
  return new Class5({
    type: "any"
  });
}
function _unknown(Class5) {
  return new Class5({
    type: "unknown"
  });
}
function _never(Class5, params) {
  return new Class5(_objectSpread7({
    type: "never"
  }, normalizeParams(params)));
}
function _void(Class5, params) {
  return new Class5(_objectSpread7({
    type: "void"
  }, normalizeParams(params)));
}
function _date(Class5, params) {
  return new Class5(_objectSpread7({
    type: "date"
  }, normalizeParams(params)));
}
function _coercedDate(Class5, params) {
  return new Class5(_objectSpread7({
    type: "date",
    coerce: !0
  }, normalizeParams(params)));
}
function _nan(Class5, params) {
  return new Class5(_objectSpread7({
    type: "nan"
  }, normalizeParams(params)));
}
function _lt(value, params) {
  return new $ZodCheckLessThan(_objectSpread7(_objectSpread7({
    check: "less_than"
  }, normalizeParams(params)), {}, {
    value,
    inclusive: !1
  }));
}
function _lte(value, params) {
  return new $ZodCheckLessThan(_objectSpread7(_objectSpread7({
    check: "less_than"
  }, normalizeParams(params)), {}, {
    value,
    inclusive: !0
  }));
}
function _gt(value, params) {
  return new $ZodCheckGreaterThan(_objectSpread7(_objectSpread7({
    check: "greater_than"
  }, normalizeParams(params)), {}, {
    value,
    inclusive: !1
  }));
}
function _gte(value, params) {
  return new $ZodCheckGreaterThan(_objectSpread7(_objectSpread7({
    check: "greater_than"
  }, normalizeParams(params)), {}, {
    value,
    inclusive: !0
  }));
}
function _positive(params) {
  return _gt(0, params);
}
function _negative(params) {
  return _lt(0, params);
}
function _nonpositive(params) {
  return _lte(0, params);
}
function _nonnegative(params) {
  return _gte(0, params);
}
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf(_objectSpread7(_objectSpread7({
    check: "multiple_of"
  }, normalizeParams(params)), {}, {
    value
  }));
}
function _maxSize(maximum, params) {
  return new $ZodCheckMaxSize(_objectSpread7(_objectSpread7({
    check: "max_size"
  }, normalizeParams(params)), {}, {
    maximum
  }));
}
function _minSize(minimum, params) {
  return new $ZodCheckMinSize(_objectSpread7(_objectSpread7({
    check: "min_size"
  }, normalizeParams(params)), {}, {
    minimum
  }));
}
function _size(size, params) {
  return new $ZodCheckSizeEquals(_objectSpread7(_objectSpread7({
    check: "size_equals"
  }, normalizeParams(params)), {}, {
    size
  }));
}
function _maxLength(maximum, params) {
  var ch = new $ZodCheckMaxLength(_objectSpread7(_objectSpread7({
    check: "max_length"
  }, normalizeParams(params)), {}, {
    maximum
  }));
  return ch;
}
function _minLength(minimum, params) {
  return new $ZodCheckMinLength(_objectSpread7(_objectSpread7({
    check: "min_length"
  }, normalizeParams(params)), {}, {
    minimum
  }));
}
function _length(length, params) {
  return new $ZodCheckLengthEquals(_objectSpread7(_objectSpread7({
    check: "length_equals"
  }, normalizeParams(params)), {}, {
    length
  }));
}
function _regex(pattern, params) {
  return new $ZodCheckRegex(_objectSpread7(_objectSpread7({
    check: "string_format",
    format: "regex"
  }, normalizeParams(params)), {}, {
    pattern
  }));
}
function _lowercase(params) {
  return new $ZodCheckLowerCase(_objectSpread7({
    check: "string_format",
    format: "lowercase"
  }, normalizeParams(params)));
}
function _uppercase(params) {
  return new $ZodCheckUpperCase(_objectSpread7({
    check: "string_format",
    format: "uppercase"
  }, normalizeParams(params)));
}
function _includes(includes, params) {
  return new $ZodCheckIncludes(_objectSpread7(_objectSpread7({
    check: "string_format",
    format: "includes"
  }, normalizeParams(params)), {}, {
    includes
  }));
}
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith(_objectSpread7(_objectSpread7({
    check: "string_format",
    format: "starts_with"
  }, normalizeParams(params)), {}, {
    prefix
  }));
}
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith(_objectSpread7(_objectSpread7({
    check: "string_format",
    format: "ends_with"
  }, normalizeParams(params)), {}, {
    suffix
  }));
}
function _property(property, schema, params) {
  return new $ZodCheckProperty(_objectSpread7({
    check: "property",
    property,
    schema
  }, normalizeParams(params)));
}
function _mime(types, params) {
  return new $ZodCheckMimeType(_objectSpread7({
    check: "mime_type",
    mime: types
  }, normalizeParams(params)));
}
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
function _normalize(form) {
  return _overwrite(function(input) {
    return input.normalize(form);
  });
}
function _trim() {
  return _overwrite(function(input) {
    return input.trim();
  });
}
function _toLowerCase() {
  return _overwrite(function(input) {
    return input.toLowerCase();
  });
}
function _toUpperCase() {
  return _overwrite(function(input) {
    return input.toUpperCase();
  });
}
function _slugify() {
  return _overwrite(function(input) {
    return slugify(input);
  });
}
function _array(Class5, element, params) {
  return new Class5(_objectSpread7({
    type: "array",
    element
  }, normalizeParams(params)));
}
function _union(Class5, options, params) {
  return new Class5(_objectSpread7({
    type: "union",
    options
  }, normalizeParams(params)));
}
function _discriminatedUnion(Class5, discriminator, options, params) {
  return new Class5(_objectSpread7({
    type: "union",
    options,
    discriminator
  }, normalizeParams(params)));
}
function _intersection(Class5, left, right) {
  return new Class5({
    type: "intersection",
    left,
    right
  });
}
function _tuple(Class5, items, _paramsOrRest, _params) {
  var hasRest = _paramsOrRest instanceof $ZodType, params = hasRest ? _params : _paramsOrRest, rest = hasRest ? _paramsOrRest : null;
  return new Class5(_objectSpread7({
    type: "tuple",
    items,
    rest
  }, normalizeParams(params)));
}
function _record(Class5, keyType, valueType, params) {
  return new Class5(_objectSpread7({
    type: "record",
    keyType,
    valueType
  }, normalizeParams(params)));
}
function _map(Class5, keyType, valueType, params) {
  return new Class5(_objectSpread7({
    type: "map",
    keyType,
    valueType
  }, normalizeParams(params)));
}
function _set2(Class5, valueType, params) {
  return new Class5(_objectSpread7({
    type: "set",
    valueType
  }, normalizeParams(params)));
}
function _enum(Class5, values, params) {
  var entries = Array.isArray(values) ? Object.fromEntries(values.map(function(v) {
    return [v, v];
  })) : values;
  return new Class5(_objectSpread7({
    type: "enum",
    entries
  }, normalizeParams(params)));
}
function _nativeEnum(Class5, entries, params) {
  return new Class5(_objectSpread7({
    type: "enum",
    entries
  }, normalizeParams(params)));
}
function _literal(Class5, value, params) {
  return new Class5(_objectSpread7({
    type: "literal",
    values: Array.isArray(value) ? value : [value]
  }, normalizeParams(params)));
}
function _file(Class5, params) {
  return new Class5(_objectSpread7({
    type: "file"
  }, normalizeParams(params)));
}
function _transform(Class5, fn) {
  return new Class5({
    type: "transform",
    transform: fn
  });
}
function _optional(Class5, innerType) {
  return new Class5({
    type: "optional",
    innerType
  });
}
function _nullable(Class5, innerType) {
  return new Class5({
    type: "nullable",
    innerType
  });
}
function _default(Class5, innerType, defaultValue) {
  return new Class5({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue == "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
function _nonoptional(Class5, innerType, params) {
  return new Class5(_objectSpread7({
    type: "nonoptional",
    innerType
  }, normalizeParams(params)));
}
function _success(Class5, innerType) {
  return new Class5({
    type: "success",
    innerType
  });
}
function _catch(Class5, innerType, catchValue) {
  return new Class5({
    type: "catch",
    innerType,
    catchValue: typeof catchValue == "function" ? catchValue : function() {
      return catchValue;
    }
  });
}
function _pipe(Class5, in_, out) {
  return new Class5({
    type: "pipe",
    in: in_,
    out
  });
}
function _readonly(Class5, innerType) {
  return new Class5({
    type: "readonly",
    innerType
  });
}
function _templateLiteral(Class5, parts, params) {
  return new Class5(_objectSpread7({
    type: "template_literal",
    parts
  }, normalizeParams(params)));
}
function _lazy(Class5, getter) {
  return new Class5({
    type: "lazy",
    getter
  });
}
function _promise(Class5, innerType) {
  return new Class5({
    type: "promise",
    innerType
  });
}
function _custom(Class5, fn, _params) {
  var norm = normalizeParams(_params);
  norm.abort ?? (norm.abort = !0);
  var schema = new Class5(_objectSpread7({
    type: "custom",
    check: "custom",
    fn
  }, norm));
  return schema;
}
function _refine(Class5, fn, _params) {
  var schema = new Class5(_objectSpread7({
    type: "custom",
    check: "custom",
    fn
  }, normalizeParams(_params)));
  return schema;
}
function _superRefine(fn) {
  var ch = _check(function(payload) {
    return payload.addIssue = function(issue2) {
      if (typeof issue2 == "string")
        payload.issues.push(issue(issue2, payload.value, ch._zod.def));
      else {
        var _issue = issue2;
        _issue.fatal && (_issue.continue = !1), _issue.code ?? (_issue.code = "custom"), _issue.input ?? (_issue.input = payload.value), _issue.inst ?? (_issue.inst = ch), _issue.continue ?? (_issue.continue = !ch._zod.def.abort), payload.issues.push(issue(_issue));
      }
    }, fn(payload.value, payload);
  });
  return ch;
}
function _check(fn, params) {
  var ch = new $ZodCheck(_objectSpread7({
    check: "custom"
  }, normalizeParams(params)));
  return ch._zod.check = fn, ch;
}
function describe(description) {
  var ch = new $ZodCheck({
    check: "describe"
  });
  return ch._zod.onattach = [function(inst) {
    var existing = globalRegistry.get(inst) ?? {};
    globalRegistry.add(inst, _objectSpread7(_objectSpread7({}, existing), {}, {
      description
    }));
  }], ch._zod.check = function() {
  }, ch;
}
function meta(metadata) {
  var ch = new $ZodCheck({
    check: "meta"
  });
  return ch._zod.onattach = [function(inst) {
    var existing = globalRegistry.get(inst) ?? {};
    globalRegistry.add(inst, _objectSpread7(_objectSpread7({}, existing), metadata));
  }], ch._zod.check = function() {
  }, ch;
}
function _stringbool(Classes, _params) {
  var params = normalizeParams(_params), truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  params.case !== "sensitive" && (truthyArray = truthyArray.map(function(v) {
    return typeof v == "string" ? v.toLowerCase() : v;
  }), falsyArray = falsyArray.map(function(v) {
    return typeof v == "string" ? v.toLowerCase() : v;
  }));
  var truthySet = new Set(truthyArray), falsySet = new Set(falsyArray), _Codec = Classes.Codec ?? $ZodCodec, _Boolean = Classes.Boolean ?? $ZodBoolean, _String = Classes.String ?? $ZodString, stringSchema = new _String({
    type: "string",
    error: params.error
  }), booleanSchema = new _Boolean({
    type: "boolean",
    error: params.error
  }), codec2 = new _Codec({
    type: "pipe",
    in: stringSchema,
    out: booleanSchema,
    transform: function(input, payload) {
      var data = input;
      return params.case !== "sensitive" && (data = data.toLowerCase()), truthySet.has(data) ? !0 : falsySet.has(data) ? !1 : (payload.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [].concat(_toConsumableArray7(truthySet), _toConsumableArray7(falsySet)),
        input: payload.value,
        inst: codec2,
        continue: !1
      }), {});
    },
    reverseTransform: function(input, _payload) {
      return input === !0 ? truthyArray[0] || "true" : falsyArray[0] || "false";
    },
    error: params.error
  });
  return codec2;
}
function _stringFormat(Class5, format, fnOrRegex) {
  var _params = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, params = normalizeParams(_params), def = _objectSpread7(_objectSpread7({}, normalizeParams(_params)), {}, {
    check: "string_format",
    type: "string",
    format,
    fn: typeof fnOrRegex == "function" ? fnOrRegex : function(val) {
      return fnOrRegex.test(val);
    }
  }, params);
  fnOrRegex instanceof RegExp && (def.pattern = fnOrRegex);
  var inst = new Class5(def);
  return inst;
}

// ../../node_modules/zod/v4/core/to-json-schema.js
function _slicedToArray6(r, e) {
  return _arrayWithHoles6(r) || _iterableToArrayLimit6(r, e) || _unsupportedIterableToArray11(r, e) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit6(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles6(r) {
  if (Array.isArray(r)) return r;
}
function _createForOfIteratorHelper7(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray11(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _toConsumableArray8(r) {
  return _arrayWithoutHoles8(r) || _iterableToArray8(r) || _unsupportedIterableToArray11(r) || _nonIterableSpread8();
}
function _nonIterableSpread8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray11(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray11(r, a) : void 0;
  }
}
function _iterableToArray8(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles8(r) {
  if (Array.isArray(r)) return _arrayLikeToArray11(r);
}
function _arrayLikeToArray11(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function ownKeys8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys8(Object(t), !0).forEach(function(r2) {
      _defineProperty8(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys8(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty8(e, r, t) {
  return (r = _toPropertyKey10(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _classCallCheck6(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties6(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey10(o.key), o);
  }
}
function _createClass6(e, r, t) {
  return r && _defineProperties6(e.prototype, r), t && _defineProperties6(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _toPropertyKey10(t) {
  var i = _toPrimitive10(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive10(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var JSONSchemaGenerator = /* @__PURE__ */ (function() {
  function JSONSchemaGenerator2(params) {
    _classCallCheck6(this, JSONSchemaGenerator2), this.counter = 0, this.metadataRegistry = (params == null ? void 0 : params.metadata) ?? globalRegistry, this.target = (params == null ? void 0 : params.target) ?? "draft-2020-12", this.unrepresentable = (params == null ? void 0 : params.unrepresentable) ?? "throw", this.override = (params == null ? void 0 : params.override) ?? function() {
    }, this.io = (params == null ? void 0 : params.io) ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  return _createClass6(JSONSchemaGenerator2, [{
    key: "process",
    value: function(schema) {
      var _this = this;
      var _schema$_zod$toJSONSc, _schema$_zod, _params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        path: [],
        schemaPath: []
      }, _a2, def = schema._zod.def, formatMap = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: ""
        // do not set
      }, seen = this.seen.get(schema);
      if (seen) {
        seen.count++;
        var isCycle = _params.schemaPath.includes(schema);
        return isCycle && (seen.cycle = _params.path), seen.schema;
      }
      var result = {
        schema: {},
        count: 1,
        cycle: void 0,
        path: _params.path
      };
      this.seen.set(schema, result);
      var overrideSchema = (_schema$_zod$toJSONSc = (_schema$_zod = schema._zod).toJSONSchema) === null || _schema$_zod$toJSONSc === void 0 ? void 0 : _schema$_zod$toJSONSc.call(_schema$_zod);
      if (overrideSchema)
        result.schema = overrideSchema;
      else {
        var params = _objectSpread8(_objectSpread8({}, _params), {}, {
          schemaPath: [].concat(_toConsumableArray8(_params.schemaPath), [schema]),
          path: _params.path
        }), parent = schema._zod.parent;
        if (parent)
          result.ref = parent, this.process(parent, params), this.seen.get(parent).isParent = !0;
        else {
          var _json = result.schema;
          switch (def.type) {
            case "string": {
              var json2 = _json;
              json2.type = "string";
              var _schema$_zod$bag = schema._zod.bag, minimum = _schema$_zod$bag.minimum, maximum = _schema$_zod$bag.maximum, format = _schema$_zod$bag.format, patterns = _schema$_zod$bag.patterns, contentEncoding = _schema$_zod$bag.contentEncoding;
              if (typeof minimum == "number" && (json2.minLength = minimum), typeof maximum == "number" && (json2.maxLength = maximum), format && (json2.format = formatMap[format] ?? format, json2.format === "" && delete json2.format), contentEncoding && (json2.contentEncoding = contentEncoding), patterns && patterns.size > 0) {
                var regexes = _toConsumableArray8(patterns);
                regexes.length === 1 ? json2.pattern = regexes[0].source : regexes.length > 1 && (result.schema.allOf = _toConsumableArray8(regexes.map(function(regex) {
                  return _objectSpread8(_objectSpread8({}, _this.target === "draft-7" || _this.target === "draft-4" || _this.target === "openapi-3.0" ? {
                    type: "string"
                  } : {}), {}, {
                    pattern: regex.source
                  });
                })));
              }
              break;
            }
            case "number": {
              var _json2 = _json, _schema$_zod$bag2 = schema._zod.bag, _minimum = _schema$_zod$bag2.minimum, _maximum = _schema$_zod$bag2.maximum, _format = _schema$_zod$bag2.format, multipleOf = _schema$_zod$bag2.multipleOf, exclusiveMaximum = _schema$_zod$bag2.exclusiveMaximum, exclusiveMinimum = _schema$_zod$bag2.exclusiveMinimum;
              typeof _format == "string" && _format.includes("int") ? _json2.type = "integer" : _json2.type = "number", typeof exclusiveMinimum == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (_json2.minimum = exclusiveMinimum, _json2.exclusiveMinimum = !0) : _json2.exclusiveMinimum = exclusiveMinimum), typeof _minimum == "number" && (_json2.minimum = _minimum, typeof exclusiveMinimum == "number" && this.target !== "draft-4" && (exclusiveMinimum >= _minimum ? delete _json2.minimum : delete _json2.exclusiveMinimum)), typeof exclusiveMaximum == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (_json2.maximum = exclusiveMaximum, _json2.exclusiveMaximum = !0) : _json2.exclusiveMaximum = exclusiveMaximum), typeof _maximum == "number" && (_json2.maximum = _maximum, typeof exclusiveMaximum == "number" && this.target !== "draft-4" && (exclusiveMaximum <= _maximum ? delete _json2.maximum : delete _json2.exclusiveMaximum)), typeof multipleOf == "number" && (_json2.multipleOf = multipleOf);
              break;
            }
            case "boolean": {
              var _json3 = _json;
              _json3.type = "boolean";
              break;
            }
            case "bigint": {
              if (this.unrepresentable === "throw")
                throw new Error("BigInt cannot be represented in JSON Schema");
              break;
            }
            case "symbol": {
              if (this.unrepresentable === "throw")
                throw new Error("Symbols cannot be represented in JSON Schema");
              break;
            }
            case "null": {
              this.target === "openapi-3.0" ? (_json.type = "string", _json.nullable = !0, _json.enum = [null]) : _json.type = "null";
              break;
            }
            case "any":
              break;
            case "unknown":
              break;
            case "undefined": {
              if (this.unrepresentable === "throw")
                throw new Error("Undefined cannot be represented in JSON Schema");
              break;
            }
            case "void": {
              if (this.unrepresentable === "throw")
                throw new Error("Void cannot be represented in JSON Schema");
              break;
            }
            case "never": {
              _json.not = {};
              break;
            }
            case "date": {
              if (this.unrepresentable === "throw")
                throw new Error("Date cannot be represented in JSON Schema");
              break;
            }
            case "array": {
              var _json4 = _json, _schema$_zod$bag3 = schema._zod.bag, _minimum2 = _schema$_zod$bag3.minimum, _maximum2 = _schema$_zod$bag3.maximum;
              typeof _minimum2 == "number" && (_json4.minItems = _minimum2), typeof _maximum2 == "number" && (_json4.maxItems = _maximum2), _json4.type = "array", _json4.items = this.process(def.element, _objectSpread8(_objectSpread8({}, params), {}, {
                path: [].concat(_toConsumableArray8(params.path), ["items"])
              }));
              break;
            }
            case "object": {
              var _def$catchall, _json5 = _json;
              _json5.type = "object", _json5.properties = {};
              var shape = def.shape;
              for (var key in shape)
                _json5.properties[key] = this.process(shape[key], _objectSpread8(_objectSpread8({}, params), {}, {
                  path: [].concat(_toConsumableArray8(params.path), ["properties", key])
                }));
              var allKeys = new Set(Object.keys(shape)), requiredKeys = new Set(_toConsumableArray8(allKeys).filter(function(key2) {
                var v = def.shape[key2]._zod;
                return _this.io === "input" ? v.optin === void 0 : v.optout === void 0;
              }));
              requiredKeys.size > 0 && (_json5.required = Array.from(requiredKeys)), ((_def$catchall = def.catchall) === null || _def$catchall === void 0 ? void 0 : _def$catchall._zod.def.type) === "never" ? _json5.additionalProperties = !1 : def.catchall ? def.catchall && (_json5.additionalProperties = this.process(def.catchall, _objectSpread8(_objectSpread8({}, params), {}, {
                path: [].concat(_toConsumableArray8(params.path), ["additionalProperties"])
              }))) : this.io === "output" && (_json5.additionalProperties = !1);
              break;
            }
            case "union": {
              var _json6 = _json, isDiscriminated = def.discriminator !== void 0, options = def.options.map(function(x, i) {
                return _this.process(x, _objectSpread8(_objectSpread8({}, params), {}, {
                  path: [].concat(_toConsumableArray8(params.path), [isDiscriminated ? "oneOf" : "anyOf", i])
                }));
              });
              isDiscriminated ? _json6.oneOf = options : _json6.anyOf = options;
              break;
            }
            case "intersection": {
              var _json7 = _json, a = this.process(def.left, _objectSpread8(_objectSpread8({}, params), {}, {
                path: [].concat(_toConsumableArray8(params.path), ["allOf", 0])
              })), b = this.process(def.right, _objectSpread8(_objectSpread8({}, params), {}, {
                path: [].concat(_toConsumableArray8(params.path), ["allOf", 1])
              })), isSimpleIntersection = function(val2) {
                return "allOf" in val2 && Object.keys(val2).length === 1;
              }, allOf = [].concat(_toConsumableArray8(isSimpleIntersection(a) ? a.allOf : [a]), _toConsumableArray8(isSimpleIntersection(b) ? b.allOf : [b]));
              _json7.allOf = allOf;
              break;
            }
            case "tuple": {
              var _json8 = _json;
              _json8.type = "array";
              var prefixPath = this.target === "draft-2020-12" ? "prefixItems" : "items", restPath = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", prefixItems = def.items.map(function(x, i) {
                return _this.process(x, _objectSpread8(_objectSpread8({}, params), {}, {
                  path: [].concat(_toConsumableArray8(params.path), [prefixPath, i])
                }));
              }), rest = def.rest ? this.process(def.rest, _objectSpread8(_objectSpread8({}, params), {}, {
                path: [].concat(_toConsumableArray8(params.path), [restPath], _toConsumableArray8(this.target === "openapi-3.0" ? [def.items.length] : []))
              })) : null;
              this.target === "draft-2020-12" ? (_json8.prefixItems = prefixItems, rest && (_json8.items = rest)) : this.target === "openapi-3.0" ? (_json8.items = {
                anyOf: prefixItems
              }, rest && _json8.items.anyOf.push(rest), _json8.minItems = prefixItems.length, rest || (_json8.maxItems = prefixItems.length)) : (_json8.items = prefixItems, rest && (_json8.additionalItems = rest));
              var _schema$_zod$bag4 = schema._zod.bag, _minimum3 = _schema$_zod$bag4.minimum, _maximum3 = _schema$_zod$bag4.maximum;
              typeof _minimum3 == "number" && (_json8.minItems = _minimum3), typeof _maximum3 == "number" && (_json8.maxItems = _maximum3);
              break;
            }
            case "record": {
              var _json9 = _json;
              _json9.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (_json9.propertyNames = this.process(def.keyType, _objectSpread8(_objectSpread8({}, params), {}, {
                path: [].concat(_toConsumableArray8(params.path), ["propertyNames"])
              }))), _json9.additionalProperties = this.process(def.valueType, _objectSpread8(_objectSpread8({}, params), {}, {
                path: [].concat(_toConsumableArray8(params.path), ["additionalProperties"])
              }));
              break;
            }
            case "map": {
              if (this.unrepresentable === "throw")
                throw new Error("Map cannot be represented in JSON Schema");
              break;
            }
            case "set": {
              if (this.unrepresentable === "throw")
                throw new Error("Set cannot be represented in JSON Schema");
              break;
            }
            case "enum": {
              var _json0 = _json, values = getEnumValues(def.entries);
              values.every(function(v) {
                return typeof v == "number";
              }) && (_json0.type = "number"), values.every(function(v) {
                return typeof v == "string";
              }) && (_json0.type = "string"), _json0.enum = values;
              break;
            }
            case "literal": {
              var _json1 = _json, vals = [], _iterator = _createForOfIteratorHelper7(def.values), _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  var _val = _step.value;
                  if (_val === void 0) {
                    if (this.unrepresentable === "throw")
                      throw new Error("Literal `undefined` cannot be represented in JSON Schema");
                  } else if (typeof _val == "bigint") {
                    if (this.unrepresentable === "throw")
                      throw new Error("BigInt literals cannot be represented in JSON Schema");
                    vals.push(Number(_val));
                  } else
                    vals.push(_val);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              if (vals.length !== 0)
                if (vals.length === 1) {
                  var val = vals[0];
                  _json1.type = val === null ? "null" : typeof val, this.target === "draft-4" || this.target === "openapi-3.0" ? _json1.enum = [val] : _json1.const = val;
                } else
                  vals.every(function(v) {
                    return typeof v == "number";
                  }) && (_json1.type = "number"), vals.every(function(v) {
                    return typeof v == "string";
                  }) && (_json1.type = "string"), vals.every(function(v) {
                    return typeof v == "boolean";
                  }) && (_json1.type = "string"), vals.every(function(v) {
                    return v === null;
                  }) && (_json1.type = "null"), _json1.enum = vals;
              break;
            }
            case "file": {
              var _json10 = _json, file2 = {
                type: "string",
                format: "binary",
                contentEncoding: "binary"
              }, _schema$_zod$bag5 = schema._zod.bag, _minimum4 = _schema$_zod$bag5.minimum, _maximum4 = _schema$_zod$bag5.maximum, mime = _schema$_zod$bag5.mime;
              _minimum4 !== void 0 && (file2.minLength = _minimum4), _maximum4 !== void 0 && (file2.maxLength = _maximum4), mime ? mime.length === 1 ? (file2.contentMediaType = mime[0], Object.assign(_json10, file2)) : _json10.anyOf = mime.map(function(m) {
                var mFile = _objectSpread8(_objectSpread8({}, file2), {}, {
                  contentMediaType: m
                });
                return mFile;
              }) : Object.assign(_json10, file2);
              break;
            }
            case "transform": {
              if (this.unrepresentable === "throw")
                throw new Error("Transforms cannot be represented in JSON Schema");
              break;
            }
            case "nullable": {
              var inner = this.process(def.innerType, params);
              this.target === "openapi-3.0" ? (result.ref = def.innerType, _json.nullable = !0) : _json.anyOf = [inner, {
                type: "null"
              }];
              break;
            }
            case "nonoptional": {
              this.process(def.innerType, params), result.ref = def.innerType;
              break;
            }
            case "success": {
              var _json11 = _json;
              _json11.type = "boolean";
              break;
            }
            case "default": {
              this.process(def.innerType, params), result.ref = def.innerType, _json.default = JSON.parse(JSON.stringify(def.defaultValue));
              break;
            }
            case "prefault": {
              this.process(def.innerType, params), result.ref = def.innerType, this.io === "input" && (_json._prefault = JSON.parse(JSON.stringify(def.defaultValue)));
              break;
            }
            case "catch": {
              this.process(def.innerType, params), result.ref = def.innerType;
              var catchValue;
              try {
                catchValue = def.catchValue(void 0);
              } catch (_unused) {
                throw new Error("Dynamic catch values are not supported in JSON Schema");
              }
              _json.default = catchValue;
              break;
            }
            case "nan": {
              if (this.unrepresentable === "throw")
                throw new Error("NaN cannot be represented in JSON Schema");
              break;
            }
            case "template_literal": {
              var _json12 = _json, pattern = schema._zod.pattern;
              if (!pattern) throw new Error("Pattern not found in template literal");
              _json12.type = "string", _json12.pattern = pattern.source;
              break;
            }
            case "pipe": {
              var innerType = this.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
              this.process(innerType, params), result.ref = innerType;
              break;
            }
            case "readonly": {
              this.process(def.innerType, params), result.ref = def.innerType, _json.readOnly = !0;
              break;
            }
            // passthrough types
            case "promise": {
              this.process(def.innerType, params), result.ref = def.innerType;
              break;
            }
            case "optional": {
              this.process(def.innerType, params), result.ref = def.innerType;
              break;
            }
            case "lazy": {
              var _innerType = schema._zod.innerType;
              this.process(_innerType, params), result.ref = _innerType;
              break;
            }
            case "custom": {
              if (this.unrepresentable === "throw")
                throw new Error("Custom types cannot be represented in JSON Schema");
              break;
            }
            case "function": {
              if (this.unrepresentable === "throw")
                throw new Error("Function types cannot be represented in JSON Schema");
              break;
            }
            default:
          }
        }
      }
      var meta3 = this.metadataRegistry.get(schema);
      meta3 && Object.assign(result.schema, meta3), this.io === "input" && isTransforming(schema) && (delete result.schema.examples, delete result.schema.default), this.io === "input" && result.schema._prefault && ((_a2 = result.schema).default ?? (_a2.default = result.schema._prefault)), delete result.schema._prefault;
      var _result = this.seen.get(schema);
      return _result.schema;
    }
  }, {
    key: "emit",
    value: function(schema, _params) {
      var _this = this;
      var _params$external, _params$external2, params = {
        cycles: (_params == null ? void 0 : _params.cycles) ?? "ref",
        reused: (_params == null ? void 0 : _params.reused) ?? "inline",
        // unrepresentable: _params?.unrepresentable ?? "throw",
        // uri: _params?.uri ?? ((id) => `${id}`),
        external: (_params == null ? void 0 : _params.external) ?? void 0
      }, root = this.seen.get(schema);
      if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
      var makeURI = function(entry2) {
        var defsSegment = _this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (params.external) {
          var _params$external$regi, externalId = (_params$external$regi = params.external.registry.get(entry2[0])) === null || _params$external$regi === void 0 ? void 0 : _params$external$regi.id, uriGenerator = params.external.uri ?? function(id3) {
            return id3;
          };
          if (externalId)
            return {
              ref: uriGenerator(externalId)
            };
          var id2 = entry2[1].defId ?? entry2[1].schema.id ?? "schema".concat(_this.counter++);
          return entry2[1].defId = id2, {
            defId: id2,
            ref: "".concat(uriGenerator("__shared"), "#/").concat(defsSegment, "/").concat(id2)
          };
        }
        if (entry2[1] === root)
          return {
            ref: "#"
          };
        var uriPrefix = "#", defUriPrefix = "".concat(uriPrefix, "/").concat(defsSegment, "/"), defId = entry2[1].schema.id ?? "__schema".concat(_this.counter++);
        return {
          defId,
          ref: defUriPrefix + defId
        };
      }, extractToDef = function(entry2) {
        if (!entry2[1].schema.$ref) {
          var seen2 = entry2[1], _makeURI = makeURI(entry2), ref = _makeURI.ref, defId = _makeURI.defId;
          seen2.def = _objectSpread8({}, seen2.schema), defId && (seen2.defId = defId);
          var schema2 = seen2.schema;
          for (var key in schema2)
            delete schema2[key];
          schema2.$ref = ref;
        }
      };
      if (params.cycles === "throw") {
        var _iterator2 = _createForOfIteratorHelper7(this.seen.entries()), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var entry = _step2.value, seen = entry[1];
            if (seen.cycle) {
              var _seen$cycle;
              throw new Error("Cycle detected: " + "#/".concat((_seen$cycle = seen.cycle) === null || _seen$cycle === void 0 ? void 0 : _seen$cycle.join("/"), "/<root>") + '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      var _iterator3 = _createForOfIteratorHelper7(this.seen.entries()), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var _this$metadataRegistr, _entry = _step3.value, _seen = _entry[1];
          if (schema === _entry[0]) {
            extractToDef(_entry);
            continue;
          }
          if (params.external) {
            var _params$external$regi3, ext = (_params$external$regi3 = params.external.registry.get(_entry[0])) === null || _params$external$regi3 === void 0 ? void 0 : _params$external$regi3.id;
            if (schema !== _entry[0] && ext) {
              extractToDef(_entry);
              continue;
            }
          }
          var _id = (_this$metadataRegistr = this.metadataRegistry.get(_entry[0])) === null || _this$metadataRegistr === void 0 ? void 0 : _this$metadataRegistr.id;
          if (_id) {
            extractToDef(_entry);
            continue;
          }
          if (_seen.cycle) {
            extractToDef(_entry);
            continue;
          }
          if (_seen.count > 1 && params.reused === "ref") {
            extractToDef(_entry);
            continue;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var flattenRef = function(zodSchema, params2) {
        var seen2 = _this.seen.get(zodSchema), schema2 = seen2.def ?? seen2.schema, _cached = _objectSpread8({}, schema2);
        if (seen2.ref !== null) {
          var ref = seen2.ref;
          if (seen2.ref = null, ref) {
            flattenRef(ref, params2);
            var refSchema = _this.seen.get(ref).schema;
            refSchema.$ref && (params2.target === "draft-7" || params2.target === "draft-4" || params2.target === "openapi-3.0") ? (schema2.allOf = schema2.allOf ?? [], schema2.allOf.push(refSchema)) : (Object.assign(schema2, refSchema), Object.assign(schema2, _cached));
          }
          seen2.isParent || _this.override({
            zodSchema,
            jsonSchema: schema2,
            path: seen2.path ?? []
          });
        }
      }, _iterator4 = _createForOfIteratorHelper7(_toConsumableArray8(this.seen.entries()).reverse()), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var _entry2 = _step4.value;
          flattenRef(_entry2[0], {
            target: this.target
          });
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var result = {};
      if (this.target === "draft-2020-12" ? result.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? result.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? result.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn("Invalid target: ".concat(this.target)), (_params$external = params.external) !== null && _params$external !== void 0 && _params$external.uri) {
        var _params$external$regi2, id = (_params$external$regi2 = params.external.registry.get(schema)) === null || _params$external$regi2 === void 0 ? void 0 : _params$external$regi2.id;
        if (!id) throw new Error("Schema is missing an `id` property");
        result.$id = params.external.uri(id);
      }
      Object.assign(result, root.def);
      var defs = ((_params$external2 = params.external) === null || _params$external2 === void 0 ? void 0 : _params$external2.defs) ?? {}, _iterator5 = _createForOfIteratorHelper7(this.seen.entries()), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var _entry3 = _step5.value, _seen2 = _entry3[1];
          _seen2.def && _seen2.defId && (defs[_seen2.defId] = _seen2.def);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      params.external || Object.keys(defs).length > 0 && (this.target === "draft-2020-12" ? result.$defs = defs : result.definitions = defs);
      try {
        return JSON.parse(JSON.stringify(result));
      } catch (_err) {
        throw new Error("Error converting schema to JSON.");
      }
    }
  }]);
})();
function toJSONSchema(input, _params) {
  if (input instanceof $ZodRegistry) {
    var _gen = new JSONSchemaGenerator(_params), defs = {}, _iterator6 = _createForOfIteratorHelper7(input._idmap.entries()), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        var entry = _step6.value, _entry4 = _slicedToArray6(entry, 2), _ = _entry4[0], schema = _entry4[1];
        _gen.process(schema);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    var schemas = {}, external = {
      registry: input,
      uri: _params == null ? void 0 : _params.uri,
      defs
    }, _iterator7 = _createForOfIteratorHelper7(input._idmap.entries()), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        var _entry5 = _step7.value, _entry6 = _slicedToArray6(_entry5, 2), key = _entry6[0], _schema2 = _entry6[1];
        schemas[key] = _gen.emit(_schema2, _objectSpread8(_objectSpread8({}, _params), {}, {
          external
        }));
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (Object.keys(defs).length > 0) {
      var defsSegment = _gen.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return {
      schemas
    };
  }
  var gen = new JSONSchemaGenerator(_params);
  return gen.process(input), gen.emit(input, _params);
}
function isTransforming(_schema, _ctx) {
  var ctx = _ctx ?? {
    seen: /* @__PURE__ */ new Set()
  };
  if (ctx.seen.has(_schema)) return !1;
  ctx.seen.add(_schema);
  var def = _schema._zod.def;
  if (def.type === "transform") return !0;
  if (def.type === "array") return isTransforming(def.element, ctx);
  if (def.type === "set") return isTransforming(def.valueType, ctx);
  if (def.type === "lazy") return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault")
    return isTransforming(def.innerType, ctx);
  if (def.type === "intersection")
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  if (def.type === "record" || def.type === "map")
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  if (def.type === "pipe")
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  if (def.type === "object") {
    for (var key in def.shape)
      if (isTransforming(def.shape[key], ctx)) return !0;
    return !1;
  }
  if (def.type === "union") {
    var _iterator8 = _createForOfIteratorHelper7(def.options), _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
        var option = _step8.value;
        if (isTransforming(option, ctx)) return !0;
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return !1;
  }
  if (def.type === "tuple") {
    var _iterator9 = _createForOfIteratorHelper7(def.items), _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
        var item = _step9.value;
        if (isTransforming(item, ctx)) return !0;
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return !!(def.rest && isTransforming(def.rest, ctx));
  }
  return !1;
}

// ../../node_modules/zod/v4/core/json-schema.js
var json_schema_exports = {};

// ../../node_modules/zod/v4/classic/checks.js
var checks_exports2 = {};
__export(checks_exports2, {
  endsWith: function() {
    return _endsWith;
  },
  gt: function() {
    return _gt;
  },
  gte: function() {
    return _gte;
  },
  includes: function() {
    return _includes;
  },
  length: function() {
    return _length;
  },
  lowercase: function() {
    return _lowercase;
  },
  lt: function() {
    return _lt;
  },
  lte: function() {
    return _lte;
  },
  maxLength: function() {
    return _maxLength;
  },
  maxSize: function() {
    return _maxSize;
  },
  mime: function() {
    return _mime;
  },
  minLength: function() {
    return _minLength;
  },
  minSize: function() {
    return _minSize;
  },
  multipleOf: function() {
    return _multipleOf;
  },
  negative: function() {
    return _negative;
  },
  nonnegative: function() {
    return _nonnegative;
  },
  nonpositive: function() {
    return _nonpositive;
  },
  normalize: function() {
    return _normalize;
  },
  overwrite: function() {
    return _overwrite;
  },
  positive: function() {
    return _positive;
  },
  property: function() {
    return _property;
  },
  regex: function() {
    return _regex;
  },
  size: function() {
    return _size;
  },
  slugify: function() {
    return _slugify;
  },
  startsWith: function() {
    return _startsWith;
  },
  toLowerCase: function() {
    return _toLowerCase;
  },
  toUpperCase: function() {
    return _toUpperCase;
  },
  trim: function() {
    return _trim;
  },
  uppercase: function() {
    return _uppercase;
  }
});

// ../../node_modules/zod/v4/classic/iso.js
var iso_exports = {};
__export(iso_exports, {
  ZodISODate: function() {
    return ZodISODate;
  },
  ZodISODateTime: function() {
    return ZodISODateTime;
  },
  ZodISODuration: function() {
    return ZodISODuration;
  },
  ZodISOTime: function() {
    return ZodISOTime;
  },
  date: function() {
    return date2;
  },
  datetime: function() {
    return datetime2;
  },
  duration: function() {
    return duration2;
  },
  time: function() {
    return time2;
  }
});
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", function(inst, def) {
  $ZodISODateTime.init(inst, def), ZodStringFormat.init(inst, def);
});
function datetime2(params) {
  return _isoDateTime(ZodISODateTime, params);
}
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", function(inst, def) {
  $ZodISODate.init(inst, def), ZodStringFormat.init(inst, def);
});
function date2(params) {
  return _isoDate(ZodISODate, params);
}
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", function(inst, def) {
  $ZodISOTime.init(inst, def), ZodStringFormat.init(inst, def);
});
function time2(params) {
  return _isoTime(ZodISOTime, params);
}
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", function(inst, def) {
  $ZodISODuration.init(inst, def), ZodStringFormat.init(inst, def);
});
function duration2(params) {
  return _isoDuration(ZodISODuration, params);
}

// ../../node_modules/zod/v4/classic/errors.js
function _toConsumableArray9(r) {
  return _arrayWithoutHoles9(r) || _iterableToArray9(r) || _unsupportedIterableToArray12(r) || _nonIterableSpread9();
}
function _nonIterableSpread9() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray12(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray12(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray12(r, a) : void 0;
  }
}
function _iterableToArray9(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles9(r) {
  if (Array.isArray(r)) return _arrayLikeToArray12(r);
}
function _arrayLikeToArray12(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var initializer2 = function(inst, issues) {
  $ZodError.init(inst, issues), inst.name = "ZodError", Object.defineProperties(inst, {
    format: {
      value: function(mapper) {
        return formatError(inst, mapper);
      }
      // enumerable: false,
    },
    flatten: {
      value: function(mapper) {
        return flattenError(inst, mapper);
      }
      // enumerable: false,
    },
    addIssue: {
      value: function(issue2) {
        inst.issues.push(issue2), inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: function(issues2) {
        var _inst$issues;
        (_inst$issues = inst.issues).push.apply(_inst$issues, _toConsumableArray9(issues2)), inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get: function() {
        return inst.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, ZodError = $constructor("ZodError", initializer2), ZodRealError = $constructor("ZodError", initializer2, {
  Parent: Error
});

// ../../node_modules/zod/v4/classic/parse.js
var parse2 = /* @__PURE__ */ _parse(ZodRealError), parseAsync2 = /* @__PURE__ */ _parseAsync(ZodRealError), safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError), safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError), encode2 = /* @__PURE__ */ _encode(ZodRealError), decode2 = /* @__PURE__ */ _decode(ZodRealError), encodeAsync2 = /* @__PURE__ */ _encodeAsync(ZodRealError), decodeAsync2 = /* @__PURE__ */ _decodeAsync(ZodRealError), safeEncode2 = /* @__PURE__ */ _safeEncode(ZodRealError), safeDecode2 = /* @__PURE__ */ _safeDecode(ZodRealError), safeEncodeAsync2 = /* @__PURE__ */ _safeEncodeAsync(ZodRealError), safeDecodeAsync2 = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

// ../../node_modules/zod/v4/classic/schemas.js
function _createForOfIteratorHelper8(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray13(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function ownKeys9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys9(Object(t), !0).forEach(function(r2) {
      _defineProperty9(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys9(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty9(e, r, t) {
  return (r = _toPropertyKey11(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey11(t) {
  var i = _toPrimitive11(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive11(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _regenerator3() {
  var e, t, r = typeof Symbol == "function" ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
  function i(r2, n2, o2, i2) {
    var c2 = n2 && n2.prototype instanceof Generator ? n2 : Generator, u2 = Object.create(c2.prototype);
    return _regeneratorDefine23(u2, "_invoke", (function(r3, n3, o3) {
      var i3, c3, u3, f2 = 0, p = o3 || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function(t2, r4) {
        return i3 = t2, c3 = 0, u3 = e, G.n = r4, a;
      } };
      function d(r4, n4) {
        for (c3 = r4, u3 = n4, t = 0; !y && f2 && !o4 && t < p.length; t++) {
          var o4, i4 = p[t], d2 = G.p, l = i4[2];
          r4 > 3 ? (o4 = l === n4) && (u3 = i4[(c3 = i4[4]) ? 5 : (c3 = 3, 3)], i4[4] = i4[5] = e) : i4[0] <= d2 && ((o4 = r4 < 2 && d2 < i4[1]) ? (c3 = 0, G.v = n4, G.n = i4[1]) : d2 < l && (o4 = r4 < 3 || i4[0] > n4 || n4 > l) && (i4[4] = r4, i4[5] = n4, G.n = l, c3 = 0));
        }
        if (o4 || r4 > 1) return a;
        throw y = !0, n4;
      }
      return function(o4, p2, l) {
        if (f2 > 1) throw TypeError("Generator is already running");
        for (y && p2 === 1 && d(p2, l), c3 = p2, u3 = l; (t = c3 < 2 ? e : u3) || !y; ) {
          i3 || (c3 ? c3 < 3 ? (c3 > 1 && (G.n = -1), d(c3, u3)) : G.n = u3 : G.v = u3);
          try {
            if (f2 = 2, i3) {
              if (c3 || (o4 = "next"), t = i3[o4]) {
                if (!(t = t.call(i3, u3))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u3 = t.value, c3 < 2 && (c3 = 0);
              } else c3 === 1 && (t = i3.return) && t.call(i3), c3 < 2 && (u3 = TypeError("The iterator does not provide a '" + o4 + "' method"), c3 = 1);
              i3 = e;
            } else if ((t = (y = G.n < 0) ? u3 : r3.call(n3, G)) !== a) break;
          } catch (t2) {
            i3 = e, c3 = 1, u3 = t2;
          } finally {
            f2 = 1;
          }
        }
        return { value: t, done: y };
      };
    })(r2, o2, i2), !0), u2;
  }
  var a = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine23(t = {}, n, function() {
    return this;
  }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e2) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e2, GeneratorFunctionPrototype) : (e2.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine23(e2, o, "GeneratorFunction")), e2.prototype = Object.create(u), e2;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine23(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine23(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine23(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine23(u), _regeneratorDefine23(u, o, "Generator"), _regeneratorDefine23(u, n, function() {
    return this;
  }), _regeneratorDefine23(u, "toString", function() {
    return "[object Generator]";
  }), (_regenerator3 = function() {
    return { w: i, m: f };
  })();
}
function _regeneratorDefine23(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e2) {
    i = 0;
  }
  _regeneratorDefine23 = function(e2, r2, n2, t2) {
    function o(r3, n3) {
      _regeneratorDefine23(e2, r3, function(e3) {
        return this._invoke(r3, n3, e3);
      });
    }
    r2 ? i ? i(e2, r2, { value: n2, enumerable: !t2, configurable: !t2, writable: !t2 }) : e2[r2] = n2 : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine23(e, r, n, t);
}
function asyncGeneratorStep3(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator3(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep3(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep3(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _toConsumableArray10(r) {
  return _arrayWithoutHoles10(r) || _iterableToArray10(r) || _unsupportedIterableToArray13(r) || _nonIterableSpread10();
}
function _nonIterableSpread10() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray13(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray13(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray13(r, a) : void 0;
  }
}
function _iterableToArray10(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles10(r) {
  if (Array.isArray(r)) return _arrayLikeToArray13(r);
}
function _arrayLikeToArray13(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var ZodType = /* @__PURE__ */ $constructor("ZodType", function(inst, def) {
  return $ZodType.init(inst, def), inst.def = def, inst.type = def.type, Object.defineProperty(inst, "_def", {
    value: def
  }), inst.check = function() {
    for (var _len = arguments.length, checks = new Array(_len), _key = 0; _key < _len; _key++)
      checks[_key] = arguments[_key];
    return inst.clone(util_exports.mergeDefs(def, {
      checks: [].concat(_toConsumableArray10(def.checks ?? []), _toConsumableArray10(checks.map(function(ch) {
        return typeof ch == "function" ? {
          _zod: {
            check: ch,
            def: {
              check: "custom"
            },
            onattach: []
          }
        } : ch;
      })))
    }));
  }, inst.clone = function(def2, params) {
    return clone(inst, def2, params);
  }, inst.brand = function() {
    return inst;
  }, inst.register = function(reg, meta3) {
    return reg.add(inst, meta3), inst;
  }, inst.parse = function(data, params) {
    return parse2(inst, data, params, {
      callee: inst.parse
    });
  }, inst.safeParse = function(data, params) {
    return safeParse2(inst, data, params);
  }, inst.parseAsync = /* @__PURE__ */ (function() {
    var _ref = _asyncToGenerator3(/* @__PURE__ */ _regenerator3().m(function _callee(data, params) {
      return _regenerator3().w(function(_context) {
        for (; ; ) switch (_context.n) {
          case 0:
            return _context.a(2, parseAsync2(inst, data, params, {
              callee: inst.parseAsync
            }));
        }
      }, _callee);
    }));
    return function(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })(), inst.safeParseAsync = /* @__PURE__ */ (function() {
    var _ref2 = _asyncToGenerator3(/* @__PURE__ */ _regenerator3().m(function _callee2(data, params) {
      return _regenerator3().w(function(_context2) {
        for (; ; ) switch (_context2.n) {
          case 0:
            return _context2.a(2, safeParseAsync2(inst, data, params));
        }
      }, _callee2);
    }));
    return function(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  })(), inst.spa = inst.safeParseAsync, inst.encode = function(data, params) {
    return encode2(inst, data, params);
  }, inst.decode = function(data, params) {
    return decode2(inst, data, params);
  }, inst.encodeAsync = /* @__PURE__ */ (function() {
    var _ref3 = _asyncToGenerator3(/* @__PURE__ */ _regenerator3().m(function _callee3(data, params) {
      return _regenerator3().w(function(_context3) {
        for (; ; ) switch (_context3.n) {
          case 0:
            return _context3.a(2, encodeAsync2(inst, data, params));
        }
      }, _callee3);
    }));
    return function(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  })(), inst.decodeAsync = /* @__PURE__ */ (function() {
    var _ref4 = _asyncToGenerator3(/* @__PURE__ */ _regenerator3().m(function _callee4(data, params) {
      return _regenerator3().w(function(_context4) {
        for (; ; ) switch (_context4.n) {
          case 0:
            return _context4.a(2, decodeAsync2(inst, data, params));
        }
      }, _callee4);
    }));
    return function(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  })(), inst.safeEncode = function(data, params) {
    return safeEncode2(inst, data, params);
  }, inst.safeDecode = function(data, params) {
    return safeDecode2(inst, data, params);
  }, inst.safeEncodeAsync = /* @__PURE__ */ (function() {
    var _ref5 = _asyncToGenerator3(/* @__PURE__ */ _regenerator3().m(function _callee5(data, params) {
      return _regenerator3().w(function(_context5) {
        for (; ; ) switch (_context5.n) {
          case 0:
            return _context5.a(2, safeEncodeAsync2(inst, data, params));
        }
      }, _callee5);
    }));
    return function(_x9, _x0) {
      return _ref5.apply(this, arguments);
    };
  })(), inst.safeDecodeAsync = /* @__PURE__ */ (function() {
    var _ref6 = _asyncToGenerator3(/* @__PURE__ */ _regenerator3().m(function _callee6(data, params) {
      return _regenerator3().w(function(_context6) {
        for (; ; ) switch (_context6.n) {
          case 0:
            return _context6.a(2, safeDecodeAsync2(inst, data, params));
        }
      }, _callee6);
    }));
    return function(_x1, _x10) {
      return _ref6.apply(this, arguments);
    };
  })(), inst.refine = function(check2, params) {
    return inst.check(refine(check2, params));
  }, inst.superRefine = function(refinement) {
    return inst.check(superRefine(refinement));
  }, inst.overwrite = function(fn) {
    return inst.check(_overwrite(fn));
  }, inst.optional = function() {
    return optional(inst);
  }, inst.nullable = function() {
    return nullable(inst);
  }, inst.nullish = function() {
    return optional(nullable(inst));
  }, inst.nonoptional = function(params) {
    return nonoptional(inst, params);
  }, inst.array = function() {
    return array(inst);
  }, inst.or = function(arg) {
    return union([inst, arg]);
  }, inst.and = function(arg) {
    return intersection(inst, arg);
  }, inst.transform = function(tx) {
    return pipe(inst, transform(tx));
  }, inst.default = function(def2) {
    return _default2(inst, def2);
  }, inst.prefault = function(def2) {
    return prefault(inst, def2);
  }, inst.catch = function(params) {
    return _catch2(inst, params);
  }, inst.pipe = function(target) {
    return pipe(inst, target);
  }, inst.readonly = function() {
    return readonly(inst);
  }, inst.describe = function(description) {
    var cl = inst.clone();
    return globalRegistry.add(cl, {
      description
    }), cl;
  }, Object.defineProperty(inst, "description", {
    get: function() {
      var _core$globalRegistry$;
      return (_core$globalRegistry$ = globalRegistry.get(inst)) === null || _core$globalRegistry$ === void 0 ? void 0 : _core$globalRegistry$.description;
    },
    configurable: !0
  }), inst.meta = function() {
    if (arguments.length === 0)
      return globalRegistry.get(inst);
    var cl = inst.clone();
    return globalRegistry.add(cl, arguments.length <= 0 ? void 0 : arguments[0]), cl;
  }, inst.isOptional = function() {
    return inst.safeParse(void 0).success;
  }, inst.isNullable = function() {
    return inst.safeParse(null).success;
  }, inst;
}), _ZodString = /* @__PURE__ */ $constructor("_ZodString", function(inst, def) {
  $ZodString.init(inst, def), ZodType.init(inst, def);
  var bag = inst._zod.bag;
  inst.format = bag.format ?? null, inst.minLength = bag.minimum ?? null, inst.maxLength = bag.maximum ?? null, inst.regex = function() {
    return inst.check(_regex.apply(checks_exports2, arguments));
  }, inst.includes = function() {
    return inst.check(_includes.apply(checks_exports2, arguments));
  }, inst.startsWith = function() {
    return inst.check(_startsWith.apply(checks_exports2, arguments));
  }, inst.endsWith = function() {
    return inst.check(_endsWith.apply(checks_exports2, arguments));
  }, inst.min = function() {
    return inst.check(_minLength.apply(checks_exports2, arguments));
  }, inst.max = function() {
    return inst.check(_maxLength.apply(checks_exports2, arguments));
  }, inst.length = function() {
    return inst.check(_length.apply(checks_exports2, arguments));
  }, inst.nonempty = function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
      args[_key2] = arguments[_key2];
    return inst.check(_minLength.apply(checks_exports2, [1].concat(args)));
  }, inst.lowercase = function(params) {
    return inst.check(_lowercase(params));
  }, inst.uppercase = function(params) {
    return inst.check(_uppercase(params));
  }, inst.trim = function() {
    return inst.check(_trim());
  }, inst.normalize = function() {
    return inst.check(_normalize.apply(checks_exports2, arguments));
  }, inst.toLowerCase = function() {
    return inst.check(_toLowerCase());
  }, inst.toUpperCase = function() {
    return inst.check(_toUpperCase());
  }, inst.slugify = function() {
    return inst.check(_slugify());
  };
}), ZodString = /* @__PURE__ */ $constructor("ZodString", function(inst, def) {
  $ZodString.init(inst, def), _ZodString.init(inst, def), inst.email = function(params) {
    return inst.check(_email(ZodEmail, params));
  }, inst.url = function(params) {
    return inst.check(_url(ZodURL, params));
  }, inst.jwt = function(params) {
    return inst.check(_jwt(ZodJWT, params));
  }, inst.emoji = function(params) {
    return inst.check(_emoji2(ZodEmoji, params));
  }, inst.guid = function(params) {
    return inst.check(_guid(ZodGUID, params));
  }, inst.uuid = function(params) {
    return inst.check(_uuid(ZodUUID, params));
  }, inst.uuidv4 = function(params) {
    return inst.check(_uuidv4(ZodUUID, params));
  }, inst.uuidv6 = function(params) {
    return inst.check(_uuidv6(ZodUUID, params));
  }, inst.uuidv7 = function(params) {
    return inst.check(_uuidv7(ZodUUID, params));
  }, inst.nanoid = function(params) {
    return inst.check(_nanoid(ZodNanoID, params));
  }, inst.guid = function(params) {
    return inst.check(_guid(ZodGUID, params));
  }, inst.cuid = function(params) {
    return inst.check(_cuid(ZodCUID, params));
  }, inst.cuid2 = function(params) {
    return inst.check(_cuid2(ZodCUID2, params));
  }, inst.ulid = function(params) {
    return inst.check(_ulid(ZodULID, params));
  }, inst.base64 = function(params) {
    return inst.check(_base64(ZodBase64, params));
  }, inst.base64url = function(params) {
    return inst.check(_base64url(ZodBase64URL, params));
  }, inst.xid = function(params) {
    return inst.check(_xid(ZodXID, params));
  }, inst.ksuid = function(params) {
    return inst.check(_ksuid(ZodKSUID, params));
  }, inst.ipv4 = function(params) {
    return inst.check(_ipv4(ZodIPv4, params));
  }, inst.ipv6 = function(params) {
    return inst.check(_ipv6(ZodIPv6, params));
  }, inst.cidrv4 = function(params) {
    return inst.check(_cidrv4(ZodCIDRv4, params));
  }, inst.cidrv6 = function(params) {
    return inst.check(_cidrv6(ZodCIDRv6, params));
  }, inst.e164 = function(params) {
    return inst.check(_e164(ZodE164, params));
  }, inst.datetime = function(params) {
    return inst.check(datetime2(params));
  }, inst.date = function(params) {
    return inst.check(date2(params));
  }, inst.time = function(params) {
    return inst.check(time2(params));
  }, inst.duration = function(params) {
    return inst.check(duration2(params));
  };
});
function string2(params) {
  return _string(ZodString, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", function(inst, def) {
  $ZodStringFormat.init(inst, def), _ZodString.init(inst, def);
}), ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", function(inst, def) {
  $ZodEmail.init(inst, def), ZodStringFormat.init(inst, def);
});
function email2(params) {
  return _email(ZodEmail, params);
}
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", function(inst, def) {
  $ZodGUID.init(inst, def), ZodStringFormat.init(inst, def);
});
function guid2(params) {
  return _guid(ZodGUID, params);
}
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", function(inst, def) {
  $ZodUUID.init(inst, def), ZodStringFormat.init(inst, def);
});
function uuid2(params) {
  return _uuid(ZodUUID, params);
}
function uuidv4(params) {
  return _uuidv4(ZodUUID, params);
}
function uuidv6(params) {
  return _uuidv6(ZodUUID, params);
}
function uuidv7(params) {
  return _uuidv7(ZodUUID, params);
}
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", function(inst, def) {
  $ZodURL.init(inst, def), ZodStringFormat.init(inst, def);
});
function url(params) {
  return _url(ZodURL, params);
}
function httpUrl(params) {
  return _url(ZodURL, _objectSpread9({
    protocol: /^https?$/,
    hostname: regexes_exports.domain
  }, util_exports.normalizeParams(params)));
}
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", function(inst, def) {
  $ZodEmoji.init(inst, def), ZodStringFormat.init(inst, def);
});
function emoji2(params) {
  return _emoji2(ZodEmoji, params);
}
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", function(inst, def) {
  $ZodNanoID.init(inst, def), ZodStringFormat.init(inst, def);
});
function nanoid2(params) {
  return _nanoid(ZodNanoID, params);
}
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", function(inst, def) {
  $ZodCUID.init(inst, def), ZodStringFormat.init(inst, def);
});
function cuid3(params) {
  return _cuid(ZodCUID, params);
}
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", function(inst, def) {
  $ZodCUID2.init(inst, def), ZodStringFormat.init(inst, def);
});
function cuid22(params) {
  return _cuid2(ZodCUID2, params);
}
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", function(inst, def) {
  $ZodULID.init(inst, def), ZodStringFormat.init(inst, def);
});
function ulid2(params) {
  return _ulid(ZodULID, params);
}
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", function(inst, def) {
  $ZodXID.init(inst, def), ZodStringFormat.init(inst, def);
});
function xid2(params) {
  return _xid(ZodXID, params);
}
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", function(inst, def) {
  $ZodKSUID.init(inst, def), ZodStringFormat.init(inst, def);
});
function ksuid2(params) {
  return _ksuid(ZodKSUID, params);
}
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", function(inst, def) {
  $ZodIPv4.init(inst, def), ZodStringFormat.init(inst, def);
});
function ipv42(params) {
  return _ipv4(ZodIPv4, params);
}
var ZodMAC = /* @__PURE__ */ $constructor("ZodMAC", function(inst, def) {
  $ZodMAC.init(inst, def), ZodStringFormat.init(inst, def);
});
function mac2(params) {
  return _mac(ZodMAC, params);
}
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", function(inst, def) {
  $ZodIPv6.init(inst, def), ZodStringFormat.init(inst, def);
});
function ipv62(params) {
  return _ipv6(ZodIPv6, params);
}
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", function(inst, def) {
  $ZodCIDRv4.init(inst, def), ZodStringFormat.init(inst, def);
});
function cidrv42(params) {
  return _cidrv4(ZodCIDRv4, params);
}
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", function(inst, def) {
  $ZodCIDRv6.init(inst, def), ZodStringFormat.init(inst, def);
});
function cidrv62(params) {
  return _cidrv6(ZodCIDRv6, params);
}
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", function(inst, def) {
  $ZodBase64.init(inst, def), ZodStringFormat.init(inst, def);
});
function base642(params) {
  return _base64(ZodBase64, params);
}
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", function(inst, def) {
  $ZodBase64URL.init(inst, def), ZodStringFormat.init(inst, def);
});
function base64url2(params) {
  return _base64url(ZodBase64URL, params);
}
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", function(inst, def) {
  $ZodE164.init(inst, def), ZodStringFormat.init(inst, def);
});
function e1642(params) {
  return _e164(ZodE164, params);
}
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", function(inst, def) {
  $ZodJWT.init(inst, def), ZodStringFormat.init(inst, def);
});
function jwt(params) {
  return _jwt(ZodJWT, params);
}
var ZodCustomStringFormat = /* @__PURE__ */ $constructor("ZodCustomStringFormat", function(inst, def) {
  $ZodCustomStringFormat.init(inst, def), ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex) {
  var _params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return _stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
}
function hostname2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hostname", regexes_exports.hostname, _params);
}
function hex2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hex", regexes_exports.hex, _params);
}
function hash(alg, params) {
  var enc = (params == null ? void 0 : params.enc) ?? "hex", format = "".concat(alg, "_").concat(enc), regex = regexes_exports[format];
  if (!regex) throw new Error("Unrecognized hash format: ".concat(format));
  return _stringFormat(ZodCustomStringFormat, format, regex, params);
}
var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", function(inst, def) {
  $ZodNumber.init(inst, def), ZodType.init(inst, def), inst.gt = function(value, params) {
    return inst.check(_gt(value, params));
  }, inst.gte = function(value, params) {
    return inst.check(_gte(value, params));
  }, inst.min = function(value, params) {
    return inst.check(_gte(value, params));
  }, inst.lt = function(value, params) {
    return inst.check(_lt(value, params));
  }, inst.lte = function(value, params) {
    return inst.check(_lte(value, params));
  }, inst.max = function(value, params) {
    return inst.check(_lte(value, params));
  }, inst.int = function(params) {
    return inst.check(int(params));
  }, inst.safe = function(params) {
    return inst.check(int(params));
  }, inst.positive = function(params) {
    return inst.check(_gt(0, params));
  }, inst.nonnegative = function(params) {
    return inst.check(_gte(0, params));
  }, inst.negative = function(params) {
    return inst.check(_lt(0, params));
  }, inst.nonpositive = function(params) {
    return inst.check(_lte(0, params));
  }, inst.multipleOf = function(value, params) {
    return inst.check(_multipleOf(value, params));
  }, inst.step = function(value, params) {
    return inst.check(_multipleOf(value, params));
  }, inst.finite = function() {
    return inst;
  };
  var bag = inst._zod.bag;
  inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5), inst.isFinite = !0, inst.format = bag.format ?? null;
});
function number2(params) {
  return _number(ZodNumber, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", function(inst, def) {
  $ZodNumberFormat.init(inst, def), ZodNumber.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
function float32(params) {
  return _float32(ZodNumberFormat, params);
}
function float64(params) {
  return _float64(ZodNumberFormat, params);
}
function int32(params) {
  return _int32(ZodNumberFormat, params);
}
function uint32(params) {
  return _uint32(ZodNumberFormat, params);
}
var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", function(inst, def) {
  $ZodBoolean.init(inst, def), ZodType.init(inst, def);
});
function boolean2(params) {
  return _boolean(ZodBoolean, params);
}
var ZodBigInt = /* @__PURE__ */ $constructor("ZodBigInt", function(inst, def) {
  $ZodBigInt.init(inst, def), ZodType.init(inst, def), inst.gte = function(value, params) {
    return inst.check(_gte(value, params));
  }, inst.min = function(value, params) {
    return inst.check(_gte(value, params));
  }, inst.gt = function(value, params) {
    return inst.check(_gt(value, params));
  }, inst.gte = function(value, params) {
    return inst.check(_gte(value, params));
  }, inst.min = function(value, params) {
    return inst.check(_gte(value, params));
  }, inst.lt = function(value, params) {
    return inst.check(_lt(value, params));
  }, inst.lte = function(value, params) {
    return inst.check(_lte(value, params));
  }, inst.max = function(value, params) {
    return inst.check(_lte(value, params));
  }, inst.positive = function(params) {
    return inst.check(_gt(BigInt(0), params));
  }, inst.negative = function(params) {
    return inst.check(_lt(BigInt(0), params));
  }, inst.nonpositive = function(params) {
    return inst.check(_lte(BigInt(0), params));
  }, inst.nonnegative = function(params) {
    return inst.check(_gte(BigInt(0), params));
  }, inst.multipleOf = function(value, params) {
    return inst.check(_multipleOf(value, params));
  };
  var bag = inst._zod.bag;
  inst.minValue = bag.minimum ?? null, inst.maxValue = bag.maximum ?? null, inst.format = bag.format ?? null;
});
function bigint2(params) {
  return _bigint(ZodBigInt, params);
}
var ZodBigIntFormat = /* @__PURE__ */ $constructor("ZodBigIntFormat", function(inst, def) {
  $ZodBigIntFormat.init(inst, def), ZodBigInt.init(inst, def);
});
function int64(params) {
  return _int64(ZodBigIntFormat, params);
}
function uint64(params) {
  return _uint64(ZodBigIntFormat, params);
}
var ZodSymbol = /* @__PURE__ */ $constructor("ZodSymbol", function(inst, def) {
  $ZodSymbol.init(inst, def), ZodType.init(inst, def);
});
function symbol(params) {
  return _symbol(ZodSymbol, params);
}
var ZodUndefined = /* @__PURE__ */ $constructor("ZodUndefined", function(inst, def) {
  $ZodUndefined.init(inst, def), ZodType.init(inst, def);
});
function _undefined3(params) {
  return _undefined2(ZodUndefined, params);
}
var ZodNull = /* @__PURE__ */ $constructor("ZodNull", function(inst, def) {
  $ZodNull.init(inst, def), ZodType.init(inst, def);
});
function _null3(params) {
  return _null2(ZodNull, params);
}
var ZodAny = /* @__PURE__ */ $constructor("ZodAny", function(inst, def) {
  $ZodAny.init(inst, def), ZodType.init(inst, def);
});
function any() {
  return _any(ZodAny);
}
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", function(inst, def) {
  $ZodUnknown.init(inst, def), ZodType.init(inst, def);
});
function unknown() {
  return _unknown(ZodUnknown);
}
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", function(inst, def) {
  $ZodNever.init(inst, def), ZodType.init(inst, def);
});
function never(params) {
  return _never(ZodNever, params);
}
var ZodVoid = /* @__PURE__ */ $constructor("ZodVoid", function(inst, def) {
  $ZodVoid.init(inst, def), ZodType.init(inst, def);
});
function _void2(params) {
  return _void(ZodVoid, params);
}
var ZodDate = /* @__PURE__ */ $constructor("ZodDate", function(inst, def) {
  $ZodDate.init(inst, def), ZodType.init(inst, def), inst.min = function(value, params) {
    return inst.check(_gte(value, params));
  }, inst.max = function(value, params) {
    return inst.check(_lte(value, params));
  };
  var c = inst._zod.bag;
  inst.minDate = c.minimum ? new Date(c.minimum) : null, inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date3(params) {
  return _date(ZodDate, params);
}
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", function(inst, def) {
  $ZodArray.init(inst, def), ZodType.init(inst, def), inst.element = def.element, inst.min = function(minLength, params) {
    return inst.check(_minLength(minLength, params));
  }, inst.nonempty = function(params) {
    return inst.check(_minLength(1, params));
  }, inst.max = function(maxLength, params) {
    return inst.check(_maxLength(maxLength, params));
  }, inst.length = function(len, params) {
    return inst.check(_length(len, params));
  }, inst.unwrap = function() {
    return inst.element;
  };
});
function array(element, params) {
  return _array(ZodArray, element, params);
}
function keyof(schema) {
  var shape = schema._zod.def.shape;
  return _enum2(Object.keys(shape));
}
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", function(inst, def) {
  $ZodObjectJIT.init(inst, def), ZodType.init(inst, def), util_exports.defineLazy(inst, "shape", function() {
    return def.shape;
  }), inst.keyof = function() {
    return _enum2(Object.keys(inst._zod.def.shape));
  }, inst.catchall = function(catchall) {
    return inst.clone(_objectSpread9(_objectSpread9({}, inst._zod.def), {}, {
      catchall
    }));
  }, inst.passthrough = function() {
    return inst.clone(_objectSpread9(_objectSpread9({}, inst._zod.def), {}, {
      catchall: unknown()
    }));
  }, inst.loose = function() {
    return inst.clone(_objectSpread9(_objectSpread9({}, inst._zod.def), {}, {
      catchall: unknown()
    }));
  }, inst.strict = function() {
    return inst.clone(_objectSpread9(_objectSpread9({}, inst._zod.def), {}, {
      catchall: never()
    }));
  }, inst.strip = function() {
    return inst.clone(_objectSpread9(_objectSpread9({}, inst._zod.def), {}, {
      catchall: void 0
    }));
  }, inst.extend = function(incoming) {
    return util_exports.extend(inst, incoming);
  }, inst.safeExtend = function(incoming) {
    return util_exports.safeExtend(inst, incoming);
  }, inst.merge = function(other) {
    return util_exports.merge(inst, other);
  }, inst.pick = function(mask) {
    return util_exports.pick(inst, mask);
  }, inst.omit = function(mask) {
    return util_exports.omit(inst, mask);
  }, inst.partial = function() {
    return util_exports.partial(ZodOptional, inst, arguments.length <= 0 ? void 0 : arguments[0]);
  }, inst.required = function() {
    return util_exports.required(ZodNonOptional, inst, arguments.length <= 0 ? void 0 : arguments[0]);
  };
});
function object(shape, params) {
  var def = _objectSpread9({
    type: "object",
    shape: shape ?? {}
  }, util_exports.normalizeParams(params));
  return new ZodObject(def);
}
function strictObject(shape, params) {
  return new ZodObject(_objectSpread9({
    type: "object",
    shape,
    catchall: never()
  }, util_exports.normalizeParams(params)));
}
function looseObject(shape, params) {
  return new ZodObject(_objectSpread9({
    type: "object",
    shape,
    catchall: unknown()
  }, util_exports.normalizeParams(params)));
}
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", function(inst, def) {
  $ZodUnion.init(inst, def), ZodType.init(inst, def), inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion(_objectSpread9({
    type: "union",
    options
  }, util_exports.normalizeParams(params)));
}
var ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", function(inst, def) {
  ZodUnion.init(inst, def), $ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
  return new ZodDiscriminatedUnion(_objectSpread9({
    type: "union",
    options,
    discriminator
  }, util_exports.normalizeParams(params)));
}
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", function(inst, def) {
  $ZodIntersection.init(inst, def), ZodType.init(inst, def);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
var ZodTuple = /* @__PURE__ */ $constructor("ZodTuple", function(inst, def) {
  $ZodTuple.init(inst, def), ZodType.init(inst, def), inst.rest = function(rest) {
    return inst.clone(_objectSpread9(_objectSpread9({}, inst._zod.def), {}, {
      rest
    }));
  };
});
function tuple(items, _paramsOrRest, _params) {
  var hasRest = _paramsOrRest instanceof $ZodType, params = hasRest ? _params : _paramsOrRest, rest = hasRest ? _paramsOrRest : null;
  return new ZodTuple(_objectSpread9({
    type: "tuple",
    items,
    rest
  }, util_exports.normalizeParams(params)));
}
var ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", function(inst, def) {
  $ZodRecord.init(inst, def), ZodType.init(inst, def), inst.keyType = def.keyType, inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
  return new ZodRecord(_objectSpread9({
    type: "record",
    keyType,
    valueType
  }, util_exports.normalizeParams(params)));
}
function partialRecord(keyType, valueType, params) {
  var k = clone(keyType);
  return k._zod.values = void 0, new ZodRecord(_objectSpread9({
    type: "record",
    keyType: k,
    valueType
  }, util_exports.normalizeParams(params)));
}
var ZodMap = /* @__PURE__ */ $constructor("ZodMap", function(inst, def) {
  $ZodMap.init(inst, def), ZodType.init(inst, def), inst.keyType = def.keyType, inst.valueType = def.valueType;
});
function map(keyType, valueType, params) {
  return new ZodMap(_objectSpread9({
    type: "map",
    keyType,
    valueType
  }, util_exports.normalizeParams(params)));
}
var ZodSet = /* @__PURE__ */ $constructor("ZodSet", function(inst, def) {
  $ZodSet.init(inst, def), ZodType.init(inst, def), inst.min = function() {
    return inst.check(_minSize.apply(core_exports2, arguments));
  }, inst.nonempty = function(params) {
    return inst.check(_minSize(1, params));
  }, inst.max = function() {
    return inst.check(_maxSize.apply(core_exports2, arguments));
  }, inst.size = function() {
    return inst.check(_size.apply(core_exports2, arguments));
  };
});
function set(valueType, params) {
  return new ZodSet(_objectSpread9({
    type: "set",
    valueType
  }, util_exports.normalizeParams(params)));
}
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", function(inst, def) {
  $ZodEnum.init(inst, def), ZodType.init(inst, def), inst.enum = def.entries, inst.options = Object.values(def.entries);
  var keys = new Set(Object.keys(def.entries));
  inst.extract = function(values, params) {
    var newEntries = {}, _iterator = _createForOfIteratorHelper8(values), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var value = _step.value;
        if (keys.has(value))
          newEntries[value] = def.entries[value];
        else throw new Error("Key ".concat(value, " not found in enum"));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return new ZodEnum(_objectSpread9(_objectSpread9(_objectSpread9({}, def), {}, {
      checks: []
    }, util_exports.normalizeParams(params)), {}, {
      entries: newEntries
    }));
  }, inst.exclude = function(values, params) {
    var newEntries = _objectSpread9({}, def.entries), _iterator2 = _createForOfIteratorHelper8(values), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var value = _step2.value;
        if (keys.has(value))
          delete newEntries[value];
        else throw new Error("Key ".concat(value, " not found in enum"));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return new ZodEnum(_objectSpread9(_objectSpread9(_objectSpread9({}, def), {}, {
      checks: []
    }, util_exports.normalizeParams(params)), {}, {
      entries: newEntries
    }));
  };
});
function _enum2(values, params) {
  var entries = Array.isArray(values) ? Object.fromEntries(values.map(function(v) {
    return [v, v];
  })) : values;
  return new ZodEnum(_objectSpread9({
    type: "enum",
    entries
  }, util_exports.normalizeParams(params)));
}
function nativeEnum(entries, params) {
  return new ZodEnum(_objectSpread9({
    type: "enum",
    entries
  }, util_exports.normalizeParams(params)));
}
var ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", function(inst, def) {
  $ZodLiteral.init(inst, def), ZodType.init(inst, def), inst.values = new Set(def.values), Object.defineProperty(inst, "value", {
    get: function() {
      if (def.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return def.values[0];
    }
  });
});
function literal(value, params) {
  return new ZodLiteral(_objectSpread9({
    type: "literal",
    values: Array.isArray(value) ? value : [value]
  }, util_exports.normalizeParams(params)));
}
var ZodFile = /* @__PURE__ */ $constructor("ZodFile", function(inst, def) {
  $ZodFile.init(inst, def), ZodType.init(inst, def), inst.min = function(size, params) {
    return inst.check(_minSize(size, params));
  }, inst.max = function(size, params) {
    return inst.check(_maxSize(size, params));
  }, inst.mime = function(types, params) {
    return inst.check(_mime(Array.isArray(types) ? types : [types], params));
  };
});
function file(params) {
  return _file(ZodFile, params);
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", function(inst, def) {
  $ZodTransform.init(inst, def), ZodType.init(inst, def), inst._zod.parse = function(payload, _ctx) {
    if (_ctx.direction === "backward")
      throw new $ZodEncodeError(inst.constructor.name);
    payload.addIssue = function(issue2) {
      if (typeof issue2 == "string")
        payload.issues.push(util_exports.issue(issue2, payload.value, def));
      else {
        var _issue = issue2;
        _issue.fatal && (_issue.continue = !1), _issue.code ?? (_issue.code = "custom"), _issue.input ?? (_issue.input = payload.value), _issue.inst ?? (_issue.inst = inst), payload.issues.push(util_exports.issue(_issue));
      }
    };
    var output = def.transform(payload.value, payload);
    return output instanceof Promise ? output.then(function(output2) {
      return payload.value = output2, payload;
    }) : (payload.value = output, payload);
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", function(inst, def) {
  $ZodOptional.init(inst, def), ZodType.init(inst, def), inst.unwrap = function() {
    return inst._zod.def.innerType;
  };
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", function(inst, def) {
  $ZodNullable.init(inst, def), ZodType.init(inst, def), inst.unwrap = function() {
    return inst._zod.def.innerType;
  };
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
function nullish2(innerType) {
  return optional(nullable(innerType));
}
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", function(inst, def) {
  $ZodDefault.init(inst, def), ZodType.init(inst, def), inst.unwrap = function() {
    return inst._zod.def.innerType;
  }, inst.removeDefault = inst.unwrap;
});
function _default2(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue == "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", function(inst, def) {
  $ZodPrefault.init(inst, def), ZodType.init(inst, def), inst.unwrap = function() {
    return inst._zod.def.innerType;
  };
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue == "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", function(inst, def) {
  $ZodNonOptional.init(inst, def), ZodType.init(inst, def), inst.unwrap = function() {
    return inst._zod.def.innerType;
  };
});
function nonoptional(innerType, params) {
  return new ZodNonOptional(_objectSpread9({
    type: "nonoptional",
    innerType
  }, util_exports.normalizeParams(params)));
}
var ZodSuccess = /* @__PURE__ */ $constructor("ZodSuccess", function(inst, def) {
  $ZodSuccess.init(inst, def), ZodType.init(inst, def), inst.unwrap = function() {
    return inst._zod.def.innerType;
  };
});
function success(innerType) {
  return new ZodSuccess({
    type: "success",
    innerType
  });
}
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", function(inst, def) {
  $ZodCatch.init(inst, def), ZodType.init(inst, def), inst.unwrap = function() {
    return inst._zod.def.innerType;
  }, inst.removeCatch = inst.unwrap;
});
function _catch2(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue == "function" ? catchValue : function() {
      return catchValue;
    }
  });
}
var ZodNaN = /* @__PURE__ */ $constructor("ZodNaN", function(inst, def) {
  $ZodNaN.init(inst, def), ZodType.init(inst, def);
});
function nan(params) {
  return _nan(ZodNaN, params);
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", function(inst, def) {
  $ZodPipe.init(inst, def), ZodType.init(inst, def), inst.in = def.in, inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
    // ...util.normalizeParams(params),
  });
}
var ZodCodec = /* @__PURE__ */ $constructor("ZodCodec", function(inst, def) {
  ZodPipe.init(inst, def), $ZodCodec.init(inst, def);
});
function codec(in_, out, params) {
  return new ZodCodec({
    type: "pipe",
    in: in_,
    out,
    transform: params.decode,
    reverseTransform: params.encode
  });
}
var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", function(inst, def) {
  $ZodReadonly.init(inst, def), ZodType.init(inst, def), inst.unwrap = function() {
    return inst._zod.def.innerType;
  };
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
var ZodTemplateLiteral = /* @__PURE__ */ $constructor("ZodTemplateLiteral", function(inst, def) {
  $ZodTemplateLiteral.init(inst, def), ZodType.init(inst, def);
});
function templateLiteral(parts, params) {
  return new ZodTemplateLiteral(_objectSpread9({
    type: "template_literal",
    parts
  }, util_exports.normalizeParams(params)));
}
var ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", function(inst, def) {
  $ZodLazy.init(inst, def), ZodType.init(inst, def), inst.unwrap = function() {
    return inst._zod.def.getter();
  };
});
function lazy(getter) {
  return new ZodLazy({
    type: "lazy",
    getter
  });
}
var ZodPromise = /* @__PURE__ */ $constructor("ZodPromise", function(inst, def) {
  $ZodPromise.init(inst, def), ZodType.init(inst, def), inst.unwrap = function() {
    return inst._zod.def.innerType;
  };
});
function promise(innerType) {
  return new ZodPromise({
    type: "promise",
    innerType
  });
}
var ZodFunction = /* @__PURE__ */ $constructor("ZodFunction", function(inst, def) {
  $ZodFunction.init(inst, def), ZodType.init(inst, def);
});
function _function(params) {
  return new ZodFunction({
    type: "function",
    input: Array.isArray(params == null ? void 0 : params.input) ? tuple(params == null ? void 0 : params.input) : (params == null ? void 0 : params.input) ?? array(unknown()),
    output: (params == null ? void 0 : params.output) ?? unknown()
  });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", function(inst, def) {
  $ZodCustom.init(inst, def), ZodType.init(inst, def);
});
function check(fn) {
  var ch = new $ZodCheck({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  return ch._zod.check = fn, ch;
}
function custom(fn, _params) {
  return _custom(ZodCustom, fn ?? function() {
    return !0;
  }, _params);
}
function refine(fn) {
  var _params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn) {
  return _superRefine(fn);
}
var describe2 = describe, meta2 = meta;
function _instanceof(cls) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    error: "Input not instance of ".concat(cls.name)
  }, inst = new ZodCustom(_objectSpread9({
    type: "custom",
    check: "custom",
    fn: function(data) {
      return data instanceof cls;
    },
    abort: !0
  }, util_exports.normalizeParams(params)));
  return inst._zod.bag.Class = cls, inst;
}
var stringbool = function() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
    args[_key3] = arguments[_key3];
  return _stringbool.apply(core_exports2, [{
    Codec: ZodCodec,
    Boolean: ZodBoolean,
    String: ZodString
  }].concat(args));
};
function json(params) {
  var jsonSchema = lazy(function() {
    return union([string2(params), number2(), boolean2(), _null3(), array(jsonSchema), record(string2(), jsonSchema)]);
  });
  return jsonSchema;
}
function preprocess(fn, schema) {
  return pipe(transform(fn), schema);
}

// ../../node_modules/zod/v4/classic/compat.js
var ZodIssueCode = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
function setErrorMap(map2) {
  config({
    customError: map2
  });
}
function getErrorMap() {
  return config().customError;
}
var ZodFirstPartyTypeKind;
ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {});

// ../../node_modules/zod/v4/classic/coerce.js
var coerce_exports = {};
__export(coerce_exports, {
  bigint: function() {
    return bigint3;
  },
  boolean: function() {
    return boolean3;
  },
  date: function() {
    return date4;
  },
  number: function() {
    return number3;
  },
  string: function() {
    return string3;
  }
});
function string3(params) {
  return _coercedString(ZodString, params);
}
function number3(params) {
  return _coercedNumber(ZodNumber, params);
}
function boolean3(params) {
  return _coercedBoolean(ZodBoolean, params);
}
function bigint3(params) {
  return _coercedBigint(ZodBigInt, params);
}
function date4(params) {
  return _coercedDate(ZodDate, params);
}

// ../../node_modules/zod/v4/classic/external.js
config(en_default());

// ../wishlist-shared/schemas/api.ts
var WishlistSchema = external_exports.record(
  external_exports.coerce.number(),
  // JSON keys are strings
  external_exports.literal(["NONE", "PACKAGED", "OPENED", "WISHED"]).transform(function(val) {
    return val ?? "NONE";
  })
), WishlistResponseSchema = external_exports.object({
  username: external_exports.string(),
  userId: external_exports.number(),
  wishlist: WishlistSchema,
  lastUpdated: external_exports.number()
}), WishlistToggleRequestSchema = external_exports.object({
  userId: external_exports.number(),
  auth: external_exports.string(),
  itemUpdates: external_exports.array(external_exports.object({
    id: external_exports.number(),
    status: external_exports.boolean()
  }))
}), PriceGunDecimalSchema = external_exports.union([external_exports.object({
  __decimal__: external_exports.string()
}).transform(function(obj) {
  return obj.__decimal__ ?? "0";
}), external_exports.string()]).pipe(external_exports.coerce.number()), PriceGunSalesDataSchema = external_exports.object({
  date: external_exports.coerce.date(),
  unitPrice: PriceGunDecimalSchema,
  quantity: external_exports.coerce.number()
}), PriceGunHistoricalDataSchema = external_exports.object({
  itemId: external_exports.coerce.number(),
  date: external_exports.coerce.date(),
  volume: external_exports.coerce.number(),
  price: PriceGunDecimalSchema
}), PriceGunSchema = external_exports.object({
  // value across ALL transactions, not just past 2 weeks
  value: PriceGunDecimalSchema,
  // volume across the past 2 weeks
  volume: external_exports.coerce.number(),
  // last time the price value was calculated by PriceGun
  date: external_exports.coerce.date(),
  // JSON dates are strings
  itemId: external_exports.coerce.number(),
  name: external_exports.string().nullable(),
  // new IOTMs can have a missing name field, I guess?
  image: external_exports.string(),
  sales: external_exports.array(PriceGunSalesDataSchema),
  history: external_exports.array(PriceGunHistoricalDataSchema)
}), PriceGunResponseSchema = external_exports.array(PriceGunSchema), MallPriceSchema = external_exports.record(external_exports.coerce.number(), external_exports.number()), PriceSchema = external_exports.object({
  // from lowest mall
  lowestMall: external_exports.number(),
  // from pricegun
  value: external_exports.number().optional(),
  volume: external_exports.number().optional()
}), CombinedPriceSchema = external_exports.record(external_exports.coerce.number(), PriceSchema), MallPriceResponseSchema = external_exports.object({
  prices: CombinedPriceSchema,
  lastUpdated: external_exports.coerce.date()
});

// ../wishlist-shared/schemas/data.ts
var IOTMSchema = external_exports.object({
  img: external_exports.string(),
  packaged_id: external_exports.coerce.number(),
  packaged_name: external_exports.string(),
  opened_ids: external_exports.optional(external_exports.union([external_exports.coerce.number(), external_exports.array(external_exports.coerce.number())])),
  opened_names: external_exports.optional(external_exports.union([external_exports.string(), external_exports.array(external_exports.string())])),
  familiar_ids: external_exports.optional(external_exports.union([external_exports.coerce.number(), external_exports.array(external_exports.coerce.number())])),
  familiar_names: external_exports.optional(external_exports.union([external_exports.string(), external_exports.array(external_exports.string())])),
  skill_ids: external_exports.optional(external_exports.union([external_exports.coerce.number(), external_exports.array(external_exports.coerce.number())])),
  skill_names: external_exports.optional(external_exports.union([external_exports.string(), external_exports.array(external_exports.string())])),
  year: external_exports.coerce.number(),
  month: external_exports.optional(external_exports.coerce.number()),
  speed_tier: external_exports.optional(external_exports.coerce.number()),
  aftercore_tier: external_exports.optional(external_exports.coerce.number()),
  tradeable: external_exports.boolean(),
  type: external_exports.string(),
  equipment_slot: external_exports.optional(external_exports.string()),
  is_ioty: external_exports.optional(external_exports.boolean()),
  is_con: external_exports.optional(external_exports.boolean())
});

// ../../node_modules/jsoncrush/JSONCrush.js
function _createForOfIteratorHelper9(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray14(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray14(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray14(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray14(r, a) : void 0;
  }
}
function _arrayLikeToArray14(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var JSONCrush_default = {
  crush: function(string4) {
    for (var maxSubstringLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50, delimiter = "", JSCrush = function(string5, replaceCharacters) {
      for (var replaceCharacterPos = replaceCharacters.length, splitString = "", ByteLength = function(string6) {
        return encodeURI(encodeURIComponent(string6)).replace(/%../g, "i").length;
      }, HasUnmatchedSurrogate = function(string6) {
        var c1 = string6.charCodeAt(0), c2 = string6.charCodeAt(string6.length - 1);
        return c1 >= 56320 && c1 <= 57343 || c2 >= 55296 && c2 <= 56319;
      }, substringCount = {}, substringLength = 2; substringLength < maxSubstringLength; substringLength++) for (var i2 = 0; i2 < string5.length - substringLength; ++i2) {
        var substring = string5.substr(i2, substringLength);
        if (!substringCount[substring] && !HasUnmatchedSurrogate(substring)) {
          for (var count = 1, substringPos = string5.indexOf(substring, i2 + substringLength); substringPos >= 0; ++count) substringPos = string5.indexOf(substring, substringPos + substringLength);
          count > 1 && (substringCount[substring] = count);
        }
      }
      for (; ; ) {
        for (; replaceCharacterPos-- && string5.includes(replaceCharacters[replaceCharacterPos]); )
          ;
        if (replaceCharacterPos < 0) break;
        var replaceCharacter = replaceCharacters[replaceCharacterPos], bestSubstring = void 0, bestLengthDelta = 0, replaceByteLength = ByteLength(replaceCharacter);
        for (var _substring in substringCount) {
          var _count = substringCount[_substring], lengthDelta = (_count - 1) * ByteLength(_substring) - (_count + 1) * replaceByteLength;
          splitString.length || (lengthDelta -= ByteLength(delimiter)), lengthDelta <= 0 ? delete substringCount[_substring] : lengthDelta > bestLengthDelta && (bestSubstring = _substring, bestLengthDelta = lengthDelta);
        }
        if (!bestSubstring) break;
        string5 = string5.split(bestSubstring).join(replaceCharacter) + replaceCharacter + bestSubstring, splitString = replaceCharacter + splitString;
        var newSubstringCount = {};
        for (var _substring2 in substringCount) {
          for (var newSubstring = _substring2.split(bestSubstring).join(replaceCharacter), _count2 = 0, _i = string5.indexOf(newSubstring); _i >= 0; ++_count2) _i = string5.indexOf(newSubstring, _i + newSubstring.length);
          _count2 > 1 && (newSubstringCount[newSubstring] = _count2);
        }
        substringCount = newSubstringCount;
      }
      return {
        a: string5,
        b: splitString
      };
    }, characters = [], unescapedCharacters = "-_.!~*'()", i = 127; --i; )
      (i >= 48 && i <= 57 || // 0-9
      i >= 65 && i <= 90 || // A-Z
      i >= 97 && i <= 122 || // a-z
      unescapedCharacters.includes(String.fromCharCode(i))) && characters.push(String.fromCharCode(i));
    for (var _i2 = 32; _i2 < 255; ++_i2) {
      var c = String.fromCharCode(_i2);
      c != "\\" && !characters.includes(c) && characters.unshift(c);
    }
    string4 = string4.replace(new RegExp(delimiter, "g"), ""), string4 = JSONCrushSwap(string4);
    var crushed = JSCrush(string4, characters), crushedString = crushed.a;
    return crushed.b.length && (crushedString += delimiter + crushed.b), crushedString += "_", crushedString;
  },
  uncrush: function(string4) {
    string4 = string4.substring(0, string4.length - 1);
    var stringParts = string4.split(""), uncrushedString = stringParts[0];
    if (stringParts.length > 1) {
      var splitString = stringParts[1], _iterator = _createForOfIteratorHelper9(splitString), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var character = _step.value, splitArray = uncrushedString.split(character);
          uncrushedString = splitArray.join(splitArray.pop());
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return JSONCrushSwap(uncrushedString, 0);
  }
}, JSONCrushSwap = function(string4) {
  var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, swapGroups = [['"', "'"], ["':", "!"], [",'", "~"], ["}", ")", "\\", "\\"], ["{", "(", "\\", "\\"]], swapInternal = function(string5, g) {
    var regex = new RegExp("".concat((g[2] ? g[2] : "") + g[0], "|").concat((g[3] ? g[3] : "") + g[1]), "g");
    return string5.replace(regex, function($1) {
      return $1 === g[0] ? g[1] : g[0];
    });
  };
  if (forward) for (var i = 0; i < swapGroups.length; ++i) string4 = swapInternal(string4, swapGroups[i]);
  else for (var _i3 = swapGroups.length; _i3--; ) string4 = swapInternal(string4, swapGroups[_i3]);
  return string4;
};

// src/wishlist.ts
var eudoras = {
  5112: 1,
  4712: 2,
  7730: 3,
  9478: 4,
  10773: 5,
  11471: 6
}, prefs = {
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
  10890: "hasCosmicBowlingBall",
  //checked via item
  10900: "hasMaydayContract",
  10953: "hasAutumnaton",
  // checked via item
  11001: "ownsSpeakeasy"
};
function arrayOf(items) {
  return items === void 0 ? [] : Array.isArray(items) ? items : [items];
}
function haveItem(item) {
  return [import_kolmafia4.availableAmount, import_kolmafia4.closetAmount, import_kolmafia4.displayAmount, import_kolmafia4.equippedAmount, import_kolmafia4.itemAmount, import_kolmafia4.storageAmount].map(function(fn) {
    return fn(item);
  }).some(function(q) {
    return q > 0;
  });
}
function haveOpened(iotm) {
  var packaged = import_kolmafia4.Item.get(iotm.packaged_id);
  switch (iotm.type) {
    case "custom":
      return iotm.packaged_id == 5790 ? haveItem(import_kolmafia4.Item.get("box of bear arms")) || haveItem(import_kolmafia4.Item.get("left bear arm")) || haveItem(import_kolmafia4.Item.get("right bear arm")) : !1;
    case "campground":
      return haveItem(packaged) || haveInCampground(packaged) || arrayOf(iotm.opened_ids).map(function(i) {
        return import_kolmafia4.Item.get(i);
      }).some(function(i) {
        return haveItem(i) || haveInCampground(i);
      });
    case "eudora": {
      var eudoraId = eudoras[iotm.packaged_id];
      return (0, import_kolmafia4.xpath)((0, import_kolmafia4.visitUrl)("account.php?tab=correspondence"), '//select[@name="whichpenpal"]/option/@value').includes(eudoraId.toString());
    }
    case "familiar":
      return arrayOf(iotm.familiar_ids).map(function(f) {
        return import_kolmafia4.Familiar.get(f);
      }).every(function(f) {
        return (0, import_kolmafia4.haveFamiliar)(f);
      });
    case "item":
      return iotm.tradeable ? arrayOf(iotm.packaged_id).concat(arrayOf(iotm.opened_ids)).map(function(i) {
        return import_kolmafia4.Item.get(i);
      }).flatMap(function(i) {
        var group = getFoldGroup(i);
        return group.length > 0 ? group : i;
      }).some(function(i) {
        return haveItem(i);
      }) : arrayOf(iotm.opened_ids).map(function(i) {
        return import_kolmafia4.Item.get(i);
      }).flatMap(function(i) {
        var group = getFoldGroup(i);
        return group.length > 0 ? group : i;
      }).some(function(i) {
        return haveItem(i);
      });
    case "skill":
      return arrayOf(iotm.skill_ids).map(function(s) {
        return import_kolmafia4.Skill.get(s);
      }).some(function(s) {
        return (0, import_kolmafia4.haveSkill)(s);
      });
    case "slotless":
    case "content":
      return getBoolean(prefs[iotm.packaged_id]);
  }
  return !1;
}
function getStatus(iotm) {
  return haveOpened(iotm) ? "OPENED" : haveItem(import_kolmafia4.Item.get(iotm.packaged_id)) ? "PACKAGED" : "NONE";
}
function checkIOTMs() {
  return Object.fromEntries(iotms.map(function(iotm) {
    return [iotm.packaged_id, getStatus(iotm)];
  }));
}
function main() {
  (0, import_kolmafia4.print)("Checking IOTMs...");
  var data = {
    player: {
      id: Number.parseInt((0, import_kolmafia4.myId)()),
      name: (0, import_kolmafia4.myName)()
    },
    wishlist: checkIOTMs()
  }, crushed = encodeURIComponent(JSONCrush_default.crush(JSON.stringify(data))), link = "https://resprit--dd94f3deb77f11f08e0c0224a6c84d84.web.val.run/update-wishlist?d=".concat(crushed);
  (0, import_kolmafia4.visitUrl)(link, !1, !0), (0, import_kolmafia4.print)("Updated!");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
/*! Bundled license information:

zod/v4/core/parse.js:
zod/v4/core/schemas.js:
zod/v4/classic/schemas.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
*/
