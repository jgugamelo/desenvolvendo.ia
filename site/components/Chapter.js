'use client';

/**
 * Big faint chapter number watermark — gives each section a perceivable
 * identity and progression rhythm (01, 02, 03…).
 */
export default function Chapter({ n }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-6 select-none font-display text-[6rem] font-bold leading-none text-white/[0.04] lg:right-10 lg:text-[9rem]"
    >
      {n}
    </span>
  );
}
