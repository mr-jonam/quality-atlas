---
title: Communication des défauts
level: foundation
roles: [qa-analyst, qa-engineer, developer, product]
tags: [defects, bug-report, communication, triage]
updated: 2026-09-21
---
# Communication des défauts


Un rapport de défaut utile aide une autre personne à comprendre le comportement observé, à le reproduire lorsque cela est possible et à juger de son impact.

### Rapport minimal

1. Titre spécifique : comportement, condition, conséquence.
2. Environnement et identifiant de build.
3. Conditions préalables et plus petite reproduction fiable.
4. Résultat observé et résultat attendu ou oracle violé.
5. Impact : utilisateurs concernés, données, fréquence, récupérabilité.
6. Preuve ciblée : journaux, réponse, capture d'écran ou trace sans données sensibles.
7. Reproductibilité et variabilité pertinente.

La gravité décrit l'impact ; la priorité décrit la planification. Ils s'informent mutuellement mais ne sont pas interchangeables. Le tri doit combiner l’impact du produit, le risque technique, la portée, la solution de contournement, le coût du retard et le risque de résolution.

Évitez les reproches, les affirmations absolues sans preuves et les pièces jointes volumineuses non filtrées.
