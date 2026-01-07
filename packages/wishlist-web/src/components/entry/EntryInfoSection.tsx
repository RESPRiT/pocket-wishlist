import EntryItem from "@/components/EntryItem";
import EntrySection from "@/components/EntrySection";
import ThemedImg from "@/components/ThemedImg";
import { Badge } from "@/components/ui/badge";
import { interpolateColorScale } from "@/lib/colors";
import { ListEntryStatus } from "../ListEntry";
import { cn } from "@/lib/utils";

type EntryInfoSectionProps = {
  img: string;
  name: string;
  type: string;
  year: number;
  wikiUrl: string;
  isStandard: boolean;
  yearPercent: number;
  status?: ListEntryStatus;
};

export function EntryInfoSection({
  img,
  name,
  type,
  year,
  wikiUrl,
  isStandard,
  yearPercent,
  status,
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
        className={cn(
          `min-h-fit min-w-fit overflow-hidden rounded-sm outline-foreground
          hover:outline-2 hover:outline-foreground hover:outline-solid`,
          status === "WISHED" &&
            "outline-2 -outline-offset-1 outline-foreground/50 outline-dashed",
          status === "WISHED" && isStandard && "outline-secondary",
        )}
      >
        <ThemedImg
          src={`itemimages/${img}`}
          alt={name}
          reColor="bg-foreground"
          bgColor={status === "WISHED" ? "" : "bg-background"}
          className={cn("m-2 clamp-[size,6,7,sm,md]")}
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
          className={cn(
            "w-14 clamp-[text,sm,base,md,lg] text-background",
            status === "WISHED" &&
              `text-foreground/50 outline-[1.5px] -outline-offset-1
              outline-foreground/50 outline-dashed`,
            status === "WISHED" &&
              isStandard &&
              "text-secondary outline-secondary",
          )}
          style={
            status === "WISHED"
              ? { backgroundColor: "transparent" }
              : interpolateColorScale(yearPercent)
          }
        >
          {year}
        </Badge>
      </EntryItem>
    </EntrySection>
  );
}
