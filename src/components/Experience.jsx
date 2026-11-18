import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-36 px-6 md:px-12 bg-[#101110] text-[#F3F0E8] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0B3D2E]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#D6C29A]">
            05 &bull; PROFESSIONAL JOURNEY
          </span>
          <div className="h-px flex-1 bg-[#D6C29A]/15" />
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F3F0E8] leading-[1.1]">
              Experience &
              <br />
              <span className="font-display italic text-[#D6C29A] font-normal">Career Milestones.</span>
            </h2>
          </div>

          <p className="text-[#999B96] text-sm md:text-base font-mono-code max-w-sm">
            Proven track record across freelance enterprise consulting, academic platforms, and national geospatial organizations.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-[#D6C29A]/25 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 md:pl-14 space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[63px] top-1.5 w-4 h-4 rounded-full bg-[#101110] border-2 border-[#D6C29A] flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-md shadow-[#D6C29A]/30">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D6C29A]" />
              </div>

              {/* Card Container */}
              <div
                onMouseEnter={() => sounds.playHover()}
                className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#12291F]/30 border border-[#D6C29A]/20 hover:border-[#D6C29A]/50 hover:bg-[#12291F]/45 transition-all duration-300 shadow-xl"
              >
                {/* Meta Top Line: Period & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono-code text-xs mb-4">
                  <div className="flex items-center gap-2 text-[#D6C29A]">
                    <Calendar size={13} />
                    <span className="font-semibold">{exp.period}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#101110] text-[#999B96] border border-[#D6C29A]/15 uppercase tracking-wider">
                      {exp.status}
                    </span>
                    <span className="text-[#999B96] flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Company & Role */}
                <div className="mb-4">
                  <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#F3F0E8] group-hover:text-[#D6C29A] transition-colors flex items-center gap-3">
                    {exp.company}
                  </h3>
                  <p className="text-sm sm:text-base font-mono-code text-[#D6C29A] mt-1 font-medium">
                    {exp.role}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#999B96] font-light leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Bulleted Responsibilities */}
                <div className="space-y-2.5 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3F0E8]/90">
                      <CheckCircle2 size={15} className="text-[#D6C29A] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Chips */}
                <div className="pt-4 border-t border-[#D6C29A]/15 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-[11px] font-mono-code bg-[#101110] text-[#D8D4C9] border border-[#D6C29A]/15"
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
