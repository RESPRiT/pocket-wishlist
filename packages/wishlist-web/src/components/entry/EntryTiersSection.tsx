import EntryItem from "@/components/EntryItem";
import EntrySection from "@/components/EntrySection";
import { Badge } from "@/components/ui/badge";
import { interpolateColorScale } from "@/lib/colors";
import { cn } from "@/lib/utils";
import { ListEntryStatus } from "../ListEntry";

type EntryTiersSectionProps = {
  speed?: number;
  farm?: number;
  status?: ListEntryStatus;
  isStandard?: boolean;
};

function TierBadge({
  label,
  value,
  status,
  isStandard,
  className = "",
}: {
  label: string;
  value?: number;
  status?: ListEntryStatus;
  isStandard?: boolean;
  className?: string;
}) {
  const percent = value !== undefined ? Math.max(0, (value - 1) / 6) : null;
  const displayValue = value !== undefined ? value : "?";

  return (
    <EntryItem label={label}>
      <Badge
        className={cn(
          `max-w-7 clamp-[text,xs,sm,xs,sm] text-background
          md:clamp-[text,sm,base,md,lg] lg:max-w-full`,
          value ??
            `bg-background/0 font-light text-muted-foreground outline-[1.5px]
            -outline-offset-1 outline-muted-foreground outline-dashed`,
          status === "WISHED" &&
            `bg-transparent text-foreground/50 outline-[1.5px] -outline-offset-1
            outline-foreground/50 outline-dashed`,
          status === "WISHED" &&
            isStandard &&
            "text-secondary outline-secondary",
          className,
        )}
        style={
          percent !== null && status !== "WISHED"
            ? interpolateColorScale(percent)
            : undefined
        }
      >
        {displayValue}
      </Badge>
    </EntryItem>
  );
}

export function EntryTiersSection({
  speed,
  farm,
  status,
  isStandard,
}: EntryTiersSectionProps) {
  const avg =
    speed !== undefined && farm !== undefined ? (speed + farm) / 2 : undefined;

  return (
    <EntrySection
      className="clamp-[mr,1,1.5,xs,sm] clamp-[w,26,32,xs,sm]
        clamp-[gap,2.5,3.5,xs,sm] md:clamp-[w,32,36,md,lg]
        md:clamp-[gap,3.5,5,md,lg] lg:mr-0"
    >
      <TierBadge
        label="speed"
        value={speed}
        status={status}
        isStandard={isStandard}
      />
      <TierBadge
        label="freed"
        value={farm}
        status={status}
        isStandard={isStandard}
      />
      <TierBadge
        className="clamp-[w,7,9,sm,md] max-w-full"
        label="avg."
        value={avg}
        status={status}
        isStandard={isStandard}
      />
    </EntrySection>
  );
}
