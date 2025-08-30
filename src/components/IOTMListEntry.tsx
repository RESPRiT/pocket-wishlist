import EntryItem from "./EntryItem";
import EntrySection from "./EntrySection";
import EntrySpacer from "./EntrySpacer";
import ThemedImg from "./ThemedImg";
import { Badge } from "./ui/badge";

function IOTMListEntry() {
  return (
    <div className="flex items-center gap-7 bg-primary px-7 py-3 rounded-md">
      <EntrySection>
        <a href="https://www.google.com">
          <ThemedImg
            src="src/assets/meat.gif"
            alt="meat"
            reColor="bg-foreground"
            bgColor="bg-background"
            className="w-9 h-9 rounded-sm overflow-hidden hover:outline-2 outline-foreground"
          />
        </a>
        <EntryItem label="item">
          <div className="font-normal text-primary-foreground text-lg text-center w-3xs">
            prismatic beret
          </div>
        </EntryItem>
        <EntryItem label="year">
          <Badge className="text-base bg-secondary text-background">2025</Badge>
        </EntryItem>
      </EntrySection>
      <EntrySpacer />
      <EntrySection>
        <EntryItem label="speed">
          <div>img</div>
        </EntryItem>
        <EntryItem label="farm">
          <div>img</div>
        </EntryItem>
        <EntryItem label="avg.">
          <div>img</div>
        </EntryItem>
      </EntrySection>
      <EntrySpacer />
      <EntryItem label="est. mall price">
        <div>mall</div>
      </EntryItem>
    </div>
  );
}

export default IOTMListEntry;
