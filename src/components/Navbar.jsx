import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { scrollToSection } from '../utils/smoothScroll';
import { sounds } from '../utils/audio';

export default function Navbar({ soundEnabled, setSoundEnabled }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Exact Chronological Page Order: About -> Works -> Services -> Experience -> Contact
  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Works', href: '#works', id: 'works' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section in exact page order
      const sections = ['hero', 'about', 'works', 'services', 'tech-stack', 'experience', 'education', 'workflow', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            // Map sub-sections to active nav item
            if (section === 'tech-stack') {
              setActiveSection('services');
            } else if (section === 'education' || section === 'workflow') {
              setActiveSection('experience');
            } else {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    sounds.playClick();
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  const toggleSound = () => {
    const newState = sounds.toggleSound();
    setSoundEnabled(newState);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-[#101110]/85 backdrop-blur-md border-b border-[#D6C29A]/10 shadow-lg'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark & Profile Thumbnail */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            onMouseEnter={() => sounds.playHover()}
            className="group flex items-center gap-3"
            data-cursor="pointer"
          >
            <div className="w-8 h-8 rounded-full border border-[#D6C29A]/50 overflow-hidden bg-[#0B3D2E] group-hover:border-[#D6C29A] transition-colors shadow-sm shrink-0">
              <img src="/priyanshu-profile.jpg" alt="Priyanshu Chauhan" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-sm md:text-base font-bold tracking-wider text-[#F3F0E8] group-hover:text-[#D6C29A] transition-colors">
                PRIYANSHU CHAUHAN
              </span>
              <span className="text-[10px] font-mono-code text-[#999B96] tracking-widest hidden sm:block">
                SOFTWARE DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Center Navigation Links in Exact Order: About -> Works -> Services -> Experience -> Contact */}
          <nav className="hidden lg:flex items-center gap-8 bg-[#12291F]/40 border border-[#D6C29A]/15 px-6 py-2 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => sounds.playHover()}
                  className={`relative text-xs uppercase tracking-widest transition-colors font-mono-code py-1 ${
                    isActive ? 'text-[#D6C29A] font-semibold' : 'text-[#999B96] hover:text-[#F3F0E8]'
                  }`}
                  data-cursor="pointer"
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D6C29A] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => sounds.playHover()}
              className="p-2.5 rounded-full border border-[#D6C29A]/20 bg-[#12291F]/30 hover:border-[#D6C29A] text-[#D6C29A] transition-all"
              title={soundEnabled ? "Mute interactive audio" : "Enable tactile audio effects"}
              aria-label="Toggle Sound"
              data-cursor="pointer"
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} className="opacity-60" />}
            </button>

            {/* Desktop Let's Talk CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              onMouseEnter={() => sounds.playHover()}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider px-5 py-2.5 rounded-full bg-[#0B3D2E] text-[#D6C29A] border border-[#D6C29A]/30 hover:bg-[#D6C29A] hover:text-[#101110] transition-all duration-300 group"
              data-cursor="pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                sounds.playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="lg:hidden p-2.5 rounded-lg border border-[#D6C29A]/20 bg-[#12291F]/40 text-[#F3F0E8] hover:border-[#D6C29A] transition-colors"
              aria-label="Toggle Menu"
              data-cursor="pointer"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay in Exact Chronological Order */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#101110] text-[#F3F0E8] flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            <div className="flex flex-col gap-6 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                  className="group flex items-center justify-between text-3xl sm:text-4xl font-editorial font-bold text-[#F3F0E8] hover:text-[#D6C29A] transition-colors border-b border-[#D6C29A]/10 pb-3"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono-code text-[#D6C29A] font-normal">0{idx + 1}</span>
                    {link.name}
                  </span>
                  <ArrowUpRight size={24} className="text-[#999B96] group-hover:text-[#D6C29A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-[#D6C29A]/15 flex flex-col sm:flex-row justify-between gap-4 text-xs font-mono-code text-[#999B96]">
              <div>
                <p className="text-[#D6C29A] font-semibold">DIRECT CONTACT</p>
                <p>chauhanpriyanshu011@gmail.com</p>
              </div>
              <div>
                <p className="text-[#D6C29A] font-semibold">LOCATION</p>
                <p>Gujarat, India &bull; Available Worldwide</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
