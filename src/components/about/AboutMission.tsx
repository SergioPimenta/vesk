import { SectionDesc, SectionLabel, SectionTitle } from '../home/ui';

const pillars = [
  {
    title: 'Missão',
    text: 'Desenvolver soluções digitais que transformam negócios, simplificam processos e geram resultados reais para nossos clientes.',
  },
  {
    title: 'Visão',
    text: 'Ser referência em desenvolvimento de software premium no Brasil, reconhecida pela excelência técnica e pelo impacto nos negócios.',
  },
  {
    title: 'Propósito',
    text: 'Unir tecnologia, criatividade e estratégia para entregar software que impulsiona empresas e melhora a vida das pessoas.',
  },
];

export const AboutMission = () => (
  <section className="bg-vesk-black page-px py-16 md:py-24 lg:py-[120px]">
    <div className="mb-16 max-w-2xl">
      <SectionLabel>Nossa essência</SectionLabel>
      <SectionTitle>O que nos move</SectionTitle>
      <SectionDesc>
        Mais do que código, construímos parcerias de longo prazo com foco em resultado, qualidade e
        inovação contínua.
      </SectionDesc>
    </div>
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-vesk-border bg-vesk-border md:grid-cols-3">
      {pillars.map((pillar) => (
        <article key={pillar.title} className="bg-vesk-dark-2 px-9 py-10 transition-colors hover:bg-vesk-dark-3">
          <h3 className="font-display mb-4 text-lg font-semibold text-vesk-orange">{pillar.title}</h3>
          <p className="text-sm leading-[1.75] text-vesk-muted">{pillar.text}</p>
        </article>
      ))}
    </div>
  </section>
);
