import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProbeData = {
  totalH: number;
  nameItemH: number;
  // Max height of line-1 children inside EntryInfoSection that are name-
  // independent (image + year column). Always contributes to the section's
  // height at any breakpoint.
  staticInSection: number;
  // Max height of row's flex children outside the section, excluding the
  // price section. Only contributes when the row is `flex-nowrap` (lg+).
  // Price is folded back in per-entry from priceNormalH / priceExtinctH so
  // the infinite font's taller box is allocated only when it renders.
  staticOutsideExcludingPrice: number;
  // Probe's price-section height (forged-normal), pre-max with siblings.
  priceNormalH: number;
  rowIsNowrap: boolean;
  lineCount: number;
  vp: number;
};

// The probe primitives one measure pass yields. Per-entry heights derive from
// these plus a pretext line count, so persisting just this set is enough to
// reconstruct the whole list on the next load.
export type MeasureSet = {
  probe: ProbeData;
  priceExtinctH: number;
  headingHeight: number;
};

type EntryHeightsStore = {
  // Real-font measurements keyed by viewport band (see useEntryHeights'
  // measureBand). At/above lg the entry geometry is static so one bucket serves
  // the whole desktop band; below lg each exact width is its own bucket.
  byBand: Record<string, MeasureSet>;
  setBand: (band: string, set: MeasureSet) => void;
};

// Unlike useSettingsStore, this persists with the default *synchronous*
// hydration (no skipHydration): useEntryHeights seeds its first render from
// getState(), so the persisted heights have to be present before any effect
// runs — that synchronous read is the whole point, it's what makes the first
// paint match the loaded-font layout instead of reflowing once the face lands.
// Safe because the app is a client-only SPA (createRoot, no SSR) so there's no
// server/client hydration mismatch to guard against.
// — claude fbc05fa5, 2026-05-31
export const useEntryHeightsStore = create<EntryHeightsStore>()(
  persist(
    (set) => ({
      byBand: {},
      setBand: (band, measureSet) =>
        set((s) => ({ byBand: { ...s.byBand, [band]: measureSet } })),
    }),
    {
      name: "entry-heights",
      // Bump to discard persisted measurements after a geometry/styling change
      // that would make stale heights seed the wrong first paint.
      version: 1,
    },
  ),
);
