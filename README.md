# Emily Rodriguez Portfolio

[![React](https://img.shields.io/badge/React-19-20232A?logo=react)](https://react.dev/)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-0ea5e9)](#main-features)
[![Build](https://img.shields.io/badge/Build-Passing-22c55e)](#installation-and-run)
[![License](https://img.shields.io/badge/License-Not%20specified-lightgrey)](#license)

Professional portfolio built with React to showcase technical profile, skill stack, academic/professional background, and featured projects through a modern, responsive, user-focused interface.

## Quick Highlights

- Modern UI with responsive behavior across desktop, tablet, and mobile.
- Project gallery with modal details and external repository links.
- Interactive About section powered by Vanta NET + Three.js.
- CV download CTA integrated in the Hero section.
- Accessibility-focused improvements in header, navigation, and footer.

## Overview

This project corresponds to Task 2 from Apexcify Technologies and was evolved from a Create React App baseline into a more polished visual experience with:

- Fixed navigation with responsive menu (desktop + mobile drawer).
- Main hero section with a CV download call-to-action.
- About section with interactive background using Vanta + Three.js.
- Skills grouped by categories with Devicon iconography.
- Education and experience in a mobile-optimized layout.
- Projects with cards, detail modal, and external links.
- Contact footer with accessibility improvements and social links.

## Tech Stack

- React 19
- JavaScript (ES6+)
- Modular CSS by section
- React Icons
- Devicon
- Vanta.js + Three.js
- React Scripts (Create React App)

## Project Structure

```text
src/
	App.js
	pages/
		Header.jsx
		Hero.jsx
		About.jsx
		SkillsCards.jsx
		EducationExperience.jsx
		ProjectSection.jsx
		Footer.jsx
		Sidebar.jsx
	assets/
		css/
			Header.css
			Hero.css
			About.css
			SkillsCards.css
			EducationExperience.css
			ProjectsSection.css
			Footer.css
public/
	index.html
	manifest.json
	...
```

## Main Features

### Header and Navigation

- Smooth scroll to internal sections.
- Active section detection using IntersectionObserver.
- Mobile menu with overlay, focus handling, and Escape-to-close.

### Hero

- Professional presentation with glow typography effects.
- CV download button.

For the download to work, the file must exist at:

- public/cv-emily-rodriguez.pdf

### About

- Dynamic network background (Vanta NET) with proper cleanup on unmount.

### Skills

- Grouped categories: Frontend, Backend, Databases, and Tools.
- Visual icons for fast stack scanning.

### Education and Experience

- Education carousel with controls, counter, and dots.
- Experience list with cards optimized for multiple screen sizes.

### Projects

- Responsive card grid.
- Project detail modal with outside-click close and Escape key support.
- GitHub links when available.

### Footer

- Clickable contact actions (tel/mail).
- Social links with accessible labels.
- Responsive layout and visual consistency with the full site.

## Installation and Run

### 1) Clone repository

```bash
git clone https://github.com/EmilySelenia01/apexcifytechnologys_task_2.git
cd apexcifytechnologys_task_2
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run in development

```bash
npm start
```

Application available at:

- http://localhost:3000

### 4) Production build

```bash
npm run build
```

## Available Scripts

- npm start: starts the development server.
- npm run build: creates an optimized production build.
- npm test: runs tests in watch mode.
- npm run eject: exposes CRA internal configuration (irreversible).

## Recently Implemented Improvements

- Header visual refinements (desktop and mobile).
- Responsive fixes in Education/Experience and Projects to prevent overflow.
- Footer improvements with a more professional structure and better accessibility.
- Personalized branding in browser title and manifest.
- CV download button integration in Hero.

## Suggested Next Improvements

- Add CV preview along with download.
- Introduce lazy loading for heavier assets.
- Add integration tests for navigation and project modal behavior.
- Publish live demo on Vercel/Netlify and include the URL in this README.

## Author

Emily Selenia Rodriguez Mendoza

- GitHub: https://github.com/EmilySelenia01
- LinkedIn: https://linkedin.com/in/emily-rodríguez-/
- WhatsApp: https://wa.me/50686315227

## License

No license file is currently defined for this repository.
