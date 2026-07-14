import { navPills } from "@/data/content";
import { ModeToggle } from "@/components/mode-toggle";

/**
 * Top pill navigation: three rounded pills, each with a green circular icon.
 * Spread across the top on desktop, wraps and centers on mobile.
 * A theme toggle sits at the far right.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-2.5 px-4 py-3 sm:justify-between sm:gap-4 sm:py-4">
        <nav className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
          {navPills.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/70 py-1.5 pl-1.5 pr-4 text-sm font-medium text-foreground shadow-sm transition-all duration-300 ease-out hover:border-brand hover:bg-card active:scale-95"
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-brand text-brand-foreground transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6">
                <Icon className="size-3.5" strokeWidth={2.5} />
              </span>
              {label}
            </a>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
