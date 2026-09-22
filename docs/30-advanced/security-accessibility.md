---
title: Security and Accessibility Testing
level: advanced
roles: [qa-analyst, qa-engineer, automation-engineer, test-lead, developer]
tags: [security-testing, accessibility, wcag, privacy]
updated: 2026-09-21
---

# Security and Accessibility Testing


Security and accessibility are continuous quality concerns. Automated tools can find patterns; human review, threat-informed exploration, and assistive-technology testing remain necessary.

### Security lenses

- assets, trust boundaries, identities, roles, and abuse cases;
- authentication, session lifecycle, authorization, and tenant isolation;
- input handling, output encoding, file processing, and injection paths;
- secrets, encryption, logging, retention, and privacy choices;
- dependency, configuration, supply-chain, and deployment risk;
- rate limiting, recovery, and incident evidence.

Only perform active security testing with explicit authorization and a controlled scope.

### Accessibility lenses

Use the current stable WCAG 2 recommendation as an authoritative reference. Cover keyboard-only use, visible focus, semantics, names and roles, text alternatives, contrast, zoom/reflow, motion, errors, timing, and representative assistive technologies. Conformance criteria are a floor, not a complete account of user experience.
