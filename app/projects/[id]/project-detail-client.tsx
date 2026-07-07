"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
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
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const projects = language === "fr" ? projectsFr : projectsEn;
  const selectedProject = projects.find((project) => project.id === id);

  // Navigation
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

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
  const techStack = "tech" in selectedProject ? (selectedProject.tech as string[]) : [];
  const demoUrl = "demo" in selectedProject ? (selectedProject.demo as string) : "";

  return (
    <main className="min-h-screen bg-blue-9 text-white-1">
      {/* Hero accent bar */}
      <motion.div
        className="relative h-2 w-full"
        style={{ backgroundColor: accentColor }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10">
        {/* Top navigation bar */}
        <motion.div
          className="mb-8 flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-blue-7 bg-blue-8 px-4 py-2 text-sm text-blue-3 transition hover:bg-blue-7"
          >
            ← {texts.projects.backToProjects}
          </Link>

          {/* Prev / Next navigation */}
          <div className="flex items-center gap-3">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="rounded-md border border-blue-7/50 bg-blue-8/50 px-3 py-2 text-xs text-blue-3 transition hover:bg-blue-7"
              >
                ← {prevProject.title.slice(0, 20)}
                {prevProject.title.length > 20 ? "..." : ""}
              </Link>
            ) : (
              <span />
            )}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.id}`}
                className="rounded-md border border-blue-7/50 bg-blue-8/50 px-3 py-2 text-xs text-blue-3 transition hover:bg-blue-7"
              >
                {nextProject.title.slice(0, 20)}
                {nextProject.title.length > 20 ? "..." : ""} →
              </Link>
            )}
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className={cn("mb-4 text-4xl lg:text-6xl", fontJersey15.className)}
          style={{ color: accentColor }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {selectedProject.title}
        </motion.h1>

        {/* Tech stack badges */}
        {techStack.length > 0 && (
          <motion.div
            className="mb-8 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: accentColor + "66",
                  color: accentColor,
                  backgroundColor: accentColor + "15",
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        )}

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Left - gallery */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Main image - clickable for lightbox */}
            <button
              onClick={openLightbox}
              className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-xl border border-blue-7/50 transition hover:border-blue-5/60"
            >
              <Image
                src={images[activeIndex]}
                alt={selectedProject.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
              <div className="absolute bottom-3 right-3 rounded-md bg-blue-9/70 px-2 py-1 text-xs text-blue-2 backdrop-blur-sm">
                Click to expand
              </div>
            </button>

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
                      : "border-blue-7/40 opacity-50 hover:opacity-80"
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

            {/* Demo / Video section */}
            {demoUrl && (
              <motion.div
                className="mt-4 overflow-hidden rounded-xl border border-blue-7/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: accentColor + "20", color: accentColor }}
                >
                  Live Demo
                </div>
                {demoUrl.includes("youtube") || demoUrl.includes("youtu.be") ? (
                  <iframe
                    src={demoUrl.replace("watch?v=", "embed/")}
                    className="aspect-video w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                    allowFullScreen
                  />
                ) : (
                  <iframe
                    src={demoUrl}
                    className="aspect-video w-full"
                    sandbox="allow-scripts allow-same-origin"
                  />
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Right - info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
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
                {"detailed_description" in selectedProject
                  ? selectedProject.detailed_description
                  : selectedProject.description}
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
              className="flex items-center justify-center gap-2 rounded-xl border border-blue-7 py-3 text-sm font-semibold text-blue-3 transition hover:bg-blue-8"
              style={{ borderColor: accentColor + "66" }}
            >
              View source on GitHub →
            </Link>

            {/* Project navigation (bottom) */}
            <div className="mt-auto flex gap-3 pt-4">
              {prevProject && (
                <Link
                  href={`/projects/${prevProject.id}`}
                  className="flex-1 rounded-xl border border-blue-7/30 bg-blue-8/30 px-4 py-3 text-center text-xs text-blue-3 transition hover:bg-blue-8/60"
                >
                  <span className="block text-blue-5">← Previous</span>
                  <span className="mt-1 block truncate font-medium">
                    {prevProject.title}
                  </span>
                </Link>
              )}
              {nextProject && (
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="flex-1 rounded-xl border border-blue-7/30 bg-blue-8/30 px-4 py-3 text-center text-xs text-blue-3 transition hover:bg-blue-8/60"
                >
                  <span className="block text-blue-5">Next →</span>
                  <span className="mt-1 block truncate font-medium">
                    {nextProject.title}
                  </span>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-blue-9/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 rounded-full bg-blue-8 p-2 text-2xl text-white-1 transition hover:bg-blue-7"
            >
              ✕
            </button>

            {/* Lightbox image */}
            <motion.div
              className="relative h-[85vh] w-[90vw] max-w-5xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Lightbox thumbnails */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(i);
                  }}
                  className={cn(
                    "relative h-12 w-18 overflow-hidden rounded-md border-2 transition",
                    activeIndex === i
                      ? "border-white-1"
                      : "border-blue-7/40 opacity-60 hover:opacity-100"
                  )}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Prev/Next in lightbox */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-blue-8/80 p-3 text-xl text-white-1 transition hover:bg-blue-7"
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) => (prev + 1) % images.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-blue-8/80 p-3 text-xl text-white-1 transition hover:bg-blue-7"
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default ProjectDetailClient;
