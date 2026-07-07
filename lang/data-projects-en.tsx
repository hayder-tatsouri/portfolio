import wallpaperGeneratorImg from "../public/img/projects/WallpaperGenerator.png";
import neuralNetworkFromScratchImg from "../public/img/projects/NeuralNetwork.png";
import rayTracingImg from "../public/img/projects/RayTracing.png";
import FirstFlightImg from "../public/img/projects/First_Flight/IMG_4891.png";
import FirstFlightAssembly from "../public/img/projects/First_Flight/IMG_20260429_163450.jpg";



const projects = [
  {
    id: 1,
    title: "First Flight",
    description:
      "The first drone ever built by our robotics club (ARE), which I led as project manager alongside a first-year club member.",
    detailed_description:
      "As Aeronautics Manager of ARE, I led this project from the ground up — component selection, frame assembly, ESC/motor wiring, flight controller setup, and radio calibration — while mentoring a first-year student through the build. Beyond the technical build, this project involved planning the workflow, troubleshooting hardware issues together, and getting the club's first-ever drone into the air. It laid the foundation for later, more advanced builds within the club.",
    image_path: FirstFlightImg,
    images: [
      FirstFlightImg,
      FirstFlightAssembly,
      wallpaperGeneratorImg,
    ],
    videoId: "YrrdYHmk5LU",

    link: "https://github.com/Raseraa0/Wallpaper",
    color: "#c2410c",
    tech: ["ESP32","IMU", "PID Tuning", "Team Leadership"],
    demo: "",
  },
  {
    id: 2,
    title: "Neural Network from scratch",
    description:
      "Implementation of a neural network without using existing AI libraries. The goal is to follow the same principles as Keras with TensorFlow in Python, using various layers that can be easily manipulated.",
    detailed_description:
      "A full educational implementation of feed-forward neural networks and backpropagation, with customizable layers, activation functions, and training loops. The objective was to understand optimization internals, gradient flow, and model behavior before relying on higher-level frameworks.",
    image_path: neuralNetworkFromScratchImg,
    images: [
      neuralNetworkFromScratchImg,
      neuralNetworkFromScratchImg,
      neuralNetworkFromScratchImg,
      neuralNetworkFromScratchImg,
      neuralNetworkFromScratchImg,
    ],
    link: "https://github.com/Raseraa0/NeuralNetworkFromScratch",
    color: "#0f766e",
    tech: ["Python", "NumPy", "Matplotlib", "Deep Learning"],
    demo: "",
  },
  {
    id: 3,
    title: "Ray tracing",
    description:
      "Development of a ray tracing system. The aim is to simulate objects and a camera in a 3D space, then realistically reconstruct what the camera would perceive by adjusting textures, colors, or patterns.",
    detailed_description:
      "This renderer explores physically inspired lighting through ray-object intersections, recursive reflections, and material parameters. The project focuses on scene representation, camera projection, and progressive quality improvements to compare realism and performance trade-offs.",
    image_path: rayTracingImg,
    images: [
      rayTracingImg,
      rayTracingImg,
      rayTracingImg,
      rayTracingImg,
      rayTracingImg,
    ],
    link: "https://github.com/Raseraa0/RayTracing",
    color: "#6d28d9",
    tech: ["C++", "Linear Algebra", "3D Graphics", "Shading"],
    demo: "",
  },
  {
    id: 4,
    title: "Wallpaper generator: Neon edition",
    description:
      "Alternative version of the wallpaper generator focused on high-contrast palettes and stronger color transitions while preserving the same mosaic rendering workflow.",
    detailed_description:
      "An experimental branch of the wallpaper generator where color quantization and palette mapping are tuned for neon aesthetics. It compares multiple blending and sorting strategies to keep high visual impact while preserving source-image recognizability.",
    image_path: wallpaperGeneratorImg,
    images: [
      wallpaperGeneratorImg,
      wallpaperGeneratorImg,
      wallpaperGeneratorImg,
      wallpaperGeneratorImg,
      wallpaperGeneratorImg,
    ],
    link: "https://github.com/Raseraa0/Wallpaper",
    color: "#0891b2",
    tech: ["Python", "Pillow", "Color Quantization"],
    demo: "",
  },
  {
    id: 5,
    title: "Neural Network from scratch: Mini batch",
    description:
      "A variant of the same neural network architecture with experiments around mini-batch training, normalization, and convergence behavior visualization.",
    detailed_description:
      "A research-focused variant dedicated to mini-batch optimization techniques and training diagnostics. It adds tools for plotting learning curves, comparing normalization approaches, and understanding how batch sizes affect convergence stability.",
    image_path: wallpaperGeneratorImg,
    images: [
      wallpaperGeneratorImg,
      wallpaperGeneratorImg,
      wallpaperGeneratorImg,
      wallpaperGeneratorImg,
      wallpaperGeneratorImg,
    ],
    link: "https://github.com/Raseraa0/NeuralNetworkFromScratch",
    color: "#b45309",
    tech: ["Python", "NumPy", "Mini-batch SGD", "Visualization"],
    demo: "",
  },
  {
    id: 6,
    title: "Ray tracing: Materials study",
    description:
      "Another ray tracing branch dedicated to material studies, reflection tuning, and procedural patterns to compare rendering realism across scenes.",
    detailed_description:
      "This branch investigates realistic material rendering, including reflectivity balancing, roughness tuning, and procedural textures. The goal is to benchmark visual quality across controlled scenes and identify the most impactful shading parameters.",
    image_path: wallpaperGeneratorImg,
    images: [
      wallpaperGeneratorImg,
      wallpaperGeneratorImg,
      wallpaperGeneratorImg,
      wallpaperGeneratorImg,
      wallpaperGeneratorImg,
    ],
    link: "https://github.com/Raseraa0/RayTracing",
    color: "#be123c",
    tech: ["C++", "Materials", "Procedural Textures", "PBR"],
    demo: "",
  },
];

export default projects;