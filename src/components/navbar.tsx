import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { FileText, Folder, Mail, User, X, type LucideIcon } from "lucide-react";
import { RiMenuFoldLine } from "react-icons/ri";

import { ModeToggle } from "@/components/mode-toggle";
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

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop: name that hides on scroll + top-right hamburger menu */}
      <Link
        to="/"
        className={cn(
          "fixed left-6 top-6 z-40 hidden font-name text-2xl font-bold tracking-tight text-foreground transition-all duration-500 ease-out sm:left-10 sm:top-8 sm:text-3xl md:block",
          scrolled
            ? "-translate-y-4 opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100",
        )}
      >
        Saurabh Ravte
      </Link>

      {/* Desktop: theme toggle + hamburger */}
      <div className="fixed right-6 top-6 z-50 hidden items-center gap-2 sm:right-10 sm:top-8 md:flex">
        <ModeToggle />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex size-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm backdrop-blur-md transition-transform duration-300 ease-out hover:scale-110 active:scale-90"
        >
          <span className="relative block size-5">
            <RiMenuFoldLine
              className={cn(
                "absolute inset-0 size-5 transition-all duration-300",
                open ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
              )}
            />
            <X
              className={cn(
                "absolute inset-0 size-5 transition-all duration-300",
                open ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0",
              )}
            />
          </span>
        </button>
      </div>

      {/* Desktop: backdrop */}
      {open && (
        <button
          type="button"
          aria-hidden
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 hidden cursor-default bg-transparent md:block"
        />
      )}

      {/* Desktop: menu panel under the hamburger */}
      <nav
        className={cn(
          "fixed right-6 top-19 z-50 hidden w-52 origin-top-right rounded-2xl border border-border bg-background/90 p-2 shadow-lg backdrop-blur-md transition-all duration-200 ease-out sm:right-10 sm:top-22 md:block",
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
        )}
      >
        {navItems.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            className="block rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:font-medium [&.active]:text-foreground"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile: floating pill at the bottom with icons */}
      <header className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:hidden">
        <nav className="flex items-center gap-1 rounded-2xl border border-border bg-background/80 px-2 py-2 shadow-lg backdrop-blur-md">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="group flex items-center gap-1.5 rounded-xl px-3 py-2 text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground"
              aria-label={label}
            >
              <Icon className="size-5" />
              <span className="hidden text-sm font-medium group-[.active]:inline">
                {label}
              </span>
            </Link>
          ))}
          <div className="mx-1 h-6 w-px bg-border" />
          <ModeToggle />
        </nav>
      </header>
    </>
  );
}
