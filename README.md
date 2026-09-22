# Atlas de qualité

Quality Atlas est une base de connaissances ouverte en français pour l'assurance qualité et les tests de logiciels. Elle prend en charge l'intégration, le transfert de connaissances, l'auto-apprentissage, la préparation aux entretiens et l'apprentissage en équipe du niveau élémentaire au niveau avancé.


## Commencez ici

- Ouvrez [`docs/00-start/home.md`](docs/00-start/home.md) dans GitHub ou Obsidian.
- Utilisez la feuille de route indépendante [`QA Engineer`](docs/00-start/qa-engineer-roadmap.md) pour un parcours séquencé inspiré des programmes publics communs.
- Suivez un itinéraire basé sur les rôles dans [`docs/00-start/learning-paths.md`](docs/00-start/learning-paths.md).
- Copiez et adaptez les feuilles de travail dans [`templates/`](templates/).
- Exécutez le lecteur Web avec Node.js ou Docker.

## Exécutez le lecteur Web

Node.js 20 ou version ultérieure :

```bash
npm exécuter le développement
```

Ensuite, ouvrez `http://localhost:4173`.

Docker :

```bash
docker compose --build
```

Le lecteur indexe Markdown au démarrage et propose une navigation, des filtres, une recherche plein texte, une progression de la lecture, un mode sombre et des liens directs vers chaque note source. Aucune installation de package n’est requise.

## Utiliser avec l'obsidienne

1. Clonez ou téléchargez le référentiel.
2. Dans Obsidian, choisissez **Ouvrir le dossier en tant que coffre-fort**.
3. Sélectionnez la racine du référentiel.
4. Commencez à partir de `docs/00-start/home.md`.

Le coffre-fort utilise du Markdown simple, du frontmatter YAML, des dossiers, des balises et des liens wiki. Les paramètres Obsidian validés sont intentionnellement minimaux et ne contiennent aucun état d'espace de travail personnel.

## Portée et sécurité

Le matériel est indépendant du fournisseur et basé sur des connaissances en matière de tests largement disponibles. Les exemples utilisent des systèmes fictifs et génériques. Ne fournissez pas d’informations confidentielles, d’informations d’identification, de données personnelles, de noms de clients, d’architecture interne ou de procédures exclusives. Ce référentiel est un matériel pédagogique et ne remplace pas un examen de qualité, juridique, de sécurité ou de conformité spécifique au contexte.

## Contribuer

Lisez [`CONTRIBUTING.md`](CONTRIBUTING.md). Exécutez `npm run check` avant d'ouvrir une pull request.

## Assistance

Si Quality Atlas facilite votre apprentissage ou votre intégration, vous pouvez prendre en charge sa maintenance via [GitHub Sponsors](https://github.com/sponsors/mr-jonam). Les dons sont facultatifs et n’influencent pas le contenu pédagogique.GitHub affiche également le bouton **Parrainer** en utilisant [`.github/FUNDING.yml`](.github/FUNDING.yml).

## Licence

- Documentation et modèles : [CC BY 4.0](LICENSES/CC-BY-4.0.txt).
- Lecteur Web, scripts et code de configuration : [MIT](LICENSES/MIT.txt).

Voir [`LICENSE`](LICENSE), [`NOTICE`](NOTICE) et [`LICENSE-DECISION.md`](LICENSE-DECISION.md) pour connaître la portée et la justification.

## Versions linguistiques

Choisissez la documentation complète dans votre langue :

- [Main / Bilingual](https://github.com/mr-jonam/quality-atlas/tree/main)
- [English](https://github.com/mr-jonam/quality-atlas/tree/lang/en)
- [Italiano](https://github.com/mr-jonam/quality-atlas/tree/lang/it)
- [Français](https://github.com/mr-jonam/quality-atlas/tree/lang/fr)
- [Español](https://github.com/mr-jonam/quality-atlas/tree/lang/es)
- [Deutsch](https://github.com/mr-jonam/quality-atlas/tree/lang/de)
