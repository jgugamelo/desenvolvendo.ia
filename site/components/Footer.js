'use client';

import Icon from './Icon';
import Logo from './Logo';
import { whatsappLink, trackEvent } from '@/lib/i18n';

export default function Footer({ t, lang, setLang }) {
  const year = new Date().getFullYear();

  const links = [
    { href: '#solucoes', label: t.nav.solutions },
    { href: '#como-funciona', label: t.nav.how },
    { href: '#para-quem', label: t.nav.who },
    { href: '#diagnostico', label: t.nav.diagnosis },
  ];

  return (
    <footer id="contato" className="relative z-10 border-t border-white/5 bg-ink-950 py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo className="text-xl" />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">{t.footer.about}</p>
            <div className="mt-5 flex gap-3">
              {['instagram', 'linkedin', 'youtube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-600/40 text-slate-400 transition-colors hover:border-ai hover:text-ai"
                >
                  <Icon name={s} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              {t.footer.links}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-400 transition-colors hover:text-ai">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              {t.footer.contact}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href={whatsappLink(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_whatsapp', { placement: 'footer' })}
                  className="transition-colors hover:text-ai"
                >
                  WhatsApp: +55 21 99947-3307
                </a>
              </li>
              <li>
                <a href="mailto:contato@desenvolvendo.ia" className="transition-colors hover:text-ai">
                  contato@desenvolvendo.ia
                </a>
              </li>
            </ul>
            <div className="mt-5 flex overflow-hidden rounded-lg border border-slate-600/40 text-xs font-semibold">
              {['pt', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 uppercase transition-colors ${
                    lang === l ? 'bg-accent text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-slate-500 md:flex-row">
          <p>
            © {year} desenvolvendo.ia · {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-ai">
              {t.footer.privacy}
            </a>
            <a href="#" className="transition-colors hover:text-ai">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
