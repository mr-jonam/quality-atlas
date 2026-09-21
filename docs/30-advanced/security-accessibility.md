---
title: Security and Accessibility Testing
level: advanced
roles: [qa-analyst, qa-engineer, automation-engineer, test-lead, developer]
tags: [security-testing, accessibility, wcag, privacy]
updated: 2026-09-21
---

# Security and Accessibility Testing / Test di sicurezza e accessibilità

## English

Security and accessibility are continuous quality concerns. Automated tools can find patterns; human review, threat-informed exploration, and assistive-technology testing remain necessary.

### Security lenses

- assets, trust boundaries, identities, roles, and abuse cases;
- authentication, session lifecycle, authorization, and tenant isolation;
- input handling, output encoding, file processing, and injection paths;
- secrets, encryption, logging, retention, and privacy choices;
- dependency, configuration, supply-chain, and deployment risk;
- rate limiting, recovery, and incident evidence.

Only perform active security testing with explicit authorization and a controlled scope.

### Accessibility lenses

Use the current stable WCAG 2 recommendation as an authoritative reference. Cover keyboard-only use, visible focus, semantics, names and roles, text alternatives, contrast, zoom/reflow, motion, errors, timing, and representative assistive technologies. Conformance criteria are a floor, not a complete account of user experience.

## Italiano

Sicurezza e accessibilità sono dimensioni continue della qualità. Gli strumenti automatici rilevano pattern; restano necessari review umana, esplorazione guidata dalle minacce e test con tecnologie assistive.

Per la sicurezza considera asset, confini di fiducia, identità, autorizzazioni, sessioni, isolamento, input, file, secret, cifratura, log, dipendenze, configurazione, rate limit e recupero. Esegui test attivi solo con autorizzazione esplicita e scope controllato.

Per l'accessibilità usa la raccomandazione WCAG 2 stabile più recente. Verifica tastiera, focus, semantica, nomi e ruoli, alternative testuali, contrasto, zoom, reflow, movimento, errori, tempi e tecnologie assistive rappresentative. La conformità è una base, non l'intera esperienza utente.

References: [[../90-reference/further-reading]].
