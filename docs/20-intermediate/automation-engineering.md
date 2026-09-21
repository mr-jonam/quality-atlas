---
title: Test Automation Engineering
level: intermediate
roles: [qa-engineer, automation-engineer, developer]
tags: [test-automation, maintainability, test-pyramid, flakiness]
updated: 2026-09-21
---

# Test Automation Engineering / Ingegneria dell'automazione

## English

Automation is software that generates feedback. Its value depends on detection capability, speed, trust, maintenance cost, and diagnostic clarity.

### Selection heuristic

Automate when a check is repeated, deterministic enough, valuable when run frequently, and cheaper to maintain than its alternatives. Keep human-led exploration for novelty, ambiguity, usability, and unexpected behavior.

Prefer many fast checks close to the logic, focused service and contract checks, and a small set of critical user journeys. The shape is contextual, not a quota.

### Design for trust

- control data and isolate state;
- wait for observable conditions, not arbitrary time;
- assert meaningful outcomes rather than implementation detail;
- keep failures independent and order-insensitive;
- produce concise diagnostics and preserve relevant artifacts;
- quarantine only with an owner, reason, and removal date;
- measure flaky behavior and fix root causes.

Page objects or similar abstractions are useful when they express stable user actions. Avoid layers that hide intent or reproduce the application implementation.

## Italiano

L'automazione è software che genera feedback. Il valore dipende da capacità di rilevazione, velocità, fiducia, costo di manutenzione e chiarezza diagnostica.

Automatizza controlli ripetuti, sufficientemente deterministici, utili se eseguiti spesso e sostenibili. Mantieni esplorazione umana per novità, ambiguità, usabilità e comportamenti inattesi.

Preferisci molti controlli rapidi vicini alla logica, test mirati di servizio e contratto e pochi percorsi utente critici. Controlla dati e stato, attendi condizioni osservabili, verifica risultati significativi, isola i test e produci diagnostica concisa. Una quarantena deve avere owner, motivo e data di rimozione.

Related: [[ci-cd-quality-gates]], [[../30-advanced/testability-architecture]].
