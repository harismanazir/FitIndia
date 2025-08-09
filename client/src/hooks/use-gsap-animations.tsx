// Import GSAP animation library for smooth, professional animations
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins for scroll-triggered animations
gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP ANIMATION HOOKS FOR FITINDIA WEBSITE
 * 
 * This file contains custom React hooks that integrate GSAP animations
 * with React components. Each hook provides specific animation functionality
 * that can be easily applied to any component.
 * 
 * Animation Philosophy:
 * - Smooth and professional (not jarring or distracting)
 * - Performance optimized using GSAP's timeline system
 * - Accessible (respects user motion preferences)
 * - Cute and engaging without being overwhelming
 * 
 * Available Animations:
 * - Fade in from below with bounce
 * - Slide in from sides with spring effect
 * - Scale up with elastic bounce
 * - Stagger animations for lists
 * - Scroll-triggered animations
 * - Hover animations with smooth transitions
 */

/**
 * Hook for fade-in animation from below with cute bounce effect
 * Perfect for hero sections, cards, and main content areas
 * 
 * Usage: const fadeRef = useFadeInUp();
 *        <div ref={fadeRef}>Content that fades in from below</div>
 */
export const useFadeInUp = <T extends HTMLElement = HTMLDivElement>(delay = 0, duration = 0.8) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Check if user prefers reduced motion for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Simply show the element without animation
      gsap.set(elementRef.current, { opacity: 1, y: 0 });
      return;
    }

    // Set initial state: invisible and moved down
    gsap.set(elementRef.current, {
      opacity: 0,
      y: 50,             // Start 50px below final position
      scale: 0.95        // Slightly smaller for cute scale effect
    });

    // Create smooth animation with bounce
    gsap.to(elementRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: duration,
      delay: delay,
      ease: "back.out(1.2)",    // Cute bounce effect at the end
      clearProps: "all"         // Clean up inline styles after animation
    });
  }, [delay, duration]);

  return elementRef;
};

/**
 * Hook for slide-in animation from the left with spring effect
 * Great for navigation items, sidebar content, and text blocks
 */
export const useSlideInLeft = <T extends HTMLElement = HTMLDivElement>(delay = 0, duration = 0.6) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set(elementRef.current, { opacity: 1, x: 0 });
      return;
    }

    // Start from the left, invisible
    gsap.set(elementRef.current, {
      opacity: 0,
      x: -60,            // Start 60px to the left
      rotation: -5       // Slight rotation for playful effect
    });

    // Slide in with spring bounce
    gsap.to(elementRef.current, {
      opacity: 1,
      x: 0,
      rotation: 0,
      duration: duration,
      delay: delay,
      ease: "elastic.out(1, 0.5)",  // Spring elastic effect
      clearProps: "all"
    });
  }, [delay, duration]);

  return elementRef;
};

/**
 * Hook for slide-in animation from the right
 * Perfect for alternating content or balancing left-side animations
 */
export const useSlideInRight = <T extends HTMLElement = HTMLDivElement>(delay = 0, duration = 0.6) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set(elementRef.current, { opacity: 1, x: 0 });
      return;
    }

    gsap.set(elementRef.current, {
      opacity: 0,
      x: 60,             // Start 60px to the right
      rotation: 5        // Slight opposite rotation
    });

    gsap.to(elementRef.current, {
      opacity: 1,
      x: 0,
      rotation: 0,
      duration: duration,
      delay: delay,
      ease: "elastic.out(1, 0.5)",
      clearProps: "all"
    });
  }, [delay, duration]);

  return elementRef;
};

/**
 * Hook for scale-up animation with cute bounce
 * Perfect for buttons, cards, and call-to-action elements
 */
export const useScaleIn = <T extends HTMLElement = HTMLDivElement>(delay = 0, duration = 0.5) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set(elementRef.current, { opacity: 1, scale: 1 });
      return;
    }

    // Start tiny and invisible
    gsap.set(elementRef.current, {
      opacity: 0,
      scale: 0.3,        // Start very small for dramatic effect
      rotation: -10      // Slight rotation for playfulness
    });

    // Scale up with bounce
    gsap.to(elementRef.current, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: duration,
      delay: delay,
      ease: "back.out(2)",      // Strong bounce for cute effect
      clearProps: "all"
    });
  }, [delay, duration]);

  return elementRef;
};

