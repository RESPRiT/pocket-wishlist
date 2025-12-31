import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ListEntryProps } from "@/components/ListEntry";
import { VirtualListItem } from "@/components/List";
import { useTheme } from "@/contexts/ThemeContext";

const DEFAULT_ENTRY_HEIGHT = 75;
const DEFAULT_HEADING_HEIGHT = 44;
const DEFAULT_SUBHEADING_HEIGHT = 20;

export function useEntryHeights(
  items: ListEntryProps[],
  virtualItems: VirtualListItem[],
) {
  const [measuredHeights, setMeasuredHeights] = useState<Map<string, number>>(
    new Map(),
  );
  const [pageHeight, setPageHeight] = useState(
    DEFAULT_ENTRY_HEIGHT * items.length + DEFAULT_HEADING_HEIGHT * 12,
  );
  const [needsMeasurement, setNeedsMeasurement] = useState(true);
  const measureContainerRef = useRef<HTMLDivElement>(null);

  // Stable reference for measurement (doesn't change on re-sort)
  const measurementVirtualItems = useRef(virtualItems);
  const headingHeightRef = useRef<number>(DEFAULT_HEADING_HEIGHT);
  const subHeadingHeightRef = useRef<number>(DEFAULT_SUBHEADING_HEIGHT);

  // Merge measured heights with defaults for all virtual items
  const heights = useMemo(() => {
    const merged = new Map<string, number>();

    for (const item of virtualItems) {
      if (item.itemType !== "entry") {
        merged.set(
          item.key,
          measuredHeights.get(item.key) ??
            (item.itemType === "heading"
              ? headingHeightRef.current
              : subHeadingHeightRef.current),
        );
      } else {
        merged.set(
          item.packagedName,
          measuredHeights.get(item.packagedName) ?? DEFAULT_ENTRY_HEIGHT,
        );
      }
    }

    return merged;
  }, [virtualItems, measuredHeights]);

  // Measure when container is ready (before paint)
  useLayoutEffect(() => {
    if (!needsMeasurement || !measureContainerRef.current) return;

    // Batch layout calculations: measure items and page height together
    const newHeights = new Map<string, number>();
    const children = Array.from(measureContainerRef.current.children);

    children.forEach((child, index) => {
      const height = (child as HTMLElement).clientHeight;
      const item = measurementVirtualItems.current[index];

      if (item.itemType === "heading") {
        // Measure heading height once (all headings same height)
        headingHeightRef.current = height;
      } else if (item.itemType === "subheading") {
        subHeadingHeightRef.current = height;
      } else {
        newHeights.set(item.packagedName, height);
      }
    });

    // Insert memoized heading height for all heading keys
    for (const item of virtualItems) {
      if (item.itemType === "heading") {
        newHeights.set(item.key, headingHeightRef.current);
      }
    }

    const newPageHeight = document.documentElement.scrollHeight;

    setMeasuredHeights(newHeights);
    setPageHeight(newPageHeight);
    setNeedsMeasurement(false);
  }, [needsMeasurement, virtualItems]);

  // Re-measure on window resize (debounced)
  // TODO: This is logic is _fine_ but it probably could be nicer
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setNeedsMeasurement(true);
      }, 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Track page height changes with ResizeObserver
  // TODO: Actually I think we don't need this?
  //   because height only changes when this does
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
    heights,
    pageHeight,
    needsMeasurement,
    measureContainerRef,
    measurementItems: measurementVirtualItems.current,
  };
}
