import { QueryClient, queryOptions, mutationOptions } from "@tanstack/react-query";
import { createRouter, createRootRouteWithContext, createFileRoute, lazyRouteComponent, useRouter, Outlet, HeadContent, Scripts } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { jsx, jsxs } from "react/jsx-runtime";
import { StrictMode, useState, useEffect, createContext, use } from "react";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faArrowUpWideShort, faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";
import * as Color from "color-bits";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { z } from "zod";
const globalsCss = "/assets/globals-BzZyVBL8.css";
const texturesCss = "/assets/textures-GlTIGsta.css";
const interWoff2 = "/assets/inter-latin-wght-normal-Dx4kXJAl.woff2";
const robotoMonoWoff2 = "/assets/roboto-mono-latin-wght-normal-CZtBPCCa.woff2";
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
  const [theme, setTheme] = useState(system());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const metaTheme = typeof document !== "undefined" ? document.querySelector(`meta[name="theme-color"]`) : null;
  useEffect(() => {
    const cachedTheme = localStorage.getItem(KEY);
    setTheme(cachedTheme ?? system());
    document.documentElement.setAttribute(
      "data-theme",
      cachedTheme ?? system()
    );
    metaTheme?.setAttribute(
      "content",
      (cachedTheme ?? system()) === "light" ? LIGHT : DARK
    );
    if (cachedTheme === null) localStorage.setItem(KEY, system());
  }, [metaTheme]);
  async function set(t) {
    setIsTransitioning(true);
    if (!document.startViewTransition) {
      setTheme(t);
      localStorage.setItem(KEY, t);
      setIsTransitioning(false);
      return;
    }
    if (metaTheme) handleAnimateThemeColor(metaTheme, t);
    const transition = document.startViewTransition(() => {
      document.documentElement.setAttribute("data-theme", t);
      setTheme(t);
      localStorage.setItem(KEY, t);
    });
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
library.add(faHome, faArrowUpWideShort, faArrowDownShortWide);
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
        {
          rel: "preload",
          href: interWoff2,
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous"
        },
        {
          rel: "preload",
          href: robotoMonoWoff2,
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous"
        },
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
  const router2 = useRouter();
  const queryClient = router2.options.context.queryClient;
  const persister = createAsyncStoragePersister({
    storage: typeof window !== "undefined" ? window.localStorage : void 0
  });
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(
    PersistQueryClientProvider,
    {
      client: queryClient,
      persistOptions: {
        persister,
        dehydrateOptions: {
          // only persist these keys (prices and images)
          // see: https://github.com/TanStack/query/discussions/7131
          shouldDehydrateQuery: (query) => ["img", "mallPrices"].includes(query.queryKey[0])
        }
      },
      children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(Outlet, {}) })
    }
  ) }) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { suppressHydrationWarning: true, style: { scrollbarGutter: "stable" }, children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$1 = () => import("./_userId-DQfGNYoZ.mjs");
const Route$1 = createFileRoute("/$userId")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const WishlistSchema = z.record(
  z.coerce.number(),
  // JSON keys are strings
  z.literal(["NONE", "PACKAGED", "OPENED", "WISHED"])
);
const WishlistResponseSchema = z.object({
  username: z.string(),
  userId: z.number(),
  wishlist: WishlistSchema,
  lastUpdated: z.number()
});
z.object({
  userId: z.number(),
  auth: z.string(),
  itemUpdates: z.array(
    z.object({
      id: z.number(),
      status: z.boolean()
    })
  )
});
const PriceGunSalesDataSchema = z.object({
  date: z.coerce.date(),
  unitPrice: z.number(),
  quantity: z.number()
});
const PriceGunHistoricalDataSchema = z.object({
  itemId: z.number(),
  date: z.coerce.date(),
  volume: z.number(),
  price: z.coerce.number()
  // TODO: this coercion is to get around a type bug with pricegun
});
const PriceGunSchema = z.object({
  // value across ALL transactions, not just past 2 weeks
  value: z.number(),
  // volume across the past 2 weeks
  volume: z.number(),
  // last time the price value was calculated by PriceGun
  date: z.coerce.date(),
  // JSON dates are strings
  itemId: z.number(),
  name: z.string().nullable(),
  // new IOTMs can have a missing name field, I guess?
  image: z.string(),
  sales: z.array(PriceGunSalesDataSchema),
  history: z.array(PriceGunHistoricalDataSchema)
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
    const result = MallPriceResponseSchema.safeParse(query.state.data);
    if (result.success) {
      const sinceLastUpdated = Date.now() - result.data.lastUpdated.getTime();
      return 24 * 60 * 60 * 1e3 - sinceLastUpdated;
    }
    return 5e3;
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
  queryFn: () => fetchWishlist(userId),
  staleTime: 5e3,
  // prevent client for immediately refetching
  refetchOnWindowFocus: false
  // a bit much
});
async function requestWishlistToggle(body) {
  const url = `https://resprit--dd94f3deb77f11f08e0c0224a6c84d84.web.val.run/toggle-wishlist`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch wishlist: ${response.statusText}`);
  }
  return response.json();
}
const toggleWishlistMutation = (userId) => mutationOptions({
  mutationFn: ({
    itemUpdates,
    auth = ""
  }) => requestWishlistToggle({ userId, auth, itemUpdates }),
  onMutate: async ({
    itemUpdates,
    auth
  }, context) => {
    const prevWishlist = context.client.getQueryData(["wishlist", userId]);
    if (prevWishlist === void 0)
      throw new Error("Couldn't update wishlist");
    const updatedWishlist = structuredClone(prevWishlist);
    itemUpdates.forEach(({ id, status }) => {
      updatedWishlist.wishlist[id] = status ? "WISHED" : "NONE";
    });
    context.client.setQueryData(["wishlist", userId], updatedWishlist);
    return { prevWishlist };
  },
  onError: async (_err, _vars, result, context) => {
    context.client.setQueryData(["wishlist", userId], result?.prevWishlist);
  }
});
const $$splitComponentImporter = () => import("./index-CgV9PoMv.mjs");
const Route = createFileRoute("/")({
  // preload: https://tanstack.com/router/latest/docs/integrations/query#preload-with-a-loader-and-read-with-a-hook
  loader: async ({
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
    defaultPreload: "intent",
    // NOTE: hardcoding the GitHub Pages basepath because it's easy
    basepath: process.env.SSR === "false" ? "/pocket-wishlist/" : "/"
  });
  setupRouterSsrQueryIntegration({
    router: router2,
    queryClient,
    // optional:
    // handleRedirects: true,
    wrapQueryClient: false
    // wrapped in __root.tsx
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  MallPriceResponseSchema as M,
  mallPricesQuery as m,
  router as r,
  toggleWishlistMutation as t,
  useTheme as u,
  wishlistQuery as w
};
