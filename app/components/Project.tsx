/**
 * @name Project
 * @type Component
 */

"use client";

import { cn } from "@/lib/utils";
import { fontJersey15 } from "@/lib/font";
import "../style/project.css";
import SocialMedia from "./SocialMedia";

import Image from "next/image";
import Link from "next/link";
import { Ref } from "react";

import projectsFr from "../../lang/data-projects-fr";
import projectsEn from "../../lang/data-projects-en";


import githubBadge from "../../public/img/social_media/github-badge.svg";
import { useLanguage } from "../contexts/language-context";

// Propriétés
type Props = {
  ref?: Ref<HTMLDivElement>;
  id: number;
  className?: string;
};

function Project({ ref, id, className }: Props) {

  const { language, texts } = useLanguage();

  let projects;
  if (language === "fr") {
    projects = projectsFr;
  } else if (language === "en") {
    projects = projectsEn;
  }
  
  const selectedProject = projects?.find((project) => project.id === id);
  const bg_col = selectedProject?.color ?? "#000000";

  const darkenColor = (color: string, percent: number) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const newR = Math.floor(r * (1 - percent));
    const newG = Math.floor(g * (1 - percent));
    const newB = Math.floor(b * (1 - percent));
    return `#${((1 << 24) | (newR << 16) | (newG << 8) | newB)
      .toString(16)
      .slice(1)}`;
  };

  const darkenedColor = darkenColor(bg_col, 0.2);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative mx-4 my-2 flex-grow overflow-hidden rounded-md border-2 border-blue-7/50 transition-all duration-500 hover:border-blue-6/80 lg:w-96 lg:flex-grow-0 lg:hover:-translate-y-7 lg:hover:scale-105",
        className,
      )}
      style={{
        background: `linear-gradient(45deg, ${darkenedColor}, ${bg_col} 20%, ${darkenedColor} 45%,${bg_col} 70%, ${darkenedColor})`,
      }}
    >
      <SocialMedia
        svgSrc={githubBadge}
        className="p-fluide-anim absolute bottom-1 right-1 z-50 scale-90 shadow-[0_0_5px] shadow-blue-1 lg:bottom-4 lg:right-4 lg:scale-125"
        href={selectedProject?.link}
        alt={`${texts.projects.altProjects} ${selectedProject?.title}`}
      />

      <div className="p-bg-lines h-full w-full">
        <div className="p-bg-lines relative flex h-full w-full flex-col items-center justify-around">
          <span
            className={cn(
              "z-10 text-center text-2xl text-white-1 lg:text-4xl",
              fontJersey15.className,
            )}
          >
            {selectedProject?.title}
          </span>

          <div className="flex h-full flex-col items-center justify-evenly gap-12 md:h-auto md:flex-row lg:flex-col">
            <Link
              href={`/projects/${id}`}
              className={cn(
                "relative flex aspect-[1920/1080] w-64 items-center justify-center overflow-hidden rounded-lg border border-blue-9 transition-all duration-0 lg:w-80 lg:duration-300 lg:group-hover:scale-110",
              )}
            >
              <Image
                src={selectedProject?.image_path ?? ""}
                alt={`${texts.projects.altProjects} ${selectedProject?.title}`}
                className={cn(
                  "absolute inset-0 duration-700",
                  "h-full w-full object-cover",
                )}
              ></Image>

              <span className="absolute z-20 mb-3 self-end rounded-md border border-blue-3/70 bg-blue-9/80 px-4 py-2 text-sm font-semibold text-white-1 md:hidden">
                {texts.projects.viewDetails}
              </span>
            </Link>

            <p className="mx-4 hidden w-1/3 rounded-md bg-[#00000033] p-2 text-center text-sm md:inline-block lg:w-auto lg:text-base">
              {selectedProject?.description ?? texts.projects.noDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;