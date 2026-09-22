---
title: Portes de qualité CI/CD / Porte de qualité CI/CD
level: intermediate
roles: [qa-engineer, automation-engineer, test-lead, developer]
tags: [ci-cd, quality-gates, pipeline, feedback]
updated: 2026-09-21
---
# Portes de qualité CI/CD / Porte de qualité CI/CD


Un pipeline doit fournir des commentaires rapides et fiables et permettre une livraison en toute sécurité. Une porte n'est utile que lorsque son signal est pertinent, compris et utilisé.

### Commentaires multicouches

1. Avant la validation : formateur, analyse statique, vérifications locales ciblées.
2. Pull request : tests unitaires/composants, analyse de sécurité et de dépendances, tests d'intégration ciblés.
3. Branche principale : intégration plus large, contrat, migration et contrôles de parcours critiques.
4. Déploiement : tests de fumée, contrôles de santé, validation de la configuration.
5. Production : exposition progressive, indicateurs de niveau de service, alertes et signaux de restauration.

Effectuez les contrôles de signal élevé les plus rapides le plus tôt possible. Paralléliser le travail indépendant. Mettez soigneusement en cache et rendez visible l’invalidation du cache. Séparez une panne de produit d’une panne d’environnement ou d’infrastructure.

Ne convertissez pas chaque métrique en une porte dure. Les signaux consultatifs peuvent être meilleurs lorsque les seuils sont immatures. Examinez l’efficacité du portail en demandant ce qu’il attrape, retarde, rate et incite les gens à le contourner.
