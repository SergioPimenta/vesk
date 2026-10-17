import { Globe, LayoutDashboard, ShoppingCart, Workflow } from 'lucide-react';
import type { ReactNode } from 'react';
import { IconBox, SectionDesc, SectionLabel, SectionTitle } from '../home/ui';
import { track } from '../../lib/analytics';
import type { ProjectTypeValue } from '../../lib/leadOptions';
import { scrollToLeadForm } from './contactActions';

const cards: { value: ProjectTypeValue; title: string; desc: string; icon: ReactNode }[] = [
  {
    value: 'site',
    title: 'Sites profissionais',
    desc: 'Criação e modernização de sites institucionais, páginas comerciais e experiências digitais.',
    icon: <Globe />,
  },
  {
    value: 'loja',
    title: 'Lojas virtuais',
    desc: 'Desenvolvimento de e-commerces personalizados, com foco em experiência de compra e integração.',
    icon: <ShoppingCart />,
  },
  {
    value: 'sistema',
    title: 'Sistemas e aplicativos',
    desc: 'Desenvolvimento de plataformas, sistemas internos, aplicativos e soluções sob medida.',
    icon: <LayoutDashboard />,
  },
  {
    value: 'crm-automacao',
    title: 'CRM e automações',
    desc: 'Centralização de informações, organização comercial, integração de ferramentas e automação de processos.',
    icon: <Workflow />,
  },
];

export const ContactServices = ({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (value: ProjectTypeValue) => void;
}) => (
  <section id="solucoes" className="scroll-mt-20 bg-vesk-black page-px py-16 md:py-24">
    <div className="mb-10 max-w-2xl md:mb-14" data-reveal>
      <SectionLabel>Soluções</SectionLabel>
      <SectionTitle>O que você pode desenvolver com a VESK?</SectionTitle>
      <SectionDesc>
        Escolha a solução que mais se parece com a sua necessidade. Se ainda não sabe, a gente ajuda a descobrir.
      </SectionDesc>
    </div>

    <ul className="grid list-none gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, i) => {
        const isSelected = selected === card.value;
        return (
          <li
            key={card.value}
            data-reveal
            style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
            className={`flex flex-col rounded-2xl border bg-vesk-dark-2 p-6 transition-[border-color,background-color] duration-300 hover:border-vesk-border-warm hover:bg-vesk-dark-3 ${
              isSelected ? 'border-vesk-orange' : 'border-vesk-border'
            }`}
          >
            <IconBox size="lg" decorative>
              {card.icon}
            </IconBox>
            <h3 className="font-display mt-5 mb-2 text-lg font-bold text-vesk-surface">{card.title}</h3>
            <p className="mb-6 text-[15px] leading-[1.65] text-vesk-mid">{card.desc}</p>
            <button
              type="button"
              aria-label={`Quero essa solução: ${card.title}`}
              onClick={() => {
                onSelect(card.value);
                track('service_select', { service: card.value, source: 'card' });
                scrollToLeadForm();
              }}
              className="mt-auto inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-vesk-border-warm bg-vesk-orange-dim px-5 text-sm font-semibold text-vesk-surface transition-colors duration-200 hover:border-vesk-orange hover:bg-[rgb(194_101_59/0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesk-orange-light focus-visible:ring-offset-2 focus-visible:ring-offset-vesk-dark-2"
            >
              {isSelected ? 'Selecionado ✓' : 'Quero essa solução'}
            </button>
          </li>
        );
      })}
    </ul>
  </section>
);
