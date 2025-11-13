// https://tanstack.com/start/latest/docs/framework/react/build-from-scratch
/// <reference types="vite/client" />
import { StrictMode, type ReactNode } from "react";
import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import globalsCss from "@/styles/globals.css?url";
import texturesCss from "@/styles/textures.css?url";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
config.autoAddCss = false; // https://stackoverflow.com/a/59429852

// add font-awesome icons
library.add(fas, far);

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: "pocket wishlist",
        },
        {
          name: "theme",
        },
      ],
      links: [
        { rel: "stylesheet", href: globalsCss },
        { rel: "stylesheet", href: texturesCss },
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
        `,
        },
      ],
    }),
    component: RootComponent,
  },
);

function RootComponent() {
  const router = useRouter();
  const queryClient = router.options.context.queryClient;
  const persister = createAsyncStoragePersister({
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  });

  return (
    <RootDocument>
      <StrictMode>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{
            persister,
            dehydrateOptions: {
              // only persist these keys (prices and images)
              // see: https://github.com/TanStack/query/discussions/7131
              shouldDehydrateQuery: (query) =>
                ["img", "mallPrices"].includes(query.queryKey[0] as string),
            },
          }}
        >
          <ThemeProvider>
            <Outlet />
          </ThemeProvider>
        </PersistQueryClientProvider>
      </StrictMode>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
