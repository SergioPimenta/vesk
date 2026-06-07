import { externalLinkProps } from '../../lib/links';
import { SectionDesc, SectionLabel, SectionTitle } from '../home/ui';
import { ContactChannels } from './ContactChannels';
import { ContactForm } from './ContactForm';

export const ContactMain = () => (
  <section id="formulario" className="bg-vesk-dark page-px py-16 md:py-24 lg:py-[100px]">
    <div className="mb-14 max-w-2xl">
      <SectionLabel>Formulário</SectionLabel>
      <SectionTitle>Envie sua mensagem</SectionTitle>
      <SectionDesc>
        Preencha os campos abaixo e retornaremos com as próximas etapas. Quanto mais detalhes sobre o
        projeto, mais precisa será nossa resposta.
      </SectionDesc>
    </div>

    <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
      <div className="rounded-2xl border border-vesk-border bg-vesk-black p-8 md:p-10">
        <ContactForm />
      </div>

      <aside className="flex flex-col gap-6">
        <ContactChannels stacked />

        <div className="rounded-xl border border-vesk-border bg-vesk-dark-2 p-6">
          <h3 className="font-display mb-3 text-sm font-semibold text-vesk-orange">Horário de atendimento</h3>
          <ul className="flex list-none flex-col gap-2 text-[13px] text-vesk-muted">
            <li className="flex justify-between gap-4">
              <span>Segunda a sexta</span>
              <span className="text-vesk-mid">09h — 18h</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sábado</span>
              <span className="text-vesk-mid">09h — 13h</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Domingo e feriados</span>
              <span className="text-vesk-mid">Fechado</span>
            </li>
          </ul>
        </div>

        <a
          href="https://wa.me/554196902905"
          className="flex items-center justify-center gap-2 rounded-lg border border-vesk-border-warm bg-vesk-orange-dim px-6 py-4 text-sm font-medium text-vesk-surface no-underline transition-all duration-200 hover:border-vesk-orange hover:bg-[rgb(184_92_56/0.22)]"
          {...externalLinkProps('https://wa.me/554196902905')}
        >
          <svg className="h-5 w-5 text-vesk-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Preferir WhatsApp? Fale agora
        </a>
      </aside>
    </div>
  </section>
);
