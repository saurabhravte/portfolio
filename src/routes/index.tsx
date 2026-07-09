import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, PenLine, Trophy } from "lucide-react";

import { Divider, SectionHeader } from "@/components/frame";
import { Portrait } from "@/components/portrait";
import { Reveal } from "@/components/reveal";
import { TextFlip } from "@/components/text-flip";
import { ProjectCard } from "@/components/project-card";
import { CopyButton } from "@/components/ui/copy-button";
import {
  achievements,
  blogPosts,
  profile,
  projects,
  skillGroups,
  socials,
} from "@/data/content";

export const Route = createFileRoute("/")({
  component: Index,
});

const greetings = [
  "Welcome to my corner of the web.",
  "Hey there — glad you dropped by.",
  "You found me. Come on in.",
  "Great to have you here.",
];

function Index() {
  const [greeting] = useState(
    () => greetings[Math.floor(Math.random() * greetings.length)],
  );

  return (
    <div className="pb-20">
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="py-10 sm:py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          <Reveal>
            <Portrait className="w-32 shrink-0 sm:w-40" />
          </Reveal>

          <Reveal delay={0.1} className="min-w-0">
            <p className="font-name text-sm text-muted-foreground">
              {greeting}
            </p>
            <h1 className="mt-1 flex items-center gap-2 font-serif text-4xl font-semibold leading-none tracking-tight sm:text-5xl">
              {profile.name}
              <BadgeCheck className="size-6 text-brand" />
            </h1>
            <p className="mt-2 text-base font-medium text-foreground">
              <span className="brand-highlight rounded-[3px] px-1.5 py-0.5">
                {profile.title}
              </span>
            </p>
            <TextFlip
              items={profile.roles}
              className="mt-3 text-sm font-semibold text-muted-foreground"
            />
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:border-brand hover:text-brand active:scale-90"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </Reveal>
      </section>

      <Divider />

      {/* ───────────────────────── About ───────────────────────── */}
      <section id="about" className="scroll-mt-24 py-12">
        <Reveal>
          <SectionHeader index="01" label="About" title="A bit about me" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-foreground/85">
            {profile.bio}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-6 space-y-2.5">
          {achievements.map((a) => (
            <div
              key={a}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3"
            >
              <Trophy className="mt-0.5 size-4 shrink-0 text-brand" />
              <p className="text-sm text-foreground/85">{a}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <Divider />

      {/* ───────────────────────── Skills ───────────────────────── */}
      <section id="skills" className="scroll-mt-24 py-12">
        <Reveal>
          <SectionHeader index="02" label="Skills" title="Tech I build with" />
        </Reveal>
        <div className="space-y-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="w-40 shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-sm text-foreground/85 transition-colors hover:border-brand hover:text-brand"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Divider />

      {/* ───────────────────────── Projects ───────────────────────── */}
      <section id="projects" className="scroll-mt-24 py-12">
        <Reveal>
          <SectionHeader
            index="03"
            label="Projects"
            title="Things I've shipped"
          />
        </Reveal>
        <div className="space-y-5">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <Divider />

      {/* ───────────────────────── Blogs ───────────────────────── */}
      <section id="blogs" className="scroll-mt-24 py-12">
        <Reveal>
          <SectionHeader index="04" label="Blogs" title="Writing & notes" />
        </Reveal>
        {blogPosts.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-12 text-center">
              <PenLine className="size-6 text-brand" />
              <p className="mt-3 font-serif text-lg font-medium text-foreground">
                Posts are on the way
              </p>
              <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                I'm putting together write-ups on real-time systems, AI
                workflows, and the things I learn while shipping. Check back
                soon.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="space-y-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.href} delay={i * 0.05}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-brand"
                >
                  <div>
                    <p className="font-medium text-foreground">{post.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  </div>
                  <span className="shrink-0 pt-1 font-mono text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <Divider />

      {/* ───────────────────────── Contact ───────────────────────── */}
      <section id="contact" className="scroll-mt-24 py-12">
        <Reveal>
          <SectionHeader index="05" label="Contact" title="Let's build something" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <p className="text-sm text-muted-foreground">
              Have a role, a project, or just want to say hi? My inbox is open.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-2.5">
                <span className="truncate font-mono text-sm text-foreground">
                  {profile.email}
                </span>
                <CopyButton
                  text={profile.email}
                  size="icon-sm"
                  className="shrink-0"
                />
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-95"
              >
                Send an email
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
