import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { SectionDesc, SectionLabel, SectionTitle } from '../home/ui';
import { track } from '../../lib/analytics';
import type { ProjectTypeValue } from '../../lib/leadOptions';
import { FORM_SECTION_ID } from './contactActions';
import { LeadForm } from './LeadForm';

const reassurance = [
  'Você não precisa ter conhecimento técnico.',
  'Não precisa ter o projeto todo definido.',
  'Orçamento personalizado, sem compromisso.',
] as const;

export const ContactFormSection = ({
  service,
  onServiceChange,
}: {
  service: ProjectTypeValue | '';
  onServiceChange: (value: ProjectTypeValue | '') => void;
}) => (
  <section id={FORM_SECTION_ID} className="scroll-mt-20 bg-vesk-dark page-px py-16 md:py-24 lg:py-[100px]">
    <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-x-16 lg:gap-y-10">
      <div className="lg:col-start-1 lg:row-start-1">
        <SectionLabel>Orçamento</SectionLabel>
        <SectionTitle>Conte sua ideia. A gente cuida do resto.</SectionTitle>
        <SectionDesc>
          Preencha o essencial e nossa equipe entra em contato pelo WhatsApp para entender o que você precisa.
        </SectionDesc>
      </div>

      <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <LeadForm service={service} onServiceChange={onServiceChange} />
      </div>

      <div className="lg:col-start-1 lg:row-start-2">
        <ul className="mb-8 grid list-none gap-3">
          {reassurance.map((text) => (
            <li key={text} className="flex items-start gap-3 text-[15px] leading-snug text-vesk-mid">
              <Check size={18} strokeWidth={2.4} className="mt-0.5 shrink-0 text-vesk-orange" aria-hidden />
              {text}
            </li>
          ))}
        </ul>

        <div className="rounded-xl border border-vesk-border bg-vesk-dark-2 p-5">
          <p className="mb-3 text-sm font-medium text-vesk-surface">Ainda está pesquisando?</p>
          <div className="flex flex-col gap-1 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
            <Link
              to="/portfolio"
              onClick={() => track('portfolio_click', { cta_location: 'form_aside' })}
              className="inline-flex min-h-[44px] items-center text-vesk-orange-light no-underline hover:text-vesk-surface"
            >
              Conheça nossos projetos →
            </Link>
            <Link
              to="/servicos"
              onClick={() => track('solutions_click', { cta_location: 'form_aside' })}
              className="inline-flex min-h-[44px] items-center text-vesk-orange-light no-underline hover:text-vesk-surface"
            >
              Veja nossos serviços →
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
