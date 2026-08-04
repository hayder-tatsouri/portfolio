import wallpaperGeneratorImg from "../public/img/projects/WallpaperGenerator.png";
import neuralNetworkFromScratchImg from "../public/img/projects/NeuralNetwork.png";
import rayTracingImg from "../public/img/projects/RayTracing.png";
import FirstFlightImg from "../public/img/projects/First_Flight/IMG_4891.png";
import FirstFlightAssembly from "../public/img/projects/First_Flight/IMG_20260429_163450.jpg";
import CropEye from "../public/img/projects/CropEye/drone.png";
import CropEyeArchi from "../public/img/projects/CropEye/architecture.png";
import CropEyeSetup from "../public/img/projects/CropEye/cropEye_setup.jpg";
import CropEyeWiring from "../public/img/projects/CropEye/wiring_diagram2.png";
import CropEyeTelemetry from "../public/img/projects/CropEye/telemetry.png";
import CropEyeinterface from "../public/img/projects/CropEye/prompt_example.png";
import TaskVisionDashboard from "../public/img/projects/taskvision/dashboard.jpg";
import TaskVisionTasks from "../public/img/projects/taskvision/tasks.jpg";
import TaskVisionCreateUser from "../public/img/projects/taskvision/createuser.jpg";
import TaskVisionHighchart from "../public/img/projects/taskvision/highchart.jpg";
import TaskVisionClaudeClient from "../public/img/projects/taskvision/claude_desktop_as_client.png";
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
  title: "CropEye",
  description:
    "An end-to-end intelligent drone platform for real-time agricultural monitoring, combining autonomous flight, onboard AI disease detection, and natural language mission control.",
  detailed_description:
    "CropEye is an end-to-end intelligent drone platform for real-time agricultural monitoring. It combines autonomous flight control, onboard AI-powered crop disease detection, and a natural language interface — allowing a single prompt to trigger a full autonomous field survey mission. The project addresses the challenge of early disease detection in olive tree plantations, specifically Verticillium wilt, by combining a custom-built quadcopter drone with onboard AI inference, a YOLOv8n model (INT8 quantized) running at 33 FPS on a Raspberry Pi 4, a Model Context Protocol (MCP) layer that translates natural language into autonomous drone actions, and a React-based ground station for real-time monitoring and control.",
  image_path: CropEyeSetup,
  images: [
    CropEye,
    CropEyeTelemetry,
    CropEyeinterface,
    CropEyeWiring,
    CropEyeArchi

  ],
  videoId: "gq4o41PR8BM",
  link: "https://github.com/hayder-tatsouri/cropEye", // update to CropEye's actual repo
  color: "#0f766e",
  tech: ["ROS2", "YOLOv8", "MCP", "React", "Raspberry Pi", "MAVSDK"],
  demo: "",
},
  {
    id: 3,
    title: "2-Inch FPV Drone",
    description:
      "A tiny 2-inch FPV drone, built and tuned for freestyle flying — compact size, punchy power-to-weight ratio, and a full first-person-view setup.",
    detailed_description:
      "A custom 2-inch FPV drone build focused on compact size and aggressive flying performance. The project covered component selection, frame assembly, soldering, flight controller configuration, and tuning for stable, punchy flight behavior, all packed into a tiny footprint with a full FPV camera and video transmitter setup.",
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
    title: "ProdTrack",
    description:
      "A complete industrial supervision system for textile workshops, connecting the shop floor (machines, operators) to management (managers, reports) through an intelligent Machine Learning and generative AI layer.",
    detailed_description:
      "ProdTrack is a smart manufacturing platform designed to help managers monitor workshop activity, optimize productivity, and make data-driven decisions. The system brings together four key components into a single workflow: IoT hardware, with ESP32-based devices equipped with RFID readers, OLED displays, and buzzers installed on each machine to identify operators and collect real-time data; a FastAPI backend that manages business logic, APIs, and communication between all system components; AI-powered analytics, including anomaly detection, production forecasting, and an intelligent assistant that helps managers understand data and make better decisions; and a modern Next.js dashboard that provides a real-time overview of machines, operators, production metrics, and generated reports. This was a collaborative team project. My main contributions were designing the AI agent, implementing automated report generation, and developing the task optimization system. Huge thanks to my teammates Sirine Zaibi, Ahmed Naoui, and Helmi Soudana for making this project possible.",
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
    title: "Maze Solver & Line Follower Robots",
    description:
      "Autonomous Line Follower and Maze Solver robots designed, built, and programmed from scratch for national robotics competitions.",
    detailed_description:
      "As part of the robotics club, I designed, built, and programmed autonomous Line Follower and Maze Solver robots for national robotics competitions. The robots were developed from the ground up, including mechanical assembly, electronic integration, sensor calibration, and embedded software development. The Line Follower robot used infrared sensors and control algorithms to accurately follow high-speed tracks, while the Maze Solver robot combined distance sensors with path-planning logic to autonomously explore, map, and solve unknown mazes in the shortest possible route. These projects strengthened my skills in embedded systems, microcontroller programming, sensor fusion, motor control, PID tuning, algorithm design, and robotics system integration, while providing hands-on experience preparing robots for competitive environments.",
    image_path: MazeRobotImg,
    images: [
      MazeRobotImg,
      MazeImg,
      LineFollowerPCBImg,
      LineFollowerImg,
      
      

      
    ],
    link: "https://github.com/hayder-tatsouri/Maze-solver-robot",
    color: "#dc2626",
    tech: ["Arduino", "ESP32", "IR Sensors", "Ultrasonic Sensors", "DC Motors", "PID Control", "C/C++", "Embedded Systems"],
    demo: "",
  },
  {
    id: 6,
    title: "TaskVision",
    description:
      "A full-stack project management application with an Angular + Tailwind frontend, a Node.js/Express + Sequelize/MySQL backend, and Docker orchestration.",
    detailed_description:
      "TaskVision is an end-to-end project management application. The frontend is built with Angular and Tailwind, while the backend runs on Node.js/Express with Sequelize and MySQL. It features JWT authentication with bcrypt password hashing, full CRUD for projects, tasks, and comments, an email notification service (Nodemailer/SendGrid/Resend), Swagger API documentation, and an MCP server exposing login, project, and user tools via stdio. The whole stack is orchestrated with Docker Compose.",
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
      "Multi-robot outdoor navigation and AI-driven fleet coordination — a simulation and control platform for a fleet of autonomous security robots.",
    detailed_description:
      "During my internship at Enova Robotics, I built a simulation and control platform for a fleet of autonomous security robots. Rather than testing in a generic empty world, I recreated Novation City / Technopôle de Sousse — Enova's actual site — pulling real building and road data from OpenStreetMap so the robots patrol a faithful digital twin of the ground they're meant to guard. The project came together in three main pieces: autonomous navigation with a full Nav2 stack using Regulated Pure Pursuit control and layered costmaps with LiDAR-based obstacle avoidance; a multi-robot architecture where several robots run simultaneously in the same world, each with its own independent navigation stack; and a multi-agent layer — an MCP server that exposes tools like task allocation, collision prediction, and natural-language commands to an LLM (Claude), so the fleet can be coordinated and monitored through an AI agent and a live dashboard.",
    image_path: RoboFleetMapImg,
    images: [RoboFleetMapImg],
    link: "",
    color: "#7c3aed",
    tech: ["ROS2", "Gazebo Harmonic", "Nav2", "Python", "MCP", "Claude API"],
    demo: "",
  },
  {
    id: 8,
    title: "ENSI Robotics Association",
    description:
      "As a member of the Extended Board of the ENSI Robotics Association, I contributed to organizing and supporting technical events that promote robotics and innovation within the university and across Tunisia.",
    detailed_description:
      "As a member of the Extended Board of the ENSI Robotics Association, I contributed to organizing and supporting technical events that promote robotics and innovation within the university and across Tunisia. Key contributions include: organized and coordinated RoboCup 8.0, one of the largest robotics events in Tunisia, bringing together students, researchers, and industry professionals; contributed to the planning and execution of workshops, competitions, and community events; served as a trainer (Formateur) during RoboDay, mentoring first-year students as they designed, assembled, and programmed their first line follower robots; helped introduce new members to robotics fundamentals, embedded systems, sensors, motor control, and teamwork through hands-on practical sessions.",
    image_path: RoboDayImg,
    images: [ RoboCupImg, RoboDayImg, LaunchImg, ARECertifImg],
    link: "https://github.com/hayder-tatsouri/roboday",
    color: "#b91c1c",
    tech: ["Robotics", "Event Organization", "Mentoring", "Embedded Systems"],
    demo: "",
  },
  {
    id: 9,
    title: "ARE Aeronautics Division",
    description:
      "As Aeronautics Manager at ARE (Association de Robotique de l'ENSI), I led the aeronautics division, organized technical workshops, and coordinated student projects around RC airplanes and gliders.",
    detailed_description:
      "As Aeronautics Manager at the ARE (Association de Robotique de l'ENSI), I was responsible for leading the aeronautics division, organizing technical workshops, and coordinating student projects. I conducted practical sessions where participants designed and built RC airplanes and gliders, introducing them to the fundamentals of aerodynamics and aircraft design. In addition to the technical training, I managed project planning, delegated tasks across the team, and ensured effective collaboration to successfully deliver our aeronautics initiatives.",
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