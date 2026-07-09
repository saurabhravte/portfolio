import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Desktop-only: name box with moving gradient border
    <div
      className={cn(
        "fixed left-6 top-6 z-40 hidden transition-all duration-500 ease-out sm:left-10 sm:top-8 md:block",
        scrolled
          ? "-translate-y-4 opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100",
      )}
    >
      <HoverBorderGradient
        as="div"
        containerClassName="rounded-xl"
        className="bg-background px-4 py-1.5"
        duration={1.5}
      >
        <Link
          to="/"
          className="block font-name text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Saurabh Ravte
        </Link>
      </HoverBorderGradient>
    </div>
  );
}
