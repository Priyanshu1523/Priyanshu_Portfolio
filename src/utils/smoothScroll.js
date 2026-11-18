import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;
let rafId = null;

export function initSmoothScroll() {
  if (typeof window === 'undefined') return null;

  // Check prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return null;

  if (lenisInstance) {
    lenisInstance.destroy();
    if (rafId) cancelAnimationFrame(rafId);
  }

  lenisInstance = new Lenis({
    lerp: 0.085, // Ultra-buttery inertia smooth scroll
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
    autoRaf: false,
  });

  // Keep ScrollTrigger in sync
  lenisInstance.on('scroll', ScrollTrigger.update);

  function raf(time) {
    lenisInstance.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  return lenisInstance;
}

export function scrollToSection(targetId) {
  const element = document.querySelector(targetId);
  if (!element) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(element, {
      offset: -40,
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  } else {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function getLenis() {
  return lenisInstance;
}
