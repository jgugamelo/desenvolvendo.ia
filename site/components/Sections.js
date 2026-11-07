'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import Icon from './Icon';
import ProductsDemo from './ProductsDemo';
import { trackEvent, whatsappLink } from '@/lib/i18n';

/* Centered heading used across sections (reference style) */
export function Heading({ label, title, subtitle, className = '' }) {
  return (
    <Reveal className={`mx-auto max-w-3xl text-center ${className}`}>
      <span className="section-label">{label}</span>
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">{subtitle}</p>}
    </Reveal>
  );
}

/* ----------------------------------------------------------------
   Problem: one glass panel split "today" vs "with us", glowing divider.
----------------------------------------------------------------- */
export function Problem({ t }) {
  const p = t.problem;
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="glow-blob left-[-10%] top-1/3 h-[420px] w-[420px] bg-red-500/10" />
      <div className="glow-blob right-[-10%] top-1/4 h-[480px] w-[480px] bg-accent/20" />
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Heading label={p.label} title={p.title} subtitle={p.intro} />

        <Reveal className="mt-14">
          <div className="surface relative grid overflow-hidden rounded-[32px] lg:grid-cols-2">
            {/* center divider */}
            <div className="pointer-events-none absolute inset-y-8 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />
            <div className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-950 font-display text-xs font-bold text-slate-300 lg:flex">
              VS
            </div>

            <div className="p-8 lg:p-12">
              <span className="pill border-red-400/20 bg-red-400/5 text-red-300">{p.todayTitle}</span>
              <ul className="mt-7 space-y-5">
                {p.today.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-400">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-400/10 text-red-300">
                      <Icon name="x" className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative bg-gradient-to-br from-accent/[0.12] via-transparent to-ai/[0.08] p-8 lg:p-12">
              <span className="pill border-ai/30 bg-ai/10 text-ai">{p.withTitle}</span>
              <ul className="mt-7 space-y-5">
                {p.with.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ai/15 text-ai">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Pillars: bento grid of glass cards with image + floating UI chip.
----------------------------------------------------------------- */
function PillarCard({ item, large }) {
  return (
    <div className={`surface surface-hover group flex h-full flex-col overflow-hidden rounded-[28px] ${large ? 'lg:flex-row' : ''}`}>
      <div className={`relative overflow-hidden ${large ? 'lg:w-[55%]' : ''}`}>
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          width="640"
          height="480"
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${large ? 'aspect-[4/3] lg:h-full' : 'aspect-[16/10]'}`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        <span className="float-chip bottom-4 left-4">
          <Icon name="check-circle" className="h-4 w-4 text-ai" /> {item.chip}
        </span>
      </div>
      <div className={`flex flex-1 flex-col p-7 ${large ? 'lg:justify-center lg:p-10' : ''}`}>
        <span className="font-display text-sm font-bold text-ai">{item.tag}</span>
        <h3 className={`mt-2 font-display font-bold text-white ${large ? 'text-3xl' : 'text-2xl'}`}>{item.name}</h3>
        <p className="mt-3 text-slate-400">{item.text}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.points.map((pt) => (
            <span key={pt} className="pill">
              <Icon name="check" className="h-3 w-3 text-ai" strokeWidth={3} /> {pt}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Pillars({ t }) {
  const p = t.pillars;
  const [a, b, c] = p.items;
  return (
    <section id="solucoes" className="relative z-10 py-24 lg:py-32">
      <div className="section-beam" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Heading label={p.label} title={p.title} subtitle={p.subtitle} />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="lg:col-span-2">
            <PillarCard item={b} large />
          </Reveal>
          <Reveal delay={1}>
            <PillarCard item={a} />
          </Reveal>
          <Reveal delay={2}>
            <PillarCard item={c} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   In action: chat demo inside a glowing glass device frame.
----------------------------------------------------------------- */
export function InAction({ t }) {
  const a = t.action;
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="glow-blob right-[5%] top-[15%] h-[460px] w-[460px] bg-ai/15" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="surface grid items-center gap-12 overflow-hidden rounded-[36px] p-8 lg:grid-cols-2 lg:p-14">
          <Reveal>
            <span className="section-label">{a.label}</span>
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">{a.title}</h2>
            <p className="mt-5 max-w-md text-lg text-slate-400">{a.text}</p>
            <a
              href="#diagnostico"
              className="btn-primary mt-9"
              onClick={() => trackEvent('click_cta_diagnostico', { placement: 'in_action' })}
            >
              {a.cta} <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal delay={2}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-accent/25 to-ai/20 blur-3xl" />
              <div className="relative rounded-[28px] border border-white/10 bg-ink-950/70 p-2 shadow-2xl">
                <ProductsDemo demo={a.demo} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Examples: centered segmented control + large glass panel.
----------------------------------------------------------------- */
export function Examples({ t }) {
  const e = t.examples;
  const [active, setActive] = useState(0);
  const tab = e.tabs[active];

  return (
    <section id="exemplos" className="relative z-10 py-24 lg:py-32">
      <div className="section-beam" />
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Heading label={e.label} title={e.title} subtitle={e.subtitle} />

        <Reveal className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl">
            {e.tabs.map((x, i) => (
              <button
                key={x.name}
                onClick={() => {
                  setActive(i);
                  trackEvent('select_example', { example: x.name });
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  i === active
                    ? 'bg-gradient-to-r from-accent to-accent-soft text-white shadow-lg shadow-accent/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {x.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={active} className="chat-bubble surface mt-10 grid overflow-hidden rounded-[32px] lg:grid-cols-2">
          <div className="relative">
            <img
              src={tab.img}
              alt={tab.name}
              loading="lazy"
              width="560"
              height="420"
              className="aspect-[4/3] h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-ink-950/40" />
            <span className="float-chip right-5 top-5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-ai" /> {tab.chip}
            </span>
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{e.taskTitle}</p>
            <p className="mt-2 text-lg text-slate-300">{tab.task}</p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-ai">{e.howTitle}</p>
            <p className="mt-2 text-lg text-white">{tab.how}</p>
            <div className="mt-9 inline-flex w-fit items-center gap-2 rounded-full border border-ai/30 bg-ai/10 px-5 py-2.5 font-display font-semibold text-ai">
              <Icon name="arrow-right" className="h-4 w-4" />
              {tab.result}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   How we work: glass step cards on a glowing rail + engine panel.
----------------------------------------------------------------- */
export function How({ t }) {
  const h = t.how;
  return (
    <section id="como-funciona" className="relative z-10 py-24 lg:py-32">
      <div className="glow-blob left-[-5%] top-1/2 h-[420px] w-[420px] bg-accent/15" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Heading label={h.label} title={h.title} subtitle={h.subtitle} />

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-[6%] right-[6%] top-[42px] hidden h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent lg:block" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {h.steps.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) + 1}>
                <div className="surface surface-hover h-full rounded-[24px] p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-ink-950 font-display text-lg font-bold text-white shadow-[0_0_30px_-5px_rgba(46,124,246,0.7)]">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10">
          <div className="surface grid gap-8 overflow-hidden rounded-[32px] p-8 lg:grid-cols-[1.3fr,1fr] lg:items-center lg:p-12">
            <div>
              <span className="pill border-ai/30 bg-ai/10 text-ai">
                <Icon name="puzzle" className="h-3.5 w-3.5" /> desenvolvendo.ia
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">{h.engineTitle}</h3>
              <p className="mt-3 text-slate-400">{h.engineText}</p>
            </div>
            <div className="grid gap-3">
              {h.engineCompare.map((c) => (
                <div key={c.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-950/60 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-ai text-white">
                    <Icon name="check" className="h-5 w-5" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-white">{c.label}</p>
                    <p className="text-sm text-slate-400">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Engagement: pricing-style glass cards, first one highlighted.
----------------------------------------------------------------- */
export function Engagement({ t }) {
  const g = t.engagement;
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="section-beam" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Heading label={g.label} title={g.title} subtitle={g.subtitle} />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {g.items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) + 1}>
              <div
                className={`surface surface-hover relative h-full rounded-[28px] p-7 ${
                  p.tag ? 'border-accent/40 bg-gradient-to-b from-accent/20 to-transparent shadow-[0_30px_80px_-30px_rgba(46,124,246,0.6)]' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-slate-500">0{i + 1}</span>
                  {p.tag && <span className="pill border-ai/30 bg-ai/15 text-ai">{p.tag}</span>}
                </div>
                <h3 className="mt-8 font-display text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-slate-400">{g.cta}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Final CTA: glass panel with its own light beam.
----------------------------------------------------------------- */
export function FinalCta({ t, lang }) {
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="surface relative overflow-hidden rounded-[40px] px-8 py-16 text-center lg:px-16 lg:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="hero-beam" style={{ left: '-20%', width: '90%' }} />
              <div className="absolute left-1/2 top-0 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />
            </div>
            <h2 className="relative mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
              {t.finalCta.title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-lg text-slate-300">{t.finalCta.text}</p>
            <div className="relative mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#diagnostico"
                className="btn-primary"
                onClick={() => trackEvent('click_cta_diagnostico', { placement: 'final' })}
              >
                {t.finalCta.primary} <Icon name="arrow-right" className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                onClick={() => trackEvent('click_whatsapp', { placement: 'final' })}
              >
                {t.finalCta.secondary}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
