---
title: CI/CD Quality Gates
level: intermediate
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [ci-cd, quality-gates, pipeline, feedback]
updated: 2026-09-21
---

# CI/CD Quality Gates / Quality gate CI/CD

## English

A pipeline should give fast, trustworthy feedback and support safe delivery. A gate is useful only when its signal is relevant, understood, and acted upon.

### Layered feedback

1. Before commit: formatter, static analysis, focused local checks.
2. Pull request: unit/component tests, security and dependency analysis, targeted integration tests.
3. Main branch: broader integration, contract, migration, and critical journey checks.
4. Deployment: smoke tests, health checks, configuration validation.
5. Production: progressive exposure, service-level indicators, alerts, and rollback signals.

Keep the fastest high-signal checks earliest. Parallelize independent work. Cache carefully and make cache invalidation visible. Separate a product failure from an environment or infrastructure failure.

Do not convert every metric into a hard gate. Advisory signals may be better when thresholds are immature. Review gate effectiveness by asking what it catches, delays, misses, and causes people to bypass.

## Italiano

Una pipeline deve offrire feedback rapido e affidabile e supportare delivery sicuro. Un gate è utile solo se il segnale è pertinente, compreso e seguito da un'azione.

Distribuisci i controlli tra pre-commit, pull request, branch principale, deployment e produzione. Posiziona prima i controlli veloci ad alto segnale, parallelizza attività indipendenti e distingui fallimenti del prodotto da problemi di ambiente.

Non trasformare ogni metrica in blocco. Usa segnali informativi quando le soglie sono immature e verifica periodicamente cosa il gate rileva, rallenta, non vede o induce a bypassare.
