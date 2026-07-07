'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import Icon from './Icon';
import Chapter from './Chapter';
import { trackEvent } from '@/lib/i18n';

const WEEK_BARS = [38, 52, 47, 64, 58, 78, 92];
const AGENTS = [
  { name: 'Ana', score: 92 },
  { name: 'Bruno', score: 78 },
  { name: 'Carla', score: 85 },
  { name: 'Diego', score: 64 },
];

export default function DashboardsSection({ t }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !active) {
          setActive(true);
          trackEvent('view_dashboards_section');
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="dashboards" ref={ref} className="relative z-10 py-20 lg:py-28">
      <Chapter n="05" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Dashboard mockup */}
          <Reveal className="order-2 lg:order-1">
            <div className="glass rounded-2xl p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-white">{t.dashboards.panelTitle}</p>
                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-ai">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ai" /> LIVE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {t.dashboards.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/5 bg-ink-900/80 p-3.5">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
                      {m.label}
                    </p>
                    <div className="mt-1 flex items-end justify-between">
                      <p className="font-display text-xl font-bold text-white">{m.value}</p>
                      <span
                        className={`text-xs font-semibold ${
                          m.trend.startsWith('-') ? 'text-ai' : 'text-ai'
                        }`}
                      >
                        {m.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* weekly bars */}
              <div className="mt-3 rounded-xl border border-white/5 bg-ink-900/80 p-4">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-wide text-slate-500">
                  {t.dashboards.chartLabel}
                </p>
                <div className="flex h-20 items-end gap-2">
                  {WEEK_BARS.map((h, i) =>
                    active ? (
                      <div
                        key={i}
                        className="bar-grow flex-1 rounded-t bg-gradient-to-t from-accent/50 to-ai/70"
                        style={{ height: `${h}%`, animationDelay: `${i * 0.09}s` }}
                      />
                    ) : (
                      <div key={i} className="flex-1" />
                    )
                  )}
                </div>
              </div>

              {/* sentiment per agent */}
              <div className="mt-3 rounded-xl border border-white/5 bg-ink-900/80 p-4">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-wide text-slate-500">
                  {t.dashboards.sentimentByAgent}
                </p>
                <div className="space-y-2.5">
                  {AGENTS.map((a, i) => (
                    <div key={a.name} className="flex items-center gap-3">
                      <span className="w-12 text-xs text-slate-400">{a.name}</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink-700">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-ai transition-all duration-1000 ease-out"
                          style={{
                            width: active ? `${a.score}%` : '0%',
                            transitionDelay: `${0.4 + i * 0.15}s`,
                          }}
                        />
                      </div>
                      <span className="w-9 text-right text-xs font-semibold text-ai">
                        {a.score}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={1} className="order-1 lg:order-2">
            <span className="section-label">{t.dashboards.label}</span>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {t.dashboards.title}
            </h2>
            <p className="mt-4 text-lg text-slate-400">{t.dashboards.text}</p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {t.dashboards.types.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-soft transition-colors hover:border-ai/40 hover:text-ai"
                >
                  {type}
                </span>
              ))}
            </div>
            <a
              href="#diagnostico"
              className="btn-primary mt-9"
              onClick={() => trackEvent('click_cta_diagnostico', { placement: 'dashboards' })}
            >
              {t.dashboards.cta} <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
