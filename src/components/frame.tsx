import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

/** A small `+` mark that sits on top of the dashed rules (chanhdai.com style). */
function PlusMark({ className }: { className?: string }) {
  return (
    <Plus
      aria-hidden
      className={cn(
        "absolute size-3.5 text-muted-foreground/70",
        className,
      )}
      strokeWidth={1}
    />
  );
}

/**
 * Centered content column framed by dashed vertical rails, like chanhdai.com.
 * Rails run the full height of the page so short pages still show the frame.
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
        "relative mx-auto min-h-[calc(100dvh-6rem)] w-full max-w-2xl px-6",
        className,
      )}
    >
      {/* Vertical side rails */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 border-l border-dashed border-border"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 border-r border-dashed border-border"
      />
      {children}
    </div>
  );
}

/**
 * Horizontal dashed separator with `+` marks at each end, aligned to the
 * PageFrame rails. Use as a direct child of PageFrame content.
 */
export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("relative -mx-6", className)} aria-hidden>
      <div className="border-t border-dashed border-border" />
      <PlusMark className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
      <PlusMark className="right-0 top-0 -translate-y-1/2 translate-x-1/2" />
    </div>
  );
}
