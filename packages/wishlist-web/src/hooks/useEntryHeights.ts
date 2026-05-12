import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { VirtualListItem } from "@/components/ListItem";
import { useTheme } from "@/contexts/ThemeContext";
import { nameLineHeightPx } from "@/lib/entryGeometry";
import { nameTextLineCount } from "@/lib/entryNameHeight";

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
  // Max height of row's flex children outside the section. Only contributes
  // to line 1 when the row is `flex-nowrap` (lg+); otherwise these children
  // wrap to a separate line and don't compete with the section's height.
  staticOutsideSection: number;
  rowIsNowrap: boolean;
  lineCount: number;
  vp: number;
};

const layoutVp = (): number =>
  typeof document === "undefined"
    ? 0
    : document.documentElement.clientWidth || window.innerWidth;

const heightOf = (el: Element | null | undefined): number =>
  el ? el.getBoundingClientRect().height : 0;

const readProbeMeasurements = (
  probeRoot: Element,
): Omit<ProbeData, "lineCount" | "vp"> | null => {
  const row = probeRoot.querySelector(
    "div.relative.col-start-1.row-start-1",
  ) as HTMLElement | null;
  if (!row) return null;
  const totalH = heightOf(row);
  const flexChildren = Array.from(row.children).filter(
    (c) => !(c as HTMLElement).className.includes("absolute"),
  ) as HTMLElement[];
  const infoSection = flexChildren.find(
    (c) =>
      c.className.includes("basis-full") || c.className.includes("basis-auto"),
  );
  if (!infoSection) return null;
  const sectionChildren = Array.from(infoSection.children) as HTMLElement[];
  const [imageEl, nameItemEl, yearItemEl] = sectionChildren;
  if (!nameItemEl) return null;
  const nameItemH = heightOf(nameItemEl);
  const staticInSection = Math.max(heightOf(imageEl), heightOf(yearItemEl));
  let staticOutsideSection = 0;
  for (const c of flexChildren) {
    if (c !== infoSection)
      staticOutsideSection = Math.max(staticOutsideSection, heightOf(c));
  }
  const rowIsNowrap = window.getComputedStyle(row).flexWrap === "nowrap";
  return {
    totalH,
    nameItemH,
    staticInSection,
    staticOutsideSection,
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
    typeof document === "undefined" ? false : document.fonts?.status === "loaded",
  );
  const [probe, setProbe] = useState<ProbeData | null>(null);
  const [headingHeight, setHeadingHeight] = useState<number | null>(null);

  // Identify a probe entry and a probe heading from current items.
  const probeEntry = virtualItems.find((v) => v.itemType === "entry");
  const probeHeading = virtualItems.find((v) => v.itemType === "heading");

  // Items the MeasurementContainer should render. Empty once probes are
  // measured for the current viewport — eliminates the loading-time tax.
  // Memoized so the array identity is stable when nothing actually needs to
  // be measured; the layout effect below uses this as a dep.
  const needsMeasurement = useMemo(() => {
    const items: VirtualListItem[] = [];
    if (!fontsReady) return items;
    if (probe === null && probeEntry) items.push(probeEntry);
    if (headingHeight === null && probeHeading) items.push(probeHeading);
    return items;
  }, [fontsReady, probe, probeEntry, headingHeight, probeHeading]);

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
    let nextHeadingH: number | null = headingHeight;
    if (probe === null && probeEntry) {
      const measurements = readProbeMeasurements(children[i]);
      if (measurements) {
        const vp = layoutVp();
        nextProbe = {
          ...measurements,
          lineCount: nameTextLineCount(probeEntry.entry.name, vp),
          vp,
        };
      }
      i += 1;
    }
    if (headingHeight === null && probeHeading) {
      nextHeadingH = (children[i] as HTMLElement).getBoundingClientRect().height;
    }
    if (nextProbe !== probe) setProbe(nextProbe);
    if (nextHeadingH !== headingHeight) setHeadingHeight(nextHeadingH);
  }, [needsMeasurement, probe, headingHeight, probeEntry, probeHeading]);

  // Compute item heights: heading/subheading from constants + probe, entries
  // from probe + pretext-derived line counts. Memoized so the Map identity is
  // stable across renders when inputs don't change — downstream consumers
  // (the virtualizer options memo) use the Map ref as a dependency.
  const itemHeights = useMemo(() => {
    const map = new Map<string, number>();
    if (!fontsReady || !probe) return map;
    const lh = nameLineHeightPx(probe.vp);
    const probeSectionLineH = lineWithSectionH(
      probe.nameItemH,
      probe.staticInSection,
      probe.staticOutsideSection,
      probe.rowIsNowrap,
    );
    for (const item of virtualItems) {
      if (item.itemType === "heading") {
        map.set(item.key, headingHeight ?? DEFAULT_HEIGHTS.heading);
      } else if (item.itemType === "subheading") {
        map.set(item.key, DEFAULT_HEIGHTS.subheading);
      } else {
        const lineCount = nameTextLineCount(item.entry.name, probe.vp);
        const targetNameItemH =
          probe.nameItemH + (lineCount - probe.lineCount) * lh;
        const targetSectionLineH = lineWithSectionH(
          targetNameItemH,
          probe.staticInSection,
          probe.staticOutsideSection,
          probe.rowIsNowrap,
        );
        map.set(
          item.key,
          probe.totalH + (targetSectionLineH - probeSectionLineH),
        );
      }
    }
    return map;
  }, [fontsReady, probe, headingHeight, virtualItems]);

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
  const { isTransitioning } = useTheme();
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (isTransitioning) return;
      setPageHeight(document.documentElement.scrollHeight);
    });
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [isTransitioning]);

  return {
    itemHeights,
    pageHeight,
    needsMeasurement,
    containerRef,
  };
}
