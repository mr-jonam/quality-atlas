---
title: Testabilità e architettura
level: advanced
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [testability, architecture, observability, controllability]
updated: 2026-09-21
---

# Testabilità e architettura


La testabilità misura quanto un sistema supporti indagine e valutazione efficienti. È una proprietà architetturale, non solo un problema del testing.

Le leve principali sono osservabilità, controllabilità, decomponibilità, riproducibilità e comprensibilità. Servono log, metriche e trace significativi, input e tempo controllabili, confini chiari, configurazioni versionate, data builder, contratti espliciti e semantica degli errori.

Evita backdoor di produzione non sicure. Le interfacce diagnostiche richiedono autenticazione, autorizzazione, audit e controlli ambientali.
