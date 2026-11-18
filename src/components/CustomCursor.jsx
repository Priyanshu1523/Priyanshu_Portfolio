import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'view'
  const [cursorText, setCursorText] = useState('');
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices or fine pointer absent
    const isTouchInput = 
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    if (isTouchInput) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let dotX = -100;
    let dotY = -100;
    let isVisible = false;
    let rafId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    // Global listener for interactive hover targets
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      if (target) {
        const customType = target.getAttribute('data-cursor');
        const customText = target.getAttribute('data-cursor-text');

        if (customType === 'view') {
          setCursorState('view');
          setCursorText(customText || 'VIEW');
        } else {
          setCursorState('hover');
          setCursorText('');
        }
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    // High performance RAF loop using pure translate3d without React re-renders
    const render = () => {
      // Crisp dot tracking (snappy follow)
      dotX += (mouseX - dotX) * 0.45;
      dotY += (mouseY - dotY) * 0.45;

      // Silky ring tracking (smooth fluid lag)
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#D6C29A] pointer-events-none z-[99999] opacity-0 will-change-transform"
        style={{
          boxShadow: '0 0 10px rgba(214, 194, 154, 0.8)',
        }}
      />

      {/* Fluid Outer Ring / Dynamic Pill */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[99998] rounded-full flex items-center justify-center font-mono-code text-[10px] tracking-widest font-semibold opacity-0 will-change-transform transition-[width,height,background-color,border-color,opacity,box-shadow] duration-200 ease-out ${
          cursorState === 'hover'
            ? 'w-14 h-14 border-2 border-[#D6C29A] bg-[#D6C29A]/15 backdrop-blur-[2px] shadow-[0_0_20px_rgba(214,194,154,0.3)]'
            : cursorState === 'view'
            ? 'w-24 h-24 border border-[#D6C29A] bg-[#0B3D2E]/90 text-[#F3F0E8] shadow-[0_0_30px_rgba(11,61,46,0.6)] backdrop-blur-sm'
            : 'w-9 h-9 border border-[#D6C29A]/40 bg-transparent'
        }`}
      >
        {cursorState === 'view' && cursorText && (
          <span className="text-[#D6C29A] text-[11px] font-bold uppercase tracking-wider animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
