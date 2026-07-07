import './globals.css';

const SITE_URL = 'https://desenvolvendo.ia.br';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Agência de IA para vendas, atendimento e gestão | desenvolvendo.ia',
  description:
    'Agência de inteligência artificial: agentes de IA para atendimento e vendas, análise de sentimento em tempo real, automações e dashboards gerenciais. Solicite um diagnóstico gratuito.',
  keywords: [
    'agência de IA',
    'agência de inteligência artificial',
    'IA para WhatsApp',
    'automação com IA',
    'CRM com IA',
    'análise de sentimento no atendimento',
    'dashboard comercial',
    'IA para vendas',
    'IA para atendimento',
    'AI automation agency',
    'AI agents for business',
    'sentiment analysis for customer service',
  ],
  alternates: {
    canonical: SITE_URL,
    languages: {
      'pt-BR': SITE_URL,
      en: SITE_URL,
      'x-default': SITE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'desenvolvendo.ia | Agência de IA para vendas, atendimento e gestão',
    description:
      'Agentes de IA, análise de sentimento em tempo real, automações e dashboards para uma operação mais inteligente. Projetos sob medida e Kit de ferramentas por assinatura.',
    url: SITE_URL,
    siteName: 'desenvolvendo.ia',
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'desenvolvendo.ia — IA para vender mais, atender melhor e gerenciar com previsibilidade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'desenvolvendo.ia | Agência de IA',
    description:
      'Agentes de IA, análise de sentimento, automações e dashboards para vendas, atendimento e gestão.',
    images: ['/og-image.png'],
  },
};

/* ---------- Structured data (JSON-LD) ---------- */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#org`,
    name: 'desenvolvendo.ia',
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    description:
      'Agência de inteligência artificial aplicada a vendas, atendimento e gestão: agentes de IA, análise de sentimento em tempo real, automações e dashboards gerenciais.',
    email: 'contato@desenvolvendo.ia',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-21-98678-0204',
      contactType: 'sales',
      availableLanguage: ['Portuguese', 'English'],
    },
    areaServed: ['BR', 'US'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'desenvolvendo.ia',
    publisher: { '@id': `${SITE_URL}/#org` },
    inLanguage: ['pt-BR', 'en'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Kit Super Ferramentas de IA',
    description:
      'Assinatura mensal com CRM e gestor de WhatsApp com IA integrada, análise de sentimento em tempo real, ligações por WhatsApp, disparador com IA, creator de imagens e criador de dashboards com IA.',
    brand: { '@id': `${SITE_URL}/#org` },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'BRL',
      lowPrice: '690',
      highPrice: '890',
      offerCount: '2',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/#kit-ia`,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'O que a desenvolvendo.ia faz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Somos uma agência de inteligência artificial que cria agentes de IA para atendimento e vendas, análise de sentimento em tempo real, automações e dashboards gerenciais. Trabalhamos com projetos sob medida e com o Kit Super Ferramentas de IA por assinatura.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quanto custa implantar IA na minha empresa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'O Kit Super Ferramentas de IA custa R$ 890/mês, ou R$ 690/mês no plano anual no cartão. Projetos personalizados variam conforme o escopo — o diagnóstico gratuito indica o investimento ideal para a sua operação.',
        },
      },
      {
        '@type': 'Question',
        name: 'O que está incluído no Kit Super Ferramentas de IA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CRM com gestor de WhatsApp com IA integrada e análise de sentimento em tempo real, ligações por WhatsApp, disparador com IA, creator para geração de imagens e criador de dashboards com IA — tudo em uma única assinatura.',
        },
      },
      {
        '@type': 'Question',
        name: 'A IA substitui minha equipe de atendimento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não. A IA assume tarefas repetitivas como triagem, dúvidas frequentes e follow-up, e orienta sua equipe com análise de sentimento e sugestões em tempo real. Sua equipe foca no que exige julgamento humano.',
        },
      },
      {
        '@type': 'Question',
        name: 'O que é análise de sentimento em tempo real?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'É a leitura automática do clima de cada conversa (positivo, neutro ou negativo) enquanto ela acontece. O sistema alerta sobre risco de perda do lead, sugere abordagens e dá ao gestor visão da qualidade do atendimento por atendente e por período.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quanto tempo leva para começar a usar IA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'O Kit Super Ferramentas de IA fica ativo em poucos dias. Projetos sob medida começam com um diagnóstico da operação e seguem um plano de implantação por etapas, com treinamento da equipe e acompanhamento contínuo.',
        },
      },
    ],
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        {jsonLd.map((block, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
          />
        ))}

        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HGGKWL5VRW" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-HGGKWL5VRW');`,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xihst9we0o");`,
          }}
        />
      </head>
      <body className="bg-ink-950 font-body text-slate-200 antialiased">{children}</body>
    </html>
  );
}
