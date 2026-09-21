import { SectionDesc, SectionLabel, SectionTitle } from '../home/ui';
import { contactFaqs } from './contactData';

export const ContactFaq = () => (
  <section className="bg-vesk-black page-px py-16 md:py-24 lg:py-[100px]">
    <div className="mb-14 text-center" data-reveal>
      <SectionLabel centered showLine={false}>
        Dúvidas frequentes
      </SectionLabel>
      <SectionTitle className="mx-auto">Antes de enviar</SectionTitle>
      <SectionDesc className="mx-auto">
        Respostas rápidas para as perguntas mais comuns sobre nosso processo comercial e técnico.
      </SectionDesc>
    </div>

    <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
      {contactFaqs.map((item, i) => (
        <article
          key={item.q}
          data-reveal
          style={{ ['--reveal-delay' as string]: `${(i % 2) * 90}ms` }}
          className="rounded-2xl border border-vesk-border bg-vesk-dark-2 px-7 py-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-vesk-border-warm hover:bg-vesk-dark-3"
        >
          <h3 className="font-display mb-3 text-[15px] font-semibold leading-snug">{item.q}</h3>
          <p className="text-sm leading-[1.75] text-vesk-muted">{item.a}</p>
        </article>
      ))}
    </div>
  </section>
);
