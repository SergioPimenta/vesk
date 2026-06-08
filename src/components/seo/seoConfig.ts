import { SITE_NAME, SITE_URL } from '../../lib/site';

export type SeoPageKey = 'home' | 'sobre' | 'servicos' | 'produtos' | 'portfolio' | 'contato' | 'login';

export type SeoConfig = {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  noindex?: boolean;
};

export const SEO_PAGES: Record<SeoPageKey, SeoConfig> = {
  home: {
    path: '/',
    title: 'VESK | Software House em Curitiba — Sistemas, CRM e E-commerce Sob Medida',
    description:
      'VESK é uma Software House em Curitiba. Desenvolvemos sistemas personalizados, CRMs, e-commerces e sites institucionais para empresas que querem crescer com tecnologia.',
    ogTitle: 'VESK | Software House em Curitiba — Sistemas e Tecnologia Sob Medida',
    ogDescription:
      'Desenvolvemos sistemas, CRMs, e-commerces e automações para empresas em Curitiba e todo o Brasil. Tecnologia que gera resultado real.',
  },
  sobre: {
    path: '/sobre',
    title: 'Sobre a VESK | Software House em Curitiba — Tecnologia e Propósito',
    description:
      'Conheça a VESK, Software House em Curitiba. Equipe especializada em sistemas sob medida, metodologia ágil e parcerias de longo prazo com foco em resultado real.',
    ogTitle: 'Sobre a VESK — Software House em Curitiba',
    ogDescription:
      'Tecnologia, pessoas e propósito. Saiba como a VESK transforma negócios com software personalizado em Curitiba e em todo o Brasil.',
  },
  servicos: {
    path: '/servicos',
    title: 'Serviços de Desenvolvimento de Software | VESK — Curitiba',
    description:
      'Sistemas web, e-commerce, CRM, APIs e integrações sob medida. A VESK em Curitiba entrega software personalizado com foco em performance, escala e resultado.',
    ogTitle: 'Serviços VESK — Desenvolvimento de Software em Curitiba',
    ogDescription:
      'Do sistema corporativo ao e-commerce: soluções digitais completas desenvolvidas pela VESK para empresas em Curitiba e todo o Brasil.',
  },
  produtos: {
    path: '/produtos',
    title: 'Produtos VESK | CRM, Gestão e Plataforma EAD — Software Próprio',
    description:
      'Conheça o VESK CRM, VESK Gestão e VESK Escola. Plataformas SaaS da VESK em Curitiba, prontas para simplificar gestão e acelerar resultados.',
    ogTitle: 'Produtos VESK — CRM, Gestão e EAD',
    ogDescription:
      'Software próprio da VESK para PMEs: CRM com WhatsApp, gestão empresarial e plataforma EAD. Implantação rápida com suporte dedicado.',
  },
  portfolio: {
    path: '/portfolio',
    title: 'Portfólio de Projetos | VESK Software House — Curitiba',
    description:
      'Cases reais de e-commerce, sistemas web e plataformas corporativas desenvolvidos pela VESK para empresas em Curitiba e em todo o Brasil.',
    ogTitle: 'Portfólio VESK — Projetos que Geram Resultados',
    ogDescription:
      'Veja projetos entregues pela VESK: e-commerce, sistemas corporativos e plataformas digitais com impacto mensurável nos negócios.',
  },
  contato: {
    path: '/contato',
    title: 'Contato | VESK Software House — Curitiba, PR',
    description:
      'Fale com a VESK em Curitiba. Solicite orçamento de sistemas, CRM ou e-commerce. Resposta em até 2 horas úteis via formulário ou WhatsApp.',
    ogTitle: 'Contato VESK — Software House em Curitiba',
    ogDescription:
      'Entre em contato com a VESK. Especialistas em software sob medida em Curitiba. Sem compromisso, resposta rápida.',
  },
  login: {
    path: '/login',
    title: `Login | ${SITE_NAME}`,
    description: 'Acesso restrito ao painel administrativo da VESK.',
    noindex: true,
  },
};

export const getCanonicalUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);
