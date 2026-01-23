import { mallPricesQuery } from "@/api/mall";
import { wishlistQuery } from "@/api/wishlist";
import App from "@/App";
//import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

type UserSearch = {
  u?: number;
};

// TODO: All this SSR stuff needs to be re-worked for prefetching to function properly
export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): UserSearch => {
    return {
      u: search.u ? Number(search.u) : undefined,
    };
  },
  loaderDeps: ({ search }) => ({
    u: search.u,
  }),
  // preload: https://tanstack.com/router/latest/docs/integrations/query#preload-with-a-loader-and-read-with-a-hook
  loader: async ({ context, deps }) => {
    if (deps.u) {
      context.queryClient.ensureQueryData(wishlistQuery(deps.u));
    }
    context.queryClient.ensureQueryData(mallPricesQuery);
    // await Promise.all([
    //   context.queryClient.prefetchQuery(wishlistQuery(1927026)),
    //   context.queryClient.prefetchQuery(mallPricesQuery),
    // ]);
  },
  component: Index,
});

function Index() {
  const { u: userId } = Route.useSearch();
  //useSuspenseQuery(wishlistQuery(1927026));
  //useSuspenseQuery(mallPricesQuery);
  //useQuery(wishlistQuery(1927026));
  //useQuery(mallPricesQuery);
  return <App userId={userId} />;
}
