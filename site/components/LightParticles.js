'use client';

import { useEffect, useRef, useState } from 'react';
import ParticleCanvas from './ParticleCanvas';

/*
 * Particle network for light sections. The canvas is fixed to the viewport
 * but clipped to the section (clip-path), so it looks continuous with the
 * dark background. It only runs while the section is on screen.
 */
export default function LightParticles() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { rootMargin: '100px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ clipPath: 'inset(0)' }}>
      {on && <ParticleCanvas variant="light" />}
    </div>
  );
}
