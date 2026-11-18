import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export default function Workflow() {
  const stepIcons = [Search, Compass, Code, Rocket];

  return (
    <section id="workflow" className="relative py-24 md:py-36 px-6 md:px-12 bg-[#101110] text-[#F3F0E8] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#0B3D2E]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#D6C29A]">
            07 &bull; METHODOLOGY & PROCESS
          </span>
          <div className="h-px flex-1 bg-[#D6C29A]/15" />
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F3F0E8] leading-[1.1]">
              How I Work &
              <br />
              <span className="font-display italic text-[#D6C29A] font-normal">Execute Projects.</span>
            </h2>
          </div>

          <p className="text-[#999B96] text-sm md:text-base font-mono-code max-w-sm">
            A disciplined, four-phase engineering framework turning ambitious requirements into resilient production systems.
          </p>
        </div>

        {/* 4-Step Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => sounds.playHover()}
                className="group relative p-8 rounded-2xl bg-[#12291F]/30 border border-[#D6C29A]/20 hover:border-[#D6C29A]/60 hover:bg-[#12291F]/45 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-editorial text-4xl font-bold text-[#D6C29A] leading-none">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#D6C29A]/30 flex items-center justify-center bg-[#101110] text-[#D6C29A] group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Title & Phase */}
                  <h3 className="font-editorial text-2xl font-bold text-[#F3F0E8] group-hover:text-[#D6C29A] transition-colors mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-mono-code text-[#D6C29A] block mb-4 uppercase tracking-wider">
                    {step.phase}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#999B96] leading-relaxed mb-6 font-light">
                    {step.description}
                  </p>
                </div>

                {/* Points List */}
                <div className="pt-4 border-t border-[#D6C29A]/15 space-y-2">
                  {step.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono-code text-[#F3F0E8]/80">
                      <span className="text-[#D6C29A] mt-0.5">&bull;</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
