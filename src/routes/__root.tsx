import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Navbar } from "@/components/navbar";
import { SiteHeader } from "@/components/site-header";
import { PageFrame } from "@/components/frame";

const RootLayout = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-6 pb-16 md:pt-8">
      <PageFrame>
        <SiteHeader />
        <Outlet />
      </PageFrame>
    </main>
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
