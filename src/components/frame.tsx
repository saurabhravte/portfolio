import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

/** A small `+` mark that sits on top of the dashed rules (editorial style). */
function PlusMark({ className }: { className?: string }) {
  return (
    <Plus
      aria-hidden
      className={cn("absolute size-3.5 text-muted-foreground/70", className)}
      strokeWidth={1}
    />
  );
}

/**
 * Centered content column. Side rails removed per request — the layout now
 * relies on the grid-paper background and dashed section dividers instead.
 */
export function PageFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto min-h-[calc(100dvh-6rem)] w-full max-w-6xl px-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Horizontal dashed separator with `+` marks at each end.
 */
export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("relative -mx-4", className)} aria-hidden>
      <div className="border-t border-dashed border-border" />
      <PlusMark className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
      <PlusMark className="right-0 top-0 -translate-y-1/2 translate-x-1/2" />
    </div>
  );
}

/**
 * Section heading in the poster's editorial style: a small orange index label
 * above a large serif title.
 */
export function SectionHeader({
  index,
  label,
  title,
  className,
}: {
  index?: string;
  label: string;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-6", className)}>
      <span className="brand-highlight inline-block rounded-[3px] px-1.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
        {index ? `${index} · ` : ""}
        {label}
      </span>
      <h2 className="mt-3 font-serif text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
