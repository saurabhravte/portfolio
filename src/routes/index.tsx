import { createFileRoute } from "@tanstack/react-router";

import { Logo } from "@/components/logo";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4 px-6 text-center">
      <Logo className="size-16" />
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Saurabh Ravte
      </h1>
      <p className="text-lg text-muted-foreground">Coming soon</p>
    </section>
  );
}
