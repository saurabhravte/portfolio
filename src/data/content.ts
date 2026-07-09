import { FaGithub, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const profile = {
  name: "Saurabh Ravte",
  title: "Full Stack Developer",
  location: "India",
  email: "saurabh.ravte@gmail.com",
  phone: "+91 7987 191 418",
  // Rotating one-liners for the hero flip text.
  roles: [
    "Building Scalable Full-Stack Apps",
    "Real-Time & AI-Powered Products",
    "APIs, Databases & Clean UI",
  ],
  bio: "B.C.A. graduate skilled in the MERN stack, Next.js, and TypeScript with 4+ production-grade projects — including an AI-assisted delivery platform, a real-time polling app, and a SaaS form builder. I care about shipping scalable, user-focused web applications where the small details matter.",
};

export type Social = { label: string; href: string; icon: IconType };

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/saurabhravte", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saurabh-ravte/",
    icon: FaLinkedinIn,
  },
  { label: "X", href: "https://x.com/iamsaurabhr", icon: FaXTwitter },
  {
    label: "Email",
    href: "mailto:saurabh.ravte@gmail.com",
    icon: FaEnvelope,
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
  {
    label: "Frameworks & Libraries",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "tRPC",
      "Zustand",
      "TanStack",
      "Tailwind CSS",
    ],
  },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "Drizzle ORM"] },
  { label: "APIs & Realtime", items: ["REST APIs", "WebSocket", "JWT"] },
  { label: "Tools", items: ["Git", "GitHub", "Docker", "VS Code", "Postman"] },
];

export type ProjectLink = { label: string; href: string };

export type Project = {
  name: string;
  period: string;
  tagline: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "ShipFlow AI",
    period: "2026",
    featured: true,
    tagline:
      "AI-assisted product delivery — from feature request to reviewed, human-approved pull request.",
    highlights: [
      "Automated the full delivery loop (request → PRD → tasks → PR → AI review → approval → shipped) behind a centralized 12-state machine enforcing every transition.",
      "Built repo-aware AI code review that evaluates PRs against the PRD, tasks, diff, and Pinecone context — posting blocking / non-blocking findings as GitHub comments.",
      "Ran long jobs as durable Inngest step-functions so a flaky LLM call retries in isolation instead of restarting the pipeline.",
      "Shipped multi-tenant workspaces with Better Auth and Razorpay billing (Free / Pro / Enterprise) with monthly usage metering.",
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "tRPC",
      "Inngest",
      "Drizzle",
      "PostgreSQL",
      "Vercel AI SDK",
      "Pinecone",
      "Razorpay",
    ],
    links: [
      { label: "Live", href: "https://shipflow-ai.vercel.app/" },
      { label: "Docs", href: "https://shipflow-ai.vercel.app/docs" },
      { label: "Demo", href: "https://youtu.be/R--jPbLlYxU" },
      { label: "GitHub", href: "https://github.com/saurabhravte/shipflowAI" },
    ],
  },
  {
    name: "Form Stack",
    period: "May 2026",
    tagline:
      "A production-grade form builder SaaS with 25+ dynamic input types and analytics.",
    highlights: [
      "Built a form builder supporting 25+ dynamic input types with customizable validation workflows.",
      "Architected a Turborepo monorepo with shared UI and validation modules, cutting code duplication by 40% across 3+ packages.",
      "Secured public and unlisted sharing with spam protection, visibility controls, and protected creator dashboards.",
      "Designed an analytics dashboard and CSV export pipeline processing 1,000+ responses with sub-second query performance.",
    ],
    tech: ["Next.js", "Zod", "PostgreSQL", "Turborepo", "Scalar", "tRPC"],
    links: [],
  },
  {
    name: "Pulse Board",
    period: "Apr 2026",
    tagline:
      "A live polling platform with sub-200ms real-time vote synchronization.",
    highlights: [
      "Engineered a polling platform handling 100+ concurrent participants with sub-200ms real-time vote sync via WebSockets.",
      "Architected join-code and public-sharing workflows, cutting poll access steps by 60%.",
      "Shipped 4+ configurable poll controls — multi-select, mandatory fields, and timed sessions — expanding host flexibility.",
      "Unified guest and authenticated access into one onboarding flow, cutting signup-to-first-vote time from 45s to 12s.",
    ],
    tech: [
      "React.js",
      "TanStack Router",
      "Express.js",
      "TypeScript",
      "WebSocket",
      "Docker",
    ],
    links: [],
  },
  {
    name: "Contest Tracker",
    period: "Dec 2025",
    tagline:
      "A unified real-time tracker for Codeforces, LeetCode, and CodeChef contests.",
    highlights: [
      "Aggregated contests from Codeforces, LeetCode, and CodeChef into one real-time tracker, updating every 15 minutes.",
      "Automated live classification of upcoming, ongoing, and past contests, eliminating manual status tracking.",
      "Implemented bookmarking and YouTube editorial linking, reducing contest prep time by 30%.",
      "Built a responsive dark-mode UI with cross-device navigation, achieving a 95+ Lighthouse performance score.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "REST APIs"],
    links: [],
  },
];

export const achievements: string[] = [
  "Ranked in the top 12% (49 of 404 participants) at Chai aur Code, building Pulse Board.",
  "Achieved 19th rank among 500+ participants in the Chai aur Code coding competition.",
];

export type BlogPost = {
  title: string;
  description: string;
  href: string;
  date: string;
};

// No posts yet — the Blogs section renders a graceful empty state until filled.
export const blogPosts: BlogPost[] = [];
