---
title: Testing Fundamentals
level: foundation
roles: [qa-analyst, qa-engineer, automation-engineer, developer]
tags: [testing, levels, types, lifecycle]
updated: 2026-09-21
---

# Testing Fundamentals


Testing is a set of activities used to discover information about a product and its risks. A **check** compares an observed result with an explicit expectation. **Exploration** combines learning, test design, and execution in a feedback loop.

### Common test levels

- **Unit**: a small piece of logic in isolation.
- **Component/service**: a deployable or meaningful subsystem.
- **Integration**: interactions across boundaries such as databases, queues, or external services.
- **System/end-to-end**: representative behavior across the assembled system.
- **Acceptance**: evidence that a solution supports a business or user need.

### Static and dynamic approaches

Static testing reviews requirements, examples, code, models, or designs without executing the software. Dynamic testing observes execution. Both can reveal important problems early.

### Confirmation and regression

Confirmation testing checks whether a reported problem was fixed. Regression testing looks for unintended impact elsewhere. A regression suite should evolve with risk; it is not an archive of every test ever written.

Related: [[test-design-techniques]], [[../20-intermediate/automation-engineering]].
