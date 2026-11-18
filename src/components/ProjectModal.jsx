import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Clock, ShieldCheck, Globe, CheckCircle2, AlertCircle, Laptop, ArrowUpRight, Lock } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'preview'
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    // Only lock scroll when project is actively opened
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        sounds.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99990] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute inset-0 bg-[#101110]/90 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#12291F] border border-[#D6C29A]/30 rounded-2xl shadow-2xl overflow-y-auto text-[#F3F0E8] z-10 flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 bg-[#12291F]/95 backdrop-blur-md border-b border-[#D6C29A]/15 px-6 py-4 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <span className="font-mono-code text-xs px-3 py-1 rounded-full bg-[#0B3D2E] text-[#D6C29A] border border-[#D6C29A]/30 font-semibold flex items-center gap-1.5">
                <Clock size={12} />
                {project.duration}
              </span>
              <span className="text-xs font-mono-code text-[#999B96] hidden sm:inline">
                PROJECT DOSSIER
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Tab Selector: Overview vs Live Embed */}
              <div className="flex items-center bg-[#101110] p-1 rounded-lg border border-[#D6C29A]/20 text-xs font-mono-code">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-[#0B3D2E] text-[#D6C29A] font-semibold'
                      : 'text-[#999B96] hover:text-[#F3F0E8]'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 rounded transition-colors flex items-center gap-1 ${
                    activeTab === 'preview'
                      ? 'bg-[#0B3D2E] text-[#D6C29A] font-semibold'
                      : 'text-[#999B96] hover:text-[#F3F0E8]'
                  }`}
                >
                  <Laptop size={12} />
                  <span>Interactive Frame</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="p-2 rounded-full bg-[#101110] text-[#999B96] hover:text-[#D6C29A] hover:bg-[#0B3D2E] transition-colors"
                aria-label="Close Modal"
                data-cursor="pointer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-10 space-y-8">
            {/* Live Interactive Embed or Mockup Banner */}
            {activeTab === 'preview' ? (
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#D6C29A]/30 bg-[#101110]">
                {iframeError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#07241B]">
                    <Lock size={32} className="text-[#D6C29A] mb-3" />
                    <h4 className="font-editorial text-xl font-bold text-[#F3F0E8] mb-2">
                      External Embedding Restricted
                    </h4>
                    <p className="text-xs font-mono-code text-[#999B96] max-w-md mb-5">
                      {project.title} enforces strict browser frame security policies (SAMEORIGIN). You can view the live site directly in a new tab:
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D6C29A] text-[#101110] font-mono-code text-xs font-semibold hover:bg-[#E5D6B6] transition-colors"
                    >
                      <span>Open {project.domain}</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                ) : (
                  <>
                    <iframe
                      src={project.url}
                      title={project.title}
                      loading="lazy"
                      onError={() => setIframeError(true)}
                      className="w-full h-full border-0 bg-white"
                      sandbox="allow-scripts allow-same-origin allow-popups"
                    />
                    <div className="absolute bottom-3 right-3">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#101110]/90 text-[#D6C29A] border border-[#D6C29A]/30 font-mono-code text-xs backdrop-blur-sm hover:bg-[#D6C29A] hover:text-[#101110] transition-colors"
                      >
                        <span>Open in New Tab</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="p-6 rounded-xl bg-[#07241B] border border-[#D6C29A]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#101110] border border-[#D6C29A]/30 p-3 flex items-center justify-center shrink-0 shadow-lg">
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
                    <h3 className="font-editorial text-2xl font-bold text-[#F3F0E8]">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono-code text-[#D6C29A] mt-0.5">
                      {project.tagline}
                    </p>
                    <span className="text-xs font-mono-code text-[#999B96] flex items-center gap-1 mt-1">
                      <Globe size={11} className="text-[#D6C29A]" />
                      https://{project.domain}
                    </span>
                  </div>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#0B3D2E] text-[#D6C29A] font-mono-code text-xs uppercase tracking-wider font-semibold border border-[#D6C29A]/40 hover:bg-[#D6C29A] hover:text-[#101110] transition-all flex items-center gap-2 shrink-0 shadow-lg"
                  data-cursor="pointer"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            )}

            {/* Title & Metadata Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#101110]/80 border border-[#D6C29A]/15 font-mono-code text-xs">
              <div>
                <span className="text-[#999B96] block mb-1">CLIENT / ENTITY</span>
                <span className="text-[#F3F0E8] font-medium">{project.title}</span>
              </div>
              <div>
                <span className="text-[#999B96] block mb-1">ROLE</span>
                <span className="text-[#F3F0E8] font-medium">{project.role}</span>
              </div>
              <div>
                <span className="text-[#999B96] block mb-1">DURATION</span>
                <span className="text-[#D6C29A] font-semibold">{project.duration}</span>
              </div>
              <div>
                <span className="text-[#999B96] block mb-1">CONTRACT TYPE</span>
                <span className="text-emerald-400 font-medium">AMC & Support</span>
              </div>
            </div>

            {/* Full Project Description */}
            <div>
              <h4 className="font-editorial text-lg font-bold text-[#D6C29A] mb-3 uppercase tracking-wider">
                Full Project Description
              </h4>
              <p className="text-[#F3F0E8]/90 text-sm sm:text-base leading-relaxed font-light bg-[#101110]/60 p-5 rounded-xl border border-[#D6C29A]/10">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Deliverables & Scope Highlights */}
            <div>
              <h4 className="font-editorial text-lg font-bold text-[#F3F0E8] mb-3 uppercase tracking-wider">
                Scope & Key Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3F0E8]/90 p-3 rounded-lg bg-[#0B3D2E]/30 border border-[#D6C29A]/15 font-mono-code"
                  >
                    <CheckCircle2 size={15} className="text-[#D6C29A] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Badges */}
            <div>
              <h5 className="text-xs font-mono-code text-[#999B96] uppercase tracking-widest mb-3">
                Project & Contract Tags
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono-code bg-[#101110] text-[#D6C29A] border border-[#D6C29A]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#D6C29A]/15 flex flex-wrap items-center justify-between gap-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B3D2E] text-[#D6C29A] border border-[#D6C29A]/40 hover:bg-[#D6C29A] hover:text-[#101110] font-mono-code text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                data-cursor="pointer"
              >
                <span>Live Preview</span>
                <ExternalLink size={14} />
              </a>

              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="text-xs font-mono-code text-[#999B96] hover:text-[#F3F0E8] transition-colors"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
