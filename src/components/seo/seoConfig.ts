import { SITE_NAME, SITE_URL } from '../../lib/site';

export type SeoPageKey =
  | 'home'
  | 'sobre'
  | 'servicos'
  | 'criacaoDeSites'
  | 'produtos'
  | 'portfolio'
  | 'contato'
  | 'obrigado'
  | 'privacidade'
  | 'termos'
  | 'login';

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
    title: 'Criação de Sites em Curitiba | VESK Software House',
    description:
      'Criação de sites profissionais, landing pages e lojas virtuais em Curitiba. Sites rápidos, prontos para o Google e feitos para trazer clientes.',
    ogTitle: 'VESK | Criação de Sites e Sistemas em Curitiba',
    ogDescription:
      'Sites profissionais, lojas virtuais e sistemas sob medida para empresas de Curitiba e de todo o Brasil. Planos a partir de R$ 600.',
  },
  sobre: {
    path: '/sobre',
    title: 'Sobre a VESK | Software House em Curitiba: Tecnologia e Propósito',
    description:
      'Conheça a VESK, Software House em Curitiba. Equipe especializada em sistemas sob medida, metodologia ágil e parcerias de longo prazo com foco em resultado real.',
    ogTitle: 'Sobre a VESK: Software House em Curitiba',
    ogDescription:
      'Tecnologia, pessoas e propósito. Saiba como a VESK transforma negócios com software personalizado em Curitiba e em todo o Brasil.',
  },
  servicos: {
    path: '/servicos',
    title: 'Criação de Sites, Sistemas e E-commerce em Curitiba | VESK',
    description:
      'Criação de sites, lojas virtuais, sistemas web, CRM, APIs e integrações em Curitiba. Conheça os serviços da VESK Software House.',
    ogTitle: 'Serviços VESK: Criação de Sites e Sistemas em Curitiba',
    ogDescription:
      'Do site institucional ao sistema sob medida: soluções digitais completas para empresas de Curitiba e todo o Brasil.',
  },
  criacaoDeSites: {
    path: '/criacao-de-sites',
    title: 'Criação de Sites em Curitiba a partir de R$ 600 | VESK',
    description:
      'Criação de sites em Curitiba: sites profissionais, landing pages e lojas virtuais rápidos, responsivos e prontos para o Google. Planos a partir de R$ 600.',
    ogTitle: 'Criação de Sites em Curitiba | VESK Software House',
    ogDescription:
      'Sites profissionais, landing pages e lojas virtuais feitos em Curitiba, prontos para aparecer no Google e trazer clientes. Planos a partir de R$ 600.',
  },
  produtos: {
    path: '/produtos',
    title: 'Produtos VESK | Commerce, CRM e People: Software Próprio',
    description:
      'Conheça o VESK Commerce, VESK CRM e VESK People. Plataformas SaaS da VESK em Curitiba, prontas para vender online, organizar vendas e gerir pessoas.',
    ogTitle: 'Produtos VESK: Commerce, CRM e People',
    ogDescription:
      'Software próprio da VESK para PMEs: e-commerce, CRM com WhatsApp e gestão de pessoas. Implantação rápida com suporte dedicado.',
  },
  portfolio: {
    path: '/portfolio',
    title: 'Portfólio de Sites e Sistemas | VESK, Curitiba',
    description:
      'Veja sites institucionais, lojas virtuais e sistemas criados pela VESK para empresas de Curitiba e de todo o Brasil.',
    ogTitle: 'Portfólio VESK: Sites e Sistemas Criados em Curitiba',
    ogDescription:
      'Projetos reais de criação de sites, e-commerce e sistemas web desenvolvidos pela VESK Software House.',
  },
  contato: {
    path: '/contato',
    title: 'Orçamento para Criação de Site em Curitiba | VESK',
    description:
      'Solicite orçamento de site, landing page, loja virtual ou sistema com a VESK, em Curitiba. Atendimento para todo o Brasil por formulário ou WhatsApp.',
    ogTitle: 'Solicite seu orçamento | VESK Software House',
    ogDescription:
      'Conte sua ideia e a VESK ajuda a transformá-la em solução real: sites, lojas virtuais, aplicativos e sistemas personalizados.',
  },
  obrigado: {
    path: '/obrigado',
    title: 'Solicitação enviada | VESK Software House',
    description:
      'Recebemos sua solicitação. Nossa equipe irá analisar as informações e entrar em contato pelo canal informado.',
    noindex: true,
  },
  privacidade: {
    path: '/politica-de-privacidade',
    title: 'Políticas de Privacidade | VESK Software House',
    description:
      'Saiba como a VESK trata seus dados pessoais. Política de privacidade em conformidade com a LGPD para visitantes e clientes do site vesk.com.br.',
    ogTitle: 'Políticas de Privacidade: VESK',
    ogDescription:
      'Transparência no tratamento de dados pessoais pela VESK Software House em Curitiba.',
  },
  termos: {
    path: '/termos-de-uso',
    title: 'Termos de Uso | VESK Software House',
    description:
      'Termos de uso do site e serviços da VESK Software House. Condições de acesso, propriedade intelectual e responsabilidades.',
    ogTitle: 'Termos de Uso: VESK',
    ogDescription:
      'Condições de uso do site vesk.com.br e dos serviços oferecidos pela VESK em Curitiba.',
  },
  login: {
    path: '/login',
    title: `Login | ${SITE_NAME}`,
    description: 'Acesso restrito ao painel administrativo da VESK.',
    noindex: true,
  },
};

export const getCanonicalUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);
