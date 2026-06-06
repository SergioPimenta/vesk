export const CtaBand = () => (
  <div className="grid grid-cols-2 items-center gap-[60px] bg-vesk-orange page-px py-20">
    <div>
      <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight font-extrabold tracking-tight text-white">
        Pronto para transformar sua empresa?
      </h2>
      <p className="mt-3 text-base font-light text-[rgb(255_255_255/0.75)]">
        Fale com a VESK e descubra como podemos alavancar seu negócio com tecnologia.
      </p>
    </div>
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(255_255_255/0.15)] [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <strong className="block font-medium text-white">(41) 9690-2905</strong>
          <p className="text-[13px] text-[rgb(255_255_255/0.8)]">WhatsApp disponível</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(255_255_255/0.15)] [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <strong className="block font-medium text-white">hello@vesk.com.br</strong>
          <p className="text-[13px] text-[rgb(255_255_255/0.8)]">Resposta em até 24h</p>
        </div>
      </div>
      <a
        href="/contato"
        className="inline-flex items-center gap-2.5 rounded bg-vesk-surface px-8 py-3.5 text-sm font-semibold whitespace-nowrap text-vesk-orange no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e8d9ca]"
      >
        Falar com especialista →
      </a>
    </div>
  </div>
);
