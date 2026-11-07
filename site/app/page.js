'use client';

import { useEffect, useState } from 'react';
import { translations } from '@/lib/i18n';

import ParticleCanvas from '@/components/ParticleCanvas';
import CursorGlow from '@/components/CursorGlow';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import { Problem, Pillars, InAction, Examples, How, Engagement, FinalCta } from '@/components/Sections';
import Faq from '@/components/Faq';
import WorkerSection from '@/components/WorkerSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Page() {
  const [lang, setLang] = useState('pt');
  const t = translations[lang];

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('lang');
      if (saved === 'en' || saved === 'pt') setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem('lang', lang);
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    } catch {}
  }, [lang]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleCanvas />
      <CursorGlow />

      <Header t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <TechStack t={t} />
      <Problem t={t} />
      <Pillars t={t} />
      <WorkerSection t={t} />
      <InAction t={t} />
      <Examples t={t} />
      <How t={t} />
      <Engagement t={t} />
      <Faq t={t} />
      <FinalCta t={t} lang={lang} />
      <LeadForm t={t} lang={lang} />
      <Footer t={t} lang={lang} setLang={setLang} />

      <WhatsAppButton lang={lang} />
    </main>
  );
}
