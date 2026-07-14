import { Star } from "lucide-react";
import { createElement } from "react";

import type { ExperienceItemType } from "@/components/work-experience";
import type { Project } from "@/data/content";

const MONTH_TO_NUMBER: Record<string, string> = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function parseProjectPeriod(period: string): { start: string; end?: string } {
  const monthYear = period.match(/^([A-Za-z]{3})\s+(\d{4})$/);
  if (monthYear) {
    const month = MONTH_TO_NUMBER[monthYear[1]!];
    if (month) {
      return { start: `${month}.${monthYear[2]}` };
    }
  }

  if (/^\d{4}$/.test(period)) {
    return { start: period };
  }

  return { start: period };
}

function projectDescription(project: Project) {
  const bullets = project.highlights.map((item) => `- ${item}`).join("\n");

  if (project.links.length === 0) {
    return bullets;
  }

  const links = project.links
    .map((link) => `[${link.label}](${link.href})`)
    .join(" · ");

  return `${bullets}\n\n**Links:** ${links}`;
}

export function projectsToExperiences(projects: Project[]): ExperienceItemType[] {
  return projects.map((project) => {
    const id = slugify(project.name);
    const primaryLink = project.links[0]?.href;

    return {
      id,
      companyName: project.name,
      companyWebsite: primaryLink,
      isCurrentEmployer: project.featured,
      positions: [
        {
          id: `${id}-role`,
          title: project.tagline,
          employmentPeriod: parseProjectPeriod(project.period),
          employmentType: project.featured ? "Featured project" : "Personal project",
          description: projectDescription(project),
          icon: project.featured
            ? createElement(Star, { className: "size-4 fill-current" })
            : undefined,
          skills: project.tech,
          isExpanded: project.featured,
        },
      ],
    };
  });
}
