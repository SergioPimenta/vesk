/**
 * Conteúdo do blog. Cada artigo é uma lista de blocos tipados (sem Markdown em tempo de execução),
 * o que mantém o pré-render simples e o HTML previsível.
 *
 * Para publicar um artigo novo: acrescente um objeto em `posts` (o mais recente primeiro não é
 * obrigatório, a ordenação é por data). O build gera a página, o sitemap e o feed RSS sozinho.
 *
 * Texto inline aceita `**negrito**` e `[texto](/rota-ou-url)`.
 */

export type BlogCategory = 'Criação de sites' | 'SEO e Google' | 'E-commerce' | 'Vendas e CRM';

export const blogCategories: BlogCategory[] = ['Criação de sites', 'SEO e Google', 'E-commerce', 'Vendas e CRM'];

export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'callout'; title: string; text: string };

export type BlogPost = {
  slug: string;
  /** Texto alternativo da imagem de capa (`public/blog/<slug>.jpg`). */
  imageAlt: string;
  title: string;
  /** Resumo exibido nos cards e usado como meta description quando não há `seoDescription`. */
  excerpt: string;
  seoTitle?: string;
  seoDescription?: string;
  category: BlogCategory;
  /** AAAA-MM-DD */
  date: string;
  /** AAAA-MM-DD, quando o artigo foi revisado. */
  updated?: string;
  author: string;
  tags: string[];
  featured?: boolean;
  content: PostBlock[];
};

export const BLOG_TITLE = 'Blog VESK';
export const BLOG_DESCRIPTION =
  'Artigos da VESK sobre criação de sites, SEO, lojas virtuais e CRM: guias práticos para empresas que querem vender mais pela internet.';

