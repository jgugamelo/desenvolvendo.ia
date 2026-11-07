import './globals.css';

const SITE_URL = 'https://desenvolvendo.ia.br';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Software sob demanda, agentes de IA e dados para empresas | desenvolvendo.ia',
  description:
    'Sistemas personalizados, funcionários digitais (agentes de IA) e inteligência de dados que executam o trabalho operacional da sua empresa. Solicite um diagnóstico.',
  keywords: [
    'desenvolvimento de software sob demanda',
    'sistemas personalizados para empresas',
    'agentes de IA para empresas',
    'funcionários digitais',
    'automação de processos com IA',
    'IA para cobrança',
    'IA para escritórios de advocacia',
    'IA para seguradoras',
    'inteligência de dados',
    'custom software development',
    'AI agents for business',
    'AI process automation',
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
    title: 'desenvolvendo.ia | Software que trabalha pela sua operação',
    description:
      'Sistemas personalizados, funcionários digitais e inteligência de dados para empresas que têm uma operação para tocar.',
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
        alt: 'desenvolvendo.ia | Software que trabalha pela sua operação',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'desenvolvendo.ia | Software que trabalha pela sua operação',
    description:
      'Sistemas personalizados, funcionários digitais e inteligência de dados para empresas.',
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
      'Desenvolvimento de sistemas personalizados, funcionários digitais (agentes de IA) e inteligência de dados que executam o trabalho operacional de empresas.',
    email: 'contato@desenvolvendo.ia.br',
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
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "O que a desenvolvendo.ia faz?",
        acceptedAnswer: { '@type': 'Answer', text: "Desenvolvemos sistemas personalizados, funcionários digitais (agentes de IA) e soluções de inteligência de dados que executam o trabalho operacional da sua empresa." },
      },
      {
        '@type': 'Question',
        name: "O que é um funcionário digital?",
        acceptedAnswer: { '@type': 'Answer', text: "É um agente de IA que executa uma tarefa completa, como negociar uma dívida, triar um caso ou conferir documentos, seguindo as regras da sua empresa e registrando tudo." },
      },
      {
        '@type': 'Question',
        name: "Preciso saber programar ou operar alguma ferramenta?",
        acceptedAnswer: { '@type': 'Answer', text: "Não. Nós construímos, integramos e mantemos a solução. Sua equipe recebe o trabalho pronto e acompanha os resultados." },
      },
      {
        '@type': 'Question',
        name: "Quanto custa?",
        acceptedAnswer: { '@type': 'Answer', text: "Depende do escopo. Começamos por um diagnóstico que mapeia as oportunidades e indica o investimento e o formato de contratação ideais." },
      },
      {
        '@type': 'Question',
        name: "Quanto tempo leva para colocar no ar?",
        acceptedAnswer: { '@type': 'Answer', text: "Como partimos de módulos próprios já testados, as primeiras entregas costumam rodar em semanas, não em meses." },
      },
      {
        '@type': 'Question',
        name: "Os dados da minha empresa ficam seguros?",
        acceptedAnswer: { '@type': 'Answer', text: "Sim. Trabalhamos com controle de acesso, registros de auditoria e adequação à LGPD em todas as soluções." },
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
