import { Link } from 'react-router-dom';
import { ArrowIcon } from '../home/icons';
import { BtnPrimary, SectionDesc, SectionLabel, SectionTitle } from '../home/ui';
import { products } from './productsData';

type ProductsGridProps = {
  variant?: 'home' | 'page';
  showHeader?: boolean;
  id?: string;
};

export const ProductsGrid = ({ variant = 'page', showHeader = true, id = 'catalogo' }: ProductsGridProps) => {
  if (variant === 'home') {
    return (
      <section id="produtos" className="bg-vesk-cream page-px py-16 md:py-24 lg:py-[120px] text-vesk-surface">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <SectionLabel index="03">Produtos próprios</SectionLabel>
            <SectionTitle>Plataformas prontas para escalar</SectionTitle>
            <SectionDesc className="text-vesk-mid">
              Soluções desenvolvidas pela VESK para simplificar gestão, aumentar a produtividade e transformar
              resultados.
            </SectionDesc>
            <BtnPrimary href="/produtos" className="mt-8">
              Conhecer os produtos
              <ArrowIcon />
            </BtnPrimary>
          </div>
          <div className="flex flex-col gap-4">
            {products.map((product, i) => (
              <Link
                key={product.title}
                to="/produtos"
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
                className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-vesk-border bg-vesk-dark-2 px-5 py-6 text-inherit no-underline transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-vesk-border-warm hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.7)] sm:gap-5 sm:px-8 sm:py-7"
              >
                <span className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-gradient-to-b from-vesk-orange-light to-vesk-orange transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-vesk-border-warm bg-vesk-orange-dim text-vesk-orange [&_svg]:h-5 [&_svg]:w-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {product.icon}
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display mb-1.5 text-base font-bold text-vesk-surface">{product.title}</h3>
                  <p className="text-[13px] leading-relaxed text-vesk-muted">{product.desc}</p>
                </div>
                <span className="mt-0.5 ml-auto shrink-0 text-vesk-orange transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="bg-vesk-cream page-px py-16 md:py-24 lg:py-[100px] text-vesk-surface">
      {showHeader && (
        <div className="mb-14 max-w-2xl" data-reveal>
          <SectionLabel showLine className="text-vesk-orange">
            Catálogo
          </SectionLabel>
          <SectionTitle>Nossos produtos</SectionTitle>
          <SectionDesc className="text-vesk-muted">
            Plataformas SaaS prontas para implantação, com personalização conforme a necessidade do seu
            negócio.
          </SectionDesc>
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {products.map((product, i) => (
          <article
            key={product.title}
            data-reveal
            style={{ ['--reveal-delay' as string]: `${(i % 3) * 90}ms` }}
            className="group flex flex-col rounded-2xl border border-vesk-border bg-vesk-dark-3 p-8 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-vesk-border-warm hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.7)]"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-vesk-orange-dim text-vesk-orange [&_svg]:h-6 [&_svg]:w-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {product.icon}
                </svg>
              </div>
              <span className="rounded-full border border-vesk-border-warm bg-vesk-orange-dim px-3 py-1 text-[10px] font-medium tracking-wide text-vesk-orange uppercase">
                {product.status}
              </span>
            </div>
            <h3 className="font-display mb-3 text-xl font-bold">{product.title}</h3>
            <p className="mb-5 text-sm leading-[1.7] text-vesk-muted">{product.desc}</p>
            <ul className="mb-8 flex list-none flex-col gap-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-[13px] text-vesk-mid">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-vesk-orange" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contato"
              className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-vesk-orange no-underline transition-[gap] duration-200 hover:gap-2.5"
            >
              Solicitar demonstração →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};
