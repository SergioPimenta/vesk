import { useEffect } from 'react';

const SITE_URL = 'https://www.vesk.com.br';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'VESK Software House',
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo-mark.svg`,
      description:
        'Software House em Curitiba especializada em sistemas personalizados, CRM, e-commerce e automações para empresas.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        addressCountry: 'BR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-41-9980-2025',
        contactType: 'customer service',
        availableLanguage: 'Portuguese',
      },
      sameAs: ['https://www.linkedin.com/company/vesk', 'https://www.instagram.com/vesk'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'VESK Software House',
      inLanguage: 'pt-BR',
    },
  ],
};

export const HomeSeo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'vesk-home-schema';
    script.textContent = JSON.stringify(schema);
    document.body.appendChild(script);

    return () => {
      document.getElementById('vesk-home-schema')?.remove();
    };
  }, []);

  return null;
};
