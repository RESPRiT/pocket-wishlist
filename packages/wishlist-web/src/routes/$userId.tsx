import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$userId")({
  component: RouteComponent,
});

// TODO: Populate
function RouteComponent() {
  return <div>Hello "/$userId"!</div>;
}
