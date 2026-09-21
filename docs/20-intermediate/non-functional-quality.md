---
title: Non-Functional Quality
level: intermediate
roles: [qa-analyst, qa-engineer, test-lead, developer, product]
tags: [quality-attributes, accessibility, security, performance, reliability]
updated: 2026-09-21
---

# Non-Functional Quality / Qualità non funzionale

## English

Quality attributes describe how a system behaves under relevant conditions. Make them concrete with scenarios: stimulus, environment, expected response, and measure.

Common attributes include performance efficiency, reliability, availability, resilience, security, privacy, accessibility, usability, compatibility, maintainability, portability, and operability.

Example: "When traffic reaches the agreed peak profile, 95% of representative search requests complete within the product target and the error rate stays below the agreed threshold." The numbers must come from product and operational needs, not from a generic benchmark.

### Cross-cutting questions

- What is the expected load and failure model?
- Which users or environments are most constrained?
- What data needs protection and retention controls?
- How will degradation be detected and communicated?
- What recovery objective and fallback behavior are acceptable?

## Italiano

Gli attributi di qualità descrivono come si comporta un sistema in condizioni rilevanti. Rendili concreti con scenari: stimolo, ambiente, risposta attesa e misura.

Tra gli attributi comuni: efficienza prestazionale, affidabilità, disponibilità, resilienza, sicurezza, privacy, accessibilità, usabilità, compatibilità, manutenibilità, portabilità e operabilità.

Le soglie devono derivare dai bisogni del prodotto e dell'esercizio, non da benchmark generici. Chiarisci carico e modello di guasto, utenti più vincolati, dati da proteggere, rilevazione del degrado, obiettivi di recupero e fallback accettabili.

Deep dives: [[../30-advanced/performance-reliability]], [[../30-advanced/security-accessibility]].
