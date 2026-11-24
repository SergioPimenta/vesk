import { useEffect, useMemo } from 'react';
import { postImage, postPath, type BlogPost } from '../blog/blogData';
import { SITE_URL } from '../../lib/site';
import { getCanonicalUrl, SEO_PAGES, type SeoPageKey } from './seoConfig';
import { getOgImage, getPageSchema, getPostSchema } from './schemas';

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

export type SeoHead = {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: 'website' | 'article';
  noindex?: boolean;
  schema: Record<string, unknown> | null;
};

export const pageHead = (page: SeoPageKey): SeoHead => {
  const config = SEO_PAGES[page];
  return {
    title: config.title,
    description: config.description,
    canonical: getCanonicalUrl(config.path),
    ogTitle: config.ogTitle ?? config.title,
    ogDescription: config.ogDescription ?? config.description,
    ogImage: getOgImage(),
    ogType: 'website',
    noindex: config.noindex,
    schema: getPageSchema(page),
  };
};

export const postHead = (post: BlogPost): SeoHead => {
  const description = post.seoDescription ?? post.excerpt;
  return {
    title: post.seoTitle ?? `${post.title} | Blog VESK`,
    description,
    canonical: getCanonicalUrl(postPath(post)),
    ogTitle: post.title,
    ogDescription: post.excerpt,
    ogImage: `${SITE_URL}${postImage(post)}`,
    ogType: 'article',
    schema: getPostSchema(post),
  };
};

/** Aplica título, meta tags, canonical e JSON-LD no `<head>` (navegação client-side). */
const useSeoHead = (head: SeoHead) => {
  useEffect(() => {
    document.title = head.title;
    setMeta('description', head.description);
    setCanonical(head.canonical);
    setRobots(head.noindex);

    setMeta('og:type', head.ogType, 'property');
    setMeta('og:url', head.canonical, 'property');
    setMeta('og:title', head.ogTitle, 'property');
    setMeta('og:description', head.ogDescription, 'property');
    setMeta('og:image', head.ogImage, 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', head.ogTitle);
    setMeta('twitter:description', head.ogDescription);
    setMeta('twitter:image', head.ogImage);

    document.getElementById(SCHEMA_ID)?.remove();
    if (head.schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = SCHEMA_ID;
      script.textContent = JSON.stringify(head.schema);
      document.body.appendChild(script);
    }

    return () => {
      document.getElementById(SCHEMA_ID)?.remove();
    };
  }, [head]);
};

export const PageSeo = ({ page }: { page: SeoPageKey }) => {
  const head = useMemo(() => pageHead(page), [page]);
  useSeoHead(head);
  return null;
};

export const PostSeo = ({ post }: { post: BlogPost }) => {
  const head = useMemo(() => postHead(post), [post]);
  useSeoHead(head);
  return null;
};
