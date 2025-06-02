# RR7: React Router v7 + Vite + Tailwind + Shadcn UI

> ⚡ A modern Nx-powered monorepo app scaffolded with **React Router v7**, **Tailwind CSS v4**, **Shadcn UI**, and **TanStack React Query**.

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npx nx serve rr7
```

Build for production:

```bash
npx nx build rr7
```

Explore the dependency graph:

```bash
npx nx graph
```

## 🛠️ Tech Stack

- **React Router v7**
- **Tailwind CSS v4**
- **Shadcn UI**
- **TanStack Query**
- **Vite** (via Nx plugin)
- **ESLint + Prettier** with Nx config
- **Typescript paths** configured via `vite-tsconfig-paths`

## 🧩 Project Structure

```
apps/
  rr7/
    └── src/
        ├── app/            # App entry
        ├── components/     # UI components (including shadcn)
        ├── lib/            # Custom hooks, utilities
        ├── pages/          # Routed pages (Foo, Bar, Baz)
        ├── styles.css      # Tailwind + Shadcn variables
        └── main.tsx        # App bootstrap
tools/
  generators/               # Custom Nx generators (if any)
```

## 🧪 Testing

Run all tests:

```bash
npx nx test rr7
```

> Test setup uses **Vitest** and `jsdom`.
