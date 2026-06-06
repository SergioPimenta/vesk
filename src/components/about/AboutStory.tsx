import { SectionLabel, SectionTitle } from '../home/ui';

const milestones = [
  { year: '2019', title: 'Fundação', desc: 'A VESK nasce com o propósito de levar software premium a empresas de todos os portes.' },
  { year: '2021', title: 'Primeiros produtos', desc: 'Lançamento dos primeiros sistemas próprios para gestão e relacionamento com clientes.' },
  { year: '2023', title: 'Expansão', desc: 'Mais de 30 clientes ativos e portfólio diversificado em e-commerce, saúde e varejo.' },
  { year: '2025', title: 'Hoje', desc: 'Equipe consolidada, metodologia ágil madura e foco em soluções escaláveis de alto impacto.' },
];

const features = [
  'Equipe especializada com foco em resultado e qualidade técnica comprovada',
  'Metodologia ágil com entregas contínuas e comunicação transparente',
  'Suporte dedicado e relacionamento de longo prazo com cada cliente',
];

export const AboutStory = () => (
  <section className="bg-vesk-black px-12 py-[120px]">
    <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
      <div>
        <SectionLabel>Nossa história</SectionLabel>
        <SectionTitle>De ideias a soluções que transformam</SectionTitle>
        <p className="mb-4 text-base leading-[1.8] font-light text-vesk-mid">
          Começamos atendendo demandas pontuais e evoluímos para uma operação completa de
          desenvolvimento — do diagnóstico ao suporte pós-entrega.
        </p>
        <p className="mb-9 text-base leading-[1.8] font-light text-vesk-mid">
          Hoje, a VESK atua em projetos sob medida e produtos próprios, sempre com o mesmo
          compromisso: tecnologia que gera resultado real.
        </p>
        <ul className="flex flex-col gap-4">
          {features.map((text) => (
            <li key={text} className="flex items-start gap-3.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vesk-orange" />
              <p className="text-sm text-vesk-mid">{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-0 border-l border-vesk-border pl-10">
        {milestones.map((item, index) => (
          <article
            key={item.year}
            className={`relative pb-10 ${index < milestones.length - 1 ? 'border-b border-vesk-border mb-10' : ''}`}
          >
            <span className="font-display text-sm font-bold tracking-wider text-vesk-orange">{item.year}</span>
            <h3 className="font-display mt-2 mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm leading-relaxed text-vesk-muted">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
