'use client';

import { useRef } from 'react';

/**
 * Card whose background reveals a soft radial spotlight that follows the
 * mouse position inside the card — premium, interactive feel.
 */
export default function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}
