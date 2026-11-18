import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 bg-[#101110] text-[#F3F0E8] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#0B3D2E]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-4 mb-6 sm:mb-10">
          <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D6C29A]">
            05 &bull; PROFESSIONAL JOURNEY
          </span>
          <div className="h-px flex-1 bg-[#D6C29A]/15" />
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12 sm:mb-20">
          <div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#F3F0E8] leading-[1.12]">
              Experience &
              <br />
              <span className="font-display italic text-[#D6C29A] font-normal">Career Milestones.</span>
            </h2>
          </div>

          <p className="text-[#999B96] text-xs sm:text-sm md:text-base font-mono-code max-w-sm">
            Proven track record across freelance enterprise consulting, academic platforms, and national geospatial organizations.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative space-y-10 sm:space-y-16">
          {/* Continuous Vertical Timeline Line */}
          <div className="absolute left-2.5 sm:left-4 top-3 bottom-3 w-[2px] bg-[#D6C29A]/30" />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group flex items-start"
            >
              {/* Timeline Glowing Node - Centered 100% on the line regardless of screen size */}
              <div className="absolute left-2.5 sm:left-4 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#101110] border-2 border-[#D6C29A] flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-md shadow-[#D6C29A]/30 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D6C29A]" />
              </div>

              {/* Card Container */}
              <div
                onMouseEnter={() => sounds.playHover()}
                className="w-full ml-7 sm:ml-12 p-4 sm:p-7 md:p-10 rounded-2xl bg-[#12291F]/30 border border-[#D6C29A]/20 hover:border-[#D6C29A]/50 hover:bg-[#12291F]/45 transition-all duration-300 shadow-xl"
              >
                {/* Meta Top Line: Period, Status, Location */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 font-mono-code text-xs mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 text-[#D6C29A]">
                    <Calendar size={13} className="shrink-0" />
                    <span className="font-semibold text-[11px] sm:text-xs">{exp.period}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#101110] text-[#999B96] border border-[#D6C29A]/15 uppercase tracking-wider">
                      {exp.status}
                    </span>
                    <span className="text-[#999B96] flex items-center gap-1">
                      <MapPin size={11} className="shrink-0" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Company & Role */}
                <div className="mb-3 sm:mb-4">
                  <h3 className="font-editorial text-xl sm:text-3xl md:text-4xl font-bold text-[#F3F0E8] group-hover:text-[#D6C29A] transition-colors leading-tight">
                    {exp.company}
                  </h3>
                  <p className="text-xs sm:text-base font-mono-code text-[#D6C29A] mt-1 font-medium">
                    {exp.role}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-base text-[#999B96] font-light leading-relaxed mb-5 sm:mb-6">
                  {exp.summary}
                </p>

                {/* Bulleted Responsibilities */}
                <div className="space-y-2 mb-5 sm:mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3F0E8]/90">
                      <CheckCircle2 size={14} className="text-[#D6C29A] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Chips */}
                <div className="pt-3.5 border-t border-[#D6C29A]/15 flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 sm:py-1 rounded text-[10px] sm:text-[11px] font-mono-code bg-[#101110] text-[#D8D4C9] border border-[#D6C29A]/15"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
