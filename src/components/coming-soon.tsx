import { Divider } from "@/components/frame";

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <Divider className="my-6" />
      <p className="text-lg text-muted-foreground">Coming soon</p>
    </div>
  );
}
