export function ComingSoon({ title }: { title: string }) {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground">Coming soon</p>
    </section>
  );
}
