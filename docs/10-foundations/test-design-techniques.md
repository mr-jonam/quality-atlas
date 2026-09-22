---
title: Test Design Techniques
level: foundation
roles: [qa-analyst, qa-engineer, developer]
tags: [test-design, equivalence-partitioning, boundaries, state, pairwise]
updated: 2026-09-21
---

# Test Design Techniques


Techniques reduce arbitrary test selection. Combine them according to the risk and model available.

- **Equivalence partitioning**: group inputs expected to behave similarly; sample each meaningful group.
- **Boundary value analysis**: check at, just below, and just above meaningful limits.
- **Decision tables**: map combinations of conditions to outcomes; useful for business rules.
- **State-transition testing**: model states, valid events, invalid events, and resulting states.
- **Scenario testing**: follow realistic user or system journeys across features.
- **Pairwise/combinatorial testing**: cover interactions among parameters without testing every combination.
- **Error guessing**: use experience to target likely failures, then make the heuristic explicit.

### Mini example

A fictional booking rule accepts 1 to 8 seats. Useful partitions include below 1, valid 1–8, and above 8. Boundaries include 0, 1, 8, and 9. Add non-numeric, empty, repeated submission, and concurrency cases only when they represent relevant risks.
