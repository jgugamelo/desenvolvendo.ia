'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import Icon from './Icon';
import SpotlightCard from './SpotlightCard';
import ProductsDemo from './ProductsDemo';
import Chapter from './Chapter';
import { trackEvent, whatsappLink } from '@/lib/i18n';

/* ----------------------------------------------------------------
   01 · Problem — sticky intro + numbered diagnostic rows.
----------------------------------------------------------------- */
export function Problem({ t }) {
  return (
    <section className="relative z-10 py-20 lg:py-28">
      <Chapter n="01" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.35fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="section-label">{t.problem.label}</span>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                {t.problem.title}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-400">
                {t.problem.intro}
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {t.problem.items.map((item, i) => (
              <Reveal key={item.title} delay={1}>
                <div className="diag-row items-center">
                  <span className="diag-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/5 text-red-300">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-slate-400">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   02 · Products — spotlight cards + live demo + integrations
   marquee + custom projects banner.
----------------------------------------------------------------- */
export function Products({ t }) {
  return (
    <section id="solucoes" className="section-contrast relative z-10 overflow-hidden border-y border-white/5 py-20 lg:py-28">
      <Chapter n="02" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="section-label">{t.products.label}</span>
          <h2 className="max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            {t.products.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">{t.products.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.55fr,1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {t.products.items.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) + 1}>
                <SpotlightCard className="glass group h-full rounded-2xl p-6 transition-colors duration-300 hover:border-ai/30">
                  <div className="h-1 w-10 rounded-full bg-gradient-to-r from-accent to-ai transition-all duration-500 group-hover:w-full" />
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-ai/20 text-ai transition-transform duration-300 group-hover:scale-110">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </div>
                    <Icon
                      name="arrow-right"
                      className="h-5 w-5 -translate-x-2 text-ai opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mt-3.5 font-display text-lg font-semibold text-white">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          {/* live demo: AI qualifying a lead */}
          <Reveal delay={2}>
            <div className="lg:sticky lg:top-28">
              <ProductsDemo t={t} />
            </div>
          </Reveal>
        </div>

        {/* integrations marquee */}
        <Reveal className="mt-14">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.products.integrationsLabel}
          </p>
          <div
            className="mt-5 overflow-hidden"
            style={{
              maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
              WebkitMaskImage:
                'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
            }}
          >
            <div className="flex w-max animate-marquee gap-3">
              {[...t.products.integrations, ...t.products.integrations].map((name, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap rounded-full border border-white/10 bg-ink-900/70 px-5 py-2 text-sm font-medium text-slate-300"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* custom projects banner */}
        <Reveal className="mt-12">
          <div className="gborder">
            <div className="flex flex-col items-start gap-6 bg-ink-950/95 p-8 md:flex-row md:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-ai/25 text-ai">
                <Icon name="sparkles" className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-white">
                  {t.products.custom.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
                  {t.products.custom.text}
                </p>
              </div>
              <a
                href="#diagnostico"
                className="btn-ghost shrink-0"
                onClick={() => trackEvent('click_cta_diagnostico', { placement: 'custom_project' })}
              >
                {t.products.custom.cta}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   06 · Niches — tabbed: pick your industry, see pains, the AI
   application and the outcome. Merges "who it's for" + examples.
----------------------------------------------------------------- */
export function Niches({ t }) {
  const [active, setActive] = useState(0);
  const tab = t.niches.tabs[active];

  return (
    <section id="para-quem" className="section-contrast relative z-10 border-y border-white/5 py-20 lg:py-28">
      <Chapter n="06" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="section-label">{t.niches.label}</span>
          <h2 className="max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            {t.niches.title}
          </h2>
        </Reveal>

        {/* tabs */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap gap-2.5">
            {t.niches.tabs.map((n, i) => (
              <button
                key={n.name}
                onClick={() => {
                  setActive(i);
                  trackEvent('select_niche', { niche: n.name });
                }}
                className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  i === active
                    ? 'border-ai/50 bg-gradient-to-r from-accent/20 to-ai/20 text-white shadow-lg shadow-accent/10'
                    : 'border-white/10 bg-ink-900/50 text-slate-400 hover:border-white/25 hover:text-slate-200'
                }`}
              >
                <Icon name={n.icon} className="h-4 w-4" />
                {n.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* active tab content */}
        <Reveal className="mt-8">
          <div key={active} className="chat-bubble grid gap-5 lg:grid-cols-2">
            {/* pains */}
            <div className="glass rounded-2xl p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300/80">
                {t.niches.painsTitle}
              </p>
              <ul className="mt-4 space-y-3.5">
                {tab.pains.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI application + result */}
            <div className="gborder">
              <div className="flex h-full flex-col bg-ink-950/95 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ai">
                  {t.niches.exampleTitle}
                </p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-slate-200">{tab.example}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4 text-sm font-semibold text-ai">
                  <Icon name="arrow-right" className="h-4 w-4" />
                  {tab.result}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* fit chips */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-slate-400">{t.niches.fitTitle}</span>
            {t.niches.fitItems.map((f) => (
              <span
                key={f}
                className="flex items-center gap-1.5 rounded-full border border-ai/20 bg-ai/5 px-3.5 py-1.5 text-xs text-slate-300"
              >
                <Icon name="check" className="h-3 w-3 text-ai" strokeWidth={3} /> {f}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   07 · How it works — 4 steps, single horizontal strip.
----------------------------------------------------------------- */
export function How({ t }) {
  return (
    <section id="como-funciona" className="relative z-10 py-20 lg:py-28">
      <Chapter n="07" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="section-label">{t.how.label}</span>
          <h2 className="max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            {t.how.title}
          </h2>
        </Reveal>
        <div className="relative mt-14">
          <div className="flow-line hidden lg:block" style={{ top: '1.4rem' }} />
          <div className="flow-dot hidden lg:block" style={{ top: 'calc(1.4rem - 3px)' }} />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.how.steps.map((s, i) => (
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
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   08 · Plans — compact 4-item ruler, highlighted plans framed.
----------------------------------------------------------------- */
export function Plans({ t }) {
  return (
    <section className="section-contrast relative z-10 border-y border-white/5 py-20 lg:py-28">
      <Chapter n="08" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <span className="section-label">{t.plans.label}</span>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            {t.plans.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.plans.items.map((p, i) => {
            const inner = (
              <div className={`relative h-full p-6 ${p.tag ? 'bg-ink-950/95' : ''}`}>
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-2 font-display text-6xl font-bold text-white/5"
                >
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
          <p className="text-slate-400">{t.plans.cta}</p>
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
              style={{
                background:
                  'radial-gradient(ellipse at 50% 0%, rgba(46,124,246,0.18) 0%, transparent 60%)',
              }}
            />
            <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
              {t.finalCta.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              {t.finalCta.text}
            </p>
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
