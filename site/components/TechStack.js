'use client';

import Reveal from './Reveal';
import { TECH_LOGOS } from '@/lib/techLogos';

/**
 * "Technologies we work with" strip: official logos (Simple Icons, CC0)
 * in monochrome, gaining brand color on hover. Infinite marquee.
 */
// very dark brand colors (e.g. Next.js black) would vanish on the dark background
function hoverColor(hex) {
  const n = parseInt(hex, 16);
  const lum = 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
  return lum < 60 ? '#ffffff' : `#${hex}`;
}

export default function TechStack({ t }) {
  const row = [...TECH_LOGOS, ...TECH_LOGOS];
  return (
    <section className="relative z-10 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <span className="section-label">{t.stack.label}</span>
          <p className="font-display text-xl font-semibold text-slate-300">{t.stack.title}</p>
        </Reveal>

        <div
          className="mt-10 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <ul className="flex w-max animate-marquee items-center gap-12 py-2 hover:[animation-play-state:paused]">
            {row.map((logo, i) => (
              <li
                key={i}
                className="tech-logo flex items-center gap-3 text-slate-400"
                style={{ '--brand': hoverColor(logo.hex) }}
                title={logo.title}
              >
                <svg role="img" viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-label={logo.title}>
                  <path d={logo.path} />
                </svg>
                <span className="whitespace-nowrap text-sm font-semibold">{logo.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
