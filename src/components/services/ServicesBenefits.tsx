import { IconBox, SectionDesc, SectionLabel, SectionTitle } from '../home/ui';
import { serviceBenefits } from './servicesData';

export const ServicesBenefits = () => (
  <section className="bg-vesk-black page-px py-[100px]">
    <div className="mb-16 text-center">
      <SectionLabel centered showLine={false}>
        Por que a VESK
      </SectionLabel>
      <SectionTitle className="mx-auto">Como entregamos valor</SectionTitle>
      <SectionDesc className="mx-auto">
        Mais do que desenvolver software, construímos parcerias com processo claro, comunicação transparente e
        foco em resultado.
      </SectionDesc>
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {serviceBenefits.map((benefit) => (
        <div
          key={benefit.title}
          className="rounded-xl border border-vesk-border bg-vesk-dark-2 p-8 transition-colors hover:border-vesk-border-warm hover:bg-vesk-dark-3"
        >
          <div className="mb-5">
            <IconBox size="lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {benefit.icon}
              </svg>
            </IconBox>
          </div>
          <h3 className="font-display mb-3 text-base font-semibold">{benefit.title}</h3>
          <p className="text-sm leading-[1.7] text-vesk-muted">{benefit.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
