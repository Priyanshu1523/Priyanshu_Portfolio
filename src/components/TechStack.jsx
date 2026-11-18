import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Layout, Server, Wrench, Cpu, CheckCircle2 } from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('ALL');

  const categories = [
    { key: 'ALL', label: 'All Technologies', icon: Cpu },
    { key: 'FRONTEND', label: 'Frontend', icon: Layout },
    { key: 'BACKEND', label: 'Backend', icon: Server },
    { key: 'DATABASE', label: 'Database', icon: Database },
    { key: 'ERP', label: 'ERP & Frappe', icon: Terminal },
    { key: 'TOOLS', label: 'Tools & DevOps', icon: Wrench },
  ];

  // Flatten or filter items
  const getAllItems = () => {
    let list = [];
    Object.entries(TECH_STACK).forEach(([cat, items]) => {
      items.forEach(item => {
        list.push({ ...item, group: cat });
      });
    });
    return list;
  };

  const displayedItems = activeTab === 'ALL'
    ? getAllItems()
    : TECH_STACK[activeTab].map(item => ({ ...item, group: activeTab }));

  const handleTabSelect = (key) => {
    sounds.playClick();
    setActiveTab(key);
  };

  return (
    <section id="tech-stack" className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 bg-[#101110] text-[#F3F0E8] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#0B3D2E]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-4 mb-6 sm:mb-10">
          <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D6C29A]">
            04 &bull; TECHNICAL ARSENAL
          </span>
          <div className="h-px flex-1 bg-[#D6C29A]/15" />
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-14">
          <div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#F3F0E8] leading-[1.12]">
              My Technology
              <br />
              <span className="font-display italic text-[#D6C29A] font-normal">Stack & Tools.</span>
            </h2>
          </div>

          <p className="text-[#999B96] text-xs sm:text-sm md:text-base font-mono-code max-w-sm">
            Curated technologies selected for enterprise reliability, high performance, and rapid maintainability.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 sm:pb-4 mb-8 sm:mb-10 scrollbar-none touch-pan-x">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => handleTabSelect(cat.key)}
                onMouseEnter={() => sounds.playHover()}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-mono-code uppercase tracking-wider transition-all duration-300 border whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0B3D2E] text-[#D6C29A] border-[#D6C29A] font-semibold shadow-md'
                    : 'bg-[#12291F]/30 text-[#999B96] border-[#D6C29A]/15 hover:border-[#D6C29A]/40 hover:text-[#F3F0E8]'
                }`}
                data-cursor="pointer"
              >
                <Icon size={13} className={isActive ? 'text-[#D6C29A]' : 'text-[#999B96]'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Interactive Luxury Technology Cards */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence>
            {displayedItems.map((tech, index) => (
              <motion.div
                layout
                key={tech.name + tech.group}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                onMouseEnter={() => sounds.playHover()}
                className="group relative p-6 rounded-xl bg-[#12291F]/25 border border-[#D6C29A]/15 hover:border-[#D6C29A]/50 hover:bg-[#12291F]/40 transition-all duration-300"
                data-cursor="pointer"
              >
                {/* Subtle corner tick mark */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#D6C29A]/40 group-hover:bg-[#D6C29A] transition-colors" />

                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-[#101110] text-[#D6C29A] border border-[#D6C29A]/20">
                    {tech.category}
                  </span>
                  <span className="text-[10px] font-mono-code text-[#999B96]">
                    {tech.group}
                  </span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-[#F3F0E8] group-hover:text-[#D6C29A] transition-colors mb-2">
                  {tech.name}
                </h3>

                <p className="text-xs text-[#999B96] font-mono-code leading-relaxed">
                  {tech.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
