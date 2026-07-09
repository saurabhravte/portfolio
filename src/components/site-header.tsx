import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { FileText, Folder, Mail, User, X, type LucideIcon } from "lucide-react";
import { RiMenuFoldLine } from "react-icons/ri";

import { ModeToggle } from "@/components/mode-toggle";
import { Divider } from "@/components/frame";
import { cn } from "@/lib/utils";

type NavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { to: "/about", label: "About", icon: User },
  { to: "/projects", label: "Projects", icon: Folder },
  { to: "/blogs", label: "Blogs", icon: FileText },
  { to: "/contact", label: "Contact", icon: Mail },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30">
      <div className="flex items-center py-3">
        {/* Brand on the left (desktop shows the fixed name badge instead) */}
        <Link
          to="/"
          className="font-name text-xl font-bold tracking-tight text-foreground md:hidden"
        >
          Saurabh Ravte
        </Link>

        {/* Controls pinned to the right rail, inside the border */}
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex size-9 items-center justify-center rounded-md border border-border bg-background/80 text-foreground shadow-sm backdrop-blur-md transition-transform duration-300 ease-out hover:scale-110 active:scale-90"
            >
              <span className="relative block size-5">
                <RiMenuFoldLine
                  className={cn(
                    "absolute inset-0 size-5 transition-all duration-300",
                    open
                      ? "scale-0 -rotate-90 opacity-0"
                      : "scale-100 rotate-0 opacity-100",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 size-5 transition-all duration-300",
                    open
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-0 rotate-90 opacity-0",
                  )}
                />
              </span>
            </button>

            {/* Click-away backdrop */}
            {open && (
              <button
                type="button"
                aria-hidden
                tabIndex={-1}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-40 cursor-default bg-transparent"
              />
            )}

            {/* Dropdown menu */}
            <nav
              className={cn(
                "absolute right-0 top-full z-50 mt-2 w-48 origin-top-right rounded-xl border border-border bg-background/95 p-2 shadow-lg backdrop-blur-md transition-all duration-200 ease-out",
                open
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-95 opacity-0",
              )}
            >
              {navItems.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:font-medium [&.active]:text-foreground"
                >
                  <Icon className="size-4" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Horizontal separator under the header, aligned to the frame rails */}
      <Divider />
    </header>
  );
}
