import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isIntersecting = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Drifting orbs in Racing Green & Gold
    const particles = [
      { x: width * 0.25, y: height * 0.35, radius: 280, color: 'rgba(11, 61, 46, 0.45)', vx: 0.2, vy: 0.15 },
      { x: width * 0.75, y: height * 0.65, radius: 340, color: 'rgba(18, 41, 31, 0.55)', vx: -0.18, vy: -0.12 },
      { x: width * 0.5, y: height * 0.45, radius: 180, color: 'rgba(214, 194, 154, 0.08)', vx: 0.12, vy: -0.15 }
    ];

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Pause rendering when scrolled out of view to preserve 60/120fps throughout page
    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      if (isIntersecting && !animationFrameId) {
        render();
      }
    }, { threshold: 0.05 });

    observer.observe(canvas);

    const render = () => {
      if (!isIntersecting) {
        animationFrameId = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 100 || p.x > width - 100) p.vx *= -1;
        if (p.y < 100 || p.y > height - 100) p.vy *= -1;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 160000) { // 400^2
          const dist = Math.sqrt(distSq);
          p.x -= (dx / dist) * 0.3;
          p.y -= (dy / dist) * 0.3;
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 10, p.x, p.y, p.radius);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'rgba(16, 17, 16, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
