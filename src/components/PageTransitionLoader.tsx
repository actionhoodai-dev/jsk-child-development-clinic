'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PageTransitionLoader() {
  const router = useRouter();
  const pathname = usePathname();
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'exiting'>('loading');

  // 1. Initial Page Load Splash Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('exiting');
      const exitTimer = setTimeout(() => {
        setStatus('idle');
      }, 500);
      return () => clearTimeout(exitTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // 2. Clear loader once the pathname updates (route navigation completes)
  useEffect(() => {
    if (status === 'loading') {
      setStatus('exiting');
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // 3. Intercept local anchor link click events for transitions
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }

      if (!target) return;

      const anchor = target as HTMLAnchorElement;
      const href = anchor.getAttribute('href');

      // Skip external links, hash anchors, mailto, tel, downloads, or target="_blank"
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        anchor.target === '_blank' ||
        anchor.download ||
        e.defaultPrevented ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // Verify it's an internal route
      const isInternal = href.startsWith('/') || href.startsWith(window.location.origin);
      if (!isInternal) return;

      // Avoid loader when reloading the exact same page
      const targetUrl = new URL(href, window.location.href);
      if (targetUrl.pathname === window.location.pathname && targetUrl.search === window.location.search) {
        return;
      }

      e.preventDefault();

      // Trigger the slide-in/fade-in page transition loader
      setStatus('loading');

      // Programmatically navigate after the transition screen covers the viewport
      setTimeout(() => {
        router.push(href);
      }, 300);
    };

    document.addEventListener('click', handleLinkClick, { capture: true });
    
    const handlePopState = () => {
      setStatus('loading');
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleLinkClick, { capture: true });
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

  if (status === 'idle') return null;

  return (
    <div className={`transition-loader-overlay ${status}`}>
      <div className="transition-loader-content">
        <div className="transition-logo-wrapper">
          <Image
            src="/assets/logo.png"
            alt="JSK Clinic Logo"
            width={260}
            height={65}
            className="transition-logo-img"
            priority
          />
        </div>
        {/* Solid orange loading bar */}
        <div className="transition-progress-bar">
          <div className="transition-progress-line"></div>
        </div>
      </div>
    </div>
  );
}
