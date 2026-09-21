export const products = [
  {
    title: 'VESK Commerce',
    desc: 'Loja virtual completa para vender online — catálogo, checkout e pagamentos integrados, pronta para escalar as vendas do seu negócio.',
    features: ['Checkout otimizado', 'Meios de pagamento', 'Gestão de produtos', 'Relatórios de vendas'],
    status: 'Disponível',
    icon: (
      <>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </>
    ),
  },
  {
    title: 'VESK CRM',
    desc: 'Gerencie leads, clientes e negociações com integração nativa ao WhatsApp. Nunca mais perca um follow-up por falta de organização.',
    features: ['Pipeline de vendas', 'Automação de follow-up', 'Integração WhatsApp', 'Dashboard comercial'],
    status: 'Disponível',
    icon: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />,
  },
  {
    title: 'VESK People',
    desc: 'Gestão de pessoas e equipes em uma plataforma só — do cadastro de colaboradores ao acompanhamento do dia a dia do seu time.',
    features: ['Cadastro de colaboradores', 'Controle de ponto', 'Avaliações e feedback', 'Portal do colaborador'],
    status: 'Disponível',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M13 9h5M13 13h5M7 16h4" />
      </>
    ),
  },
] as const;

export const productHighlights = [
  {
    title: 'Pronto para usar',
    desc: 'Produtos maduros, com implantação rápida e treinamento incluso para sua equipe.',
  },
  {
    title: 'Evolução contínua',
    desc: 'Atualizações regulares com novas funcionalidades baseadas no feedback dos clientes.',
  },
  {
    title: 'Suporte dedicado',
    desc: 'Equipe VESK para dúvidas, configuração e acompanhamento pós-implantação.',
  },
] as const;