export const posts: BlogPost[] = [
  {
    slug: 'quanto-custa-criar-um-site-profissional',
    imageAlt: 'Tablet exibindo um site em uma mesa de trabalho, ao lado de óculos, caneta e café',
    title: 'Quanto custa criar um site profissional? O que entra no preço',
    excerpt:
      'Entenda o que faz o valor de um site subir ou descer, como comparar orçamentos e quais custos aparecem depois da entrega.',
    seoTitle: 'Quanto custa criar um site profissional em 2026 | Blog VESK',
    seoDescription:
      'Descubra o que influencia o preço de um site profissional, como comparar orçamentos e quais custos recorrentes (domínio, hospedagem, manutenção) considerar antes de contratar.',
    category: 'Criação de sites',
    date: '2026-11-18',
    author: 'Equipe VESK',
    tags: ['preço de site', 'orçamento', 'site institucional'],
    featured: true,
    content: [
      {
        type: 'p',
        text: 'Quem pesquisa o preço de um site costuma encontrar de tudo: de ofertas muito baratas a propostas de dezenas de milhares de reais. A diferença não é aleatória. Ela vem do que está incluído, de quem executa o trabalho e do resultado que o site precisa entregar para o seu negócio.',
      },
      { type: 'h2', text: 'O que mais influencia o valor' },
      {
        type: 'ul',
        items: [
          '**Tipo de projeto:** uma landing page de uma única tela é bem diferente de um site institucional com várias páginas ou de uma loja virtual com catálogo e pagamento.',
          '**Design:** um layout feito sob medida para a sua marca dá mais trabalho do que a adaptação de um modelo pronto.',
          '**Conteúdo:** textos, fotos e vídeos. Se você já tem o material, o prazo e o custo caem; se precisa criar do zero, entram redação e produção.',
          '**Funcionalidades:** formulários integrados a um CRM, área do cliente, agendamento, integração com meios de pagamento, painel administrativo.',
          '**Otimização para o Google:** estrutura técnica, velocidade e páginas pensadas para busca fazem parte do trabalho, não são um extra.',
        ],
      },
      { type: 'h2', text: 'Custos que aparecem depois da entrega' },
      {
        type: 'p',
        text: 'O preço do desenvolvimento é só uma parte. Pergunte sempre o que é cobrado de forma recorrente para o site continuar no ar e funcionando bem.',
      },
      {
        type: 'ul',
        items: [
          'Registro de domínio (renovação anual).',
          'Hospedagem, que varia conforme o tráfego e o tipo de site.',
          'Manutenção e atualizações de segurança, quando o site usa plataformas que exigem isso.',
          'Alterações de conteúdo ou novas páginas após a entrega.',
        ],
      },
      { type: 'h2', text: 'Como comparar orçamentos sem cair em armadilhas' },
      {
        type: 'ol',
        items: [
          'Peça o escopo por escrito: quantas páginas, quais funcionalidades, quantas rodadas de ajuste.',
          'Confirme se o site é responsivo (funciona bem no celular) e se a otimização para busca está incluída.',
          'Veja se o código e o domínio ficam em seu nome, para você não ficar preso a um fornecedor.',
          'Pergunte pelo suporte após a entrega e por quanto tempo ele vale.',
          'Peça exemplos de projetos parecidos com o seu e veja se o site entregue é rápido de verdade.',
        ],
      },
      {
        type: 'callout',
        title: 'Barato demais costuma sair caro',
        text: 'Um site que demora para abrir, quebra no celular ou não aparece no Google não traz clientes. O custo real é o de contratar duas vezes. Compare o que está incluído, não só o número final.',
      },
      { type: 'h2', text: 'E o retorno?' },
      {
        type: 'p',
        text: 'Em vez de perguntar só "quanto custa", pergunte "quanto um novo cliente vale para mim". Se um único contrato fechado por mês já paga o investimento, a conta fica muito diferente. É por isso que o primeiro passo de um bom orçamento é entender o seu objetivo, não apenas listar páginas.',
      },
      {
        type: 'p',
        text: 'Quer ter uma referência dos formatos disponíveis? Veja os [planos da VESK](/planos) ou [peça um orçamento](/contato) descrevendo o que você precisa.',
      },
    ],
  },
  {
    slug: 'landing-page-ou-site-institucional',
    imageAlt: 'Pessoa navegando em um site institucional em um notebook sobre uma mesa de madeira',
    title: 'Landing page ou site institucional: qual escolher para o seu negócio?',
    excerpt:
      'Os dois formatos resolvem problemas diferentes. Veja quando uma página única basta e quando vale investir em um site completo.',
    seoTitle: 'Landing page ou site institucional: qual escolher? | Blog VESK',
    seoDescription:
      'Landing page ou site institucional? Entenda as diferenças, quando usar cada um e como decidir de acordo com o seu objetivo, o seu orçamento e o seu público.',
    category: 'Criação de sites',
    date: '2026-11-05',
    author: 'Equipe VESK',
    tags: ['landing page', 'site institucional', 'conversão'],
    content: [
      {
        type: 'p',
        text: 'Essa é uma das dúvidas mais comuns de quem está começando a vender online. A resposta depende de uma pergunta simples: o que você quer que o visitante faça quando chegar?',
      },
      { type: 'h2', text: 'O que é uma landing page' },
      {
        type: 'p',
        text: 'É uma página única, desenhada para levar o visitante a uma ação específica: pedir um orçamento, chamar no WhatsApp, baixar um material ou comprar um produto. Ela tira as distrações (menus longos, links para outras seções) e conduz a pessoa até o botão de ação.',
      },
      { type: 'h2', text: 'O que é um site institucional' },
      {
        type: 'p',
        text: 'É o cartão de visitas completo da empresa na internet. Tem várias páginas (início, serviços, sobre, contato, blog) e serve para apresentar a empresa, passar confiança e responder às dúvidas de quem está pesquisando antes de decidir.',
      },
      { type: 'h2', text: 'Quando a landing page é a melhor escolha' },
      {
        type: 'ul',
        items: [
          'Você vai divulgar um serviço ou promoção específica em anúncios (Google Ads, Instagram, Facebook).',
          'Quer validar uma ideia rapidamente, com um investimento menor.',
          'Sua oferta é simples e o cliente decide com poucas informações.',
          'Precisa medir com clareza quantos contatos cada campanha gera.',
        ],
      },
      { type: 'h2', text: 'Quando vale ter um site institucional' },
      {
        type: 'ul',
        items: [
          'Você tem vários serviços ou produtos que precisam de explicação.',
          'Seus clientes pesquisam a empresa antes de fechar (comum em serviços e vendas B2B).',
          'Quer aparecer no Google para diferentes buscas, cada uma com sua página.',
          'Precisa de um endereço sólido para o seu negócio, que sirva a longo prazo.',
        ],
      },
      {
        type: 'callout',
        title: 'Não precisa ser um ou outro',
        text: 'Muitas empresas têm um site institucional como base e landing pages específicas para cada campanha. Comece pelo formato que resolve o seu objetivo atual e evolua depois.',
      },
      { type: 'h2', text: 'Um roteiro rápido para decidir' },
      {
        type: 'ol',
        items: [
          'Defina uma única ação principal que você quer do visitante.',
          'Se uma página consegue levá-lo até ela, comece pela landing page.',
          'Se o visitante precisa conhecer a empresa, comparar serviços ou tirar dúvidas, vá de site institucional.',
          'Em ambos os casos, garanta que o site carregue rápido e funcione bem no celular.',
        ],
      },
      {
        type: 'p',
        text: 'Ainda em dúvida? Conte seu objetivo pelo [formulário de contato](/contato) e indicamos o formato mais indicado, sem compromisso. Se quiser ver como trabalhamos, conheça nossa página de [criação de sites](/criacao-de-sites).',
      },
    ],
  },
  {
    slug: 'seo-local-curitiba-aparecer-no-google',
    imageAlt: 'Celular mostrando uma pesquisa no Google',
    title: 'SEO local: como a sua empresa de Curitiba pode aparecer no Google',
    excerpt:
      'Perfil da empresa, páginas por serviço, avaliações e um site bem estruturado: o caminho prático para ser encontrado por clientes da sua região.',
    seoTitle: 'SEO local em Curitiba: como aparecer no Google | Blog VESK',
    seoDescription:
      'Guia prático de SEO local para empresas de Curitiba: Perfil da Empresa no Google, páginas por serviço, avaliações e dicas para ser encontrado por clientes da região.',
    category: 'SEO e Google',
    date: '2026-10-27',
    author: 'Equipe VESK',
    tags: ['SEO local', 'Google Meu Negócio', 'Curitiba'],
    content: [
      {
        type: 'p',
        text: 'Quando alguém pesquisa "dentista perto de mim" ou "criação de sites em Curitiba", o Google mostra primeiro as empresas que parecem mais relevantes e mais próximas. Aparecer nesse bloco é o objetivo do SEO local, e ele está ao alcance de negócios de qualquer tamanho.',
      },
      { type: 'h2', text: '1. Cuide do seu Perfil da Empresa no Google' },
      {
        type: 'p',
        text: 'O Perfil da Empresa (antigo Google Meu Negócio) é o cartão que aparece no mapa e na busca. Preencha tudo: nome, endereço ou área de atendimento, telefone, horário, categoria principal, serviços e fotos reais. Mantenha as informações idênticas às do seu site.',
      },
      { type: 'h2', text: '2. Tenha uma página para cada serviço' },
      {
        type: 'p',
        text: 'Uma única página falando de tudo dificilmente ranqueia bem para nenhuma busca específica. Crie uma página por serviço principal, com texto próprio, exemplos e um chamado claro para contato. Mencionar a cidade e a região de forma natural ajuda o Google a entender onde você atua.',
      },
      { type: 'h2', text: '3. Peça avaliações e responda a todas' },
      {
        type: 'p',
        text: 'Avaliações influenciam tanto o ranqueamento local quanto a decisão de quem está comparando. Peça a clientes satisfeitos logo após a entrega do serviço, facilite com um link direto e responda a todas, inclusive às críticas, com educação e objetividade.',
      },
      { type: 'h2', text: '4. Garanta uma base técnica sólida' },
      {
        type: 'ul',
        items: [
          'Site responsivo e rápido, principalmente no celular.',
          'Título e descrição únicos em cada página.',
          'Dados estruturados (schema) com nome, endereço, telefone e horário da empresa.',
          'Sitemap enviado ao Google Search Console.',
          'Endereço e telefone consistentes em todos os lugares onde a empresa aparece.',
        ],
      },
      { type: 'h2', text: '5. Produza conteúdo que responda às dúvidas dos clientes' },
      {
        type: 'p',
        text: 'Um blog com artigos que respondem às perguntas reais dos seus clientes atrai visitas qualificadas e mostra que você entende do assunto. Pense nas dúvidas que você ouve toda semana no atendimento: cada uma pode virar um artigo.',
      },
      {
        type: 'callout',
        title: 'SEO é consistência',
        text: 'Não existe atalho que funcione por muito tempo. Os resultados vêm de um site bem feito, informações corretas e conteúdo útil publicado com regularidade.',
      },
      {
        type: 'p',
        text: 'Todos os sites da VESK são entregues com a base técnica de SEO já configurada. Quer entender como isso se aplica ao seu negócio? [Fale com a gente](/contato).',
      },
    ],
  },
  {
    slug: 'site-lento-perde-clientes',
    imageAlt: 'Pessoa lendo um site em um tablet, com uma xícara de café ao lado',
    title: 'Site lento perde clientes: o que medir e como melhorar a velocidade',
    excerpt:
      'Velocidade afeta a experiência, as vendas e o Google. Veja as métricas que importam e as correções que mais fazem diferença.',
    seoTitle: 'Site lento perde clientes: como melhorar a velocidade | Blog VESK',
    seoDescription:
      'Entenda as Core Web Vitals (LCP, INP e CLS), como medir a velocidade do seu site e as melhorias que mais reduzem o tempo de carregamento.',
    category: 'SEO e Google',
    date: '2026-10-14',
    author: 'Equipe VESK',
    tags: ['velocidade', 'Core Web Vitals', 'performance'],
    content: [
      {
        type: 'p',
        text: 'Quem acessa um site pelo celular, em uma conexão que oscila, não espera. Se a página demora para mostrar algo útil, a pessoa volta para os resultados e clica no concorrente. Velocidade não é detalhe técnico: é parte da experiência e do resultado do site.',
      },
      { type: 'h2', text: 'As métricas que o Google acompanha' },
      {
        type: 'p',
        text: 'O Google resume a experiência de carregamento em três indicadores, chamados Core Web Vitals:',
      },
      {
        type: 'ul',
        items: [
          '**LCP (Largest Contentful Paint):** quanto tempo leva para o maior elemento da tela aparecer. O ideal é até 2,5 segundos.',
          '**INP (Interaction to Next Paint):** quão rápido a página responde a cliques e toques. O ideal é até 200 milissegundos.',
          '**CLS (Cumulative Layout Shift):** o quanto o layout "pula" enquanto carrega. O ideal é até 0,1.',
        ],
      },
      { type: 'h2', text: 'Como medir' },
      {
        type: 'p',
        text: 'Use o PageSpeed Insights, ferramenta gratuita do Google: informe o endereço e veja as notas para celular e computador, com a lista do que corrigir. Teste a página inicial e também as páginas que mais trazem visitas.',
      },
      { type: 'h2', text: 'O que mais pesa e como resolver' },
      {
        type: 'ol',
        items: [
          '**Imagens grandes demais:** use formatos modernos (WebP ou AVIF), redimensione para o tamanho real de exibição e carregue as de baixo da tela sob demanda (lazy loading).',
          '**Excesso de scripts de terceiros:** cada chat, pixel e widget adiciona peso. Mantenha só os que você realmente usa.',
          '**Fontes e CSS não otimizados:** limite o número de fontes e carregue apenas os pesos necessários.',
          '**Hospedagem fraca:** um servidor lento atrasa tudo. Prefira infraestrutura com CDN, que entrega o site a partir de um ponto próximo do visitante.',
          '**Plataformas inchadas:** temas e plugins em excesso deixam o site pesado. Um site feito sob medida costuma carregar só o necessário.',
        ],
      },
      {
        type: 'callout',
        title: 'Priorize o celular',
        text: 'A maior parte das visitas vem de smartphones. Se o site só foi testado no computador, é provável que a experiência real dos seus clientes seja pior do que você imagina.',
      },
      {
        type: 'p',
        text: 'Na VESK, velocidade e responsividade fazem parte de qualquer projeto desde o início. Se você quer uma análise do seu site atual, [chame a gente](/contato).',
      },
    ],
  },
  {
    slug: 'loja-virtual-checklist-antes-de-lancar',
    imageAlt: 'Notebook com ícone de carrinho de compras na tela, celular e cartões de crédito sobre a mesa',
    title: 'Loja virtual: checklist do que conferir antes de lançar',
    excerpt:
      'Catálogo, pagamento, frete, política de troca e pós-venda. Uma lista prática para abrir a loja sem surpresas.',
    seoTitle: 'Checklist para lançar uma loja virtual | Blog VESK',
    seoDescription:
      'Lista prática do que conferir antes de lançar sua loja virtual: catálogo, formas de pagamento, frete, políticas, SEO, segurança e acompanhamento de resultados.',
    category: 'E-commerce',
    date: '2026-09-30',
    author: 'Equipe VESK',
    tags: ['loja virtual', 'e-commerce', 'checklist'],
    content: [
      {
        type: 'p',
        text: 'Lançar uma loja virtual é mais do que cadastrar produtos. A experiência do cliente do primeiro clique até o pós-venda decide se ele volta. Use esta lista para revisar os pontos essenciais antes de colocar a loja no ar.',
      },
      { type: 'h2', text: 'Catálogo e páginas de produto' },
      {
        type: 'ul',
        items: [
          'Fotos nítidas, em mais de um ângulo, que carregam rápido.',
          'Descrições próprias, com medidas, materiais e informações que tiram dúvidas.',
          'Preços, variações (tamanho, cor) e estoque corretos.',
          'Título e descrição de cada produto pensados para a busca do Google.',
        ],
      },
      { type: 'h2', text: 'Pagamento e checkout' },
      {
        type: 'ul',
        items: [
          'Pix, cartão de crédito e boleto, que são as formas que o cliente brasileiro espera.',
          'Checkout curto, sem exigir cadastro longo antes da compra.',
          'Certificado de segurança (HTTPS) ativo em todas as páginas.',
          'Faça uma compra de teste completa, do carrinho ao e-mail de confirmação.',
        ],
      },
      { type: 'h2', text: 'Frete e entrega' },
      {
        type: 'ul',
        items: [
          'Cálculo de frete por CEP, mostrando prazo e valor antes de finalizar.',
          'Transportadoras ou serviços de envio já contratados e testados.',
          'Embalagem adequada e política clara para atrasos e extravios.',
        ],
      },
      { type: 'h2', text: 'Políticas e confiança' },
      {
        type: 'p',
        text: 'Deixe visíveis as políticas de troca e devolução, a política de privacidade (exigida pela LGPD) e os termos de uso. Mostre também canais de atendimento reais, como WhatsApp e e-mail, e os dados da empresa.',
      },
      { type: 'h2', text: 'Medição' },
      {
        type: 'p',
        text: 'Antes de investir em anúncios, instale as ferramentas de análise e configure eventos de compra. Sem medir, você não sabe de onde vêm as vendas nem onde os clientes desistem.',
      },
      {
        type: 'callout',
        title: 'Dica de lançamento',
        text: 'Peça para 3 ou 4 pessoas fora do projeto comprarem na loja, pelo celular. Elas encontram em minutos os problemas que a equipe já não enxerga mais.',
      },
      {
        type: 'p',
        text: 'A VESK desenvolve lojas virtuais e também oferece o VESK Commerce, plataforma própria para vender online. Conheça os [produtos](/produtos) ou [solicite um orçamento](/contato).',
      },
    ],
  },
  {
    slug: 'crm-com-whatsapp-organizar-vendas',
    imageAlt: 'Celular com aplicativos de mensagens e redes sociais sobre um teclado',
    title: 'CRM com WhatsApp: como organizar as vendas sem perder nenhum contato',
    excerpt:
      'Planilhas e conversas soltas fazem oportunidades se perderem. Veja como um CRM integrado ao WhatsApp organiza o funil e o acompanhamento.',
    seoTitle: 'CRM com WhatsApp: organize suas vendas | Blog VESK',
    seoDescription:
      'Saiba como um CRM integrado ao WhatsApp ajuda a organizar leads, acompanhar o funil de vendas e responder mais rápido, sem perder nenhum contato.',
    category: 'Vendas e CRM',
    date: '2026-09-16',
    author: 'Equipe VESK',
    tags: ['CRM', 'WhatsApp', 'funil de vendas'],
    content: [
      {
        type: 'p',
        text: 'Para muitas empresas brasileiras, o WhatsApp é o principal canal de vendas. O problema é que as conversas ficam espalhadas entre celulares e atendentes, sem histórico, sem lembrete de retorno e sem visão do que está em andamento. É aqui que um CRM faz diferença.',
      },
      { type: 'h2', text: 'O que é um CRM, na prática' },
      {
        type: 'p',
        text: 'CRM (Customer Relationship Management) é um sistema que reúne, em um só lugar, os contatos da empresa, o histórico de cada conversa e a etapa em que cada negociação está. Em vez de depender da memória de quem atende, a informação fica registrada e acessível para a equipe toda.',
      },
      { type: 'h2', text: 'Problemas que ele resolve' },
      {
        type: 'ul',
        items: [
          'Leads que chegam pelo site, por anúncios e pelo WhatsApp e ninguém sabe quem já foi respondido.',
          'Clientes que pediram orçamento e ficaram sem retorno por falta de lembrete.',
          'Falta de visão sobre quantas oportunidades existem em cada etapa e quanto elas valem.',
          'Troca de atendente e perda do histórico da conversa.',
        ],
      },
      { type: 'h2', text: 'Como montar um funil simples' },
      {
        type: 'ol',
        items: [
          '**Entrada:** todo novo contato é registrado automaticamente, venha de onde vier.',
          '**Qualificação:** a equipe confirma se há interesse, orçamento e prazo.',
          '**Proposta:** o orçamento é enviado e o prazo de retorno é agendado.',
          '**Negociação:** ajustes e dúvidas ficam registrados no histórico.',
          '**Fechamento:** ganho ou perdido, com o motivo anotado para aprender com cada caso.',
        ],
      },
      { type: 'h2', text: 'Por que integrar com o site' },
      {
        type: 'p',
        text: 'Quando os formulários do site e o botão de WhatsApp alimentam o CRM diretamente, nenhum contato depende de cópia manual. Você ainda descobre quais páginas e campanhas geram mais oportunidades.',
      },
      {
        type: 'callout',
        title: 'Comece pequeno',
        text: 'Você não precisa de dezenas de etapas e automações no primeiro dia. Um funil com poucas fases, usado de verdade por toda a equipe, vale mais do que um sistema complexo que ninguém atualiza.',
      },
      {
        type: 'p',
        text: 'O VESK CRM foi pensado para equipes comerciais que vendem pelo WhatsApp. Veja os detalhes na página de [produtos](/produtos) ou converse com a gente pelo [formulário de contato](/contato).',
      },
    ],
  },
  {
    slug: 'quanto-tempo-leva-para-criar-um-site',
    imageAlt: 'Equipe em uma mesa planejando um projeto, com cadernos, café e notebook',
    title: 'Quanto tempo leva para criar um site? Etapas e prazos de um projeto',
    excerpt:
      'Do briefing ao lançamento: o que acontece em cada fase, o que pode atrasar o projeto e como você ajuda a entregar mais rápido.',
    seoTitle: 'Quanto tempo leva para criar um site? Etapas e prazos | Blog VESK',
    seoDescription:
      'Entenda as etapas da criação de um site, do briefing ao lançamento, o que influencia o prazo e como evitar atrasos no seu projeto.',
    category: 'Criação de sites',
    date: '2026-11-24',
    author: 'Equipe VESK',
    tags: ['prazo', 'processo', 'briefing'],
    content: [
      {
        type: 'p',
        text: 'Uma das primeiras perguntas de quem contrata um site é "para quando fica pronto?". A resposta honesta é que depende do tamanho do projeto, mas também de algo que costuma ser subestimado: a rapidez com que o conteúdo e as aprovações chegam. Veja o caminho típico de um projeto.',
      },
      { type: 'h2', text: 'As etapas de um projeto de site' },
      {
        type: 'ol',
        items: [
          '**Briefing:** conversa para entender o negócio, o público, os objetivos e os concorrentes. É a etapa que mais evita retrabalho depois.',
          '**Estrutura e conteúdo:** definição das páginas, dos textos e das imagens. Aqui nasce o mapa do site.',
          '**Design:** criação do visual, geralmente começando pela página inicial e depois pelas demais.',
          '**Desenvolvimento:** a programação do site, com formulários, integrações e responsividade para o celular.',
          '**Testes e ajustes:** revisão em diferentes aparelhos e navegadores, velocidade e configurações de SEO.',
          '**Publicação:** o site vai ao ar no domínio definitivo, com análise de resultados configurada.',
        ],
      },
      { type: 'h2', text: 'O que mais influencia o prazo' },
      {
        type: 'ul',
        items: [
          '**Tamanho do projeto:** uma landing page é bem mais rápida do que um site com várias páginas ou uma loja virtual.',
          '**Conteúdo pronto:** textos e fotos que chegam no começo aceleram tudo; conteúdo que chega no fim trava a entrega.',
          '**Velocidade das aprovações:** cada rodada de feedback que demora dias estica o cronograma.',
          '**Funcionalidades especiais:** integrações com sistemas, pagamento ou área restrita exigem mais desenvolvimento e testes.',
        ],
      },
      {
        type: 'callout',
        title: 'Como acelerar o seu projeto',
        text: 'Reúna logotipo, fotos e informações da empresa antes de começar, defina uma pessoa responsável por aprovar as etapas e concentre os ajustes em uma única rodada de feedback, em vez de pedidos espalhados.',
      },
      { type: 'h2', text: 'Desconfie de prazos extremos' },
      {
        type: 'p',
        text: 'Prometer um site completo em um dia costuma significar um modelo genérico, sem estratégia nem otimização. Por outro lado, um cronograma sem datas definidas também é sinal de alerta. Peça sempre um calendário com as entregas de cada etapa.',
      },
      {
        type: 'p',
        text: 'Quer saber o prazo do seu caso? [Descreva o projeto](/contato) e responderemos com um cronograma. Se ainda está decidindo o formato, leia também sobre [landing page ou site institucional](/blog/landing-page-ou-site-institucional).',
      },
    ],
  },
  {
    slug: 'medir-resultados-do-site-google-analytics',
    imageAlt: 'Tablet com painel de métricas de acesso e relatórios impressos sobre uma mesa',
    title: 'Como medir os resultados do seu site: métricas que realmente importam',
    excerpt:
      'Visitas sozinhas não pagam as contas. Veja o que acompanhar no Google Analytics e no Search Console para saber se o site traz clientes.',
    seoTitle: 'Como medir os resultados do site com Google Analytics | Blog VESK',
    seoDescription:
      'Saiba quais métricas acompanhar no Google Analytics e no Search Console, como configurar conversões e como transformar números em decisões para o seu site.',
    category: 'SEO e Google',
    date: '2026-11-24',
    author: 'Equipe VESK',
    tags: ['Google Analytics', 'Search Console', 'conversões'],
    content: [
      {
        type: 'p',
        text: 'Ter um site no ar é só o começo. Para saber se ele cumpre o papel de trazer clientes, você precisa medir. O problema é que as ferramentas mostram dezenas de números, e a maioria não ajuda a decidir nada. Comece pelos poucos que respondem a perguntas de negócio.',
      },
      { type: 'h2', text: 'As duas ferramentas gratuitas essenciais' },
      {
        type: 'ul',
        items: [
          '**Google Analytics:** mostra quem visita o site, de onde vem e o que faz lá dentro.',
          '**Google Search Console:** mostra como o site aparece na busca: quais termos geram impressões e cliques e se há erros técnicos.',
        ],
      },
      { type: 'h2', text: 'Métricas que valem a atenção' },
      {
        type: 'ol',
        items: [
          '**Conversões:** quantas pessoas pediram orçamento, clicaram no WhatsApp ou compraram. É o número mais importante.',
          '**Origem do tráfego:** busca orgânica, anúncios, redes sociais ou acesso direto. Indica onde vale investir.',
          '**Páginas mais acessadas:** mostram o que o público procura e quais páginas merecem mais cuidado.',
          '**Dispositivo:** quanto vem de celular e como esse público se comporta.',
          '**Termos de busca (Search Console):** as consultas que já levam gente ao site e as que estão perto de dar resultado.',
        ],
      },
      { type: 'h2', text: 'Configure as conversões' },
      {
        type: 'p',
        text: 'Sem configuração, o Analytics só conta visitas. Defina como "evento principal" as ações que geram valor para o negócio: envio de formulário, clique no botão de WhatsApp, clique no telefone e compras. Assim você enxerga o que cada canal e cada página realmente entrega.',
      },
      {
        type: 'callout',
        title: 'Privacidade e consentimento',
        text: 'Ferramentas de medição coletam dados pessoais. Informe isso na política de privacidade do site e respeite a LGPD e as regras de consentimento aplicáveis ao seu caso.',
      },
      { type: 'h2', text: 'Transforme números em decisões' },
      {
        type: 'ul',
        items: [
          'Uma página muito visitada e que não converte precisa de um chamado para ação mais claro.',
          'Se quase todo o tráfego vem do celular e a conversão é baixa, revise a experiência mobile.',
          'Termos com muitas impressões e poucos cliques pedem título e descrição melhores.',
        ],
      },
      {
        type: 'p',
        text: 'Reserve meia hora por mês para revisar esses indicadores e anotar uma ação para o mês seguinte. Veja também como a VESK trabalha na página de [criação de sites](/criacao-de-sites).',
      },
    ],
  },
  {
    slug: 'loja-propria-ou-marketplace',
    imageAlt: 'Caixa de papelão escrita Online Shopping sobre um notebook',
    title: 'Loja própria ou marketplace: onde vender na internet?',
    excerpt:
      'Marketplaces trazem visitas, a loja própria traz autonomia. Compare custos, controle e relacionamento com o cliente antes de escolher.',
    seoTitle: 'Loja própria ou marketplace: qual escolher? | Blog VESK',
    seoDescription:
      'Compare loja virtual própria e marketplaces: custos, controle da marca, relacionamento com o cliente e quando vale combinar os dois canais.',
    category: 'E-commerce',
    date: '2026-11-24',
    author: 'Equipe VESK',
    tags: ['marketplace', 'loja virtual', 'e-commerce'],
    content: [
      {
        type: 'p',
        text: 'Quem decide vender online logo se pergunta: abrir uma loja própria ou anunciar em marketplaces? Não existe resposta única. Cada caminho tem vantagens e limites, e muitos negócios acabam usando os dois de forma complementar.',
      },
      { type: 'h2', text: 'Vantagens do marketplace' },
      {
        type: 'ul',
        items: [
          'Audiência que já está pronta para comprar, sem precisar atrair visitas do zero.',
          'Estrutura de pagamento e logística já organizada.',
          'Início rápido, com investimento inicial menor.',
        ],
      },
      { type: 'h2', text: 'Limites do marketplace' },
      {
        type: 'ul',
        items: [
          '**Comissões e taxas** que reduzem a margem em cada venda.',
          '**Concorrência direta:** seu produto aparece ao lado de ofertas parecidas, e o preço vira o principal argumento.',
          '**Pouco controle:** regras, tarifas e posicionamento podem mudar sem aviso.',
          '**Cliente que não é seu:** em geral você não constrói uma base própria de contatos.',
        ],
      },
      { type: 'h2', text: 'Vantagens da loja própria' },
      {
        type: 'ul',
        items: [
          'Controle total da marca, da experiência de compra e das políticas.',
          'Relacionamento direto com o cliente, com dados para recompra e campanhas.',
          'Margem maior por venda, sem comissão de terceiros.',
          'Um ativo da sua empresa, que cresce com o tempo.',
        ],
      },
      { type: 'h2', text: 'O desafio da loja própria' },
      {
        type: 'p',
        text: 'A loja própria exige trazer o tráfego: SEO, anúncios, redes sociais e e-mail. Esse trabalho leva tempo, por isso o investimento em divulgação precisa entrar na conta desde o início.',
      },
      { type: 'h2', text: 'Como decidir' },
      {
        type: 'ol',
        items: [
          'Se você está testando um produto, o marketplace valida a demanda rapidamente.',
          'Se você tem marca, diferenciais e clientes recorrentes, a loja própria compensa mais.',
          'Se sua margem é apertada, calcule as comissões antes de entrar em qualquer canal.',
          'Na dúvida, comece em um marketplace e use as vendas para financiar a loja própria.',
        ],
      },
      {
        type: 'callout',
        title: 'Os dois podem conviver',
        text: 'Um bom caminho é usar o marketplace para ganhar alcance e incentivar o cliente a voltar pela sua loja, com benefícios exclusivos, atendimento próximo e uma boa experiência de compra.',
      },
      {
        type: 'p',
        text: 'Antes de lançar, use nosso [checklist da loja virtual](/blog/loja-virtual-checklist-antes-de-lancar). Para um projeto sob medida, [fale com a VESK](/contato).',
      },
    ],
  },
  {
    slug: 'atender-leads-no-whatsapp-boas-praticas',
    imageAlt: 'Mão segurando um celular com o aplicativo de mensagens aberto',
    title: 'Atender leads no WhatsApp: 6 boas práticas para não perder vendas',
    excerpt:
      'Quem responde primeiro, e bem, costuma fechar. Veja práticas simples de atendimento para transformar conversas em clientes.',
    seoTitle: 'Atendimento no WhatsApp: 6 boas práticas para vender mais | Blog VESK',
    seoDescription:
      'Boas práticas para atender leads no WhatsApp: tempo de resposta, mensagem inicial, qualificação, follow-up e registro das conversas em um CRM.',
    category: 'Vendas e CRM',
    date: '2026-11-24',
    author: 'Equipe VESK',
    tags: ['WhatsApp', 'atendimento', 'leads'],
    content: [
      {
        type: 'p',
        text: 'O contato chegou pelo site ou pelo anúncio e está no seu WhatsApp. A partir daí, a venda depende de como você conduz a conversa. Estas práticas são simples e fazem diferença no resultado.',
      },
      { type: 'h2', text: '1. Responda rápido' },
      {
        type: 'p',
        text: 'Quem pede um orçamento costuma procurar mais de uma empresa ao mesmo tempo. Responder em minutos, e não em horas, aumenta muito a chance de ser a empresa escolhida. Fora do horário, uma mensagem automática informando quando haverá retorno já ajuda.',
      },
      { type: 'h2', text: '2. Comece com uma mensagem clara' },
      {
        type: 'p',
        text: 'Apresente-se, cite o motivo do contato e faça uma pergunta que avance a conversa. Evite textos longos logo de início e mensagens genéricas que parecem copiadas.',
      },
      { type: 'h2', text: '3. Qualifique antes de propor' },
      {
        type: 'p',
        text: 'Entenda o que a pessoa precisa, o prazo e o investimento previsto. Poucas perguntas bem escolhidas evitam propostas que não fazem sentido e economizam o tempo da equipe.',
      },
      { type: 'h2', text: '4. Combine o próximo passo' },
      {
        type: 'p',
        text: 'Toda conversa deve terminar com um passo definido: "envio a proposta amanhã até as 14h" ou "retorno na sexta para saber da sua decisão". Isso cria compromisso e evita o sumiço.',
      },
      { type: 'h2', text: '5. Faça follow-up sem ser insistente' },
      {
        type: 'ul',
        items: [
          'Retome a conversa com algo útil, como uma dúvida respondida ou um exemplo de projeto.',
          'Espaçe os contatos e respeite a decisão da pessoa.',
          'Registre o motivo quando o negócio não for adiante.',
        ],
      },
      { type: 'h2', text: '6. Registre tudo em um só lugar' },
      {
        type: 'p',
        text: 'Conversas que ficam apenas no celular de um atendente se perdem quando ele sai de férias ou deixa a empresa. Um CRM guarda o histórico, os lembretes e a etapa de cada negociação.',
      },
      {
        type: 'callout',
        title: 'Respeite a privacidade',
        text: 'Use o contato apenas para o assunto que a pessoa pediu e ofereça a opção de parar de receber mensagens. Isso protege a reputação da empresa e atende à LGPD.',
      },
      {
        type: 'p',
        text: 'Para organizar esse processo, leia [CRM com WhatsApp: como organizar as vendas](/blog/crm-com-whatsapp-organizar-vendas) e conheça o [VESK CRM](/produtos).',
      },
    ],
  },
];

