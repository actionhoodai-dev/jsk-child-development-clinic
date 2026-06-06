'use client';

import React, { useEffect, useRef, useState } from 'react';

type StatCounterProps = {
  targetNumber: number;
  suffix?: string;
  duration?: number; // duration of counting in ms
};

export default function StatCounter({
  targetNumber,
  suffix = '',
  duration = 1500,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
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

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = targetNumber;
    if (start === end) {
      setCount(end);
      return;
    }

    // Determine interval and step size
    const range = end - start;
    const increment = Math.ceil(range / (duration / 16)); // ~60fps (16ms per frame)
    const stepTime = 16;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, targetNumber, duration]);

  return (
    <div ref={ref} className="stat-number">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}
