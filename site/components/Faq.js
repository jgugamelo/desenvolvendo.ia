'use client';

import Reveal from './Reveal';
import Icon from './Icon';

/**
 * FAQ with native <details>/<summary> — fully indexable content that
 * feeds both search engines and AI answer engines.
 */
export default function Faq({ t }) {
  return (
    <section id="faq" className="relative z-10 border-y border-white/5 bg-ink-900/40 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="text-center">
          <span className="section-label">{t.faq.label}</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{t.faq.title}</h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {t.faq.items.map((item) => (
            <Reveal key={item.q} delay={1}>
              <details className="faq-item glass group rounded-2xl">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-ai transition-transform duration-300 group-open:rotate-45">
                    <Icon name="plus" className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
