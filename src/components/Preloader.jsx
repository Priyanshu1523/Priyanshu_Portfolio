import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Dynamic increment for realistic loading cadence
      const step = Math.floor(Math.random() * 8) + 2;
      current += step;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          onComplete?.();
        }, 200);
      } else {
        setProgress(current);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100000] flex flex-col justify-between p-8 md:p-14 bg-[#101110] text-[#F3F0E8] select-none"
        >
          {/* Top Row: System Status & Brand */}
          <div className="flex items-center justify-between text-xs md:text-sm font-mono-code text-[#999B96] uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D6C29A] animate-ping" />
              <span className="text-[#D6C29A]">PRIYANSHU CHAUHAN</span>
            </div>
            <div className="hidden sm:block">
              PORTFOLIO ARCHITECTURE / 2025
            </div>
            <div>
              GUJARAT, INDIA
            </div>
          </div>

          {/* Center: Monumental Percentage Display */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                <span className="font-editorial text-7xl sm:text-9xl md:text-[14rem] font-bold tracking-tighter text-[#F3F0E8] leading-none inline-block">
                  {progress}
                </span>
                <span className="font-editorial text-4xl sm:text-6xl md:text-8xl text-[#D6C29A] ml-2">
                  %
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xs md:text-sm font-mono-code uppercase tracking-[0.3em] text-[#999B96]"
            >
              {progress < 40
                ? "Loading Core Architecture..."
                : progress < 80
                ? "Compiling Experience & Modules..."
                : "Launching Digital Canvas..."}
            </motion.p>
          </div>

          {/* Bottom Row: Linear Progress Bar & Technology Indicators */}
          <div className="w-full">
            <div className="w-full h-[2px] bg-[#12291F] rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-[#D6C29A]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="flex items-center justify-between text-xs font-mono-code text-[#999B96]">
              <span>FULL-STACK &bull; ERP &bull; AUTOMATION</span>
              <span>SCROLL TO EXPLORE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
