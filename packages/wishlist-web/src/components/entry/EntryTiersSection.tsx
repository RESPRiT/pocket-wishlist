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
  const percent = value !== undefined ? Math.max(0, (value - 1) / 6) : 1;
  const displayValue = value !== undefined ? value : "?";

  return (
    <EntryItem label={label}>
      <Badge
        className={cn(
          "md:clamp-[text,sm,base,md,lg] clamp-[text,xs,sm,20rem,sm] max-w-7 lg:max-w-full text-background",
          className
        )}
        style={interpolateColorScale(percent)}
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
      className="md:clamp-[w,32,36,md,lg] clamp-[w,26,32,20rem,sm]
                 md:clamp-[gap,3.5,5,md,lg] clamp-[gap,2.5,3.5,20rem,sm]
                 clamp-[mr,1,1.5,20rem,sm] lg:mr-0"
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
