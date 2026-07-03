
/**
 * @name Projects.tsx
 * @type Page
 */

import { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Project from "./components/Project";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";

function Projects() {
  // Id du projet expand (-1 = aucun)
  const [expandedProjectId, setExpandedProjectId] = useState(-1);

  const handleExpandProject = (id: number) => {
    if (window.innerWidth > 768) {
      setExpandedProjectId(-1);
    } else {
      setExpandedProjectId(
        expandedProjectId === id ? -1 : id
      );
    }
  };

  // Dé-expand tout lors du resize
  useEffect(() => {
    const handleResize = () => {
      setExpandedProjectId(-1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Références pour l'animation d'apparition
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
  ];

  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      factor={2}
      className="flex items-center justify-center bg-blue-9 dark:bg-blue-4"
    >
<div
  className="
    flex
    w-full
    max-w-2xl
    flex-col
    items-center
    gap-8
    p-8
    mx-auto
  "
>
  {projects.map((project) => (
    <Project
      key={project.id}
      ref={project.ref}
      id={project.id}
      isExpanded={expandedProjectId === project.id}
      onExpand={handleExpandProject}
      className={cn(
        "transition-all duration-1000 ease-in-out hover:duration-300",
        project.delay,
        project.visible ? "" : "pointer-events-none opacity-0"
      )}
    />
  ))}
</div>
    </ParallaxLayer>
  );
}

export default Projects;

