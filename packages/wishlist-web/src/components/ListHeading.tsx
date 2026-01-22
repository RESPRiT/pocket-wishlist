import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { formatMeatPrice, formatMrARatio } from "@/lib/prices";
import ThemedImg from "./ThemedImg";

export type HeadingType = "year" | "tier" | "price";

export type HeadingStatus = {
  iotms: { owned: number; total: number };
  iotys: { owned: number; total: number };
  special: { owned: number; total: number };
};

export type HeadingInfo = {
  avgPrice: number;
  mrAs: number;
};

interface ListHeadingProps {
  type: HeadingType;
  label: string;
  status: HeadingStatus;
  info: HeadingInfo;
}

function ListHeading({ type, label, status, info }: ListHeadingProps) {
  function StatusBadge({
    statusItem,
    type,
  }: {
    statusItem: { owned: number; total: number };
    type: "iotms" | "iotys" | "special";
  }) {
    if (statusItem.total <= 0) return <></>;

    const bgColor =
      type === "iotms"
        ? "bg-[color-mix(in_oklch,var(--confirm)_90%,white)]"
        : type === "iotys"
          ? "bg-[color-mix(in_oklch,var(--accent)_70%,white)]"
          : "bg-[color-mix(in_oklch,var(--secondary)_70%,white)]";

    return (
      <div className="flex flex-col items-center justify-between gap-1">
        <Badge
          className={cn(
            "text-xs tracking-tighter",
            type === "iotms" ? "w-11" : "w-9",
            bgColor,
          )}
        >{`${statusItem.owned} / ${statusItem.total}`}</Badge>
        <div className="grid">
          <div
            className={cn(
              "col-start-1 row-start-1 h-0.5 origin-left rounded-md",
              type === "iotms" ? "w-10" : "w-8",
              bgColor,
            )}
            style={{
              transform: `scaleX(${(statusItem.owned / statusItem.total) * 100}%)`,
            }}
          />
          <div
            className={cn(
              "col-start-1 row-start-1 h-0.5 rounded-md opacity-25",
              type === "iotms" ? "w-10" : "w-8",
              bgColor,
            )}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="clamp-[mx,1,2,sm,md] clamp-[mt,7,10,xs,md] flex flex-wrap
        justify-between gap-1"
    >
      {/* main heading */}
      <div
        className={cn(
          `flex items-start gap-1 rounded-md bg-background px-4 py-2
          outline-[1.5px] -outline-offset-1 outline-foreground`,
        )}
      >
        <span
          className={cn(
            `mr-2 text-center clamp-[text,lg,xl,xs,sm] font-normal text-nowrap
            text-foreground`,
            type === "year" && "clamp-[w,10,12,xs,sm]",
            type === "tier" && "clamp-[w,12,15,xs,sm]",
            type === "price" && "clamp-[w,26,32,xs,sm]",
          )}
        >
          {label}
        </span>
        <StatusBadge statusItem={status.iotms} type="iotms" />
        <StatusBadge statusItem={status.iotys} type="iotys" />
        <StatusBadge statusItem={status.special} type="special" />
      </div>

      {/* secondary heading -- TODO: I think this could be a floating info box, instead*/}
      {
        <div className="text-md flex h-min gap-2">
          <Badge
            className="rounded-sm outline-[1.5px] -outline-offset-1
              outline-foreground"
          >
            <span>Avg. Price:</span>
            <ThemedImg
              src="itemimages/meat.gif"
              alt="meat"
              reColor="bg-foreground"
              className={"-mr-px clamp-[size,3,4,xs,sm]"}
            />
            <span className="font-roboto-mono">
              {formatMeatPrice(info.avgPrice)}
            </span>
            <span className="font-roboto-mono text-muted-foreground">/</span>
            <ThemedImg
              src="itemimages/mracc.gif"
              alt="meat"
              reColor="bg-accent"
              className={"-mx-0.5 clamp-[size,4,5,xs,sm]"}
            />
            <span className="font-roboto-mono">
              {formatMrARatio(info.avgPrice, info.mrAs)}
            </span>
          </Badge>
        </div>
      }
    </div>
  );
}

export default ListHeading;
