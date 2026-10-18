import { SectionDesc, SectionLabel, SectionTitle } from './ui';

const steps = [
  { num: '01', title: 'Diagnóstico', desc: 'Entendemos seu negócio e seus objetivos a fundo.', duration: '1 a 2 dias úteis' },
  { num: '02', title: 'Planejamento', desc: 'Criamos a estratégia e o plano ideal para sua solução.', duration: '3 a 5 dias úteis' },
  { num: '03', title: 'Desenvolvimento', desc: 'Desenvolvemos com tecnologia de ponta e boas práticas.', duration: 'Conforme escopo' },
  { num: '04', title: 'Testes', desc: 'Testamos cada detalhe com rigor para garantir qualidade.', duration: 'Incluso no prazo' },
  { num: '05', title: 'Entrega', desc: 'Lançamos a solução com segurança e excelência.', duration: 'Deploy e treinamento' },
  { num: '06', title: 'Suporte', desc: 'Acompanhamos de perto para que você continue crescendo.', duration: 'Contínuo' },
];

export const Process = () => (
  <section id="processo" className="scroll-mt-24 bg-vesk-black page-px py-[72px] md:py-24">
    <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-16" data-reveal>
      <SectionLabel centered>Como trabalhamos</SectionLabel>
      <SectionTitle>Um processo claro, do primeiro contato ao suporte.</SectionTitle>
      <SectionDesc className="mx-auto">
        Um processo estruturado para garantir qualidade, prazo e resultados em cada projeto.
      </SectionDesc>
    </div>

    <ol className="relative grid list-none grid-cols-2 gap-x-[22px] gap-y-12 md:grid-cols-3 xl:grid-cols-6 xl:gap-y-0">
      <span
        className="absolute top-[30px] right-[8%] left-[8%] hidden h-px bg-[linear-gradient(90deg,transparent,var(--color-vesk-orange)_12%,var(--color-vesk-orange)_88%,transparent)] opacity-50 xl:block"
        aria-hidden
      />
      {steps.map((step, i) => (
        <li key={step.num} data-reveal style={{ ['--reveal-delay' as string]: `${i * 70}ms` }} className="text-center">
          <div className="font-display relative mx-auto mb-[22px] grid h-[60px] w-[60px] place-items-center rounded-full border border-vesk-orange bg-vesk-black text-[22px] text-vesk-orange">
            {step.num}
          </div>
          <h3 className="font-display mb-2 text-[22px] leading-[1.1] font-normal text-vesk-surface">{step.title}</h3>
          <p className="text-sm leading-[1.5] text-vesk-muted">{step.desc}</p>
          <small className="mono-tag mt-3 block text-[11px] tracking-[0.18em] text-vesk-orange">{step.duration}</small>
        </li>
      ))}
    </ol>
  </section>
);
