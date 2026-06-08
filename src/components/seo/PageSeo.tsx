import { useEffect } from 'react';
import { getCanonicalUrl, SEO_PAGES, type SeoPageKey } from './seoConfig';
import { getOgImage, getPageSchema } from './schemas';

const SCHEMA_ID = 'vesk-page-schema';

const setMeta = (key: string, content: string, attr: 'name' | 'property' = 'name') => {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href: string) => {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const setRobots = (noindex?: boolean) => {
  const existing = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (noindex) {
    if (!existing) {
      const el = document.createElement('meta');
      el.setAttribute('name', 'robots');
      document.head.appendChild(el);
      el.setAttribute('content', 'noindex, nofollow');
    } else {
      existing.setAttribute('content', 'noindex, nofollow');
    }
  } else {
    existing?.remove();
  }
};

type PageSeoProps = {
  page: SeoPageKey;
};

export const PageSeo = ({ page }: PageSeoProps) => {
  useEffect(() => {
    const config = SEO_PAGES[page];
    const canonical = getCanonicalUrl(config.path);
    const ogTitle = config.ogTitle ?? config.title;
    const ogDescription = config.ogDescription ?? config.description;
    const ogImage = getOgImage();

    document.title = config.title;
    setMeta('description', config.description);
    setCanonical(canonical);
    setRobots(config.noindex);

    setMeta('og:type', 'website', 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:title', ogTitle, 'property');
    setMeta('og:description', ogDescription, 'property');
    setMeta('og:image', ogImage, 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', ogTitle);
    setMeta('twitter:description', ogDescription);
    setMeta('twitter:image', ogImage);

    const schema = getPageSchema(page);
    const existingScript = document.getElementById(SCHEMA_ID);
    existingScript?.remove();

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = SCHEMA_ID;
      script.textContent = JSON.stringify(schema);
      document.body.appendChild(script);
    }

    return () => {
      document.getElementById(SCHEMA_ID)?.remove();
    };
  }, [page]);

  return null;
};
