import EntryItem from "@/components/EntryItem";
import ThemedImg from "@/components/ThemedImg";
import { cn } from "@/lib/utils";

type EntryPriceSectionProps = {
  mall: number | null;
  mrAs: number | null;
  price: number | null;
  lowestMall: number | null;
};

export function EntryPriceSection({
  mall,
  mrAs,
  price,
  lowestMall,
}: EntryPriceSectionProps) {
  const formatMallStatus = () => {
    if (price === null && lowestMall === null)
      return "Mall extinct, no recent sales data";
    if (price === null) return "Based on lowest current mall listing";
    if (lowestMall === null) return "Based on recent sales data";
    return price < lowestMall
      ? "Based on recent sales data"
      : "Based on lowest current mall listing";
  };

  const formatMeatPrice = () => {
    // Infinite if no prices found
    if (!mall) return "∞";
    // Round to nearest million; why not toFixed? idk why I didn't
    const millions = Math.round(mall / 1_000_000);
    return millions < 1000
      ? // Use whole millions below billion
        `${millions}m`
      : // Use 1 digit for sub-10 billion, whole beyond
        `${Math.min(mall / 1_000_000_000, 999).toFixed(
          millions < 10_000 ? 1 : 0
        )}b`;
  };

  const formatMrARatio = () => {
    // Infinite if no prices found (or something went wrong?)
    if (!mall || !mrAs) return "∞";
    const ratio = mall / mrAs;
    // Use 1 digit for sub-100 Mr. As
    if (mall < mrAs * 100) return ratio.toFixed(1);
    // Use whole numbers for sub-1000
    if (ratio < 1000) return Math.round(ratio).toString();
    // Use thousands (k's) past 1000
    return `${Math.round(ratio / 1000)}k`;
  };

  const isExpensive = mall && Math.round(mall / 1_000_000) >= 1000;
  const isInfinite = mall === null;

  const fontClass = isInfinite
    ? "font-bold lg:text-2xl"
    : isExpensive
    ? "lg:text-xl"
    : "";

  return (
    <EntryItem label="est. mall price">
      <div
        className="flex justify-center items-center
                   md:clamp-[gap,1.25,1.5,md,lg] clamp-[gap,0.5,1.25,20rem,sm]
                   md:clamp-[w,38,40,md,lg] lg:w-42 clamp-[w,31,38,20rem,sm]
                   font-roboto-mono font-normal md:clamp-[text,base,lg,md,lg] clamp-[text,sm,base,20rem,sm]"
        title={formatMallStatus()}
      >
        <ThemedImg
          src="itemimages/meat.gif"
          alt="meat"
          reColor="bg-foreground"
          className="clamp-[size,5,6,20rem,sm]"
        />
        <span className={cn("text-primary-foreground", fontClass)}>
          {formatMeatPrice()}
        </span>

        <span className="text-muted-foreground select-none">/</span>

        <ThemedImg
          src="itemimages/mracc.gif"
          alt="Mr. Accessories"
          reColor="bg-accent-foreground"
          className="clamp-[size,6,7,20rem,sm] clamp-[mr,-0.6,-0.5,20rem,sm]"
        />
        <span className={cn("text-accent-foreground", fontClass)}>
          {formatMrARatio()}
        </span>
      </div>
    </EntryItem>
  );
}
