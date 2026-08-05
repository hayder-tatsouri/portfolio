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
import LineFollowerImg from "../public/img/projects/Maze&Line_Follower/line_follower.jpg";
import LineFollowerPCBImg from "../public/img/projects/Maze&Line_Follower/line_follower_pcb.jpg";
import MazeImg from "../public/img/projects/Maze&Line_Follower/maze.jpg";
import MazeRobotImg from "../public/img/projects/Maze&Line_Follower/maze_robot.png";

const projects = [
  {
    id: 1,
    title: "Premier vol",
    description:
      "Le tout premier drone construit par notre club de robotique (ARE), que j’ai dirigé en tant que chef de projet avec un membre de première année.",
    detailed_description:
      "En tant que responsable aéronautique d’ARE, j’ai mené ce projet de bout en bout: choix des composants, assemblage du châssis, câblage ESC/moteurs, configuration du contrôleur de vol et calibration radio, tout en accompagnant un étudiant de première année pendant la construction. Au-delà de l’aspect technique, ce projet a impliqué la planification du travail, la résolution collective de pannes matérielles et la mise en vol du tout premier drone du club. Il a servi de base aux projets plus avancés lancés ensuite.",
    image_path: FirstFlightImg,
    images: [
      FirstFlightImg,
      FirstFlightAssembly,
      wallpaperGeneratorImg,
    ],
    videoId: "YrrdYHmk5LU",

    link: "https://github.com/Raseraa0/Wallpaper",
    color: "#c2410c",
    tech: ["ESP32", "IMU", "Réglage PID", "Leadership d'équipe"],
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
      CropEyeArchi,
    ],
    videoId: "gq4o41PR8BM",
    link: "https://github.com/hayder-tatsouri/cropEye",
    color: "#0f766e",
    tech: ["ROS2", "YOLOv8", "MCP", "React", "Raspberry Pi", "MAVSDK"],
    demo: "",
  },
  {
    id: 3,
    title: "Drone FPV 2 pouces",
    description:
      "Un petit drone FPV de 2 pouces, construit et réglé pour le vol freestyle — format compact, excellent rapport poids/puissance et installation first-person-view complète.",
    detailed_description:
      "Un drone FPV 2 pouces sur mesure axé sur la compacité et les performances de vol agressives. Le projet a couvert la sélection des composants, l’assemblage du châssis, le soudage, la configuration du contrôleur de vol et le réglage fin pour un comportement de vol stable et nerveux, le tout dans un format minuscule avec une caméra FPV et un émetteur vidéo complets.",
    image_path: FullSetupImg,
    images: [
      FullSetupImg,
      TwoInchDroneImg,
      FpvImg,
      FpvImgFlying,
    ],
    link: "",
    color: "#dc2626",
    tech: ["FPV", "Betaflight", "Quadricoptère", "Soudure"],
    demo: "",
  },
  {
    id: 4,
    title: "ProdTrack",
    description:
      "Système de supervision industrielle complet, conçu pour les ateliers textiles. Il connecte le terrain (machines, opérateurs) à la direction (managers, rapports) en passant par une couche intelligente de Machine Learning et d’IA générative.",
    detailed_description:
      "ProdTrack est une plateforme de fabrication intelligente conçue pour aider les managers à surveiller l’activité de l’atelier, optimiser la productivité et prendre des décisions basées sur les données. Le système réunit quatre composants clés en un seul flux de travail : le matériel IoT, avec des appareils à base d’ESP32 équipés de lecteurs RFID, d’écrans OLED et de buzzers installés sur chaque machine pour identifier les opérateurs et collecter des données en temps réel ; un backend FastAPI qui gère la logique métier, les API et la communication entre tous les composants du système ; des analyses propulsées par l’IA, notamment la détection d’anomalies, la prévision de production et un assistant intelligent qui aide les managers à comprendre les données et à prendre de meilleures décisions ; et un dashboard moderne en Next.js offrant une vue en temps réel des machines, opérateurs, indicateurs de production et rapports générés. C’était un projet d’équipe collaboratif. Mes principales contributions ont été la conception de l’agent IA, la mise en œuvre de la génération automatique de rapports et le développement du système d’optimisation des tâches. Un immense merci à mes coéquipiers Sirine Zaibi, Ahmed Naoui et Helmi Soudana, grâce à qui ce projet a été possible.",
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
    id: 5,
    title: "Robots Solveur de Labyrinthe & Suiveur de Ligne",
    description:
      "Robots autonomes Suiveur de Ligne et Solveur de Labyrinthe, conçus, construits et programmés from scratch pour des compétitions nationales de robotique.",
    detailed_description:
      "Dans le cadre du club de robotique, j'ai conçu, construit et programmé des robots autonomes Suiveur de Ligne et Solveur de Labyrinthe pour des compétitions nationales de robotique. Les robots ont été développés de zéro, incluant l'assemblage mécanique, l'intégration électronique, l'étalonnage des capteurs et le développement du logiciel embarqué. Le robot Suiveur de Ligne utilisait des capteurs infrarouges et des algorithmes de contrôle pour suivre avec précision des pistes à haute vitesse, tandis que le Solveur de Labyrinthe combinait des capteurs de distance avec une logique de planification de chemin pour explorer, cartographier et résoudre de manière autonome des labyrinthes inconnus dans le trajet le plus court possible. Ces projets ont renforcé mes compétences en systèmes embarqués, programmation de microcontrôleurs, fusion de capteurs, contrôle moteur, réglage PID, conception d'algorithmes et intégration de systèmes robotiques.",
    image_path: MazeRobotImg,
    images: [
      MazeRobotImg,
      MazeImg,
      LineFollowerPCBImg,
      LineFollowerImg,
    ],
    link: "https://github.com/hayder-tatsouri/Maze-solver-robot",
    color: "#dc2626",
    tech: ["Arduino", "ESP32", "Capteurs IR", "Capteurs Ultrasoniques", "Moteurs DC", "Contrôle PID", "C/C++", "Systèmes embarqués"],
    demo: "",
  },
  {
    id: 6,
    title: "TaskVision",
    description:
      "Application de gestion de projet full-stack avec un frontend Angular + Tailwind, un backend Node.js/Express + Sequelize/MySQL et une orchestration Docker.",
    detailed_description:
      "TaskVision est une application complète de gestion de projet. Le frontend est construit avec Angular et Tailwind, tandis que le backend repose sur Node.js/Express avec Sequelize et MySQL. Elle comprend l’authentification JWT avec hachage des mots de passe via bcrypt, du CRUD complet pour les projets, tâches et commentaires, un service de notification par email (Nodemailer/SendGrid/Resend), une documentation API Swagger et un serveur MCP exposant des outils de connexion, de projets et d’utilisateurs via stdio. L’ensemble est orchestré avec Docker Compose.",
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
    id: 7,
    title: "RoboFleet",
    description:
      "Navigation outdoor multi-robots et coordination de flotte pilotée par IA — une plateforme de simulation et de contrôle pour une flotte de robots de sécurité autonomes.",
    detailed_description:
      "Pendant mon stage chez Enova Robotics, j'ai construit une plateforme de simulation et de contrôle pour une flotte de robots de sécurité autonomes. Plutôt que de tester dans un monde vide générique, j'ai recréé Novation City / Technopôle de Sousse — le site réel d'Enova — en extrayant les données réelles des bâtiments et routes d'OpenStreetMap pour que les robots patrouillent un jumeau numérique fidèle du terrain qu'ils sont censés garder. Le projet s'est articulé autour de trois axes principaux : la navigation autonome avec un stack Nav2 complet utilisant Regulated Pure Pursuit et des costmaps multicouches avec évitement d'obstacles LiDAR ; une architecture multi-robots où plusieurs robots opèrent simultanément dans le même monde, chacun avec son propre stack de navigation indépendant ; et une couche multi-agents — un serveur MCP exposant des outils d'allocation de tâches, de prédiction de collisions et de commandes en langage naturel à un LLM (Claude), permettant de coordonner et surveiller la flotte via un agent IA et un dashboard en direct.",
    image_path: RoboFleetMapImg,
    images: [RoboFleetMapImg],
    link: "",
    color: "#7c3aed",
    tech: ["ROS2", "Gazebo Harmonic", "Nav2", "Python", "MCP", "Claude API"],
    demo: "",
  },
  {
    id: 8,
    title: "Association Robotique ENSI",
    description:
      "En tant que membre du bureau étendu de l’Association Robotique de l’ENSI, j’ai contribué à l’organisation et au soutien d’événements techniques qui promeuvent la robotique et l’innovation au sein de l’université et à travers la Tunisie.",
    detailed_description:
      "En tant que membre du bureau étendu de l’Association Robotique de l’ENSI, j’ai contribué à l’organisation et au soutien d’événements techniques qui promeuvent la robotique et l’innovation au sein de l’université et à travers la Tunisie. Les contributions clé incluent : l’organisation et la coordination du RoboCup 8.0, l’un des plus grands événements de robotique en Tunisie, réunissant étudiants, chercheurs et professionnels de l’industrie ; la contribution à la planification et à l’exécution d’ateliers, compétitions et événements communautaires ; le rôle de formateur lors du RoboDay, en encadrant des étudiants de première année pendant la conception, l’assemblage et la programmation de leurs premiers robots suivants de ligne ; et l’introduction de nouveaux membres aux fondamentaux de la robotique, aux systèmes embarqués, aux capteurs, au contrôle moteur et au travail d’équipe via des sessions pratiques.",
    image_path: RoboDayImg,
    images: [RoboCupImg, RoboDayImg, LaunchImg, ARECertifImg],
    link: "https://github.com/hayder-tatsouri/roboday",
    color: "#b91c1c",
    tech: ["Robotique", "Organisation d'événements", "Mentorat", "Systèmes embarqués"],
    demo: "",
  },
  {
    id: 9,
    title: "Division Aéronautique ARE",
    description:
      "En tant que responsable aéronautique de l'ARE (Association de Robotique de l'ENSI), j'ai dirigé la division aéronautique, organisé des ateliers techniques et coordonné des projets étudiants autour d'avions RC et de planeurs.",
    detailed_description:
      "En tant que responsable aéronautique de l'ARE (Association de Robotique de l'ENSI), j'étais en charge de diriger la division aéronautique, d'organiser des ateliers techniques et de coordonner des projets étudiants. J'ai animé des sessions pratiques où les participants ont conçu et construit des avions RC et des planeurs, en les initiant aux fondamentaux de l'aérodynamique et de la conception aéronautique. En complément de la formation technique, j'ai géré la planification des projets, délégué les tâches au sein de l'équipe et assuré une collaboration efficace pour mener à bien nos initiatives aéronautiques.",
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
    tech: ["Aérodynamique", "Aéronefs RC", "Atelier", "Leadership d'équipe"],
    demo: "",
  },
];

export default projects;
