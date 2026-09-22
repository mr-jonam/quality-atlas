---
title: Testbarkeit und Architektur
level: advanced
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [testability, architecture, observability, controllability]
updated: 2026-09-21
---
# Testbarkeit und Architektur


Unter Testbarkeit versteht man den Grad, in dem ein System eine effiziente Untersuchung und Bewertung unterstützt. Es handelt sich um eine architektonische Immobilie, nicht nur um ein Prüfobjekt.

### Design-Hebel

- **Beobachtbarkeit**: aussagekräftige Protokolle, Metriken, Spuren, Ereignisse und Zustandsprüfung.
- **Steuerbarkeit**: deterministische Eingaben, Uhren, Funktionsflags, Abhängigkeitssubstitution und rücksetzbarer Zustand.
- **Zerlegbarkeit**: Grenzen, die gezielte Prüfungen ermöglichen.
- **Reproduzierbarkeit**: versionierte Konfiguration, Datenersteller und erfasste Bedingungen.
- **Verständlichkeit**: explizite Verträge, Modelle und Fehlersemantik.

Vermeiden Sie das Hinzufügen unsicherer Produktions-Hintertüren zu Testzwecken. Diagnoseschnittstellen erfordern Authentifizierung, Autorisierung, Prüfung und Umgebungskontrollen.

### Eingabeaufforderungen zur Architekturüberprüfung

Kann ein Fehler lokalisiert werden? Können Zeit und Zufall kontrolliert werden? Können Abhängigkeiten in einer Testumgebung vorhersehbar fehlschlagen? Können Daten sicher erstellt und entfernt werden? Kann eine Änderung schrittweise offengelegt und rückgängig gemacht werden? Können Verbraucher die Kompatibilität vor der Bereitstellung überprüfen?
