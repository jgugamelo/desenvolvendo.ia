'use client';

import Reveal from './Reveal';
import Icon from './Icon';
import SpotlightCard from './SpotlightCard';
import ProductsDemo from './ProductsDemo';
import { trackEvent, whatsappLink } from '@/lib/i18n';

/* ----------------------------------------------------------------
   Problem — editorial layout: sticky intro on the left, numbered
   "diagnostic rows" with warning accent on the right.
----------------------------------------------------------------- */
export function Problem({ t }) {
  return (
    <section className="relative z-10 py-20 lg:py-28">
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
                <div className="diag-row">
                  <span className="diag-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/5 text-red-300">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.text}</p>
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
   Solution — connected pipeline of circular nodes with pulsing
   rings and a data pulse traveling along the line, followed by
   an infinite marquee of integrations.
----------------------------------------------------------------- */
export function Solution({ t }) {
  return (
    <section className="relative z-10 overflow-hidden section-contrast border-y border-white/5 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-label">{t.solution.label}</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {t.solution.title}
          </h2>
          <p className="mt-4 text-lg text-slate-400">{t.solution.text}</p>
        </Reveal>

        {/* pipeline */}
        <Reveal className="relative mt-16">
          <div className="flow-line hidden lg:block" />
          <div className="flow-dot hidden lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {t.solution.blocks.map((b, i) => (
              <div key={b.title} className="relative flex flex-col items-center text-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-ai/30 bg-ink-900 text-ai shadow-lg shadow-ai/10">
                  <span className="node-pulse" style={{ animationDelay: `${i * 0.55}s` }} />
                  <Icon name={b.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">{b.title}</h3>
                <p className="mt-1.5 max-w-[220px] text-xs leading-relaxed text-slate-400">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* integrations marquee */}
        <Reveal className="mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.solution.integrationsLabel}
          </p>
          <div
            className="mt-6 overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
              WebkitMaskImage:
                'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
            }}
          >
            <div className="flex w-max animate-marquee gap-3">
              {[...t.solution.integrations, ...t.solution.integrations].map((name, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap rounded-full border border-white/10 bg-ink-900/70 px-5 py-2 text-sm font-medium text-slate-300"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-9 text-center">
            <a
              href="#diagnostico"
              className="btn-ghost"
              onClick={() => trackEvent('click_cta_diagnostico', { placement: 'automations' })}
            >
              {t.solution.cta} <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Products — spotlight cards (mouse-follow glow), gradient accent
   bar that expands on hover, plus the custom-projects banner.
----------------------------------------------------------------- */
export function Products({ t }) {
  return (
    <section id="solucoes" className="relative z-10 py-20 lg:py-28">
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
                  {/* accent bar */}
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

        {/* custom projects banner */}
        <Reveal className="mt-10">
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
   Who — editorial list with accent left borders (no cards) and a
   gradient-bordered "fit" panel.
----------------------------------------------------------------- */
export function Who({ t }) {
  return (
    <section id="para-quem" className="relative z-10 section-contrast border-y border-white/5 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="section-label">{t.who.label}</span>
          <h2 className="max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            {t.who.title}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-2">
            {t.who.segments.map((s, i) => (
              <Reveal key={s.name} delay={(i % 2) + 1}>
                <div className="group border-l-2 border-ai/25 pl-5 transition-colors duration-300 hover:border-ai">
                  <div className="flex items-center gap-3">
                    <Icon
                      name={s.icon}
                      className="h-5 w-5 text-ai transition-transform duration-300 group-hover:scale-110"
                    />
                    <h3 className="font-display text-lg font-semibold text-white">{s.name}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={2}>
            <div className="gborder h-full">
              <div className="h-full bg-ink-950/95 p-7">
                <h3 className="font-display text-lg font-semibold text-ai">{t.who.fitTitle}</h3>
                <ul className="mt-4 space-y-3">
                  {t.who.fitItems.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-ai" strokeWidth={2.5} />
                      {f}
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
   How it works — alternating timeline (unchanged pattern, already
   visually distinct).
----------------------------------------------------------------- */
export function How({ t }) {
  return (
    <section id="como-funciona" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="section-label">{t.how.label}</span>
          <h2 className="max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            {t.how.title}
          </h2>
        </Reveal>
        <div className="relative mt-14">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-accent via-ai to-transparent lg:left-1/2" />
          <div className="space-y-8">
            {t.how.steps.map((s, i) => (
              <Reveal key={s.title} delay={1}>
                <div
                  className={`relative flex gap-6 lg:w-1/2 ${
                    i % 2 === 0 ? 'lg:pr-12' : 'lg:ml-auto lg:pl-12'
                  }`}
                >
                  <div className="glass z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-ai">
                    {i + 1}
                  </div>
                  <div className="glass card-hover flex-1 rounded-2xl p-5">
                    <h3 className="font-display font-semibold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{s.text}</p>
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
   Plans — journey with step numbers; highlighted plans wrapped in
   an animated gradient border.
----------------------------------------------------------------- */
export function Plans({ t }) {
  return (
    <section className="relative z-10 section-contrast border-y border-white/5 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <span className="section-label">{t.plans.label}</span>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            {t.plans.title}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
   Cases — outcome-oriented cards: description plus a highlighted
   "result" footer with arrow, reinforcing perceived value.
----------------------------------------------------------------- */
export function Cases({ t }) {
  return (
    <section className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="section-label">{t.cases.label}</span>
          <h2 className="max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            {t.cases.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {t.cases.items.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) + 1}>
              <SpotlightCard className="glass group flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-ai/30">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-ai/20 text-ai">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{c.title}</h3>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">{c.text}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4 text-sm font-semibold text-ai">
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                  {c.tag}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
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
