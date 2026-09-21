# Project map

- Purpose: bilingual, vendor-neutral QA and software-testing knowledge base.
- Stack: Markdown vault plus a dependency-free Node.js web reader.
- Entry points: `README.md`, `docs/00-start/home.md`, `web/server.mjs`.
- Content: `docs/`; reusable worksheets: `templates/`.
- Web UI: `web/public/`; no client or runtime dependencies.
- Validation: `npm run check`.
- Local web: `npm run dev`, then open `http://localhost:4173`.
- Docker: `docker compose up --build`.
- CI: `.github/workflows/validate.yml`.
- Config: `package.json`, `docker-compose.yml`, `.obsidian/`.
- Conventions: one bilingual note per topic; English first, Italian second.
- Every note needs YAML fields: `title`, `level`, `roles`, `tags`, `updated`.
- Use relative Markdown links or Obsidian wiki links; never add personal or client data.
- Licensing: documentation CC BY 4.0; site/scripts MIT. See `LICENSE-DECISION.md`.
