---
title: Test di API e contratti
level: intermediate
roles: [qa-engineer, automation-engineer, developer]
tags: [api-testing, contracts, integration, data]
updated: 2026-09-21
---

# Test di API e contratti


I test API producono feedback rapido e mirato ai confini dei servizi. Considera il contratto come comportamento, non solo come schema.

Verifica metodi, path, status, header, tipi media, campi obbligatori o opzionali, autenticazione, autorizzazione, limiti, richieste non valide, paginazione, idempotenza, timeout, retry, forma degli errori e compatibilità.

I contract test verificano le assunzioni tra provider e consumer. Integrano, ma non sostituiscono, i test di integrazione ed end-to-end. La virtualizzazione riduce costo e instabilità; mantieni alcuni controlli reali per rilevare deriva tra simulazione e dipendenza.

Checklist: `templates/api-checklist.md`.
