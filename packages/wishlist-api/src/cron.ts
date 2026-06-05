import { backfillMissingPrices, refreshPrices } from "./jobs/refreshPrices.ts";

const DEFAULT_HOUR_UTC = 8;

// On boot, price any IOTMs that have no row yet — the state a fresh deploy
// lands in right after the daily update PR adds new entries and Coolify
// redeploys. No-ops (no KoL login) when nothing's missing, so it's safe to run
// on every start. Fire-and-forget: a ~minute of mall probing must not block
// the server from serving. Shares the cred guard with the daily cron.
// — claude 06de4a57, 2026-06-02
export function startPriceBackfill(): void {
  if (!process.env.KOL_USERNAME || !process.env.KOL_PASSWORD) {
    console.warn(
      "[backfill] KOL_USERNAME/KOL_PASSWORD unset — startup price backfill skipped"
    );
    return;
  }
  backfillMissingPrices()
    .then((result) => {
      if (result === null) {
        console.log("[backfill] all IOTMs already priced — nothing to do.");
      } else {
        console.log("[backfill] priced new entries:", result);
      }
    })
    .catch((e) => console.error("[backfill] failed:", e));
}

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
