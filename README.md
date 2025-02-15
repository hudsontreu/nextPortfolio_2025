# Portfolio 2025

A modern portfolio website built with Next.js and Sanity.

## Project Structure

This is a monorepo containing two main projects:

- `nextjs-app/`: Next.js frontend application
- `sanity-projects/`: Sanity CMS backend

## Getting Started

1. Install dependencies:
```bash
# Install root dependencies
pnpm install

# Install project dependencies
cd nextjs-app && pnpm install
cd ../sanity-projects && pnpm install
```

2. Set up environment variables:
```bash
# In web/.env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

3. Run the development servers:
```bash
# Run Next.js frontend
cd nextjs-app && pnpm dev

# Run Sanity Studio
cd sanity-projects && pnpm dev
```

## Development

- Frontend runs at: http://localhost:3000
- Sanity Studio runs at: http://localhost:3333

## License

MIT
