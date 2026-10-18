import { lowestPlanPrice } from '../../lib/plans';

const fromPrice = `R$ ${lowestPlanPrice.toLocaleString('pt-BR')}`;

export const siteTypes = [
  {
    title: 'Landing page',
    desc: 'Uma página única e direta, feita para campanhas, lançamentos e anúncios no Google e no Instagram. Ideal para transformar visitas em contatos.',
  },
  {
    title: 'Site institucional',
    desc: 'Apresente sua empresa, seus serviços e seus diferenciais com um site profissional, rápido e pronto para ser encontrado no Google.',
  },
  {
    title: 'Loja virtual',
    desc: 'E-commerce com catálogo, carrinho, pagamento online e gestão de pedidos, para vender pela internet todos os dias.',
  },
  {
    title: 'Site para profissionais',
    desc: 'Sites para advogados, clínicas, consultórios, escritórios e prestadores de serviço que precisam passar confiança e gerar agendamentos.',
  },
  {
    title: 'Redesign de site',
    desc: 'Seu site está lento, desatualizado ou não funciona bem no celular? Modernizamos o visual, a estrutura e o desempenho.',
  },
  {
    title: 'Site com sistema',
    desc: 'Quando o site precisa de área do cliente, agendamento, cardápio digital, pedidos ou integração com outros sistemas.',
  },
] as const;

export const included = [
  'Design exclusivo, criado para a sua marca (sem templates prontos)',
  'Layout responsivo, pensado primeiro para o celular',
  'Carregamento rápido, otimizado para os indicadores do Google',
  'SEO técnico: títulos, descrições, sitemap e dados estruturados',
  'Botão e links de WhatsApp para o cliente falar com você na hora',
  'Formulário de contato integrado ao seu atendimento',
  'Certificado de segurança (HTTPS)',
  'Orientação sobre domínio, hospedagem e publicação',
] as const;

export const websiteFaqs = [
  {
    q: 'Quanto custa criar um site em Curitiba?',
    a: `Na VESK, a criação de site começa em ${fromPrice} para uma landing page. Sites institucionais completos e lojas virtuais têm valores de referência na seção de planos, e o orçamento final é confirmado depois de entendermos o seu projeto.`,
  },
  {
    q: 'Quanto tempo leva para criar um site?',
    a: 'Depende do tamanho do site e das funcionalidades. Uma landing page é bem mais rápida que uma loja virtual, por exemplo. Depois da conversa inicial, apresentamos uma estimativa de prazo para o seu projeto.',
  },
  {
    q: 'O meu site vai aparecer no Google?',
    a: 'Todo site sai com a base técnica de SEO pronta: estrutura de títulos, descrições, sitemap, velocidade e versão para celular. A posição nas buscas também depende da concorrência e do conteúdo, e podemos orientar os próximos passos para melhorar o ranqueamento.',
  },
  {
    q: 'Vocês atendem apenas Curitiba?',
    a: 'A VESK é de Curitiba e atende empresas da cidade, da região metropolitana e de todo o Brasil. Todo o processo pode ser feito online.',
  },
  {
    q: 'O site vai funcionar bem no celular?',
    a: 'Sim. Todos os sites são responsivos e pensados primeiro para o celular, onde está a maior parte das visitas, principalmente de quem chega pelo Instagram.',
  },
  {
    q: 'Preciso ter domínio e hospedagem?',
    a: 'Não precisa ter nada pronto. Orientamos a escolha do domínio (como suaempresa.com.br) e da hospedagem e ajudamos a deixar tudo publicado.',
  },
  {
    q: 'Vocês fazem manutenção depois que o site fica pronto?',
    a: 'Sim. Oferecemos suporte e manutenção para manter o site atualizado, seguro e funcionando, além de evoluções quando o seu negócio precisar.',
  },
] as const;
