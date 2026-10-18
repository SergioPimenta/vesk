import { MessageCircle } from 'lucide-react';
import { btnPrimaryClasses } from '../home/ui';
import { whatsappUrl } from '../../lib/site';
import { trackWhatsappClick } from './contactActions';

export const ContactWhatsapp = ({ interest, service }: { interest?: string; service?: string }) => (
  <section className="bg-vesk-black page-px py-16 md:py-20">
    <div
      data-reveal
      className="relative overflow-hidden rounded-3xl border border-vesk-border-warm bg-gradient-to-br from-vesk-dark-3 via-vesk-dark-2 to-vesk-dark p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-14"
    >
      <div
        className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(210,122,68,0.22),transparent_70%)]"
        aria-hidden
      />
      <div className="relative max-w-2xl">
        <h2 className="font-display text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.08] font-normal tracking-[-0.015em] text-balance text-vesk-surface">
          Prefere conversar diretamente com nossa equipe?
        </h2>
        <p className="mt-4 text-base leading-[1.7] font-light text-vesk-mid sm:text-lg">
          Conte sua ideia, tire dúvidas e descubra como a VESK pode ajudar a transformar seu projeto em realidade.
        </p>
      </div>

      <div className="relative mt-8 lg:mt-0 lg:shrink-0">
        <a
          href={whatsappUrl(interest)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick('whatsapp_block', service)}
          className={btnPrimaryClasses('min-h-[56px] w-full justify-center px-5 whitespace-nowrap sm:w-auto sm:px-9')}
        >
          <MessageCircle size={20} aria-hidden />
          Conversar pelo WhatsApp
        </a>
        <p className="mt-4 text-[13px] leading-relaxed text-vesk-mid">
          Seg a sex, 09h às 18h · Sáb, 09h às 13h
        </p>
        <p className="text-[13px] leading-relaxed text-vesk-mid">
          Ou escreva para{' '}
          <a
            href="mailto:comercial@vesk.com.br"
            className="inline-flex min-h-[44px] items-center text-vesk-surface underline underline-offset-4"
          >
            comercial@vesk.com.br
          </a>
        </p>
      </div>
    </div>
  </section>
);
