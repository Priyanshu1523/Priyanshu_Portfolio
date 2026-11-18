import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { scrollToSection } from '../utils/smoothScroll';
import { sounds } from '../utils/audio';

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState("01");

  const handleToggle = (id) => {
    sounds.playClick();
    setActiveServiceId(activeServiceId === id ? null : id);
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 bg-[#101110] text-[#F3F0E8] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0B3D2E]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-4 mb-6 sm:mb-10">
          <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D6C29A]">
            03 &bull; CORE CAPABILITIES
          </span>
          <div className="h-px flex-1 bg-[#D6C29A]/15" />
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F3F0E8] leading-[1.1]">
              What I Do &
              <br />
              <span className="font-display italic text-[#D6C29A] font-normal">How I Build.</span>
            </h2>
          </div>

          <p className="text-[#999B96] text-sm md:text-base font-mono-code max-w-sm">
            Bridging technical engineering with real business requirements across full-stack applications and enterprise ERP ecosystems.
          </p>
        </div>

        {/* Glinto Editorial 4-Part Interactive List */}
        <div className="border-t border-[#D6C29A]/20 divide-y divide-[#D6C29A]/15">
          {SERVICES.map((service) => {
            const isOpen = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => sounds.playHover()}
                className={`transition-colors duration-500 ${
                  isOpen ? 'bg-[#12291F]/30' : 'hover:bg-[#12291F]/15'
                }`}
              >
                {/* Clickable Header Row */}
                <div
                  onClick={() => handleToggle(service.id)}
                  className="py-6 sm:py-8 md:py-10 flex items-center justify-between cursor-pointer group"
                  data-cursor="pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6 md:gap-12 flex-1 pr-3 sm:pr-4">
                    {/* Number */}
                    <span className="font-mono-code text-base sm:text-2xl font-light text-[#D6C29A] tracking-widest shrink-0">
                      {service.id}
                    </span>

                    {/* Title */}
                    <div className="flex-1">
                      <h3 className="font-editorial text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F3F0E8] group-hover:text-[#D6C29A] transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#999B96] font-mono-code mt-1 sm:mt-2 line-clamp-1 hidden sm:block">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="hidden md:inline-block text-xs font-mono-code text-[#999B96] uppercase tracking-wider group-hover:text-[#D6C29A] transition-colors">
                      {isOpen ? 'Close' : 'Explore'}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D6C29A]/30 flex items-center justify-center bg-[#101110] text-[#D6C29A] group-hover:border-[#D6C29A] transition-all">
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </div>
                  </div>
                </div>

                {/* Expanded Editorial Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden pb-10"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 pl-0 sm:pl-16 md:pl-24">
                        {/* Left Summary & Tags */}
                        <div className="lg:col-span-5 space-y-6">
                          <p className="text-base sm:text-lg text-[#F3F0E8]/90 leading-relaxed font-light">
                            {service.description}
                          </p>

                          <div>
                            <span className="text-xs font-mono-code text-[#999B96] uppercase tracking-wider block mb-3">
                              Core Technologies
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {service.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 rounded-full text-xs font-mono-code bg-[#101110] text-[#D6C29A] border border-[#D6C29A]/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <a
                            href="#contact"
                            onClick={(e) => {
                              e.preventDefault();
                              sounds.playClick();
                              scrollToSection('#contact');
                            }}
                            className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-[#D6C29A] hover:text-[#F3F0E8] font-semibold pt-2"
                            data-cursor="pointer"
                          >
                            <span>Request This Capability</span>
                            <ArrowUpRight size={14} />
                          </a>
                        </div>

                        {/* Right Deliverables Grid */}
                        <div className="lg:col-span-7">
                          <div className="p-6 sm:p-8 rounded-2xl bg-[#101110]/70 border border-[#D6C29A]/20">
                            <h4 className="font-editorial text-sm font-bold text-[#D6C29A] tracking-wider uppercase mb-5 flex items-center gap-2">
                              <Sparkles size={14} />
                              Specific Deliverables & Modules
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              {service.deliverables.map((del, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3F0E8]/90 font-mono-code"
                                >
                                  <CheckCircle2 size={15} className="text-[#D6C29A] shrink-0 mt-0.5" />
                                  <span>{del}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
