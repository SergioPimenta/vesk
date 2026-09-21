import { externalLinkProps } from '../../lib/links';
import { ContactChannels } from '../contact/ContactChannels';
import { ContactForm } from '../contact/ContactForm';
import { SectionDesc, SectionLabel, SectionTitle } from './ui';

export const Contact = () => (
  <section id="contato" className="bg-vesk-dark page-px py-16 md:py-24 lg:py-[120px]">
    <div className="mb-12 text-center md:mb-[72px]" data-reveal>
      <SectionLabel centered index="06">
        Contato
      </SectionLabel>
      <SectionTitle>
        Vamos conversar
        <br />
        sobre seu projeto
      </SectionTitle>
      <SectionDesc className="mx-auto">
        Preencha o formulário e um especialista da VESK entra em contato em até 2 horas úteis. Sem compromisso,
        sem enrolação.
      </SectionDesc>
    </div>

    <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8" data-reveal>
      <div className="rounded-2xl border border-vesk-border bg-vesk-dark-2 p-6 sm:p-8">
        <ContactForm submitLabel="Quero falar com um especialista" showPrivacyNote />
      </div>

      <aside className="flex flex-col gap-4">
        <ContactChannels stacked />

        <div className="rounded-2xl border border-vesk-border bg-vesk-dark-2 p-6">
          <h3 className="mono-tag mb-4 text-vesk-orange">Horário de atendimento</h3>
          <ul className="flex list-none flex-col gap-2.5 text-[13px] text-vesk-muted">
            <li className="flex justify-between gap-4">
              <span>Segunda a sexta</span>
              <span className="font-mono text-vesk-mid">09h — 18h</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sábado</span>
              <span className="font-mono text-vesk-mid">09h — 13h</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Domingo e feriados</span>
              <span className="font-mono text-vesk-mid">Fechado</span>
            </li>
          </ul>
        </div>

        <a
          href="https://wa.me/554196902905"
          className="mt-auto flex items-center justify-center gap-2.5 rounded-2xl border border-vesk-border-warm bg-gradient-to-br from-vesk-orange-dim to-transparent px-6 py-5 text-sm font-semibold text-vesk-surface no-underline transition-colors duration-200 hover:border-vesk-orange hover:bg-vesk-orange-dim"
          {...externalLinkProps('https://wa.me/554196902905')}
        >
          <svg className="h-5 w-5 text-vesk-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Prefere WhatsApp? Fale agora →
        </a>
      </aside>
    </div>
  </section>
);
