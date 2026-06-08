import { SectionDesc, SectionLabel, SectionTitle } from './ui';

const steps = [
  { num: '01', title: 'Diagnóstico', desc: 'Entendemos seu negócio e seus objetivos a fundo', duration: '1–2 dias úteis' },
  { num: '02', title: 'Planejamento', desc: 'Criamos a estratégia e o plano ideal para sua solução', duration: '3–5 dias úteis' },
  { num: '03', title: 'Desenvolvimento', desc: 'Desenvolvemos com tecnologia de ponta e boas práticas', duration: 'Conforme escopo' },
  { num: '04', title: 'Testes', desc: 'Testamos cada detalhe com rigor para garantir qualidade', duration: 'Incluso no prazo' },
  { num: '05', title: 'Entrega', desc: 'Lançamos a solução com segurança e excelência', duration: 'Deploy e treinamento' },
  { num: '06', title: 'Suporte', desc: 'Acompanhamos de perto para que você continue crescendo', duration: 'Contínuo pós-entrega' },
];

export const Process = () => (
  <section id="processo" className="bg-vesk-dark page-px py-16 md:py-24 lg:py-[120px]">
    <div className="mb-12 text-center md:mb-20">
      <SectionLabel centered showLine={false}>
        Nossa metodologia
      </SectionLabel>
      <SectionTitle>Como trabalhamos</SectionTitle>
      <SectionDesc className="mx-auto">
        Um processo claro e estruturado para garantir qualidade, prazo e resultados em cada projeto.
      </SectionDesc>
    </div>
    <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-0">
      <div
        className="absolute top-7 right-[calc(100%/12)] left-[calc(100%/12)] hidden h-px bg-gradient-to-r from-vesk-orange to-[rgba(184,92,56,0.15)] xl:block"
        aria-hidden
      />
      {steps.map((step) => (
        <div key={step.num} className="group relative px-0 text-center xl:px-3">
          <div className="relative z-[1] mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-vesk-border-warm bg-vesk-dark-2 font-display text-[15px] font-bold text-vesk-orange transition-colors duration-200 group-hover:border-vesk-orange group-hover:bg-vesk-orange-dim">
            {step.num}
          </div>
          <h3 className="font-display mb-2 text-[15px] font-semibold">{step.title}</h3>
          <p className="text-xs leading-relaxed text-vesk-muted">{step.desc}</p>
          <p className="mt-2 text-[11px] text-vesk-muted">{step.duration}</p>
        </div>
      ))}
    </div>
  </section>
);
