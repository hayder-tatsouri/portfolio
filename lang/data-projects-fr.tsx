/**
 * Contient toutes les informations relatives aux projets.
 */

import wallpaperGeneratorImg from "../public/img/projects/WallpaperGenerator.png";
import neuralNetworkFromScratchImg from "../public/img/projects/NeuralNetwork.png";
import rayTracingImg from "../public/img/projects/RayTracing.png";

//TODO check la traduction

const projects = [
  {
    id: 1,
    title: "Générateur de fond d’écran",
    description:
      "Génère une image composée d’une mosaïque d’images données, ici des pochettes d’albums de musique. Les pochettes sont triées par couleur et arrangées dans un ordre spécifique pour produire le résultat final.",
    detailed_description:
      "Ce projet génère des fonds d’écran haute résolution en assemblant des milliers de pochettes d’albums selon une logique de tri colorimétrique. Il intègre du prétraitement d’images, l’extraction de couleurs dominantes et un placement optimisé pour conserver à la fois lisibilité globale et détails locaux.",
    image_path: wallpaperGeneratorImg,
    link: "https://github.com/Raseraa0/Wallpaper",
    color: "#c2410c",
    tech: ["Python", "Pillow", "NumPy", "Color Theory"],
    demo: "",
  },
  {
    id: 2,
    title: "Réseau de neurones depuis zéro",
    description:
      "Implémentation d’un réseau de neurones sans utiliser de bibliothèques d’IA existantes. Le but est de suivre les mêmes principes que Keras avec TensorFlow en Python, à l’aide de différentes couches facilement manipulables.",
    detailed_description:
      "Implémentation complète d’un réseau de neurones dense avec propagation avant, rétropropagation et boucle d’entraînement paramétrable. L’objectif principal était de comprendre en profondeur les gradients, l’optimisation et la structure interne des modèles avant d’utiliser des frameworks haut niveau.",
    image_path: neuralNetworkFromScratchImg,
    link: "https://github.com/Raseraa0/NeuralNetworkFromScratch",
    color: "#0f766e",
    tech: ["Python", "NumPy", "Matplotlib", "Deep Learning"],
    demo: "",
  },
  {
    id: 3,
    title: "Ray tracing",
    description:
      "Développement d’un système de ray tracing. L’objectif est de simuler des objets et une caméra dans un espace 3D, puis de reconstruire de manière réaliste ce que la caméra percevrait en ajustant textures, couleurs ou motifs.",
    detailed_description:
      "Ce moteur explore un rendu inspiré de la physique via intersections rayon-objet, réflexions récursives et paramètres de matériaux. Le travail porte sur la représentation de scène, la projection caméra et les compromis entre qualité visuelle et performance.",
    image_path: rayTracingImg,
    link: "https://github.com/Raseraa0/RayTracing",
    color: "#6d28d9",
    tech: ["C++", "Linear Algebra", "3D Graphics", "Shading"],
    demo: "",
  },
  {
    id: 4,
    title: "Générateur de fond d’écran : édition néon",
    description:
      "Version alternative du générateur de fond d’écran, orientée vers des palettes à fort contraste et des transitions de couleurs plus marquées, tout en gardant le même pipeline de mosaïque.",
    detailed_description:
      "Branche expérimentale du générateur de mosaïque avec accent sur une esthétique néon. Plusieurs stratégies de quantification et d’ordonnancement des couleurs sont comparées pour obtenir un rendu plus percutant sans perdre la structure des images sources.",
    image_path: wallpaperGeneratorImg,
    link: "https://github.com/Raseraa0/Wallpaper",
    color: "#0891b2",
    tech: ["Python", "Pillow", "Color Quantization"],
    demo: "",
  },
  {
    id: 5,
    title: "Réseau de neurones depuis zéro : mini-batch",
    description:
      "Variante de la même architecture de réseau de neurones avec des expérimentations autour de l’entraînement mini-batch, de la normalisation et de la visualisation de la convergence.",
    detailed_description:
      "Version orientée recherche sur les effets du mini-batch, de la normalisation et des hyperparamètres d’entraînement. Elle ajoute des outils d’analyse de convergence et des comparaisons de stabilité pour mieux interpréter le comportement du modèle.",
    image_path: neuralNetworkFromScratchImg,
    link: "https://github.com/Raseraa0/NeuralNetworkFromScratch",
    color: "#b45309",
    tech: ["Python", "NumPy", "Mini-batch SGD", "Visualization"],
    demo: "",
  },
  {
    id: 6,
    title: "Ray tracing : étude des matériaux",
    description:
      "Autre branche de ray tracing dédiée à l’étude des matériaux, au réglage des réflexions et aux motifs procéduraux pour comparer le réalisme du rendu selon les scènes.",
    detailed_description:
      "Cette branche se concentre sur la qualité des matériaux: réglage de la réflectivité, rugosité et textures procédurales. Le but est de mesurer l’impact visuel de chaque paramètre dans des scènes comparables et d’identifier les réglages les plus convaincants.",
    image_path: rayTracingImg,
    link: "https://github.com/Raseraa0/RayTracing",
    color: "#be123c",
    tech: ["C++", "Materials", "Procedural Textures", "PBR"],
    demo: "",
  },
];

export default projects;
