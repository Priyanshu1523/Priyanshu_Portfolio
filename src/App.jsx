import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Education from './components/Education';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initSmoothScroll } from './utils/smoothScroll';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = initSmoothScroll();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#101110] text-[#F3F0E8] overflow-x-hidden selection:bg-[#D6C29A] selection:text-[#101110]">
      {/* Glinto Film Grain Texture Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Glinto Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Navigation Header */}
      <Navbar soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />

      {/* Main Page Flow */}
      <main>
        {/* Section 01: Hero */}
        <Hero ready={loadingComplete} />

        {/* Dynamic Infinite Marquee Banner */}
        <Marquee />

        {/* Section 02: About Me */}
        <About />

        {/* Section 03: Projects Showcase */}
        <Projects />

        {/* Reverse Marquee for Motion Contrast */}
        <Marquee reverse={true} />

        {/* Section 04: What I Do / Services */}
        <Services />

        {/* Section 05: Tech Stack */}
        <TechStack />

        {/* Section 06: Experience Journey */}
        <Experience />

        {/* Section 07: Education */}
        <Education />

        {/* Section 08: How I Work / Workflow */}
        <Workflow />

        {/* Section 09: Contact / Call To Action */}
        <Contact />
      </main>

      {/* Section 10: Monumental Minimal Footer */}
      <Footer />
    </div>
  );
}
