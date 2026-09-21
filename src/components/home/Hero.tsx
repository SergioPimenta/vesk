import { BtnOutline, BtnPrimary, MonoTag, pageHeroTitleClass } from './ui';
import { cn } from '../../lib/cn';
import { ArrowIcon } from './icons';
import { VeskEcosystem } from './VeskEcosystem';
import { Counter } from './Counter';

const trust = [
  { end: 50, suffix: '+', label: 'Projetos entregues' },
  { end: 30, suffix: '+', label: 'Clientes atendidos' },
  { end: 98, suffix: '%', label: 'Satisfação' },
];

export const Hero = () => (
  <section
    id="inicio"
    className="relative grid min-h-0 grid-cols-1 items-center gap-14 overflow-hidden blueprint page-px pt-32 pb-16 sm:pt-36 sm:pb-20 lg:min-h-screen lg:grid-cols-[0.7fr_0.95fr] lg:gap-16 lg:pt-40 lg:pb-[110px]"
  >
    {/* Atmosphere — copper aurora + fade of the blueprint grid */}
    <div
      className="pointer-events-none absolute -top-[240px] -left-[200px] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(194,101,59,0.16)_0%,transparent_68%)] animate-glow-pulse"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute right-[-160px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(224,138,92,0.08)_0%,transparent_70%)]"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-vesk-black)_92%)]"
      aria-hidden
    />

    <div className="relative z-10 max-w-2xl">
      <div className="animate-fade-up">
        <MonoTag>Software House · Curitiba, BR</MonoTag>
      </div>

      <h1 className={cn('animate-fade-up mt-6 mb-7 [animation-delay:90ms]', pageHeroTitleClass)}>
        Construímos o software
        <br />
        que vira <span className="copper-metal">resultado</span>
        <span className="text-vesk-orange">.</span>
      </h1>

      <p className="animate-fade-up mb-10 max-w-[500px] text-[17px] leading-[1.75] font-light text-vesk-mid [animation-delay:170ms]">
        Sistemas, CRMs, e-commerces e automações sob medida para empresas em Curitiba e todo o Brasil —
        tecnologia que você usa de verdade e que gera resultado.
      </p>

      <div className="animate-fade-up flex flex-wrap items-center gap-3.5 [animation-delay:250ms]">
        <BtnPrimary href="#contato">
          Solicitar orçamento
          <ArrowIcon />
        </BtnPrimary>
        <BtnOutline href="#processo">Ver como trabalhamos</BtnOutline>
      </div>

      <dl className="animate-fade-up mt-14 flex flex-wrap gap-x-8 gap-y-5 border-t border-vesk-border pt-8 [animation-delay:330ms]">
        {trust.map((item) => (
          <div key={item.label} className="flex flex-col">
            <dt className="font-display text-2xl font-extrabold text-vesk-surface">
              <Counter end={item.end} suffix={item.suffix} suffixClassName="text-vesk-orange" />
            </dt>
            <dd className="mono-tag mt-1 text-vesk-muted">{item.label}</dd>
          </div>
        ))}
      </dl>
    </div>

    <div className="relative z-10 animate-fade-up [animation-delay:420ms] [animation-duration:0.9s] lg:h-full lg:self-stretch lg:animate-float-slow">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[32px] bg-[radial-gradient(circle_at_50%_52%,rgba(194,101,59,0.14),transparent_58%)]"
        aria-hidden
      />
      <VeskEcosystem />
    </div>
  </section>
);
