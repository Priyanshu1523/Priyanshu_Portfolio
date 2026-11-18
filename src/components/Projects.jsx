import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Clock, ShieldCheck, Globe } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projectsData';
import ProjectModal from './ProjectModal';
import { sounds } from '../utils/audio';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(activeCategory));

  const handleCategorySelect = (category) => {
    sounds.playClick();
    setActiveCategory(category);
  };

  const openProjectModal = (project) => {
    sounds.playClick();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 bg-[#101110] text-[#F3F0E8] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 -right-20 w-80 sm:w-96 h-80 sm:h-96 bg-[#0B3D2E]/25 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Index & Header */}
        <div className="flex items-center gap-4 mb-6 sm:mb-10">
          <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D6C29A]">
            02 &bull; CLIENT PROJECTS & AMCS
          </span>
          <div className="h-px flex-1 bg-[#D6C29A]/15" />
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#F3F0E8] leading-[1.12]">
              Selected Projects &
              <br />
              <span className="font-display italic text-[#D6C29A] font-normal">Client Partnerships.</span>
            </h2>
          </motion.div>

          <p className="text-[#999B96] text-xs sm:text-sm md:text-base font-mono-code max-w-sm">
            Long-term Annual Maintenance Contracts (AMC), dynamic web platforms, and enterprise hosting support.
          </p>
        </div>

        {/* Filter Categories Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 scrollbar-none touch-pan-x">
          {PROJECT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                onMouseEnter={() => sounds.playHover()}
                className={`whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-mono-code uppercase tracking-wider transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#D6C29A] text-[#101110] border-[#D6C29A] font-semibold shadow-md'
                    : 'bg-[#12291F]/40 text-[#999B96] border-[#D6C29A]/15 hover:border-[#D6C29A]/50 hover:text-[#F3F0E8]'
                }`}
                data-cursor="pointer"
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col rounded-2xl bg-[#12291F]/30 border border-[#D6C29A]/20 overflow-hidden hover:border-[#D6C29A]/60 transition-all duration-500 shadow-xl"
              >
                {/* Browser Mockup Showcase Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#07241B] border-b border-[#D6C29A]/15 p-4 sm:p-5 flex flex-col justify-between select-none">
                  {/* Browser Chrome Window Controls */}
                  <div className="flex items-center justify-between border-b border-[#D6C29A]/15 pb-2.5">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/80" />
                      {/* Domain URL bar - cleanly hidden on small mobile to avoid crowding duration badge */}
                      <div className="hidden sm:flex items-center gap-1.5 ml-2 px-2.5 py-0.5 rounded bg-[#101110]/80 border border-[#D6C29A]/20 text-[11px] font-mono-code text-[#D6C29A]">
                        <ShieldCheck size={11} className="text-emerald-400" />
                        <span className="truncate max-w-[180px]">https://{project.domain}</span>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#0B3D2E] border border-[#D6C29A]/30 text-[11px] sm:text-xs font-mono-code text-[#D6C29A] font-semibold">
                      <Clock size={11} className="shrink-0" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  {/* Visual Centerpiece: Site Identity & Favicon Card */}
                  <div className="my-auto py-2 sm:py-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#101110] border border-[#D6C29A]/30 p-2 sm:p-2.5 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 group-hover:border-[#D6C29A] transition-all">
                        <img
                          src={project.favicon}
                          alt={project.title}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-editorial text-base sm:text-xl font-bold text-[#F3F0E8] group-hover:text-[#D6C29A] transition-colors leading-tight">
                          {project.title}
                        </h4>
                        <span className="text-[11px] sm:text-xs font-mono-code text-[#999B96] flex items-center gap-1 mt-0.5">
                          <Globe size={11} className="text-[#D6C29A] shrink-0" />
                          <span className="truncate max-w-[180px] sm:max-w-none">{project.domain}</span>
                        </span>
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-end text-right font-mono-code text-[11px]">
                      <span className="text-emerald-400 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        ACTIVE AMC
                      </span>
                      <span className="text-[#999B96] mt-0.5">SSL Secured</span>
                    </div>
                  </div>

                  {/* Bottom Mockup Meta */}
                  <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] font-mono-code text-[#999B96] border-t border-[#D6C29A]/10">
                    <span className="truncate max-w-[180px] sm:max-w-none">{project.role}</span>
                    <span className="text-[#D6C29A] font-semibold">{project.status}</span>
                  </div>
                </div>

                {/* Card Content & Descriptions */}
                <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-1 justify-between bg-[#101110]/70">
                  <div>
                    {/* Title */}
                    <h3 className="font-editorial text-xl sm:text-2xl md:text-3xl font-bold text-[#F3F0E8] group-hover:text-[#D6C29A] transition-colors mb-2 leading-snug">
                      {project.title}
                    </h3>

                    {/* Short 1-line Tagline */}
                    <p className="text-xs sm:text-sm font-mono-code text-[#D6C29A] mb-3 font-medium leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* 2-3 Line Description */}
                    <p className="text-[#999B96] text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tags & Action Buttons */}
                  <div className="pt-4 border-t border-[#D6C29A]/15 space-y-4 sm:space-y-5">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono-code bg-[#12291F] text-[#D8D4C9] border border-[#D6C29A]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Required Dual Buttons */}
                    <div className="flex flex-col xs:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-1">
                      {/* Live Preview Button */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => sounds.playHover()}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3.5 rounded-xl bg-[#0B3D2E] text-[#D6C29A] font-mono-code text-[11px] sm:text-xs uppercase tracking-wider font-semibold border border-[#D6C29A]/30 hover:bg-[#D6C29A] hover:text-[#101110] transition-all duration-300 shadow-md group/btn text-center"
                        data-cursor="pointer"
                      >
                        <span>Live Preview</span>
                        <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform shrink-0" />
                      </a>

                      {/* View Details Button */}
                      <button
                        onClick={() => openProjectModal(project)}
                        onMouseEnter={() => sounds.playHover()}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3.5 rounded-xl bg-transparent text-[#F3F0E8] font-mono-code text-[11px] sm:text-xs uppercase tracking-wider font-semibold border border-[#D6C29A]/25 hover:border-[#D6C29A] hover:text-[#D6C29A] hover:bg-[#12291F]/40 transition-all duration-300 group/btn text-center"
                        data-cursor="pointer"
                      >
                        <span>View Details</span>
                        <Eye size={12} className="text-[#D6C29A] group-hover/btn:scale-110 transition-transform shrink-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study / Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
