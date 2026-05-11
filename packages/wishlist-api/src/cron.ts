import { refreshPrices } from "./jobs/refreshPrices.ts";

const DEFAULT_HOUR_UTC = 8;

// Set REFRESH_HOUR_UTC to disable (any non-numeric value) or shift the run.
// Daily refresh fires once per day at the configured UTC hour. In-process
// setTimeout-based — if the container restarts between scheduling and the
// fire time, the next fire is rescheduled on boot. If the container restarts
// past the fire time, that day's run is skipped (manual POST /refresh-prices
// is the escape hatch).
export function startRefreshCron(): void {
  if (!process.env.KOL_USERNAME || !process.env.KOL_PASSWORD) {
    console.warn(
      "[cron] KOL_USERNAME/KOL_PASSWORD unset — refresh cron disabled"
    );
    return;
  }
  const raw = process.env.REFRESH_HOUR_UTC;
  const hour =
    raw === undefined ? DEFAULT_HOUR_UTC : Number.parseInt(raw, 10);
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
    console.warn(
      `[cron] REFRESH_HOUR_UTC=${raw} is not a valid hour 0-23 — refresh cron disabled`
    );
    return;
  }
  schedule(hour);
}

function schedule(hour: number): void {
  const ms = msUntilNextDailyRun(hour);
  const fireAt = new Date(Date.now() + ms).toISOString();
  console.log(`[cron] next refresh scheduled for ${fireAt}`);
  setTimeout(async () => {
    try {
      const result = await refreshPrices();
      console.log("[cron] refresh complete:", result);
    } catch (e) {
      console.error("[cron] refresh failed:", e);
    }
    schedule(hour);
  }, ms);
}

function msUntilNextDailyRun(hourUtc: number): number {
  const now = new Date();
  const next = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      hourUtc,
      0,
      0
    )
  );
  if (next.getTime() <= now.getTime()) {
    next.setUTCDate(next.getUTCDate() + 1);
  }
  return next.getTime() - now.getTime();
}
