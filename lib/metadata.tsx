/**
 * Metadatas
 */

import type { Metadata } from "next";

const metadataInfos: Metadata = {
  title: "Hayder Tastouri Portfolio | Robotics Software Engineer",
  description:
    "Portfolio of Hayder Tastouri, robotics software engineer passionate about autonomous drones, UAV systems, and AI-driven robotics. Explore my projects, skills, and professional experience.",
  keywords: [
    "Hayder Tastouri",
    "robotics software engineer",
    "UAV",
    "autonomous drones",
    "ROS2",
    "portfolio",
    "embedded systems",
    "artificial intelligence",
    "multi-robot systems",
    "ArduPilot",
    "Python",
    "TypeScript",
    "C++",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Hayder Tastouri", url: "https://github.com/hayder-tatsouri/" }],
  creator: "Hayder Tastouri",
  publisher: "Hayder Tastouri",
  openGraph: {
    title: "Hayder Tastouri Portfolio | Robotics Software Engineer",
    description:
      "Discover the portfolio of Hayder Tastouri: autonomous drone and UAV projects, ROS2 multi-robot systems, AI-powered robotics, and embedded systems development.",
    url: "https://hayder-tastouri-portfolio.vercel.app/",
    siteName: "Hayder Tastouri Portfolio",
    images: [
      {
        url: "https://hayder-tastouri-portfolio.vercel.app/preview.png", // Replace with your real image URL
        width: 1856,
        height: 928,
        alt: "Preview of Hayder Tastouri's robotics software engineer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/img/favicon.png",
  },
  metadataBase: new URL("https://hayder-tastouri-portfolio.vercel.app/"),
};

export default metadataInfos;
