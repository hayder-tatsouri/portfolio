/**
 * Contient toutes les informations relatives au projets.
 */

import wallpaperGeneratorImg from "../public/img/projects/WallpaperGenerator.png";
import neuralNetworkFromScratchImg from "../public/img/projects/NeuralNetwork.png";
import rayTracingImg from "../public/img/projects/RayTracing.png";

const projects = [
  {
    id: 1,
    title: "Wallpaper generator",
 description:
    "Generates an image composed of a mosaic of given images, in this case, music album covers. The covers are sorted by color and arranged in a specific order to produce the final result.",
    images: [
    wallpaperGeneratorImg,
    neuralNetworkFromScratchImg,
    rayTracingImg,
    wallpaperGeneratorImg,
  ],
    link: "https://github.com/Raseraa0/Wallpaper",
    color: "#c2410c",
  },
  {
    id: 2,
    title: "Neural Network from scratch",
  description:
    "Implementation of a neural network without using existing AI libraries. The goal is to follow the same principles as Keras with TensorFlow in Python, using various layers that can be easily manipulated.",
 
    images: [
    wallpaperGeneratorImg,
    neuralNetworkFromScratchImg,
    rayTracingImg,
    wallpaperGeneratorImg,
  ],
    link: "https://github.com/Raseraa0/NeuralNetworkFromScratch",
    color: "#0f766e",
  },
  {
    id: 3,
    title: "Ray tracing",
  description:
    "Development of a ray tracing system. The aim is to simulate objects and a camera in a 3D space, then realistically reconstruct what the camera would perceive by adjusting textures, colors, or patterns.",
 
   images: [
    wallpaperGeneratorImg,
    neuralNetworkFromScratchImg,
    rayTracingImg,
    wallpaperGeneratorImg,
  ],
    link: "https://github.com/Raseraa0/RayTracing",
    color: "#6d28d9",
  },
  {
    id: 4,
    title: "Wallpaper generator: Neon edition",
    description:
      "Alternative version of the wallpaper generator focused on high-contrast palettes and stronger color transitions while preserving the same mosaic rendering workflow.",
   images: [
    wallpaperGeneratorImg,
    neuralNetworkFromScratchImg,
    rayTracingImg,
    wallpaperGeneratorImg,
  ],
    link: "https://github.com/Raseraa0/Wallpaper",
    color: "#0891b2",
  },
  {
    id: 5,
    title: "Neural Network from scratch: Mini batch",
    description:
      "A variant of the same neural network architecture with experiments around mini-batch training, normalization, and convergence behavior visualization.",
     images: [
    wallpaperGeneratorImg,
    neuralNetworkFromScratchImg,
    rayTracingImg,
    wallpaperGeneratorImg,
  ],
    link: "https://github.com/Raseraa0/NeuralNetworkFromScratch",
    color: "#b45309",
  },
  {
    id: 6,
    title: "Ray tracing: Materials study",
    description:
      "Another ray tracing branch dedicated to material studies, reflection tuning, and procedural patterns to compare rendering realism across scenes.",
    images: [
    wallpaperGeneratorImg,
    neuralNetworkFromScratchImg,
    rayTracingImg,
    wallpaperGeneratorImg,
  ],
    link: "https://github.com/Raseraa0/RayTracing",
    color: "#be123c",
  },
];

export default projects;
