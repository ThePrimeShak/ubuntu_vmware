# Linux & Virtualization Lab

A responsive learning guide for an Operating Systems Laboratory course. It covers Linux fundamentals, virtualization, VMware Workstation, Ubuntu and Debian installation, terminal commands, root access, swap, and dual boot.

## Tech stack

- Next.js 15 and React 19
- Nextra 4 documentation theme
- TypeScript and Tailwind CSS
- Pagefind search

## Run locally

Use Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root URL redirects to `/intro`.

## Quality checks

```bash
npm run lint
npm run format:check
npm run build
```

## Project structure

- `app/` — documentation pages, navigation metadata, and global styling
- `public/images/` — step-by-step installation screenshots
- `next.config.mjs` — Nextra and redirect configuration

## Author

Created by [ThePrimeShak](https://www.linkedin.com/in/ThePrimeShak) for an Operating Systems Lab course. Source code is available on [GitHub](https://github.com/ThePrimeShak/ubuntu_vmware).
