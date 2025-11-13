import { mallPricesQuery } from "@/api/mall";
import { wishlistQuery } from "@/api/wishlist";
import App from "@/App";
//import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  // preload: https://tanstack.com/router/latest/docs/integrations/query#preload-with-a-loader-and-read-with-a-hook
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(wishlistQuery(1927026));
    context.queryClient.ensureQueryData(mallPricesQuery);
  },
  component: Index,
});

function Index() {
  //useSuspenseQuery(wishlistQuery(1927026));
  //useSuspenseQuery(mallPricesQuery);
  return <App />;
}
