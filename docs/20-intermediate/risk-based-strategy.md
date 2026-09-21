---
title: Risk-Based Test Strategy
level: intermediate
roles: [qa-analyst, qa-engineer, test-lead, product]
tags: [risk, strategy, planning, coverage]
updated: 2026-09-21
---

# Risk-Based Test Strategy / Strategia di test basata sul rischio

## English

A test strategy explains how the team will obtain useful evidence about the most important risks within real constraints.

### Build the strategy

1. Identify quality risks as uncertain events with consequences.
2. Estimate impact and likelihood using simple relative scales.
3. Add modifiers: detectability, exposure, reversibility, novelty, and dependency depth.
4. Select prevention, review, test, monitoring, and recovery activities.
5. Define environments, data, responsibilities, entry signals, and exit evidence.
6. Reassess when scope, architecture, incidents, or usage changes.

Coverage is multidimensional: requirements, risks, code, interfaces, data, platforms, users, and operational scenarios. No single percentage represents all of it.

### Communicate residual risk

State what was examined, what was not, important results, confidence limits, active mitigations, and who accepts the remaining risk. A release decision is a business decision informed by quality evidence.

## Italiano

Una strategia descrive come ottenere evidenze utili sui rischi più importanti entro vincoli reali.

1. Identifica eventi incerti con conseguenze sulla qualità.
2. Stima impatto e probabilità con scale relative semplici.
3. Considera rilevabilità, esposizione, reversibilità, novità e dipendenze.
4. Scegli prevenzione, review, test, monitoraggio e recupero.
5. Definisci ambienti, dati, responsabilità, segnali di ingresso ed evidenze di uscita.
6. Rivaluta quando cambiano scope, architettura, incidenti o utilizzo.

La copertura è multidimensionale: requisiti, rischi, codice, interfacce, dati, piattaforme, utenti e scenari operativi. La decisione di rilascio è una decisione di business informata dalle evidenze, non un semplice voto del team QA.

Use: `templates/test-strategy.md` and [[../40-playbooks/release-readiness]].
