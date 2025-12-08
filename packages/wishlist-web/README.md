**pocket wishlist** is a web app that helps you manage your IOTM wishlist.

# TO-DOs

## IN PROGRESS

## UP NEXT

- [ ] Much, much better price determination logic between pricegun and lowest mall

## ON DECK

### Minimap

- [ ] Add year/tier data to minimap
- [ ] Consider using canvas instead of <div>s
- [ ] Use additional contast in minimap colors

### Theming

- [ ] Add cookies, headers for syncing server theme with client theme

### Else

- [o] Better semantics for theme toggle
- [ ] Add labels to all sorts of text
- [x] List all IOTMs via `iotm.json`
  - [ ] (stub) Use better data flow pattern
- [x] Get and cache images from KOL.com
  - [ ] Add familiar images to `iotm.json`
  - [ ] Add opened images to `iotm.json`
- [x] Generate wiki links
  - [ ] Wiki links in a new tab
- [x] Get and cache pricegun data
- [x] Un-hardcore Mr. A cost calculation
- [x] Add basic responsiveness to List
  - [x] Add clamping for scaling
    - [ ] Fix virtualization for rows of 2 items at mid-sizes (lanes option)
- [x] Darken at price
- [ ] (stub) Implement ListControlMenu
  - [x] Sorting options
    - [x] (!!!) Implement lazy loading to prevent rendering lag (especially on sort)
    - [ ] Pre-load virtualized images
    - [x] Update price sorting to tie-break on date
  - [ ] Tier weights
  - [ ] Toggle display name/icon
  - [ ] Total cost of wishlist
  - [ ] Historical price trends
  - [ ] Toggle compact/label-less rows
  - [ ] Search for entry
    - [ ] Ctrl-K for search
  - [ ] Filter options
    - [ ] Filter favorite
    - [ ] Filter owned/unowned
- [ ] (stub) Design UI for:
  - [x] Con indicator
  - [x] IOTY indicator
  - [ ] Misc. indicator
  - [x] Standard indicator
    - [x] Double-encoded indicator
  - [o] Slot indicator
  - [ ] Derivatives
  - [ ] Price trends indicator
  - [ ] Sales volume indicator
  - [ ] Scroll progress indicator
  - [x] Item type indicator/replace item label with type
  - [x] Ownership indicator
  - [ ] Tradeable indicator
  - [x] Price estimate type indicator
    - [x] Hover text
- [ ] (stub) Get data for:
  - [ ] Summary descriptions
  - [x] Lowest mall price
    - [ ] Special mall handling for foldables
    - [x] (!) Setup mall price endpoint and retrieve from there
      - [ ] Auto-update mall price endpoint
- [ ] (stub) Loading indicators
  - [x] Image loading
  - [ ] Economy data loading
- [o] (stub) Wishlist feature
  - [x] Detect ownership
    - [x] Mafia script to detect ownership
    - [x] Endpoint to update and store ownership
    - [x] Retrieve ownership status in frontend
  - [ ] Shareable wishlist
- [ ] Custom/opinionated sections
- [ ] Grid view
- [ ] Click name to copy to clipboard
- [ ] Click price to link to mall
  - [ ] Mafia/KOL toggle
- [ ] Back to top button
- [ ] Featured "this month's IOTM"
- [ ] Features "today's raffle IOTM"
- [ ] (stub) a11y audit
- [ ] Rehaul colors for better contrast consistency
- [ ] Standardize date/time units

## TABLED

- [ ] Move ribbon label to top for small sizes
- [ ] Darken at the bottom of year; lighten at the top of tier;

## DONE

### SSR

- [x] Idk, many things

### Minimap

- [x] Click anywhere to jump

### Else

- [x] Update prettier config/plugins for Tailwind classes
- [x] Remove data handling logic from List.tsx
- [x] Decompose ListEntry.tsx in simpler component
- [x] Remove color handling logic from ListEntry.tsx
- [x] Wishlist last updated indicator
- [x] Data validation
  - [x] Write api schemas
  - [x] Implement on api
  - [x] Implement on web
- [x] Price last updated indicator
  - [x] Add last updated field to mall-price
- [x] Dark mode
  - [x] Color pallette
  - [x] Theming
- [x] Color scale for year badge
- [x] Color scale for tier badge
