---
title: Ingénierie d'automatisation des tests
level: intermediate
roles: [qa-engineer, automation-engineer, developer]
tags: [test-automation, maintainability, test-pyramid, flakiness]
updated: 2026-09-21
---
# Ingénierie d'automatisation des tests


L'automatisation est un logiciel qui génère du feedback. Sa valeur dépend de la capacité de détection, de la vitesse, de la confiance, du coût de maintenance et de la clarté du diagnostic.

### Heuristique de sélection

Automatisez lorsqu'une vérification est répétée, suffisamment déterministe, utile lorsqu'elle est exécutée fréquemment et moins chère à entretenir que ses alternatives. Conservez l’exploration humaine pour la nouveauté, l’ambiguïté, la convivialité et les comportements inattendus.

Préférez de nombreux contrôles rapides proches de la logique, des contrôles ciblés sur les services et les contrats, et un petit ensemble de parcours utilisateur critiques. La forme est contextuelle et non un quota.

### Concevoir pour la confiance

- contrôler les données et isoler l'état ;
- attendre des conditions observables et non un temps arbitraire ;
- affirmer des résultats significatifs plutôt que des détails de mise en œuvre ;
- garder les défaillances indépendantes et insensibles à l'ordre ;
- produire des diagnostics concis et conserver les artefacts pertinents ;
- mise en quarantaine uniquement avec un propriétaire, un motif et une date de retrait ;
- mesurer les comportements instables et corriger les causes profondes.

Les objets de page ou abstractions similaires sont utiles lorsqu'ils expriment des actions utilisateur stables. Évitez les couches qui cachent l’intention ou reproduisent l’implémentation de l’application.

Connexes : [[ci-cd-quality-gates]], [[../30-advanced/testability-architecture]].
