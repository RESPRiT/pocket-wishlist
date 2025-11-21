import {
  PointerEventHandler,
  useEffect,
  useRef,
  useMemo,
  useState,
  useCallback,
} from "react";
import { ListEntryProps } from "./ListEntry";
import { Theme, useTheme } from "@/contexts/ThemeContext";
import { useEntryBackgroundColor } from "@/hooks/useEntryBackgroundColor";
import { cn } from "@/lib/utils";

// Constants
const ENTRY_HEIGHT_PX = 2; // h-0.5 class = 2px
const HOVER_PADDING_MULTIPLIER = 1.5;
const TOP_OFFSET = 24; // top-6 class = 24px
const MIN_WIDTH = 1080;

function MiniMapEntry({
  entry,
  theme,
}: {
  entry: ListEntryProps;
  theme: Theme;
}) {
  // TODO: Remove evil copied code... somehow
  const standardYear = useMemo(() => {
    const currentYear = new Date().getFullYear();
    if (entry.packagedName === "Clan VIP Lounge invitation") return 0;
    return currentYear - entry.year;
  }, [entry.year, entry.packagedName]);

  const mall =
    entry.price?.value || entry.price?.lowestMall
      ? Math.min(
          entry.price?.value ?? Infinity,
          entry.price?.lowestMall ?? Infinity,
        )
      : null;

  const priceRatio = mall && entry.mrAs ? mall / entry.mrAs : null;
  const isStandard = standardYear < 3;

  const { bgStyle } = useEntryBackgroundColor({
    status: entry.status,
    isStandard,
    standardYear,
    priceRatio,
    theme,
  });

  return (
    <div
      className="h-0.5 w-full transition-colors duration-400"
      style={bgStyle}
    />
  );
}

