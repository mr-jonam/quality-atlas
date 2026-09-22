---
title: Ingegneria dell'automazione
level: intermediate
roles: [qa-engineer, automation-engineer, developer]
tags: [test-automation, maintainability, test-pyramid, flakiness]
updated: 2026-09-21
---

# Ingegneria dell'automazione


L'automazione è software che genera feedback. Il valore dipende da capacità di rilevazione, velocità, fiducia, costo di manutenzione e chiarezza diagnostica.

Automatizza controlli ripetuti, sufficientemente deterministici, utili se eseguiti spesso e sostenibili. Mantieni esplorazione umana per novità, ambiguità, usabilità e comportamenti inattesi.

Preferisci molti controlli rapidi vicini alla logica, test mirati di servizio e contratto e pochi percorsi utente critici. Controlla dati e stato, attendi condizioni osservabili, verifica risultati significativi, isola i test e produci diagnostica concisa. Una quarantena deve avere owner, motivo e data di rimozione.

Correlati: [[ci-cd-quality-gates]], [[../30-advanced/testability-architecture]].
