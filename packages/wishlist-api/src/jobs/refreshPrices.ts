import { iotms, type MallPrice } from "wishlist-shared";
import { store } from "../db.ts";
import { searchLowestPrice, type MallResult } from "../kol/mall.ts";
import { fetchPricegun } from "../kol/pricegun.ts";
import { KoLSession } from "../kol/session.ts";

// Item ID 194 is Mr. Accessory — included alongside the IOTMs since the app
// tracks Mr. A prices as a baseline currency reference.
const MR_A_ID = 194;
const MR_A_NAME = "Mr. Accessory";

const RATE_FLOOR_MS = 200;

function numberEnv(name: string, dflt: number): number {
  const raw = process.env[name];
  if (raw === undefined) return dflt;
  const n = Number(raw);
  return Number.isFinite(n) ? n : dflt;
}

// Retry/backoff + recovery knobs. A single mall search occasionally returns an
// "error"-classified page (a non-mall response). Retrying a couple times with
// backoff rescues the transient ones. When errors come in a sustained run —
// the symptom of a collapsed session — one re-login often recovers it; if that
// doesn't help either, we declare a "storm", stop retrying, and let the run
// finish quickly so the next cron can try again rather than spending many
// minutes backing off into a wall.
// — claude 06de4a57, 2026-06-04
const MAX_ATTEMPTS = numberEnv("MALL_RETRY_ATTEMPTS", 2);
const RETRY_BASE_MS = numberEnv("MALL_RETRY_BASE_MS", 750);
const RELOGIN_AFTER = numberEnv("MALL_RELOGIN_AFTER", 5);
const STORM_AFTER = numberEnv("MALL_STORM_AFTER", 8);
const DIAG_FULL_DUMPS = numberEnv("MALL_DIAG_DUMPS", 3);

async function searchWithRetry(
  session: KoLSession,
  name: string,
  maxAttempts: number,
): Promise<{ result: MallResult; tries: number }> {
  let result: MallResult = { kind: "error", reason: "no attempt made" };
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    result = await searchLowestPrice(session, name);
    if (result.kind !== "error") return { result, tries: attempt };
    if (attempt < maxAttempts) {
      await Bun.sleep(RETRY_BASE_MS * 2 ** (attempt - 1));
    }
  }
  return { result, tries: maxAttempts };
}

// Sentinel written to prices.lowest_mall when KoL's mall search explicitly
// returns "no results" for an item. Distinct from NULL (which means "we
// haven't successfully probed this") so the frontend can render the
// mall-extinct state (∞) instead of the unknown state (X).
const MALL_EMPTY_SENTINEL = -1;

type Target = { id: number; name: string };

export type RefreshSummary = {
  itemsAttempted: number;
  // Items KoL returned a real price for.
  lowestMallListed: number;
  // Items KoL explicitly reported no listings for. Persisted as the empty
  // sentinel so the UI can show ∞ instead of X.
  lowestMallEmpty: number;
  // Items where the scrape didn't get a trustworthy answer (network/HTTP
  // failure, login wall, malformed response). Not persisted — leaves the
  // last-known-good value in the DB; eligible for retry on the next cron.
  lowestMallErrors: number;
  // Items that errored on the first try but a retry rescued (counted in
  // listed/empty, not errors).
  retriedItems: number;
  // How many times a sustained error run triggered an in-run re-login.
  reloginCount: number;
  // True if errors persisted past re-login and we stopped retrying for the
  // rest of the run (a KoL-side bad window rather than a recoverable session).
  stormMode: boolean;
  pricegunCount: number;
  durationMs: number;
};

export async function refreshPrices(): Promise<RefreshSummary> {
  const targets: Target[] = [
    { id: MR_A_ID, name: MR_A_NAME },
    ...iotms.map((i) => ({ id: i.packaged_id, name: i.packaged_name })),
  ];
  return runRefresh(targets);
}

