import { useEffect, useMemo, useRef, useState } from "react";
import EntryItem from "./EntryItem";
import EntrySection from "./EntrySection";
import EntrySpacer from "./EntrySpacer";
import ThemedImg from "./ThemedImg";
import Sparkle from "./Sparkle";
import { Badge } from "./ui/badge";

type BackgroundStyle = {
  backgroundColor: string;
};

function interpolateColorScale(percent: number): BackgroundStyle {
  return {
    backgroundColor: `color-mix(in srgb, var(--destructive) ${
      100 * percent
    }%, var(--secondary))`,
  };
}

type ListEntryProps = {
  img: string;
  name: string;
  packaged_name: string;
  year: number;
  speed?: number;
  farm?: number;
  mall: number | null;
  mrAs: number | null;
};

function ListEntry({
  img,
  name,
  packaged_name,
  year,
  speed,
  farm,
  mall,
  mrAs,
}: ListEntryProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    setSize({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    });

    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      const height = entry.contentRect.height;

      setSize({ width, height });
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const yearPercent = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return Math.min(5 / 6, (currentYear - year) / (currentYear - 2004));
  }, [year]);

  const wikiUrl = useMemo(
    () =>
      `https://wiki.kingdomofloathing.com/${encodeURIComponent(
        packaged_name
          .charAt(0)
          .toUpperCase()
          .concat(packaged_name.slice(1).replace(/ /g, "_"))
      )}`,
    [packaged_name]
  );

  const renderedStars = useMemo(() => {
    const mrAsToStars = (num: number) => {
      if (num < 2) return 0;
      if (num < 3) return 1;
      if (num < 5) return 2;
      if (num < 10) return 3;
      if (num < 20) return 4;
      return 5;
    };

    const stars = Array.from({
      length: mall && mrAs ? mrAsToStars(mall / mrAs) : 6,
    });

    return stars.map(() => {
      return <Sparkle widthBounds={size.width} heightBounds={size.height} />;
    });
  }, [mall, mrAs, size]);

  return (
    <div className="flex items-center justify-center gap-7 bg-primary w-full px-7 py-3 rounded-md hover:outline-foreground-muted hover:outline-2">
      <EntrySection>
        <a
          href={wikiUrl}
          className="rounded-sm overflow-hidden hover:outline-2 outline-foreground"
        >
          <ThemedImg
            src={`itemimages/${img}`}
            alt="TODO"
            reColor="bg-foreground"
            bgColor="bg-background"
            className="w-7 h-7 m-2"
          />
        </a>
        <EntryItem label="item">
          <div className="font-normal text-primary-foreground text-base text-center text-balance w-3xs -mt-0.5">
            <span className="relative z-10">{name}</span>
          </div>
        </EntryItem>
        <EntryItem label="year">
          <Badge
            className="w-14 text-base text-background"
            style={interpolateColorScale(yearPercent)}
          >
            {year}
          </Badge>
        </EntryItem>
      </EntrySection>
      <EntrySpacer />
      <EntrySection>
        <EntryItem label="speed">
          <Badge
            className="text-base text-background"
            style={interpolateColorScale(
              speed !== undefined ? Math.max(0, (speed - 1) / 6) : 1
            )}
          >
            {speed !== undefined ? speed : "?"}
          </Badge>
        </EntryItem>
        <EntryItem label="freed">
          <Badge
            className="text-base text-background"
            style={interpolateColorScale(
              farm !== undefined ? Math.max(0, (farm - 1) / 6) : 1
            )}
          >
            {farm !== undefined ? farm : "?"}
          </Badge>
        </EntryItem>
        <EntryItem label="avg.">
          <Badge
            className="w-9 text-base text-background"
            style={interpolateColorScale(
              speed !== undefined && farm !== undefined
                ? Math.max(0, ((speed + farm) / 2 - 1) / 6)
                : 1
            )}
          >
            {speed !== undefined && farm !== undefined
              ? (speed + farm) / 2
              : "?"}
          </Badge>
        </EntryItem>
      </EntrySection>
      <EntrySpacer />
      <div ref={ref} className="relative">
        {renderedStars}
        <EntryItem label="est. mall price">
          <div className="flex justify-center items-center gap-1.5 w-42 font-roboto-mono font-normal text-lg">
            <ThemedImg
              src="itemimages/meat.gif"
              alt="meat"
              reColor="bg-foreground"
              className="w-6 h-6"
            />
            <span className="relative z-10 text-primary-foreground">
              {mall
                ? Math.round(mall / 1000000) < 1000
                  ? `${Math.round(mall / 1000000)}m`
                  : `${Math.min(Math.round(mall / 100000000) / 10, 999)}b`
                : "∞"}
            </span>
            <span className="text-muted-foreground select-none">/</span>
            <ThemedImg
              src="itemimages/mracc.gif"
              alt="Mr. Accesories"
              reColor="bg-accent"
              className="w-7 h-7 -mx-0.5"
            />
            <span className="text-accent-foreground">
              {mall && mrAs
                ? mall < mrAs * 100
                  ? (mall / mrAs).toFixed(1)
                  : mall / mrAs < 1000
                  ? Math.round(mall / mrAs)
                  : `${Math.round(mall / mrAs / 1000)}k`
                : "∞"}
            </span>
          </div>
        </EntryItem>
      </div>
    </div>
  );
}

export default ListEntry;
