import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-[#101110] text-[#F3F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-4 mb-6 sm:mb-10">
          <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D6C29A]">
            06 &bull; ACADEMIC FOUNDATION
          </span>
          <div className="h-px flex-1 bg-[#D6C29A]/15" />
        </div>

        {/* Minimal Luxury Editorial Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-5 sm:p-10 md:p-12 rounded-2xl bg-gradient-to-br from-[#12291F] via-[#101110] to-[#101110] border border-[#D6C29A]/25 relative shadow-xl"
        >
          {/* Subtle corner tick mark */}
          <div className="absolute top-4 right-4 text-[#D6C29A] opacity-60">
            <GraduationCap size={22} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Degree Information */}
            <div className="lg:col-span-7 pr-8 sm:pr-0">
              <div className="flex items-center gap-3 font-mono-code text-[11px] sm:text-xs text-[#D6C29A] mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {EDUCATION.period}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5 text-[#999B96]">
                  <MapPin size={13} />
                  {EDUCATION.location}
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-4xl md:text-5xl font-bold text-[#F3F0E8] mb-2 leading-tight">
                {EDUCATION.institution}
              </h3>

              <p className="font-mono-code text-sm sm:text-lg text-[#D6C29A] font-semibold mb-5 sm:mb-6 leading-snug">
                {EDUCATION.degree} &bull; {EDUCATION.field}
              </p>

              <div className="space-y-2">
                {EDUCATION.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#999B96] font-light">
                    <span className="text-[#D6C29A] mt-0.5">&bull;</span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Academic Pillars - Responsive 1 column on mobile, 2 columns on tablet/desktop */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-mono-code text-xs">
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#101110]/80 border border-[#D6C29A]/15">
                <span className="text-[#D6C29A] block mb-1 font-semibold text-[11px] sm:text-xs">CORE RIGOR</span>
                <span className="text-[#999B96] text-[11px] leading-relaxed block">Algorithms, Data Structures & System Design</span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#101110]/80 border border-[#D6C29A]/15">
                <span className="text-[#D6C29A] block mb-1 font-semibold text-[11px] sm:text-xs">DATABASES</span>
                <span className="text-[#999B96] text-[11px] leading-relaxed block">Relational Schemas, ACID & Query Optimization</span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#101110]/80 border border-[#D6C29A]/15">
                <span className="text-[#D6C29A] block mb-1 font-semibold text-[11px] sm:text-xs">SOFTWARE ENG</span>
                <span className="text-[#999B96] text-[11px] leading-relaxed block">Modular Architecture & Agile Development</span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#101110]/80 border border-[#D6C29A]/15">
                <span className="text-[#D6C29A] block mb-1 font-semibold text-[11px] sm:text-xs">STATUS</span>
                <span className="text-emerald-400 font-medium text-[11px] block">Graduating CSE Engineer</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
