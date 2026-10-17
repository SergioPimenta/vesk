import { Check } from 'lucide-react';
import { ArrowIcon } from '../home/icons';
import { BtnOutline, BtnPrimary, IconBox, pageHeroTitleClass } from '../home/ui';
import { cn } from '../../lib/cn';
import { track } from '../../lib/analytics';
import { whatsappUrl } from '../../lib/site';
import { openQuote, smoothScrollTo, trackWhatsappClick } from './contactActions';

const trustPoints = [
  'Atendimento para todo o Brasil',
  'Soluções desenvolvidas de acordo com cada necessidade',
  'Atendimento especializado para entender seu projeto',
] as const;

export const ContactHero = ({ interest }: { interest?: string }) => (
  <section className="blueprint relative overflow-hidden page-px pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-[150px] lg:pb-24">
    <div
      className="pointer-events-none absolute -top-[220px] -left-[180px] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(194,101,59,0.16)_0%,transparent_68%)]"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,transparent_35%,var(--color-vesk-black)_92%)]"
      aria-hidden
    />

    <div className="relative z-10 max-w-3xl">
      <div className="animate-fade-up mono-tag mb-6 inline-flex items-center gap-2.5 text-vesk-orange before:block before:h-px before:w-8 before:bg-vesk-orange before:content-['']">
        <span className="text-vesk-mid">Orçamento sem compromisso</span>
      </div>

      <h1 className={cn('animate-fade-up mb-6 [animation-delay:80ms]', pageHeroTitleClass)}>
        Sua ideia merece <span className="copper-metal">sair do papel.</span>
      </h1>

      <p className="animate-fade-up mb-9 max-w-2xl text-lg leading-[1.7] font-light text-vesk-mid [animation-delay:160ms] sm:text-xl">
        Desenvolvemos sites, lojas virtuais, aplicativos e sistemas personalizados para transformar ideias em
        soluções reais.
      </p>

      <div className="animate-fade-up flex flex-col gap-3.5 [animation-delay:240ms] sm:flex-row sm:flex-wrap">
        <BtnPrimary
          href="#formulario"
          className="min-h-[52px] w-full justify-center sm:w-auto"
          onClick={(e) => {
            e.preventDefault();
            openQuote('hero');
          }}
        >
          Solicitar meu orçamento
          <ArrowIcon />
        </BtnPrimary>
        <BtnOutline
          href={whatsappUrl(interest)}
          className="min-h-[52px] w-full justify-center sm:w-auto"
          onClick={() => trackWhatsappClick('hero', interest)}
        >
          Falar pelo WhatsApp
        </BtnOutline>
      </div>

      <a
        href="#solucoes"
        onClick={(e) => {
          e.preventDefault();
          track('solutions_click', { cta_location: 'hero' });
          smoothScrollTo('solucoes');
        }}
        className="animate-fade-up mt-5 inline-flex min-h-[44px] items-center text-sm text-vesk-mid underline decoration-vesk-border-warm underline-offset-4 transition-colors [animation-delay:300ms] hover:text-vesk-surface"
      >
        Ver o que a VESK desenvolve ↓
      </a>

      <ul className="animate-fade-up mt-10 grid list-none gap-4 border-t border-vesk-border pt-8 [animation-delay:360ms] sm:grid-cols-3 sm:gap-6">
        {trustPoints.map((text) => (
          <li key={text} className="flex items-start gap-3 text-sm leading-snug text-vesk-mid">
            <IconBox size="sm" decorative className="mt-px">
              <Check strokeWidth={2.4} />
            </IconBox>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
