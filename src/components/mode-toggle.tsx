import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border border-border bg-muted/50 p-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      <Sun className="pointer-events-none absolute left-2 size-3 text-muted-foreground/60" />
      <Moon className="pointer-events-none absolute right-2 size-3 text-muted-foreground/60" />
      <span
        className={cn(
          "pointer-events-none flex size-7 items-center justify-center rounded-full bg-background shadow-sm transition-transform duration-200 ease-out",
          isDark ? "translate-x-6" : "translate-x-0",
        )}
      >
        {isDark ? (
          <Moon className="size-3.5 text-foreground" />
        ) : (
          <Sun className="size-3.5 text-foreground" />
        )}
      </span>
    </button>
  );
}
