---
title: Testabilité et Architecture
level: advanced
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [testability, architecture, observability, controllability]
updated: 2026-09-21
---
# Testabilité et Architecture


La testabilité est la mesure dans laquelle un système prend en charge une enquête et une évaluation efficaces. Il s'agit d'une propriété architecturale, pas seulement d'une question de test.

### Leviers de conception

- **Observabilité** : journaux, métriques, traces, événements et inspection d'état significatifs.
- **Contrôleabilité** : entrées déterministes, horloges, indicateurs de fonctionnalités, substitution de dépendances et état réinitialisable.
- **Décomposabilité** : limites permettant des contrôles ciblés.
- **Reproductibilité** : configuration versionnée, générateurs de données et conditions capturées.
- **Compréhension** : contrats explicites, modèles et sémantique des échecs.

Évitez d’ajouter des portes dérobées de production dangereuses pour les tests. Les interfaces de diagnostic nécessitent des contrôles d’authentification, d’autorisation, d’audit et d’environnement.

### Invites de révision de l'architecture

Une panne peut-elle être localisée ? Le temps et le hasard peuvent-ils être contrôlés ? Les dépendances peuvent-elles échouer de manière prévisible dans un environnement de test ? Les données peuvent-elles être créées et supprimées en toute sécurité ? Un changement peut-il être exposé progressivement et annulé ? Les consommateurs peuvent-ils vérifier la compatibilité avant le déploiement ?
