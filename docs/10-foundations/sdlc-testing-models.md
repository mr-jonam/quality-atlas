---
title: SDLC and Testing Models
level: foundation
roles: [qa-analyst, qa-engineer, automation-engineer, test-lead, developer, product]
tags: [sdlc, agile, verification, validation, testing-approaches]
updated: 2026-09-22
---

# SDLC and Testing Models / SDLC e modelli di testing

## English

A delivery model shapes when information becomes available and how expensive feedback is. Testing adapts to that model; it is not a final phase added after implementation.

### Common models

- **Sequential** approaches plan distinct phases. They benefit from early reviews, explicit traceability and realistic integration rehearsals.
- **V-model** thinking pairs development activities with corresponding verification or validation activities.
- **Iterative and incremental** approaches deliver slices, learn from feedback and revise plans.
- **Agile methods** emphasize small batches, collaboration and adaptation. Scrum, Kanban and XP are different operating models, not testing techniques.
- **Continuous delivery** keeps software releasable through automation, observability and disciplined change management.

Verification asks whether work products meet specified conditions. Validation asks whether the resulting product serves its intended users and context. Both require judgment; neither is limited to executing tests.

Choose black-box techniques when behavior and interfaces are the focus, white-box techniques when structure is visible, and experience-based techniques when models are incomplete. Combine them when risk justifies it.

## Italiano

Il modello di delivery determina quando le informazioni diventano disponibili e quanto costa il feedback. Il testing si adatta a quel modello; non è una fase finale aggiunta dopo l'implementazione.

- Gli approcci **sequenziali** separano le fasi e richiedono review precoci, tracciabilità e prove realistiche di integrazione.
- Il **modello V** collega le attività di sviluppo alle corrispondenti attività di verifica o validazione.
- Gli approcci **iterativi e incrementali** consegnano porzioni, apprendono dal feedback e aggiornano i piani.
- I metodi **agili** favoriscono piccoli batch, collaborazione e adattamento. Scrum, Kanban e XP sono modelli operativi, non tecniche di test.
- La **continuous delivery** mantiene il software rilasciabile tramite automazione, osservabilità e gestione disciplinata del cambiamento.

La verifica chiede se gli artefatti rispettano le condizioni specificate. La validazione chiede se il prodotto serve utenti e contesto previsti. Usa tecniche black-box per comportamento e interfacce, white-box quando la struttura è visibile ed experience-based quando i modelli sono incompleti.

Related: [[testing-fundamentals]], [[test-design-techniques]], [[../20-intermediate/ci-cd-quality-gates]].

