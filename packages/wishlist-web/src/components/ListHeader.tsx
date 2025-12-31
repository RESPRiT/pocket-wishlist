import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { formatMeatPrice } from "@/lib/prices";

export type HeaderType = "year" | "tier" | "price";

export type HeaderStatus = {
  iotms: { owned: number; total: number };
  iotys: { owned: number; total: number };
  special: { owned: number; total: number };
};

export type HeaderInfo = {
  avgPrice: number;
};

interface ListHeaderProps {
  type: HeaderType;
  label: string;
  status: HeaderStatus;
  info: HeaderInfo;
}

function ListHeader({ type, label, status, info }: ListHeaderProps) {
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
    <div className="m-2 mt-10 mb-1 flex justify-between">
      {/* main heading */}
      <div
        className={cn(
          `flex items-start gap-1 rounded-md bg-background px-4 py-2
          outline-[1.5px] -outline-offset-1 outline-foreground`,
        )}
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
        <StatusBadge statusItem={status.iotms} type="iotms" />
        <StatusBadge statusItem={status.iotys} type="iotys" />
        <StatusBadge statusItem={status.special} type="special" />
      </div>

      {/* secondary heading */}
      <div className="flex h-min gap-2 text-xs">
        <Badge className="outline-[1.5px] outline-foreground">
          Avg. Price: {formatMeatPrice(info.avgPrice)}
        </Badge>
      </div>
    </div>
  );
}

export default ListHeader;
