import { createFileRoute } from "@tanstack/react-router";

import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/blogs")({
  component: Blogs,
});

function Blogs() {
  return <ComingSoon title="Blogs" />;
}
