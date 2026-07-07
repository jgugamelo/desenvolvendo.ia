'use client';

import { useEffect, useState } from 'react';
import { translations } from '@/lib/i18n';

import ParticleCanvas from '@/components/ParticleCanvas';
import CursorGlow from '@/components/CursorGlow';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Problem, Products, Niches, How, Plans, FinalCta } from '@/components/Sections';
import Toolkit from '@/components/Toolkit';
import SentimentDemo from '@/components/SentimentDemo';
import DashboardsSection from '@/components/DashboardsSection';
import Faq from '@/components/Faq';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Page() {
  const [lang, setLang] = useState('pt');
  const t = translations[lang];

  // persist language choice
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
      <Problem t={t} />
      <Products t={t} />
      <SentimentDemo t={t} />
      <Toolkit t={t} />
      <DashboardsSection t={t} />
      <Niches t={t} />
      <How t={t} />
      <Plans t={t} />
      <Faq t={t} />
      <FinalCta t={t} lang={lang} />
      <LeadForm t={t} lang={lang} />
      <Footer t={t} lang={lang} setLang={setLang} />

      <WhatsAppButton lang={lang} />
    </main>
  );
}
