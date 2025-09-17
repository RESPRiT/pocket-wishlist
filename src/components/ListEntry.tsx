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

export type ListEntryProps = {
  img: string;
  name: string;
  packaged_name: string;
  type: string;
  year: number;
  month?: number;
  speed?: number;
  farm?: number;
  isIOTY: boolean;
  isCon: boolean;
  price: number | null;
  lowestMall: number | null;
  mrAs: number | null;
};

// TODO: Lots of magic numbers in here
function ListEntry({
  img,
  name,
  packaged_name,
  type,
  year,
  speed,
  farm,
  isIOTY,
  isCon,
  price,
  lowestMall,
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

  const mall =
    price || lowestMall
      ? Math.min(price || Infinity, lowestMall || Infinity)
      : null;
  function getMallStatus() {
    if (price === null && lowestMall === null)
      return "Mall extinct, no recent sales data";
    if (price === null) return "Based on lowest current mall listing";
    if (lowestMall === null) return "Based on recent sales data";
    return price < lowestMall
      ? "Based on recent sales data"
      : "Based on lowest current mall listing";
  }

  return (
    <div
      className={`relative flex flex-wrap lg:flex-nowrap items-center justify-center
        md:clamp-[gap-x,2.25,6,md,lg] clamp-[gap-x,1.5,2.25,20rem,sm] gap-y-2
        bg-primary clamp-[px,5,6,20rem,sm] py-3 h-full lg:w-full
        rounded-md hover:outline-foreground-muted hover:outline-2 ${
          standardYear < 3 ? "outline-secondary" : ""
        }`}
      style={adjustLightness(
        standardYear < 3
          ? `color-mix(in oklch, var(--secondary-light) ${
              35 + 65 * (1 - standardYear / 3)
            }%, var(--primary))`
          : "var(--primary)",
        standardYear < 3 ? "black" : "var(--destructive)",
        mall && mrAs ? logBracketScale(mall / mrAs) : logBracketScale(-1)
      )}
    >
      {(isIOTY || isCon) && (
        <div
          className={`absolute flex justify-center items-center h-full left-0 rounded-l-md ${
            isIOTY ? "bg-accent/60" : "bg-secondary/60"
          }`}
          style={{ writingMode: "sideways-lr" }}
        >
          <span className="ml-0.25 md:clamp-[text,xs,sm,md,lg] clamp-[text,0.55rem,xs,20rem,sm] text-muted-foreground select-none">
            {isIOTY ? "IOTY" : "Con"}
          </span>
        </div>
      )}
      <EntrySection className="gap-5 w-0 lg:w-auto basis-full lg:basis-auto">
        <a
          href={wikiUrl}
          className="min-w-fit min-h-fit rounded-sm overflow-hidden hover:outline-2 outline-foreground"
        >
          <ThemedImg
            src={`itemimages/${img}`}
            alt="TODO"
            reColor="bg-foreground"
            bgColor="bg-background"
            className="clamp-[size,6,7,sm,md] m-2"
          />
        </a>
        <EntryItem label={type} className="clamp-[w,42,56,md,lg] -mt-0.5">
          <span className="clamp-[text,sm,base,20rem,sm] font-normal text-primary-foreground text-center text-balance">
            {name}
          </span>
        </EntryItem>
        <EntryItem label={`${standardYear < 3 ? "Standard" : "Hardcore"}`}>
          <Badge
            className="w-14 clamp-[text,sm,base,md,lg] text-background"
            style={interpolateColorScale(yearPercent)}
          >
            {year}
          </Badge>
        </EntryItem>
      </EntrySection>
      <EntrySpacer className="hidden lg:inline" />
      <EntrySection
        className="md:clamp-[w,32,36,md,lg] clamp-[w,26,32,20rem,sm]
                   md:clamp-[gap,3.5,5,md,lg] clamp-[gap,2.5,3.5,20rem,sm]
                   clamp-[mr,1,1.5,20rem,sm] lg:mr-0"
      >
        <EntryItem label="speed">
          <Badge
            className="md:clamp-[text,sm,base,md,lg] clamp-[text,xs,sm,20rem,sm] max-w-7 lg:max-w-full text-background"
            style={interpolateColorScale(
              speed !== undefined ? Math.max(0, (speed - 1) / 6) : 1
            )}
          >
            {speed !== undefined ? speed : "?"}
          </Badge>
        </EntryItem>
        <EntryItem label="freed">
          <Badge
            className="md:clamp-[text,sm,base,md,lg] clamp-[text,xs,sm,20rem,sm] max-w-7 lg:max-w-full text-background"
            style={interpolateColorScale(
              farm !== undefined ? Math.max(0, (farm - 1) / 6) : 1
            )}
          >
            {farm !== undefined ? farm : "?"}
          </Badge>
        </EntryItem>
        <EntryItem label="avg.">
          <Badge
            className="md:clamp-[text,sm,base,md,lg] clamp-[text,xs,sm,20rem,sm] clamp-[w,7,9,sm,md] text-background"
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
        <div
          className="flex justify-center items-center
                     md:clamp-[gap,1.25,1.5,md,lg] clamp-[gap,0.5,1.25,20rem,sm]
                     md:clamp-[w,38,40,md,lg] lg:w-42 clamp-[w,31,38,20rem,sm]
                     font-roboto-mono font-normal md:clamp-[text,base,lg,md,lg] clamp-[text,sm,base,20rem,sm]"
          title={getMallStatus()}
        >
          <ThemedImg
            src="itemimages/meat.gif"
            alt="meat"
            reColor="bg-foreground"
            className="clamp-[size,5,6,20rem,sm]"
          />
          <span
            className={`text-primary-foreground ${
              mall && Math.round(mall / 1_000_000) >= 1000 ? "lg:text-xl" : ""
            } ${mall === null ? "font-bold lg:text-2xl" : ""}`}
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
            className="clamp-[size,6,7,20rem,sm] clamp-[mr,-0.6,-0.5,20rem,sm]"
          />
          <span
            className={`text-accent-foreground ${
              mall && Math.round(mall / 1_000_000) >= 1000 ? "lg:text-xl" : ""
            } ${mall === null ? "font-bold lg:text-2xl" : ""}`}
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
