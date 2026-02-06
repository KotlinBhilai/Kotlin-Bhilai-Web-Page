# Bhilai Kotlin User Group (KUG) Website

Production-ready static community website for **Bhilai Kotlin User Group** built with **Vite + React + TypeScript + Tailwind CSS**.

## Features

- Premium Kotlin-inspired design with gradients, glass cards, subtle animations
- Fully responsive and accessible single-page layout
- Sticky navigation with smooth scrolling
- System-aware dark mode toggle
- KUG submission identity card with required fields
- Events area with upcoming state + past event detail modal
- Join/community links + static newsletter signup
- SEO basics: title, description, OpenGraph tags, favicon
- GitHub Pages deployment workflow via GitHub Actions

## Local Assets Used

All graphics are sourced from local folders already present in this workspace:

- `public/kotlin-logo.svg` (from local Kotlin logos)
- `public/hero-kodee.png` (from local Kodee mascot assets)
- `public/favicon.png` (from local Kotlin icon)
- `public/og-kodee.png` (from local Kodee mascot assets)

## Run Locally

```bash
npm install
npm run dev
```

Build preview:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push the repository to GitHub (branch: `main`).
2. In GitHub repo settings, enable Pages source as **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` will build and deploy automatically.

Expected deployed URL:

`https://kotlinbhilai.github.io/Kotlin-Bhilai-Web-Page/`

## Update Content

- Update events and event details in `src/App.tsx` (`pastEvents` array and text blocks).
- Update organizer/contact placeholders in `src/App.tsx`.
- Update resource/community links in `src/App.tsx`.
- Replace local branding assets in `public/` if needed.

## Scripts

- `npm run dev` - start development server
- `npm run build` - type-check + production build
- `npm run preview` - preview production build
- `npm run lint` - run ESLint
