import { useMemo } from "react";
import EntrySpacer from "./EntrySpacer";
import { EntryBackground } from "./entry/EntryBackground";
import { EntryRibbon } from "./entry/EntryRibbon";
import { EntryInfoSection } from "./entry/EntryInfoSection";
import { EntryTiersSection } from "./entry/EntryTiersSection";
import { EntryPriceSection } from "./entry/EntryPriceSection";
import { cn } from "@/lib/utils";
import { Price } from "wishlist-shared";

// TODO: Move to wishlist data schema once API is updated
export type ListEntryStatus = "NONE" | "PACKAGED" | "OPENED" | "WISHED";
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
  // TODO: Make this a resuable type
  status?: ListEntryStatus;
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
          .concat(packagedName.slice(1).replace(/ /g, "_")),
      )}`,
    [packagedName],
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
        `grid overflow-hidden rounded-md hover:outline-2
        hover:outline-foreground/50 hover:outline-solid`,
        isStandard && "hover:outline-secondary",
        status === "WISHED" &&
          "outline-2 -outline-offset-2 outline-foreground/50 outline-dashed",
        status === "WISHED" && isStandard && "outline-secondary",
      )}
    >
      <EntryBackground
        status={status}
        isStandard={isStandard}
        standardYear={standardYear}
        priceRatio={priceRatio}
      />

      <div
        className={cn(
          `relative col-start-1 row-start-1 flex h-full min-w-[290px] flex-wrap
          items-center justify-center clamp-[gap-x,1.5,2.25,xs,sm] gap-y-2
          overflow-hidden clamp-[px,5,6,xs,sm] py-3 hover:outline-2
          md:clamp-[gap-x,2.25,6,md,lg] lg:w-full lg:flex-nowrap`,
        )}
      >
        <EntryRibbon show={isIOTY || isCon} variant={isIOTY ? "ioty" : "con"} />

        <EntryInfoSection
          img={img}
          name={name}
          type={type}
          year={year}
          wikiUrl={wikiUrl}
          isStandard={isStandard}
          yearPercent={yearPercent}
          status={status}
        />

        <EntrySpacer className="hidden lg:inline" />

        <EntryTiersSection
          speed={speed}
          farm={farm}
          status={status}
          isStandard={isStandard}
        />

        <EntrySpacer />

        <EntryPriceSection
          mrAs={mrAs}
          price={price}
          packagedName={packagedName}
        />
      </div>
    </div>
  );
}

export default ListEntry;
