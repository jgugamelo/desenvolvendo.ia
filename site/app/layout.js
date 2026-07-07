import './globals.css';

export const metadata = {
  metadataBase: new URL('https://desenvolvendo.ia'),
  title: 'desenvolvendo.ia | IA para vender mais, atender melhor e gerenciar com previsibilidade',
  description:
    'Agência de IA: agentes de atendimento e vendas, análise de sentimento em tempo real, automações e dashboards gerenciais para transformar sua operação.',
  keywords: [
    'agência de IA',
    'inteligência artificial',
    'IA para WhatsApp',
    'automação com IA',
    'CRM com IA',
    'análise de sentimento',
    'dashboard comercial',
    'AI automation agency',
    'AI agents for business',
  ],
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
    title: 'desenvolvendo.ia | IA para vendas, atendimento e gestão',
    description:
      'Agentes de IA, análise de sentimento, automações e dashboards para uma operação mais inteligente.',
    type: 'website',
    locale: 'pt_BR',
  },
};

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
      </head>
      <body className="bg-ink-950 font-body text-slate-200 antialiased">{children}</body>
    </html>
  );
}
