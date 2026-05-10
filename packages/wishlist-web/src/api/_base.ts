// Defaults to the legacy Val Town deployment so the GH Pages build keeps
// working out of the box. VPS image builds override via VITE_API_BASE.
export const API_BASE =
  import.meta.env.VITE_API_BASE ??
  "https://resprit--dd94f3deb77f11f08e0c0224a6c84d84.web.val.run";
