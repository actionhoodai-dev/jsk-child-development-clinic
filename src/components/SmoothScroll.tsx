'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
      smoothWheel: true,
      syncTouch: true, // Syncs touch events for mobile smooth scrolling
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    // Watch for document size changes to recalculate height dynamically
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      lenis.destroy();
    };
  }, []);

  // When pathname changes, reset scroll to top immediately and recalculate page dimensions
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      
      // Delay resize slightly to allow page layout to settle
      const t1 = setTimeout(() => {
        lenisRef.current?.resize();
      }, 80);
      
      const t2 = setTimeout(() => {
        lenisRef.current?.resize();
      }, 600); // after the transition overlay exits completely

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [pathname]);

  return null;
}
