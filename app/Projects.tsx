/**
 * @name Projects.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";
import Project from "./components/Project";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type Props = {
  factor: number;
  onFactorChange: (factor: number) => void;
};

function Projects({ factor, onFactorChange }: Props) {
  // Références pour l'apparition au scroll
  const [project1Ref, project1Visible] =
    useOnScreen<HTMLDivElement>();
  const [project2Ref, project2Visible] =
    useOnScreen<HTMLDivElement>();
  const [project3Ref, project3Visible] =
    useOnScreen<HTMLDivElement>();
  const [project4Ref, project4Visible] =
    useOnScreen<HTMLDivElement>();
  const [project5Ref, project5Visible] =
    useOnScreen<HTMLDivElement>();
  const [project6Ref, project6Visible] =
    useOnScreen<HTMLDivElement>();
  const [project7Ref, project7Visible] =
    useOnScreen<HTMLDivElement>();
  const [project8Ref, project8Visible] =
    useOnScreen<HTMLDivElement>();
  const [project9Ref, project9Visible] =
    useOnScreen<HTMLDivElement>();

  // The grid is taller than a single page on small screens, so we measure its
  // height and report how many pages it needs to avoid overflowing into Skills.
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const measure = () => {
      const height = grid.offsetHeight;
      const viewport = window.innerHeight || 800;
      // Fractional factor instead of Math.ceil: gives the grid exactly the space
      // it needs (rounded up to 2 decimals so it never overflows into Skills),
      // removing the big empty page between the last project and Skills.
      const factor = Math.max(1, height / viewport);
      onFactorChange(Math.ceil(factor * 100) / 100);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(grid);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [onFactorChange]);

  const projects = [
    { id: 1, ref: project1Ref, visible: project1Visible, delay: "" },
    {
      id: 2,
      ref: project2Ref,
      visible: project2Visible,
      delay: "delay-300",
    },
    {
      id: 3,
      ref: project3Ref,
      visible: project3Visible,
      delay: "delay-[600ms]",
    },
    {
      id: 4,
      ref: project4Ref,
      visible: project4Visible,
      delay: "",
    },
    {
      id: 5,
      ref: project5Ref,
      visible: project5Visible,
      delay: "delay-300",
    },
    {
      id: 6,
      ref: project6Ref,
      visible: project6Visible,
      delay: "delay-[600ms]",
    },
    {
      id: 7,
      ref: project7Ref,
      visible: project7Visible,
      delay: "",
    },
    {
      id: 8,
      ref: project8Ref,
      visible: project8Visible,
      delay: "delay-300",
    },
    {
      id: 9,
      ref: project9Ref,
      visible: project9Visible,
      delay: "delay-[600ms]",
    },
  ];

  return (
    <ParallaxLayer
      offset={2}
      speed={0}
      factor={factor}
      className="flex items-start justify-center bg-blue-9 dark:bg-blue-4"
    >
      <div ref={gridRef} className="grid w-full max-w-7xl grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Project
            key={project.id}
            ref={project.ref}
            id={project.id}
            className={cn(
              "transition-all duration-1000 ease-in-out hover:duration-300",
              project.delay,
              project.visible
                ? ""
                : "pointer-events-none opacity-0",
            )}
          />
        ))}
      </div>
    </ParallaxLayer>
  );
}

export default Projects;