import { SectionDesc, SectionLabel, SectionTitle } from '../home/ui';
import { productHighlights } from './productsData';

export const ProductsHighlights = () => (
  <section className="bg-vesk-black page-px py-16 md:py-24 lg:py-[100px]">
    <div className="mb-14 text-center">
      <SectionLabel centered showLine={false}>
        Vantagens
      </SectionLabel>
      <SectionTitle className="mx-auto">Por que escolher produtos VESK</SectionTitle>
      <SectionDesc className="mx-auto">
        Tecnologia própria, roadmap ativo e suporte da mesma equipe que desenvolveu a plataforma.
      </SectionDesc>
    </div>
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
      {productHighlights.map((item, i) => (
        <div
          key={item.title}
          className="rounded-xl border border-vesk-border bg-vesk-dark-2 px-8 py-9 text-center md:text-left"
        >
          <div className="font-display mb-4 text-3xl font-extrabold text-vesk-orange">
            {String(i + 1).padStart(2, '0')}
          </div>
          <h3 className="font-display mb-3 text-base font-semibold">{item.title}</h3>
          <p className="text-sm leading-[1.75] text-vesk-muted">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
