import Logo from '@/components/Logo';

export const metadata = {
  title: 'Política de Privacidade | desenvolvendo.ia',
  description:
    'Como a desenvolvendo.ia coleta, usa, protege e compartilha dados pessoais, em conformidade com a LGPD.',
  alternates: { canonical: '/privacidade/' },
};

const UPDATED = '7 de novembro de 2026';
const EMAIL = 'contato@desenvolvendo.ia.br';

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-slate-300">{children}</div>
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default function Privacidade() {
  return (
    <main className="relative min-h-screen bg-ink-950">
      <header className="border-b border-white/5">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5">
          <a href="/" aria-label="desenvolvendo.ia">
            <Logo className="text-2xl" />
          </a>
          <a href="/" className="text-sm text-slate-400 transition-colors hover:text-ai">
            Voltar ao site
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-slate-500">Última atualização: {UPDATED}</p>

        <p className="mt-8 leading-relaxed text-slate-300">
          A desenvolvendo.ia respeita a sua privacidade. Esta política explica quais dados pessoais coletamos, por que
          coletamos, como usamos, com quem compartilhamos e quais são os seus direitos, de acordo com a Lei Geral de
          Proteção de Dados (Lei 13.709/2018, a LGPD).
        </p>

        <Section title="1. Quem somos">
          <p>
            A desenvolvendo.ia desenvolve sistemas personalizados, funcionários digitais (agentes de IA) e soluções de
            inteligência de dados para empresas. Para assuntos de privacidade, inclusive o exercício dos seus direitos,
            fale com a gente pelo e-mail{' '}
            <a href={`mailto:${EMAIL}`} className="text-ai hover:underline">
              {EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="2. Quais dados coletamos">
          <p>Coletamos apenas o necessário para atender você:</p>
          <List
            items={[
              'Formulário de diagnóstico: nome, empresa, cargo, e-mail, telefone ou WhatsApp, país, segmento, tamanho da equipe, o que deseja resolver e a mensagem que você escrever.',
              'Agendamento do diagnóstico: nome, e-mail, empresa, WhatsApp e data e horário escolhidos na página de agendamento.',
              'Conversas no WhatsApp e no chat do site: o conteúdo das mensagens trocadas com a nossa equipe e com a Lia, nossa funcionária digital (atendimento por inteligência artificial).',
              'Navegação no site: dados técnicos e de uso coletados por cookies e ferramentas de análise, como páginas visitadas, cliques, tipo de dispositivo, navegador e localização aproximada.',
            ]}
          />
          <p>Não pedimos dados sensíveis, documentos, senhas ou dados de pagamento pelo site ou pelo atendimento.</p>
        </Section>

        <Section title="3. Para que usamos os dados">
          <List
            items={[
              'Responder ao seu contato e agendar e realizar o diagnóstico.',
              'Preparar propostas e conduzir as etapas anteriores a um eventual contrato.',
              'Enviar lembretes e informações relacionadas ao atendimento que você solicitou.',
              'Melhorar o site, o atendimento e a qualidade das respostas da nossa funcionária digital.',
              'Garantir a segurança do site e prevenir abusos e fraudes.',
              'Cumprir obrigações legais e regulatórias.',
            ]}
          />
        </Section>

        <Section title="4. Bases legais">
          <p>Tratamos dados pessoais com base nas hipóteses previstas no artigo 7º da LGPD, principalmente:</p>
          <List
            items={[
              'Execução de procedimentos preliminares relacionados a contrato, a seu pedido (formulário, agendamento e diagnóstico).',
              'Legítimo interesse, para melhorar nossos serviços e garantir a segurança, sempre respeitando seus direitos.',
              'Consentimento, para cookies de análise não essenciais, quando aplicável.',
              'Cumprimento de obrigação legal ou regulatória.',
            ]}
          />
        </Section>

        <Section title="5. Com quem compartilhamos">
          <p>Não vendemos dados pessoais. Compartilhamos apenas com fornecedores que nos ajudam a operar, na medida do necessário:</p>
          <List
            items={[
              'Google (Google Agenda e Google Meet, para agendamento e videochamadas; Google Analytics, para métricas do site).',
              'Microsoft (Clarity, para entender o uso do site de forma agregada).',
              'Meta (WhatsApp, para o atendimento por mensagens).',
              'Provedores de hospedagem, segurança e entrega do site.',
              'Provedores de modelos de inteligência artificial usados no atendimento automatizado, que processam o conteúdo das conversas para gerar as respostas.',
            ]}
          />
          <p>
            Alguns desses fornecedores podem armazenar dados fora do Brasil. Nesses casos, adotamos as salvaguardas
            previstas na LGPD para a transferência internacional de dados. Também poderemos compartilhar dados quando
            exigido por lei ou por ordem de autoridade competente.
          </p>
        </Section>

        <Section title="6. Uso de dados do Google">
          <p>
            Nossos sistemas internos acessam a Google Agenda da própria desenvolvendo.ia para organizar os diagnósticos
            agendados e avisar a nossa equipe sobre novos agendamentos. O uso e a transferência de informações recebidas
            das APIs do Google seguem a{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ai hover:underline"
            >
              Política de Dados do Usuário dos Serviços de API do Google
            </a>
            , incluindo os requisitos de Uso Limitado. Esses dados não são vendidos, não são usados para publicidade e
            não são usados para treinar modelos de inteligência artificial de uso geral.
          </p>
        </Section>

        <Section title="7. Cookies">
          <p>
            Usamos cookies essenciais para o funcionamento do site e cookies de análise (Google Analytics e Microsoft
            Clarity) para entender como o site é usado e melhorá-lo. Você pode bloquear ou apagar cookies nas
            configurações do seu navegador. Isso pode afetar algumas funções do site.
          </p>
        </Section>

        <Section title="8. Por quanto tempo guardamos">
          <p>
            Guardamos os dados pelo tempo necessário para as finalidades desta política: em regra, enquanto houver
            relacionamento comercial ou interesse no atendimento e, depois disso, pelo prazo exigido por lei ou para o
            exercício de direitos. Quando não forem mais necessários, os dados são excluídos ou anonimizados.
          </p>
        </Section>

        <Section title="9. Segurança">
          <p>
            Adotamos medidas técnicas e organizacionais para proteger os dados, como conexão criptografada (HTTPS),
            controle de acesso, registros de auditoria e proteção contra acessos indevidos. Nenhum sistema é totalmente
            imune a riscos, mas trabalhamos continuamente para reduzi-los.
          </p>
        </Section>

        <Section title="10. Seus direitos">
          <p>Pela LGPD, você pode solicitar a qualquer momento:</p>
          <List
            items={[
              'Confirmação de que tratamos seus dados e acesso a eles.',
              'Correção de dados incompletos, inexatos ou desatualizados.',
              'Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei.',
              'Portabilidade dos dados a outro fornecedor.',
              'Eliminação dos dados tratados com base no consentimento e revogação do consentimento.',
              'Informação sobre com quem compartilhamos seus dados.',
            ]}
          />
          <p>
            Para exercer seus direitos, escreva para{' '}
            <a href={`mailto:${EMAIL}`} className="text-ai hover:underline">
              {EMAIL}
            </a>
            . Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
          </p>
        </Section>

        <Section title="11. Atendimento por inteligência artificial">
          <p>
            Parte do nosso atendimento é feita pela Lia, uma funcionária digital (inteligência artificial). Ela se
            identifica como IA, segue regras definidas pela nossa equipe e encaminha para uma pessoa quando necessário ou
            quando você pedir.
          </p>
        </Section>

        <Section title="12. Alterações nesta política">
          <p>
            Podemos atualizar esta política para refletir mudanças nos nossos serviços ou na legislação. A data da última
            atualização fica sempre no topo desta página.
          </p>
        </Section>
      </article>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-3xl px-5 py-8 text-xs text-slate-500">© desenvolvendo.ia</div>
      </footer>
    </main>
  );
}
