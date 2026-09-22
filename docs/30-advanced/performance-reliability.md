---
title: Leistungs- und Zuverlässigkeitstests
level: advanced
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [performance-testing, reliability, resilience, load-testing]
updated: 2026-09-21
---
# Leistungs- und Zuverlässigkeitstests


Beginnen Sie mit einem Workload-Modell, das auf erwarteten Fahrten, Ankunftsmustern, Datengrößen, Parallelität, Geografie und Abhängigkeiten basiert. Eine vom Tool generierte Verkehrszählung ist kein Workload-Modell.

### Arten von Leistungsexperimenten

- Ausgangswert und Benchmark zum Vergleich;
- Belastung für erwarteten Bedarf;
- Stress, Grenzen und Fehlermöglichkeiten zu lokalisieren;
- Spitze für plötzliche Veränderung;
- Beständigkeit gegen Lecks, Sättigung und Verschlechterung;
- Kapazität für Planungsspielraum.

Messen Sie Latenzverteilungen, Durchsatz, Fehler, Sättigung, Warteschlangen, Ressourcennutzung und Downstream-Verhalten. Aufwärmen, Testdaten, Cache-Status, Netzwerk und Observability-Overhead können die Ergebnisse verändern. Wiederholen Sie kontrollierte Experimente und behalten Sie die Konfiguration mit den Ergebnissen bei.

Bei Zuverlässigkeitstests werden auch Abhängigkeitsfehler, Wiederholungsstürme, teilweise Verschlechterung, Failover, Wiederherstellung, Datenintegrität und Bedienerreaktion untersucht. Chaos-Experimente erfordern eine Hypothese, Kontrolle des Explosionsradius, Beobachtbarkeit, Abbruchbedingungen und eine informierte Genehmigung.
