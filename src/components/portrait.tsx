import { cn } from "@/lib/utils";

/**
 * Poster-style cutout portrait: sits on grid paper with an offset orange
 * outline. Grayscale by default, full color on hover (a nod to chanhdai's
 * lights-on/off avatar).
 */
export function Portrait({ className }: { className?: string }) {
  return (
    <div className={cn("group relative w-fit", className)}>
      {/* Offset orange outline block behind the photo */}
      <div
        aria-hidden
        className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-brand transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:translate-y-1"
      />
      <div className="relative overflow-hidden rounded-2xl border-2 border-foreground bg-muted">
        <img
          src="/profile.png"
          alt="Saurabh Ravte"
          className="size-full object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}
