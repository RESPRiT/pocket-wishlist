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

    const pluralize = (count: number, singular: string) =>
      `${count} ${singular}${count === 1 ? "" : "s"} ago`;

    const timeSince = Date.now() - time;
    if (timeSince < TIME_RANGES.secondsAgo) {
      return pluralize(Math.floor(timeSince / TIME_AMOUNTS.seconds), "second");
    } else if (timeSince < TIME_RANGES.minutesAgo) {
      return pluralize(Math.floor(timeSince / TIME_AMOUNTS.minutes), "minute");
    } else if (timeSince < TIME_RANGES.hoursAgo) {
      return pluralize(Math.floor(timeSince / TIME_AMOUNTS.hours), "hour");
    } else if (timeSince < TIME_RANGES.yesterday) {
      return "yesterday";
    } else if (timeSince < TIME_RANGES.daysAgo) {
      return pluralize(Math.floor(timeSince / TIME_AMOUNTS.days), "day");
    } else if (timeSince < TIME_RANGES.weeksAgo) {
      return pluralize(Math.floor(timeSince / TIME_AMOUNTS.weeks), "week");
    }
    return pluralize(Math.floor(timeSince / TIME_AMOUNTS.months), "month");
  };

  // TODO: Polish theme toggle, more usable button
  return (
    <header
      className="clamp-[mt,4,10,xs,sm] flex flex-col justify-between gap-2
        sm:flex-row sm:items-end"
    >
      <div className="flex items-center gap-2.5">
        <span
          className="clamp-[ml,0,0.5,sm,md] clamp-[text,3xl,4xl,xs,sm]
            font-medium"
        >
          {"pocket wishlist"}
        </span>
        <div
          className={cn(
            `clamp-[h,6,5,xs,sm] clamp-[w,6,5,xs,sm] cursor-pointer rounded-full
            bg-accent duration-100 hover:bg-foreground`,
            isTransitioning && "opacity-60",
          )}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
      <div className="flex flex-col sm:items-end">
        <span className="text-xs text-accent">{`prices updated: ${formatTimeSince(
          mallPricesLastUpdated.getTime(),
        )}`}</span>
        {username && (
          <span className="clamp-[text,sm,base,xs,sm] text-foreground">
            {`${username}'s wishlist `}
            <span className="clamp-[text,xs,sm,xs,sm]">{"as of "}</span>
            <b>{formatTimeSince(lastUpdated ?? 0)}</b>
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;
