/**
 * Entrada de renderização no servidor, usada só no build (scripts/prerender.mjs).
 * Gera o HTML de cada página pública para que buscadores e prévias de link (WhatsApp,
 * Instagram, LinkedIn) leiam conteúdo, título e descrição corretos sem depender de JavaScript.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { getCanonicalUrl, SEO_PAGES, type SeoPageKey } from './components/seo/seoConfig';
import { getOgImage, getPageSchema } from './components/seo/schemas';

/** Toda página indexável vira um HTML estático. */
export const prerenderRoutes = (Object.keys(SEO_PAGES) as SeoPageKey[])
  .filter((page) => !SEO_PAGES[page].noindex)
  .map((page) => ({ page, path: SEO_PAGES[page].path }));

export function render(location: string, basename: string): string {
  return renderToString(
    <StaticRouter location={location} basename={basename}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StaticRouter>,
  );
}

export function getHead(page: SeoPageKey) {
  const config = SEO_PAGES[page];
  return {
    title: config.title,
    description: config.description,
    canonical: getCanonicalUrl(config.path),
    ogTitle: config.ogTitle ?? config.title,
    ogDescription: config.ogDescription ?? config.description,
    ogImage: getOgImage(),
    schema: getPageSchema(page),
  };
}
