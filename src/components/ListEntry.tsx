import { useMemo } from "react";
import EntryItem from "./EntryItem";
import EntrySection from "./EntrySection";
import EntrySpacer from "./EntrySpacer";
import ThemedImg from "./ThemedImg";
import { Badge } from "./ui/badge";

// Probably shouldn't strictly return a backgroundColor
type BackgroundStyle = {
  backgroundColor: string;
};

// TODO: this is basically the same function as the one below
function interpolateColorScale(percent: number): BackgroundStyle {
  return {
    backgroundColor: `color-mix(in srgb, var(--destructive) ${
      100 * percent
    }%, var(--secondary))`,
  };
}

function adjustLightness(
  startColor: string,
  endColor = "black",
  percent: number
): BackgroundStyle {
  return {
    backgroundColor: `color-mix(in oklch, ${startColor} ${
      100 - Math.abs(percent)
    }%, ${percent < 0 ? endColor : "white"})`,
  };
}

function logBracketScale(
  x: number,
  brackets = [
    [1, 2],
    [2, 3],
    [3, 5],
    [5, 10],
    [10, 50],
    [50, 12_500],
  ],
  range = [0, -30]
) {
  const bracketNum = brackets.findIndex(
    (bracket) =>
      Math.ceil(x - 0.8) >= bracket[0] && Math.ceil(x - 0.8) < bracket[1]
  );

  if (bracketNum === -1) return range[1];

  const from = brackets[bracketNum];
  const to = [
    range[0] + ((range[1] - range[0]) * bracketNum) / brackets.length,
    range[0] + ((range[1] - range[0]) * (bracketNum + 0.5)) / brackets.length,
  ];

  return (
    to[0] +
    ((Math.log(x) - Math.log(from[0])) * (to[1] - to[0])) /
      (Math.log(from[1]) - Math.log(from[0]))
  );
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

  const standardYear = useMemo(() => {
    const currentYear = new Date().getFullYear();
    if (packaged_name === "Clan VIP Lounge invitation") return 0;

    return currentYear - year;
  }, [year, packaged_name]);

  return (
    <div
      className={`flex items-center justify-center gap-7 bg-primary w-full px-7 py-3 rounded-md hover:outline-foreground-muted hover:outline-2 ${
        standardYear < 3 ? "outline-secondary" : ""
      }`}
      style={adjustLightness(
        standardYear < 3
          ? `color-mix(in oklch, var(--secondary-light) ${
              25 + 75 * (1 - standardYear / 3)
            }%, var(--primary))`
          : "var(--primary)",
        standardYear < 3 ? "black" : "var(--destructive)",
        mall && mrAs ? logBracketScale(mall / mrAs) : logBracketScale(-1)
      )}
    >
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
            {name}
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
      <EntryItem label="est. mall price">
        <div className="flex justify-center items-center gap-1.5 w-42 font-roboto-mono font-normal text-lg">
          <ThemedImg
            src="itemimages/meat.gif"
            alt="meat"
            reColor="bg-foreground"
            className="w-6 h-6"
          />
          <span
            className={`text-primary-foreground ${
              mall && Math.round(mall / 1_000_000) >= 1000 ? "text-xl" : ""
            } ${mall === null ? "font-bold text-2xl" : ""}`}
          >
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
          <span
            className={`text-accent-foreground ${
              mall && Math.round(mall / 1_000_000) >= 1000 ? "text-xl" : ""
            } ${mall === null ? "font-bold text-2xl" : ""}`}
          >
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
  );
}

export default ListEntry;
