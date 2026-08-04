/**
 * Contient toutes les informations relatives au skills.
 */

import cppImg from "../public/img/skills/cpp.svg";
import cImg from "../public/img/skills/c.svg";
import pythonImg from "../public/img/skills/python.svg";
import javascriptImg from "../public/img/skills/javascript.svg";

import ros2Img from "../public/img/skills/ros2.svg";
import gazeboImg from "../public/img/skills/gazebo.svg";
import mavlinkImg from "../public/img/skills/mavlink.png";
import ardupilotImg from "../public/img/skills/ardupilot.svg";

import mcpImg from "../public/img/skills/mcp.webp";
import langgraphImg from "../public/img/skills/langgraph.svg";
import langchainImg from "../public/img/skills/langchain.svg";

import angularImg from "../public/img/skills/angular.svg";
import reactImg from "../public/img/skills/react.svg";

import nodeImg from "../public/img/skills/node.svg";

import codeforcesImg from "../public/img/skills/codeforces.svg";
import leetcodeImg from "../public/img/skills/leetcode.svg";

import gitImg from "../public/img/skills/git.svg";
import vscodeImg from "../public/img/skills/vscode.svg";

const skills = [
  {
    id: 1,
    title: "Robotics",
    subSkills: [
      {
        name: "ROS 2",
        image: ros2Img,
      },
      {
        name: "Gazebo",
        image: gazeboImg,
      },
      {
        name: "MAVLink",
        image: mavlinkImg,
      },
      {
        name: "ArduPilot",
        image: ardupilotImg,
      },
    ],
  },
  {
    id: 2,
    title: "AI Agents",
    subSkills: [
      {
        name: "MCP",
        image: mcpImg,
      },
      {
        name: "LangGraph",
        image: langgraphImg,
      },
      {
        name: "LangChain",
        image: langchainImg,
      },
    ],
  },
  {
    id: 3,
    title: "Web Development",
    subSkills: [
      {
        name: "Angular",
        image: angularImg,
      },
      {
        name: "Node.js",
        image: nodeImg,
      },
      {
        name: "React",
        image: reactImg,
      },
    ],
  },
  {
    id: 4,
    title: "Programming",
    subSkills: [
      {
        name: "C++",
        image: cppImg,
      },
      {
        name: "Python",
        image: pythonImg,
      },
      {
        name: "JavaScript",
        image: javascriptImg,
      },
    ],
  },
  {
    id: 5,
    title: "Tools",
    subSkills: [
      {
        name: "Git",
        image: gitImg,
      },
      {
        name: "VS Code",
        image: vscodeImg,
      },
    ],
  },
  {
    id: 6,
    title: "Problem Solving",
    subSkills: [
      {
        name: "Codeforces",
        image: codeforcesImg,
      },
      {
        name: "LeetCode",
        image: leetcodeImg,
      },
    ],
  },
];
export default skills;