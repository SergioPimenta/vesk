import { BtnOutline, BtnPrimary, pageHeroTitleClass } from '../home/ui';
import { cn } from '../../lib/cn';
import { ArrowIcon } from '../home/icons';

export const AboutHero = () => (
  <section className="relative overflow-hidden page-px pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-[140px] lg:pb-24">
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
        Sobre a VESK
      </div>
      <h1 className={cn('animate-fade-up mb-7 [animation-delay:80ms]', pageHeroTitleClass)}>
        Tecnologia, <em className="text-vesk-orange not-italic">pessoas</em> e propósito
      </h1>
      <p className="animate-fade-up mx-auto mb-10 max-w-2xl text-lg leading-[1.75] font-light text-vesk-mid [animation-delay:160ms]">
        A VESK nasceu para transformar ideias em soluções digitais inteligentes. Unimos tecnologia,
        criatividade e estratégia para entregar software que impulsiona negócios e melhora vidas.
      </p>
      <div className="animate-fade-up flex flex-wrap items-center justify-center gap-4 [animation-delay:240ms]">
        <BtnPrimary href="/contato">
          Fale conosco
          <ArrowIcon />
        </BtnPrimary>
        <BtnOutline href="/servicos">Nossas soluções</BtnOutline>
      </div>
    </div>
  </section>
);
