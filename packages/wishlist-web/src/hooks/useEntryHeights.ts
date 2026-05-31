import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Price } from "wishlist-shared";
import { VirtualListItem } from "@/components/ListItem";
import type { MeasurementProbe } from "@/components/MeasurementContainer";
import { isInfinitePrice } from "@/components/entry/EntryPriceSection";
import { useTheme } from "@/contexts/ThemeContext";
import { nameLineHeightPx } from "@/lib/entryGeometry";
import { nameTextLineCount } from "@/lib/entryNameHeight";

const NORMAL_PROBE_PRICE: Price = {
  lowestMall: 100,
  value: 200,
  volume: 1,
};

const DEFAULT_HEIGHTS = {
  entry: 75,
  heading: 40 + 44,
  subheading: 4 + 28,
};

// Tailwind v4 lg breakpoint (64rem). Tailwind doesn't emit breakpoints as
// queryable CSS custom properties — keep this mirrored by hand under the
// same un-hardcoding TODO as the entryGeometry clamps (pocket-wishlist-j4f).
const LG_BREAKPOINT_PX = 1024;

type ProbeData = {
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

const layoutVp = (): number =>
  typeof document === "undefined"
    ? 0
    : document.documentElement.clientWidth || window.innerWidth;

// Border-box plus vertical margins — what a flex child actually contributes
// to its parent's height. Needed because the name's EntryItem uses `-mt-0.5`,
// so its bbox over-counts.
// — claude 3d254f35, 2026-05-30
const layoutH = (el: Element | null | undefined): number => {
  if (!el) return 0;
  const h = el.getBoundingClientRect().height;
  const cs = window.getComputedStyle(el);
  const mt = parseFloat(cs.marginTop) || 0;
  const mb = parseFloat(cs.marginBottom) || 0;
  return h + mt + mb;
};

const readProbeMeasurements = (
  probeRoot: Element,
): Omit<ProbeData, "lineCount" | "vp"> | null => {
  const row = probeRoot.querySelector(
    "div.relative.col-start-1.row-start-1",
  ) as HTMLElement | null;
  if (!row) return null;
  // Row's bbox already includes padding and descendant margins — no layoutH
  // adjustment needed at the outermost level.
  // — claude 3d254f35, 2026-05-30
  const totalH = row.getBoundingClientRect().height;
  const flexChildren = Array.from(row.children).filter(
    (c) => !(c as HTMLElement).className.includes("absolute"),
  ) as HTMLElement[];
  const infoSection = flexChildren.find(
    (c) =>
      c.className.includes("basis-full") || c.className.includes("basis-auto"),
  );
  if (!infoSection) return null;
  // Matched on data-section rather than a style class so a font restyle
  // can't silently break the probe.
  // — claude 3d254f35, 2026-05-30
  const priceSection = flexChildren.find(
    (c) => c.dataset.section === "price",
  );
  if (!priceSection) return null;
  const sectionChildren = Array.from(infoSection.children) as HTMLElement[];
  const [imageEl, nameItemEl, yearItemEl] = sectionChildren;
  if (!nameItemEl) return null;
  const nameItemH = layoutH(nameItemEl);
  const staticInSection = Math.max(layoutH(imageEl), layoutH(yearItemEl));
  const priceNormalH = layoutH(priceSection);
  let staticOutsideExcludingPrice = 0;
  for (const c of flexChildren) {
    if (c !== infoSection && c !== priceSection)
      staticOutsideExcludingPrice = Math.max(
        staticOutsideExcludingPrice,
        layoutH(c),
      );
  }
  const rowIsNowrap = window.getComputedStyle(row).flexWrap === "nowrap";
  return {
    totalH,
    nameItemH,
    staticInSection,
    staticOutsideExcludingPrice,
    priceNormalH,
    rowIsNowrap,
  };
};

// Compute the "line containing the section" height — the line whose height
// changes when the name's line count changes. At xs/sm/md the section sits on
// its own flex line; at lg it shares with siblings.
const lineWithSectionH = (
  nameItemH: number,
  staticInSection: number,
  staticOutsideSection: number,
  rowIsNowrap: boolean,
): number => {
  const sectionH = Math.max(staticInSection, nameItemH);
  return rowIsNowrap ? Math.max(sectionH, staticOutsideSection) : sectionH;
};

export function useEntryHeights(virtualItems: VirtualListItem[]) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pageHeight, setPageHeight] = useState<number>(
    virtualItems.reduce((acc, v) => acc + DEFAULT_HEIGHTS[v.itemType], 0),
  );
  const [fontsReady, setFontsReady] = useState<boolean>(
    typeof document === "undefined"
      ? false
      : document.fonts?.status === "loaded",
  );
  // Probe entry gives priceNormalH; a standalone EntryPriceSection in the
  // infinite font gives priceExtinctH. Per entry, the matching one folds
  // into staticOutsideSection.
  // — claude 3d254f35, 2026-05-30
  const [probe, setProbe] = useState<ProbeData | null>(null);
  const [priceExtinctH, setPriceExtinctH] = useState<number | null>(null);
  const [headingHeight, setHeadingHeight] = useState<number | null>(null);

  // Force the probe's price to NORMAL so we know its price section is the
  // normal-font variant — otherwise we'd inherit whatever the first entry
  // happens to carry.
  // — claude 3d254f35, 2026-05-30
  const probeEntry = virtualItems.find((v) => v.itemType === "entry");
  const probeHeading = virtualItems.find((v) => v.itemType === "heading");
  const probeEntryForged: VirtualListItem | null = probeEntry
    ? {
        ...probeEntry,
        key: `${probeEntry.key}::probe`,
        entry: { ...probeEntry.entry, price: NORMAL_PROBE_PRICE },
      }
    : null;

  // Items the MeasurementContainer should render. Empty once probes are
  // measured for the current viewport — eliminates the loading-time tax.
  //
  // Manually memoized because the `probeVpRef.current = …` render-time write
  // further down bails React Compiler out of memoizing this whole hook. The
  // useLayoutEffect below uses this array as a dep, and the consumer (List)
  // feeds the returned itemHeights into the virtualizer's options memo — a
  // new array/Map identity each render cascades into a virtualizer setState
  // loop and trips React's re-render limit.
  const needsMeasurement = useMemo<MeasurementProbe[]>(() => {
    const arr: MeasurementProbe[] = [];
    if (!fontsReady) return arr;
    if (probe === null && probeEntryForged)
      arr.push({ type: "item", item: probeEntryForged, key: "probe-entry" });
    if (priceExtinctH === null)
      arr.push({ type: "extinctPrice", key: "probe-extinct-price" });
    if (headingHeight === null && probeHeading)
      arr.push({ type: "item", item: probeHeading, key: "probe-heading" });
    return arr;
  }, [
    fontsReady,
    probe,
    probeEntryForged,
    priceExtinctH,
    headingHeight,
    probeHeading,
  ]);

  // Wait for fonts before allowing pretext to compute against the wrong metrics.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (fontsReady) return;
    document.fonts.ready.then(() => setFontsReady(true));
  }, [fontsReady]);

  // Measure probes after they render in the hidden container.
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    if (needsMeasurement.length === 0) return;
    const children = Array.from(containerRef.current.children);
    let i = 0;
    let nextProbe: ProbeData | null = probe;
    let nextPriceExtinctH: number | null = priceExtinctH;
    let nextHeadingH: number | null = headingHeight;
    if (probe === null && probeEntryForged) {
      const measurements = readProbeMeasurements(children[i]);
      if (measurements) {
        const vp = layoutVp();
        nextProbe = {
          ...measurements,
          lineCount: nameTextLineCount(probeEntryForged.entry.name, vp),
          vp,
        };
      }
      i += 1;
    }
    if (priceExtinctH === null) {
      nextPriceExtinctH = layoutH(children[i]);
      i += 1;
    }
    if (headingHeight === null && probeHeading) {
      // Include the heading's margin-top so the virtualizer reserves space for
      // the visual gap between groups (clamp-[mt,7,10] on ListHeading's outer
      // div). getBoundingClientRect returns border box only; margin is added
      // here so itemHeights matches the heading's actual rendered footprint.
      const el = children[i] as HTMLElement;
      const cs = window.getComputedStyle(el);
      const marginTop = parseFloat(cs.marginTop) || 0;
      nextHeadingH = el.getBoundingClientRect().height + marginTop;
    }
    if (nextProbe !== probe) setProbe(nextProbe);
    if (nextPriceExtinctH !== priceExtinctH)
      setPriceExtinctH(nextPriceExtinctH);
    if (nextHeadingH !== headingHeight) setHeadingHeight(nextHeadingH);
  }, [
    needsMeasurement,
    probe,
    priceExtinctH,
    headingHeight,
    probeEntryForged,
    probeHeading,
  ]);

  // Compute item heights: heading/subheading from constants + probe, entries
  // from probe + pretext-derived line counts. Per entry the price section's
  // height swaps to priceExtinctH when isInfinitePrice(price). Manually
  // memoized for the same reason as `needsMeasurement` above — the
  // render-time ref write below bails React Compiler out, so without this
  // the Map identity would change every render and cascade into the
  // virtualizer's options memo.
  // — claude 3d254f35, 2026-05-30
  const itemHeights = useMemo(() => {
    const map = new Map<string, number>();
    if (!fontsReady || !probe || priceExtinctH === null) return map;
    const lh = nameLineHeightPx(probe.vp);
    // probe.totalH was measured with the forged-normal price, so probe's
    // staticOutsideSection folds priceNormalH.
    // — claude 3d254f35, 2026-05-30
    const probeStaticOutside = Math.max(
      probe.staticOutsideExcludingPrice,
      probe.priceNormalH,
    );
    const probeSectionLineH = lineWithSectionH(
      probe.nameItemH,
      probe.staticInSection,
      probeStaticOutside,
      probe.rowIsNowrap,
    );
    for (const item of virtualItems) {
      if (item.itemType === "heading") {
        map.set(item.key, headingHeight ?? DEFAULT_HEIGHTS.heading);
      } else if (item.itemType === "subheading") {
        map.set(item.key, DEFAULT_HEIGHTS.subheading);
      } else {
        const effectivePriceH = isInfinitePrice(item.entry.price)
          ? priceExtinctH
          : probe.priceNormalH;
        const targetStaticOutside = Math.max(
          probe.staticOutsideExcludingPrice,
          effectivePriceH,
        );
        const lineCount = nameTextLineCount(item.entry.name, probe.vp);
        const targetNameItemH =
          probe.nameItemH + (lineCount - probe.lineCount) * lh;
        const targetSectionLineH = lineWithSectionH(
          targetNameItemH,
          probe.staticInSection,
          targetStaticOutside,
          probe.rowIsNowrap,
        );
        map.set(
          item.key,
          probe.totalH + (targetSectionLineH - probeSectionLineH),
        );
      }
    }
    return map;
  }, [fontsReady, probe, priceExtinctH, headingHeight, virtualItems]);

  // Re-probe when the layout viewport changes — clamps in the entry path
  // interpolate with `vw`, so a probe taken at one vp is wrong at another.
  //
  // Exception: at and above the lg breakpoint (1024px), every clamp in the
  // entry geometry is saturated at its max, the container is capped by
  // `lg:max-w-5xl`, and the row is `flex-nowrap`. The geometry is fully
  // static in that regime, so two probes both ≥ 1024 produce identical
  // measurements — no need to re-probe within the desktop band.
  //
  // rAF-throttled: at most one re-probe per frame, aligned with the
  // browser's render cycle.
  //
  // Writing `probeVpRef.current` during render (rather than in a useEffect)
  // bails React Compiler out of memoizing this hook — see the manual
  // useMemo wraps for `needsMeasurement` and `itemHeights` above which
  // exist to backfill that lost memoization.
  const probeVpRef = useRef<number | null>(null);
  probeVpRef.current = probe?.vp ?? null;
  useEffect(() => {
    if (typeof window === "undefined") return;
    let rafId: number | null = null;
    const handleResize = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const probeVp = probeVpRef.current;
        const vp = layoutVp();
        if (probeVp === vp) return;
        if (
          probeVp !== null &&
          probeVp >= LG_BREAKPOINT_PX &&
          vp >= LG_BREAKPOINT_PX
        )
          return;
        setProbe(null);
        setPriceExtinctH(null);
        setHeadingHeight(null);
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Page height tracker (separate concern, used by ListMiniMap).
  // `pageHeightSettled` flips to true once the ResizeObserver has reported a
  // scrollHeight that differs from the default-height estimate — at that
  // point pageHeight reflects actual measured item heights. ListMiniMap
  // hides itself until then so its scrollFactor (= pageHeight / minimapHeight)
  // never paints with the stale estimate, which would put the scroll-window
  // box at the wrong vertical position for ~one frame after reload.
  const initialPageHeightRef = useRef(pageHeight);
  const [pageHeightSettled, setPageHeightSettled] = useState(false);
  const { isTransitioning } = useTheme();
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (isTransitioning) return;
      const next = document.documentElement.scrollHeight;
      setPageHeight(next);
      if (next !== initialPageHeightRef.current) {
        setPageHeightSettled(true);
      }
    });
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [isTransitioning]);

  return {
    itemHeights,
    pageHeight,
    pageHeightSettled,
    needsMeasurement,
    containerRef,
  };
}
