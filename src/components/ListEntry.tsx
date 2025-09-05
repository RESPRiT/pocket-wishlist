import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  mall: number | null;
  mrAs: number | null;
};

function ListEntry({
  img,
  name,
  year,
  speed,
  farm,
  mall,
  mrAs,
}: ListEntryProps) {
  return (
    <div className="flex items-center justify-center gap-7 bg-primary w-full px-7 py-3 rounded-md">
      <EntrySection>
        <a
          href="https://www.google.com"
          className="rounded-sm overflow-hidden hover:outline-2 outline-foreground"
        >
          <ThemedImg
            src={`itemimages/${img}`}
            alt="TODO"
            reColor="bg-foreground"
            bgColor="bg-background"
            className="w-7 h-7 m-2"
          />
          <div className="col-start-1 row-start-1 w-full h-full relative opacity-0 hover:opacity-100">
            <div className="absolute right-0.5">
              <FontAwesomeIcon
                icon={["fas", "up-right-from-square"]}
                color="primary-foreground"
                size="xs"
              />
            </div>
          </div>
        </a>
        <EntryItem label="item">
          <div className="font-normal text-primary-foreground text-base text-center w-3xs -mt-0.5">
            {name}
          </div>
        </EntryItem>
        <EntryItem label="year">
          <Badge className="w-14 text-base bg-secondary text-background">
            {year}
          </Badge>
        </EntryItem>
      </EntrySection>
      <EntrySpacer />
      <EntrySection>
        <EntryItem label="speed">
          <Badge className="text-base bg-secondary text-background">
            {speed ? speed : "?"}
          </Badge>
        </EntryItem>
        <EntryItem label="freed">
          <Badge className="text-base bg-secondary text-background">
            {farm ? farm : "?"}
          </Badge>
        </EntryItem>
        <EntryItem label="avg.">
          <Badge className="w-9 text-base bg-secondary text-background">
            {speed && farm ? (speed + farm) / 2 : "?"}
          </Badge>
        </EntryItem>
      </EntrySection>
      <EntrySpacer />
      <EntryItem label="est. mall price">
        <div className="flex justify-center items-center gap-1.5 w-42 font-roboto-mono font-normal text-lg">
          <ThemedImg
            src="itemimages/meat.gif"
            alt="meat"
            reColor="bg-foreground"
            className="w-6 h-6"
          />
          <span className="text-primary-foreground">
            {mall ? `${Math.round(mall / 1000000)}m` : "∞"}
          </span>
          <span className="text-muted-foreground select-none">/</span>
          <ThemedImg
            src="itemimages/mracc.gif"
            alt="Mr. Accesories"
            reColor="bg-accent"
            className="w-7 h-7 -mx-0.5"
          />
          <span className="text-accent-foreground">
            {mall && mrAs ? (mall / mrAs).toFixed(1) : "∞"}
          </span>
        </div>
      </EntryItem>
    </div>
  );
}

export default ListEntry;
