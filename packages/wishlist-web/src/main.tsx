import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faArrowUpWideShort,
  faArrowDownShortWide,
} from "@fortawesome/free-solid-svg-icons";

import { getRouter } from "./router";
import { hydrateBootstrap } from "./lib/bootstrap";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/globals.css";
import "./styles/textures.css";

config.autoAddCss = false; // https://stackoverflow.com/a/59429852
library.add(faHome, faArrowUpWideShort, faArrowDownShortWide);

const router = getRouter();
const queryClient = router.options.context.queryClient;

// Seed React Query from <script id="__BOOTSTRAP__"> before first render.
// No prerender / hydration → no mismatch concern; queries observe data
// immediately on mount.
hydrateBootstrap(queryClient);

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
});

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("#root not found");

createRoot(rootEl).render(
  <StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </PersistQueryClientProvider>
  </StrictMode>,
);
