export const translations = {
  pt: {
    nav: {
      solutions: 'Soluções',
      how: 'Como Funciona',
      who: 'Para Quem É',
      diagnosis: 'Diagnóstico',
      contact: 'Contato',
      cta: 'Solicitar diagnóstico',
    },
    hero: {
      badge: 'Agência de IA · Brasil & EUA',
      title1: 'IA para vender mais, atender melhor e gerenciar com ',
      titleHighlight: 'previsibilidade',
      subtitle:
        'Criamos agentes de IA, análise de sentimento, automações e dashboards para transformar conversas, dados e processos em uma operação mais inteligente.',
      ctaPrimary: 'Solicitar diagnóstico',
      ctaSecondary: 'Conhecer soluções',
      scroll: 'Role para explorar',
      kpi1Label: 'Tempo de resposta',
      kpi1Value: '28s',
      kpi2Label: 'Sentimento positivo',
      kpi2Value: '87%',
      kpi3Label: 'Conversão de leads',
      kpi3Value: '+34%',
      kpi4Label: 'Previsão de vendas',
      kpi4Value: 'R$ 412k',
    },
    problem: {
      label: 'O problema',
      title: 'Sua operação gera dados. Mas gera clareza?',
      items: [
        {
          icon: '⏱',
          title: 'Leads sem resposta rápida',
          text: 'Sua empresa recebe leads, mas nem sempre responde no tempo em que o cliente ainda está quente.',
        },
        {
          icon: '👁',
          title: 'Zero visão sobre as conversas',
          text: 'O gestor não sabe a qualidade real do que a equipe fala com os clientes todos os dias.',
        },
        {
          icon: '🔁',
          title: 'Follow-up sem padrão',
          text: 'Cada atendente faz do seu jeito. Leads esfriam e oportunidades se perdem no caminho.',
        },
        {
          icon: '🧩',
          title: 'Dados espalhados',
          text: 'WhatsApp, planilhas, CRM e relatórios desconectados. Nenhuma fonte única de verdade.',
        },
        {
          icon: '📉',
          title: 'Impossível prever resultados',
          text: 'Sem indicadores confiáveis, prever vendas, atendimento e operação vira adivinhação.',
        },
      ],
    },
    solution: {
      label: 'A solução',
      title: 'Um sistema completo, não um chatbot genérico',
      text: 'A desenvolvendo.ia conecta IA, CRM, automações e dados para transformar conversas e processos em uma operação inteligente.',
      blocks: [
        { icon: '🤖', title: 'Agentes de IA', text: 'Para atendimento e vendas, 24/7.' },
        { icon: '💬', title: 'Análise de sentimento', text: 'Em tempo real, conversa por conversa.' },
        { icon: '📊', title: 'Dashboards gerenciais', text: 'Visão clara para decidir com dados.' },
        { icon: '⚡', title: 'Automações e integrações', text: 'WhatsApp, CRM, planilhas e APIs conectados.' },
        { icon: '🎓', title: 'Treinamento e acompanhamento', text: 'Sua equipe evolui junto com a tecnologia.' },
      ],
    },
    products: {
      label: 'Produtos e serviços',
      title: 'Soluções para cada etapa da sua operação',
      items: [
        {
          icon: '💬',
          name: 'Atendimento.IA',
          text: 'Agentes para atendimento, triagem, dúvidas frequentes e encaminhamento inteligente para a equipe humana.',
        },
        {
          icon: '🎯',
          name: 'SDR.IA',
          text: 'Agente comercial para qualificação, follow-up, recuperação de leads e agendamento automático.',
        },
        {
          icon: '❤️',
          name: 'Sentimento.IA',
          text: 'Análise de sentimento em tempo real para orientar atendentes e dar visão de qualidade ao gestor.',
        },
        {
          icon: '📊',
          name: 'Dashboards.IA',
          text: 'Painéis comerciais, operacionais, financeiros e de atendimento — tudo em um só lugar.',
        },
        {
          icon: '⚡',
          name: 'Automações Inteligentes',
          text: 'Integração entre WhatsApp, CRM, planilhas, formulários, e-mail, APIs e sistemas.',
        },
        {
          icon: '🚀',
          name: 'Operação Inteligente 360',
          text: 'Projeto completo com CRM, IA, sentimento, dashboards, automações e suporte contínuo.',
        },
      ],
    },
    sentiment: {
      label: 'Diferencial proprietário',
      title: 'Sua equipe não precisa apenas responder rápido. Precisa responder do jeito certo.',
      text: 'O Sentimento.IA lê cada conversa em tempo real, identifica o clima do cliente e orienta o atendente antes que o lead esfrie.',
      features: [
        'Identificação de sentimento positivo, neutro ou negativo',
        'Alertas em tempo real para o atendente',
        'Sugestões de abordagem durante a conversa',
        'Identificação de risco de perda do lead',
        'Análise de qualidade por atendente',
        'Relatórios e evolução da equipe para o gestor',
      ],
      chatTitle: 'Conversa ao vivo · WhatsApp',
      chatMessages: [
        { from: 'client', text: 'Oi, queria saber o valor do curso', sentiment: 'neutral' },
        { from: 'agent', text: 'Olá! Claro 😊 O investimento é R$ 297/mês. Posso te mostrar as condições?' },
        { from: 'client', text: 'Achei caro… vou pensar', sentiment: 'negative' },
        { from: 'agent', text: 'Entendo! Temos 40% off na matrícula esta semana. Quer que eu simule?' },
        { from: 'client', text: 'Opa, assim sim! Pode simular 🙌', sentiment: 'positive' },
      ],
      alertTitle: 'Sentimento.IA',
      alertRisk: '⚠ Risco de perda detectado',
      alertSuggestion: 'Sugestão: apresente a condição promocional e reforce o valor do resultado.',
      alertRecovered: '✓ Lead recuperado — sentimento positivo',
      sentimentLabels: { positive: 'Positivo', neutral: 'Neutro', negative: 'Negativo' },
    },
    dashboards: {
      label: 'Dashboards para gestão',
      title: 'De dados espalhados a decisões seguras',
      text: 'Transformamos dados espalhados em visão clara para o gestor decidir com mais segurança.',
      types: ['Comercial', 'Atendimento', 'Marketing', 'Financeiro', 'Operacional', 'Multiunidade'],
      panelTitle: 'Dashboard Comercial · Tempo real',
      metrics: [
        { label: 'Leads recebidos', value: '1.284', trend: '+18%' },
        { label: 'Tempo médio de resposta', value: '42s', trend: '-31%' },
        { label: 'Taxa de conversão', value: '23,4%', trend: '+6,2pp' },
        { label: 'Previsão de vendas', value: 'R$ 412k', trend: '+12%' },
      ],
      chartLabel: 'Leads por semana',
      sentimentByAgent: 'Sentimento por atendente',
    },
    who: {
      label: 'Para quem é',
      title: 'Feito para operações que vivem de conversas e leads',
      segments: [
        { icon: '🎓', name: 'Educação', text: 'Escolas, cursos, polos EAD e cursos técnicos.' },
        { icon: '🏥', name: 'Clínicas e estética', text: 'Saúde particular, estética e odontologia.' },
        { icon: '🏠', name: 'Imobiliárias', text: 'Qualificação e follow-up de contatos.' },
        { icon: '⚖️', name: 'Advocacia', text: 'Triagem e atendimento de novos casos.' },
        { icon: '🛠', name: 'Serviços locais', text: 'Empresas de serviços com demanda digital.' },
        { icon: '🏢', name: 'Franquias e redes', text: 'Operações com múltiplas unidades.' },
      ],
      fitTitle: 'Sua empresa tem fit se:',
      fitItems: [
        'Recebe leads ou atendimentos digitais',
        'Tem equipe comercial ou de atendimento',
        'Usa WhatsApp, CRM, planilhas ou sistemas',
        'Precisa de mais controle, velocidade e previsibilidade',
      ],
    },
    how: {
      label: 'Como funciona',
      title: 'Do diagnóstico à otimização contínua',
      steps: [
        { title: 'Diagnóstico da operação', text: 'Entendemos processos, canais e gargalos.' },
        { title: 'Mapeamento de processos e dados', text: 'Onde estão os dados e o que precisa fluir.' },
        { title: 'Desenho da solução', text: 'Arquitetura de IA, automações e painéis sob medida.' },
        { title: 'Implantação', text: 'IA, automações e dashboards entrando em operação.' },
        { title: 'Treinamento da equipe', text: 'Seu time dominando as ferramentas.' },
        { title: 'Acompanhamento de indicadores', text: 'Métricas monitoradas de perto.' },
        { title: 'Otimização contínua', text: 'Evolução constante com base em dados.' },
      ],
    },
    plans: {
      label: 'Formatos de contratação',
      title: 'Um formato para cada momento da sua empresa',
      items: [
        {
          name: 'Diagnóstico IA Express',
          text: 'Mapa rápido das melhores oportunidades de IA, automações e dashboards na sua operação.',
          tag: 'Comece aqui',
        },
        {
          name: 'Projeto de Implantação',
          text: 'Implementação da solução desenhada: agentes, automações, integrações e painéis.',
        },
        {
          name: 'Suporte e Evolução',
          text: 'Mensalidade para acompanhamento, ajustes e evolução contínua da operação.',
        },
        {
          name: 'Operação Inteligente 360',
          text: 'Projeto completo: CRM, IA, sentimento, dashboards, automações e suporte dedicado.',
          tag: 'Mais completo',
        },
      ],
      cta: 'Solicite um diagnóstico para entender o melhor formato para sua empresa.',
    },
    cases: {
      label: 'Exemplos de aplicação',
      title: 'Onde a IA já gera resultado prático',
      items: [
        {
          icon: '🎓',
          title: 'Escola',
          text: 'Redução de perda de leads de matrícula com resposta imediata e follow-up automático.',
        },
        {
          icon: '🏥',
          title: 'Clínica',
          text: 'Agendamentos organizados e follow-up de pacientes sem esforço manual.',
        },
        {
          icon: '🏠',
          title: 'Imobiliária',
          text: 'Qualificação automática de contatos antes de chegar ao corretor.',
        },
        {
          icon: '📊',
          title: 'Gestão',
          text: 'Gestor acompanhando sentimento e produtividade da equipe em tempo real.',
        },
      ],
    },
    finalCta: {
      title: 'Quer entender onde a IA pode gerar resultado na sua operação?',
      text: 'Solicite um diagnóstico e receba um mapa das melhores oportunidades para aplicar IA, automações e dashboards na sua empresa.',
      primary: 'Solicitar diagnóstico',
      secondary: 'Falar com especialista',
    },
    form: {
      label: 'Diagnóstico',
      title: 'Solicite seu diagnóstico',
      text: 'Preencha os dados e nossa equipe entra em contato para mapear as oportunidades de IA na sua operação.',
      name: 'Nome',
      company: 'Empresa',
      role: 'Cargo',
      email: 'E-mail',
      phone: 'WhatsApp / Telefone',
      country: 'País',
      countries: ['Brasil', 'EUA', 'Outro'],
      segment: 'Segmento',
      segments: [
        'Educação',
        'Clínicas e estética',
        'Imobiliária',
        'Advocacia',
        'Serviços locais',
        'Franquias e redes',
        'Outro',
      ],
      teamSize: 'Tamanho da equipe',
      teamSizes: ['1-5', '6-20', '21-50', '51-200', '200+'],
      pain: 'Principal dor',
      pains: ['Atendimento', 'Vendas', 'Follow-up', 'Gestão de equipe', 'Dashboards', 'Automação', 'Outro'],
      message: 'Mensagem (opcional)',
      submit: 'Enviar solicitação',
      select: 'Selecione',
      successTitle: 'Solicitação recebida! ✓',
      successText: 'Nossa equipe entrará em contato em breve para agendar seu diagnóstico.',
      whatsapp: 'Ou fale agora pelo WhatsApp',
      required: 'Preencha os campos obrigatórios.',
    },
    footer: {
      about:
        'Agência de inteligência artificial aplicada a vendas, atendimento e gestão. Agentes de IA, análise de sentimento, automações e dashboards.',
      links: 'Links rápidos',
      contact: 'Contato',
      legal: 'Legal',
      privacy: 'Política de privacidade',
      terms: 'Termos de uso',
      rights: 'Todos os direitos reservados.',
    },
  },

  en: {
    nav: {
      solutions: 'Solutions',
      how: 'How It Works',
      who: 'Who It’s For',
      diagnosis: 'AI Diagnosis',
      contact: 'Contact',
      cta: 'Request AI diagnosis',
    },
    hero: {
      badge: 'AI Agency · Brazil & USA',
      title1: 'AI systems for smarter sales, better support and ',
      titleHighlight: 'data-driven operations',
      subtitle:
        'We build AI agents, sentiment analysis, workflow automations and executive dashboards to help businesses scale without losing control.',
      ctaPrimary: 'Request an AI diagnosis',
      ctaSecondary: 'Explore solutions',
      scroll: 'Scroll to explore',
      kpi1Label: 'Response time',
      kpi1Value: '28s',
      kpi2Label: 'Positive sentiment',
      kpi2Value: '87%',
      kpi3Label: 'Lead conversion',
      kpi3Value: '+34%',
      kpi4Label: 'Sales forecast',
      kpi4Value: '$84k',
    },
    problem: {
      label: 'The problem',
      title: 'Your operation produces data. Does it produce clarity?',
      items: [
        {
          icon: '⏱',
          title: 'Slow lead response',
          text: 'Leads come in, but responses don’t always happen while the prospect is still hot.',
        },
        {
          icon: '👁',
          title: 'No visibility into conversations',
          text: 'Managers can’t see the real quality of what the team says to customers every day.',
        },
        {
          icon: '🔁',
          title: 'Manual, inconsistent workflows',
          text: 'Every rep follows their own process. Leads go cold and opportunities slip away.',
        },
        {
          icon: '🧩',
          title: 'Disconnected tools',
          text: 'Chat apps, spreadsheets, CRM and reports living apart. No single source of truth.',
        },
        {
          icon: '📉',
          title: 'No way to forecast',
          text: 'Without reliable metrics, predicting sales and operations becomes guesswork.',
        },
      ],
    },
    solution: {
      label: 'The solution',
      title: 'A complete system — not a generic chatbot',
      text: 'desenvolvendo.ia connects AI, CRM, automations and data to turn conversations and processes into an intelligent operation.',
      blocks: [
        { icon: '🤖', title: 'AI agents', text: 'For support and sales, 24/7.' },
        { icon: '💬', title: 'Sentiment analysis', text: 'Real time, conversation by conversation.' },
        { icon: '📊', title: 'Executive dashboards', text: 'Clear visibility to decide with data.' },
        { icon: '⚡', title: 'Automations & integrations', text: 'Chat, CRM, spreadsheets and APIs connected.' },
        { icon: '🎓', title: 'Training & follow-through', text: 'Your team evolves with the technology.' },
      ],
    },
    products: {
      label: 'Products & services',
      title: 'Solutions for every stage of your operation',
      items: [
        {
          icon: '💬',
          name: 'Support.AI',
          text: 'AI agents for customer support, triage, FAQs and smart handoff to your human team.',
        },
        {
          icon: '🎯',
          name: 'SDR.AI',
          text: 'Sales agent for lead qualification, follow-up, lead recovery and automatic scheduling.',
        },
        {
          icon: '❤️',
          name: 'Sentiment.AI',
          text: 'Real-time sentiment analysis to guide reps and give managers true quality visibility.',
        },
        {
          icon: '📊',
          name: 'Dashboards.AI',
          text: 'Sales, operations, finance and support dashboards — all in one place.',
        },
        {
          icon: '⚡',
          name: 'Smart Automations',
          text: 'Integrations across chat, CRM, spreadsheets, forms, email, APIs and internal systems.',
        },
        {
          icon: '🚀',
          name: 'Intelligent Operation 360',
          text: 'Full project: CRM, AI, sentiment, dashboards, automations and ongoing support.',
        },
      ],
    },
    sentiment: {
      label: 'Proprietary differentiator',
      title: 'Your team doesn’t just need to reply fast. It needs to reply right.',
      text: 'Sentiment.AI reads every conversation in real time, detects the customer’s mood and coaches the rep before the lead goes cold.',
      features: [
        'Positive, neutral or negative sentiment detection',
        'Real-time alerts for the rep',
        'Approach suggestions during the conversation',
        'Lead-loss risk identification',
        'Quality analysis per rep',
        'Manager reports and team evolution tracking',
      ],
      chatTitle: 'Live conversation · Chat',
      chatMessages: [
        { from: 'client', text: 'Hi, how much is the program?', sentiment: 'neutral' },
        { from: 'agent', text: 'Hi! Sure 😊 It’s $97/month. Want me to walk you through the options?' },
        { from: 'client', text: 'That’s pricey… I’ll think about it', sentiment: 'negative' },
        { from: 'agent', text: 'Got it! We have 40% off enrollment this week. Want me to run the numbers?' },
        { from: 'client', text: 'Oh, now we’re talking! Yes please 🙌', sentiment: 'positive' },
      ],
      alertTitle: 'Sentiment.AI',
      alertRisk: '⚠ Lead-loss risk detected',
      alertSuggestion: 'Suggestion: present the promotional offer and reinforce the value of the outcome.',
      alertRecovered: '✓ Lead recovered — positive sentiment',
      sentimentLabels: { positive: 'Positive', neutral: 'Neutral', negative: 'Negative' },
    },
    dashboards: {
      label: 'Executive dashboards',
      title: 'From scattered data to confident decisions',
      text: 'We turn scattered data into clear visibility so managers can decide with confidence.',
      types: ['Sales', 'Support', 'Marketing', 'Finance', 'Operations', 'Multi-location'],
      panelTitle: 'Sales Dashboard · Real time',
      metrics: [
        { label: 'Leads received', value: '1,284', trend: '+18%' },
        { label: 'Avg. response time', value: '42s', trend: '-31%' },
        { label: 'Conversion rate', value: '23.4%', trend: '+6.2pp' },
        { label: 'Sales forecast', value: '$84k', trend: '+12%' },
      ],
      chartLabel: 'Leads per week',
      sentimentByAgent: 'Sentiment per rep',
    },
    who: {
      label: 'Who it’s for',
      title: 'Built for operations that run on conversations and leads',
      segments: [
        { icon: '🏥', name: 'Clinics & med spas', text: 'Clinics, med spas and dental offices.' },
        { icon: '🛠', name: 'Local & home services', text: 'Service businesses with digital demand.' },
        { icon: '🏠', name: 'Real estate teams', text: 'Lead qualification and follow-up.' },
        { icon: '⚖️', name: 'Law firms', text: 'Intake triage and case follow-up.' },
        { icon: '💼', name: 'Agencies & SMBs', text: 'Small service businesses ready to scale.' },
        { icon: '🏢', name: 'Multi-location businesses', text: 'Operations across multiple units.' },
      ],
      fitTitle: 'You’re a fit if you:',
      fitItems: [
        'Receive digital leads or support requests',
        'Have a sales or support team',
        'Use chat, CRM, spreadsheets or internal systems',
        'Need more control, speed and predictability',
      ],
    },
    how: {
      label: 'How it works',
      title: 'From diagnosis to continuous optimization',
      steps: [
        { title: 'Operation diagnosis', text: 'We map processes, channels and bottlenecks.' },
        { title: 'Process & data mapping', text: 'Where data lives and what needs to flow.' },
        { title: 'Solution design', text: 'Tailored AI, automation and dashboard architecture.' },
        { title: 'Implementation', text: 'AI, automations and dashboards going live.' },
        { title: 'Team training', text: 'Your team mastering the tools.' },
        { title: 'KPI monitoring', text: 'Metrics tracked closely.' },
        { title: 'Continuous optimization', text: 'Constant, data-driven improvement.' },
      ],
    },
    plans: {
      label: 'Engagement models',
      title: 'A model for every stage of your business',
      items: [
        {
          name: 'AI Diagnosis Express',
          text: 'A fast map of the best AI, automation and dashboard opportunities in your operation.',
          tag: 'Start here',
        },
        {
          name: 'Implementation Project',
          text: 'Deployment of the designed solution: agents, automations, integrations and dashboards.',
        },
        {
          name: 'Support & Evolution',
          text: 'Monthly retainer for monitoring, tuning and continuous improvement.',
        },
        {
          name: 'Intelligent Operation 360',
          text: 'Full project: CRM, AI, sentiment, dashboards, automations and dedicated support.',
          tag: 'Most complete',
        },
      ],
      cta: 'Request a diagnosis to find the best model for your business.',
    },
    cases: {
      label: 'Application examples',
      title: 'Where AI already delivers practical results',
      items: [
        {
          icon: '🏥',
          title: 'Clinic',
          text: 'Organized scheduling and patient follow-up with zero manual effort.',
        },
        {
          icon: '🏠',
          title: 'Real estate',
          text: 'Automatic contact qualification before reaching the agent.',
        },
        {
          icon: '⚖️',
          title: 'Law firm',
          text: 'Faster intake with AI triage and consistent follow-up.',
        },
        {
          icon: '📊',
          title: 'Management',
          text: 'Managers tracking sentiment and team productivity in real time.',
        },
      ],
    },
    finalCta: {
      title: 'Want to see where AI can drive results in your operation?',
      text: 'Request a diagnosis and get a map of the best opportunities to apply AI, automations and dashboards in your business.',
      primary: 'Request an AI diagnosis',
      secondary: 'Talk to a specialist',
    },
    form: {
      label: 'AI Diagnosis',
      title: 'Request your AI diagnosis',
      text: 'Fill in your details and our team will reach out to map the AI opportunities in your operation.',
      name: 'Name',
      company: 'Company',
      role: 'Role',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      country: 'Country',
      countries: ['USA', 'Brazil', 'Other'],
      segment: 'Industry',
      segments: [
        'Clinics & med spas',
        'Local & home services',
        'Real estate',
        'Law firm',
        'Agency / services',
        'Multi-location',
        'Other',
      ],
      teamSize: 'Team size',
      teamSizes: ['1-5', '6-20', '21-50', '51-200', '200+'],
      pain: 'Main challenge',
      pains: ['Support', 'Sales', 'Follow-up', 'Team management', 'Dashboards', 'Automation', 'Other'],
      message: 'Message (optional)',
      submit: 'Send request',
      select: 'Select',
      successTitle: 'Request received! ✓',
      successText: 'Our team will contact you shortly to schedule your diagnosis.',
      whatsapp: 'Or message us on WhatsApp now',
      required: 'Please fill in the required fields.',
    },
    footer: {
      about:
        'Artificial intelligence agency applied to sales, support and operations. AI agents, sentiment analysis, automations and dashboards.',
      links: 'Quick links',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy policy',
      terms: 'Terms of use',
      rights: 'All rights reserved.',
    },
  },
};

export const WHATSAPP_NUMBER = '5521999473307';

export function whatsappLink(lang) {
  const msg =
    lang === 'en'
      ? 'Hi! I’d like to request an AI diagnosis for my business.'
      : 'Olá! Gostaria de solicitar um diagnóstico de IA para minha empresa.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function trackEvent(event, params = {}) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  }
}
