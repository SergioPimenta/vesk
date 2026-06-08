import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');

/** URL pública do site. */
const siteUrl = (process.env.VITE_SITE_URL || 'https://www.vesk.com.br').replace(/\/$/, '');

const lastmod = new Date().toISOString().split('T')[0];

/** Páginas públicas indexáveis (rotas em App.tsx). */
const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/sobre', changefreq: 'monthly', priority: '0.8' },
  { path: '/servicos', changefreq: 'monthly', priority: '0.9' },
  { path: '/produtos', changefreq: 'monthly', priority: '0.9' },
  { path: '/portfolio', changefreq: 'monthly', priority: '0.8' },
  { path: '/contato', changefreq: 'monthly', priority: '0.8' },
  { path: '/politica-de-privacidade', changefreq: 'yearly', priority: '0.3' },
  { path: '/termos-de-uso', changefreq: 'yearly', priority: '0.3' },
];

const urlEntries = pages
  .map(({ path, changefreq, priority }) => {
    const loc = path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
writeFileSync(join(publicDir, 'robots.txt'), robots, 'utf8');

console.log(`Sitemap gerado: ${join(publicDir, 'sitemap.xml')}`);
console.log(`Robots gerado: ${join(publicDir, 'robots.txt')}`);
console.log(`Base URL: ${siteUrl}`);
