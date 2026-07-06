import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Navbar } from "@/components/navbar";

const RootLayout = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-12 pb-28 md:pt-24 md:pb-12">
      <Outlet />
    </main>
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
