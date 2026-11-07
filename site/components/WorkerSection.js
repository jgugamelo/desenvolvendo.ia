'use client';

import { useMemo, useState } from 'react';
import Reveal from './Reveal';
import Icon from './Icon';
import { trackEvent } from '@/lib/i18n';

function Field({ label, display, children }) {
  return (
    <label className="block">
      <span className="flex items-center justify-between gap-4 text-sm text-slate-600">
        {label}
        <strong className="shrink-0 font-display text-base text-slate-900">{display}</strong>
      </span>
      <div className="mt-3">{children}</div>
    </label>
  );
}

/* Interactive estimate: the visitor enters their own numbers. */
function Simulator({ s }) {
  const [people, setPeople] = useState(s.defaults.people);
  const [cost, setCost] = useState(s.defaults.cost);
  const [share, setShare] = useState(s.defaults.share);

  const currency = s.locale === 'pt-BR' ? 'BRL' : 'USD';
  const fmt = useMemo(
    () => new Intl.NumberFormat(s.locale, { style: 'currency', currency, maximumFractionDigits: 0 }),
    [s.locale, currency]
  );
  const num = useMemo(() => new Intl.NumberFormat(s.locale), [s.locale]);

  const hours = Math.round(people * 160 * (share / 100));
  const value = Math.round(people * cost * (share / 100));

  return (
    <div className="card-light grid overflow-hidden rounded-[32px] lg:grid-cols-[1.2fr,1fr]">
      <div className="space-y-7 p-8 lg:p-10">
        <h3 className="font-display text-2xl font-bold text-slate-900">{s.title}</h3>
        <Field label={s.people} display={num.format(people)}>
          <input type="range" min="1" max="50" value={people} onChange={(e) => setPeople(+e.target.value)} className="sim-range" aria-label={s.people} />
        </Field>
        <Field label={s.cost} display={fmt.format(cost)}>
          <input type="range" min="1000" max={s.costMax} step={s.costStep} value={cost} onChange={(e) => setCost(+e.target.value)} className="sim-range" aria-label={s.cost} />
        </Field>
        <Field label={s.share} display={`${share}%`}>
          <input type="range" min="10" max="90" step="5" value={share} onChange={(e) => setShare(+e.target.value)} className="sim-range" aria-label={s.share} />
        </Field>
      </div>
      <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-ink-900 to-ink-800 p-8 text-white lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-ai/20 blur-3xl" />
        <p className="font-display text-5xl font-bold">{num.format(hours)}</p>
        <p className="mt-1 text-sm text-slate-300">{s.hours}</p>
        <div className="my-6 h-px bg-white/10" />
        <p className="text-gradient font-display text-4xl font-bold sm:text-5xl">{fmt.format(value)}</p>
        <p className="mt-1 text-sm text-slate-300">{s.value}</p>
        <p className="mt-6 text-xs leading-relaxed text-slate-400">{s.note}</p>
        <a
          href="#diagnostico"
          className="btn-primary mt-6 w-full"
          onClick={() => trackEvent('click_cta_diagnostico', { placement: 'simulator', people, share })}
        >
          {s.cta} <Icon name="arrow-right" className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function WorkerSection({ t }) {
  const w = t.worker;
  return (
    <section id="funcionario-digital" className="section-white relative z-10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* intro: text + office photo */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="label-light">{w.label}</span>
            <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">{w.title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{w.subtitle}</p>
          </Reveal>
          <Reveal delay={2}>
            <div className="relative">
              <img
                src={w.img}
                alt=""
                loading="lazy"
                width="520"
                height="392"
                className="aspect-[4/3] w-full rounded-[32px] object-cover shadow-2xl shadow-slate-900/20"
              />
              <span className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-ai" /> {w.chip}
              </span>
            </div>
          </Reveal>
        </div>

        {/* not a chatbot: comparison */}
        <Reveal className="mt-24">
          <h3 className="text-center font-display text-2xl font-bold text-slate-900 sm:text-3xl">{w.vsTitle}</h3>
          <div className="card-light mx-auto mt-8 max-w-4xl overflow-hidden rounded-[28px]">
            {w.vs.map((row, i) => (
              <div key={row.a} className={`grid grid-cols-2 ${i > 0 ? 'border-t border-slate-100' : ''}`}>
                <div className="flex items-center gap-3 p-5 text-slate-500">
                  <Icon name="x" className="h-4 w-4 shrink-0 text-slate-400" strokeWidth={2.5} />
                  {row.a}
                </div>
                <div className="flex items-center gap-3 bg-accent/[0.04] p-5 font-medium text-slate-900">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                  {row.b}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* how it works: 4 steps */}
        <Reveal className="mt-24">
          <h3 className="text-center font-display text-2xl font-bold text-slate-900 sm:text-3xl">{w.howTitle}</h3>
        </Reveal>
        <div className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-10 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block" />
          {w.how.map((step, i) => (
            <Reveal key={step.title} delay={(i % 4) + 1}>
              <div className="card-light card-light-hover relative h-full rounded-[24px] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-ai text-white shadow-lg shadow-accent/30">
                  <Icon name={step.icon} className="h-5 w-5" />
                </div>
                <span className="absolute right-5 top-5 font-display text-sm font-bold text-slate-300">0{i + 1}</span>
                <h4 className="mt-5 font-display text-lg font-semibold text-slate-900">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* gains + control */}
        <div className="mt-24 grid gap-6 lg:grid-cols-[1.4fr,1fr]">
          <Reveal>
            <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">{w.gainsTitle}</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {w.gains.map((g) => (
                <div key={g.value} className="card-light card-light-hover rounded-[24px] p-6">
                  <p className="text-gradient font-display text-3xl font-bold">{g.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{g.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="h-full rounded-[28px] bg-gradient-to-br from-ink-900 to-ink-800 p-8 text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-ai">
                <Icon name="eye" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold">{w.controlTitle}</h3>
              <ul className="mt-6 space-y-4">
                {w.control.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-slate-200">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-ai" strokeWidth={3} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* simulator */}
        <Reveal className="mt-24">
          <Simulator s={w.sim} />
        </Reveal>
      </div>
    </section>
  );
}
