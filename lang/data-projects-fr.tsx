/**
 * Contient toutes les informations relatives aux projets.
 */

import wallpaperGeneratorImg from "../public/img/projects/WallpaperGenerator.png";
import FirstFlightImg from "../public/img/projects/First_Flight/IMG_4891.png";
import FirstFlightAssembly from "../public/img/projects/First_Flight/IMG_20260429_163450.jpg";
import CropEye from "../public/img/projects/CropEye/drone.png";
import CropEyeArchi from "../public/img/projects/CropEye/architecture.png";
import CropEyeSetup from "../public/img/projects/CropEye/cropEye_setup.jpg";
import CropEyeWiring from "../public/img/projects/CropEye/wiring_diagram2.png";
import CropEyeTelemetry from "../public/img/projects/CropEye/telemetry.png";
import CropEyeinterface from "../public/img/projects/CropEye/prompt_example.png";
import TaskVisionDashboard from "../public/img/projects/taskVision/dashboard.jpg";
import TaskVisionTasks from "../public/img/projects/taskVision/tasks.jpg";
import TaskVisionCreateUser from "../public/img/projects/taskVision/createuser.jpg";
import TaskVisionHighchart from "../public/img/projects/taskVision/highchart.jpg";
import TaskVisionClaudeClient from "../public/img/projects/taskVision/claude_desktop_as_client.png";
import FullSetupImg from "../public/img/projects/fpv_drone/full_steup.jpg";
import TwoInchDroneImg from "../public/img/projects/fpv_drone/2inch_drone.jpg";
import FpvImg from "../public/img/projects/fpv_drone/fpv_img.png";
import FpvImgFlying from "../public/img/projects/fpv_drone/fpv_img_flying.png";
import ProdTrackSystemImg from "../public/img/projects/prodTrack/better_img_for_system.png";
import ProdTrackDashboardImg from "../public/img/projects/prodTrack/dashboard.png";
import ProdTrackTaskImg from "../public/img/projects/prodTrack/task_assignment.png";
import ProdTrackTeamImg from "../public/img/projects/prodTrack/team_image.jpg";
import ProdTrackTrackingImg from "../public/img/projects/prodTrack/tracking_board.png";
import RoboFleetMapImg from "../public/img/projects/robo_fleet/map.jpeg";
import RoboFleetRviz from "../public/img/projects/robo_fleet/rviz.png";
import RoboFleetRobots from "../public/img/projects/robo_fleet/robots.png";
import RoboFleetGZMap from "../public/img/projects/robo_fleet/gz_map.png";
import RoboFleetReal from "../public/img/projects/robo_fleet/pguard_real.jpg";
import KynoraArm from "../public/img/projects/kynora/SO101_arm.png";
import KynoraSim from "../public/img/projects/kynora/so101_moveit_isaacsim.png";
import LineFollowerImg from "../public/img/projects/Maze&Line_Follower/line_follower.jpg";
import LineFollowerPCBImg from "../public/img/projects/Maze&Line_Follower/line_follower_pcb.jpg";
import MicroFarrV1Img from "../public/img/projects/Maze&Line_Follower/maze_robot_v1.0.png";
import MicroFarrV1CompImg from "../public/img/projects/Maze&Line_Follower/maze_v1.0_in_competiton.jpg";
import MicroFarrV2Img from "../public/img/projects/Maze&Line_Follower/maze_v_2.0.png";
import MicroFarrV2SolderImg from "../public/img/projects/Maze&Line_Follower/maze_v_2.0_soldering.png";
import MicroFarrInMazeImg from "../public/img/projects/Maze&Line_Follower/micro_Farr_InMaze.jpg";
import DronePosteMain from "../public/img/projects/drone_poste/drone_ProImg.png";
import DronePosteDrone from "../public/img/projects/drone_poste/drone.jpg";
import DronePosteDrone2 from "../public/img/projects/drone_poste/drone2.jpg";
import DronePosteMap from "../public/img/projects/drone_poste/map_interface.jpg";
import DronePosteVideo from "../public/img/projects/drone_poste/video_interface.jpg";
import DronePosteWiring from "../public/img/projects/drone_poste/wiring_diagam_drone poste.png";
import ARECertifImg from "../public/img/projects/ARE/are_certif.png";
import RoboCupImg from "../public/img/projects/ARE/robocup.jpg";
import LaunchImg from "../public/img/projects/ARE/launch__day.jpg";
import RoboDayImg from "../public/img/projects/ARE/roboday_full_teams.jpg";
import AeroWorkshopImg from "../public/img/projects/aero/aero_workshop.jpg";
import AeroWorkshop1Img from "../public/img/projects/aero/aero_workshop1.jpg";
import AerodynamiqueImg from "../public/img/projects/aero/aerodynamique.png";
import PlaneFoamImg from "../public/img/projects/aero/plane_foam.jpg";
import PlanesModelsImg from "../public/img/projects/aero/planes_models.png";
import RCPlaneImg from "../public/img/projects/aero/rc_plane.jpg";

