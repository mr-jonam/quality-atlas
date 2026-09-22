---
title: Tests API et contrats
level: intermediate
roles: [qa-engineer, automation-engineer, developer]
tags: [api-testing, contracts, integration, data]
updated: 2026-09-21
---
# Tests API et contrats


Les tests API fournissent des preuves rapides et ciblées aux limites du service. Traitez le contrat comme un comportement, pas seulement comme un schéma.

### Examiner

- méthodes, chemins, codes d'état, en-têtes et types de médias ;
- champs obligatoires, facultatifs, nullables, par défaut et inconnus ;
- authentification, autorisation, location et limites tarifaires ;
- demandes valides, invalides, limites, en double et dans le désordre ;
- pagination, filtrage, tri, idempotence, délais d'attente et tentatives ;
- forme d'erreur, identifiants de corrélation et exposition aux données sensibles ;
- compatibilité ascendante et ascendante pour les consommateurs.

Les tests contractuels vérifient les hypothèses entre un fournisseur et ses consommateurs. Ils complètent, mais ne remplacent pas, les tests d'intégration et de bout en bout. Utilisez la virtualisation des services lorsqu'une dépendance est coûteuse ou instable, tout en conservant un nombre réduit de contrôles d'intégration réels pour détecter les dérives.
