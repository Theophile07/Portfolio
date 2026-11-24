
const projects = [
  {
    id: 1,
    slug: "smartresto",
    title: "SmartResto",
    category: "Projet académique",
    description: "Une application de gestion de restaurant.",
    image: "/images/projects/smartresto.png",
    technologies: ["Nuxt", "Vue.js", "Tailwind CSS"],
    link: "#",

    details: {
      collaboration: "Travail en équipe",

      introduction:
        "SmartResto est une application web de gestion de restaurant conçue pour centraliser et simplifier le suivi des tables, des commandes et des réservations.",

      contribution:
        "Développement du module de gestion des tables, avec suivi de leur disponibilité, gestion des statuts et interaction avec les commandes et les réservations.",

      context:
        "SmartResto est un projet académique réalisé en équipe. Il consiste à développer une application web permettant de faciliter la gestion des différentes activités d'un restaurant.",

      objective:
        "L'objectif est de centraliser la gestion des tables, des commandes et des réservations afin de simplifier le suivi des opérations et d'améliorer l'organisation du restaurant.",

      features: [
        {
          title: "Gestion des tables",
          description:
            "Visualisation des tables et suivi de leur disponibilité.",
        },
        {
          title: "Gestion des commandes",
          description:
            "Suivi des commandes et de leur évolution.",
        },
        {
          title: "Réservations",
          description:
            "Enregistrement et suivi des réservations.",
        },
        {
          title: "Gestion du restaurant",
          description:
            "Organisation des différentes activités de l'établissement.",
        },
      ],

      responsibilities: [
        {
          title: "Gestion des tables",
          description:
            "Affichage des tables actives et organisation par zone pour faciliter leur consultation.",
        },
        {
          title: "Suivi des statuts",
          description:
            "Gestion des états libre, occupée et réservée selon les informations disponibles.",
        },
        {
          title: "Interactions des données",
          description:
            "Prise en compte des commandes et des réservations pour déterminer la disponibilité des tables.",
        },
      ],

      technologies: [
        {
          name: "Nuxt",
          role: "Framework",
          description:
            "Utilisé pour structurer l'application et organiser ses différentes pages.",
        },
        {
          name: "Vue.js",
          role: "Bibliothèque JavaScript",
          description:
            "Utilisé pour construire les interfaces interactives à partir de composants réutilisables.",
        },
        {
          name: "Tailwind CSS",
          role: "Style",
          description:
            "Utilisé pour concevoir les interfaces et gérer leur adaptation aux différentes tailles d'écran.",
        },
      ],

      dataManagement:
        "L'application communique avec une API pour récupérer et mettre à jour les informations relatives aux tables, aux commandes et aux réservations. Ces données permettent notamment d'actualiser les statuts des tables.",

      challenge:
        "L'un des principaux défis consistait à déterminer correctement le statut d'une table en fonction des commandes en cours et des réservations confirmées. Il fallait distinguer une table libre, occupée ou réservée en tenant compte des informations disponibles.",

      learning:
        "Ce travail m'a permis de mieux comprendre la gestion des états dans une application dynamique, la manipulation des données provenant d'une API et l'importance de construire une logique métier cohérente.",

      conclusion:
        "SmartResto m'a permis de mettre en pratique mes connaissances en développement web dans un contexte de travail en équipe. À travers la réalisation du module de gestion des tables, j'ai renforcé ma compréhension de Vue.js, de la gestion des données et de la logique métier d'une application.",
    },
  },

  
{
  id: 2,
  slug: "taskflow",
  title: "TaskFlow",
  category: "Projet académique",
  description:
    "Une application web de gestion de tâches et de projets.",

  image: "/images/projects/taskflow.png",

  technologies: [
    "React",
    "Vite",
    "Tailwind CSS",
    "JSON Server"
  ],

  link: "#",

  details: {
    collaboration: "Développement individuel",

    introduction:
      "TaskFlow est une application web conçue pour faciliter l'organisation des projets et le suivi des tâches au sein d'un espace de travail.",

    contribution:
      "Conception et développement de l'ensemble de l'application, de l'interface utilisateur à la logique fonctionnelle.",

    context:
      "TaskFlow est un projet personnel réalisé individuellement dans le but de mettre en pratique mes compétences en développement front-end et en gestion des données.",

    objective:
      "L'objectif est de proposer un espace permettant aux utilisateurs de gérer leurs projets, organiser leurs tâches et suivre leur progression.",

    features: [
      {
        title: "Authentification",
        description:
          "Inscription et connexion des utilisateurs."
      },
      {
        title: "Tableau de bord",
        description:
          "Espace central pour retrouver les informations liées à son activité."
      },
      {
        title: "Gestion des projets",
        description:
          "Création, consultation et organisation des projets."
      },
      {
        title: "Gestion des tâches",
        description:
          "Organisation et suivi des tâches associées aux projets."
      }
    ],

    responsibilities: [
      {
        title: "Conception de l'interface",
        description:
          "Création des différentes pages et des composants de l'application."
      },
      {
        title: "Logique applicative",
        description:
          "Développement des fonctionnalités de gestion des projets et des tâches."
      },
      {
        title: "Authentification",
        description:
          "Mise en place de l'inscription, de la connexion et de la protection des pages."
      }
    ],

    technologies: [
      {
        name: "React",
        role: "Bibliothèque JavaScript",
        description:
          "Utilisé pour construire les interfaces et organiser l'application en composants."
      },
      {
        name: "Vite",
        role: "Outil de développement",
        description:
          "Utilisé pour initialiser et exécuter l'environnement de développement."
      },
      {
        name: "Tailwind CSS",
        role: "Style",
        description:
          "Utilisé pour concevoir les interfaces et gérer leur mise en forme."
      }
    ],

    dataManagement:
      "L'application utilise JSON Server pour communiquer avec les données des utilisateurs, des projets et des tâches.",

    challenge:
      "La réalisation individuelle de l'application m'a amené à organiser les différentes fonctionnalités, gérer les interactions entre les données et structurer les pages protégées.",

    learning:
      "Ce projet m'a permis de renforcer mes compétences en React, en gestion d'état, en organisation des composants, en authentification et en communication avec une API.",

    conclusion:
      "TaskFlow représente une expérience importante dans mon parcours de développeur. Le fait d'avoir réalisé seul l'ensemble de l'application m'a permis de mieux comprendre les différentes étapes de conception et de développement d'un produit web."
  }
},


  
{
  id: 3,
  slug: "quizzy",
  title: "Quizzy",
  category: "Projet académique",
  description:
    "Un quiz interactif chronométré avec classement, historique et gestion des questions.",

  image: "/images/projects/quizzy.png",

  technologies: ["JavaScript"],

  link: "#",

  details: {
    collaboration: "Travail en équipe",

    introduction:
      "Quizzy est une application de quiz interactif permettant aux utilisateurs de répondre à des questions dans un temps limité.",

    contribution:
      "Ma responsabilité dans ce projet était de concevoir et développer le système de chronométrage du quiz.",

    context:
      "Réalisé dans un cadre académique en équipe, Quizzy vise à proposer une expérience de quiz interactive et dynamique.",

    objective:
      "Proposer une plateforme de quiz intégrant une limite de temps afin de rendre les parties plus dynamiques.",

    features: [
      {
        title: "Quiz interactif",
        description:
          "Permet aux utilisateurs de répondre à une série de questions."
      },
      {
        title: "Chronométrage",
        description:
          "Décompte du temps disponible pendant une partie."
      },
      {
        title: "Classement",
        description:
          "Permet de consulter les résultats et le classement."
      },
      {
        title: "Historique",
        description:
          "Permet de retrouver les précédentes parties."
      },
      {
        title: "Éditeur de questions",
        description:
          "Permet de gérer les questions du quiz."
      }
    ],

    responsibilities: [
      {
        title: "Développement du chronomètre",
        description:
          "Mise en place du décompte du temps pendant le quiz."
      },
      {
        title: "Démarrage automatique",
        description:
          "Déclenchement du chronomètre au lancement d'une partie."
      },
      {
        title: "Gestion de la fin du temps",
        description:
          "Arrêt automatique du quiz lorsque le temps imparti est écoulé."
      }
    ],

    technologies: [
      {
        name: "JavaScript",
        role: "Logique applicative",
        description:
          "Utilisé pour développer le système de chronométrage et gérer son comportement pendant le quiz."
      }
    ],

    challenge:
      "Assurer un décompte cohérent et gérer correctement la fin du temps imparti.",

    learning:
      "Ce travail m'a permis de renforcer ma compréhension de la gestion du temps en JavaScript et de la manipulation des événements liés au déroulement d'une application interactive.",

    conclusion:
      "Cette expérience m'a permis de contribuer à un projet collectif tout en approfondissant mes compétences en JavaScript à travers le développement d'une fonctionnalité précise."
  }
},

];

export default projects;
