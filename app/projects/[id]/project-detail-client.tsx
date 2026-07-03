"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projectsFr from "@/lang/data-projects-fr";
import projectsEn from "@/lang/data-projects-en";
import { useLanguage } from "@/app/contexts/language-context";
import { fontJersey15 } from "@/lib/font";
import { cn } from "@/lib/utils";

type Props = {
  id: number;
};

function ProjectDetailClient({ id }: Props) {
  const { language, texts } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = language === "fr" ? projectsFr : projectsEn;
  const selectedProject = projects.find((project) => project.id === id);

  if (!selectedProject) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-blue-9 p-6 text-center text-white-1">
        <h1 className={cn("text-4xl", fontJersey15.className)}>
          {texts.projects.notFound}
        </h1>
        <Link
          href="/"
          className="rounded-md border border-blue-7 bg-blue-8 px-5 py-2 text-sm text-blue-3 transition hover:bg-blue-7"
        >
          {texts.projects.backToProjects}
        </Link>
      </main>
    );
  }

  const images =
    "images" in selectedProject &&
    Array.isArray(selectedProject.images) &&
    selectedProject.images.length > 0
      ? selectedProject.images
      : [selectedProject.image_path];
  const accentColor = selectedProject.color;

  return (
    <main className="min-h-screen bg-blue-9 text-white-1">

      {/* Hero banner with project color accent */}
      <div
        className="relative h-2 w-full"
        style={{ backgroundColor: accentColor }}
      />

      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10">

        {/* Back button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-md border border-blue-7 bg-blue-8 px-4 py-2 text-sm text-blue-3 transition hover:bg-blue-7"
        >
          ← {texts.projects.backToProjects}
        </Link>

        {/* Title */}
        <h1
          className={cn("mb-8 text-4xl lg:text-6xl", fontJersey15.className)}
          style={{ color: accentColor }}
        >
          {selectedProject.title}
        </h1>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

          {/* Left — gallery */}
          <div className="flex flex-col gap-4">

            {/* Main image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-blue-7/50">
              <Image
                src={images[activeIndex]}
                alt={selectedProject.title}
                fill
                className="object-cover transition-opacity duration-300"
                priority
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200",
                    activeIndex === i
                      ? "border-white-1 opacity-100"
                      : "border-blue-7/40 opacity-50 hover:opacity-80",
                  )}
                >
                  <Image
                    src={img}
                    alt={`${selectedProject.title} ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right — info */}
          <div className="flex flex-col gap-6">

            {/* Short description */}
            <div className="rounded-xl border border-blue-7/40 bg-blue-8/50 p-5">
              <p className="text-sm leading-relaxed text-blue-2">
                {selectedProject.description}
              </p>
            </div>

            {/* Detailed description */}
            <div className="rounded-xl border border-blue-7/40 bg-blue-8/30 p-5">
              <h2
                className={cn("mb-3 text-lg", fontJersey15.className)}
                style={{ color: accentColor }}
              >
                About
              </h2>
              <p className="text-sm leading-relaxed text-blue-1">
                {selectedProject.detailed_description ?? selectedProject.description}
              </p>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="h-2 w-2 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor:
                      activeIndex === i ? accentColor : "#003b64",
                    transform: activeIndex === i ? "scale(1.4)" : "scale(1)",
                  }}
                />
              ))}
            </div>

            {/* GitHub link */}
            <Link
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 rounded-xl border border-blue-7 py-3 text-sm font-semibold text-blue-3 transition hover:bg-blue-8"
              style={{ borderColor: accentColor + "66" }}
            >
              View source on GitHub →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetailClient;