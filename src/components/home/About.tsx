import { ArrowIcon } from './icons';
import { BtnPrimary, SectionLabel, SectionTitle } from './ui';
import { Counter } from './Counter';

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
  <section id="sobre" className="bg-vesk-black page-px py-16 md:py-24 lg:py-[120px]">
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[100px]">
      <div className="order-2 grid grid-cols-2 gap-4 sm:gap-5 lg:order-1 lg:mt-12">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            data-reveal
            style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}
            className="group rounded-2xl border border-vesk-border bg-vesk-dark-2 px-6 py-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-vesk-border-warm"
          >
            <div
              className={`font-display mb-2 leading-none font-extrabold text-vesk-surface ${stat.small ? 'text-3xl sm:text-4xl' : 'text-3xl sm:text-[46px]'}`}
            >
              <Counter end={Number(stat.value)} suffix={stat.suffix} suffixClassName="copper-metal" />
            </div>
            <div className="mono-tag text-vesk-muted">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="order-1 lg:order-2" data-reveal>
        <SectionLabel index="05">Sobre a VESK</SectionLabel>
        <SectionTitle>Tecnologia, pessoas e propósito</SectionTitle>
        <p className="mt-5 mb-4 text-base leading-[1.8] font-light text-vesk-mid">
          A VESK nasceu para transformar ideias em soluções digitais inteligentes. Unimos tecnologia,
          criatividade e estratégia para entregar software que impulsiona negócios e melhora vidas.
        </p>
        <div className="mt-9 flex flex-col gap-4">
          {features.map((text) => (
            <div key={text} className="flex items-start gap-3.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-vesk-orange" />
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
