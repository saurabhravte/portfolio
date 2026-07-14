import { Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Divider } from "@/components/frame";
import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions";
import { Reveal } from "@/components/reveal";
import { TextFlip } from "@/components/text-flip";
import { CopyButton } from "@/components/ui/copy-button";
import { getCachedContributions } from "@/lib/get-cached-contributions";
import {
  marqueeTools,
  profile,
  projects,
  services,
  socials,
  statement,
} from "@/data/content";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  // Split the statement so the closing phrase can be highlighted in green.
  const [headHead, headTail] = statement.headline.split("many more");
  const contributions = getCachedContributions(profile.githubUsername);

  return (
    <div className="pb-24">
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative pt-4 sm:pt-6">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-6">
          {/* Left — title */}
          <Reveal className="order-2 md:order-1">
            <div className="mb-4 h-px w-16 bg-brand/70" />
            <h1 className="font-serif text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              {profile.title}
              <br />
              <span className="text-muted-foreground">{profile.subtitle}</span>
            </h1>
            <TextFlip
              items={profile.roles}
              className="mt-3 text-xs font-semibold text-brand"
            />
          </Reveal>

          {/* Center — portrait with full name below */}
          <Reveal
            delay={0.1}
            className="order-1 mx-auto w-full max-w-68 md:order-2"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-border/60 shadow-2xl">
              <img
                src="/profile.png"
                alt={profile.name}
                className="aspect-square w-full object-cover"
              />
            </div>

            {/* Full name below the picture — one line, uppercase */}
            <div className="mt-4 flex flex-col items-center leading-none">
              <span className="name-gradient whitespace-nowrap font-serif text-[clamp(1.5rem,6vw,2.75rem)] font-black uppercase tracking-tight">
                {profile.name}
              </span>
            </div>
          </Reveal>

          {/* Right — intro */}
          <Reveal
            delay={0.15}
            className="order-3 md:order-3 md:max-w-[16rem] md:justify-self-end"
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <Divider className="my-8" />

      {/* ───────────────────────── Statement ───────────────────────── */}
      <section id="stack" className="scroll-mt-24 py-8">
        <Reveal>
          <h2 className="max-w-4xl font-serif text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            {headHead}
            <span className="text-brand">many more{headTail}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {statement.description}
          </p>
        </Reveal>

        {/* Auto-scrolling tech strip */}
        <Reveal delay={0.15}>
          <div className="marquee-mask mt-10 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-12">
              {[...marqueeTools, ...marqueeTools].map(
                ({ label, icon: Icon }, i) => (
                  <div
                    key={`${label}-${i}`}
                    className="flex items-center gap-2.5 text-muted-foreground/45 transition-colors hover:text-foreground"
                  >
                    <Icon className="size-7" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </section>

      <Divider className="my-8" />

      {/* ───────────────────────── What I do ───────────────────────── */}
      <section id="work" className="scroll-mt-24 py-8">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            what I do
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, blurb, icon: Icon, href }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <a
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card/70 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-card"
              >
                <span className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand/25 to-brand/5 text-brand ring-1 ring-inset ring-brand/20">
                  <Icon className="size-7" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold uppercase leading-tight tracking-wide text-foreground">
                    {title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{blurb}</p>
                </div>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <ArrowUpRight className="size-4" strokeWidth={2.5} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <Divider className="my-8" />

      {/* ───────────────────────── Projects ───────────────────────── */}
      <section id="projects" className="scroll-mt-24 py-8">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            selected projects
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            A few production-grade things I've designed, built, and shipped
            end&#8209;to&#8209;end.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              delay={i * 0.05}
              className={project.featured ? "md:col-span-2" : undefined}
            >
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-card">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {project.period}
                  </span>
                </div>

                {project.featured && (
                  <span className="mt-2 inline-flex w-fit items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-foreground">
                    Featured
                  </span>
                )}

                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  {project.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Divider className="my-8" />

      {/* ───────────────────────── GitHub activity ───────────────────────── */}
      <section id="github" className="scroll-mt-24 py-8">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            GitHub activity
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            A year of commits, PRs, and open-source work on{" "}
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground link-underline"
            >
              GitHub
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card/70 p-4 sm:p-5">
            <Suspense fallback={<GitHubContributionsFallback />}>
              <GitHubContributions contributions={contributions} />
            </Suspense>
          </div>
        </Reveal>
      </section>

      <Divider className="my-8" />

      {/* ───────────────────────── Contact ───────────────────────── */}
      <section id="contact" className="scroll-mt-24 py-8 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Contact me
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Have a role, a project, or just want to say hi? My inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="group flex flex-col items-center gap-1.5"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl border border-border bg-card text-muted-foreground shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-brand group-hover:text-brand">
                  <Icon className="size-5" />
                </span>
                <span className="text-[0.7rem] text-muted-foreground">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-7 flex max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <div className="flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-2.5 sm:w-auto">
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
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-95 sm:w-auto"
            >
              Send an email
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
