import EntryItem from "./EntryItem";
import EntrySection from "./EntrySection";
import EntrySpacer from "./EntrySpacer";
import ThemedImg from "./ThemedImg";
import { Badge } from "./ui/badge";

type ListEntryProps = {
  img: string;
  name: string;
  year: number;
  speed: number;
  farm: number;
  mall: number;
};

function ListEntry({ img, name, year, speed, farm, mall }: ListEntryProps) {
  return (
    <div className="flex items-center gap-7 bg-primary px-7 py-3 rounded-md">
      <EntrySection>
        <a href="https://www.google.com">
          <ThemedImg
            src={img}
            alt="TODO"
            reColor="bg-foreground"
            bgColor="bg-background"
            className="w-9 h-9 rounded-sm overflow-hidden hover:outline-2 outline-foreground"
          />
        </a>
        <EntryItem label="item">
          <div className="font-normal text-primary-foreground text-lg text-center w-3xs -mt-0.5">
            {name}
          </div>
        </EntryItem>
        <EntryItem label="year">
          <Badge className="text-base bg-secondary text-background">
            {year}
          </Badge>
        </EntryItem>
      </EntrySection>
      <EntrySpacer />
      <EntrySection>
        <EntryItem label="speed">
          <Badge className="text-base bg-secondary text-background">
            {speed}
          </Badge>
        </EntryItem>
        <EntryItem label="farm">
          <Badge className="text-base bg-secondary text-background">
            {farm}
          </Badge>
        </EntryItem>
        <EntryItem label="avg.">
          <Badge className="text-base bg-secondary text-background">
            {(speed + farm) / 2}
          </Badge>
        </EntryItem>
      </EntrySection>
      <EntrySpacer />
      <EntryItem label="est. mall price">
        <div className="flex justify-center items-center gap-1.5 font-roboto-mono font-normal text-lg">
          <ThemedImg
            src="src/assets/meat.gif"
            alt="meat"
            reColor="bg-foreground"
            className="w-6 h-6"
          />
          <span className="text-primary-foreground">{`${mall}m`}</span>
          <span className="text-muted-foreground">/</span>
          <ThemedImg
            src="src/assets/mracc.gif"
            alt="Mr. Accesories"
            reColor="bg-accent"
            className="w-7 h-7 -mx-0.5"
          />
          <span className="text-accent-foreground">
            {Math.round(mall / 80)}
          </span>
        </div>
      </EntryItem>
    </div>
  );
}

export default ListEntry;
