# Saurabh Ravte — Portfolio

Personal portfolio site for **Saurabh Ravte**, a full stack web and mobile developer. Built as a fast, single-page React app with dark/light mode, scroll animations, project highlights, and a live GitHub contribution graph.

**Live site:** [saurabhravte.vercel.app](https://saurabhravte.vercel.app)

## Features

- **Hero section** — portrait, role flip text, and intro
- **Tech stack marquee** — scrolling tools and frameworks
- **Services** — what I do cards with hover interactions
- **Selected projects** — featured work with tech tags and links
- **GitHub activity** — year-long contribution calendar with tooltips ([Kibo UI](https://www.kibo-ui.com/components/contribution-graph) + [GitHub Contributions API](https://github-contributions-api.jogruber.de))
- **Contact** — social links and email copy button
- **Dark / light mode** — instant toggle switch with persisted preference
- **Scroll reveal animations** — powered by Motion
- **Responsive layout** — mobile-first design

## Tech Stack

| Category | Tools |
| --- | --- |
| Framework | React 19, TypeScript |
| Build | Vite 8 |
| Routing | TanStack Router |
| Styling | Tailwind CSS 4, shadcn/ui |
| Animation | Motion |
| Icons | Lucide React, React Icons |
| Deploy | Vercel |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) (recommended)

### Install

```bash
git clone https://github.com/saurabhravte/portfolio.git
cd portfolio
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

### Lint

```bash
pnpm lint
```

## Project Structure

```
portfolio/
├── public/                  # Static assets (profile image, favicon)
├── src/
│   ├── components/          # UI components
│   │   ├── ui/              # shadcn/ui primitives
│   │   ├── github-contributions.tsx
│   │   ├── mode-toggle.tsx
│   │   └── ...
│   ├── data/
│   │   └── content.ts       # Profile, projects, services, socials
│   ├── lib/
│   │   └── get-cached-contributions.ts
│   ├── routes/
│   │   ├── __root.tsx       # App shell (header, footer)
│   │   └── index.tsx        # Home page sections
│   ├── index.css            # Global styles & theme tokens
│   └── main.tsx             # App entry point
├── components.json          # shadcn/ui config
└── vercel.json              # SPA rewrite rules
```

## Customization

Most site content lives in a single file:

```ts
// src/data/content.ts
export const profile = { ... }
export const projects = [ ... ]
export const services = [ ... ]
export const socials = [ ... ]
```

Update `profile.githubUsername` and `profile.githubUrl` to change the GitHub contribution graph target.

Replace `public/profile.png` with your own portrait image.

## Environment Variables

Optional — override the GitHub contributions API base URL:

```env
VITE_GITHUB_CONTRIBUTIONS_API_URL=https://github-contributions-api.jogruber.de
```

## Deployment

The project is configured for [Vercel](https://vercel.com). Push to your connected Git repo and Vercel will build and deploy automatically.

`vercel.json` includes SPA rewrites so client-side routing works in production.

## Credits

- [GitHub Contributions component](https://chanhdai.com/components/github-contributions) by Chánh Đại
- [Kibo UI Contribution Graph](https://www.kibo-ui.com/components/contribution-graph)
- [GitHub Contributions API](https://github-contributions-api.jogruber.de) by Jonathan Gruber

## License

Private — all rights reserved.
