import { whatsappUrl } from '../../lib/site';
import { openQuote, trackWhatsappClick } from './contactActions';

export const ContactFinalCta = ({ interest, service }: { interest?: string; service?: string }) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-vesk-orange-light via-vesk-orange to-vesk-orange-deep page-px pt-14 pb-24 md:py-20">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:44px_44px]"
      aria-hidden
    />
    <div className="relative mx-auto max-w-3xl text-center" data-reveal>
      <h2 className="font-display text-[clamp(1.85rem,4vw,3.1rem)] leading-[1.06] font-extrabold tracking-tight text-balance text-white">
        Pronto para transformar sua ideia em uma solução real?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base font-light text-[rgb(255_255_255/0.9)] sm:text-lg">
        Conte com a VESK para desenvolver a solução que seu projeto precisa.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
        <a
          href="#formulario"
          onClick={(e) => {
            e.preventDefault();
            openQuote('final_cta');
          }}
          className="inline-flex min-h-[54px] items-center justify-center rounded-lg bg-vesk-black px-8 text-sm font-semibold text-vesk-surface no-underline shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-vesk-orange"
        >
          Solicitar meu orçamento
        </a>
        <a
          href={whatsappUrl(interest)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick('final_cta', service)}
          className="inline-flex min-h-[54px] items-center justify-center rounded-lg border border-white/70 px-8 text-sm font-semibold text-white no-underline transition-colors duration-200 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-vesk-orange"
        >
          Falar pelo WhatsApp
        </a>
      </div>
    </div>
  </div>
);
