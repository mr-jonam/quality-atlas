---
title: Release Readiness Review
level: intermediate
roles: [test-lead, qa-engineer, developer, product]
tags: [release, readiness, risk, playbook]
updated: 2026-09-21
---

# Release Readiness Review / Verifica di readiness al rilascio

## English

A readiness review assembles decision evidence; it should not be a ceremonial QA approval.

### Review

- intended scope and user outcome;
- changed components, data, integrations, and configuration;
- top risks and corresponding prevention or test evidence;
- unresolved defects and explicit residual impact;
- deployment, migration, compatibility, and rollback plan;
- monitoring, alert ownership, support information, and incident path;
- progressive delivery or exposure controls;
- required approvals for security, privacy, accessibility, or regulation.

Record the decision, assumptions, owner, time, and conditions. A conditional release must have measurable conditions and a named follow-up.

## Italiano

La readiness raccoglie evidenze per decidere; non dovrebbe essere un'approvazione cerimoniale del QA.

Rivedi scope e outcome, componenti e configurazioni modificate, rischi principali, difetti aperti, deployment, migrazioni, compatibilità, rollback, monitoraggio, supporto, progressive delivery e approvazioni necessarie.

Registra decisione, assunzioni, owner, momento e condizioni. Un rilascio condizionato richiede condizioni misurabili e un follow-up assegnato.

Use `templates/release-readiness.md`.
