import { IconBox, SectionDesc, SectionLabel, SectionTitle } from '../home/ui';

const values = [
  {
    title: 'Excelência técnica',
    desc: 'Código limpo, arquitetura sólida e as melhores práticas em cada entrega.',
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  },
  {
    title: 'Foco no cliente',
    desc: 'Entendemos o negócio antes da tecnologia para gerar impacto mensurável.',
    icon: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" />,
  },
  {
    title: 'Transparência',
    desc: 'Comunicação clara, prazos realistas e acompanhamento em todas as etapas.',
    icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Inovação contínua',
    desc: 'Stack moderna e evolução constante para manter suas soluções competitivas.',
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  },
];

export const AboutValues = () => (
  <section className="bg-vesk-dark px-12 py-[120px]">
    <div className="mb-16 text-center">
      <SectionLabel centered showLine={false}>
        Nossos valores
      </SectionLabel>
      <SectionTitle>Princípios que guiam cada projeto</SectionTitle>
      <SectionDesc className="mx-auto">
        Cultura orientada a resultado, qualidade e relacionamento de longo prazo com cada parceiro.
      </SectionDesc>
    </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {values.map((value) => (
        <div
          key={value.title}
          className="rounded-xl border border-vesk-border bg-vesk-dark-2 p-8 transition-colors hover:border-vesk-border-warm hover:bg-vesk-dark-3"
        >
          <div className="mb-5">
            <IconBox size="lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {value.icon}
              </svg>
            </IconBox>
          </div>
          <h3 className="font-display mb-3 text-base font-semibold">{value.title}</h3>
          <p className="text-sm leading-[1.7] text-vesk-muted">{value.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
