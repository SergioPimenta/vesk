import { Link } from 'react-router-dom';
import { ArrowIcon } from './icons';
import { btnPrimaryClasses, CircleArrow, IconBox, SectionDesc, SectionLabel, SectionTitle } from './ui';
import { products } from '../products/productsData';

export const Products = () => (
  <section id="produtos" className="scroll-mt-24 bg-vesk-dark page-px py-[72px] md:py-24">
    <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
      <div data-reveal>
        <SectionLabel>Produtos próprios</SectionLabel>
        <SectionTitle>
          Plataformas prontas <span className="text-vesk-orange">para escalar.</span>
        </SectionTitle>
        <SectionDesc className="mt-[18px] mb-[30px]">
          Soluções desenvolvidas pela VESK para simplificar gestão, aumentar a produtividade e transformar resultados.
        </SectionDesc>
        <Link to="/produtos" className={btnPrimaryClasses()}>
          Conhecer os produtos
          <ArrowIcon />
        </Link>
      </div>

      <ul className="grid list-none gap-3.5">
        {products.map((product, i) => (
          <li key={product.title} data-reveal style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}>
            <Link
              to="/produtos"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[10px] border border-vesk-border bg-vesk-dark-2 px-5 py-[22px] no-underline transition-shadow duration-200 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)] sm:gap-5 sm:px-6"
            >
              <IconBox size="lg" decorative>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {product.icon}
                </svg>
              </IconBox>
              <div>
                <h3 className="font-display text-[22px] leading-[1.1] font-normal text-vesk-surface">{product.title}</h3>
                <p className="mt-1 text-[14.5px] leading-[1.5] text-vesk-muted">{product.desc}</p>
              </div>
              <CircleArrow />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
