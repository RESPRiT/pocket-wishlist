import { cn } from "@/lib/utils";

type EntryRibbonProps = {
  show: boolean;
  variant: "ioty" | "con";
};

export function EntryRibbon({ show, variant }: EntryRibbonProps) {
  if (!show) return null;

  const bgClass = variant === "ioty" ? "bg-accent/60" : "bg-secondary/60";
  const label = variant === "ioty" ? "IOTY" : "Con";

  return (
    <div
      className={cn(
        "absolute flex justify-center items-center h-full left-0 rounded-l-md",
        bgClass
      )}
      style={{ writingMode: "sideways-lr" }}
    >
      <span className="ml-0.25 md:clamp-[text,xs,sm,md,lg] clamp-[text,0.55rem,xs,xs,sm] text-muted-foreground select-none">
        {label}
      </span>
    </div>
  );
}
