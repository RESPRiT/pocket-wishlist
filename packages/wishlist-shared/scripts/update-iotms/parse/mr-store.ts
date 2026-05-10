export type IndexEntry = {
  packaged_name: string;
  year: number;
  /** Undefined for entries that have no associated month (e.g. annual IOTYs). */
  month?: number;
};

/**
 * Parses the Mr. Store wiki page wikitext into an ordered list of IOTM
 * index entries.
 *
 * The page contains several tables; we walk row-by-row and use two cues:
 *
 * 1. A "monthly" table is one whose header row contains `!Jan ... !Dec`.
 *    Year rows in such a table have 12 data cells; each `{{StackItem|name}}`
 *    we find in cell N gets month=N.
 * 2. Other tables are item-of-the-year tables. For "YYYY" headers we take
 *    only the first cell (the packaged form). For "YYYY-YYYY" range headers
 *    (used pre-2017 when two familiars shared a year) we take both first
 *    cells, with the *later* year — matching the convention in iotms.ts.
 */
export function parseIndex(wikitext: string): IndexEntry[] {
  type Cell = { names: string[] };
  type Row = { year1: number; year2?: number; cells: Cell[] };

  const entries: IndexEntry[] = [];
  const lines = wikitext.split("\n");
  let inMonthlyTable = false;
  let row: Row | null = null;

  const flush = () => {
    if (!row) return;
    if (inMonthlyTable) {
      // Year rows in the monthly grid have 12 ordered cells. Skip rows that
      // don't (e.g. legend/note rows mixed into the same table).
      if (row.cells.length >= 12) {
        for (let m = 1; m <= 12; m++) {
          const cell = row.cells[m - 1];
          if (!cell) continue;
          for (const name of cell.names) {
            entries.push({ packaged_name: name, year: row.year1, month: m });
          }
        }
      }
    } else {
      const year = row.year2 ?? row.year1;
      const take = row.year2 ? 2 : 1;
      for (const cell of row.cells.slice(0, take)) {
        for (const name of cell.names) {
          entries.push({ packaged_name: name, year });
        }
      }
    }
    row = null;
  };

  for (const rawLine of lines) {
    const line = rawLine;

    // Table boundaries.
    if (/^\s*\{\|/.test(line)) {
      // New table begins; reset monthly flag (set on header detection below).
      flush();
      inMonthlyTable = false;
      continue;
    }
    if (/^\s*\|\}/.test(line)) {
      flush();
      inMonthlyTable = false;
      continue;
    }

    // Detect Jan/Dec month-name headers → this table is the monthly grid.
    // Headers can be on the same line (`!Jan!!Feb`) or one per line (`!Jan`).
    if (/^!\s*Jan\b/.test(line) && /^[!|].*Dec\b/.test(line)) inMonthlyTable = true;
    else if (/^!\s*Dec\b/.test(line)) inMonthlyTable = true;

    // Detect a year-header row. Year headers in this page look like:
    //   ! style="..." | 2026
    //   ! style="..." | 2010-2011
    const yearMatch = line.match(/^!.*\|\s*(\d{4})(?:\s*-\s*(\d{4}))?\s*$/);
    if (yearMatch) {
      flush();
      row = { year1: Number(yearMatch[1]), cells: [] };
      if (yearMatch[2]) row.year2 = Number(yearMatch[2]);
      continue;
    }

    // Row separator inside a table → flush the row we were building.
    if (/^\s*\|-/.test(line)) {
      flush();
      continue;
    }

    // Data cell. Only count if we're inside a year row.
    if (row && /^\s*\|/.test(line)) {
      // {{StackItem|name}} or {{StackItem|name|display-text}}.
      // The first arg is the canonical name; display text is for line-wrap formatting.
      const names = [...line.matchAll(/\{\{StackItem\|([^|}]+)(?:\|[^}]*)?\}\}/g)].map((m) => m[1]!.trim());
      row.cells.push({ names });
    }
  }
  flush();

  // Sort chronologically. IOTY entries (no month) sort to the start of their
  // year (month=0), since the IOTY headlines the year and is released around
  // January. Keep this in sync with `knownBefore` and `anchorKey`.
  entries.sort((a, b) => {
    const am = a.month ?? 0;
    const bm = b.month ?? 0;
    return a.year * 100 + am - (b.year * 100 + bm);
  });

  // Deduplicate (the wikitext can list the same StackItem in multiple tables).
  const seen = new Set<string>();
  return entries.filter((e) => {
    const key = `${e.packaged_name}@${e.year}-${e.month ?? "x"}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
