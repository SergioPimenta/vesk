import { cn } from '../../lib/cn';
import { pageHeroTitleClass } from '../home/ui';

export const BlogHero = () => (
  <section className="relative overflow-hidden page-px pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-[140px] lg:pb-16">
    <div
      className="pointer-events-none absolute -top-[200px] -left-[200px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(210,122,68,0.08)_0%,transparent_70%)]"
      aria-hidden
    />
    <div className="relative z-10 mx-auto max-w-3xl text-center">
      <div className="animate-fade-up mb-7 inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.14em] text-vesk-orange uppercase before:block before:h-px before:w-8 before:bg-vesk-orange before:content-['']">
        Blog
      </div>
      <h1 className={cn('animate-fade-up mb-6 [animation-delay:80ms]', pageHeroTitleClass)}>
        Ideias para o seu negócio <em className="text-vesk-orange not-italic">vender mais</em> online
      </h1>
      <p className="animate-fade-up mx-auto max-w-2xl text-lg leading-[1.75] font-light text-vesk-mid [animation-delay:160ms]">
        Guias práticos sobre tecnologia, IA, criação de sites, e-commerce e vendas, escritos pela equipe da VESK para quem quer
        resultado, não jargão.
      </p>
    </div>
  </section>
);
