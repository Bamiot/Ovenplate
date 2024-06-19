# Ovenplate

This is a template for Next.js with Bun. It's a full-featured stack for building web applications with a focus on developer experience and production readiness.

# Stack

- **Runtime**: [Bun 1.x](https://bun.sh/)
- **JavaScript Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Testing**: [Bun Test](https://bun.sh/docs/test/writing)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) with a small selection of pre-installed components
- **Form**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) **validation**. see usage on [shadcn docs](https://ui.shadcn.com/docs/components/form)
- State Management: [Zustand](https://zustand.surge.sh/)

# Features

## Theming

(WIP)

## Localization

(WIP)

# Installation

## Prerequisites

This stack use Bun if you don't have it installed yet, you can install it in one command line. Refere to [Bun Installation](https://bun.sh/docs/installation).

## Clone or use template

Use this repository as a template or clone it.

```bash
git clone https://github.com/bamiot/next-template.git
```

# Usage

## Development

```bash
bun --bun run dev
```

## Production

```bash
docker compose up
```

or

use [Portainer](https://www.portainer.io/) to deploy the stack

# License

[unlicense](https://unlicense.org/) - public domain
