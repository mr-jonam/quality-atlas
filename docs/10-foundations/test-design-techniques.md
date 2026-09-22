---
title: Techniques de conception de tests
level: foundation
roles: [qa-analyst, qa-engineer, developer]
tags: [test-design, equivalence-partitioning, boundaries, state, pairwise]
updated: 2026-09-21
---
# Techniques de conception de tests


Les techniques réduisent la sélection arbitraire des tests. Combinez-les en fonction du risque et du modèle disponible.

- **Partitionnement d'équivalence** : les entrées de groupe devraient se comporter de manière similaire ; échantillonnez chaque groupe significatif.
- **Analyse des valeurs limites** : vérifiez aux limites significatives, juste en dessous et juste au-dessus.
- **Tableaux de décision** : mapper les combinaisons de conditions aux résultats ; utile pour les règles métier.
- **Tests de transition d'état** : états du modèle, événements valides, événements non valides et états résultants.
- **Tests de scénarios** : suivez des parcours réalistes d'utilisateur ou de système à travers les fonctionnalités.
- **Tests par paires/combinatoires** : couvrent les interactions entre les paramètres sans tester chaque combinaison.
- **Erreur devinée** : utilisez l'expérience pour cibler les échecs probables, puis rendez l'heuristique explicite.

### Mini-exemple

Une règle de réservation fictive accepte de 1 à 8 places. Les partitions utiles incluent ci-dessous 1, valides 1 à 8 et supérieurs à 8. Les limites incluent 0, 1, 8 et 9. Ajoutez des cas de soumission non numériques, vides, répétés et de concurrence uniquement lorsqu'ils représentent des risques pertinents.
