import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import type { IconType } from "react-icons";

import { TextFlip } from "@/components/text-flip";
import { Divider } from "@/components/frame";

const welcomes = [
  "Welcome to my corner of the web.",
  "Hey there — glad you dropped by.",
  "You found me. Come on in.",
  "Great to have you here.",
  "Welcome, fellow explorer of the web.",
  "Ahoy! Thanks for stopping by.",
  "Make yourself at home.",
  "Well, hello there!",
  "Good to see a new face around here.",
  "Pull up a chair — welcome.",
];

const socials: { label: string; href: string; icon: IconType }[] = [
  { label: "GitHub", href: "#", icon: FaGithub },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "X", href: "#", icon: FaXTwitter },
  { label: "Email", href: "#", icon: FaEnvelope },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </h2>
  );
}

function Index() {
  // Pick a fresh welcome each visit.
  const [welcome] = useState(
    () => welcomes[Math.floor(Math.random() * welcomes.length)],
  );

  return (
    <section className="py-10">
      {/* Profile header — only on mobile (desktop already shows the ID card) */}
      <div className="flex items-center gap-4 md:hidden">
        <img
          src="/profile.png"
          alt="Saurabh Ravte"
          className="size-16 shrink-0 rounded-2xl object-cover ring-1 ring-border"
        />
        <div className="min-w-0">
          <h1 className="flex items-center gap-1.5 text-xl font-semibold tracking-tight sm:text-2xl">
            Saurabh Ravte
            <BadgeCheck className="size-5 text-[#e11b22]" />
          </h1>
          <p className="text-sm text-muted-foreground">
            Building with code. Details matter.
          </p>
        </div>
      </div>

      {/* Greeting + single-line flip text */}
      <div className="mt-8 md:mt-0">
        <p className="font-name text-base font-bold leading-snug tracking-tight text-foreground sm:text-lg">
          {welcome}
        </p>
        <TextFlip
          items={[
            "Building Scalable Full-Stack Applications",
            "Cross-Platform Mobile Apps",
            "API & Database Integration",
          ]}
          className="mt-2 text-xs font-semibold text-foreground sm:text-sm"
        />
      </div>

      <Divider className="my-8" />

      {/* Social links */}
      <div>
        <SectionLabel>Connect</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-md border border-border bg-background text-muted-foreground shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:text-foreground active:scale-90"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
