import { useWishlist } from "@/contexts/WishlistContext.tsx";
import { useTheme } from "../contexts/ThemeContext.tsx";
import { cn } from "@/lib/utils.ts";
import { useMallPrices } from "@/hooks/useMallPrices.ts";

const TIME_RANGES = {
  secondsAgo: 60 * 1000,
  minutesAgo: 60 * 60 * 1000,
  hoursAgo: 24 * 60 * 60 * 1000,
  yesterday: 2 * 24 * 60 * 60 * 1000,
  daysAgo: 7 * 24 * 60 * 60 * 1000,
  weeksAgo: 30 * 24 * 60 * 60 * 1000,
} as const;

const TIME_AMOUNTS = {
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000,
  weeks: 7 * 24 * 60 * 60 * 1000,
  months: 30 * 24 * 60 * 60 * 1000,
} as const;

function Header() {
  const { username, lastUpdated } = useWishlist();
  // don't love that this re-calls
  const { mallPricesLastUpdated } = useMallPrices();
  const { theme, setTheme, isTransitioning } = useTheme();

  const formatTimeSince = (time: number) => {
    if (time <= 0) return "";

    // TODO: Handle plurals
    const timeSince = Date.now() - time;
    if (timeSince < TIME_RANGES.secondsAgo) {
      return `${Math.floor(timeSince / TIME_AMOUNTS.seconds)} seconds ago`;
    } else if (timeSince < TIME_RANGES.minutesAgo) {
      return `${Math.floor(timeSince / TIME_AMOUNTS.minutes)} minutes ago`;
    } else if (timeSince < TIME_RANGES.hoursAgo) {
      return `${Math.floor(timeSince / TIME_AMOUNTS.hours)} hours ago`;
    } else if (timeSince < TIME_RANGES.yesterday) {
      return "yesterday";
    } else if (timeSince < TIME_RANGES.daysAgo) {
      return `${Math.floor(timeSince / TIME_AMOUNTS.days)} days ago`;
    } else if (timeSince < TIME_RANGES.weeksAgo) {
      return `${Math.floor(timeSince / TIME_AMOUNTS.weeks)} weeks ago`;
    }
    return `${Math.floor(timeSince / TIME_AMOUNTS.months)} months ago`;
  };

  // TODO: Polish theme toggle, more usable button
  return (
    <header className="flex flex-col gap-2 sm:flex-row justify-between sm:items-end clamp-[mt,4,10,xs,sm]">
      <div className="flex items-baseline gap-2.5">
        <span className="font-medium clamp-[text,3xl,4xl,xs,sm]">
          {"pocket wishlist"}
        </span>
        <div
          className={cn(
            "clamp-[h,6,5,xs,sm] clamp-[w,6,5,xs,sm] bg-accent cursor-pointer rounded-full hover:bg-foreground duration-100",
            isTransitioning && "opacity-60"
          )}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
      <div className="flex flex-col sm:items-end">
        <span className="text-xs text-accent">{`prices updated: ${formatTimeSince(
          mallPricesLastUpdated ?? -1
        )}`}</span>
        <span className="clamp-[text,sm,base,xs,sm] text-foreground">
          {`${username}'s wishlist `}
          <span className="clamp-[text,xs,sm,xs,sm]">{"as of "}</span>
          <b>{formatTimeSince(lastUpdated ?? 0)}</b>
        </span>
      </div>
    </header>
  );
}

export default Header;
