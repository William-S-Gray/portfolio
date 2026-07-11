# William S. Gray — Portfolio

Personal portfolio of **William S. Gray**, Software Engineer & AI Full-Stack Systems Builder. A modern, responsive site built with a claymorphism design system, featuring light/dark mode, animated transitions, a filterable project showcase, and a working contact form.

🔗 **Live:** https://william-gray.netlify.app/

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS + custom claymorphism tokens
- **UI primitives:** shadcn/ui (Radix UI)
- **Animation:** Framer Motion
- **Routing:** React Router
- **Forms & validation:** React Hook Form + Zod
- **Email:** EmailJS
- **Theming:** next-themes (light / dark)

## Features

- 🎨 Claymorphism UI with theme-aware light & dark modes
- 📱 Fully responsive across mobile, tablet, and desktop
- 🗂️ Filterable project gallery with branded gradient placeholders for projects without screenshots
- ✉️ Contact form with client-side validation, EmailJS delivery, and toast feedback
- ⚡ Route-level code splitting for fast initial loads
- 🔍 SEO: per-route meta, Open Graph, Twitter cards, JSON-LD (`ProfilePage`/`Person`), sitemap & robots

## Getting Started

Requires [Node.js](https://nodejs.org) 18+ (or [Bun](https://bun.sh)).

```sh
npm install       # install dependencies
npm run dev       # start dev server (http://localhost:8080)
npm run build     # production build
npm run preview   # preview the production build
npm run test      # run tests
npm run lint      # lint
```

## Project Structure

```
public/
├── projects/       # project screenshots
├── robots.txt
├── sitemap.xml
└── _redirects      # Netlify SPA fallback
src/
├── assets/         # static images
├── components/     # Navbar, Footer, Layout, ThemeProvider, ThemeToggle, Seo, ui/
├── data/           # projects.ts — project catalog
├── hooks/          # custom hooks
├── lib/            # utilities
└── pages/          # Index, About, Services, Projects, Contact, NotFound
```

## Customization

- **Projects:** edit `src/data/projects.ts`. Drop a screenshot in `public/projects/` and set the optional `image` field; omit `image` to fall back to a generated gradient placeholder.
- **Theme colors & claymorphism shadows:** `src/index.css` (CSS variables for light and `.dark`).
- **SEO / structured data:** primary `Person`/`ProfilePage` JSON-LD lives in `index.html`; per-route titles and descriptions are set via `src/components/Seo.tsx`.
- **Contact form:** update the EmailJS service/template IDs in `src/pages/Contact.tsx`.
- **CV download:** place your résumé at `public/William-Gray-CV.pdf` to enable the hero "Download CV" button.

## Deployment

Deployed on Netlify. The `public/_redirects` file provides the SPA fallback so deep links (`/about`, `/projects`, …) resolve on direct hits and crawls. Update `sitemap.xml`, `robots.txt`, and the canonical/OG URLs in `index.html` if the domain changes.

## License

Personal project — all rights reserved © William S. Gray.
