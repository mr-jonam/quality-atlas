---
title: SDLC et modèles de test
level: foundation
roles: [qa-analyst, qa-engineer, automation-engineer, test-lead, developer, product]
tags: [sdlc, agile, verification, validation, testing-approaches]
updated: 2026-09-22
---
# SDLC et modèles de test


Un modèle de prestation détermine le moment où les informations deviennent disponibles et le coût des commentaires. Les tests s'adaptent à ce modèle ; il ne s'agit pas d'une phase finale ajoutée après la mise en œuvre.

### Modèles courants

- Les approches **séquentielles** planifient des phases distinctes. Ils bénéficient de revues précoces, d’une traçabilité explicite et de répétitions d’intégration réalistes.
- La réflexion **V-model** associe les activités de développement aux activités de vérification ou de validation correspondantes.
- Les approches **itératives et incrémentielles** fournissent des tranches, apprennent des commentaires et révisent les plans.
- **Les méthodes agiles** mettent l'accent sur les petits lots, la collaboration et l'adaptation. Scrum, Kanban et XP sont des modèles opérationnels différents, et non des techniques de test.
- La **livraison continue** garantit la disponibilité des logiciels grâce à l'automatisation, à l'observabilité et à une gestion disciplinée des changements.

La vérification demande si les produits du travail répondent à des conditions spécifiées. La validation demande si le produit résultant répond aux utilisateurs et au contexte prévus. Les deux nécessitent du jugement ; ni l’un ni l’autre ne se limite à l’exécution de tests.

Choisissez des techniques de boîte noire lorsque le comportement et les interfaces sont au centre des préoccupations, des techniques de boîte blanche lorsque la structure est visible et des techniques basées sur l'expérience lorsque les modèles sont incomplets. Combinez-les lorsque le risque le justifie.

Connexes : [[testing-fundamentals]], [[test-design-techniques]], [[../20-intermediate/ci-cd-quality-gates]].
