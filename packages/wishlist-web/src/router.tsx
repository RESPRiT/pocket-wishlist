import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const queryClient = new QueryClient();

  return createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    // Use Vite's BASE_URL so the router matches the deployment base path
    // (GH Pages builds set it to "/pocket-wishlist/", root builds to "/").
    basepath: import.meta.env.BASE_URL,
  });
}
