---
title: SDLC and Testing Models
level: foundation
roles: [qa-analyst, qa-engineer, automation-engineer, test-lead, developer, product]
tags: [sdlc, agile, verification, validation, testing-approaches]
updated: 2026-09-22
---

# SDLC and Testing Models


A delivery model shapes when information becomes available and how expensive feedback is. Testing adapts to that model; it is not a final phase added after implementation.

### Common models

- **Sequential** approaches plan distinct phases. They benefit from early reviews, explicit traceability and realistic integration rehearsals.
- **V-model** thinking pairs development activities with corresponding verification or validation activities.
- **Iterative and incremental** approaches deliver slices, learn from feedback and revise plans.
- **Agile methods** emphasize small batches, collaboration and adaptation. Scrum, Kanban and XP are different operating models, not testing techniques.
- **Continuous delivery** keeps software releasable through automation, observability and disciplined change management.

Verification asks whether work products meet specified conditions. Validation asks whether the resulting product serves its intended users and context. Both require judgment; neither is limited to executing tests.

Choose black-box techniques when behavior and interfaces are the focus, white-box techniques when structure is visible, and experience-based techniques when models are incomplete. Combine them when risk justifies it.

Related: [[testing-fundamentals]], [[test-design-techniques]], [[../20-intermediate/ci-cd-quality-gates]].
