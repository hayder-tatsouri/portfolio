/**
 * @name page.tsx
 * @type All
 */

"use client";
import { IParallax, Parallax } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
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

  /**
   * Lorsque l'on scroll, on vérifié si on est au top pour afficher
   * ou pas le bouton go to top
   */
  const handleScroll = () => {
    if (parallaxRef.current) {
      const scrollTop = parallaxRef.current.container.current.scrollTop;
      const pageHeight = parallaxRef.current.space;
      setIsTop(10 * scrollTop < 9 * pageHeight);

      // Hide planes after scrolling past ~80% of first page
      const onePageHeight = pageHeight / 6;
      setShowPlanes(scrollTop < onePageHeight * 0.8);
    }
  };

  // Déclenché uniquement au début
  useEffect(() => {
    const container = parallaxRef.current?.container.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

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
        ref={parallaxRef}
        pages={6}
        style={{ top: "0", left: "0" }}
        className="p-animation bg-blue-9"
      >
        {/* Hero pour la page d'acceuil */}
        <Hero parallaxRef={parallaxRef} />

        {/* Fond uni */}
        <BackgroundColor color="#00131c" offset={1} />
        <BackgroundColor color="#00131c" offset={2} />
        <BackgroundColor color="#00131c" offset={3} />
        <BackgroundColor color="#00131c" offset={4} />
        <BackgroundColor color="#00131c" offset={5} />
        <BackgroundColor color="#00131c" offset={6} />

        {/* <ElementBackground /> */}

        <About />
        <Projects />
        <Skills />
        <Footer />
      </Parallax>
    </main>
  );
}
