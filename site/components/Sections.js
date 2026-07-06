'use client';

import Reveal from './Reveal';
import Icon from './Icon';
import { trackEvent, whatsappLink } from '@/lib/i18n';

/* ---------------- Problem ---------------- */
export function Problem({ t }) {
  return (
    <section className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="section-label">{t.problem.label}</span>
          <h2 className="max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            {t.problem.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.problem.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) + 1}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-900/80 text-ai">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Solution ---------------- */
export function Solution({ t }) {
  return (
    <section className="relative z-10 border-y border-white/5 bg-ink-900/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-label">{t.solution.label}</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {t.solution.title}
          </h2>
          <p className="mt-4 text-lg text-slate-400">{t.solution.text}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.solution.blocks.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) + 1}>
              <div className="glass card-hover h-full rounded-2xl p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-ai/20 text-ai">
                  <Icon name={b.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-white">{b.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Products ---------------- */
export function Products({ t }) {
  return (
    <section id="solucoes" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="section-label">{t.products.label}</span>
          <h2 className="max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            {t.products.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.products.items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) + 1}>
              <div className="glass card-hover group h-full rounded-2xl p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-ai/20 text-ai transition-transform duration-300 group-hover:scale-110">
                  <Icon name={p.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Who ---------------- */
export function Who({ t }) {
  return (
    <section id="para-quem" className="relative z-10 border-y border-white/5 bg-ink-900/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="section-label">{t.who.label}</span>
          <h2 className="max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            {t.who.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {t.who.segments.map((s, i) => (
              <Reveal key={s.name} delay={(i % 2) + 1}>
                <div className="glass card-hover flex h-full items-start gap-4 rounded-2xl p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-ink-900/80 text-ai">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white">{s.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={2}>
            <div className="glass h-full rounded-2xl border-ai/20 p-7">
              <h3 className="font-display text-lg font-semibold text-ai">{t.who.fitTitle}</h3>
              <ul className="mt-4 space-y-3">
                {t.who.fitItems.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-ai" strokeWidth={2.5} /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
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

/* ---------------- Plans ---------------- */
export function Plans({ t }) {
  return (
    <section className="relative z-10 border-y border-white/5 bg-ink-900/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <span className="section-label">{t.plans.label}</span>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
            {t.plans.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.plans.items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) + 1}>
              <div
                className={`glass card-hover relative h-full rounded-2xl p-6 ${
                  p.tag ? 'border-ai/30' : ''
                }`}
              >
                {p.tag && (
                  <span className="absolute -top-3 left-5 rounded-full bg-gradient-to-r from-accent to-ai px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {p.tag}
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-slate-400">{t.plans.cta}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Cases ---------------- */
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
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.cases.items.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) + 1}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-ai/20 text-ai">
                  <Icon name={c.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
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
