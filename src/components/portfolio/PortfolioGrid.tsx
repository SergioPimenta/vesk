import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BtnOutline, SectionLabel, SectionTitle } from '../home/ui';
import { portfolioCategories, portfolioItems, type PortfolioCategory } from './portfolioData';

type PortfolioGridProps = {
  variant?: 'home' | 'page';
  limit?: number;
};

export const PortfolioGrid = ({ variant = 'page', limit }: PortfolioGridProps) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('Todos');

  const items =
    variant === 'home'
      ? portfolioItems.slice(0, limit ?? 4)
      : portfolioItems.filter((item) => activeCategory === 'Todos' || item.tag === activeCategory);

  const grid = (
    <div
      className={
        variant === 'home'
          ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'
          : 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      }
    >
      {items.map((item) => (
        <article
          key={item.num}
          aria-label={`Projeto ${item.num} desenvolvido pela VESK Software House`}
          className={`group relative aspect-[1650/952] cursor-default overflow-hidden rounded-[22px] border border-vesk-border bg-gradient-to-br ${item.gradient} transition-transform duration-300 hover:-translate-y-1.5`}
        >
          <img
            src={item.image}
            alt={`${item.name} — projeto desenvolvido pela VESK Software House`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-[rgb(11_17_26/0.92)] p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="mb-1 flex items-center justify-between gap-2">
              <span className="text-[10px] tracking-[0.1em] text-vesk-orange uppercase">{item.tag}</span>
              <span className="text-[10px] text-vesk-muted">{item.year}</span>
            </div>
            <h3 className="font-display text-lg font-bold">{item.name}</h3>
            <p className="mt-1 text-xs font-medium text-vesk-mid">{item.sub}</p>
            {variant === 'page' && (
              <p className="mt-2 text-xs leading-relaxed text-vesk-muted">{item.desc}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  );

  if (variant === 'home') {
    return (
      <section id="projetos" className="bg-vesk-black page-px py-16 md:py-24 lg:py-[120px]">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Portfólio</SectionLabel>
            <SectionTitle>
              Projetos que geram
              <br />
              resultados
            </SectionTitle>
          </div>
          <BtnOutline href="/portfolio" className="whitespace-nowrap">
            Ver todos os projetos
          </BtnOutline>
        </div>
        {grid}
      </section>
    );
  }

  return (
    <section id="projetos" className="bg-vesk-black page-px py-16 md:py-24 lg:py-[100px]">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionLabel>Cases</SectionLabel>
          <SectionTitle>Projetos em destaque</SectionTitle>
        </div>
        <div className="flex flex-wrap gap-2">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={
                activeCategory === cat
                  ? 'rounded-lg border border-vesk-orange bg-vesk-orange-dim px-4 py-2 text-[12px] font-medium text-vesk-orange'
                  : 'rounded-lg border border-vesk-border bg-vesk-dark-2 px-4 py-2 text-[12px] text-vesk-muted transition-colors hover:border-vesk-border-warm hover:text-vesk-surface'
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {grid}
      <p className="mt-10 text-center text-sm text-vesk-muted">
        Quer um resultado parecido?{' '}
        <Link to="/contato" className="font-medium text-vesk-orange no-underline hover:text-vesk-orange-light">
          Fale com a VESK →
        </Link>
      </p>
    </section>
  );
};
