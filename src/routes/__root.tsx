import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Navbar } from "@/components/navbar";
import { SiteHeader } from "@/components/site-header";
import { PageFrame } from "@/components/frame";

const RootLayout = () => (
  <div className="bg-grid relative min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-6 pb-16 md:pt-8">
      <PageFrame>
        <SiteHeader />
        <Outlet />
        <Footer />
      </PageFrame>
    </main>
  </div>
);

function Footer() {
  return (
    <footer className="mt-4 flex flex-col items-center gap-1 border-t border-dashed border-border pt-6 text-center text-xs text-muted-foreground">
      <p>
        Built by <span className="font-medium text-foreground">Saurabh Ravte</span>{" "}
        with React, Tailwind & Motion.
      </p>
      <p>© {new Date().getFullYear()} · All rights reserved.</p>
    </footer>
  );
}

export const Route = createRootRoute({ component: RootLayout });
