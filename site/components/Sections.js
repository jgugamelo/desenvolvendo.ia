'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import Icon from './Icon';
import ProductsDemo from './ProductsDemo';
import Chapter from './Chapter';
import { trackEvent, whatsappLink } from '@/lib/i18n';

/* ----------------------------------------------------------------
   01 · Problem: side-by-side comparison "today" vs "with us".
----------------------------------------------------------------- */
export function Problem({ t }) {
  const p = t.problem;
  return (
    <section className="section-contrast relative z-10 border-y border-white/5 py-20 lg:py-28">
      <Chapter n="01" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="section-label">{p.label}</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{p.title}</h2>
          <p className="mt-4 text-lg text-slate-400">{p.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal delay={1}>
            <div className="h-full rounded-2xl border border-red-400/15 bg-red-400/[0.03] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300/80">
                {p.todayTitle}
              </p>
              <ul className="mt-5 space-y-4">
                {p.today.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <Icon name="x" className="mt-0.5 h-4 w-4 shrink-0 text-red-300/70" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="gborder h-full">
              <div className="h-full bg-ink-950/95 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ai">{p.withTitle}</p>
                <ul className="mt-5 space-y-4">
                  {p.with.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-200">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-ai" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   02 · Pillars: three alternating image + text rows.
----------------------------------------------------------------- */
export function Pillars({ t }) {
  const p = t.pillars;
  return (
    <section id="solucoes" className="relative z-10 py-20 lg:py-28">
      <Chapter n="02" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="section-label">{p.label}</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{p.title}</h2>
        </Reveal>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {p.items.map((item, i) => (
            <div key={item.name} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width="640"
                    height="480"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                </div>
              </Reveal>
              <Reveal delay={1} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="font-display text-6xl font-bold text-white/10">{item.tag}</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{item.name}</h3>
                <p className="mt-3 text-lg text-slate-400">{item.text}</p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-slate-200">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ai/15 text-ai">
                        <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   03 · In action: animated digital worker demo.
----------------------------------------------------------------- */
export function InAction({ t }) {
  const a = t.action;
  return (
    <section className="section-contrast relative z-10 border-y border-white/5 py-20 lg:py-28">
      <Chapter n="03" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="section-label">{a.label}</span>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{a.title}</h2>
            <p className="mt-4 max-w-md text-lg text-slate-400">{a.text}</p>
            <a
              href="#diagnostico"
              className="btn-primary mt-8"
              onClick={() => trackEvent('click_cta_diagnostico', { placement: 'in_action' })}
            >
              {a.cta} <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal delay={2}>
            <ProductsDemo demo={a.demo} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   04 · Examples: tabs with image, task, approach and result.
----------------------------------------------------------------- */
export function Examples({ t }) {
  const e = t.examples;
  const [active, setActive] = useState(0);
  const tab = e.tabs[active];

  return (
    <section id="exemplos" className="relative z-10 py-20 lg:py-28">
      <Chapter n="04" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="section-label">{e.label}</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{e.title}</h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-wrap gap-2.5">
            {e.tabs.map((x, i) => (
              <button
                key={x.name}
                onClick={() => {
                  setActive(i);
                  trackEvent('select_example', { example: x.name });
                }}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  i === active
                    ? 'border-ai/50 bg-gradient-to-r from-accent/20 to-ai/20 text-white shadow-lg shadow-accent/10'
                    : 'border-white/10 bg-ink-900/50 text-slate-400 hover:border-white/25 hover:text-slate-200'
                }`}
              >
                {x.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={active} className="chat-bubble mt-8 grid items-stretch gap-6 lg:grid-cols-[1fr,1.2fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src={tab.img}
              alt={tab.name}
              loading="lazy"
              width="560"
              height="420"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
          <div className="glass flex flex-col rounded-3xl p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{e.taskTitle}</p>
            <p className="mt-2 text-lg text-slate-200">{tab.task}</p>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-ai">{e.howTitle}</p>
            <p className="mt-2 flex-1 text-lg text-slate-200">{tab.how}</p>
            <div className="mt-7 flex items-center gap-2 border-t border-white/5 pt-5 font-display text-lg font-semibold text-ai">
              <Icon name="arrow-right" className="h-5 w-5" />
              {tab.result}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   05 · How we work: 4 steps + proven modules argument.
----------------------------------------------------------------- */
export function How({ t }) {
  const h = t.how;
  return (
    <section id="como-funciona" className="section-contrast relative z-10 border-y border-white/5 py-20 lg:py-28">
      <Chapter n="05" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="section-label">{h.label}</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{h.title}</h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="flow-line hidden lg:block" style={{ top: '1.4rem' }} />
          <div className="flow-dot hidden lg:block" style={{ top: 'calc(1.4rem - 3px)' }} />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {h.steps.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) + 1}>
                <div className="relative flex flex-col items-start">
                  <div className="glass z-10 flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold text-ai">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16">
          <div className="gborder">
            <div className="grid gap-8 bg-ink-950/95 p-8 lg:grid-cols-[1.3fr,1fr] lg:items-center lg:p-10">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-ai/25 text-ai">
                  <Icon name="puzzle" className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">{h.engineTitle}</h3>
                <p className="mt-3 text-slate-400">{h.engineText}</p>
              </div>
              <div className="space-y-3">
                {h.engineCompare.map((c) => (
                  <div key={c.label} className="rounded-2xl border border-white/10 bg-ink-900/70 p-5">
                    <p className="font-display text-lg font-semibold text-ai">{c.label}</p>
                    <p className="text-sm text-slate-400">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   06 · Engagement models.
----------------------------------------------------------------- */
export function Engagement({ t }) {
  const g = t.engagement;
  return (
    <section className="relative z-10 py-20 lg:py-28">
      <Chapter n="06" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <span className="section-label">{g.label}</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{g.title}</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {g.items.map((p, i) => {
            const inner = (
              <div className={`relative h-full p-6 ${p.tag ? 'bg-ink-950/95' : ''}`}>
                <span aria-hidden className="pointer-events-none absolute right-4 top-2 font-display text-6xl font-bold text-white/5">
                  {i + 1}
                </span>
                {p.tag && (
                  <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-accent to-ai px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {p.tag}
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            );
            return (
              <Reveal key={p.name} delay={(i % 4) + 1}>
                {p.tag ? (
                  <div className="gborder h-full">{inner}</div>
                ) : (
                  <div className="glass card-hover h-full rounded-2xl">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-slate-400">{g.cta}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Final CTA
----------------------------------------------------------------- */
export function FinalCta({ t, lang }) {
  return (
    <section className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl border-accent/20 p-10 text-center lg:p-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(46,124,246,0.18) 0%, transparent 60%)' }}
            />
            <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">{t.finalCta.title}</h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-lg text-slate-400">{t.finalCta.text}</p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="#diagnostico"
                className="btn-primary"
                onClick={() => trackEvent('click_cta_diagnostico', { placement: 'final' })}
              >
                {t.finalCta.primary}
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
