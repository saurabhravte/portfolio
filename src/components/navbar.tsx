import { Link } from "@tanstack/react-router";
import { FileText, Folder, Mail, User, type LucideIcon } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";

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
  return (
    <>
      {/* Desktop / tablet: fixed full-width bar at the top */}
      <header className="fixed inset-x-0 top-0 z-50 hidden border-b border-border bg-background/80 backdrop-blur-md md:block">
        <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
          <Link
            to="/"
            className="text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-70"
          >
            SR
          </Link>

          <div className="flex items-center gap-6">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:after:absolute [&.active]:after:-bottom-1.5 [&.active]:after:left-0 [&.active]:after:h-0.5 [&.active]:after:w-full [&.active]:after:rounded-full [&.active]:after:bg-foreground"
              >
                {label}
              </Link>
            ))}
          </div>

          <ModeToggle />
        </nav>
      </header>

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
