import { BtnOutline, BtnPrimary, pageHeroTitleClass } from '../home/ui';
import { cn } from '../../lib/cn';
import { ArrowIcon } from '../home/icons';

export const ProductsHero = () => (
  <section className="relative overflow-hidden px-12 pt-[140px] pb-20">
    <div
      className="pointer-events-none absolute -top-[200px] -left-[200px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(232,88,26,0.08)_0%,transparent_70%)]"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(232,88,26,0.04)_0%,transparent_70%)]"
      aria-hidden
    />

    <div className="relative z-10 mx-auto max-w-3xl text-center">
      <div className="animate-fade-up mb-7 inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.14em] text-vesk-orange uppercase before:block before:h-px before:w-8 before:bg-vesk-orange before:content-['']">
        Produtos
      </div>
      <h1 className={cn('animate-fade-up mb-7 [animation-delay:80ms]', pageHeroTitleClass)}>
        Software próprio, <em className="text-vesk-orange not-italic">pronto para escalar</em>
      </h1>
      <p className="animate-fade-up mx-auto mb-10 max-w-2xl text-lg leading-[1.75] font-light text-vesk-mid [animation-delay:160ms]">
        Plataformas desenvolvidas pela VESK para simplificar gestão, aumentar produtividade e gerar
        resultados mensuráveis desde o primeiro dia.
      </p>
      <div className="animate-fade-up flex flex-wrap items-center justify-center gap-4 [animation-delay:240ms]">
        <BtnPrimary href="#catalogo">
          Conhecer produtos
          <ArrowIcon />
        </BtnPrimary>
        <BtnOutline href="/contato">Agendar demonstração</BtnOutline>
      </div>
    </div>
  </section>
);
