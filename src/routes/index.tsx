import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4 px-6 text-center" />
  );
}
