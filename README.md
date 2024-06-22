# Ovenplate

> If they don't have bread, let them eat buns. - Marie Antoinette

This is a template for Next.js with Bun. It's a full-featured stack for building web applications with a focus on developer experience and production readiness.

# Stack

- **Runtime**: [Bun 1.x](https://bun.sh/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **JavaScript Framework**: [Next.js 14](https://nextjs.org/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Testing**: [Bun Test](https://bun.sh/docs/test/writing)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) with a small selection of pre-installed components
- **Form**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) **validation**. see usage on [shadcn docs](https://ui.shadcn.com/docs/components/form)
- State Management: [Zustand](https://github.com/pmndrs/zustand?tab=readme-ov-file)

# Features

- **Zero Configuration**: No need to configure anything, just start coding.
- Theming (Dark Mode)
- Localization

# Installation

## Prerequisites

### Bun

This stack use Bun if you don't have it installed yet, you can install it in one command line. Refere to [Bun Installation](https://bun.sh/docs/installation).

### Vscode & Extensions

I strongly recommend using [Visual Studio Code](https://code.visualstudio.com/) with the following extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

and suggest the following extensions for better development experience:

- [Console Ninja](https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

### Docker

For production deployment, you need to have [Docker](https://www.docker.com/) installed.

or

[Portainer](https://www.portainer.io/) Instance.

## Clone or use template

Use this repository as a template or clone it.

```bash
git clone https://github.com/bamiot/next-template.git
```

# Usage

## Development

### With Bun

```bash
bun --bun run dev
```

### With Node

```bash
bun run dev
```

## Production

```bash
docker compose up
```

or

use [Portainer](https://www.portainer.io/) to deploy the stack.

# License

[unlicense](https://unlicense.org/) - public domain
