# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a Next.js 15 personal website project with the following structure:
- `personal/` - Main project directory containing the Next.js application
- Uses App Router architecture (Next.js 13+)
- TypeScript configuration with strict mode enabled
- Tailwind CSS v4 for styling with DaisyUI components
- ESLint with Next.js recommended configuration

## Common Commands

All commands should be run from the `personal/` directory:

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Development server runs on http://localhost:3000
```

## Architecture Notes

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 + DaisyUI components
- **Fonts**: Geist Sans and Geist Mono fonts from Google Fonts
- **TypeScript**: Strict mode enabled with path mapping (`@/*` points to root)
- **Build**: Uses Turbopack for faster development builds

## Key Configuration Files

- `package.json` - Dependencies and scripts
- `next.config.ts` - Next.js configuration (currently minimal)
- `tsconfig.json` - TypeScript configuration with strict settings
- `eslint.config.mjs` - ESLint configuration extending Next.js rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS

## Development Workflow

The project follows standard Next.js App Router patterns:
- Pages are defined in `app/` directory
- `layout.tsx` defines the root layout with font loading
- `page.tsx` files define route components
- Static assets are in `public/` directory