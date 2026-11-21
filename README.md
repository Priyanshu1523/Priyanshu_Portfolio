<div align="center">

# Priyanshu Chauhan — Developer Portfolio

**Building Digital Experiences. Engineering Smarter Businesses.**

An interactive, motion-rich portfolio for a Full-Stack & ERP (Odoo / ERPNext) developer, inspired by the design language of [Glinto](https://glinto.co.kr/en).

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

### [🌐 View Live Portfolio](https://priyanshu-chauhan.vercel.app/)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customizing Content](#customizing-content)
- [Contact Form Setup](#contact-form-setup)
- [Deployment](#deployment)
- [Contact](#contact)

---

## About

This is the personal portfolio of **Priyanshu Chauhan**, a Software Developer (B.Tech CSE) from Gujarat, India, specializing in:

- **Full-Stack Development** — React, Node.js, Express, REST APIs
- **ERP Implementation** — Odoo & ERPNext / Frappe custom modules and workflows
- **Backend & Integrations** — Python, databases, API synchronization
- **Automation** — intelligent business workflows

---

## Features

| Area | Highlights |
|---|---|
| **Cinematic preloader** | 0 → 100% counter with an easing curve and a curtain-reveal transition |
| **Hero** | Large editorial typography, availability badge, dual CTAs, profile card, interactive ambient mesh canvas |
| **Marquees** | Dual-direction infinite tickers highlighting core skills |
| **About** | Editorial intro, stats grid, philosophy callouts, LinkedIn link |
| **Projects** | Category filter + interactive case-study modal for each project |
| **Services** | Expanding 4-part list: Full-Stack, ERP, Backend & Integrations, Automation & AI |
| **Tech stack** | Filterable categories: Frontend, Backend, Database, ERP & Frappe, Tools & DevOps |
| **Experience** | Vertical timeline with glowing nodes |
| **Education** | B.Tech in Computer Science & Engineering |
| **Workflow** | Discover → Plan → Develop → Deliver & Support |
| **Contact** | One-click email copy, LinkedIn, validated form via Web3Forms, confetti on success |
| **Footer** | Oversized wordmark and a magnetic "Back to Top" button |
| **Micro-interactions** | Smooth scrolling (Lenis), custom trailing cursor, Web Audio API sound feedback with mute toggle |

### Featured Projects

| Project | Type | Duration |
|---|---|---|
| **Indrashil University** | Official website + AMC | 2.5+ years |
| **Everneu** | Dynamic business website with admin panel + AMC | Ongoing |
| **Government Arts College, Maninagar** | Institutional portal + AMC | 2 years |
| **Swaminarayan University, Kalol** | University website maintenance | 6 months |

### Experience

| Company | Role | Period |
|---|---|---|
| Self-Employed (Freelance) | ERP & Full Stack Developer | Jan 2025 – Present |
| Indrashil University | Web Developer | Jun 2024 – Jun 2026 |
| BISAG-N | Web Developer | Jun 2024 – Sep 2024 |
| Micro Pebbles Coding Solution | Website Development & Designing Intern | Jun 2023 – Jul 2023 |

---

## Tech Stack

| Layer | Tools |
|---|---|
| **Framework** | React 18, Vite 6 |
| **Styling** | Tailwind CSS 3, PostCSS, Autoprefixer |
| **Animation** | Framer Motion, GSAP, Lenis (smooth scroll) |
| **Icons & effects** | Lucide React, canvas-confetti |
| **Package manager** | pnpm |
| **Hosting** | Vercel |

---

## Design System

| Token | Value | Usage |
|---|---|---|
| **Primary Racing Green** | `#0B3D2E` | Hero accents, highlighted containers, CTA buttons |
| **Matte Black** | `#101110` | Main background and deep sections |
| **Champagne Gold** | `#D6C29A` | Key accents, active badges, borders, CTA hover |
| **Warm Ivory** | `#F3F0E8` | Headlines and body text |
| **Muted Grey** | `#999B96` | Secondary text and metadata |
| **Dark Green Surface** | `#12291F` | Cards, glass panels, list rows |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Priyanshu1523/Priyanshu_Portfolio.git
cd Priyanshu_Portfolio

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm run dev
```

The app runs at `http://localhost:5173` by default.

### Available Scripts

| Command | Description |
|---|---|
| `pnpm run dev` | Start the development server |
| `pnpm run build` | Create an optimized production build in `dist/` |
| `pnpm run preview` | Preview the production build locally |

---

## Project Structure

```text
Priyanshu_Portfolio/
├── public/                 # Static assets (favicon, profile photo)
├── src/
│   ├── assets/             # Images
│   ├── components/         # Navbar, Hero, About, Projects, Services,
│   │                       # TechStack, Experience, Education, Workflow,
│   │                       # Contact, Footer, Preloader, CustomCursor, ...
│   ├── data/
│   │   ├── portfolioData.js   # Personal info, services, skills, experience
│   │   └── projectsData.js    # Project list and case-study content
│   ├── utils/              # audio.js (Web Audio), smoothScroll.js (Lenis)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
├── vercel.json
└── package.json
```

---

## Customizing Content

All text content lives in two data files, so no component edits are needed for most updates:

- `src/data/portfolioData.js` — name, bio, contact links, stats, services, tech stack, experience, education
- `src/data/projectsData.js` — project categories, titles, descriptions, highlights, links

---

## Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com/). To receive submissions on your own email:

1. Get a free access key from Web3Forms.
2. Add it in `src/components/Contact.jsx` where the request to `https://api.web3forms.com/submit` is built.

> Tip: for a cleaner setup, store the key in a `.env` file as `VITE_WEB3FORMS_KEY` and read it with `import.meta.env.VITE_WEB3FORMS_KEY`.

---

## Deployment

The project is configured for [Vercel](https://vercel.com/) via `vercel.json`:

- Framework: Vite
- Build command: `pnpm run build`
- Output directory: `dist`
- SPA rewrite to `index.html`
- Long-term caching for `/assets/*`

**Live site:** [priyanshu-chauhan.vercel.app](https://priyanshu-chauhan.vercel.app/)

To deploy, import the GitHub repository in Vercel and keep the defaults. Every push to `main` redeploys automatically.

---

## Contact

**Priyanshu Chauhan** — Software Developer, Gujarat, India

- Portfolio: [priyanshu-chauhan.vercel.app](https://priyanshu-chauhan.vercel.app/)
- Email: [chauhanpriyanshu011@gmail.com](mailto:chauhanpriyanshu011@gmail.com)
- LinkedIn: [priyanshu-chauhan](https://www.linkedin.com/in/priyanshu-chauhan-54110a227/)

Open to freelance projects and full-time opportunities.
