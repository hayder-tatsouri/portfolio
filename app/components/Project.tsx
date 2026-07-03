/**
 * @name Project
 * @type Component
 */

"use client";

import { cn } from "@/lib/utils";
import Button from "./Button";
import { fontJersey15 } from "@/lib/font";
import "../style/project.css";
import SocialMedia from "./SocialMedia";

import Image from "next/image";
import { Ref } from "react";

import projectsFr from "../../lang/data-projects-fr";
import projectsEn from "../../lang/data-projects-en";


import githubBadge from "../../public/img/social_media/github-badge.svg";
import { useLanguage } from "../contexts/language-context";

// Propriétés
type Props = {
  ref?: Ref<HTMLDivElement>;
  id: number;
  isExpanded: boolean;
  onExpand: (id: number) => void;
  className?: string;
};

/**
 * @Project
 * Fonction principale
 *
 * @description Affichage d'un projet, avec son titre
 * sa description, une image représentative et un lien github.
 *
 * @param ref: Reference qui sert pour l'apparition au scroll
 * @param id: Id du projet à afficher
 * @param isExpended: Indicateur si le projet est actuellement expand
 * @param onExpand: Fonction a éxécuter lorsque un projet s'extand
 * @param className: Classe supplémentaire à appliquer au bouton
 *
 */
function Project({ ref, id, isExpanded, onExpand, className }: Props) {

  const { language } = useLanguage();

  // Selection du set de projects correspondant au language
  let projects;
  if (language === "fr") {
    projects = projectsFr;
  } else if (language === "en") {
    projects = projectsEn;
  }
  
  // Récupération du projet correspondant à l'id
  const selectedProject = projects?.find((project) => project.id === id);

  // Couleur de fond du projet
  const bg_col = selectedProject?.color ?? "#000000";

  /**
   * Assombrie la couleur passée en paramètre.
   *
   * @param color: Couleur initiale au format hexadécimal #FFFFFF
   * @param percent: Intensité du filtre sombre à appliquer
   * @returns La couleur assombrie, au format hexadécimal #FFFFFF
   */
  const darkenColor = (color: string, percent: number) => {
    // Supression du #
    const hex = color.replace("#", "");

    // Récupération des composante RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Diminution de la valeur de chaques composantes
    const newR = Math.floor(r * (1 - percent));
    const newG = Math.floor(g * (1 - percent));
    const newB = Math.floor(b * (1 - percent));

    // Concaténation des valeurs assombrie et rajout du #
    return `#${((1 << 24) | (newR << 16) | (newG << 8) | newB)
      .toString(16)
      .slice(1)}`;
  };

  // Affectation de la couleur plus sombre
  const darkenedColor = darkenColor(bg_col, 0.2);

  // Récupération du textes
  const { texts } = useLanguage();

  return (
    <div
      ref={ref}
      className={cn(
        "group relative my-2 w-full overflow-hidden rounded-md border-2 border-blue-7/50 transition-all duration-500 hover:border-blue-6/80 lg:hover:-translate-y-4 lg:hover:scale-[1.02]",
        className,
      )}
      style={{
        background: `linear-gradient(45deg, ${darkenedColor}, ${bg_col} 20%, ${darkenedColor} 45%,${bg_col} 70%, ${darkenedColor})`,
      }}
    >
      {/* badge Github qui renvoie vers la page github du projet */}
      <SocialMedia
        svgSrc={githubBadge}
        className="p-fluide-anim absolute bottom-1 right-1 z-50 scale-90 shadow-[0_0_5px] shadow-blue-1 lg:bottom-4 lg:right-4 lg:scale-125"
        href={selectedProject?.link}
        alt={`${texts.projects.altProjects} ${selectedProject?.title}`}
      />

      <div className="p-bg-lines h-full w-full">
        <div className="p-bg-lines relative flex h-full w-full flex-col items-center justify-around">
          {/* Titre présent tout en haut de la carte projet (disparait lorsque expand) */}
          {!isExpanded && (
            <span
              className={cn(
                "z-10 text-center text-2xl text-white-1 lg:text-4xl",
                fontJersey15.className,
              )}
            >
              {selectedProject?.title}
            </span>
          )}

          {/* Galerie d'images du projet : 1 grande + 3 petites de même taille */}
<div
  className={cn(
    "relative flex w-full flex-col gap-2",
    isExpanded ? "h-full" : "",
  )}
>
  {/* Image principale */}
  <div
    className={cn(
      "relative aspect-[1920/1080] w-full overflow-hidden rounded-lg border border-blue-9 transition-all duration-0 lg:duration-300 lg:group-hover:scale-105",
      isExpanded ? "h-full flex-1" : "",
    )}
  >
    <Image
      src={selectedProject?.images?.[0] ?? ""}
      placeholder="blur"
      alt=""
      fill
      className={cn(
        "object-cover duration-700",
        isExpanded ? "brightness-[0.4]" : "",
      )}
      onClick={() => onExpand(id)}
    />

    {!isExpanded && (
      <Button
        text={texts.projects.seeMore}
        className="absolute z-20 bottom-2 right-2 scale-90"
        onClick={() => onExpand(id)}
      />
    )}

    {isExpanded && (
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 text-center text-white-1">
        <h2 className={cn("mb-2 text-2xl font-bold", fontJersey15.className)}>
          {selectedProject?.title}
        </h2>
        <p className="text-sm">
          {selectedProject?.description ?? texts.projects.noDescription}
        </p>
      </div>
    )}
  </div>

  {/* 3 images secondaires, même taille */}
  {!isExpanded && selectedProject?.images && (
    <div className="grid grid-cols-3 gap-2">
      {selectedProject.images.slice(1, 4).map((img, index) => (
        <div
          key={index}
          className="relative aspect-square w-full overflow-hidden rounded-lg border border-blue-9"
        >
          <Image
            src={img}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )}
</div>
        </div>
      </div>
    </div>
  );
}

export default Project;
