# Minutes90

Minutes90 — a football platform (90 minutes) for players, trainers and agents. Discover player cards and profiles, find trainers, and connect with agents.

**Live demo:** https://minutes90.vercel.app

> This repository contains the frontend only; it loads its content from the project's backend API through Axios (`libs/axios.ts`).

## Features

- **Player cards and profiles** — player listings with detail pages (`app/[locale]/players`, `players/[id]`).
- **Trainer listings** — trainer listings with detail pages (`app/[locale]/trainers`, `trainers/[id]`).
- **Agent profiles and agent code** — agent listings with detail pages (`app/[locale]/agents`, `agents/[id]`).
- **Account verification** — verification for accounts on the platform.
- **Profile** — user profile pages (`app/[locale]/profile`).
- **Favorites** — save players, trainers and agents (`app/[locale]/favs`).
- **Blog** — articles (`app/[locale]/blogs`).
- **Localisation** — localised routes under `app/[locale]`, with translations in `i18n/` (via `next-intl`).

## Tech Stack

- Next.js 15.1.4 (App Router) — `next`
- React 19.0.0 — `react`, `react-dom`
- TypeScript — `typescript`
- Tailwind CSS 3.4.1 — `tailwindcss`, `postcss`, `autoprefixer`
- State management — Redux Toolkit 2.5.1 (`@reduxjs/toolkit`, `react-redux`)
- Firebase 11.1.0 — `firebase`
- Internationalisation — `next-intl` 3.26.5
- Data fetching — Axios 1.7.9 (`libs/axios.ts`)
- UI — Swiper 11.2.1, `react-toastify` 11.0.2, `react-icons` 5.4.0

## Project Structure

```
app/[locale]/   # Localised routes: agents, blogs, favs, players, profile, trainers
components/     # Shared components
libs/           # API client (axios) and other helpers
i18n/           # Internationalisation setup
hooks/          # Shared React hooks
```

## Getting Started

### Prerequisites

- Node.js and npm

### Install and run

```bash
git clone https://github.com/ibrahim-mohamed-rezk/minutes90.git
cd minutes90
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Production build (next build)
npm start       # Start the production server (next start)
npm run lint    # Lint (next lint)
```
