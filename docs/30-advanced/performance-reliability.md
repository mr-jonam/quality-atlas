---
title: Tests de performances et de fiabilité
level: advanced
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [performance-testing, reliability, resilience, load-testing]
updated: 2026-09-21
---
# Tests de performances et de fiabilité


Commencez par un modèle de charge de travail basé sur les trajets attendus, les modèles d'arrivée, la taille des données, la simultanéité, la géographie et les dépendances. Un comptage de trafic généré par un outil n'est pas un modèle de charge de travail.

### Types de tests de performances

- référence et référence pour comparaison ;
- charge pour la demande attendue ;
- stress pour localiser les limites et les modes de défaillance ;
- pic pour changement soudain ;
- l'endurance aux fuites, à la saturation et à la dégradation ;
- capacité de marge de planification.

Mesurez les distributions de latence, le débit, les erreurs, la saturation, les files d'attente, l'utilisation des ressources et le comportement en aval. L'échauffement, les données de test, l'état du cache, le réseau et la surcharge d'observabilité peuvent modifier les résultats. Répétez les expériences contrôlées et conservez la configuration avec les résultats.

Les tests de fiabilité examinent également les échecs de dépendance, les tempêtes de nouvelles tentatives, la dégradation partielle, le basculement, la récupération, l'intégrité des données et la réponse de l'opérateur. Les expériences sur le chaos nécessitent une hypothèse, des contrôles du rayon d'explosion, de l'observabilité, des conditions d'abandon et une approbation éclairée.
