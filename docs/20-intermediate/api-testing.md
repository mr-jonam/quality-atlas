---
title: API- und Vertragstests
level: intermediate
roles: [qa-engineer, automation-engineer, developer]
tags: [api-testing, contracts, integration, data]
updated: 2026-09-21
---
# API- und Vertragstests


API-Tests liefern schnelle, gezielte Beweise an Dienstgrenzen. Behandeln Sie den Vertrag als Verhalten, nicht nur als Schema.

### Untersuchen

- Methoden, Pfade, Statuscodes, Header und Medientypen;
– erforderliche, optionale, nullbare, standardmäßige und unbekannte Felder;
- Authentifizierung, Autorisierung, Mietverhältnis und Ratenbeschränkungen;
- gültige, ungültige, Grenz-, Duplikat- und Out-of-Order-Anfragen;
- Paginierung, Filterung, Sortierung, Idempotenz, Zeitüberschreitungen und Wiederholungsversuche;
- Fehlerform, Korrelationskennungen und Offenlegung sensibler Daten;
- Abwärts- und Vorwärtskompatibilität für Verbraucher.

Vertragstests überprüfen Annahmen zwischen einem Anbieter und seinen Verbrauchern. Sie ergänzen Integrations- und End-to-End-Tests, ersetzen sie jedoch nicht. Verwenden Sie die Servicevirtualisierung, wenn eine Abhängigkeit kostspielig oder instabil ist, und behalten Sie gleichzeitig eine geringere Anzahl realer Integrationsprüfungen bei, um Abweichungen zu erkennen.
