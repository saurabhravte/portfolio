import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { TextFlip } from "@/components/text-flip";

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

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  // Pick a fresh welcome each visit.
  const [welcome] = useState(
    () => welcomes[Math.floor(Math.random() * welcomes.length)],
  );

  return (
    <section className="py-14 md:py-24">
      <p className="font-name text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-4xl">
        {welcome}
      </p>

      <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        I specialize in
      </p>
      <TextFlip
        items={[
          "Building Scalable Full-Stack Applications",
          "Cross-Platform Mobile Apps",
          "API & Database Integration",
        ]}
        className="mt-2 text-xl font-semibold text-foreground sm:text-2xl"
      />
    </section>
  );
}
