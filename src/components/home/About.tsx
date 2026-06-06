import { ArrowIcon } from './icons';
import { BtnPrimary, SectionLabel, SectionTitle } from './ui';

const stats = [
  { value: '50', suffix: '+', label: 'Projetos entregues' },
  { value: '30', suffix: '+', label: 'Clientes atendidos' },
  { value: '98', suffix: '%', label: 'Satisfação dos clientes', small: true },
  { value: '5', suffix: '+', label: 'Produtos próprios' },
];

const features = [
  'Equipe especializada com foco em resultado e qualidade técnica comprovada',
  'Metodologia ágil com entregas contínuas e comunicação transparente',
  'Suporte dedicado e relacionamento de longo prazo com cada cliente',
];

export const About = () => (
  <section id="sobre" className="bg-vesk-black page-px py-[120px]">
    <div className="grid grid-cols-2 items-center gap-[100px]">
      <div className="mt-12 grid grid-cols-2 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-vesk-border bg-vesk-dark-2 px-6 py-7">
            <div
              className={`font-display mb-2 leading-none font-extrabold text-vesk-surface ${stat.small ? 'text-4xl' : 'text-[44px]'}`}
            >
              {stat.value}
              <span className="text-vesk-orange">{stat.suffix}</span>
            </div>
            <div className="text-[13px] text-vesk-muted">{stat.label}</div>
          </div>
        ))}
      </div>
      <div>
        <SectionLabel>Sobre a VESK</SectionLabel>
        <SectionTitle>Tecnologia, pessoas e propósito</SectionTitle>
        <p className="mb-4 text-base leading-[1.8] font-light text-vesk-mid">
          A VESK nasceu para transformar ideias em soluções digitais inteligentes. Unimos tecnologia,
          criatividade e estratégia para entregar software que impulsiona negócios e melhora vidas.
        </p>
        <div className="mt-9 flex flex-col gap-4">
          {features.map((text) => (
            <div key={text} className="flex items-start gap-3.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vesk-orange" />
              <p className="text-sm text-vesk-mid">{text}</p>
            </div>
          ))}
        </div>
        <BtnPrimary href="/sobre" className="mt-9">
          Conheça nossa história
          <ArrowIcon />
        </BtnPrimary>
      </div>
    </div>
  </section>
);
