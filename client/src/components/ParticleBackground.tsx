// Import React and GSAP for creating animated particle effects
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * PARTICLE BACKGROUND ANIMATION COMPONENT
 * 
 * Creates floating particles with cute, smooth animations in the background.
 * Perfect for adding visual interest without being distracting.
 * 
 * Features:
 * - Multiple particle sizes and speeds for organic movement
 * - Orange particles that match FitIndia brand colors
 * - Infinite loop animations with random delays
 * - Respects user motion preferences for accessibility
 * - GPU-accelerated transforms for smooth performance
 * 
 * Usage: <ParticleBackground /> (add to any section that needs visual enhancement)
 */

interface ParticleBackgroundProps {
  particleCount?: number;  // Number of particles to create (default: 20)
  maxSize?: number;       // Maximum particle size in pixels (default: 4)
  speed?: number;         // Animation speed multiplier (default: 1)
}

export default function ParticleBackground({ 
  particleCount = 20, 
  maxSize = 4, 
  speed = 1 
}: ParticleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if user prefers reduced motion for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // Don't animate if user prefers less motion

    const container = containerRef.current;
    const particles: HTMLElement[] = [];

    // Create individual particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      
      // Random particle properties for organic feel
      const size = Math.random() * maxSize + 1;
      const opacity = Math.random() * 0.6 + 0.2; // Between 0.2 and 0.8
      const duration = (Math.random() * 20 + 10) / speed; // 10-30 seconds divided by speed
      
      // Particle styling with orange colors
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(255, 69, 0, ${opacity}), rgba(255, 119, 50, ${opacity * 0.5}));
        border-radius: 50%;
        pointer-events: none;
        will-change: transform;
      `;

      // Random starting position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      gsap.set(particle, {
        x: startX,
        y: startY,
        scale: 0 // Start invisible for smooth entrance
      });

      container.appendChild(particle);
      particles.push(particle);

      // Entrance animation - particle appears with cute scale effect
      gsap.to(particle, {
        scale: 1,
        duration: 0.8,
        delay: Math.random() * 2, // Random delay for organic feel
        ease: "back.out(1.4)" // Bouncy entrance
      });

      // Main floating animation - infinite loop
      const floatTl = gsap.timeline({ repeat: -1, yoyo: true });
      
      floatTl.to(particle, {
        x: startX + (Math.random() - 0.5) * 200, // Move ±100px horizontally
        y: startY + (Math.random() - 0.5) * 150, // Move ±75px vertically
        duration: duration,
        ease: "sine.inOut"
      });

      // Additional rotation for extra cuteness
      gsap.to(particle, {
        rotation: Math.random() * 360,
        duration: duration * 0.8,
        repeat: -1,
        ease: "none"
      });

      // Subtle pulsing effect
      gsap.to(particle, {
        opacity: opacity * 0.3,
        duration: Math.random() * 3 + 2, // 2-5 seconds
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    particlesRef.current = particles;

    // Cleanup function to remove particles when component unmounts
    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
      gsap.killTweensOf(particles); // Kill all animations
    };
  }, [particleCount, maxSize, speed]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }} // Behind content but above background
      aria-hidden="true" // Hide from screen readers as it's decorative
    />
  );
}

/**
 * USAGE EXAMPLES:
 * 
 * // Basic usage with default settings
 * <ParticleBackground />
 * 
 * // Customized particle system
 * <ParticleBackground 
 *   particleCount={30} 
 *   maxSize={6} 
 *   speed={1.5} 
 * />
 * 
 * // Subtle effect for backgrounds
 * <ParticleBackground 
 *   particleCount={10} 
 *   maxSize={2} 
 *   speed={0.5} 
 * />
 */