// TODO: Consider how code can be made more performant/readable
function ListMiniMap({
  entries,
  height,
}: {
  entries: ListEntryProps[];
  height: number;
}) {
  const { theme } = useTheme();
  const scrollWindowRef = useRef<HTMLDivElement>(null);
  const scrollThrottle = useRef(false);
  const [miniMapWidth, setMiniMapWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(1080);
  // TODO: handle these initial values/initial updates so that scroll window
  // does not always start at the top (i.e. we reload and are mid-scroll)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollFactor, setScrollFactor] = useState(45);
  const [initialScrollPosition, setInitialScrollPosition] = useState(0);
  const [initialScrollY, setInitialScrollY] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [showMiniMap, setShowMiniMap] = useState(true);

  // observer for boundingClientRect hack;
  // more efficient than getBoundingClientRect()
  const observerRef = useRef(
    new IntersectionObserver((observerEntries) => {
      const body = observerEntries[0];
      const _pageHeight = body.boundingClientRect.height;
      setPageHeight(_pageHeight);

      const _scrollFactor = _pageHeight / (entries.length * ENTRY_HEIGHT_PX);
      setScrollFactor(_scrollFactor);
      setMiniMapWidth(window.innerWidth / _scrollFactor);

      observerRef.current.disconnect();
    }),
  );

  // Helper function for measurements
  const calculateScrollMetrics = useCallback(
    (height: number) => {
      const excessHeight = pageHeight - height;
      return Math.max(excessHeight - window.scrollY, 0);
    },
    [pageHeight],
  );

  // Set initial page height
  useEffect(() => {
    observerRef.current.observe(document.body);
  }, []);

  // Setup resize event handler
  useEffect(() => {
    const handleWindowResize = () => {
      setMiniMapWidth(window.innerWidth / scrollFactor);
      setShowMiniMap(window.innerWidth >= MIN_WIDTH);
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [scrollFactor]);

  // Setup scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      if (initialScrollY !== null || scrollThrottle.current) return;
      scrollThrottle.current = true;

      // use rAF() to throttle based on refresh rate
      requestAnimationFrame(() => {
        setScrollPosition(window.scrollY / scrollFactor);

        scrollThrottle.current = false;
      });
    };

    // only adjust sizing after scroll finishes to avoid spamming layout
    const handleScrollEnd = () => {
      // update page height using observer
      observerRef.current.observe(document.body);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", handleScrollEnd);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, [initialScrollY, scrollFactor]);

  // Event handlers
  const handlePointerDown: PointerEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setInitialScrollY(e.clientY);
    setInitialScrollPosition(scrollPosition);
    setIsActive(true);
  };

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (e) => {
    if (initialScrollY !== null) {
      const maxScrollHeight = window.innerHeight / scrollFactor;
      const maxScrollAmount =
        entries.length * ENTRY_HEIGHT_PX - maxScrollHeight;
      const _scrollPosition = Math.min(
        Math.max(initialScrollPosition + e.clientY - initialScrollY, 0),
        maxScrollAmount,
      );
      setScrollPosition(_scrollPosition);

      window.scroll(0, _scrollPosition * scrollFactor);
    }
  };

  // only adjust sizing after scroll finishes to avoid spamming layout
  const handlePointerUp: PointerEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setInitialScrollY(null);
    setIsActive(false);
    // update page height using observer
    observerRef.current.observe(document.body);
  };

  const handleJumpPointerDown: PointerEventHandler<HTMLDivElement> = (e) => {
    if (initialScrollY === null) {
      const maxScrollHeight = window.innerHeight / scrollFactor;
      const maxScrollAmount =
        entries.length * ENTRY_HEIGHT_PX - maxScrollHeight;
      const jumpY = Math.min(
        Math.max(e.clientY - TOP_OFFSET - maxScrollHeight / 2, 0),
        maxScrollAmount,
      );
      // jump to center of pointer + scroll to position
      setScrollPosition(jumpY);
      window.scroll(0, jumpY * scrollFactor);

      if (!scrollWindowRef.current) {
        throw new Error(
          "Could not find scroll window element (and we really should!)",
        );
      }

      // focus scroll window
      scrollWindowRef.current.setPointerCapture(e.pointerId);
      setInitialScrollY(e.clientY);
      setInitialScrollPosition(jumpY);

      setIsActive(true);
    }
  };

  return showMiniMap ? (
    <div className="group absolute -right-6 select-none">
      {/* Extra hover padding */}
      <div
        className="fixed top-0 h-full"
        style={{
          width: miniMapWidth * HOVER_PADDING_MULTIPLIER,
          // shift by half of extra size to center
          transform: `translateX(-${(miniMapWidth * (HOVER_PADDING_MULTIPLIER - 1)) / 2}px)`,
        }}
      />
      {/* Minimap */}
      <div
        className={cn(
          `fixed z-0 rounded-xs bg-background/0 opacity-25 outline-1
            outline-foreground/50 transition-opacity duration-200
            group-hover:opacity-100`,
          isActive && "opacity-100",
        )}
        style={{ width: miniMapWidth, top: TOP_OFFSET }}
        onPointerDown={handleJumpPointerDown}
      >
        {entries.map((entry, index) => (
          <MiniMapEntry key={index} entry={entry} theme={theme} />
        ))}
      </div>
      {/* Scroll window */}
      <div
        ref={scrollWindowRef}
        className={cn(
          `fixed z-10 opacity-10 outline-2 outline-foreground transition-opacity
            duration-200 group-hover:opacity-100 hover:cursor-pointer
            hover:bg-background/20 hover:outline-foreground/50`,
          isActive &&
            `opacity-100 hover:cursor-grabbing hover:bg-background/50
              hover:outline-foreground/25`,
        )}
        style={{
          width: miniMapWidth,
          top: TOP_OFFSET + scrollPosition,
          height:
            (window.innerHeight - calculateScrollMetrics(height)) /
            scrollFactor,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      ></div>
    </div>
  ) : (
    <></>
  );
}

export default ListMiniMap;
