import { Link } from 'react-router-dom';

export const CtaBand = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-vesk-orange-light via-vesk-orange to-vesk-orange-deep page-px py-14 md:py-20">
    {/* engineered texture on the copper */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:44px_44px]"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)]"
      aria-hidden
    />
    <div className="relative grid grid-cols-1 items-start gap-10 sm:items-center md:grid-cols-2 md:gap-[60px]">
      <div data-reveal="left">
        <span className="font-mono text-[12px] tracking-[0.16em] text-[rgb(255_255_255/0.75)] uppercase">
          Vamos construir
        </span>
        <h2 className="font-display mt-3 text-[clamp(1.85rem,3.6vw,3rem)] leading-[1.05] font-extrabold tracking-tight text-white">
          Pronto para ter um sistema que realmente funciona?
        </h2>
        <p className="mt-4 max-w-md text-base font-light text-[rgb(255_255_255/0.82)]">
          Fale com a VESK e descubra como podemos desenvolver seu negócio com tecnologia. Respondemos em até 2
          horas úteis.
        </p>
      </div>
      <div className="flex flex-col items-start gap-4" data-reveal="right">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(255_255_255/0.16)] [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <strong className="block font-medium text-white">(41) 9690-2905</strong>
            <p className="font-mono text-[12px] text-[rgb(255_255_255/0.8)]">WhatsApp disponível</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(255_255_255/0.16)] [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <strong className="block font-medium text-white">hello@vesk.com.br</strong>
            <p className="font-mono text-[12px] text-[rgb(255_255_255/0.8)]">Resposta em até 24h</p>
          </div>
        </div>
        <Link
          to="/contato"
          className="mt-1 inline-flex items-center gap-2.5 rounded-lg bg-vesk-black px-8 py-3.5 text-sm font-semibold whitespace-nowrap text-vesk-surface no-underline shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-vesk-orange"
        >
          Falar com especialista →
        </Link>
        <p className="text-[13px] leading-relaxed text-[rgb(255_255_255/0.8)]">
          📍 Atendemos Curitiba e toda a região Sul — e desenvolvemos para o Brasil inteiro.
        </p>
      </div>
    </div>
  </div>
);
