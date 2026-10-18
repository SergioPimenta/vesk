/**
 * Pré-renderiza as páginas públicas depois do `vite build`.
 *
 * Para cada rota indexável, gera `dist/<rota>.html` (e `dist/index.html` para a home) com o
 * conteúdo já renderizado, título, descrição, canonical, Open Graph e JSON-LD da página.
 * No navegador, o React "hidrata" esse HTML em vez de montar tudo do zero.
 */
import { readFileSync, writeFileSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { prerenderRoutes, render, getHead } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);

const basename = (process.env.VITE_BASE_URL || '/').replace(/\/$/, '') || '/';
const template = readFileSync(join(distDir, 'index.html'), 'utf8');

const escapeAttr = (value) => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escapeText = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function setMeta(html, attr, key, content) {
  const re = new RegExp(`<meta ${attr}="${key}" content="[^"]*"\\s*/?>`);
  const tag = `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`;
  if (!re.test(html)) throw new Error(`Meta ${attr}="${key}" não encontrada em index.html`);
  return html.replace(re, tag);
}

function buildPage({ page, path }) {
  const head = getHead(page);
  const location = basename === '/' ? path : `${basename}${path === '/' ? '' : path}`;
  const appHtml = render(location, basename);

  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(head.title)}</title>`);
  html = setMeta(html, 'name', 'description', head.description);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${escapeAttr(head.canonical)}" />`);
  html = setMeta(html, 'property', 'og:url', head.canonical);
  html = setMeta(html, 'property', 'og:title', head.ogTitle);
  html = setMeta(html, 'property', 'og:description', head.ogDescription);
  html = setMeta(html, 'property', 'og:image', head.ogImage);
  html = setMeta(html, 'name', 'twitter:title', head.ogTitle);
  html = setMeta(html, 'name', 'twitter:description', head.ogDescription);
  html = setMeta(html, 'name', 'twitter:image', head.ogImage);

  if (head.schema) {
    // `<` escapado para o JSON nunca fechar a tag <script> antes da hora.
    const json = JSON.stringify(head.schema).replace(/</g, '\\u003c');
    html = html.replace('</head>', `  <script type="application/ld+json" id="vesk-page-schema">${json}</script>\n</head>`);
  }

  if (!html.includes('<div id="root"></div>')) throw new Error('Contêiner #root não encontrado em index.html');
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root" data-prerendered-path="${escapeAttr(location)}">${appHtml}</div>`,
  );

  const file = path === '/' ? 'index.html' : `${path.replace(/^\//, '')}.html`;
  writeFileSync(join(distDir, file), html, 'utf8');
  return file;
}

// Shell vazio do app para rotas não pré-renderizadas (obrigado, login, 404): é o destino do
// rewrite de SPA no vercel.json, para nunca servir a home renderizada numa URL que não é a home.
writeFileSync(join(distDir, 'app.html'), template, 'utf8');

const files = prerenderRoutes.map(buildPage);
rmSync(ssrDir, { recursive: true, force: true });
console.log(`Pré-renderizadas ${files.length} páginas: ${files.join(', ')}`);
