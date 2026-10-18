import { contactFaqs } from '../contact/contactData';
import { websiteFaqs } from '../websites/websitesData';
import { lowestPlanPrice, plans } from '../../lib/plans';
import { products } from '../products/productsData';
import { services } from '../services/servicesData';
import { OG_IMAGE, SITE_NAME, SITE_URL, SOCIAL_LINKS } from '../../lib/site';
import type { SeoPageKey } from './seoConfig';
import { getCanonicalUrl } from './seoConfig';

const businessRef = { '@id': `${SITE_URL}/#business` };

const localBusiness = {
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: 'VESK',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo-mark.svg`,
  image: OG_IMAGE,
  description:
    'Software house em Curitiba especializada em criação de sites, landing pages, lojas virtuais, sistemas personalizados, CRM e automações.',
  telephone: '+55-41-9690-2905',
  email: 'comercial@vesk.com.br',
  priceRange: `A partir de R$ ${lowestPlanPrice}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    addressCountry: 'BR',
  },
  areaServed: [
    { '@type': 'City', name: 'Curitiba' },
    { '@type': 'AdministrativeArea', name: 'Região Metropolitana de Curitiba' },
    { '@type': 'Country', name: 'Brasil' },
  ],
  knowsAbout: ['Criação de sites', 'Landing pages', 'Lojas virtuais', 'E-commerce', 'Sistemas web', 'CRM', 'SEO'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-41-9690-2905',
    contactType: 'sales',
    availableLanguage: 'Portuguese',
    areaServed: 'BR',
  },
  sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.instagram],
};

const breadcrumb = (pageName: string, path: string) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: pageName, item: getCanonicalUrl(path) },
  ],
});

const webPage = (name: string, path: string, description: string) => ({
  '@type': 'WebPage',
  '@id': `${getCanonicalUrl(path)}#webpage`,
  url: getCanonicalUrl(path),
  name,
  description,
  isPartOf: businessRef,
  inLanguage: 'pt-BR',
});

export const getPageSchema = (page: SeoPageKey) => {
  const graph: Record<string, unknown>[] = [];

  switch (page) {
    case 'home':
      graph.push(localBusiness, {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: businessRef,
        inLanguage: 'pt-BR',
      });
      break;

    case 'sobre':
      graph.push(
        webPage(
          'Sobre a VESK',
          '/sobre',
          'Software House em Curitiba com foco em tecnologia, pessoas e propósito.',
        ),
        breadcrumb('Sobre', '/sobre'),
        {
          '@type': 'AboutPage',
          '@id': `${getCanonicalUrl('/sobre')}#about`,
          url: getCanonicalUrl('/sobre'),
          name: 'Sobre a VESK',
          mainEntity: businessRef,
        },
      );
      break;

    case 'servicos':
      graph.push(
        webPage(
          'Serviços VESK',
          '/servicos',
          'Desenvolvimento de sistemas, e-commerce, CRM e integrações em Curitiba.',
        ),
        breadcrumb('Serviços', '/servicos'),
        {
          '@type': 'ItemList',
          name: 'Serviços de desenvolvimento de software VESK',
          itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Service',
              name: service.title,
              description: service.desc,
              provider: businessRef,
              areaServed: { '@type': 'City', name: 'Curitiba' },
            },
          })),
        },
      );
      break;

    case 'criacaoDeSites':
      graph.push(
        localBusiness,
        webPage(
          'Criação de Sites em Curitiba',
          '/criacao-de-sites',
          'Criação de sites profissionais, landing pages e lojas virtuais em Curitiba.',
        ),
        breadcrumb('Criação de sites', '/criacao-de-sites'),
        {
          '@type': 'Service',
          '@id': `${getCanonicalUrl('/criacao-de-sites')}#service`,
          name: 'Criação de sites em Curitiba',
          serviceType: 'Criação de sites',
          description:
            'Criação de sites institucionais, landing pages e lojas virtuais responsivos, rápidos e otimizados para o Google.',
          provider: businessRef,
          areaServed: [
            { '@type': 'City', name: 'Curitiba' },
            { '@type': 'Country', name: 'Brasil' },
          ],
          offers: plans
            .filter((plan) => plan.amount)
            .map((plan) => ({
              '@type': 'Offer',
              name: plan.name,
              price: plan.amount,
              priceCurrency: 'BRL',
              description: plan.items.join(', '),
              seller: businessRef,
            })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: websiteFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        },
      );
      break;

    case 'produtos':
      graph.push(
        webPage('Produtos VESK', '/produtos', 'E-commerce, CRM e gestão de pessoas da VESK.'),
        breadcrumb('Produtos', '/produtos'),
        {
          '@type': 'ItemList',
          name: 'Produtos de software VESK',
          itemListElement: products.map((product, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'SoftwareApplication',
              name: product.title,
              description: product.desc,
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                seller: businessRef,
              },
            },
          })),
        },
      );
      break;

    case 'portfolio':
      graph.push(
        webPage(
          'Portfólio VESK',
          '/portfolio',
          'Cases de e-commerce, sistemas web e plataformas corporativas da VESK.',
        ),
        breadcrumb('Portfólio', '/portfolio'),
      );
      break;

    case 'contato':
      graph.push(
        {
          '@type': 'ContactPage',
          '@id': `${getCanonicalUrl('/contato')}#contact`,
          url: getCanonicalUrl('/contato'),
          name: 'Contato VESK',
          description: 'Entre em contato com a VESK Software House em Curitiba.',
          mainEntity: businessRef,
        },
        breadcrumb('Contato', '/contato'),
        {
          '@type': 'FAQPage',
          mainEntity: contactFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        },
      );
      break;

    case 'privacidade':
      graph.push(
        webPage(
          'Políticas de Privacidade VESK',
          '/politica-de-privacidade',
          'Política de privacidade e proteção de dados da VESK Software House.',
        ),
        breadcrumb('Políticas de Privacidade', '/politica-de-privacidade'),
      );
      break;

    case 'termos':
      graph.push(
        webPage(
          'Termos de Uso VESK',
          '/termos-de-uso',
          'Termos de uso do site e serviços da VESK Software House.',
        ),
        breadcrumb('Termos de Uso', '/termos-de-uso'),
      );
      break;

    default:
      return null;
  }

  return { '@context': 'https://schema.org', '@graph': graph };
};

export const getOgImage = () => OG_IMAGE;
