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
import PavoPicoImg from "../public/img/projects/fpv_drone/PavoPico.jpg";
import FpvImgFlying from "../public/img/projects/fpv_drone/fpv_img_flying.png";
import ProdTrackSystemImg from "../public/img/projects/prodTrack/better_img_for_system.png";
import ProdTrackDashboardImg from "../public/img/projects/prodTrack/dashboard.png";
import ProdTrackTaskImg from "../public/img/projects/prodTrack/task_assignment.png";
import ProdTrackTeamImg from "../public/img/projects/prodTrack/team_image.jpg";
import ProdTrackTrackingImg from "../public/img/projects/prodTrack/tracking_board.png";
import RoboFleetDashboard from "../public/img/projects/robo_fleet/dashboard.png";
import RoboFleetRviz from "../public/img/projects/robo_fleet/rviz.png";
import RoboFleetRobots from "../public/img/projects/robo_fleet/robots_inGazebo.png";
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
      "The first drone ever built by our robotics club (ARE), which I led as project manager alongside a first-year club member.",
    detailed_description:
      "As Aeronautics Manager of ARE, I led this build from scratch: parts selection, frame assembly, ESC/motor wiring, FC setup, and radio calibration, while mentoring a first-year student along the way. We planned the workflow together, worked through hardware issues as they came up, and got the club's first-ever drone into the air. It set the foundation for the more advanced builds that came after.",
    image_path: FirstFlightImg,
    images: [
      FirstFlightImg,
      FirstFlightAssembly,
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
    "An end-to-end intelligent drone platform for real-time agricultural monitoring, combining autonomous flight, onboard AI disease detection, and natural language mission control.",
  detailed_description:
    "CropEye is an end-to-end intelligent drone platform for real-time agricultural monitoring. It combines autonomous flight control, onboard AI-powered crop disease detection, and a natural language interface, allowing a single prompt to trigger a full autonomous field survey mission. The project addresses the challenge of early disease detection in olive tree plantations, specifically Verticillium wilt, by combining a custom-built quadcopter drone with onboard AI inference, a YOLOv8n model running on a Raspberry Pi 4, a Model Context Protocol (MCP) layer that translates natural language into autonomous drone actions, and a React-based ground station for real-time monitoring and control.",
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
  tech: [ "YOLOv8", "MCP", "React", "Raspberry Pi", "MAVSDK","Pixhawk","SITL"],
  demo: "",
},
  {
    id: 3,
    title: "FPV Drone",
    description:
      "A 2-inch freestyle quad I built from scratch. It's light, quick, and set up for aggressive flying. I worked on this 2-inch drone and also on the PavoPico drone.",
    detailed_description:
      "A custom 2-inch FPV drone build focused on compact size and aggressive flying performance. The project covered component selection, frame assembly, soldering, flight controller configuration, and tuning for stable, punchy flight behavior, all packed into a tiny footprint with a full FPV camera and video transmitter setup. I worked on two FPV builds: this 2-inch drone and the PavoPico drone. The 2-inch build is powered by a SpeedyBee F405 AIO flight controller.",
    image_path: FullSetupImg,
    images: [
      FullSetupImg,
      TwoInchDroneImg,
      PavoPicoImg,
      FpvImgFlying,
    ],
    videoId: "3WWjgtDNfrI",

    link: "",
    color: "#dc2626",
    tech: ["FPV", "Betaflight", "Quadcopter", "Soldering"],
    demo: "",
  },
  {
    id: 4,
    title: "dronePoste",
    description:
      "A quadcopter with a Raspberry Pi Zero 2 W companion computer that hosts its own Wi-Fi hotspot and web ground station: live camera, offline map of Tunisia, and basic flight commands, with no internet or SSH needed. Built with La Poste Tunisienne.",
    detailed_description:
      "dronePoste is a quadcopter with a Raspberry Pi Zero 2 W as its companion computer, carried out with La Poste Tunisienne and built within the ENSI Robotics Association (ERA). The Pi creates its own Wi-Fi hotspot and serves a web ground station, so a phone or laptop can view the live camera (MJPEG, 640x480, 15 fps) with a roll/pitch attitude indicator, track the drone on an offline vector map of Tunisia (position, heading, flight trail, home marker), and send commands: take off to a chosen altitude, return home, land, and disarm. Telemetry (battery, GPS satellites and fix, altitude, ground speed, flight mode, armed state, link status) is pushed over WebSocket at 5 Hz. Safety rules are enforced server-side: takeoff requires a valid global position and GUIDED mode, takeoff is refused when airborne, disarm is refused in the air, and takeoff altitude is capped. The hardware is a SpeedyBee F405 AIO flight controller running ArduPilot (ArduCopter), a Raspberry Pi Camera Module 3, an F330 frame with four 1400 kV brushless motors, an M6N GPS and a GY-271 compass. The software is a FastAPI app using MAVSDK-Python over MAVLink 2 (UART), picamera2, Leaflet with PMTiles for the offline map, and NetworkManager and systemd for the hotspot and service.",
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
      "Micro Farr: autonomous micro mouse maze solvers, v1.0 with ultrasonic sensors and a smaller v2.0 built on FreeRTOS with an IMU and ToF sensor fusion.",
    detailed_description:
      "Micro Farr is an autonomous micro mouse maze solver I designed, built and programmed for national robotics competitions. There are two versions. Micro Mouse v1.0 uses ultrasonic sensors for distance measurement together with path-planning logic to explore, map and solve unknown mazes. Micro Mouse v2.0 is a full redesign: it is smaller, runs FreeRTOS, and replaces the ultrasonic sensors with an IMU and ToF (time-of-flight) sensors. Fusing all of these sensors gives much better results: more accurate distance readings, more stable turns and straighter runs through the maze. The project strengthened my skills in embedded systems, RTOS-based firmware, sensor fusion, motor control, PID tuning, PCB soldering and algorithm design.",
    image_path: MicroFarrV2Img,
    images: [
      MicroFarrInMazeImg,
      MicroFarrV2Img,
      MicroFarrV2SolderImg,
      MicroFarrV1Img,
      MicroFarrV1CompImg,
    ],
    link: "https://github.com/AbdelbakiJeddi/micro_farr/tree/nav_0.2H",
    color: "#dc2626",
    tech: ["Arduino", "ESP32", "FreeRTOS", "IMU", "ToF Sensors", "Ultrasonic Sensors", "Sensor Fusion", "PID Control", "C/C++", "Embedded Systems"],
    demo: "",
  },
  {
    id: 6,
    title: "Line Follower Robot",
    description:
      "An autonomous line follower robot designed, built and programmed from scratch for national robotics competitions.",
    detailed_description:
      "As part of the robotics club, I designed, built and programmed an autonomous line follower robot for national robotics competitions. It was developed from the ground up, including a custom PCB, mechanical assembly, electronic integration, sensor calibration and embedded software. It uses infrared sensors and PID control algorithms to follow high-speed tracks accurately. The project strengthened my skills in embedded systems, microcontroller programming, motor control, PID tuning and robotics system integration.",
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
      "Multi-robot outdoor navigation and AI-driven fleet coordination — a simulation and control platform for a fleet of autonomous security robots.",
    detailed_description:
      "During my internship at Enova Robotics, I built a simulation and control platform for a fleet of autonomous security robots. Instead of testing in a generic empty world, I recreated Novation City / Technopôle de Sousse, Enova's actual site, using real building and road data from OpenStreetMap so the robots patrol a digital twin of the ground they're meant to guard, using the actual robot model Enova operates in the field.The project has three main pieces: autonomous navigation built on sensor fusion, combining IMU, GPS, LiDAR, and wheel odometry through an EKF for stable localization, feeding into a full Nav2 stack with layered costmaps for path planning and obstacle avoidance; a multi-robot setup where several robots run simultaneously in the same world, each with its own independent navigation stack; and a multi-agent layer, where each agent has its own dedicated skills and tools (task allocation, collision prediction, patrol coordination) exposed through an MCP server, so the fleet can be coordinated through an AI agent and a live dashboard.",
    image_path: RoboFleetReal,
    images: [RoboFleetReal, RoboFleetRobots, RoboFleetGZMap, RoboFleetRviz, RoboFleetDashboard],
    link: "",
    color: "#67aa69",
    tech: ["ROS2", "Gazebo Harmonic", "Nav2", "Python", "MCP", "Multi-Agent Systems", "LangGraphs"],
    demo: "",
  },
  {
    id: 8,
    title: "Kynora",
    description:
      "A simulation and control platform for the SO-ARM101 robotic arm using ROS 2 Jazzy, MoveIt 2 and NVIDIA Isaac Sim. Currently working on deploying it on the real arm.",
    detailed_description:
      "Kynora is a simulation and control platform for the SO-ARM101 robotic arm, built on ROS 2 Jazzy, MoveIt 2 and NVIDIA Isaac Sim. It builds on the open-source SO-ARM101 MoveIt Isaac Sim integration by MuammerBay, which I migrated to ROS 2 Jazzy and extended with topic_based_ros2_control. MoveIt 2 handles inverse kinematics, collision-aware trajectory planning and joint trajectory execution, while Isaac Sim provides the physics-based simulation. The two communicate over ROS 2 topics: MoveIt sends joint commands and Isaac Sim publishes joint states, through the TopicBasedSystem plugin in ros2_control, with RViz and Isaac Sim used together for visualization. The simulation stage is complete. I am currently working on deploying the same control pipeline on the real SO-ARM101, so MoveIt trajectories run on the physical hardware. The next planned stage is autonomous manipulation with reinforcement learning: detecting and approaching an object, planning a grasp and moving it.",
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
      "A complete industrial supervision system for textile workshops, connecting the shop floor (machines, operators) to management (managers, reports) through an intelligent Machine Learning and generative AI layer.",
    detailed_description:
      "ProdTrack is a smart manufacturing platform designed to help managers monitor workshop activity, optimize productivity, and make data-driven decisions. The system brings together four key components into a single workflow: IoT hardware, with ESP32-based devices equipped with RFID readers, OLED displays, and buzzers installed on each machine to identify operators and collect real-time data; a FastAPI backend that manages business logic, APIs, and communication between all system components; AI-powered analytics, including anomaly detection, production forecasting, and an intelligent assistant that helps managers understand data and make better decisions; and a modern Next.js dashboard that provides a real-time overview of machines, operators, production metrics, and generated reports. This was a collaborative team project. My main contributions were designing the AI agent, implementing automated report generation, and developing the task optimization system. Huge thanks to my teammates Sirine Zaibi, Ahmed Naoui, and Helmi Soudana for making this project possible.",
    image_path: ProdTrackSystemImg,
    images: [
      ProdTrackSystemImg,
      ProdTrackDashboardImg,
      ProdTrackTaskImg,
      ProdTrackTeamImg,
    ],
    videoId: "fDG1yR5pq8Q",
    link: "https://github.com/Helmisoudana/ProdTrack-System/",
    color: "#059669",
    tech: ["ESP32", "RFID", "FastAPI", "MCP", "IoT","optimization algorithms", "Generative AI" ],
    demo: "",
  },
  {
    id: 10,
    title: "TaskVision",
    description:
      "A full-stack project management application with an Angular + Tailwind frontend, a Node.js/Express + Sequelize/MySQL backend, and Docker orchestration.",
    detailed_description:
      "TaskVision is an end-to-end project management application. The frontend is built with Angular and Tailwind, while the backend runs on Node.js/Express with Sequelize and MySQL. It features JWT authentication with bcrypt password hashing, full CRUD for projects, tasks, and comments, an email notification service, Swagger API documentation, and an MCP server exposing tasks, project, and user tools. The whole stack is orchestrated with Docker Compose.",
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
      "As a member of the Extended Board of the ENSI Robotics Association, I contributed to organizing and supporting technical events that promote robotics and innovation within the university and across Tunisia.",
    detailed_description:
      "As a member of the Extended Board of the ENSI Robotics Association, I contributed to organizing and supporting technical events that promote robotics and innovation within the university and across Tunisia. Key contributions include: organized and coordinated RoboCup 8.0, one of the largest robotics events in Tunisia, bringing together students, researchers, and industry professionals; contributed to the planning and execution of workshops, competitions, and community events; served as a trainer during RoboDay, mentoring first-year students as they designed, assembled, and programmed their first line follower robots; helped introduce new members to robotics fundamentals, embedded systems, sensors, motor control, and teamwork through hands-on practical sessions.",
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
      "As Aeronautics Manager at ARE (Association de Robotique de l'ENSI), I led the aeronautics division, organized technical workshops, and coordinated student projects around RC airplanes and gliders.",
    detailed_description:
      "As Aeronautics Manager at the ARE (Association de Robotique de l'ENSI), I was responsible for leading the aeronautics division, organizing technical workshops, and coordinating student projects. I conducted practical sessions where participants designed and built RC airplanes and gliders, introducing them to the fundamentals of aerodynamics and aircraft design. In addition to the technical training, I managed project planning, delegated tasks across the team, and ensured effective collaboration to successfully deliver our aeronautics initiatives.",
    image_path: AerodynamiqueImg,
    images: [
      
      AeroWorkshopImg,
      AeroWorkshop1Img,
      RCPlaneImg,
      PlaneFoamImg,

    ],
    link: "https://canva.link/1kv6m5zc3cpnm5q",
    color: "#0369a1",
    tech: ["Aerodynamics", "RC Aircraft", "Workshop", "Team Leadership"],
    demo: "",
  },
];

export default projects;