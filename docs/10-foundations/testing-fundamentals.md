---
title: Fondamentaux des tests
level: foundation
roles: [qa-analyst, qa-engineer, automation-engineer, developer]
tags: [testing, levels, types, lifecycle]
updated: 2026-09-21
---
# Fondamentaux des tests


Les tests sont un ensemble d'activités utilisées pour découvrir des informations sur un produit et ses risques. Un **check** compare un résultat observé avec une attente explicite. **Exploration** combine l'apprentissage, la conception de tests et l'exécution dans une boucle de rétroaction.

### Niveaux de test courants

- **Unit** : un petit morceau de logique isolé.
- **Composant/service** : un sous-système déployable ou significatif.
- **Intégration** : interactions au-delà des frontières telles que les bases de données, les files d'attente ou les services externes.
- **Système/de bout en bout** : comportement représentatif à travers le système assemblé.
- **Acceptation** : preuve qu'une solution répond à un besoin commercial ou utilisateur.

### Approches statiques et dynamiques

Les tests statiques examinent les exigences, les exemples, le code, les modèles ou les conceptions sans exécuter le logiciel. Les tests dynamiques observent l’exécution. Les deux peuvent révéler des problèmes importants à un stade précoce.

### Confirmation et régression

Les tests de confirmation vérifient si un problème signalé a été résolu. Les tests de régression recherchent un impact involontaire ailleurs. Une suite de régression devrait évoluer avec le risque ; ce n'est pas une archive de tous les tests jamais écrits.

Connexes : [[test-design-techniques]], [[../20-intermediate/automation-engineering]].
