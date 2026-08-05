/**
 * @name page.tsx
 * @type All
 */

"use client";
import { IParallax, Parallax } from "@react-spring/parallax";
import { useCallback, useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import CountryFlag from "./components/CountryFlag";
import LoadingScreen from "./components/LoadingScreen";
import FlyingPlane from "./components/FlyingPlane";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import BackToTopButton from "./components/BackToTopButton";
import BackgroundColor from "./components/BackgroundColor";

/**
 * @Home
 * Fonction d'entrée
 *
 * @description Contient l'entièreté du porte folio.
 *
 */
export default function Home() {
  // Booléen qui indique si la page est entrain de se charger
  const [loading, setLoading] = useState(true);

  // Référence de l'objet parallax
  const parallaxRef = useRef<IParallax>(null);

  // Lorsque la page se charge, la variable est à false
  useEffect(() => {
    setLoading(false);
  }, []);

  // Indicateur pour savoir si on est en haut de la page
  const [isTop, setIsTop] = useState(true);

  // Show planes only on the hero (first page)
  const [showPlanes, setShowPlanes] = useState(true);

  // Projects content is taller than 1 page on mobile, so we measure it and
  // dynamically adjust the number of parallax pages + offsets of following sections.
  const [projectsFactor, setProjectsFactor] = useState(2);

  const onProjectsFactorChange = useCallback((factor: number) => {
    setProjectsFactor(factor);
  }, []);

  // Skills & Footer share the same offset: footer anchored to the bottom of
  // the skills page, so there is no empty gap between them.
  const skillsOffset = 2 + projectsFactor;
  const footerOffset = skillsOffset;
  const totalPages = footerOffset + 1;

  /**
   * Lorsque l'on scroll, on vérifié si on est au top pour afficher
   * ou pas le bouton go to top
   */
  const handleScroll = () => {
    if (parallaxRef.current) {
      const scrollTop = parallaxRef.current.container.current.scrollTop;
      const pageHeight = parallaxRef.current.space;
      setIsTop(10 * scrollTop < 9 * pageHeight);

      // Hide planes after scrolling past ~80% of the first page
      setShowPlanes(scrollTop < pageHeight * 0.8);
    }
  };

  // Déclenché au début et à chaque changement de page (le Parallax est remonté
  // quand le nombre de pages change, il faut re-attacher l'écouteur de scroll)
  useEffect(() => {
    const container = parallaxRef.current?.container.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [totalPages]);

  return (
    <main>
      {/* Country flag of the visitor */}
      <CountryFlag />

      {/* Ecran de chargement; visible uniquement avant le 1er rendu du Hero */}
      {loading && <LoadingScreen />}

      {/* Flying planes overlay - only visible on hero section */}
      <div
        className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-500"
        style={{ height: "100vh", opacity: showPlanes ? 1 : 0, pointerEvents: showPlanes ? "none" : "none" }}
      >
        <FlyingPlane />
      </div>

      <BackToTopButton
        parallaxRef={parallaxRef}
        className={isTop ? "translate-x-40 opacity-0" : "opacity-100"}
      />
      {/* Conteneur parallax qui contiendra chaques pages*/}
      <Parallax
        key={totalPages}
        ref={parallaxRef}
        pages={totalPages}
        style={{ top: "0", left: "0" }}
        className="p-animation bg-blue-9"
      >
        {/* Hero pour la page d'acceuil */}
        <Hero parallaxRef={parallaxRef} skillsOffset={skillsOffset} />

        {/* Fond uni */}
        {Array.from({ length: totalPages - 1 }, (_, i) => (
          <BackgroundColor key={i} color="#00131c" offset={i + 1} />
        ))}

        {/* <ElementBackground /> */}

        <About />
        <Projects factor={projectsFactor} onFactorChange={onProjectsFactorChange} />
        <Skills offset={skillsOffset} />
        <Footer offset={footerOffset} />
      </Parallax>
    </main>
  );
}
