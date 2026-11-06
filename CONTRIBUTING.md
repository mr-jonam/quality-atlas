# Contributing

Contributions that improve clarity, correctness, accessibility, or language parity are welcome.

## A small first contribution / Un primo contributo piccolo

Choose one: clarify a glossary definition, fix a broken public reference, or improve one worksheet instruction. Keep English and Italian aligned; describe the learning problem and the expected improvement in your pull request. / Scegli una definizione del glossario, un riferimento pubblico non funzionante o un'istruzione poco chiara in un template. Allinea inglese e italiano e spiega nella pull request il problema di apprendimento e il miglioramento atteso.

For a documentation-only edit, no installation is needed: edit Markdown and run `npm run check` with Node.js 20+. Use the [worked example](examples/first-release-review.md) to understand the intended level of specificity. / Per modificare la documentazione non servono installazioni: modifica il Markdown ed esegui `npm run check` con Node.js 20+. L'[esempio](examples/first-release-review.md) mostra il livello di dettaglio atteso.

## Content rules

- Keep every note useful without organization-specific context.
- Write English first and Italian second, with matching meaning.
- Use fictional, generic examples and non-sensitive sample data.
- Never add names, customer information, credentials, private URLs, internal architecture, or proprietary playbooks.
- Prefer concise explanations, observable outcomes, and practical checklists.
- Cite authoritative public sources when a claim depends on a standard or evolving practice.
- Add the required YAML frontmatter and update `updated` using `YYYY-MM-DD`.

## Workflow

1. Create or edit a focused note.
2. Link it from the closest map of content.
3. Run `npm run check`.
4. Review the diff for accidental sensitive data.
5. Submit a pull request explaining the learning outcome.

By contributing, you agree that documentation is licensed under CC BY 4.0 and code under MIT, as described in `LICENSE`.
