import { mallPricesQuery } from "@/api/mall";
import { wishlistQuery } from "@/api/wishlist";
import App from "@/App";
//import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

// TODO: All this SSR stuff needs to be re-worked for prefetching to function properly
export const Route = createFileRoute("/")({
  // preload: https://tanstack.com/router/latest/docs/integrations/query#preload-with-a-loader-and-read-with-a-hook
  loader: async ({ context }) => {
    context.queryClient.ensureQueryData(wishlistQuery(1927026));
    context.queryClient.ensureQueryData(mallPricesQuery);
    // await Promise.all([
    //   context.queryClient.prefetchQuery(wishlistQuery(1927026)),
    //   context.queryClient.prefetchQuery(mallPricesQuery),
    // ]);
  },
  component: Index,
});

function Index() {
  //useSuspenseQuery(wishlistQuery(1927026));
  //useSuspenseQuery(mallPricesQuery);
  //useQuery(wishlistQuery(1927026));
  //useQuery(mallPricesQuery);
  return <App />;
}
