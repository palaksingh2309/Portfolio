# Palak Singh — Portfolio

A modern, professional portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Required Assets

Place these files in the `public/` folder:

- `public/images/myphoto.png` — profile photo (shown in the hero)
- `public/Resume.pdf` — resume for the download buttons

## Project Structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Home page composing all sections
  globals.css       # Tailwind base + global styles
components/
  layout/           # Navbar, Footer
  sections/         # Hero, About, Skills, Experience, Projects, Achievements, Contact
  ui/               # Reveal (scroll animations), SectionHeading, Icon
lib/
  data.ts           # All portfolio content (edit here to update the site)
```

## Editing Content

All text, links, skills, projects, and achievements live in `lib/data.ts` — update that single file to change the site content.
