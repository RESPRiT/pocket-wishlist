import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export type HeaderType = "year" | "tier" | "price";

export type HeaderStatus = {
  iotms: { owned: number; total: number };
  iotys: { owned: number; total: number };
  special: { owned: number; total: number };
};

interface ListHeaderProps {
  type: HeaderType;
  label: string;
  status: HeaderStatus;
}

function ListHeader({ type, label, status }: ListHeaderProps) {
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
    <div className="mt-8 w-full justify-start bg-background/0">
      <div className="m-2 flex w-min items-center justify-center">
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
      </div>
    </div>
  );
}

export default ListHeader;