const projects = [
  {
    id: 1,
    title: "First Flight",
    description:
      "Le tout premier drone construit par notre club de robotique (ARE), que j'ai dirigé en tant que chef de projet aux côtés d'un membre de première année.",
    detailed_description:
      "En tant que responsable aéronautique de l'ARE, j'ai mené ce projet de bout en bout — choix des composants, assemblage du châssis, câblage ESC/moteurs, configuration du contrôleur de vol et calibration radio — tout en accompagnant un étudiant de première année tout au long de la construction. Au-delà de la construction technique, ce projet a impliqué la planification du flux de travail, la résolution commune de problèmes matériels et la mise en vol du tout premier drone du club. Il a servi de fondation aux constructions plus avancées lancées ensuite au sein du club.",
    image_path: FirstFlightImg,
    images: [
      FirstFlightImg,
      FirstFlightAssembly,
      wallpaperGeneratorImg,
    ],
    videoId: "YrrdYHmk5LU",

    link: "",
    color: "#c2410c",
    tech: ["ESP32","IMU", "PID Tuning", "Team Leadership"],
    demo: "",
  },
 {
  id: 2,
  title: "CropEye",
  description:
    "Une plateforme drone intelligente de bout en bout pour la surveillance agricole en temps réel, combinant vol autonome, détection de maladies par IA embarquée et contrôle de mission en langage naturel.",
  detailed_description:
    "CropEye est une plateforme drone intelligente de bout en bout pour la surveillance agricole en temps réel. Elle combine le contrôle de vol autonome, la détection de maladies des cultures propulsée par IA embarquée et une interface en langage naturel — permettant à une simple requête de déclencher une mission complète d'inspection autonome du champ. Le projet répond au défi de la détection précoce des maladies dans les oliveraies, notamment la verticilliose, en combinant un quadricoptère construit sur mesure avec inférence IA embarquée, un modèle YOLOv8n (quantifié en INT8) tournant à 33 FPS sur un Raspberry Pi 4, une couche Model Context Protocol (MCP) qui traduit le langage naturel en actions autonomes du drone, et une station au sol basée sur React pour la surveillance et le contrôle en temps réel.",
  image_path: CropEyeSetup,
  images: [
    CropEye,
    CropEyeTelemetry,
    CropEyeinterface,
    CropEyeWiring,
    CropEyeArchi

  ],
  videoId: "gq4o41PR8BM",
  link: "https://github.com/hayder-tatsouri/cropEye",
  color: "#0f766e",
  tech: ["ROS2", "YOLOv8", "MCP", "React", "Raspberry Pi", "MAVSDK"],
  demo: "",
},
  {
    id: 3,
    title: "2-Inch FPV Drone",
    description:
      "Un petit drone FPV de 2 pouces, construit et réglé pour le vol freestyle — format compact, excellent rapport puissance/poids et installation first-person-view complète.",
    detailed_description:
      "Un drone FPV 2 pouces sur mesure axé sur la compacité et des performances de vol agressives. Le projet a couvert la sélection des composants, l'assemblage du châssis, le soudage, la configuration du contrôleur de vol et le réglage pour un comportement de vol stable et nerveux, le tout dans un format minuscule avec une caméra FPV et un émetteur vidéo complets.",
    image_path: FullSetupImg,
    images: [
      FullSetupImg,
      TwoInchDroneImg,
      FpvImg,
      FpvImgFlying,
    ],
    link: "",
    color: "#dc2626",
    tech: ["FPV", "Betaflight", "Quadcopter", "Soldering"],
    demo: "",
  },
  {
    id: 4,
    title: "dronePoste",
    description:
      "Un quadricoptère doté d'un Raspberry Pi Zero 2 W comme ordinateur de bord, qui crée son propre hotspot Wi-Fi et héberge une station sol web : caméra en direct, carte hors ligne de la Tunisie et commandes de vol de base, sans internet ni SSH. Réalisé avec La Poste Tunisienne.",
    detailed_description:
      "dronePoste est un quadricoptère doté d'un Raspberry Pi Zero 2 W comme ordinateur de bord, réalisé avec La Poste Tunisienne au sein de l'ENSI Robotics Association (ERA). Le Pi crée son propre hotspot Wi-Fi et sert une station sol web : un téléphone ou un ordinateur peut afficher la caméra en direct (MJPEG, 640x480, 15 fps) avec un indicateur d'attitude roulis/tangage, suivre le drone sur une carte vectorielle hors ligne de la Tunisie (position, cap, trajectoire, point de départ) et envoyer des commandes : décollage à une altitude choisie, retour au point de départ, atterrissage et désarmement. La télémétrie (batterie, satellites et fix GPS, altitude, vitesse sol, mode de vol, état armé, état de la liaison) est poussée par WebSocket à 5 Hz. Des règles de sécurité sont appliquées côté serveur : le décollage exige une position globale valide et le mode GUIDED, il est refusé en vol, le désarmement est refusé en l'air et l'altitude de décollage est plafonnée. Le matériel comprend un contrôleur de vol SpeedyBee F405 AIO sous ArduPilot (ArduCopter), une caméra Raspberry Pi Camera Module 3, un châssis F330 avec quatre moteurs brushless 1400 kV, un GPS M6N et un compas GY-271. Côté logiciel : une application FastAPI utilisant MAVSDK-Python via MAVLink 2 (UART), picamera2, Leaflet avec PMTiles pour la carte hors ligne, et NetworkManager et systemd pour le hotspot et le service.",
    image_path: DronePosteMain,
    images: [
      DronePosteMain,
      DronePosteDrone,
      DronePosteDrone2,
      DronePosteVideo,
      DronePosteMap,
      DronePosteWiring,
    ],
    videoId: "Cy97sNL5oDs",
    link: "https://github.com/hayder-tatsouri/drone_poste",
    color: "#ca8a04",
    tech: ["ArduPilot", "Raspberry Pi Zero 2 W", "FastAPI", "MAVSDK", "MAVLink", "WebSockets", "Leaflet", "PMTiles", "picamera2", "systemd"],
    demo: "",
  },
  {
    id: 5,
    title: "Micro Farr",
    description:
      "Micro Farr : micro mouses autonomes résolveurs de labyrinthe, v1.0 avec capteurs à ultrasons et v2.0 plus petit, sous FreeRTOS, avec fusion IMU et capteurs ToF.",
    detailed_description:
      "Micro Farr est un micro mouse autonome résolveur de labyrinthe que j'ai conçu, construit et programmé pour des compétitions nationales de robotique. Il existe deux versions. Le Micro Mouse v1.0 utilise des capteurs à ultrasons pour mesurer les distances, associés à une logique de planification de trajet pour explorer, cartographier et résoudre des labyrinthes inconnus. Le Micro Mouse v2.0 est une refonte complète : il est plus petit, fonctionne sous FreeRTOS et remplace les capteurs à ultrasons par une IMU et des capteurs ToF (time-of-flight). La fusion de tous ces capteurs donne de bien meilleurs résultats : mesures de distance plus précises, virages plus stables et trajectoires plus droites dans le labyrinthe. Ce projet a renforcé mes compétences en systèmes embarqués, firmware RTOS, fusion de capteurs, contrôle moteur, réglage PID, soudure de PCB et conception d'algorithmes.",
    image_path: MicroFarrV2Img,
    images: [
      MicroFarrInMazeImg,
      MicroFarrV2Img,
      MicroFarrV2SolderImg,
      MicroFarrV1Img,
      MicroFarrV1CompImg,
    ],
    link: "https://github.com/hayder-tatsouri/Maze-solver-robot",
    color: "#dc2626",
    tech: ["Arduino", "ESP32", "FreeRTOS", "IMU", "ToF Sensors", "Ultrasonic Sensors", "Sensor Fusion", "PID Control", "C/C++", "Embedded Systems"],
    demo: "",
  },
  {
    id: 6,
    title: "Line Follower Robot",
    description:
      "Un robot suiveur de ligne autonome conçu, construit et programmé de zéro pour des compétitions nationales de robotique.",
    detailed_description:
      "Dans le cadre du club de robotique, j'ai conçu, construit et programmé un robot suiveur de ligne autonome pour des compétitions nationales de robotique. Il a été développé de A à Z : PCB sur mesure, assemblage mécanique, intégration électronique, calibration des capteurs et logiciel embarqué. Il utilise des capteurs infrarouges et des algorithmes de contrôle PID pour suivre avec précision des pistes à grande vitesse. Ce projet a renforcé mes compétences en systèmes embarqués, programmation de microcontrôleurs, contrôle moteur, réglage PID et intégration de systèmes robotiques.",
    image_path: LineFollowerPCBImg,
    images: [LineFollowerPCBImg, LineFollowerImg],
    link: "",
    color: "#ea580c",
    tech: ["Arduino", "ESP32", "IR Sensors", "DC Motors", "PID Control", "Custom PCB", "C/C++", "Embedded Systems"],
    demo: "",
  },
  {
    id: 7,
    title: "RoboFleet",
    description:
      "Navigation outdoor multi-robots et coordination de flotte pilotée par IA — une plateforme de simulation et de contrôle pour une flotte de robots de sécurité autonomes.",
    detailed_description:
      "Pendant mon stage chez Enova Robotics, j'ai construit une plateforme de simulation et de contrôle pour une flotte de robots de sécurité autonomes. Plutôt que de tester dans un monde vide générique, j'ai recréé Novation City / Technopôle de Sousse — le site réel d'Enova — en extrayant les données réelles des bâtiments et routes d'OpenStreetMap pour que les robots patrouillent un jumeau numérique fidèle du terrain qu'ils sont censés garder. Le projet s'est articulé autour de trois axes principaux : la navigation autonome avec un stack Nav2 complet utilisant Regulated Pure Pursuit et des costmaps multicouches avec évitement d'obstacles LiDAR ; une architecture multi-robots où plusieurs robots opèrent simultanément dans le même monde, chacun avec son propre stack de navigation indépendant ; et une couche multi-agents — un serveur MCP exposant des outils d'allocation de tâches, de prédiction de collisions et de commandes en langage naturel à un LLM (Claude), permettant de coordonner et surveiller la flotte via un agent IA et un dashboard en direct.",
    image_path: RoboFleetReal,
    images: [RoboFleetReal,RoboFleetRobots,RoboFleetGZMap,RoboFleetMapImg,RoboFleetRviz],
    link: "",
    color: "#7c3aed",
    tech: ["ROS2", "Gazebo Harmonic", "Nav2", "Python", "MCP", "Claude API"],
    demo: "",
  },
  {
    id: 8,
    title: "Kynora",
    description:
      "Une plateforme de simulation et de contrôle du bras robotique SO-ARM101 avec ROS 2 Jazzy, MoveIt 2 et NVIDIA Isaac Sim. Je travaille actuellement sur son déploiement sur le bras réel.",
    detailed_description:
      "Kynora est une plateforme de simulation et de contrôle du bras robotique SO-ARM101, construite sur ROS 2 Jazzy, MoveIt 2 et NVIDIA Isaac Sim. Elle s'appuie sur l'intégration open source SO-ARM101 MoveIt Isaac Sim de MuammerBay, que j'ai migrée vers ROS 2 Jazzy et étendue avec topic_based_ros2_control. MoveIt 2 gère la cinématique inverse, la planification de trajectoires avec évitement de collisions et l'exécution des trajectoires articulaires, tandis qu'Isaac Sim fournit la simulation physique. Les deux communiquent via des topics ROS 2 : MoveIt envoie les commandes articulaires et Isaac Sim publie les états des articulations, grâce au plugin TopicBasedSystem de ros2_control, RViz et Isaac Sim étant utilisés ensemble pour la visualisation. L'étape de simulation est terminée. Je travaille actuellement sur le déploiement de la même chaîne de contrôle sur le vrai SO-ARM101, afin que les trajectoires MoveIt s'exécutent sur le matériel. La prochaine étape prévue est la manipulation autonome par apprentissage par renforcement : détecter et approcher un objet, planifier une prise et le déplacer.",
    image_path: KynoraArm,
    images: [KynoraArm, KynoraSim],
    link: "https://github.com/hayder-tatsouri/SO-ARM101_MoveIt_IsaacSim_jazzy",
    color: "#7c3aed",
    tech: ["ROS 2 Jazzy", "MoveIt 2", "NVIDIA Isaac Sim", "ros2_control", "RViz", "URDF/Xacro", "Python", "C++"],
    demo: "",
  },
  {
    id: 9,
    title: "ProdTrack",
    description:
      "Un système de supervision industrielle complet pour ateliers textiles, reliant le terrain (machines, opérateurs) à la direction (managers, rapports) grâce à une couche intelligente de Machine Learning et d'IA générative.",
    detailed_description:
      "ProdTrack est une plateforme de fabrication intelligente conçue pour aider les managers à surveiller l'activité de l'atelier, optimiser la productivité et prendre des décisions basées sur les données. Le système réunit quatre composants clés en un seul flux de travail : le matériel IoT, avec des appareils à base d'ESP32 équipés de lecteurs RFID, d'écrans OLED et de buzzers installés sur chaque machine pour identifier les opérateurs et collecter des données en temps réel ; un backend FastAPI qui gère la logique métier, les API et la communication entre tous les composants du système ; des analyses propulsées par l'IA, notamment la détection d'anomalies, la prévision de production et un assistant intelligent qui aide les managers à comprendre les données et à prendre de meilleures décisions ; et un dashboard moderne en Next.js offrant une vue en temps réel des machines, opérateurs, indicateurs de production et rapports générés. C'était un projet d'équipe collaboratif. Mes principales contributions ont été la conception de l'agent IA, la mise en œuvre de la génération automatique de rapports et le développement du système d'optimisation des tâches. Un immense merci à mes coéquipiers Sirine Zaibi, Ahmed Naoui et Helmi Soudana pour avoir rendu ce projet possible.",
    image_path: ProdTrackSystemImg,
    images: [
      ProdTrackTrackingImg,
      ProdTrackDashboardImg,
      ProdTrackTaskImg,
      ProdTrackTeamImg,
    ],
    link: "https://github.com/Helmisoudana/ProdTrack-System/",
    color: "#059669",
    tech: ["ESP32", "RFID", "FastAPI", "Machine Learning", "Next.js", "IoT"],
    demo: "",
  },
  {
    id: 10,
    title: "TaskVision",
    description:
      "Une application full-stack de gestion de projet avec un frontend Angular + Tailwind, un backend Node.js/Express + Sequelize/MySQL et une orchestration Docker.",
    detailed_description:
      "TaskVision est une application de gestion de projet complète. Le frontend est construit avec Angular et Tailwind, tandis que le backend repose sur Node.js/Express avec Sequelize et MySQL. Elle comprend l'authentification JWT avec hachage des mots de passe via bcrypt, du CRUD complet pour les projets, tâches et commentaires, un service de notification par email (Nodemailer/SendGrid/Resend), une documentation API Swagger et un serveur MCP exposant des outils de connexion, de projets et d'utilisateurs via stdio. L'ensemble est orchestré avec Docker Compose.",
    image_path: TaskVisionDashboard,
    images: [
      TaskVisionDashboard,
      TaskVisionTasks,
      TaskVisionCreateUser,
      TaskVisionHighchart,
      TaskVisionClaudeClient,
    ],
    link: "https://github.com/hayder-tatsouri/_taskvision_",
    color: "#4f46e5",
    tech: ["Angular", "Tailwind", "Node.js", "Express", "MySQL", "Sequelize", "Docker", "JWT"],
    demo: "",
  },
  {
    id: 11,
    title: "ENSI Robotics Association",
    description:
      "En tant que membre du bureau étendu de l'Association Robotique de l'ENSI, j'ai contribué à l'organisation et au soutien d'événements techniques qui promeuvent la robotique et l'innovation au sein de l'université et à travers la Tunisie.",
    detailed_description:
      "En tant que membre du bureau étendu de l'Association Robotique de l'ENSI, j'ai contribué à l'organisation et au soutien d'événements techniques qui promeuvent la robotique et l'innovation au sein de l'université et à travers la Tunisie. Les contributions clés incluent : l'organisation et la coordination du RoboCup 8.0, l'un des plus grands événements de robotique en Tunisie, réunissant étudiants, chercheurs et professionnels de l'industrie ; la contribution à la planification et à l'exécution d'ateliers, compétitions et événements communautaires ; le rôle de formateur (Formateur) lors du RoboDay, en encadrant des étudiants de première année pendant la conception, l'assemblage et la programmation de leurs premiers robots suiveurs de ligne ; et l'aide apportée aux nouveaux membres pour découvrir les fondamentaux de la robotique, les systèmes embarqués, les capteurs, le contrôle moteur et le travail d'équipe à travers des sessions pratiques.",
    image_path: RoboDayImg,
    images: [ RoboCupImg, RoboDayImg, LaunchImg, ARECertifImg],
    link: "https://github.com/hayder-tatsouri/roboday",
    color: "#b91c1c",
    tech: ["Robotics", "Event Organization", "Mentoring", "Embedded Systems"],
    demo: "",
  },
  {
    id: 12,
    title: "ARE Aeronautics Division",
    description:
      "En tant que responsable aéronautique de l'ARE (Association de Robotique de l'ENSI), j'ai dirigé la division aéronautique, organisé des ateliers techniques et coordonné des projets étudiants autour d'avions RC et de planeurs.",
    detailed_description:
      "En tant que responsable aéronautique de l'ARE (Association de Robotique de l'ENSI), j'étais chargé de diriger la division aéronautique, d'organiser des ateliers techniques et de coordonner des projets étudiants. J'ai animé des sessions pratiques où les participants ont conçu et construit des avions RC et des planeurs, en les initiant aux fondamentaux de l'aérodynamique et de la conception aéronautique. En complément de la formation technique, j'ai géré la planification des projets, délégué les tâches au sein de l'équipe et assuré une collaboration efficace pour mener à bien nos initiatives aéronautiques.",
    image_path: AerodynamiqueImg,
    images: [
      
      AeroWorkshopImg,
      AeroWorkshop1Img,
      RCPlaneImg,
      PlaneFoamImg,
      PlanesModelsImg,
    ],
    link: "https://canva.link/1kv6m5zc3cpnm5q",
    color: "#0369a1",
    tech: ["Aerodynamics", "RC Aircraft", "Workshop", "Team Leadership"],
    demo: "",
  },
];

export default projects;
