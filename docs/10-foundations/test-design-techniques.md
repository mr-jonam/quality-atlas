---
title: Tecniche di progettazione dei test
level: foundation
roles: [qa-analyst, qa-engineer, developer]
tags: [test-design, equivalence-partitioning, boundaries, state, pairwise]
updated: 2026-09-21
---

# Tecniche di progettazione dei test


Le tecniche riducono la selezione arbitraria dei test. Combinale in base al rischio e al modello disponibile.

- **Partizionamento di equivalenza**: raggruppa input con comportamento atteso simile.
- **Analisi dei valori limite**: verifica il limite, il valore subito precedente e quello successivo.
- **Tabelle decisionali**: collegano combinazioni di condizioni e risultati.
- **Transizioni di stato**: modellano stati, eventi validi o invalidi e stati risultanti.
- **Scenari**: seguono percorsi realistici di utenti o sistemi.
- **Pairwise/combinatorio**: copre interazioni tra parametri senza provare ogni combinazione.
- **Error guessing**: usa l'esperienza per colpire errori probabili, rendendo esplicita l'euristica.

### Esempio minimo

Una regola fittizia accetta da 1 a 8 posti. Le partizioni includono valori sotto 1, validi 1–8 e sopra 8; i limiti includono 0, 1, 8 e 9. Aggiungi casi vuoti, non numerici, invii ripetuti o concorrenza solo se rappresentano rischi pertinenti.

Practice with: [[../40-playbooks/exploratory-session]] and `templates/test-charter.md`.
