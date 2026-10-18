import { Code2, Monitor, Plug, ShoppingCart } from 'lucide-react';
import { ArrowIcon } from './icons';
import { BtnOutline, BtnPrimary, MonoTag, pageHeroTitleClass } from './ui';
import { cn } from '../../lib/cn';
import { openQuote, smoothScrollTo } from '../contact/contactActions';
import { track } from '../../lib/analytics';

const points = [
  { label: 'Sistemas', icon: <Code2 /> },
  { label: 'Websites', icon: <Monitor /> },
  { label: 'E-commerce', icon: <ShoppingCart /> },
  { label: 'Integrações', icon: <Plug /> },
];

export const Hero = () => (
  <section className="relative flex flex-col overflow-hidden bg-vesk-black xl:min-h-[clamp(680px,50vw,860px)] xl:flex-row xl:items-center">
    {/* Banner: em telas largas fica ancorado embaixo à direita, atrás do texto; nas menores vem depois dele. */}
    <picture className="order-2 mt-5 block xl:absolute xl:inset-x-0 xl:bottom-0 xl:order-none xl:mt-0">
      <source
        type="image/webp"
        srcSet="/assets/hero-vesk-960.webp 960w, /assets/hero-vesk.webp 1866w"
        sizes="100vw"
      />
      <img
        src="/assets/hero-vesk.jpg"
        srcSet="/assets/hero-vesk-960.jpg 960w, /assets/hero-vesk.jpg 1866w"
        sizes="100vw"
        alt="Site da VESK exibido em notebook e celular"
        width={1866}
        height={843}
        {...({ fetchpriority: 'high' } as Record<string, string>)}
        className="animate-hero-fade aspect-[1.3] w-full object-cover object-[88%_center] sm:aspect-[1.9] xl:aspect-auto xl:h-auto xl:[mask-image:linear-gradient(to_bottom,transparent,black_22%)]"
      />
    </picture>
    <div
      className="pointer-events-none absolute inset-0 z-[1] hidden bg-[linear-gradient(90deg,#0f1113_0%,rgba(15,17,19,0.92)_26%,rgba(15,17,19,0.35)_46%,rgba(15,17,19,0)_58%),linear-gradient(0deg,#0f1113_0%,rgba(15,17,19,0)_18%)] xl:block"
      aria-hidden
    />

    <div className="relative z-[2] order-1 w-full page-px pt-[112px] md:pt-[124px] xl:pt-[140px] xl:pb-24">
      <div className="max-w-[540px]">
        <div className="animate-fade-up mb-[18px]">
          <MonoTag>Criação de sites &nbsp;•&nbsp; Curitiba, PR</MonoTag>
        </div>
        <h1 className={cn('animate-fade-up text-vesk-surface [animation-delay:100ms]', pageHeroTitleClass)}>
          Criação de sites e sistemas que viram <span className="text-vesk-orange">resultado.</span>
        </h1>
        <p className="animate-fade-up mt-[26px] mb-9 max-w-[54ch] text-lg leading-[1.6] text-vesk-muted [animation-delay:200ms]">
          Sites profissionais, lojas virtuais, sistemas e automações sob medida para empresas de Curitiba e de todo o
          Brasil. Tecnologia que você usa de verdade e que traz clientes.
        </p>
        <div className="animate-fade-up flex flex-col gap-3.5 [animation-delay:300ms] sm:flex-row sm:flex-wrap">
          <BtnPrimary
            href="#formulario"
            onClick={(e) => {
              e.preventDefault();
              openQuote('home_hero');
            }}
          >
            Solicitar orçamento
            <ArrowIcon />
          </BtnPrimary>
          <BtnOutline
            href="#solucoes"
            onClick={(e) => {
              e.preventDefault();
              track('solutions_click', { cta_location: 'home_hero' });
              smoothScrollTo('solucoes');
            }}
          >
            Ver soluções
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="m6 9 6 6 6-6" />
            </svg>
          </BtnOutline>
        </div>
        <ul className="animate-fade-up mt-11 flex list-none flex-wrap gap-x-7 gap-y-3 border-t border-vesk-border pt-[26px] [animation-delay:400ms]">
          {points.map((point) => (
            <li key={point.label} className="flex items-center gap-2.5 text-sm text-vesk-mid [&_svg]:h-5 [&_svg]:w-5 [&_svg]:text-vesk-orange [&_svg]:stroke-[1.3]">
              {point.icon}
              {point.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
