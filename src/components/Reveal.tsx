'use client';

import React, { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'fade';
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to keep element in active state
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Slight offset from bottom of viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Determine transition starting classes
  const getRevealClass = () => {
    switch (direction) {
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      case 'fade':
        return 'reveal'; // default simple fade
      case 'up':
      default:
        return 'reveal'; // fade up
    }
  };

  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${getRevealClass()} ${isVisible ? 'active' : ''} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}
