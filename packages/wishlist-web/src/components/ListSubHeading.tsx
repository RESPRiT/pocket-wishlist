import { cn } from "@/lib/utils";
import { ListEntryProps } from "./ListEntry";

export type SubHeadingType = "iotm" | "ioty" | "special";
export type SubHeadingItem = {
  itemType: "subheading";
  subheadingType: SubHeadingType;
  owned: ListEntryProps["status"][];
  key: string;
};

function ListSubHeading({
  type,
  owned,
}: {
  type: SubHeadingType;
  owned: SubHeadingItem["owned"];
}) {
  const textColor =
    type === "iotm"
      ? "text-[oklch(from_var(--confirm)_var(--foreground-lightness)_0.09_h)]"
      : type === "ioty"
        ? "text-[oklch(from_var(--accent)_var(--foreground-lightness)_0.09_h)]"
        : "text-[oklch(from_var(--secondary)_var(--foreground-lightness)_0.09_h)]";

  const iconColor =
    type === "iotm"
      ? "bg-[oklch(from_var(--confirm)_var(--foreground-lightness)_0.075_h)]"
      : type === "ioty"
        ? "bg-[oklch(from_var(--accent)_var(--foreground-lightness)_0.075_h)]"
        : "bg-[oklch(from_var(--secondary)_var(--foreground-lightness)_0.075_h)]";

  const label =
    type === "iotm" ? "IOTMS" : type === "ioty" ? "IOTYS" : "KOL CON & ETC.";

  return (
    <div
      className={cn(
        "mx-2 mt-1 flex w-full items-center justify-start gap-2 font-medium",
        textColor,
      )}
    >
      <span className={cn("shrink-0 clamp-[text,xs,sm,xs,sm]", textColor)}>
        {label}
      </span>
      <div
        className="flex min-w-0 flex-wrap items-center justify-start gap-0.75
          rounded-sm bg-primary px-2 py-1"
      >
        <span className="mr-1 text-xs tracking-tighter">
          {owned.filter((v) => v !== "NONE").length} / {owned.length}
        </span>
        {owned.map((v, i) => (
          <div
            className={cn(
              "h-2.5 w-1.5 rounded-xs",
              v === "OPENED"
                ? iconColor
                : v === "PACKAGED"
                  ? [iconColor, "opacity-40"]
                  : "border-[0.5px] border-dashed border-foreground",
            )}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default ListSubHeading;
