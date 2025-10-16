import EntryItem from "@/components/EntryItem";
import EntrySection from "@/components/EntrySection";
import ThemedImg from "@/components/ThemedImg";
import { Badge } from "@/components/ui/badge";
import { interpolateColorScale } from "@/lib/colors";

type EntryInfoSectionProps = {
  img: string;
  name: string;
  type: string;
  year: number;
  wikiUrl: string;
  isStandard: boolean;
  yearPercent: number;
};

export function EntryInfoSection({
  img,
  name,
  type,
  year,
  wikiUrl,
  isStandard,
  yearPercent,
}: EntryInfoSectionProps) {
  const yearLabel = isStandard ? "standard" : "hardcore";

  return (
    <EntrySection className="gap-5 w-0 lg:w-auto basis-full lg:basis-auto">
      <a
        href={wikiUrl}
        className="min-w-fit min-h-fit rounded-sm overflow-hidden hover:outline-2 outline-foreground"
      >
        <ThemedImg
          src={`itemimages/${img}`}
          alt={name}
          reColor="bg-foreground"
          bgColor="bg-background"
          className="clamp-[size,6,7,sm,md] m-2"
        />
      </a>

      <EntryItem label={type} className="clamp-[w,42,56,md,lg] -mt-0.5">
        <span className="clamp-[text,sm,base,20rem,sm] font-normal text-primary-foreground text-center text-balance">
          {name}
        </span>
      </EntryItem>

      <EntryItem label={yearLabel}>
        <Badge
          className="w-14 clamp-[text,sm,base,md,lg] text-background"
          style={interpolateColorScale(yearPercent)}
        >
          {year}
        </Badge>
      </EntryItem>
    </EntrySection>
  );
}
