// https://tanstack.com/router/latest/docs/integrations/query
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { routeTree } from "./routeTree.gen";
import "@/styles/globals.css";

export function getRouter() {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    // optionally expose the QueryClient via router context
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
  });

  setupRouterSsrQueryIntegration({
    router,
    queryClient,
    // optional:
    // handleRedirects: true,
    wrapQueryClient: false, // wrapped in __root.tsx
  });

  return router;
}
