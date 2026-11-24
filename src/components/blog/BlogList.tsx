import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { CircleArrow, MonoTag, SectionTitle } from '../home/ui';
import { cn } from '../../lib/cn';
import { blogCategories, postPath, postText, sortedPosts, type BlogCategory } from './blogData';
import { PostCard } from './PostCard';
import { PostCover } from './PostCover';
import { PostMeta } from './PostMeta';

type Filter = BlogCategory | 'Todos';

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

const chip = (active: boolean) =>
  cn(
    'rounded-lg border px-4 py-2 font-mono text-[12px] tracking-[0.04em] transition-colors',
    active
      ? 'border-vesk-orange bg-vesk-orange-dim text-vesk-orange'
      : 'border-vesk-border bg-vesk-dark-2 text-vesk-muted hover:border-vesk-border-warm hover:text-vesk-surface',
  );

export const BlogList = () => {
  const [category, setCategory] = useState<Filter>('Todos');
  const [query, setQuery] = useState('');

  const featured = sortedPosts.find((post) => post.featured) ?? sortedPosts[0];
  const filtering = category !== 'Todos' || query.trim() !== '';

  const results = useMemo(() => {
    const term = normalize(query.trim());
    return sortedPosts.filter((post) => {
      if (category !== 'Todos' && post.category !== category) return false;
      if (!term) return true;
      return normalize(`${post.title} ${post.excerpt} ${post.tags.join(' ')} ${postText(post)}`).includes(term);
    });
  }, [category, query]);

  // Sem filtro, o destaque ganha um bloco próprio e a grade mostra os demais.
  const gridPosts = filtering ? results : results.filter((post) => post.slug !== featured.slug);

  return (
    <section className="bg-vesk-black page-px pb-16 md:pb-24 lg:pb-[100px]">
      {!filtering && (
        <article className="group relative mb-16 grid overflow-hidden rounded-2xl border border-vesk-border bg-vesk-dark-2 transition-[border-color,box-shadow] duration-300 hover:border-vesk-border-warm hover:shadow-[0_30px_60px_-24px_rgba(0,0,0,0.75)] lg:grid-cols-[1.1fr_1fr]">
          <PostCover post={featured} priority className="aspect-auto min-h-[220px] lg:min-h-[360px]" />
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <MonoTag className="mb-4 text-vesk-orange-light">Em destaque · {featured.category}</MonoTag>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] font-normal tracking-[-0.015em] text-balance text-vesk-surface">
              <Link
                to={postPath(featured)}
                className="no-underline after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-vesk-orange"
              >
                {featured.title}
              </Link>
            </h2>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-vesk-mid">{featured.excerpt}</p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <PostMeta post={featured} />
              <CircleArrow />
            </div>
          </div>
        </article>
      )}

      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle className="text-[clamp(1.75rem,3.2vw,2.25rem)]">
          {filtering ? 'Resultados' : 'Últimos artigos'}
        </SectionTitle>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
            {(['Todos', ...blogCategories] as Filter[]).map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={category === cat}
                onClick={() => setCategory(cat)}
                className={chip(category === cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <label className="relative block sm:w-60">
            <span className="sr-only">Buscar artigos</span>
            <Search
              size={16}
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-vesk-muted"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar artigos"
              autoComplete="off"
              className="h-[42px] w-full rounded-lg border border-vesk-border bg-vesk-dark-2 pr-3 pl-10 text-sm text-vesk-surface placeholder:text-vesk-muted focus:border-vesk-orange focus:outline-none"
            />
          </label>
        </div>
      </div>

      {gridPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-vesk-border px-6 py-16 text-center" role="status">
          <p className="font-display text-2xl text-vesk-surface">Nenhum artigo encontrado</p>
          <p className="mt-2 text-vesk-muted">Tente outra palavra ou volte para todas as categorias.</p>
          <button
            type="button"
            onClick={() => {
              setCategory('Todos');
              setQuery('');
            }}
            className="mt-6 text-sm font-medium text-vesk-orange hover:text-vesk-orange-light"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </section>
  );
};
