# Linux & Virtualization Lab

A Linux and virtualization learning guide built with Next.js and Nextra for a university OS lab course.

**Live demo:** [Open on Vercel](https://ubuntu-vmware-wenp.vercel.app)

## Overview

Created for a university Operating Systems Laboratory course as a responsive guide to Linux fundamentals and virtual machines.

## Features

- Follow VMware Workstation and Ubuntu/Debian installation guides.
- Explore terminal commands, root access, swap, and dual boot.
- Navigate illustrated MDX lessons with the Nextra documentation theme.
- Search indexed documentation with Pagefind.

## Tech stack

Next.js 15, React 19, TypeScript, Nextra 4, Tailwind CSS, Pagefind.

## Run locally

Use Node.js 22.12 or newer and npm.

```sh
git clone https://github.com/ThePrimeShak/ubuntu_vmware.git
cd ubuntu_vmware
npm ci
npm run dev
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run start` | Serve the production Next.js build |
| `npm run lint` | Check code with ESLint |
| `npm run lint:fix` | Apply ESLint fixes |
| `npm run format` | Format project files |
| `npm run format:check` | Check formatting |
| `npm run postbuild` | Generate the Pagefind search index |

## Project structure

- `app/` — documentation pages, navigation metadata, and global styles.
- `public/images/` — installation screenshots.
- `next.config.mjs` — Nextra and redirect configuration.

## Scope and limitations

Educational documentation rather than a virtualization tool. The root URL redirects to `/intro`. The build generates the Pagefind search index.

## Author

Built by [ThePrimeShak](https://github.com/ThePrimeShak) · [LinkedIn](https://www.linkedin.com/in/theprimeshak/).
