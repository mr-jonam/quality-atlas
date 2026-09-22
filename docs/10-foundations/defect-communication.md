---
title: Comunicazione dei difetti
level: foundation
roles: [qa-analyst, qa-engineer, developer, product]
tags: [defects, bug-report, communication, triage]
updated: 2026-09-21
---

# Comunicazione dei difetti


Un defect report utile permette di comprendere il comportamento osservato, riprodurlo quando possibile e valutarne l'impatto.

### Contenuto minimo

1. Titolo specifico: comportamento, condizione, conseguenza.
2. Ambiente e identificativo della build.
3. Precondizioni e riproduzione minima affidabile.
4. Risultato osservato e risultato atteso o oracolo violato.
5. Impatto: utenti o dati coinvolti, frequenza, recuperabilità.
6. Evidenze mirate prive di dati sensibili.
7. Riproducibilità e variabilità rilevante.

La severity descrive l'impatto; la priority descrive la pianificazione. Il triage combina impatto sul prodotto, rischio tecnico, diffusione, workaround, costo del ritardo e rischio della correzione.

Template: `templates/defect-report.md`.
