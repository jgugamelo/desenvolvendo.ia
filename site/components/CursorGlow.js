'use client';

import { useEffect, useRef } from 'react';

/** Soft radial glow that follows the mouse with a slight lag. */
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;
    let tx = x;
    let ty = y;
    let raf;

    function onMove(e) {
      tx = e.clientX;
      ty = e.clientY;
    }

    function loop() {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      el.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener('mousemove', onMove);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full"
      style={{
        background:
          'radial-gradient(circle, rgba(46,124,246,0.14) 0%, rgba(34,211,170,0.06) 40%, transparent 70%)',
      }}
    />
  );
}
