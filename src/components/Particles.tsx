/*
  Particles.tsx — Lightweight floating particle effect rendered on a <canvas>.
  Spawns tiny white dots that drift slowly upward with gentle horizontal sway.
  Fully transparent background so it overlays on any section.
  Accepts optional particleCount and className props.
*/

import { useEffect, useRef } from 'react';

interface ParticlesProps {
  particleCount?: number;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  drift: number;
}

export default function Particles({ particleCount = 50, className = '' }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createParticle(): Particle {
      if (!canvas) {
        return { x: 0, y: 0, size: 1, speedY: -0.2, speedX: 0, opacity: 0.3, drift: 0 };
      }
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedY: -(Math.random() * 0.3 + 0.1),
        speedX: 0,
        opacity: Math.random() * 0.4 + 0.1,
        drift: Math.random() * 0.4 - 0.2,
      };
    }

    function init() {
      resize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.y += p.speedY;
        p.x += p.drift + Math.sin(Date.now() * 0.001 + i) * 0.1;

        // Reset particle when it floats off top
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        // Wrap horizontally
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, ' + p.opacity + ')';
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', resize);

    return function cleanup() {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={'absolute inset-0 w-full h-full pointer-events-none ' + className}
    />
  );
}
