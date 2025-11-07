import { PointerEventHandler, useEffect, useMemo, useState } from "react";
import { ListEntryProps } from "./ListEntry";
import { Theme, useTheme } from "@/contexts/ThemeContext";
import { useEntryBackgroundColor } from "@/hooks/useEntryBackgroundColor";
import { cn } from "@/lib/utils";

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
          entry.price?.lowestMall ?? Infinity
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
//   e.g. could probably cut scrollFactor from state
//   also -- lots of reuse between functions that could be helpers
function ListMiniMap({
  entries,
  height,
}: {
  entries: ListEntryProps[];
  height: number;
}) {
  const { theme, isTransitioning } = useTheme();
  const [miniMapWidth, setMiniMapWidth] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollFactor, setScrollFactor] = useState(45);
  const [initialScrollPosition, setInitialScrollPosition] = useState(0);
  const [initialScrollY, setInitialScrollY] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);

  // TODO: Unhardcode
  const TOP_OFFSET = 24 as const;

  // Update scroll factor when height changes
  useEffect(() => {
    if (isTransitioning) return;

    const totalHeight = document.body.getBoundingClientRect().height;
    setScrollFactor(totalHeight / (entries.length * 2));
  }, [entries, height, isTransitioning]);

  // Setup resize event handler
  useEffect(() => {
    const handleWindowResize = () => {
      const totalHeight = document.body.getBoundingClientRect().height;
      const excessHeight = totalHeight - height;
      const unscrolled = Math.max(excessHeight - window.scrollY, 0);

      setMiniMapWidth(window.innerWidth / scrollFactor);
      setScrollHeight((window.innerHeight - unscrolled) / scrollFactor);
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [height, scrollFactor]);

  // Setup scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      if (initialScrollY === null) {
        const totalHeight = document.body.getBoundingClientRect().height;
        const excessHeight = totalHeight - height;
        const unscrolled = Math.max(excessHeight - window.scrollY, 0);

        setScrollHeight((window.innerHeight - unscrolled) / scrollFactor);
        setScrollPosition(window.scrollY / scrollFactor);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height, initialScrollY, scrollFactor]);

  // Event handlers
  const handlePointerDown: PointerEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setInitialScrollY(e.clientY);
    setInitialScrollPosition(scrollPosition);
    setIsActive(true);
  };

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (e) => {
    if (initialScrollY !== null) {
      const totalHeight = document.body.getBoundingClientRect().height;
      const excessHeight = totalHeight - height;
      const unscrolled = Math.max(excessHeight - window.scrollY, 0);
      setScrollHeight((window.innerHeight - unscrolled) / scrollFactor);

      const maxScrollHeight = window.innerHeight / scrollFactor;
      // TODO: Unhardcode entry height (2 = h-1)
      const maxScrollAmount = entries.length * 2 - maxScrollHeight;
      const _scrollPosition = Math.min(
        Math.max(initialScrollPosition + e.clientY - initialScrollY, 0),
        maxScrollAmount
      );
      setScrollPosition(_scrollPosition);

      window.scroll(0, _scrollPosition * scrollFactor);
    }
  };

  const handlePointerUp: PointerEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setInitialScrollY(null);
    setIsActive(false);
  };

  const handleJumpPointerDown: PointerEventHandler<HTMLDivElement> = (e) => {
    if (initialScrollY === null) {
      const maxScrollHeight = window.innerHeight / scrollFactor;
      const maxScrollAmount = entries.length * 2 - maxScrollHeight;
      const jumpY = Math.min(
        Math.max(e.clientY - TOP_OFFSET - maxScrollHeight / 2, 0),
        maxScrollAmount
      );
      // jump to center of pointer + scroll to position
      setScrollPosition(jumpY);
      window.scroll(0, jumpY * scrollFactor);

      const windowEl =
        e.currentTarget.nextElementSibling ??
        document.querySelector("#scroll-window");
      if (windowEl === null)
        throw new Error(
          "Could not find scroll window element (and we really should!)"
        );

      // focus scrol window
      windowEl.setPointerCapture(e.pointerId);
      setInitialScrollY(e.clientY);
      setInitialScrollPosition(jumpY);

      // resize as needed
      const totalHeight = document.body.getBoundingClientRect().height;
      const excessHeight = totalHeight - height;
      const unscrolled = Math.max(excessHeight - window.scrollY, 0);
      setScrollHeight((window.innerHeight - unscrolled) / scrollFactor);

      setIsActive(true);
    }
  };

  return (
    <div className="absolute -right-6 select-none group">
      {/* Extra hover padding */}
      <div
        className="top-0 fixed h-full"
        style={{
          width: miniMapWidth * 1.5, // 25% extra on each end, TODO: unhardcode
          // shift by half of extra size (150% - 100% = 50%) to center
          transform: `translateX(-${(miniMapWidth * (1.5 - 1)) / 2}px)`,
        }}
      />
      {/* Minimap */}
      <div
        className={cn(
          "z-0 fixed rounded-xs outline-1 outline-foreground/50 bg-background/0 opacity-25 duration-200 transition-opacity group-hover:opacity-100",
          isActive && "opacity-100"
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
        id="scroll-window"
        className={cn(
          `z-10 fixed outline-2 outline-foreground hover:bg-background/20 opacity-10 group-hover:opacity-100 duration-200 transition-opacity
          hover:outline-foreground/50 hover:cursor-pointer`,
          isActive &&
            "opacity-100 hover:bg-background/50 hover:outline-foreground/25 hover:cursor-grabbing"
        )}
        style={{
          width: miniMapWidth,
          // TODO: Better offset handling
          top: TOP_OFFSET + scrollPosition,
          height: scrollHeight,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      ></div>
    </div>
  );
}

export default ListMiniMap;
