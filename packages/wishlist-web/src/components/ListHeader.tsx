import { adjustLightness, interpolateColorScale } from "@/lib/colors";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { useEntryBackgroundColor } from "@/hooks/useEntryBackgroundColor";
import { Badge } from "./ui/badge";

export type HeaderType = "year" | "tier" | "price";

interface ListHeaderProps {
  type: HeaderType;
  label: string;
  // TODO: Make typing non-redunant with List
  status: {
    iotms: { owned: number; total: number };
    iotys: { owned: number; total: number };
    cons: { owned: number; total: number };
    special: { owned: number; total: number };
  };
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

function ListHeader({ type, label, status }: ListHeaderProps) {
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
    <div className="mt-8 w-full justify-start bg-background/0">
      <div className="m-2 flex w-min items-center justify-center">
        <div
          className={cn(
            `flex items-start gap-1 rounded-md bg-background px-4 py-2
            outline-[1.5px] -outline-offset-1 outline-foreground`,
          )}
          //style={lightened}
        >
          <span
            className={cn(
              "mr-2 text-center text-xl font-normal text-nowrap text-foreground",
              type === "year" && "w-12",
              type === "tier" && "w-15",
              type === "price" && "w-32",
            )}
          >
            {label}
          </span>
          {status.iotms.total > 0 && (
            <Badge
              className="w-11 bg-[color-mix(in_oklch,var(--confirm)_90%,white)]
                text-xs tracking-tighter"
            >{`${status.iotms.owned} / ${status.iotms.total}`}</Badge>
          )}
          {status.iotys.total > 0 && (
            <Badge
              className="w-9 bg-[color-mix(in_oklch,var(--accent)_70%,white)]
                text-xs tracking-tighter"
            >{`${status.iotys.owned} / ${status.iotys.total}`}</Badge>
          )}
          {status.cons.total > 0 && (
            <Badge
              className="w-9 bg-[color-mix(in_oklch,var(--secondary)_70%,white)]
                text-xs tracking-tighter"
            >{`${status.cons.owned} / ${status.cons.total}`}</Badge>
          )}
          {status.special.total > 0 && (
            <Badge
              className="w-9
                bg-[color-mix(in_oklch,var(--destructive)_50%,white)] text-xs
                tracking-tighter"
            >{`${status.special.owned} / ${status.special.total}`}</Badge>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListHeader;
