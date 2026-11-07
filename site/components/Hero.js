'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { trackEvent } from '@/lib/i18n';

/* Smooth line chart path for the mockup */
const CHART = [22, 30, 26, 41, 38, 52, 47, 63, 58, 71, 69, 84];
function chartPath(w, h) {
  const step = w / (CHART.length - 1);
  const pts = CHART.map((v, i) => [i * step, h - (v / 100) * h]);
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const cx = (x0 + x1) / 2;
    d += ` C${cx},${y0} ${cx},${y1} ${x1},${y1}`;
  }
  return d;
}

/* Product-style mockup: operations center with live activity feed */
function OpsMockup({ m }) {
  const [feedStart, setFeedStart] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setFeedStart((s) => (s + 1) % m.feed.length), 2200);
    return () => clearInterval(id);
  }, [m.feed.length]);

  // subtle 3D tilt following the mouse
  useEffect(() => {
    const el = ref.current;
    function onMove(e) {
      const dx = (e.clientX / window.innerWidth - 0.5) * 2;
      const dy = (e.clientY / window.innerHeight - 0.5) * 2;
      el.style.transform = `perspective(1400px) rotateX(${8 - dy * 3}deg) rotateY(${dx * 3}deg)`;
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const visibleFeed = [0, 1, 2, 3].map((i) => m.feed[(feedStart + i) % m.feed.length]);
  const path = chartPath(600, 140);

  return (
    <div
      ref={ref}
      className="mockup-frame mx-auto w-full max-w-5xl transition-transform duration-300 ease-out"
      style={{ transform: 'perspective(1400px) rotateX(8deg)' }}
    >
      <div className="rounded-[28px] border border-white/10 bg-ink-900/70 p-3 shadow-2xl shadow-accent/20 sm:p-4">
        <div className="rounded-[20px] border border-white/5 bg-ink-950/80 p-4 sm:p-6">
          {/* top bar */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-sm font-bold text-white">
              desenvolvendo<span className="text-gradient">.ia</span>
            </span>
            <span className="hidden text-xs text-slate-500 sm:inline">· {m.brand}</span>
            <div className="ml-auto hidden gap-1 rounded-full border border-white/10 bg-ink-900/80 p-1 md:flex">
              {m.tabs.map((tab, i) => (
                <span
                  key={tab}
                  className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                    i === 0 ? 'bg-white/10 text-white' : 'text-slate-500'
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
            <span className="flex items-center gap-1.5 rounded-full border border-ai/30 bg-ai/10 px-3 py-1 text-[11px] font-semibold text-ai">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ai" /> 12 {m.agents}
            </span>
          </div>

          {/* welcome + KPIs */}
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <p className="font-display text-xl text-white sm:text-2xl">{m.welcome}</p>
            <div className="flex gap-6">
              {m.kpis.map((k) => (
                <div key={k.label} className="text-right">
                  <p className="font-display text-xl font-bold text-white sm:text-3xl">{k.value}</p>
                  <p className="max-w-[110px] text-[10px] leading-tight text-slate-500 sm:text-xs">{k.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* chart + feed */}
          <div className="mt-5 grid gap-4 md:grid-cols-[1.6fr,1fr]">
            <div className="rounded-2xl border border-white/5 bg-ink-900/60 p-4">
              <p className="text-xs font-medium text-slate-400">{m.chartTitle}</p>
              <svg viewBox="0 0 600 150" className="mt-3 h-32 w-full" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="mkLine" x1="0" x2="1">
                    <stop offset="0%" stopColor="#5B9BFF" />
                    <stop offset="100%" stopColor="#22D3AA" />
                  </linearGradient>
                  <linearGradient id="mkFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#22D3AA" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#22D3AA" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[35, 70, 105].map((y) => (
                  <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" />
                ))}
                <path d={`${path} L600,150 L0,150 Z`} fill="url(#mkFill)" />
                <path d={path} fill="none" stroke="url(#mkLine)" strokeWidth="3" className="draw-line" />
              </svg>
            </div>
            <div className="rounded-2xl border border-accent/20 bg-gradient-to-b from-accent/15 to-ink-900/60 p-4">
              <p className="flex items-center gap-2 text-xs font-semibold text-white">
                <Icon name="sparkles" className="h-3.5 w-3.5 text-ai" /> {m.feedTitle}
              </p>
              <ul className="mt-3 space-y-2">
                {visibleFeed.map((item, i) => (
                  <li
                    key={item + feedStart}
                    className={`chat-bubble flex items-center gap-2 rounded-xl border border-white/5 bg-ink-950/70 px-3 py-2 text-[11px] text-slate-300 ${
                      i === 0 ? 'border-ai/30 text-white' : ''
                    }`}
                  >
                    <Icon name="check-circle" className="h-3.5 w-3.5 shrink-0 text-ai" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ t }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="home" className="relative z-10 overflow-hidden pt-36 lg:pt-44">
      {/* light beam + glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-beam" />
        <div className="hero-beam hero-beam-2" />
        <div className="absolute left-1/2 top-[38%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className={`mx-auto max-w-3xl text-center ${mounted ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="section-label">{t.hero.badge}</span>
          <h1 className="font-display text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            {t.hero.title1}
            <span className="text-gradient">{t.hero.titleHighlight}</span>
            {t.hero.title2}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{t.hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
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
        </div>

        <div className={`mt-16 lg:mt-20 ${mounted ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.25s' }}>
          <OpsMockup m={t.hero.mockup} />
        </div>
      </div>

      {/* fade the mockup into the next section */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </section>
  );
}
