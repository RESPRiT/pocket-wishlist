import { useEffect, useState } from "react";
import { useWishlistContext } from "@/contexts/WishlistContext";

const LAST_UPDATED_KEY = "mallLastUpdated";

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
  const [lastUpdated, setLastUpdated] = useState<number>();
  const { wishlist } = useWishlistContext();

  useEffect(() => {
    // TODO: Doesn't re-render when this value changes
    const stored = localStorage.getItem(LAST_UPDATED_KEY);
    if (stored) {
      setLastUpdated(Number.parseInt(stored));
    }
  }, []);

  const formatTimeSince = (time: number) => {
    if (time <= 0) return "";

    // TODO: Handle plurals
    const timeSince = Date.now() - time;
    if (timeSince < TIME_RANGES.secondsAgo) {
      return `${Math.round(timeSince / TIME_AMOUNTS.seconds)} seconds ago`;
    } else if (timeSince < TIME_RANGES.minutesAgo) {
      return `${Math.round(timeSince / TIME_AMOUNTS.minutes)} minutes ago`;
    } else if (timeSince < TIME_RANGES.hoursAgo) {
      return `${Math.round(timeSince / TIME_AMOUNTS.hours)} hours ago`;
    } else if (timeSince < TIME_RANGES.yesterday) {
      return "yesterday";
    } else if (timeSince < TIME_RANGES.daysAgo) {
      return `${Math.round(timeSince / TIME_AMOUNTS.days)} days ago`;
    } else if (timeSince < TIME_RANGES.weeksAgo) {
      return `${Math.round(timeSince / TIME_AMOUNTS.weeks)} weeks ago`;
    }
    return `${Math.round(timeSince / TIME_AMOUNTS.months)} months ago`;
  };

  return (
    <header className="flex justify-between items-end mt-10 shrink-0">
      <div className="flex items-end gap-2">
        <span className="font-medium text-4xl">{"pocket wishlist"}</span>
        <span className="text-sm">{``}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-xs text-accent">{`prices updated: ${formatTimeSince(
          lastUpdated ?? -1
        )}`}</span>
        <span className="text-md text-foreground">
          {`${wishlist.username}'s wishlist `}
          <span className="text-sm">{"as of "}</span>
          <b>{formatTimeSince(wishlist.lastUpdated)}</b>
        </span>
      </div>
    </header>
  );
}

export default Header;
