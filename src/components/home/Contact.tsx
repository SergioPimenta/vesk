import { ContactChannels } from '../contact/ContactChannels';
import { ContactForm } from '../contact/ContactForm';
import { SectionDesc, SectionLabel, SectionTitle } from './ui';

export const Contact = () => (
  <section id="contato" className="bg-vesk-dark page-px py-[120px]">
    <div className="mb-[72px] text-center">
      <SectionLabel centered showLine={false}>
        Contato
      </SectionLabel>
      <SectionTitle>
        Vamos conversar
        <br />
        sobre seu projeto
      </SectionTitle>
      <SectionDesc className="mx-auto">
        Entre em contato e descubra como podemos transformar seu negócio com tecnologia de ponta.
      </SectionDesc>
    </div>
    <div className="mx-auto grid max-w-5xl items-start gap-16">
      <ContactForm />
      <ContactChannels />
    </div>
  </section>
);
