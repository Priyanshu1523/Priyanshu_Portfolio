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

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-6 md:px-12 bg-[#101110] overflow-hidden"
    >
      {/* Interactive Ambient Gradient Canvas */}
      <HeroCanvas />

      {/* Atmospheric Racing Green Glow Backdrop */}
      <div className="absolute top-1/4 -left-32 w-80 sm:w-96 h-80 sm:h-96 bg-[#0B3D2E]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-[#12291F]/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Meta Status Row */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-2 sm:pt-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-code text-[#999B96] border-b border-[#D6C29A]/10 pb-5">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 bg-[#12291F]/60 px-3 py-1.5 rounded-full border border-[#D6C29A]/20"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-[#F3F0E8] font-medium text-[11px] sm:text-xs">AVAILABLE FOR WORK</span>
          <span className="text-[#999B96] hidden sm:inline">&bull; FREELANCE & FULL-TIME</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs"
        >
          <span className="flex items-center gap-1.5 text-[#D6C29A]">
            <MapPin size={13} className="shrink-0" />
            <span>GUJARAT, INDIA</span>
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <Terminal size={13} className="text-[#D6C29A] shrink-0" />
            <span>REACT &bull; NODE &bull; PYTHON &bull; ODOO &bull; ERPNEXT</span>
          </span>
        </motion.div>
      </div>

      {/* Hero Core Visual & Typography Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Left Column: Expressive Monumental Typography */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Identity Subhead */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4"
          >
            <span className="h-px w-6 sm:w-8 bg-[#D6C29A]" />
            <span className="text-[11px] sm:text-xs md:text-sm font-mono-code tracking-[0.2em] text-[#D6C29A] uppercase font-semibold">
              PRIYANSHU CHAUHAN
            </span>
            <span className="text-[#999B96] text-[11px] font-mono-code tracking-widest hidden sm:inline">
              / FULL STACK & ERP DEVELOPER
            </span>
          </motion.div>

          {/* Staggered Monumental Headline */}
          <h1 className="font-editorial text-3xl sm:text-5xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tight text-[#F3F0E8] leading-[1.16] sm:leading-[1.12] mb-5 sm:mb-6">
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
            className="text-sm sm:text-base md:text-xl text-[#999B96] max-w-2xl font-normal leading-relaxed mb-8"
          >
            I build scalable web applications, intelligent business solutions and custom ERP systems that turn complex ideas into practical digital products.
          </motion.p>

          {/* Dual CTAs - Responsive & Touch Friendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollClick('#works')}
              onMouseEnter={() => sounds.playHover()}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#0B3D2E] text-[#D6C29A] font-mono-code text-xs uppercase tracking-widest font-semibold border border-[#D6C29A]/40 hover:bg-[#D6C29A] hover:text-[#101110] transition-all duration-300 shadow-lg shadow-[#0B3D2E]/40 hover:shadow-[#D6C29A]/20 flex items-center justify-center gap-2.5 group"
              data-cursor="pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollClick('#contact')}
              onMouseEnter={() => sounds.playHover()}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-transparent text-[#F3F0E8] font-mono-code text-xs uppercase tracking-widest font-medium border border-[#D6C29A]/25 hover:border-[#D6C29A] hover:text-[#D6C29A] hover:bg-[#12291F]/40 transition-all duration-300 flex items-center justify-center gap-2 group"
              data-cursor="pointer"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Architectural Visual Card & Profile Composition */}
        <div className="lg:col-span-4 flex justify-center w-full mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ready ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#12291F] to-[#101110] border border-[#D6C29A]/25 p-5 sm:p-7 backdrop-blur-md shadow-2xl hover:border-[#D6C29A]/50 transition-colors mx-auto"
          >
            {/* Corner Decorative Accents */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#D6C29A]" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#D6C29A]" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#D6C29A]" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#D6C29A]" />

            {/* Profile Avatar Frame with Crisp Lighting */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5 bg-[#0B3D2E]/40 border-2 border-[#D6C29A]/40 flex items-center justify-center group shadow-2xl">
              <img
                src="/priyanshu-profile.jpg"
                alt="Priyanshu Chauhan — Full Stack & ERP Developer"
                className="w-full h-full object-cover object-center filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101110]/80 via-transparent to-transparent opacity-30 pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono-code text-[#D6C29A] bg-[#101110]/90 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-xl border border-[#D6C29A]/30 shadow-lg">
                <span className="flex items-center gap-1 sm:gap-1.5 font-bold">
                  <Sparkles size={11} className="text-[#D6C29A] shrink-0" />
                  PRIYANSHU CHAUHAN
                </span>
                <span className="text-emerald-400 font-semibold text-[9px] sm:text-[10px] shrink-0">VERIFIED DEV</span>
              </div>
            </div>

            {/* Core Capability Badges */}
            <div className="space-y-2.5 font-mono-code text-xs">
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
                <span className="text-[#F3F0E8]">Scalable &bull; Clean Code</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 flex items-center justify-between text-xs font-mono-code text-[#999B96]">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D6C29A] animate-ping" />
          <span className="text-[11px] sm:text-xs">SCROLL DOWN TO EXPLORE</span>
        </div>
        <div className="hidden sm:block">
          <span>PRIYANSHU CHAUHAN &bull; 2025 PORTFOLIO</span>
        </div>
      </div>
    </section>
  );
}
