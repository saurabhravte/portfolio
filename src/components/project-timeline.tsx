import { useState } from "react";
import { ArrowUpRight, ChevronsUpDown, Star } from "lucide-react";

import type { Project } from "@/data/content";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function ProjectItem({
  project,
  isLast,
  defaultOpen,
}: {
  project: Project;
  isLast: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(Boolean(defaultOpen));

  return (
    <div className="relative flex gap-4">
      {/* Vertical connector line down the timeline */}
      {!isLast && (
        <div
          aria-hidden
          className="absolute bottom-0 left-[22px] top-12 w-px bg-border"
        />
      )}

      {/* Logo / initials node */}
      <div
        className={cn(
          "relative z-10 flex size-11 shrink-0 items-center justify-center rounded-xl border bg-card font-name text-sm font-bold shadow-sm transition-colors",
          project.featured
            ? "border-brand/50 text-brand"
            : "border-border text-foreground",
        )}
      >
        {initials(project.name)}
      </div>

      {/* Content */}
      <div className={cn("min-w-0 flex-1", isLast ? "pb-0" : "pb-8")}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group flex w-full items-start justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left transition-colors hover:border-brand/60"
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              {project.featured && (
                <span className="brand-highlight inline-flex items-center gap-1 rounded-[3px] px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider">
                  <Star className="size-2.5 fill-current" />
                  Featured
                </span>
              )}
            </div>
            <p className="mt-0.5 truncate text-sm text-muted-foreground">
              {project.tagline}
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground/80">
              {project.period}
            </p>
          </div>

          <ChevronsUpDown className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
        </button>

        {/* Expandable detail panel — smooth grid-rows accordion */}
        <div
          className={cn(
            "grid transition-all duration-500 ease-out",
            open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="rounded-xl border border-dashed border-border px-4 py-4">
              <ul className="space-y-2">
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
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 border-t border-dashed border-border pt-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectTimeline({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col">
      {projects.map((project, i) => (
        <ProjectItem
          key={project.name}
          project={project}
          isLast={i === projects.length - 1}
          defaultOpen={i === 0}
        />
      ))}
    </div>
  );
}
