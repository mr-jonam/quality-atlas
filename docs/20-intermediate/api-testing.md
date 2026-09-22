---
title: API and Contract Testing
level: intermediate
roles: [qa-engineer, automation-engineer, developer]
tags: [api-testing, contracts, integration, data]
updated: 2026-09-21
---

# API and Contract Testing


API tests provide fast, focused evidence at service boundaries. Treat the contract as behavior, not only a schema.

### Examine

- methods, paths, status codes, headers, and media types;
- required, optional, nullable, defaulted, and unknown fields;
- authentication, authorization, tenancy, and rate limits;
- valid, invalid, boundary, duplicate, and out-of-order requests;
- pagination, filtering, sorting, idempotency, timeouts, and retries;
- error shape, correlation identifiers, and sensitive-data exposure;
- backward and forward compatibility for consumers.

Contract tests check assumptions between a provider and its consumers. They complement, but do not replace, integration and end-to-end tests. Use service virtualization when a dependency is costly or unstable, while retaining a smaller number of real integration checks to detect drift.
