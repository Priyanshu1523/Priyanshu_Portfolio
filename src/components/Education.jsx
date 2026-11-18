import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-20 md:py-28 px-6 md:px-12 bg-[#101110] text-[#F3F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#D6C29A]">
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
          className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#12291F] via-[#101110] to-[#101110] border border-[#D6C29A]/25 relative shadow-xl"
        >
          {/* Subtle corner tick mark */}
          <div className="absolute top-4 right-4 text-[#D6C29A] opacity-60">
            <GraduationCap size={24} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Degree Information */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 font-mono-code text-xs text-[#D6C29A] mb-3">
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

              <h3 className="font-editorial text-3xl sm:text-5xl font-bold text-[#F3F0E8] mb-2">
                {EDUCATION.institution}
              </h3>

              <p className="font-mono-code text-base sm:text-lg text-[#D6C29A] font-semibold mb-6">
                {EDUCATION.degree} &bull; {EDUCATION.field}
              </p>

              <div className="space-y-2.5">
                {EDUCATION.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#999B96] font-light">
                    <span className="text-[#D6C29A] mt-1">&bull;</span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Academic Pillars */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 font-mono-code text-xs">
              <div className="p-4 rounded-xl bg-[#101110]/80 border border-[#D6C29A]/15">
                <span className="text-[#D6C29A] block mb-1 font-semibold">CORE RIGOR</span>
                <span className="text-[#999B96]">Algorithms, Data Structures & System Design</span>
              </div>
              <div className="p-4 rounded-xl bg-[#101110]/80 border border-[#D6C29A]/15">
                <span className="text-[#D6C29A] block mb-1 font-semibold">DATABASES</span>
                <span className="text-[#999B96]">Relational Schemas, ACID & Query Optimization</span>
              </div>
              <div className="p-4 rounded-xl bg-[#101110]/80 border border-[#D6C29A]/15">
                <span className="text-[#D6C29A] block mb-1 font-semibold">SOFTWARE ENG</span>
                <span className="text-[#999B96]">Modular Architecture & Agile Development</span>
              </div>
              <div className="p-4 rounded-xl bg-[#101110]/80 border border-[#D6C29A]/15">
                <span className="text-[#D6C29A] block mb-1 font-semibold">STATUS</span>
                <span className="text-emerald-400 font-medium">Graduating CSE Engineer</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
