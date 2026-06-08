export const services = [
  {
    title: 'Desenvolvimento de Sistemas',
    desc: 'Sistemas web e mobile desenvolvidos do zero, integrados aos seus processos. Substituímos planilhas e processos manuais por software que escala com seu negócio.',
    features: ['ERP e CRM sob medida', 'Painéis administrativos', 'Arquitetura escalável', 'Integração com legado'],
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    title: 'Websites Institucionais',
    desc: 'Sites rápidos, otimizados para SEO e focados em conversão. Desenvolvemos com tecnologias modernas e entregamos prontos para ranquear no Google.',
    features: ['Design responsivo', 'SEO técnico', 'Performance otimizada', 'CMS e gestão de conteúdo'],
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    title: 'E-commerce',
    desc: 'Lojas virtuais completas, integradas com meios de pagamento, ERP e marketplaces. Seu negócio vendendo 24h por dia.',
    features: ['Checkout otimizado', 'Gateways de pagamento', 'Gestão de estoque', 'Relatórios de vendas'],
    icon: (
      <>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </>
    ),
  },
  {
    title: 'Sistemas Personalizados',
    desc: 'Quando nenhuma solução pronta resolve, criamos do zero. Sistemas específicos para o seu segmento, suas regras e seus clientes.',
    features: ['Mapeamento de processos', 'Automação de fluxos', 'Dashboards em tempo real', 'Regras de negócio customizadas'],
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </>
    ),
  },
  {
    title: 'Suporte Técnico e Manutenção',
    desc: 'Seu sistema funcionando com monitoramento contínuo, atualizações e suporte rápido via WhatsApp. Sem surpresas, sem tempo parado.',
    features: ['Monitoramento 24/7', 'Correções e atualizações', 'SLA dedicado', 'Evolução contínua'],
    icon: (
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    ),
  },
  {
    title: 'APIs e Integrações',
    desc: 'Conectamos sistemas que não conversam entre si. Integrações com ERPs, marketplaces, meios de pagamento, WhatsApp e qualquer API do mercado.',
    features: ['APIs REST e GraphQL', 'Webhooks e filas', 'Integração ERP/CRM', 'Documentação técnica'],
    icon: <path d="M18 20V10M12 20V4M6 20v-6" />,
  },
] as const;

export const serviceBenefits = [
  {
    title: 'Escopo sob medida',
    desc: 'Cada projeto começa com diagnóstico do negócio — sem pacotes engessados que não resolvem sua dor.',
    icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
  },
  {
    title: 'Entrega incremental',
    desc: 'Sprints com entregas visíveis, feedback contínuo e ajustes antes do go-live final.',
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    title: 'Qualidade garantida',
    desc: 'Testes automatizados, revisão de código e boas práticas em cada camada da aplicação.',
    icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: 'Suporte pós-entrega',
    desc: 'Não abandonamos após o lançamento — evolução, manutenção e acompanhamento dedicado.',
    icon: <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />,
  },
] as const;

export const techStack = [
  'React',
  'TypeScript',
  'Node.js',
  '.NET',
  'PostgreSQL',
  'AWS',
  'Docker',
  'REST APIs',
  'GraphQL',
  'Shopify',
  'WordPress',
  'CI/CD',
] as const;
