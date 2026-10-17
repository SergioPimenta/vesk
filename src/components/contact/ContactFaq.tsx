import { ChevronDown } from 'lucide-react';
import { SectionLabel, SectionTitle } from '../home/ui';
import { contactFaqs } from './contactData';

export const ContactFaq = () => (
  <section className="bg-vesk-black page-px py-16 md:py-24">
    <div className="mx-auto max-w-3xl">
      <div className="mb-10 md:mb-12" data-reveal>
        <SectionLabel>Dúvidas frequentes</SectionLabel>
        <SectionTitle>Antes de enviar</SectionTitle>
      </div>

      <div className="divide-y divide-vesk-border rounded-2xl border border-vesk-border bg-vesk-dark-2" data-reveal>
        {contactFaqs.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-vesk-surface marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-vesk-orange-light sm:px-7 [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDown
                size={20}
                aria-hidden
                className="shrink-0 text-vesk-orange transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <p className="px-5 pb-5 text-[15px] leading-[1.75] text-vesk-mid sm:px-7">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
