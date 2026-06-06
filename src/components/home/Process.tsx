import { SectionDesc, SectionLabel, SectionTitle } from './ui';

const steps = [
  { num: '01', title: 'Diagnóstico', desc: 'Entendemos seu negócio e seus objetivos a fundo' },
  { num: '02', title: 'Planejamento', desc: 'Criamos a estratégia e o plano ideal para sua solução' },
  { num: '03', title: 'Desenvolvimento', desc: 'Desenvolvemos com tecnologia de ponta e boas práticas' },
  { num: '04', title: 'Testes', desc: 'Testamos cada detalhe com rigor para garantir qualidade' },
  { num: '05', title: 'Entrega', desc: 'Lançamos a solução com segurança e excelência' },
  { num: '06', title: 'Suporte', desc: 'Acompanhamos de perto para que você continue crescendo' },
];

export const Process = () => (
  <section id="como-trabalhamos" className="bg-vesk-dark page-px py-[120px]">
    <div className="mb-20 text-center">
      <SectionLabel centered showLine={false}>
        Nossa metodologia
      </SectionLabel>
      <SectionTitle>Como trabalhamos</SectionTitle>
      <SectionDesc className="mx-auto">
        Um processo claro e estruturado para garantir qualidade, prazo e resultados em cada projeto.
      </SectionDesc>
    </div>
    <div className="relative grid grid-cols-6 gap-0">
      <div
        className="absolute top-7 right-[calc(100%/12)] left-[calc(100%/12)] h-px bg-gradient-to-r from-vesk-orange to-[rgba(184,92,56,0.15)]"
        aria-hidden
      />
      {steps.map((step) => (
        <div key={step.num} className="group relative px-3 text-center">
          <div className="relative z-[1] mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-vesk-border-warm bg-vesk-dark-2 font-display text-[15px] font-bold text-vesk-orange transition-colors duration-200 group-hover:border-vesk-orange group-hover:bg-vesk-orange-dim">
            {step.num}
          </div>
          <h4 className="font-display mb-2 text-[15px] font-semibold">{step.title}</h4>
          <p className="text-xs leading-relaxed text-vesk-muted">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
