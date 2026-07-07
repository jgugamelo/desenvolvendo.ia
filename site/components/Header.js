'use client';

import { useEffect, useState } from 'react';
import Icon from './Icon';
import Logo from './Logo';
import { trackEvent } from '@/lib/i18n';

export default function Header({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#solucoes', label: t.nav.solutions },
    { href: '#kit-ia', label: t.nav.kit },
    { href: '#como-funciona', label: t.nav.how },
    { href: '#para-quem', label: t.nav.who },
    { href: '#diagnostico', label: t.nav.diagnosis },
    { href: '#contato', label: t.nav.contact },
  ];

  function switchLang(l) {
    setLang(l);
    trackEvent(l === 'pt' ? 'select_language_pt' : 'select_language_en');
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/5 bg-ink-950/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" aria-label="desenvolvendo.ia">
          <Logo className="text-2xl" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-ai"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-lg border border-slate-600/40 text-xs font-semibold">
            {['pt', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                className={`px-3 py-1.5 uppercase transition-colors ${
                  lang === l ? 'bg-accent text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#diagnostico"
            onClick={() => trackEvent('click_cta_diagnostico', { placement: 'header' })}
            className="hidden rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-soft md:inline-flex"
          >
            {t.nav.cta}
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600/40 text-slate-300 lg:hidden"
            aria-label="Menu"
          >
            <Icon name={open ? 'x' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-ink-950/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-slate-300 hover:text-ai"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#diagnostico"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
          >
            {t.nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
