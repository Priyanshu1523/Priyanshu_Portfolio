import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowUpRight, CheckCircle2, Award, Code2, Cpu, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 px-6 md:px-12 bg-[#101110] text-[#F3F0E8] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0B3D2E]/25 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#D6C29A]">
            01 &bull; ABOUT & PHILOSOPHY
          </span>
          <div className="h-px flex-1 bg-[#D6C29A]/15" />
        </div>

        {/* Big Editorial Heading */}
        <div className="mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F3F0E8] leading-[1.08] max-w-5xl"
          >
            Developer by <span className="font-display italic text-[#D6C29A] font-normal">Passion.</span>
            <br />
            Problem Solver by <span className="font-display italic text-[#D6C29A] font-normal">Design.</span>
          </motion.h2>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#999B96] text-base sm:text-lg md:text-xl leading-relaxed font-light">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#F3F0E8] font-normal text-lg sm:text-xl md:text-2xl"
            >
              I'm <span className="text-[#D6C29A] font-medium">Priyanshu Chauhan</span>, a Software Developer specializing in full-stack development and ERP solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I work across modern web technologies, business automation and database-driven applications. My experience includes developing responsive web applications, integrating REST APIs, implementing ERP solutions and building custom business workflows.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I enjoy understanding real business requirements and converting them into reliable, scalable digital solutions. Whether engineering custom Odoo & ERPNext modules or crafting reactive full-stack web applications, I focus on clean code, solid performance, and long-term maintainability.
            </motion.p>

            {/* Quick Principles Pill Box */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#12291F]/40 border border-[#D6C29A]/15 flex items-start gap-3">
                <CheckCircle2 className="text-[#D6C29A] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-editorial text-sm font-semibold text-[#F3F0E8]">Full Stack Expertise</h4>
                  <p className="text-xs text-[#999B96] mt-1 font-mono-code">React.js, Node.js, Express, Python REST APIs</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#12291F]/40 border border-[#D6C29A]/15 flex items-start gap-3">
                <Award className="text-[#D6C29A] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-editorial text-sm font-semibold text-[#F3F0E8]">ERP Architecture</h4>
                  <p className="text-xs text-[#999B96] mt-1 font-mono-code">Odoo & ERPNext Custom Modules, Workflows & QWeb</p>
                </div>
              </div>
            </div>

            {/* Direct Connect / Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sounds.playHover()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0B3D2E] text-[#D6C29A] font-mono-code text-xs uppercase tracking-wider font-semibold border border-[#D6C29A]/30 hover:bg-[#D6C29A] hover:text-[#101110] transition-all"
                data-cursor="pointer"
              >
                <span>Connect On LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="#contact"
                onMouseEnter={() => sounds.playHover()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-[#F3F0E8] font-mono-code text-xs uppercase tracking-wider font-semibold border border-[#D6C29A]/20 hover:border-[#D6C29A] hover:text-[#D6C29A] transition-all"
                data-cursor="pointer"
              >
                <span>Start A Project</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Visual Stats & Architectural Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Editorial Image Card with 100% Crisp Visibility */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#D6C29A]/25 shadow-2xl bg-[#07241B] group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85"
                alt="Engineering Collaborative Architecture"
                className="w-full h-full object-cover filter contrast-105 brightness-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101110]/85 via-transparent to-transparent opacity-40 pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono-code text-[#D6C29A] bg-[#101110]/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#D6C29A]/25">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Terminal size={13} className="text-[#D6C29A]" />
                  ENGINEERING PHILOSOPHY
                </span>
                <span className="text-[#999B96]">Scalable Solutions</span>
              </div>
            </div>

            {/* Metrics Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#12291F] to-[#101110] border border-[#D6C29A]/25 relative shadow-xl">
              <div className="absolute top-3 right-4 font-mono-code text-[10px] text-[#D6C29A] tracking-widest uppercase">
                ENGINEERING PROFILE
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#F3F0E8] mb-6 flex items-center gap-2">
                <Code2 className="text-[#D6C29A]" size={20} />
                System Metric Highlights
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {PERSONAL_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="border-l-2 border-[#D6C29A]/40 pl-4 py-1">
                    <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#D6C29A] block leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="font-mono-code text-xs text-[#999B96] uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quote Block */}
              <div className="mt-8 pt-6 border-t border-[#D6C29A]/15 text-sm italic text-[#D8D4C9] font-display">
                "Writing clean, modular code is not just about syntax — it is about engineering predictable business outcomes that empower human teams."
              </div>
            </div>

            {/* Location Pill */}
            <div className="p-4 rounded-xl bg-[#0B3D2E]/30 border border-[#D6C29A]/20 flex items-center justify-between text-xs font-mono-code">
              <span className="text-[#999B96]">HEADQUARTERS</span>
              <span className="text-[#D6C29A] font-semibold">Gujarat, India &bull; Serving Global Teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
