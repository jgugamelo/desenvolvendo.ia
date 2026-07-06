'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { trackEvent, whatsappLink } from '@/lib/i18n';

const inputCls =
  'w-full rounded-xl border border-slate-600/40 bg-ink-900/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent';

export default function LeadForm({ t, lang }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    if (!data.name || !data.email || !data.phone) {
      setError(t.form.required);
      return;
    }
    setError('');

    // capture UTM params for campaign attribution
    const utm = {};
    new URLSearchParams(window.location.search).forEach((v, k) => {
      if (k.startsWith('utm_')) utm[k] = v;
    });

    const lead = { ...data, ...utm, lang, submittedAt: new Date().toISOString() };

    // V1: front-end only. Plug your n8n/CRM webhook here later:
    // fetch('https://SEU-WEBHOOK-N8N/webhook/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
    console.log('lead captured', lead);

    trackEvent('submit_lead_form', { country: data.country, pain: data.pain });
    setSent(true);
  }

  return (
    <section id="diagnostico" className="relative z-10 border-t border-white/5 bg-ink-900/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="section-label">{t.form.label}</span>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {t.form.title}
            </h2>
            <p className="mt-4 max-w-md text-lg text-slate-400">{t.form.text}</p>
            <a
              href={whatsappLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { placement: 'form' })}
              className="mt-8 inline-flex items-center gap-3 rounded-xl border border-ai/30 bg-ai/10 px-5 py-3.5 font-semibold text-ai transition-all hover:bg-ai/20"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.form.whatsapp}
            </a>
          </Reveal>

          <Reveal delay={2}>
            {sent ? (
              <div className="glass flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl border-ai/30 p-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ai/15 text-3xl text-ai">
                  ✓
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  {t.form.successTitle}
                </h3>
                <p className="mt-2 max-w-sm text-slate-400">{t.form.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 lg:p-8" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" placeholder={`${t.form.name} *`} className={inputCls} required />
                  <input name="company" placeholder={t.form.company} className={inputCls} />
                  <input name="role" placeholder={t.form.role} className={inputCls} />
                  <input
                    name="email"
                    type="email"
                    placeholder={`${t.form.email} *`}
                    className={inputCls}
                    required
                  />
                  <input name="phone" placeholder={`${t.form.phone} *`} className={inputCls} required />
                  <select name="country" className={inputCls} defaultValue="">
                    <option value="" disabled>
                      {t.form.country}
                    </option>
                    {t.form.countries.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  <select name="segment" className={inputCls} defaultValue="">
                    <option value="" disabled>
                      {t.form.segment}
                    </option>
                    {t.form.segments.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <select name="teamSize" className={inputCls} defaultValue="">
                    <option value="" disabled>
                      {t.form.teamSize}
                    </option>
                    {t.form.teamSizes.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <select name="pain" className={`${inputCls} sm:col-span-2`} defaultValue="">
                    <option value="" disabled>
                      {t.form.pain}
                    </option>
                    {t.form.pains.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder={t.form.message}
                    className={`${inputCls} resize-none sm:col-span-2`}
                  />
                </div>

                {error && <p className="mt-3 text-sm font-medium text-red-400">{error}</p>}

                <button type="submit" className="btn-primary mt-5 w-full">
                  {t.form.submit}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
