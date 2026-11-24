# Théophile Lumbala — Portfolio

Bienvenue sur le dépôt de mon portfolio personnel.

Je suis **Théophile Lumbala**, développeur web et créatif du numérique basé à Kinshasa. Je m'intéresse particulièrement au développement web, au design UI/UX et à la conception de produits numériques utiles, modernes et intuitifs.

Ce portfolio présente mon parcours, mes compétences, mes services ainsi que les projets sur lesquels j'ai travaillé.

## Aperçu du projet

Ce portfolio a été conçu pour présenter mon profil professionnel et mettre en valeur mes réalisations dans le domaine du numérique.

Il propose une expérience de navigation moderne, une interface épurée et une présentation détaillée de mes différents projets.

## Fonctionnalités

- **Présentation personnelle :** découverte de mon profil et de mon approche du numérique.
- **Services :** présentation des prestations que je peux proposer.
- **Compétences techniques :** aperçu de ma stack et des technologies que j'utilise.
- **Portfolio de projets :** affichage des réalisations sous forme de cartes.
- **Pages détaillées :** chaque projet dispose de sa propre page présentant son contexte, ses objectifs, ses fonctionnalités, ma contribution et les technologies utilisées.
- **Design responsive :** adaptation de l'interface aux ordinateurs, tablettes et smartphones.
- **Navigation dynamique :** accès aux différentes sections et aux pages individuelles des projets.

## Technologies utilisées

| Technologie | Utilisation |
|---|---|
| Next.js | Framework React et gestion des pages |
| React | Construction des interfaces |
| Tailwind CSS | Mise en forme et design responsive |
| JavaScript | Logique et données du projet |
| TypeScript | Typage dans la configuration principale |
| Next/Image | Optimisation et affichage des images |

## Structure du projet

```text
portfolio/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   └── projects/
│       ├── page.jsx
│       └── [slug]/
│           └── page.jsx
│
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ServiceCard.jsx
│   │   └── SkillsCard.jsx
│   │
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Service.jsx
│   ├── Skills.jsx
│   └── Project.jsx
│
├── data/
│   ├── project.js
│   ├── service.js
│   └── skills.js
│
├── public/
│   └── images/
│
├── package.json
└── README.md
```

*Cette structure représente l'organisation principale du projet.*

## Installation et lancement

Pour exécuter le projet localement :

### 1. Cloner le dépôt

```bash
git clone URL_DU_DEPOT
```

### 2. Accéder au dossier

```bash
cd portfolio
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Démarrer le serveur de développement

```bash
npm run dev
```

Le site sera accessible à l'adresse :

```text
http://localhost:3000
```

## Gestion des projets

Les informations relatives aux projets sont centralisées dans le fichier :

```text
data/project.js
```

Chaque projet possède notamment :
- Un titre et une description.
- Une image de présentation.
- Une liste de technologies.
- Une catégorie.
- Un identifiant de navigation (`slug`).
- Des informations détaillées sur sa réalisation.

Les pages individuelles sont générées dynamiquement à partir de leur slug.

## Identité visuelle

Le portfolio adopte une identité visuelle moderne et minimaliste.

- **Couleur principale :** `#6366F1`
- **Couleur secondaire :** `#A5B4FC`
- **Typographie :** Plus Jakarta Sans
- **Style :** minimaliste, moderne et professionnel.

## Auteur

**Théophile Lumbala**

Développeur web et créatif du numérique — Kinshasa, RDC.

Je m'intéresse à la création de solutions numériques qui associent technologie, design et expérience utilisateur.

### Me retrouver

- GitHub : [Ajouter mon profil GitHub](https://github.com/)
- LinkedIn : [Ajouter mon profil LinkedIn](https://www.linkedin.com/)

---

*Conçu et développé par Théophile Lumbala.*
