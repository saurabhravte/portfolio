import { createFileRoute } from "@tanstack/react-router";

import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return <ComingSoon title="About" />;
}
