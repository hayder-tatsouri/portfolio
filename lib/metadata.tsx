/**
 * Metadatas
 */

import type { Metadata } from "next";

const metadataInfos: Metadata = {
  title: "Hayder Tastouri Portfolio | Software Developer",
  description:
    "Portfolio of Hayder Tastouri, software engineer passionate about web development, artificial intelligence, and SAP systems. Explore my projects, skills, and professional experience.",
  keywords: [
    "Hayder Tastouri",
    "web developer",
    "portfolio",
    "Next.js",
    "React",
    "artificial intelligence",
    "SAP development",
    "DevOps",
    "Python",
    "TypeScript",
    "C++",
    "software engineer",
  ],
  authors: [{ name: "Hayder Tastouri", url: "https://github.com/hayder-tatsouri/" }],
  creator: "Hayder Tastouri",
  publisher: "Hayder Tastouri",
  openGraph: {
    title: "Hayder Tastouri Portfolio | Software Developer",
    description:
      "Discover the portfolio of Hayder Tastouri: web apps with Next.js, AI projects using Python, low-level and SAP development, and DevOps tools.",
    url: "https://hayder-tatsouri.github.io/portfolio/",
    siteName: "Hayder Tastouri Portfolio",
    images: [
      {
        url: "https://hayder-tatsouri.github.io/portfolio/preview.png", // Replace with your real image URL
        width: 1856,
        height: 928,
        alt: "Preview of Hayder Tastouri's developer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/img/favicon.png",
  },
  metadataBase: new URL("https://hayder-tatsouri.github.io/portfolio/"),
};

export default metadataInfos;