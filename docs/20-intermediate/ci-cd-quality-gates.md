---
title: CI/CD Quality Gates
level: intermediate
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [ci-cd, quality-gates, pipeline, feedback]
updated: 2026-09-21
---

# CI/CD Quality Gates / Quality gate CI/CD


A pipeline should give fast, trustworthy feedback and support safe delivery. A gate is useful only when its signal is relevant, understood, and acted upon.

### Layered feedback

1. Before commit: formatter, static analysis, focused local checks.
2. Pull request: unit/component tests, security and dependency analysis, targeted integration tests.
3. Main branch: broader integration, contract, migration, and critical journey checks.
4. Deployment: smoke tests, health checks, configuration validation.
5. Production: progressive exposure, service-level indicators, alerts, and rollback signals.

Keep the fastest high-signal checks earliest. Parallelize independent work. Cache carefully and make cache invalidation visible. Separate a product failure from an environment or infrastructure failure.

Do not convert every metric into a hard gate. Advisory signals may be better when thresholds are immature. Review gate effectiveness by asking what it catches, delays, misses, and causes people to bypass.
