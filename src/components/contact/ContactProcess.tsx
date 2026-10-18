import { SectionDesc, SectionLabel, SectionTitle } from '../home/ui';

const steps = [
  {
    num: '01',
    title: 'Você apresenta sua ideia',
    desc: 'Entendemos suas necessidades, objetivos e o que deseja desenvolver.',
  },
  {
    num: '02',
    title: 'Analisamos a melhor solução',
    desc: 'Avaliamos possibilidades, funcionalidades, escopo e necessidades técnicas.',
  },
  {
    num: '03',
    title: 'Você recebe uma proposta',
    desc: 'Apresentamos uma proposta personalizada, com informações sobre o projeto e os próximos passos.',
  },
] as const;

export const ContactProcess = () => (
  <section className="bg-vesk-dark page-px py-16 md:py-24">
    <div className="mb-10 max-w-2xl md:mb-14" data-reveal>
      <SectionLabel>Atendimento</SectionLabel>
      <SectionTitle>Como funciona nosso atendimento?</SectionTitle>
      <SectionDesc>
        Um processo organizado, para que você não precise chegar com todas as respostas.
      </SectionDesc>
    </div>

    <ol className="grid list-none gap-4 md:grid-cols-3">
      {steps.map((step, i) => (
        <li
          key={step.num}
          data-reveal
          style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
          className="relative rounded-2xl border border-vesk-border bg-vesk-dark-2 p-6 sm:p-7"
        >
          <span className="mono-tag text-vesk-orange">{step.num}</span>
          <h3 className="font-display mt-4 mb-2 text-lg font-normal text-vesk-surface">{step.title}</h3>
          <p className="text-[15px] leading-[1.7] text-vesk-mid">{step.desc}</p>
        </li>
      ))}
    </ol>
  </section>
);
