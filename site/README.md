# Site desenvolvendo.ia

Landing page bilíngue (PT/EN) construída com Next.js 14 + Tailwind CSS, conforme o PRD.

## Rodar localmente

Pré-requisito: Node.js 18+ instalado (https://nodejs.org).

```bash
cd site
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar na HostGator (ou qualquer hospedagem cPanel)

A HostGator não roda Node.js/Next.js diretamente — é preciso enviar a versão estática:

```bash
cd site
npm install
npm run build
```

O build gera a pasta `site/out` com o site pronto (HTML/CSS/JS puros). Depois:

1. Acesse o cPanel da HostGator → Gerenciador de Arquivos.
2. Entre em `public_html` (ou na pasta do seu domínio/subdomínio).
3. Envie o CONTEÚDO da pasta `out` (index.html, 404.html, pasta `_next`, .htaccess) — não a pasta `out` em si.
4. O `index.html` deve ficar direto dentro de `public_html`.

Importante: envie os arquivos gerados em `out`, nunca os arquivos-fonte (app/, components/ etc.) — código-fonte Next.js não funciona em hospedagem estática.

## Publicar na Vercel (recomendado)

1. Suba a pasta `site` para um repositório no GitHub.
2. Em https://vercel.com, importe o repositório.
3. A Vercel detecta Next.js automaticamente — só clicar em Deploy.
4. Configure o domínio desenvolvendo.ia em Settings → Domains.

## O que já está pronto

- Todas as seções do PRD: Hero, Problema, Solução, Produtos, Sentimento.IA (demo animada de conversa), Dashboards (painel animado), Para Quem É, Como Funciona, Formatos de Contratação, Exemplos, CTA final, Formulário e Footer.
- Bilíngue PT/EN com seletor no header/footer (a versão EN é adaptada para o mercado americano, não tradução literal).
- Fundo de partículas interativo que reage ao mouse + glow que segue o cursor + tilt 3D no mockup do hero (referência: talonintelligence.com.br).
- Animações de scroll (reveal) em todas as seções.
- Botão flutuante de WhatsApp (+55 21 99947-3307) com mensagem pré-preenchida por idioma.
- Formulário de lead com validação, captura de UTM e tela de confirmação.
- Eventos de analytics do PRD disparados via `window.dataLayer` (prontos para o Google Tag Manager): `click_cta_hero`, `click_cta_diagnostico`, `click_whatsapp`, `submit_lead_form`, `select_language_pt/en`, `view_sentimento_section`, `view_dashboards_section`.
- SEO básico: metadados, Open Graph e keywords em `app/layout.js`.

## Próximos passos (pendências suas)

1. **Webhook do formulário**: em `components/LeadForm.js` há um comentário `// V1: front-end only` — troque pela URL do seu webhook n8n/CRM.
2. **Google Tag Manager / Analytics**: adicione o snippet do GTM em `app/layout.js` — os eventos já são enviados ao dataLayer.
3. **Meta Pixel**: via GTM ou snippet direto.
4. **Redes sociais**: links do footer estão como `#` em `components/Footer.js`.
5. **Política de privacidade e termos**: criar as páginas (links no footer).
6. **E-mail**: `contato@desenvolvendo.ia` é placeholder no footer.

## Estrutura

```
site/
├── app/            # layout, página principal, estilos globais
├── components/     # Header, Hero, seções, demos animadas, formulário, footer
└── lib/i18n.js     # textos PT/EN, link do WhatsApp, eventos de analytics
```
