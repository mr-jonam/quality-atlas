---
title: Fehlerkommunikation
level: foundation
roles: [qa-analyst, qa-engineer, developer, product]
tags: [defects, bug-report, communication, triage]
updated: 2026-09-21
---
# Fehlerkommunikation


Ein nützlicher Fehlerbericht hilft einer anderen Person, das beobachtete Verhalten zu verstehen, es nach Möglichkeit zu reproduzieren und die Auswirkungen zu beurteilen.

### Mindestbericht

1. Spezifischer Titel: Verhalten, Zustand, Konsequenz.
2. Umgebungs- und Build-ID.
3. Voraussetzungen und kleinste zuverlässige Reproduktion.
4. Beobachtetes Ergebnis und erwartetes Ergebnis oder verletztes Orakel.
5. Auswirkungen: betroffene Benutzer, Daten, Häufigkeit, Wiederherstellbarkeit.
6. Fokussierte Beweise: Protokolle, Antworten, Screenshots oder Traces ohne sensible Daten.
7. Reproduzierbarkeit und relevante Variabilität.

Der Schweregrad beschreibt die Auswirkung; Priorität beschreibt die Planung. Sie informieren sich gegenseitig, sind aber nicht austauschbar. Bei der Triage sollten Produktauswirkungen, technisches Risiko, Reichweite, Problemumgehung, Verzögerungskosten und Fehlerbehebungsrisiko kombiniert werden.

Vermeiden Sie Schuldzuweisungen, absolute Behauptungen ohne Beweise und große ungefilterte Anhänge.
