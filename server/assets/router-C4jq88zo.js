import { queryOptions, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, createContext, use, StrictMode } from "react";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import * as Color from "color-bits";
import { useLocalStorage } from "usehooks-ts";
import { z } from "zod";
const globalsCss = "/assets/globals-BMmbv9Xw.css";
const texturesCss = "/assets/textures-iRdHByZ0.css";
const KEY = "theme";
const DARK = "oklch(26.7% 0.048517 219.8)";
const LIGHT = "oklch(97.4% 0.026053 90.1)";
const DURATION = 350;
const system = () => typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const ThemeContext = createContext({
  theme: system(),
  setTheme: () => null,
  toggleTheme: () => null,
  isTransitioning: false
});
const handleAnimateThemeColor = (metaTheme, theme, progress = 0) => {
  if (progress > 1) return;
  const start = Color.parse(theme === "light" ? DARK : LIGHT);
  const end = Color.parse(theme === "light" ? LIGHT : DARK);
  const duration = DURATION;
  let timeStart = 0;
  function step(timestamp) {
    if (timeStart === 0) timeStart = timestamp;
    const progress2 = (timestamp - timeStart) / duration;
    const mix = Color.blend(start, end, Math.min(1, progress2));
    metaTheme.setAttribute("content", Color.format(mix));
    if (progress2 > 1) return;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
};
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage(KEY, system(), {
    serializer: (s) => s ?? "",
    deserializer: (s) => s
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const metaTheme = typeof document !== "undefined" ? document.querySelector(`meta[name="theme-color"]`) : null;
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    metaTheme?.setAttribute("content", theme === "light" ? LIGHT : DARK);
    if (localStorage.getItem(KEY) === null) setTheme(system());
  }, [theme, setTheme, metaTheme]);
  async function set(t) {
    setIsTransitioning(true);
    if (!document.startViewTransition) {
      setTheme(t);
      setIsTransitioning(false);
      return;
    }
    if (metaTheme) handleAnimateThemeColor(metaTheme, t);
    const transition = document.startViewTransition(() => setTheme(t));
    await transition.finished;
    setIsTransitioning(false);
  }
  const toggleTheme = () => {
    set(theme === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ jsx(
    ThemeContext,
    {
      value: {
        theme,
        setTheme: set,
        toggleTheme,
        isTransitioning
      },
      children
    }
  );
};
function useTheme() {
  const context = use(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme used outside of a ThemeProvider");
  }
  return context;
}
config.autoAddCss = false;
library.add(fas, far);
const Route$2 = createRootRouteWithContext()(
  {
    head: () => ({
      meta: [
        {
          charSet: "utf-8"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          title: "pocket wishlist"
        },
        {
          name: "theme"
        }
      ],
      links: [
        { rel: "stylesheet", href: globalsCss },
        { rel: "stylesheet", href: texturesCss }
      ],
      scripts: [
        {
          // set the page theme based on client settings (server always renders light)
          children: `
          (function() {
            const theme = localStorage.getItem("theme") 
              || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
            document.documentElement.setAttribute("data-theme", theme);
          })();
        `
        }
      ]
    }),
    component: RootComponent
  }
);
function RootComponent() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(Outlet, {}) }) }) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$1 = () => import("./_userId-DQfGNYoZ.js");
const Route$1 = createFileRoute("/$userId")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const WishlistSchema = z.record(
  z.coerce.number(),
  // JSON keys are strings
  z.literal(["NONE", "PACKAGED", "OPENED"])
);
const WishlistResponseSchema = z.object({
  username: z.string(),
  userId: z.number(),
  wishlist: WishlistSchema,
  lastUpdated: z.number()
});
const PriceGunSchema = z.object({
  // value across ALL transactions, not just past 2 weeks
  value: z.number(),
  // volume across the past 2 weeks
  volume: z.number(),
  // last time the price value was calculated by PriceGun
  date: z.coerce.date(),
  // JSON dates are strings
  itemId: z.number()
});
z.array(PriceGunSchema);
z.record(z.coerce.number(), z.number());
const PriceSchema = z.object({
  // from lowest mall
  lowestMall: z.number(),
  // from pricegun
  value: z.number().optional(),
  volume: z.number().optional()
});
const CombinedPriceSchema = z.record(
  z.coerce.number(),
  PriceSchema
);
const MallPriceResponseSchema = z.object({
  prices: CombinedPriceSchema,
  lastUpdated: z.coerce.date()
});
z.object({
  img: z.string(),
  packaged_id: z.coerce.number(),
  packaged_name: z.string(),
  opened_ids: z.optional(
    z.union([z.coerce.number(), z.array(z.coerce.number())])
  ),
  opened_names: z.optional(z.union([z.string(), z.array(z.string())])),
  familiar_ids: z.optional(
    z.union([z.coerce.number(), z.array(z.coerce.number())])
  ),
  familiar_names: z.optional(z.union([z.string(), z.array(z.string())])),
  skill_ids: z.optional(
    z.union([z.coerce.number(), z.array(z.coerce.number())])
  ),
  skill_names: z.optional(z.union([z.string(), z.array(z.string())])),
  year: z.coerce.number(),
  month: z.optional(z.coerce.number()),
  speed_tier: z.optional(z.coerce.number()),
  aftercore_tier: z.optional(z.coerce.number()),
  tradeable: z.boolean(),
  type: z.string(),
  equipment_slot: z.optional(z.string()),
  is_ioty: z.optional(z.boolean()),
  is_con: z.optional(z.boolean())
});
async function fetchMallPrices() {
  const url = "https://resprit--dd94f3deb77f11f08e0c0224a6c84d84.web.val.run/get-prices";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch mall prices: ${response.statusText}`);
  }
  const mallprices = await response.json();
  return MallPriceResponseSchema.parse(mallprices);
}
const mallPricesQuery = queryOptions({
  queryKey: ["mallPrices"],
  queryFn: fetchMallPrices,
  staleTime: (query) => {
    const lastUpdated = query.state.data?.lastUpdated;
    if (lastUpdated !== void 0) {
      const sinceLastUpdated = Date.now() - lastUpdated.getTime();
      return 24 * 60 * 60 * 1e3 - sinceLastUpdated;
    }
    return 0;
  }
});
async function fetchWishlist(userId = 1927026) {
  const url = `https://resprit--dd94f3deb77f11f08e0c0224a6c84d84.web.val.run/get-wishlist?u=${userId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch wishlist: ${response.statusText}`);
  }
  const wishlist = await response.json();
  return WishlistResponseSchema.parse(wishlist);
}
const wishlistQuery = (userId) => queryOptions({
  queryKey: ["wishlist", userId],
  queryFn: () => fetchWishlist(userId)
});
const $$splitComponentImporter = () => import("./index-BcHGsuwb.js");
const Route = createFileRoute("/")({
  loader: ({
    context
  }) => {
    context.queryClient.ensureQueryData(wishlistQuery(1927026));
    context.queryClient.ensureQueryData(mallPricesQuery);
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const UserIdRoute = Route$1.update({
  id: "/$userId",
  path: "/$userId",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  UserIdRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    // optionally expose the QueryClient via router context
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent"
  });
  setupRouterSsrQueryIntegration({
    router: router2,
    queryClient
    // optional:
    // handleRedirects: true,
    // wrapQueryClient: true,
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  mallPricesQuery as m,
  router as r,
  useTheme as u,
  wishlistQuery as w
};
