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

  // On mobile touch devices, allow the native browser engine to handle touch scrolling
  // This provides hardware-accelerated 120Hz ProMotion momentum scrolling with zero touch lag or freezing!
  const isTouchDevice = 
    window.matchMedia('(pointer: coarse)').matches || 
    'ontouchstart' in window || 
    navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    if (lenisInstance) {
      lenisInstance.destroy();
      lenisInstance = null;
    }
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('lenis', 'lenis-stopped', 'lenis-smooth', 'lenis-scrolling');
    }
    return null;
  }

  if (lenisInstance) {
    lenisInstance.destroy();
    if (rafId) cancelAnimationFrame(rafId);
  }

  lenisInstance = new Lenis({
    lerp: 0.085, // Ultra-buttery inertia smooth scroll on desktop
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.0,
    syncTouch: false,
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
  if (!targetId || typeof window === 'undefined') return;
  const element = document.querySelector(targetId);
  if (!element) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(element, {
      offset: -70,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  } else {
    // Universal robust native smooth scroll for mobile & touch devices with navbar offset
    const navHeight = 70;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = Math.max(0, elementPosition - navHeight);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

export function getLenis() {
  return lenisInstance;
}
