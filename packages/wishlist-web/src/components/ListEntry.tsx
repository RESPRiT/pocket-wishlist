import { useMemo } from "react";
import EntrySpacer from "./EntrySpacer";
import { useTheme } from "../contexts/ThemeContext.tsx";
import { EntryBackground } from "./entry/EntryBackground";
import { EntryRibbon } from "./entry/EntryRibbon";
import { EntryInfoSection } from "./entry/EntryInfoSection";
import { EntryTiersSection } from "./entry/EntryTiersSection";
import { EntryPriceSection } from "./entry/EntryPriceSection";
import { cn } from "@/lib/utils";
import { Price } from "wishlist-shared";

export type ListEntryProps = {
  img: string;
  name: string;
  packagedName: string;
  type: string;
  year: number;
  month?: number;
  speed?: number;
  farm?: number;
  isIOTY: boolean;
  isCon: boolean;
  price: Price | null;
  mrAs: number;
  status?: "NONE" | "PACKAGED" | "OPENED";
};

function ListEntry({
  img,
  name,
  packagedName,
  type,
  year,
  speed,
  farm,
  isIOTY,
  isCon,
  price,
  mrAs,
  status,
}: ListEntryProps) {
  const { theme } = useTheme();

  const yearPercent = useMemo(() => {
    const currentYear = new Date().getFullYear();
    // why capped at 5/6? idk, I like that color range better
    return Math.min(5 / 6, (currentYear - year) / (currentYear - 2004));
  }, [year]);

  const wikiUrl = useMemo(
    () =>
      `https://wiki.kingdomofloathing.com/${encodeURIComponent(
        packagedName
          .charAt(0)
          .toUpperCase()
          .concat(packagedName.slice(1).replace(/ /g, "_"))
      )}`,
    [packagedName]
  );

  const standardYear = useMemo(() => {
    const currentYear = new Date().getFullYear();
    if (packagedName === "Clan VIP Lounge invitation") return 0;
    return currentYear - year;
  }, [year, packagedName]);

  const mall =
    price?.value || price?.lowestMall
      ? Math.min(price?.value ?? Infinity, price?.lowestMall ?? Infinity)
      : null;

  const priceRatio = mall && mrAs ? mall / mrAs : null;
  const isStandard = standardYear < 3;

  return (
    <div
      className={cn(
        `relative flex flex-wrap lg:flex-nowrap items-center justify-center
        md:clamp-[gap-x,2.25,6,md,lg] clamp-[gap-x,1.5,2.25,xs,sm] gap-y-2
        clamp-[px,5,6,xs,sm] py-3 h-full min-w-[290px] lg:w-full
        overflow-hidden
        rounded-md hover:outline-foreground/50 hover:outline-2`,
        {
          "hover:outline-secondary": isStandard,
        }
      )}
    >
      <EntryBackground
        status={status}
        isStandard={isStandard}
        standardYear={standardYear}
        priceRatio={priceRatio}
        theme={theme}
      />

      <EntryRibbon show={isIOTY || isCon} variant={isIOTY ? "ioty" : "con"} />

      <EntryInfoSection
        img={img}
        name={name}
        type={type}
        year={year}
        wikiUrl={wikiUrl}
        isStandard={isStandard}
        yearPercent={yearPercent}
      />

      <EntrySpacer className="hidden lg:inline" />

      <EntryTiersSection speed={speed} farm={farm} />

      <EntrySpacer />

      <EntryPriceSection
        mrAs={mrAs}
        price={price}
        packagedName={packagedName}
      />
    </div>
  );
}

export default ListEntry;
