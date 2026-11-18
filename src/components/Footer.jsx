import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { scrollToSection } from '../utils/smoothScroll';
import { sounds } from '../utils/audio';

export default function Footer() {
  const handleBackToTop = () => {
    sounds.playClick();
    scrollToSection('#hero');
  };

  // Exact Page Order: About -> Works -> Services -> Tech Stack -> Experience -> Education -> Workflow -> Contact
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#07241B] text-[#F3F0E8] pt-20 pb-12 px-6 md:px-12 border-t border-[#D6C29A]/20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-32 bg-[#D6C29A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Navigation & Back to Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-16 border-b border-[#D6C29A]/15">
          {/* Quick Nav Links in Exact Chronological Order */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono-code text-xs uppercase tracking-widest text-[#999B96]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  sounds.playClick();
                  scrollToSection(link.href);
                }}
                onMouseEnter={() => sounds.playHover()}
                className="hover:text-[#D6C29A] transition-colors"
                data-cursor="pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Magnetic Back to Top Trigger */}
          <button
            onClick={handleBackToTop}
            onMouseEnter={() => sounds.playHover()}
            className="self-start md:self-auto inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#101110] text-[#D6C29A] border border-[#D6C29A]/30 hover:bg-[#D6C29A] hover:text-[#101110] font-mono-code text-xs uppercase tracking-widest transition-all duration-300 group"
            data-cursor="pointer"
          >
            <span>Back To Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Monumental Wordmark - Fully Formed Across All Screen Sizes */}
        <div className="py-12 md:py-16 select-none flex items-center justify-center w-full overflow-hidden">
          <h2 className="w-full text-center font-editorial font-extrabold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#F3F0E8] via-[#D6C29A] to-[#12291F] text-[clamp(1.75rem,5.2vw,5.5rem)] leading-none select-none">
            PRIYANSHU CHAUHAN
          </h2>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-[#D6C29A]/15 font-mono-code text-xs text-[#999B96]">
          {/* Left Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#D6C29A] transition-colors flex items-center gap-2"
              data-cursor="pointer"
            >
              <Mail size={14} />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D6C29A] transition-colors flex items-center gap-1.5"
              data-cursor="pointer"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D6C29A] transition-colors flex items-center gap-1.5"
              data-cursor="pointer"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Right Copyright & Positioning */}
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Priyanshu Chauhan. Crafted with Precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
