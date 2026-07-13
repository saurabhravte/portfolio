import { ChevronRight, ShoppingBag, BadgeCheck } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <nav className="flex items-center gap-4">
        <a href="#work" className="flex items-center gap-2 rounded-full border border-[#1f2d26] bg-[#0b120f]/80 backdrop-blur-md px-4 py-2 text-sm text-[#EAEAEA] transition-colors hover:border-brand">
          <div className="flex size-5 items-center justify-center rounded-full bg-brand text-[#0b120f]">
            <ChevronRight className="size-3" />
          </div>
          See my work
        </a>
        <a href="#catalog" className="flex items-center gap-2 rounded-full border border-[#1f2d26] bg-[#0b120f]/80 backdrop-blur-md px-4 py-2 text-sm text-[#EAEAEA] transition-colors hover:border-brand">
          <ShoppingBag className="size-4 text-brand" />
          My catalog
        </a>
        <a href="#service" className="flex items-center gap-2 rounded-full border border-[#1f2d26] bg-[#0b120f]/80 backdrop-blur-md px-4 py-2 text-sm text-[#EAEAEA] transition-colors hover:border-brand">
          <div className="flex size-5 items-center justify-center rounded-full bg-[#111a16] border border-[#1f2d26]">
            <BadgeCheck className="size-3 text-brand" />
          </div>
          Book a service
        </a>
      </nav>
    </header>
  );
}

