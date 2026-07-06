'use client';

import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '@/lib/i18n';

function useCountUp(active) {
  // simple mount flag to trigger CSS animations
  return active;
}

export default function Hero({ t }) {
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => setMounted(true), []);

  // 3D tilt on the dashboard mockup following the mouse
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      el.style.transform = `perspective(1100px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg)`;
    }
    function reset() {
      el.style.transform = 'perspective(1100px) rotateY(0deg) rotateX(0deg)';
    }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', reset);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', reset);
    };
  }, []);

  const kpis = [
    { label: t.hero.kpi1Label, value: t.hero.kpi1Value, color: 'text-ai' },
    { label: t.hero.kpi2Label, value: t.hero.kpi2Value, color: 'text-ai' },
    { label: t.hero.kpi3Label, value: t.hero.kpi3Value, color: 'text-accent-soft' },
    { label: t.hero.kpi4Label, value: t.hero.kpi4Value, color: 'text-accent-soft' },
  ];

  const bars = [42, 58, 50, 72, 66, 85, 92];

  return (
    <section id="home" className="relative z-10 overflow-hidden pt-32 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 lg:grid-cols-2 lg:px-8 lg:pb-28">
        {/* Left: copy */}
        <div className={mounted ? 'animate-fade-up' : 'opacity-0'}>
          <span className="section-label">{t.hero.badge}</span>
          <h1 className="font-display text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.4rem]">
            {t.hero.title1}
            <span className="text-gradient">{t.hero.titleHighlight}</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{t.hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#diagnostico"
              className="btn-primary"
              onClick={() => trackEvent('click_cta_hero', { cta: 'primary' })}
            >
              {t.hero.ctaPrimary} <span aria-hidden>→</span>
            </a>
            <a
              href="#solucoes"
              className="btn-ghost"
              onClick={() => trackEvent('click_cta_hero', { cta: 'secondary' })}
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-14 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500 lg:flex">
            <span className="inline-block h-8 w-px animate-pulse-slow bg-gradient-to-b from-ai to-transparent" />
            {t.hero.scroll}
          </div>
        </div>

        {/* Right: dashboard mockup with tilt */}
        <div
          ref={cardRef}
          className="relative transition-transform duration-200 ease-out will-change-transform"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="glass rounded-2xl p-5 shadow-2xl shadow-accent/10">
            {/* window chrome */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-ai/70" />
              <span className="ml-3 text-xs font-medium text-slate-400">
                desenvolvendo.ia · CRM Inteligente
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold text-ai">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ai" /> LIVE
              </span>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-2 gap-3">
              {kpis.map((k, i) => (
                <div
                  key={k.label}
                  className="rounded-xl border border-white/5 bg-ink-900/80 p-4"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    {k.label}
                  </p>
                  <p className={`mt-1 font-display text-2xl font-bold ${k.color}`}>{k.value}</p>
                </div>
              ))}
            </div>

            {/* mini chart */}
            <div className="mt-3 rounded-xl border border-white/5 bg-ink-900/80 p-4">
              <div className="flex h-24 items-end gap-2">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="bar-grow flex-1 rounded-t-md bg-gradient-to-t from-accent/60 to-ai/80"
                    style={{ height: `${h}%`, animationDelay: `${0.3 + i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* floating chips */}
          <div className="glass absolute -left-6 -top-6 hidden animate-float rounded-xl px-4 py-3 text-xs font-semibold text-ai md:block">
            😊 Sentimento: positivo
          </div>
          <div
            className="glass absolute -bottom-6 -right-4 hidden animate-float rounded-xl px-4 py-3 text-xs font-semibold text-accent-soft md:block"
            style={{ animationDelay: '1.6s' }}
          >
            ⚡ Follow-up automático enviado
          </div>
        </div>
      </div>

      {/* gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </section>
  );
}
