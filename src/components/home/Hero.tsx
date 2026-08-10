import { BtnOutline, BtnPrimary, IconBox, pageHeroTitleClass } from './ui';
import { cn } from '../../lib/cn';
import { ArrowIcon } from './icons';
import { HeroDashboard } from './HeroDashboard';

const badges = [
  {
    title: 'Soluções Personalizadas',
    desc: 'Sob medida para cada negócio',
    icon: (
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    ),
  },
  {
    title: 'Tecnologia Escalável',
    desc: 'Cresce com o seu negócio',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </>
    ),
  },
  {
    title: 'Suporte Contínuo',
    desc: 'Acompanhamento dedicado',
    icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
];

export const Hero = () => (
  <section
    id="inicio"
    className="relative grid min-h-0 grid-cols-1 items-center gap-12 overflow-hidden page-px pt-28 pb-16 sm:pt-32 sm:pb-20 lg:min-h-screen lg:grid-cols-2 lg:gap-20 lg:pt-40 lg:pb-[100px]"
  >
    <div
      className="pointer-events-none absolute -top-[200px] -left-[200px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(184,92,56,0.1)_0%,transparent_70%)]"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(184,92,56,0.05)_0%,transparent_70%)]"
      aria-hidden
    />

    <div className="relative z-10">
      <div className="animate-fade-up mb-7 inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.14em] text-vesk-orange uppercase before:block before:h-px before:w-8 before:bg-vesk-orange before:content-['']">
        Software Premium
      </div>
      <h1 className={cn('animate-fade-up mb-7 [animation-delay:80ms]', pageHeroTitleClass)}>
        Software House em Curitiba que <em className="text-vesk-orange not-italic">transforma</em> negócios com
        tecnologia.
      </h1>
      <p className="animate-fade-up mb-11 max-w-[440px] text-[17px] leading-[1.75] font-light text-vesk-mid [animation-delay:160ms]">
        Criamos sistemas, CRMs, e-commerces e automações sob medida para PMEs em Curitiba e todo o Brasil —
        tecnologia que você usa de verdade e que gera resultado.
      </p>
      <div className="animate-fade-up flex flex-wrap items-center gap-4 [animation-delay:240ms]">
        <BtnPrimary href="#contato">
          Solicitar orçamento
          <ArrowIcon />
        </BtnPrimary>
        <BtnOutline href="#processo">Como trabalhamos →</BtnOutline>
      </div>
      <div className="animate-fade-up mt-10 flex flex-col gap-5 border-t border-vesk-border pt-8 sm:mt-[52px] sm:flex-row sm:flex-wrap sm:gap-7 sm:pt-10 [animation-delay:320ms]">
        {badges.map((badge) => (
          <div key={badge.title} className="flex min-w-0 items-center gap-2.5 sm:min-w-[180px]">
            <IconBox size="md">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {badge.icon}
              </svg>
            </IconBox>
            <div>
              <strong className="block text-[13px] font-medium text-vesk-surface">{badge.title}</strong>
              <p className="text-xs leading-snug text-vesk-muted">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="relative z-10 animate-fade-up [animation-delay:300ms] [animation-duration:0.8s]">
      <HeroDashboard />
    </div>
  </section>
);