// Price just the IOTMs that have no row in the prices table yet — the state a
// fresh deploy lands in after the daily update PR adds new entries. Returns
// null (and never logs into KoL) when nothing is missing, so it's cheap to
// call unconditionally on every boot. The targeted probe means a new-entry
// deploy gets its prices in seconds instead of waiting up to a day for the
// next cron.
// — claude 06de4a57, 2026-06-02
export async function backfillMissingPrices(): Promise<RefreshSummary | null> {
  const priced = store.getPricedItemIds();
  const missing: Target[] = iotms
    .filter((i) => !priced.has(i.packaged_id))
    .map((i) => ({ id: i.packaged_id, name: i.packaged_name }));
  // Mr. A is the baseline currency; price it too if it's somehow unpriced
  // (e.g. a brand-new empty DB), but don't drag it in once it has a row.
  if (!priced.has(MR_A_ID)) missing.unshift({ id: MR_A_ID, name: MR_A_NAME });
  if (missing.length === 0) return null;
  return runRefresh(missing);
}

async function runRefresh(targets: Target[]): Promise<RefreshSummary> {
  const username = process.env.KOL_USERNAME;
  const password = process.env.KOL_PASSWORD;
  if (!username || !password) {
    throw new Error("KOL_USERNAME and KOL_PASSWORD must be set");
  }

  const started = Date.now();

  // --- KoL mall pass ---
  const session = new KoLSession();
  await session.login(username, password);

  const lowestMall: MallPrice = {};
  let listed = 0;
  let empty = 0;
  let errors = 0;
  let retriedItems = 0;
  let reloginCount = 0;
  let stormMode = false;
  let reloggedIn = false;
  let consecutiveErrors = 0;
  let fullDumps = 0;
  let last = 0;
  for (const target of targets) {
    const wait = RATE_FLOOR_MS - (Date.now() - last);
    if (wait > 0) await Bun.sleep(wait);
    last = Date.now();

    // In storm mode the whole window is failing, so retries only burn time —
    // one attempt per item and let the next cron catch up.
    const { result, tries } = await searchWithRetry(
      session,
      target.name,
      stormMode ? 1 : MAX_ATTEMPTS,
    );

    switch (result.kind) {
      case "listed":
        lowestMall[target.id] = result.price;
        listed += 1;
        if (tries > 1) retriedItems += 1;
        consecutiveErrors = 0;
        break;
      case "empty":
        lowestMall[target.id] = MALL_EMPTY_SENTINEL;
        empty += 1;
        if (tries > 1) retriedItems += 1;
        consecutiveErrors = 0;
        break;
      case "error": {
        errors += 1;
        consecutiveErrors += 1;
        const d = result.diag;
        // Dump the actual page (visible text) for the first few errors of a
        // run so a novel failure mode is diagnosable; thereafter log compactly.
        if (d && fullDumps < DIAG_FULL_DUMPS) {
          fullDumps += 1;
          console.error(
            `mall search error for ${target.id} "${target.name}": ${result.reason} | http ${d.status} len ${d.bodyLen} title=${JSON.stringify(d.title)} :: ${d.snippet}`,
          );
        } else if (d) {
          console.error(
            `mall search error for ${target.id} "${target.name}": ${result.reason} | http ${d.status} len ${d.bodyLen}`,
          );
        } else {
          console.error(
            `mall search error for ${target.id} "${target.name}": ${result.reason}`,
          );
        }

        // Recovery ladder: a sustained error run usually means the session
        // collapsed — try one re-login. If errors keep coming after that, it's
        // a KoL-side bad window, not our session: enter storm mode and stop
        // retrying for the rest of the run.
        if (!reloggedIn && consecutiveErrors >= RELOGIN_AFTER) {
          reloggedIn = true;
          reloginCount += 1;
          try {
            await session.login(username, password);
            console.warn(
              `[refresh] re-logged in after ${consecutiveErrors} consecutive errors`,
            );
          } catch (e) {
            console.error(`[refresh] re-login failed: ${e}`);
          }
          consecutiveErrors = 0;
        } else if (
          reloggedIn &&
          !stormMode &&
          consecutiveErrors >= STORM_AFTER
        ) {
          stormMode = true;
          console.warn(
            `[refresh] error storm persisted past re-login — disabling retries for the rest of this run`,
          );
        }
        break;
      }
    }
  }
  store.setLowestMall(lowestMall);

  // --- Pricegun pass ---
  const pricegun = await fetchPricegun(targets.map((t) => t.id));
  store.setPricegun(pricegun);

  return {
    itemsAttempted: targets.length,
    lowestMallListed: listed,
    lowestMallEmpty: empty,
    lowestMallErrors: errors,
    retriedItems,
    reloginCount,
    stormMode,
    pricegunCount: pricegun.length,
    durationMs: Date.now() - started,
  };
}
