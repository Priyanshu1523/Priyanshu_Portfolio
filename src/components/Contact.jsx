import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Linkedin, Copy, Check, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Application',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Full-Stack Web Application',
    'Custom Odoo / ERP Implementation',
    'ERPNext / Frappe Customization',
    'Backend API & Database Architecture',
    'AI-Powered Workflow Automation',
    'Freelance Consultation & Code Review'
  ];

  const handleCopyEmail = async () => {
    sounds.playClick();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PERSONAL_INFO.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = PERSONAL_INFO.email;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sounds.playClick();
    setErrorMessage('');

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 8) {
      setErrorMessage('Please provide a message with at least 8 characters.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '6486ef95-5cb2-4752-9be0-1a73ee3e8957',
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
          subject: `Portfolio Inquiry: ${formData.projectType} from ${formData.name}`,
          to_email: PERSONAL_INFO.email
        })
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setStatus('success');
        sounds.playChime();
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0B3D2E', '#D6C29A', '#F3F0E8']
        });
      } else {
        throw new Error(result.message || 'Direct API transmission paused.');
      }
    } catch {
      setStatus('success');
      sounds.playChime();
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0B3D2E', '#D6C29A', '#F3F0E8']
      });

      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry: ${formData.projectType} from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Priyanshu,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n`
      )}`;
      
      setTimeout(() => {
        window.open(mailtoUrl, '_blank');
      }, 1000);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 bg-[#101110] text-[#F3F0E8] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#0B3D2E]/25 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-4 mb-6 sm:mb-10">
          <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D6C29A]">
            08 &bull; INITIATE COLLABORATION
          </span>
          <div className="h-px flex-1 bg-[#D6C29A]/15" />
        </div>

        {/* Section Heading & Subtitle */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F3F0E8] leading-[1.12] max-w-5xl mb-4 sm:mb-6"
          >
            Have an Idea?
            <br />
            Let's Build Something <span className="font-display italic text-[#D6C29A] font-normal">Meaningful.</span>
          </motion.h2>

          <p className="text-[#999B96] text-sm sm:text-base md:text-xl font-light max-w-2xl leading-relaxed">
            Whether you need a full-stack application, ERP implementation or a custom digital solution, let's discuss how we can bring your idea to life.
          </p>
        </div>

        {/* Contact Grid: Details on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Verification */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 w-full">
            <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-[#12291F] to-[#101110] border border-[#D6C29A]/25 relative shadow-xl">
              <div className="flex items-center gap-3.5 sm:gap-4 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-[#D6C29A]/15">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#D6C29A]/40 shrink-0 shadow-md">
                  <img src="/priyanshu-profile.jpg" alt="Priyanshu Chauhan" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-editorial text-base sm:text-lg font-bold text-[#F3F0E8]">Priyanshu Chauhan</h4>
                  <p className="text-xs font-mono-code text-[#D6C29A]">Full Stack & ERP Developer</p>
                </div>
              </div>

              {/* Email Box with 1-Click Copy */}
              <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-[#D6C29A]/15">
                <span className="text-[11px] sm:text-xs font-mono-code text-[#999B96] uppercase tracking-wider block mb-2">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2 bg-[#101110] p-2.5 sm:p-3 rounded-lg border border-[#D6C29A]/20">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono-code text-[11px] sm:text-sm text-[#F3F0E8] hover:text-[#D6C29A] transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 sm:p-2 rounded bg-[#12291F] text-[#D6C29A] hover:bg-[#D6C29A] hover:text-[#101110] transition-colors shrink-0"
                    title="Copy Email Address"
                    data-cursor="pointer"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[11px] font-mono-code text-emerald-400 mt-1.5 block">
                    &check; Email copied to clipboard!
                  </span>
                )}
              </div>

              {/* Location & Status */}
              <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-[#D6C29A]/15 space-y-2.5 font-mono-code text-xs">
                <div>
                  <span className="text-[#999B96] text-[10px] sm:text-xs block mb-0.5">LOCATION</span>
                  <span className="text-[#F3F0E8] flex items-center gap-1.5 text-[11px] sm:text-xs">
                    <MapPin size={13} className="text-[#D6C29A] shrink-0" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>
                <div>
                  <span className="text-[#999B96] text-[10px] sm:text-xs block mb-0.5">AVAILABILITY</span>
                  <span className="text-emerald-400 font-medium text-[11px] sm:text-xs">
                    &bull; Available for Freelance & Full-Time Roles
                  </span>
                </div>
              </div>

              {/* Social Action Button */}
              <div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sounds.playHover()}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0B3D2E] text-[#D6C29A] border border-[#D6C29A]/30 hover:bg-[#D6C29A] hover:text-[#101110] font-mono-code text-xs uppercase tracking-wider font-semibold transition-all"
                  data-cursor="pointer"
                >
                  <Linkedin size={15} />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Response Time Guarantee Pill */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0B3D2E]/25 border border-[#D6C29A]/20 flex items-center gap-2.5 text-xs font-mono-code text-[#999B96]">
              <Sparkles size={15} className="text-[#D6C29A] shrink-0" />
              <span className="text-[11px] sm:text-xs leading-relaxed">Prompt communication guaranteed &bull; Typically responds within 24 hours.</span>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-[#12291F]/30 border border-[#D6C29A]/20 backdrop-blur-sm shadow-2xl">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0B3D2E] border border-[#D6C29A] mx-auto flex items-center justify-center text-[#D6C29A]">
                    <Check size={24} />
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F3F0E8]">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm font-mono-code text-[#999B96] max-w-md mx-auto">
                    Thank you for reaching out, <span className="text-[#D6C29A] font-semibold">{formData.name}</span>. Your inquiry has been routed to Priyanshu Chauhan. We will review your project requirements and follow up promptly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Full-Stack Web Application',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#0B3D2E] text-[#D6C29A] border border-[#D6C29A]/30 font-mono-code text-xs uppercase tracking-wider hover:bg-[#D6C29A] hover:text-[#101110] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/50 border border-red-500/30 flex items-center gap-2.5 text-xs font-mono-code text-red-300">
                      <AlertCircle size={15} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono-code uppercase tracking-wider text-[#D6C29A] mb-1.5 sm:mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        required
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#101110] border border-[#D6C29A]/20 text-[#F3F0E8] placeholder-[#999B96]/40 text-[16px] sm:text-sm font-mono-code focus:outline-none focus:border-[#D6C29A] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono-code uppercase tracking-wider text-[#D6C29A] mb-1.5 sm:mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@company.com"
                        required
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#101110] border border-[#D6C29A]/20 text-[#F3F0E8] placeholder-[#999B96]/40 text-[16px] sm:text-sm font-mono-code focus:outline-none focus:border-[#D6C29A] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono-code uppercase tracking-wider text-[#D6C29A] mb-1.5 sm:mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#101110] border border-[#D6C29A]/20 text-[#F3F0E8] text-[16px] sm:text-sm font-mono-code focus:outline-none focus:border-[#D6C29A] transition-colors"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#101110] text-[#F3F0E8]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono-code uppercase tracking-wider text-[#D6C29A] mb-1.5 sm:mb-2">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project scope, timeline, current business challenges or technical objectives..."
                      required
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#101110] border border-[#D6C29A]/20 text-[#F3F0E8] placeholder-[#999B96]/40 text-[16px] sm:text-sm font-mono-code focus:outline-none focus:border-[#D6C29A] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    onMouseEnter={() => sounds.playHover()}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-[#0B3D2E] text-[#D6C29A] font-mono-code text-xs uppercase tracking-widest font-semibold border border-[#D6C29A]/40 hover:bg-[#D6C29A] hover:text-[#101110] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#0B3D2E]/40"
                    data-cursor="pointer"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D6C29A] animate-ping" />
                        Transmitting Inquiry...
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
