export type PortfolioCategory = 'Todos' | 'E-commerce' | 'Sistema Web' | 'Sistema' | 'Website';

export const portfolioCategories: PortfolioCategory[] = [
  'Todos',
  'Website',
];

export const portfolioItems = [
  {
    num: '01',
    gradient: 'from-[#0d1b2a] to-[#1b263b]',
    thumbColor: 'text-vesk-border',
    image: '/assets/portfolio/almeida-pimenta.png',
    tag: 'Website' as const,
    name: 'Almeida Pimenta Advogados',
    sub: 'Advocacia com excelência',
    desc: 'Site institucional para advocacia empresarial, com foco em captação de clientes e presença digital premium.',
    year: '2025',
  },
  {
    num: '02',
    gradient: 'from-[#0d1b2a] to-[#1b263b]',
    thumbColor: 'text-vesk-border',
    image: '/assets/portfolio/tagflow.png',
    tag: 'Website' as const,
    name: 'TagFlow Tecnologia',
    sub: 'Automação inteligente',
    desc: 'Website institucional de soluções em AIDC para varejo, indústria, logística e saúde, com geração de orçamentos.',
    year: '2025',
  },
  {
    num: '03',
    gradient: 'from-[#1a1a1a] to-[#0a0a0a]',
    thumbColor: 'text-vesk-border',
    image: '/assets/portfolio/glayson-moreira.png',
    tag: 'Website' as const,
    name: 'Glayson Moreira Advogado',
    sub: 'Advocacia especializada',
    desc: 'Site institucional elegante para escritório de advocacia, destacando áreas de atuação e canais de contato.',
    year: '2025',
  },
  {
    num: '04',
    gradient: 'from-[#1a1a2e] to-[#0d0d1a]',
    thumbColor: 'text-vesk-border',
    image: '/assets/portfolio/lyricfill.png',
    tag: 'Website' as const,
    name: 'LyricFill',
    sub: 'Aprenda inglês cantando',
    desc: 'Plataforma gamificada para aprender inglês com músicas reais do YouTube e explicações por IA.',
    year: '2025',
  },
] as const;

export const portfolioStats = [
  { value: '50', suffix: '+', label: 'Projetos entregues' },
  { value: '12', suffix: '+', label: 'Segmentos atendidos' },
  { value: '98', suffix: '%', label: 'Taxa de satisfação', small: true },
  { value: '4', suffix: ' anos', label: 'Média de parceria' },
] as const;
