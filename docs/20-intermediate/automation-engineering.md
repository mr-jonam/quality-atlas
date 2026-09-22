---
title: Testautomatisierungstechnik
level: intermediate
roles: [qa-engineer, automation-engineer, developer]
tags: [test-automation, maintainability, test-pyramid, flakiness]
updated: 2026-09-21
---
# Testautomatisierungstechnik


Automatisierung ist Software, die Feedback generiert. Sein Wert hängt von der Erkennungsfähigkeit, der Geschwindigkeit, der Vertrauenswürdigkeit, den Wartungskosten und der Klarheit der Diagnose ab.

### Auswahlheuristik

Automatisiert sich, wenn eine Prüfung wiederholt wird, deterministisch genug, wertvoll bei häufiger Ausführung und kostengünstiger in der Wartung als die Alternativen. Behalten Sie die von Menschen geleitete Erkundung bei, um Neuheiten, Mehrdeutigkeiten, Benutzerfreundlichkeit und unerwartetes Verhalten zu erkennen.

Bevorzugen Sie viele schnelle, logiknahe Prüfungen, gezielte Service- und Vertragsprüfungen und eine kleine Anzahl kritischer User Journeys. Die Form ist kontextbezogen, keine Quote.

### Design für Vertrauen

- Kontrolldaten und Isolierzustand;
- auf beobachtbare Bedingungen warten, nicht auf eine willkürliche Zeit;
- Aussagekräftige Ergebnisse anstelle von Implementierungsdetails behaupten;
- Fehler unabhängig und unabhängig von der Reihenfolge halten;
- präzise Diagnosen erstellen und relevante Artefakte aufbewahren;
- Quarantäne nur mit Besitzer, Grund und Entfernungsdatum;
- Unregelmäßiges Verhalten messen und Grundursachen beheben.

Seitenobjekte oder ähnliche Abstraktionen sind nützlich, wenn sie stabile Benutzeraktionen ausdrücken. Vermeiden Sie Ebenen, die die Absicht verbergen oder die Anwendungsimplementierung reproduzieren.

Verwandt: [[ci-cd-quality-gates]], [[../30-advanced/testability-architecture]].
