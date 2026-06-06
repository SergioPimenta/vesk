import { Link } from 'react-router-dom';
import { ArrowIcon } from '../home/icons';
import { SectionDesc, SectionLabel, SectionTitle } from '../home/ui';
import { products } from './productsData';

type ProductsGridProps = {
  variant?: 'home' | 'page';
  showHeader?: boolean;
  id?: string;
};

export const ProductsGrid = ({ variant = 'page', showHeader = true, id = 'catalogo' }: ProductsGridProps) => {
  if (variant === 'home') {
    return (
      <section id="produtos" className="bg-vesk-cream page-px py-[120px] text-vesk-surface">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionLabel showLine className="text-vesk-orange">
              Produtos
            </SectionLabel>
            <SectionTitle>Nossos produtos próprios</SectionTitle>
            <SectionDesc className="text-vesk-muted">
              Soluções desenvolvidas pela VESK para simplificar gestão, aumentar a produtividade e transformar
              resultados.
            </SectionDesc>
            <Link
              to="/produtos"
              className="mt-8 inline-flex items-center gap-2.5 rounded bg-vesk-orange px-7 py-3.5 text-sm font-medium text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-vesk-orange-light"
            >
              Ver todos os produtos
              <ArrowIcon />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {products.map((product) => (
              <Link
                key={product.title}
                to="/produtos"
                className="flex items-start gap-5 rounded-xl border border-vesk-border bg-vesk-dark-3 px-8 py-7 text-inherit no-underline transition-all duration-200 hover:-translate-y-[3px] hover:border-vesk-border-warm hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-vesk-orange-dim text-vesk-orange [&_svg]:h-5 [&_svg]:w-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {product.icon}
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display mb-1.5 text-base font-bold text-vesk-surface">{product.title}</h3>
                  <p className="text-[13px] leading-relaxed text-vesk-muted">{product.desc}</p>
                </div>
                <span className="mt-0.5 ml-auto shrink-0 text-vesk-orange">
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
    <section id={id} className="bg-vesk-cream page-px py-[100px] text-vesk-surface">
      {showHeader && (
        <div className="mb-14 max-w-2xl">
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
        {products.map((product) => (
          <article
            key={product.title}
            className="flex flex-col rounded-2xl border border-vesk-border bg-vesk-dark-3 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-vesk-border-warm hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
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
