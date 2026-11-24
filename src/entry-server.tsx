/**
 * Entrada de renderização no servidor, usada só no build (scripts/prerender.mjs).
 * Gera o HTML de cada página pública para que buscadores e prévias de link (WhatsApp,
 * Instagram, LinkedIn) leiam conteúdo, título e descrição corretos sem depender de JavaScript.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { SEO_PAGES, type SeoPageKey } from './components/seo/seoConfig';
import { pageHead, postHead } from './components/seo/PageSeo';
import { BLOG_DESCRIPTION, BLOG_TITLE, getPost, postPath, sortedPosts } from './components/blog/blogData';

/** Toda página indexável vira um HTML estático: páginas fixas e um HTML por artigo do blog. */
export const prerenderRoutes: { page?: SeoPageKey; slug?: string; path: string }[] = [
  ...(Object.keys(SEO_PAGES) as SeoPageKey[])
    .filter((page) => !SEO_PAGES[page].noindex)
    .map((page) => ({ page, path: SEO_PAGES[page].path })),
  ...sortedPosts.map((post) => ({ slug: post.slug, path: postPath(post) })),
];

/** Dados dos artigos para o sitemap e o feed RSS (gerados em scripts/prerender.mjs). */
export const blogFeed = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  posts: sortedPosts.map((post) => ({
    path: postPath(post),
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    updated: post.updated ?? post.date,
  })),
};

export function render(location: string, basename: string): string {
  return renderToString(
    <StaticRouter location={location} basename={basename}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StaticRouter>,
  );
}

export function getHead(route: { page?: SeoPageKey; slug?: string }) {
  const post = getPost(route.slug);
  const head = post ? postHead(post) : pageHead(route.page as SeoPageKey);
  return head;
}
