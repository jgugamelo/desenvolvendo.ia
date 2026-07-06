'use client';

import { useEffect, useRef } from 'react';

/** Wraps children and fades/slides them in when scrolled into view. */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delayClass = delay > 0 && delay <= 4 ? ` reveal-delay-${delay}` : '';

  return (
    <Tag ref={ref} className={`reveal${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
