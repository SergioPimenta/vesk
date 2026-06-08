export const products = [
  {
    title: 'VESK Gestão',
    desc: 'Controle financeiro, estoque e operações da sua empresa em um só lugar. Feito para PMEs que precisam de visibilidade sem complexidade.',
    features: ['Financeiro e fiscal', 'Estoque e compras', 'Relatórios em tempo real', 'Multi-empresa'],
    status: 'Disponível',
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
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
    title: 'VESK Escola',
    desc: 'Plataforma EAD para vender cursos, treinar equipes ou capacitar clientes. Do cadastro ao certificado, tudo integrado.',
    features: ['Matrículas e turmas', 'Portal do aluno', 'Comunicação com pais', 'Boletim e frequência'],
    status: 'Disponível',
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
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
