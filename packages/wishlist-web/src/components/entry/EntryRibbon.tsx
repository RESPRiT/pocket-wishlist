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
        "absolute left-0 flex h-full items-center justify-center rounded-l-md",
        bgClass,
      )}
      style={{ writingMode: "sideways-lr" }}
    >
      <span
        className="ml-px clamp-[text,0.55rem,xs,xs,sm] text-muted-foreground
          select-none md:clamp-[text,xs,sm,md,lg]"
      >
        {label}
      </span>
    </div>
  );
}
