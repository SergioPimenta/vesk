import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { getPost, getRelatedPosts, formatDate } from '../components/blog/blogData';
import { PostCard } from '../components/blog/PostCard';
import { PostContent, headingsOf } from '../components/blog/PostContent';
import { PostCover } from '../components/blog/PostCover';
import { PostMeta } from '../components/blog/PostMeta';
import { ShareButtons } from '../components/blog/ShareButtons';
import { CtaBand } from '../components/home/CtaBand';
import { btnPrimaryClasses, MonoTag, pageHeroTitleClass } from '../components/home/ui';
import { ArrowIcon } from '../components/home/icons';
import { PublicLayout } from '../components/layout/PublicLayout';
import { PostSeo } from '../components/seo/PageSeo';
import { cn } from '../lib/cn';

const crumb = 'text-vesk-muted no-underline transition-colors hover:text-vesk-surface';

const PostNotFound = () => (
  <PublicLayout>
    <main className="page-px flex min-h-[70vh] flex-col items-center justify-center pt-32 pb-20 text-center">
      <MonoTag className="mb-5">Erro 404</MonoTag>
      <h1 className="font-display text-4xl text-vesk-surface">Artigo não encontrado</h1>
      <p className="mt-4 max-w-md text-vesk-muted">O endereço pode ter mudado ou o artigo foi removido.</p>
      <Link to="/blog" className={btnPrimaryClasses('mt-8')}>
        Ver todos os artigos
        <ArrowIcon />
      </Link>
    </main>
  </PublicLayout>
);

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug);

  if (!post) return <PostNotFound />;

  const headings = headingsOf(post.content);
  const related = getRelatedPosts(post);

  return (
    <PublicLayout>
      <PostSeo post={post} />
      <main>
        <header className="relative overflow-hidden page-px pt-28 pb-10 sm:pt-32 lg:pt-[140px]">
          <div
            className="pointer-events-none absolute -top-[220px] -right-[200px] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(210,122,68,0.08)_0%,transparent_70%)]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-[820px]">
            <nav aria-label="Você está em" className="mb-8 text-[13px]">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link to="/" className={crumb}>
                    Início
                  </Link>
                </li>
                <ChevronRight size={13} aria-hidden className="text-vesk-border" />
                <li>
                  <Link to="/blog" className={crumb}>
                    Blog
                  </Link>
                </li>
                <ChevronRight size={13} aria-hidden className="text-vesk-border" />
                <li aria-current="page" className="text-vesk-mid">
                  {post.category}
                </li>
              </ol>
            </nav>

            <MonoTag className="animate-fade-up mb-5">{post.category}</MonoTag>
            <h1 className={cn('animate-fade-up mb-6 [animation-delay:80ms]', pageHeroTitleClass, 'text-[clamp(2.2rem,4.4vw,3.5rem)]')}>
              {post.title}
            </h1>
            <p className="animate-fade-up mb-7 max-w-[60ch] text-lg leading-[1.7] font-light text-vesk-mid [animation-delay:160ms]">
              {post.excerpt}
            </p>
            <div className="animate-fade-up flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-vesk-border py-4 [animation-delay:240ms]">
              <span className="text-sm text-vesk-surface">Por {post.author}</span>
              <PostMeta post={post} />
              {post.updated && post.updated !== post.date && (
                <span className="text-[13px] text-vesk-muted">Atualizado em {formatDate(post.updated)}</span>
              )}
            </div>
          </div>
        </header>

        <div className="page-px pb-16 md:pb-20">
          <div className="mx-auto max-w-[820px]">
            <PostCover post={post} priority className="rounded-2xl border border-vesk-border" />
            <p className="mt-3 mb-12 text-right text-[12px] text-vesk-muted">Imagem: Pixabay</p>
          </div>

          <div className="mx-auto grid max-w-[1080px] gap-12 lg:grid-cols-[minmax(0,720px)_1fr] lg:gap-16">
            <article className="min-w-0">
              <PostContent content={post.content} />

              {post.tags.length > 0 && (
                <ul className="mt-10 flex list-none flex-wrap gap-2" aria-label="Assuntos">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-vesk-border px-3.5 py-1.5 text-[12px] text-vesk-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-10 border-t border-vesk-border pt-8">
                <ShareButtons post={post} />
              </div>

              <aside className="mt-10 flex gap-5 rounded-2xl border border-vesk-border bg-vesk-dark-2 p-6">
                <img src="/assets/logo-mark.svg" alt="" width={46} height={38} className="h-9 w-auto shrink-0 self-start" loading="lazy" />
                <div>
                  <p className="font-display text-xl text-vesk-surface">{post.author}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-vesk-muted">
                    A VESK é uma software house de Curitiba que cria sites, lojas virtuais e sistemas sob medida. Estes
                    artigos reúnem o que aprendemos ajudando empresas a vender mais pela internet.
                  </p>
                  <Link to="/sobre" className="mt-3 inline-block text-sm font-medium text-vesk-orange no-underline hover:text-vesk-orange-light">
                    Conheça a VESK →
                  </Link>
                </div>
              </aside>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-28 grid gap-8">
                {headings.length > 1 && (
                  <nav aria-label="Neste artigo">
                    <p className="mono-tag mb-4 text-[11px] text-vesk-orange">Neste artigo</p>
                    <ol className="grid list-none gap-1 border-l border-vesk-border">
                      {headings.map((heading) => (
                        <li key={heading.id}>
                          <a
                            href={`#${heading.id}`}
                            className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm leading-snug text-vesk-muted no-underline transition-colors hover:border-vesk-orange hover:text-vesk-surface"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
                <div className="rounded-2xl border border-vesk-border-warm bg-vesk-orange-dim p-5">
                  <p className="font-display text-lg leading-snug text-vesk-surface">Quer um site que traga clientes?</p>
                  <p className="mt-2 text-sm leading-relaxed text-vesk-mid">Conte sua ideia e receba uma proposta sem compromisso.</p>
                  <Link to="/contato" className={btnPrimaryClasses('mt-4 min-h-[44px] w-full px-4 text-sm')}>
                    Pedir orçamento
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {related.length > 0 && (
          <section className="border-t border-vesk-border bg-[#121417] page-px py-16 md:py-20" aria-labelledby="relacionados">
            <div className="mb-10 flex items-end justify-between gap-4">
              <h2 id="relacionados" className="font-display text-[clamp(1.75rem,3.2vw,2.25rem)] leading-[1.1] font-normal text-vesk-surface">
                Continue lendo
              </h2>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-vesk-orange no-underline hover:text-vesk-orange-light">
                <ArrowLeft size={15} aria-hidden />
                Todos os artigos
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
          </section>
        )}

        <CtaBand />
      </main>
    </PublicLayout>
  );
};

export default BlogPostPage;
