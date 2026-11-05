/**
 * @name Projects.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";
import Project from "./components/Project";
import { useOnScreen } from "./hooks/useOnScreen";
import projectsEn from "../lang/data-projects-en";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type Props = {
  factor: number;
  onFactorChange: (factor: number) => void;
};

function ProjectItem({ id, delay }: { id: number; delay: string }) {
  const [ref, visible] = useOnScreen<HTMLDivElement>();
  return (
    <Project
      ref={ref}
      id={id}
      className={cn(
        "transition-all duration-1000 ease-in-out hover:duration-300",
        delay,
        visible ? "" : "pointer-events-none opacity-0",
      )}
    />
  );
}

function Projects({ factor, onFactorChange }: Props) {
  // The grid is taller than a single page on small screens, so we measure its
  // height and report how many pages it needs to fit without overflowing into
  // Skills. We measure ONCE after the layout settles (not on every resize):
  // on mobile the address bar collapses while scrolling, which shrinks
  // window.innerHeight and would otherwise keep re-measuring and remounting
  // the Parallax, throwing the user back to the top.
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

    // Measure immediately and again after fonts/images settle.
    measure();
    const t1 = setTimeout(measure, 300);
    const t2 = setTimeout(measure, 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFactorChange]);

  const delays = ["", "delay-300", "delay-[600ms]"];
  const projects = projectsEn.map((p, i) => ({
    id: p.id,
    delay: delays[i % 3],
  }));

  return (
    <ParallaxLayer
      offset={2}
      speed={0}
      factor={factor}
      className="flex items-start justify-center bg-blue-9 dark:bg-blue-4"
    >
      <div ref={gridRef} className="grid w-full max-w-7xl grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem key={project.id} id={project.id} delay={project.delay} />
        ))}
      </div>
    </ParallaxLayer>
  );
}

export default Projects;