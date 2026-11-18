import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, Briefcase, Terminal } from 'lucide-react';
import { scrollToSection } from '../utils/smoothScroll';
import { sounds } from '../utils/audio';
import HeroCanvas from './HeroCanvas';

export default function Hero({ ready }) {
  const containerRef = useRef(null);

  const handleScrollClick = (target) => {
    sounds.playClick();
    scrollToSection(target);
  };

  const headlineLines = [
    { text: "Building Digital", highlight: false },
    { text: "Experiences.", highlight: true, color: "text-[#D6C29A]" },
    { text: "Engineering Smarter", highlight: false },
    { text: "Businesses.", highlight: true, color: "text-[#D6C29A]" }
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 bg-[#101110] overflow-hidden"
    >
      {/* Interactive Ambient Gradient Canvas */}
      <HeroCanvas />

      {/* Atmospheric Racing Green Glow Backdrop */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#0B3D2E]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#12291F]/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Meta Status Row */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 md:pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-code text-[#999B96] border-b border-[#D6C29A]/10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 bg-[#12291F]/60 px-3.5 py-1.5 rounded-full border border-[#D6C29A]/20"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[#F3F0E8] font-medium">AVAILABLE FOR WORK</span>
          <span className="text-[#999B96] hidden sm:inline">&bull; FREELANCE & FULL-TIME</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-6"
        >
          <span className="flex items-center gap-1.5 text-[#D6C29A]">
            <MapPin size={13} />
            <span>GUJARAT, INDIA</span>
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <Terminal size={13} className="text-[#D6C29A]" />
            <span>REACT &bull; NODE &bull; PYTHON &bull; ODOO &bull; ERPNEXT</span>
          </span>
        </motion.div>
      </div>

      {/* Hero Core Visual & Typography Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Expressive Monumental Typography */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Identity Subhead */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-[#D6C29A]" />
            <span className="text-xs md:text-sm font-mono-code tracking-[0.25em] text-[#D6C29A] uppercase font-semibold">
              PRIYANSHU CHAUHAN
            </span>
            <span className="text-[#999B96] text-xs font-mono-code tracking-widest hidden sm:inline">
              / FULL STACK & ERP DEVELOPER
            </span>
          </motion.div>

          {/* Staggered Monumental Headline */}
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tight text-[#F3F0E8] leading-[1.08] mb-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="block"
            >
              Building Digital <span className="text-[#D6C29A] font-display italic font-normal">Experiences.</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="block text-[#F3F0E8]"
            >
              Engineering <span className="text-[#D6C29A] font-display italic font-normal">Smarter</span> Businesses.
            </motion.span>
          </h1>

          {/* Supporting Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-base sm:text-lg md:text-xl text-[#999B96] max-w-2xl font-normal leading-relaxed mb-8 md:mb-10"
          >
            I build scalable web applications, intelligent business solutions and custom ERP systems that turn complex ideas into practical digital products.
          </motion.p>

          {/* Dual CTAs & Interactive Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => handleScrollClick('#works')}
              onMouseEnter={() => sounds.playHover()}
              className="px-8 py-4 rounded-full bg-[#0B3D2E] text-[#D6C29A] font-mono-code text-xs uppercase tracking-widest font-semibold border border-[#D6C29A]/40 hover:bg-[#D6C29A] hover:text-[#101110] transition-all duration-300 shadow-lg shadow-[#0B3D2E]/40 hover:shadow-[#D6C29A]/20 flex items-center gap-3 group"
              data-cursor="pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollClick('#contact')}
              onMouseEnter={() => sounds.playHover()}
              className="px-8 py-4 rounded-full bg-transparent text-[#F3F0E8] font-mono-code text-xs uppercase tracking-widest font-medium border border-[#D6C29A]/25 hover:border-[#D6C29A] hover:text-[#D6C29A] hover:bg-[#12291F]/40 transition-all duration-300 flex items-center gap-2 group"
              data-cursor="pointer"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Architectural Visual Card & Profile Composition */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ready ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-sm sm:max-w-md rounded-2xl bg-gradient-to-b from-[#12291F] to-[#101110] border border-[#D6C29A]/25 p-6 md:p-8 backdrop-blur-md shadow-2xl hover:border-[#D6C29A]/50 transition-colors"
          >
            {/* Corner Decorative Accents (Glinto aesthetic) */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#D6C29A]" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#D6C29A]" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#D6C29A]" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#D6C29A]" />

            {/* Profile Avatar / Architectural Visual Frame */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-[#0B3D2E]/40 border-2 border-[#D6C29A]/40 flex items-center justify-center group shadow-2xl">
              <img
                src="/priyanshu-profile.jpg"
                alt="Priyanshu Chauhan — Full Stack & ERP Developer"
                className="w-full h-full object-cover object-center filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101110]/80 via-transparent to-transparent opacity-30 pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono-code text-[#D6C29A] bg-[#101110]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#D6C29A]/30 shadow-lg">
                <span className="flex items-center gap-1.5 font-bold">
                  <Sparkles size={13} className="text-[#D6C29A]" />
                  PRIYANSHU CHAUHAN
                </span>
                <span className="text-emerald-400 font-semibold text-[10px]">VERIFIED DEV</span>
              </div>
            </div>

            {/* Core Capability Badges */}
            <div className="space-y-3 font-mono-code text-xs">
              <div className="flex items-center justify-between text-[#999B96] pb-2 border-b border-[#D6C29A]/10">
                <span>DOMAINS</span>
                <span className="text-[#F3F0E8] font-medium">Full Stack &bull; ERP Systems</span>
              </div>
              <div className="flex items-center justify-between text-[#999B96] pb-2 border-b border-[#D6C29A]/10">
                <span>TECH CORE</span>
                <span className="text-[#D6C29A] font-semibold">Odoo / ERPNext / React</span>
              </div>
              <div className="flex items-center justify-between text-[#999B96]">
                <span>METHODOLOGY</span>
                <span className="text-[#F3F0E8]">Scalable &bull; Clean Architecture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Sound Hint */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 flex items-center justify-between text-xs font-mono-code text-[#999B96]">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D6C29A] animate-ping" />
          <span>SCROLL DOWN TO EXPLORE</span>
        </div>
        <div className="hidden sm:block">
          <span>PRIYANSHU CHAUHAN &bull; 2025 PORTFOLIO</span>
        </div>
      </div>
    </section>
  );
}
