import { ArrowUpRight, Star } from "lucide-react";

import type { Project } from "@/data/content";
import { cn } from "@/lib/utils";

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:p-6",
        project.featured && "ring-1 ring-brand/40",
      )}
    >
      {/* Orange corner accent that grows on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 size-24 rounded-full bg-brand/10 blur-2xl transition-all duration-500 group-hover:bg-brand/20"
      />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="brand-highlight inline-flex items-center gap-1 rounded-[3px] px-1.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider">
              <Star className="size-3 fill-current" />
              Featured
            </span>
          )}
          <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {project.name}
          </h3>
        </div>
        <span className="shrink-0 pt-1 font-mono text-xs text-muted-foreground">
          {project.period}
        </span>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">{project.tagline}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm leading-relaxed">
            <span
              aria-hidden
              className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
            />
            <span className="text-foreground/85">{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechBadge key={t}>{t}</TechBadge>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              {link.label}
              <ArrowUpRight className="size-3.5" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
