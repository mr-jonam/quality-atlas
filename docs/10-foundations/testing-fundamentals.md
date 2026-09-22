---
title: Grundlagen testen
level: foundation
roles: [qa-analyst, qa-engineer, automation-engineer, developer]
tags: [testing, levels, types, lifecycle]
updated: 2026-09-21
---
# Grundlagen testen


Beim Testen handelt es sich um eine Reihe von Aktivitäten, mit denen Informationen über ein Produkt und seine Risiken ermittelt werden. Bei einer **Prüfung** wird ein beobachtetes Ergebnis mit einer expliziten Erwartung verglichen. **Exploration** kombiniert Lernen, Testdesign und -ausführung in einer Feedbackschleife.

### Gängige Teststufen

- **Einheit**: ein kleines isoliertes Stück Logik.
- **Komponente/Dienst**: ein einsetzbares oder sinnvolles Subsystem.
- **Integration**: Interaktionen über Grenzen hinweg wie Datenbanken, Warteschlangen oder externe Dienste.
- **System/End-to-End**: repräsentatives Verhalten im gesamten zusammengesetzten System.
- **Akzeptanz**: Nachweis, dass eine Lösung ein Geschäfts- oder Benutzerbedürfnis unterstützt.

### Statische und dynamische Ansätze

Beim statischen Test werden Anforderungen, Beispiele, Code, Modelle oder Designs überprüft, ohne dass die Software ausgeführt wird. Dynamische Tests überwachen die Ausführung. Beides kann wichtige Probleme frühzeitig aufdecken.

### Bestätigung und Regression

Beim Bestätigungstest wird überprüft, ob ein gemeldetes Problem behoben wurde. Regressionstests suchen nach unbeabsichtigten Auswirkungen an anderer Stelle. Eine Regressionssuite sollte sich mit dem Risiko weiterentwickeln; Es handelt sich nicht um ein Archiv aller jemals geschriebenen Tests.

Verwandt: [[test-design-techniques]], [[../20-intermediate/automation-engineering]].
