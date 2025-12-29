import { adjustLightness, interpolateColorScale } from "@/lib/colors";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { useEntryBackgroundColor } from "@/hooks/useEntryBackgroundColor";

export type HeaderType = "year" | "tier" | "price";

interface ListHeaderProps {
  type: HeaderType;
  label: string;
}

// Maps price range labels to representative priceRatio values
const PRICE_LABEL_TO_RATIO: Record<string, number> = {
  "<1 Mr. A": 1,
  "1-2 Mr. As": 2,
  "2-3 Mr. As": 3,
  "3-5 Mr. As": 5,
  "5-10 Mr. As": 10,
  "10-50 Mr. As": 50,
  "50+ Mr. As": Infinity,
};

function getYearPercent(label: string): number {
  const year = parseInt(label, 10);
  const currentYear = new Date().getFullYear();
  return Math.min(5 / 6, (currentYear - year) / (currentYear - 2004));
}

function getTierPercent(label: string): number {
  const tier = parseInt(label.replace("Tier ", ""), 10);
  return Math.max(0, (tier - 1) / 6);
}

function ListHeader({ type, label }: ListHeaderProps) {
  const { theme } = useTheme();

  const priceRatio =
    type === "price" ? (PRICE_LABEL_TO_RATIO[label] ?? Infinity) : null;

  const { bgStyle: priceBgStyle } = useEntryBackgroundColor({
    isStandard: false,
    standardYear: 2004,
    priceRatio,
    theme,
  });

  const style =
    type === "price"
      ? priceBgStyle
      : type === "year"
        ? interpolateColorScale(getYearPercent(label))
        : interpolateColorScale(getTierPercent(label));

  const lightened = adjustLightness(style.backgroundColor!, "white", 30);

  //const adjustedLabel = type === "year" ? `Year ${label}` : label;

  return (
    <div className="mt-6 justify-between bg-background/0">
      <div
        className={cn(
          "flex w-min items-center gap-4 rounded-md bg-background px-4 py-2",
          // type === "year" && "w-20",
          // type === "tier" && "w-22",
          // type === "price" && "w-36",
        )}
        //style={lightened}
      >
        <span className="text-xl font-normal text-nowrap text-muted-foreground">
          {label}
        </span>
        <div
          className="flex flex-col items-start text-xs text-nowrap
            text-muted-foreground"
        >
          <span>Z is for Zootomist</span>
          <span>Hat Trick</span>
          <span>11,037 Leagues Under the Sea</span>
        </div>
      </div>
    </div>
  );
}

export default ListHeader;
