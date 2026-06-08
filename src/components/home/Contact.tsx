import { ContactChannels } from '../contact/ContactChannels';
import { ContactForm } from '../contact/ContactForm';
import { SectionDesc, SectionLabel, SectionTitle } from './ui';

export const Contact = () => (
  <section id="contato" className="bg-vesk-dark page-px py-16 md:py-24 lg:py-[120px]">
    <div className="mb-12 text-center md:mb-[72px]">
      <SectionLabel centered showLine={false}>
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
    <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
      <ContactForm
        submitLabel="Quero falar com um especialista →"
        showPrivacyNote
      />
      <ContactChannels />
    </div>
  </section>
);
