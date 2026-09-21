---
title: Testability and Architecture
level: advanced
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [testability, architecture, observability, controllability]
updated: 2026-09-21
---

# Testability and Architecture / Testabilità e architettura

## English

Testability is the degree to which a system supports efficient investigation and evaluation. It is an architectural property, not only a testing concern.

### Design levers

- **Observability**: meaningful logs, metrics, traces, events, and state inspection.
- **Controllability**: deterministic inputs, clocks, feature flags, dependency substitution, and resettable state.
- **Decomposability**: boundaries that allow focused checks.
- **Reproducibility**: versioned configuration, data builders, and captured conditions.
- **Understandability**: explicit contracts, models, and failure semantics.

Avoid adding unsafe production backdoors for testing. Diagnostic interfaces need authentication, authorization, audit, and environment controls.

### Architecture review prompts

Can a failure be localized? Can time and randomness be controlled? Can dependencies fail predictably in a test environment? Can data be created and removed safely? Can a change be exposed progressively and rolled back? Can consumers verify compatibility before deployment?

## Italiano

La testabilità misura quanto un sistema supporti indagine e valutazione efficienti. È una proprietà architetturale, non solo un problema del testing.

Le leve principali sono osservabilità, controllabilità, decomponibilità, riproducibilità e comprensibilità. Servono log, metriche e trace significativi, input e tempo controllabili, confini chiari, configurazioni versionate, data builder, contratti espliciti e semantica degli errori.

Evita backdoor di produzione non sicure. Le interfacce diagnostiche richiedono autenticazione, autorizzazione, audit e controlli ambientali.
