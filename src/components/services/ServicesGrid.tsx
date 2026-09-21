import { Link } from 'react-router-dom';
import { IconBox, SectionDesc, SectionLabel, SectionTitle } from '../home/ui';
import { services } from './servicesData';

type ServicesGridProps = {
  showFeatures?: boolean;
  showHeader?: boolean;
  id?: string;
  className?: string;
  ctaLabel?: string;
  index?: string;
};

export const ServicesGrid = ({
  showFeatures = false,
  showHeader = true,
  id = 'servicos',
  className = 'bg-vesk-dark page-px py-16 md:py-24 lg:py-[120px]',
  ctaLabel = 'Solicitar orçamento →',
  index,
}: ServicesGridProps) => (
  <section id={id} className={className}>
    {showHeader && (
      <div className="mb-[72px] text-center" data-reveal>
        <SectionLabel centered index={index}>
          Serviços
        </SectionLabel>
        <SectionTitle>
          Soluções completas para
          <br />
          o seu negócio
        </SectionTitle>
        <SectionDesc className="mx-auto">
          Da ideia ao lançamento, entregamos soluções sob medida com tecnologia de ponta e foco em resultado.
        </SectionDesc>
      </div>
    )}
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <div
          key={service.title}
          data-reveal
          style={{ ['--reveal-delay' as string]: `${(i % 3) * 80}ms` }}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-vesk-border bg-vesk-dark-2 px-8 py-9 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1.5 hover:border-vesk-border-warm hover:bg-vesk-dark-3 hover:shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)]"
        >
          {/* copper top edge grows on hover */}
          <span className="absolute inset-x-0 top-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-vesk-orange-light to-transparent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
          <div className="mb-6 flex items-center justify-between">
            <IconBox size="lg" decorative>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                {service.icon}
              </svg>
            </IconBox>
            <span className="mono-tag text-vesk-muted/70 transition-colors group-hover:text-vesk-orange/80">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 className="font-display mb-3 text-xl font-bold tracking-tight">{service.title}</h3>
          <p className="mb-5 text-sm leading-[1.7] text-vesk-muted">{service.desc}</p>
          {showFeatures && (
            <ul className="mb-6 flex list-none flex-col gap-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-[13px] text-vesk-mid">
                  <span className="h-1 w-1 shrink-0 rotate-45 bg-vesk-orange" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
          <Link
            to="/contato"
            className="mt-auto inline-flex items-center gap-1.5 font-mono text-[12px] tracking-[0.04em] text-vesk-orange no-underline transition-[gap] duration-200 hover:gap-2.5"
          >
            {ctaLabel}
          </Link>
        </div>
      ))}
    </div>
  </section>
);
