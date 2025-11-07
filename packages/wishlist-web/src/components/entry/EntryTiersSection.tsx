import EntryItem from "@/components/EntryItem";
import EntrySection from "@/components/EntrySection";
import { Badge } from "@/components/ui/badge";
import { interpolateColorScale } from "@/lib/colors";
import { cn } from "@/lib/utils";

type EntryTiersSectionProps = {
  speed?: number;
  farm?: number;
};

function TierBadge({
  label,
  value,
  className = "",
}: {
  label: string;
  value?: number;
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
            `border-dashed border-muted-foreground bg-background/0 font-light
            text-muted-foreground`,
          className,
        )}
        style={percent !== null ? interpolateColorScale(percent) : undefined}
      >
        {displayValue}
      </Badge>
    </EntryItem>
  );
}

export function EntryTiersSection({ speed, farm }: EntryTiersSectionProps) {
  const avg =
    speed !== undefined && farm !== undefined ? (speed + farm) / 2 : undefined;

  return (
    <EntrySection
      className="clamp-[mr,1,1.5,xs,sm] clamp-[w,26,32,xs,sm]
        clamp-[gap,2.5,3.5,xs,sm] md:clamp-[w,32,36,md,lg]
        md:clamp-[gap,3.5,5,md,lg] lg:mr-0"
    >
      <TierBadge label="speed" value={speed} />
      <TierBadge label="freed" value={farm} />
      <TierBadge
        className="clamp-[w,7,9,sm,md] max-w-full"
        label="avg."
        value={avg}
      />
    </EntrySection>
  );
}
