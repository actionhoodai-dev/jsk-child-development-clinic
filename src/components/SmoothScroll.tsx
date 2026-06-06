'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4, // slightly longer duration for ultra-smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential deceleration
      infinite: false,
      smoothWheel: true,
      syncTouch: true, // Syncs touch events for mobile smooth scrolling
      touchMultiplier: 1.8, // 100-200% smooth touch movement on mobile
    });

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
