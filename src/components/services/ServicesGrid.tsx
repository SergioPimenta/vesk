import { Link } from 'react-router-dom';
import { IconBox, SectionDesc, SectionLabel, SectionTitle } from '../home/ui';
import { services } from './servicesData';

type ServicesGridProps = {
  showFeatures?: boolean;
  showHeader?: boolean;
  id?: string;
  className?: string;
  ctaLabel?: string;
};

export const ServicesGrid = ({
  showFeatures = false,
  showHeader = true,
  id = 'servicos',
  className = 'bg-vesk-dark page-px py-16 md:py-24 lg:py-[120px]',
  ctaLabel = 'Solicitar orçamento →',
}: ServicesGridProps) => (
  <section id={id} className={className}>
    {showHeader && (
      <div className="mb-[72px] text-center">
        <SectionLabel centered showLine={false}>
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
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-vesk-border bg-vesk-border md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.title}
          className="group relative flex flex-col bg-vesk-dark-2 px-9 py-10 transition-colors duration-250 hover:bg-vesk-dark-3"
        >
          <span className="absolute bottom-0 left-9 h-0.5 w-0 bg-vesk-orange transition-[width] duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-[calc(100%-4.5rem)]" />
          <div className="mb-6">
            <IconBox size="lg" decorative>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                {service.icon}
              </svg>
            </IconBox>
          </div>
          <h3 className="font-display mb-3 text-lg font-semibold">{service.title}</h3>
          <p className="mb-4 text-sm leading-[1.7] text-vesk-muted">{service.desc}</p>
          {showFeatures && (
            <ul className="mb-6 flex list-none flex-col gap-1.5">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-[13px] text-vesk-mid">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-vesk-orange" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
          <Link
            to="/contato"
            className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-vesk-orange no-underline transition-[gap] duration-200 hover:gap-2.5"
          >
            {ctaLabel}
          </Link>
        </div>
      ))}
    </div>
  </section>
);
