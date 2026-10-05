# UzNauka

Multilingual website presenting scientific journals, conferences, academic services and contact information.

**Stack:** React 18 · Vite · Tailwind CSS · i18next · Swiper

## Run locally

```sh
npm ci
npm run dev
```

Use the local address printed by Vite.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run the existing ESLint configuration |

## Structure

- `src/components`: Site sections and reusable interface components.
- `src/assets/locals`: Uzbek, Russian and English translations.
- `src/assets`: Images and other source assets.
- `public`: Static public files.

Deploy the generated `dist/` directory separately. Build output and local environment files are not tracked in source control.
