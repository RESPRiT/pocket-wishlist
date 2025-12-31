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
  const yearLabel = isStandard
    ? "standard"
    : (year <= 2014 && type === "item") ||
        name === "The Crown of Ed the Undying"
      ? "softcore"
      : "hardcore";

  return (
    <EntrySection className="w-0 basis-full gap-5 lg:w-auto lg:basis-auto">
      <a
        href={wikiUrl}
        className="min-h-fit min-w-fit overflow-hidden rounded-sm
          outline-foreground hover:outline-2"
      >
        <ThemedImg
          src={`itemimages/${img}`}
          alt={name}
          reColor="bg-foreground"
          bgColor="bg-background"
          className="m-2 clamp-[size,6,7,sm,md]"
        />
      </a>

      <EntryItem label={type} className="-mt-0.5 clamp-[w,42,56,md,lg]">
        <span
          className="text-center clamp-[text,sm,base,xs,sm] font-normal
            text-balance text-primary-foreground"
        >
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
