---
title: Performance and Reliability Testing
level: advanced
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [performance-testing, reliability, resilience, load-testing]
updated: 2026-09-21
---

# Performance and Reliability Testing


Begin with a workload model based on expected journeys, arrival patterns, data sizes, concurrency, geography, and dependencies. A tool-generated traffic count is not a workload model.

### Performance experiment types

- baseline and benchmark for comparison;
- load for expected demand;
- stress to locate limits and failure modes;
- spike for sudden change;
- endurance for leaks, saturation, and degradation;
- capacity for planning headroom.

Measure latency distributions, throughput, errors, saturation, queues, resource use, and downstream behavior. Warm-up, test data, cache state, network, and observability overhead can change results. Repeat controlled experiments and retain configuration with results.

Reliability testing also examines dependency failure, retry storms, partial degradation, failover, recovery, data integrity, and operator response. Chaos experiments require a hypothesis, blast-radius controls, observability, abort conditions, and informed approval.
