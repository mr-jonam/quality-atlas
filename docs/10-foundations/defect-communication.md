---
title: Defect Communication
level: foundation
roles: [qa-analyst, qa-engineer, developer, product]
tags: [defects, bug-report, communication, triage]
updated: 2026-09-21
---

# Defect Communication


A useful defect report helps another person understand the observed behavior, reproduce it when possible, and judge impact.

### Minimum report

1. Specific title: behavior, condition, consequence.
2. Environment and build identifier.
3. Preconditions and smallest reliable reproduction.
4. Observed result and expected result or violated oracle.
5. Impact: affected users, data, frequency, recoverability.
6. Focused evidence: logs, response, screenshot, or trace without sensitive data.
7. Reproducibility and relevant variability.

Severity describes impact; priority describes scheduling. They inform each other but are not interchangeable. Triage should combine product impact, technical risk, reach, workaround, cost of delay, and fix risk.

Avoid blame, absolute claims without evidence, and large unfiltered attachments.
