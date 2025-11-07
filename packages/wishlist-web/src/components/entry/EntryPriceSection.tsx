import EntryItem from "@/components/EntryItem";
import ThemedImg from "@/components/ThemedImg";
import { cn } from "@/lib/utils";
import { Price } from "wishlist-shared";

type EntryPriceSectionProps = {
  price: Price | null;
  mrAs: number;
  packagedName: string;
};

export function EntryPriceSection({
  mrAs,
  price,
  packagedName,
}: EntryPriceSectionProps) {
  const mallStatus =
    price?.value === undefined && price?.lowestMall === -1
      ? "extinct"
      : price?.value === undefined || price?.volume === 0
        ? "lowestMall"
        : price.value < price.lowestMall
          ? "recentSales"
          : "lowestMall";

  const statusText = {
    extinct: "Mall extinct, no recent sales data",
    lowestMall: "Based on lowest mall listing",
    recentSales: `Based on ${price?.volume} recent sale${(price?.volume ?? 1) !== 1 ? "s" : ""}`,
  };

  const mafiaUrl = `http://127.0.0.1:60080/mall.php?didadv=0&pudnuggler=${encodeURIComponent(packagedName)}&category=allitems&food_sortitemsby=name&booze_sortitemsby=name&othercon_sortitemsby=name&consumable_byme=0&hats_sortitemsby=name&shirts_sortitemsby=name&pants_sortitemsby=name&weapons_sortitemsby=name&weaponattribute=3&weaponhands=3&acc_sortitemsby=name&offhand_sortitemsby=name&wearable_byme=0&famequip_sortitemsby=name&nolimits=0&justitems=0&sortresultsby=price&max_price=0&x_cheapest=200&consumable_tier_1=0&consumable_tier_2=0&consumable_tier_3=0&consumable_tier_4=0&consumable_tier_5=0`;

  const formatMeatPrice = () => {
    if (price === null) return "x";

    // Infinite if no prices found
    if (
      price.lowestMall === -1 &&
      (price.volume === undefined || price.volume === 0)
    )
      return "∞";
    // Round to nearest million; why not toFixed? idk why I didn't
    const millions = Math.round(price.lowestMall / 1_000_000);
    return millions < 1000
      ? // Use whole millions below billion
        `${millions}m`
      : // Use 1 digit for sub-10 billion, whole beyond
        `${Math.min(price.lowestMall / 1_000_000_000, 999).toFixed(
          millions < 10_000 ? 1 : 0,
        )}b`;
  };

  const formatMrARatio = () => {
    if (price === null) return "x";

    // Infinite if no prices found (or something went wrong?)
    if (price.lowestMall === -1) return "∞";
    const ratio = price.lowestMall / mrAs;
    // Use 1 digit for sub-100 Mr. As
    if (price.lowestMall < mrAs * 100) return ratio.toFixed(1);
    // Use whole numbers for sub-1000
    if (ratio < 1000) return Math.round(ratio).toString();
    // Use thousands (k's) past 1000
    return `${Math.round(ratio / 1000)}k`;
  };

  const isExpensive =
    price?.lowestMall && Math.round(price.lowestMall / 1_000_000) >= 1000;
  const isInfinite = price?.lowestMall === -1;

  const fontClass = isInfinite
    ? "font-bold lg:text-2xl"
    : isExpensive
      ? "lg:text-xl"
      : "";

  return (
    <EntryItem label="est. mall price">
      <div
        className="flex clamp-[w,31,38,xs,sm] items-center justify-center
          clamp-[gap,0.5,1.25,xs,sm] font-roboto-mono clamp-[text,sm,base,xs,sm]
          font-normal md:clamp-[w,38,40,md,lg] md:clamp-[gap,1.25,1.5,md,lg]
          md:clamp-[text,base,lg,md,lg] lg:w-42"
        title={statusText[mallStatus]}
      >
        <div className="group flex items-center">
          <ThemedImg
            src="itemimages/meat.gif"
            alt="meat"
            reColor="bg-foreground"
            className={`clamp-[size,5,6,xs,sm]
              ${mallStatus === "lowestMall" && "group-hover:opacity-70"}`}
          />
          {mallStatus !== "lowestMall" ? (
            <span className={cn("text-primary-foreground", fontClass)}>
              {`${formatMeatPrice()}`}
            </span>
          ) : (
            <a
              href={mafiaUrl}
              className={cn(
                `text-primary-foreground underline underline-offset-2
                  group-hover:text-primary-foreground/80`,
                fontClass,
              )}
            >
              {formatMeatPrice()}
            </a>
          )}
        </div>

        <span className="text-muted-foreground select-none">/</span>

        <ThemedImg
          src="itemimages/mracc.gif"
          alt="Mr. Accessories"
          reColor="bg-accent-foreground"
          className="clamp-[mr,-0.6,-0.5,xs,sm] clamp-[size,6,7,xs,sm]"
        />
        <span className={cn("text-accent-foreground", fontClass)}>
          {formatMrARatio()}
        </span>
      </div>
    </EntryItem>
  );
}
