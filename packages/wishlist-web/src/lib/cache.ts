export function isCacheStale(
  lastUpdatedKey: string,
  maxAge: number = 24 * 60 * 60 * 1000 // 24 hours default
): boolean {
  const lastUpdated = localStorage.getItem(lastUpdatedKey);
  if (!lastUpdated) return true;

  const timestamp = parseInt(lastUpdated);
  if (isNaN(timestamp)) return true;

  return Date.now() - timestamp > maxAge;
}

export function getCachedData<T>(cacheKey: string): T | null {
  const cached = localStorage.getItem(cacheKey);
  if (!cached) return null;

  try {
    return JSON.parse(cached) as T;
  } catch (error) {
    console.error(`Failed to parse cached data for ${cacheKey}:`, error);
    return null;
  }
}

export function setCachedData<T>(
  cacheKey: string,
  timestampKey: string,
  data: T,
  timestamp?: string
): void {
  try {
    localStorage.setItem(cacheKey, JSON.stringify(data));
    localStorage.setItem(timestampKey, timestamp ?? String(Date.now()));
  } catch (error) {
    console.error(`Failed to cache data for ${cacheKey}:`, error);
  }
}
