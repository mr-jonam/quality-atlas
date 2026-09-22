---
title: Designtechniken testen
level: foundation
roles: [qa-analyst, qa-engineer, developer]
tags: [test-design, equivalence-partitioning, boundaries, state, pairwise]
updated: 2026-09-21
---
# Designtechniken testen


Techniken reduzieren die willkürliche Testauswahl. Kombinieren Sie sie je nach Risiko und verfügbarem Modell.

- **Äquivalenzpartitionierung**: Gruppieren Sie Eingaben, von denen erwartet wird, dass sie sich ähnlich verhalten; Probieren Sie jede aussagekräftige Gruppe aus.
- **Randwertanalyse**: Prüfung bei, knapp unterhalb und knapp oberhalb sinnvoller Grenzwerte.
- **Entscheidungstabellen**: Ordnen Sie Kombinationen von Bedingungen den Ergebnissen zu; nützlich für Geschäftsregeln.
- **Zustandsübergangstests**: Modellzustände, gültige Ereignisse, ungültige Ereignisse und resultierende Zustände.
- **Szenariotests**: Verfolgen Sie realistische Benutzer- oder Systemreisen über alle Funktionen hinweg.
- **Paarweises/kombinatorisches Testen**: Interaktionen zwischen Parametern abdecken, ohne jede Kombination zu testen.
- **Fehlerschätzung**: Nutzen Sie die Erfahrung, um auf wahrscheinliche Fehler zu zielen, und machen Sie dann die Heuristik explizit.

### Mini-Beispiel

Eine fiktive Buchungsregel akzeptiert 1 bis 8 Sitzplätze. Zu den nützlichen Partitionen gehören unter 1, gültig 1–8 und über 8. Zu den Grenzen gehören 0, 1, 8 und 9. Fügen Sie nicht numerische, leere, wiederholte Übermittlungs- und Parallelitätsfälle nur dann hinzu, wenn sie relevante Risiken darstellen.
