# Quality Atlas

Quality Atlas is an open, bilingual knowledge base for software quality assurance and testing. It supports onboarding, knowledge transfer, self-study, interview preparation, and team learning from foundation to advanced level.

Quality Atlas è una knowledge base aperta e bilingue dedicata alla quality assurance e al software testing. Supporta onboarding, knowledge transfer, studio autonomo, preparazione ai colloqui e apprendimento di team, dal livello base a quello avanzato.

## Start here / Inizia qui

- Open [`docs/00-start/home.md`](docs/00-start/home.md) in GitHub or Obsidian.
- Follow a role-based route in [`docs/00-start/learning-paths.md`](docs/00-start/learning-paths.md).
- Copy and adapt the worksheets in [`templates/`](templates/).
- Run the web reader with Node.js or Docker.

## Run the web reader / Avvia il sito

Node.js 20 or newer:

```bash
npm run dev
```

Then open `http://localhost:4173`.

Docker:

```bash
docker compose up --build
```

The reader indexes Markdown at startup and provides navigation, filters, bilingual search, reading progress, dark mode, and direct links to each source note. No package installation is required.

## Use with Obsidian / Usa con Obsidian

1. Clone or download the repository.
2. In Obsidian, choose **Open folder as vault**.
3. Select the repository root.
4. Start from `docs/00-start/home.md`.

The vault uses plain Markdown, YAML frontmatter, folders, tags, and wiki links. The committed Obsidian settings are intentionally minimal and contain no personal workspace state.

## Scope and safety / Ambito e sicurezza

The material is vendor-neutral and based on broadly available testing knowledge. Examples use fictional, generic systems. Do not contribute confidential information, credentials, personal data, customer names, internal architecture, or proprietary procedures. This repository is educational material, not a substitute for a context-specific quality, legal, security, or compliance review.

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md). Run `npm run check` before opening a pull request.

## License

- Documentation and templates: [CC BY 4.0](LICENSES/CC-BY-4.0.txt).
- Web reader, scripts, and configuration code: [MIT](LICENSES/MIT.txt).

See [`LICENSE`](LICENSE), [`NOTICE`](NOTICE), and [`LICENSE-DECISION.md`](LICENSE-DECISION.md) for scope and rationale.
