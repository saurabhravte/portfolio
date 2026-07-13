import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { ScrollToTop } from "@/components/scroll-to-top";

const RootLayout = () => (
  <div className="relative min-h-screen bg-[#060908] text-[#EAEAEA]">
    <SiteHeader />
    <main>
      <Outlet />
    </main>
    <ScrollToTop />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });

