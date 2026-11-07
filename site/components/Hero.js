'use client';

import { useEffect, useState } from 'react';
import Icon from './Icon';
import { trackEvent } from '@/lib/i18n';

// Local file first (when saved in site/public/media), Higgsfield CDN as fallback.
const VIDEO_SOURCES = [
  '/media/hero.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_3HYD5RESFGsUXRS40ak5Gi2s7lf/hf_20261107_141019_46ab8fdd-f35a-406a-a30e-64cdba59cdc5.mp4',
];

export default function Hero({ t }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="home" className="relative z-10 flex min-h-[92vh] items-center overflow-hidden pt-28">
      {/* background video (low-res, muted loop) with poster */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero.webp"
          aria-hidden="true"
        >
          {VIDEO_SOURCES.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>
        {/* readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-20 lg:px-8">
        <div className={`max-w-2xl ${mounted ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="section-label">{t.hero.badge}</span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {t.hero.title1}
            <span className="text-gradient">{t.hero.titleHighlight}</span>
            {t.hero.title2}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{t.hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#diagnostico"
              className="btn-primary"
              onClick={() => trackEvent('click_cta_hero', { cta: 'primary' })}
            >
              {t.hero.ctaPrimary} <Icon name="arrow-right" className="h-4 w-4" />
            </a>
            <a
              href="#solucoes"
              className="btn-ghost"
              onClick={() => trackEvent('click_cta_hero', { cta: 'secondary' })}
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-2.5">
            {t.hero.chips.map((c, i) => (
              <span
                key={c}
                className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-slate-200"
              >
                <span className="font-display text-ai">0{i + 1}</span> {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
