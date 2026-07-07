'use client';

import Reveal from './Reveal';
import Icon from './Icon';
import SpotlightCard from './SpotlightCard';
import Chapter from './Chapter';
import { WHATSAPP_NUMBER, trackEvent } from '@/lib/i18n';

/**
 * Kit Super Ferramentas de IA — hero-level highlighted subscription
 * section: gradient frame, feature grid and a pricing panel with
 * monthly vs annual options.
 */
export default function Toolkit({ t }) {
  const k = t.toolkit;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(k.whatsappMsg)}`;

  return (
    <section
      id="kit-ia"
      className="relative z-10 border-y border-accent/20 py-20 lg:py-28"
      style={{
        background:
          'linear-gradient(180deg, rgba(18,38,78,0.55) 0%, rgba(12,27,58,0.35) 50%, rgba(5,11,24,0) 100%)',
      }}
    >
      {/* faixa de destaque: brilho superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ai/60 to-transparent" />
      <Chapter n="04" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="gborder shadow-[0_0_80px_-20px_rgba(46,124,246,0.45)]">
            <div className="relative overflow-hidden bg-ink-950/95 p-8 lg:p-12">
              {/* ambient glows */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 15% 0%, rgba(46,124,246,0.16) 0%, transparent 55%), radial-gradient(ellipse at 90% 100%, rgba(34,211,170,0.12) 0%, transparent 55%)',
                }}
              />

              {/* header */}
              <div className="relative flex flex-col items-start gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-ai px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-accent/30">
                  <Icon name="crown" className="h-4 w-4" strokeWidth={2.2} />
                  {k.label}
                </span>
                <h2 className="max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
                  {k.title}
                </h2>
                <p className="max-w-2xl text-lg text-slate-400">{k.subtitle}</p>
              </div>

              <div className="relative mt-10 grid gap-10 lg:grid-cols-[1.6fr,1fr]">
                {/* features */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {k.features.map((f, i) => (
                    <SpotlightCard
                      key={f.title}
                      className="group rounded-xl border border-white/10 bg-ink-900/60 p-5 transition-colors duration-300 hover:border-ai/40"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent/25 to-ai/25 text-ai transition-transform duration-300 group-hover:scale-110">
                          <Icon name={f.icon} className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-sm font-semibold leading-snug text-white">
                          {f.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-slate-400">{f.text}</p>
                    </SpotlightCard>
                  ))}
                </div>

                {/* pricing */}
                <div className="flex flex-col justify-between rounded-2xl border border-ai/25 bg-ink-900/80 p-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {k.priceLabel}
                    </p>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="font-display text-5xl font-bold text-white">
                        {k.priceMonthly}
                      </span>
                      <span className="text-lg text-slate-400">{k.perMonth}</span>
                    </div>

                    <div className="my-6 h-px bg-gradient-to-r from-accent/40 via-ai/40 to-transparent" />

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {k.orLabel}
                    </p>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-gradient font-display text-4xl font-bold">
                        {k.priceAnnual}
                      </span>
                      <span className="text-slate-400">{k.perMonth}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">{k.annualNote}</p>
                    <span className="mt-3 inline-block rounded-full border border-ai/30 bg-ai/10 px-3 py-1 text-xs font-semibold text-ai">
                      {k.savings}
                    </span>

                    <p className="mt-6 flex items-start gap-2 text-xs text-slate-400">
                      <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ai" strokeWidth={2.5} />
                      {k.includes}
                    </p>
                  </div>

                  <div className="mt-8 space-y-3">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full"
                      onClick={() => trackEvent('click_cta_toolkit', { cta: 'subscribe' })}
                    >
                      {k.cta} <Icon name="arrow-right" className="h-4 w-4" />
                    </a>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost w-full"
                      onClick={() => trackEvent('click_whatsapp', { placement: 'toolkit' })}
                    >
                      {k.ctaSecondary}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