/* ── Helpers ─────────────────────────────────────────────────────────────── */

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug: string | undefined) => posts.find((post) => post.slug === slug);

/** Capa do artigo: `public/blog/<slug>.jpg`. */
export const postImage = (post: Pick<BlogPost, 'slug'>) => `/blog/${post.slug}.jpg`;

export const postPath = (post: Pick<BlogPost, 'slug'>) => `/blog/${post.slug}`;

/** Remove a sintaxe inline (`**` e links) para uso em texto puro: contagem de palavras, JSON-LD. */
export const stripInline = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '');

export const blockText = (block: PostBlock): string =>
  block.type === 'ul' || block.type === 'ol'
    ? block.items.map(stripInline).join(' ')
    : block.type === 'callout'
      ? `${block.title}. ${stripInline(block.text)}`
      : stripInline(block.text);

export const postText = (post: BlogPost) => post.content.map(blockText).join(' ');

export const wordCount = (post: BlogPost) => postText(post).split(/\s+/).filter(Boolean).length;

/** Tempo de leitura em minutos (~200 palavras por minuto), mínimo de 1. */
export const readingTime = (post: BlogPost) => Math.max(1, Math.round(wordCount(post) / 200));

export const slugify = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const dateFormatter = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** Formata "AAAA-MM-DD" de forma idêntica no servidor (pré-render) e no navegador. */
export const formatDate = (iso: string) => dateFormatter.format(new Date(`${iso}T12:00:00Z`));

/** Artigos relacionados: mesma categoria primeiro, depois tags em comum, depois os mais recentes. */
export const getRelatedPosts = (post: BlogPost, limit = 3) =>
  sortedPosts
    .filter((other) => other.slug !== post.slug)
    .map((other) => ({
      other,
      score:
        (other.category === post.category ? 10 : 0) + other.tags.filter((tag) => post.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ other }) => other);