/**
 * Hook for staggered animations of multiple child elements
 * Perfect for lists, grid items, navigation menus, and card collections
 * 
 * Usage: const containerRef = useStaggerAnimation();
 *        <div ref={containerRef}>
 *          <div>Item 1</div>  // Animates first
 *          <div>Item 2</div>  // Animates 0.1s later
 *          <div>Item 3</div>  // Animates 0.2s later
 *        </div>
 */
export const useStaggerAnimation = <T extends HTMLElement = HTMLDivElement>(staggerDelay = 0.1, startDelay = 0) => {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.children;
    if (children.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set(children, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    // Set all children to invisible and slightly moved
    gsap.set(children, {
      opacity: 0,
      y: 30,
      scale: 0.9
    });

    // Create staggered animation timeline
    const timeline = gsap.timeline({ delay: startDelay });
    
    timeline.to(children, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.4)",
      stagger: {
        amount: staggerDelay * children.length,  // Total time for all staggers
        from: "start"                            // Animate from first to last
      },
      clearProps: "all"
    });
  }, [staggerDelay, startDelay]);

  return containerRef;
};

/**
 * Hook for scroll-triggered animations
 * Elements animate when they come into viewport
 * Great for long pages with lots of content sections
 */
export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(animationType: 'fadeUp' | 'slideLeft' | 'slideRight' | 'scaleIn' = 'fadeUp', triggerStart = 'top 80%') => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const element = elementRef.current;

    // Define different animation types
    const animations = {
      fadeUp: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 }
      },
      slideLeft: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0, ease: "power2.out", duration: 0.8 }
      },
      slideRight: {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0, ease: "power2.out", duration: 0.8 }
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1, ease: "back.out(1.4)", duration: 0.8 }
      }
    };

    const selectedAnimation = animations[animationType];

    // Set initial state
    gsap.set(element, selectedAnimation.from);

    // Create scroll trigger
    ScrollTrigger.create({
      trigger: element,
      start: triggerStart,
      onEnter: () => {
        gsap.to(element, {
          ...selectedAnimation.to,
          clearProps: "all"
        });
      },
      once: true  // Only animate once when entering viewport
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationType, triggerStart]);

  return elementRef;
};

/**
 * Hook for hover animations on interactive elements
 * Adds smooth scale and glow effects on mouse over
 * Perfect for buttons, cards, and clickable elements
 */
export const useHoverAnimation = <T extends HTMLElement = HTMLDivElement>(scaleAmount = 1.05, glowIntensity = 0.2) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    // Hover in animation
    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: scaleAmount,
        boxShadow: `0 10px 30px rgba(255, 69, 0, ${glowIntensity})`, // Orange glow
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Hover out animation
    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        boxShadow: "0 0 0 rgba(255, 69, 0, 0)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Add event listeners
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [scaleAmount, glowIntensity]);

  return elementRef;
};

/**
 * Hook for text animation with typewriter effect
 * Characters appear one by one with slight bounce
 * Great for headings and important text
 */
export const useTextAnimation = <T extends HTMLElement = HTMLHeadingElement>(delay = 0) => {
  const textRef = useRef<T>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const text = textRef.current.textContent || '';
    const element = textRef.current;

    // Split text into individual characters wrapped in spans
    element.innerHTML = text
      .split('')
      .map(char => `<span style="opacity: 0; display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

    const chars = element.querySelectorAll('span');

    // Animate each character with stagger
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: delay,
      ease: "back.out(1.2)",
      stagger: {
        amount: 0.8,  // Total time for all characters
        from: "start"
      }
    });
  }, [delay]);

  return textRef;
};

/**
 * Hook for floating animation
 * Creates a subtle up-and-down floating motion
 * Perfect for call-to-action buttons and decorative elements
 */
export const useFloatingAnimation = <T extends HTMLElement = HTMLDivElement>(amplitude = 10, duration = 3) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    // Create infinite floating animation
    gsap.to(elementRef.current, {
      y: -amplitude,  // Move up by amplitude pixels
      duration: duration / 2,
      ease: "sine.inOut",
      yoyo: true,     // Reverse the animation
      repeat: -1      // Infinite loop
    });
  }, [amplitude, duration]);

  return elementRef;
};