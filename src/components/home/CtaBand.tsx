import { HeartHandshake, ShieldCheck, TrendingUp, Clock } from 'lucide-react';
import { ArrowIcon } from './icons';
import { btnPrimaryClasses, MonoTag } from './ui';
import { whatsappUrl } from '../../lib/site';
import { trackWhatsappClick } from '../contact/contactActions';

const promises = [
  { label: 'Atendimento consultivo', icon: <HeartHandshake /> },
  { label: 'Propostas personalizadas', icon: <ShieldCheck /> },
  { label: 'Compromisso com resultados', icon: <TrendingUp /> },
];

export const CtaBand = () => (
  <section className="relative overflow-hidden border-t border-vesk-border bg-[#121417] page-px py-16 text-white">
    <span className="pointer-events-none absolute -top-[60px] -left-[240px] h-[420px] w-[420px] rounded-full border border-vesk-orange/35" aria-hidden />
    <span className="pointer-events-none absolute -top-[240px] -right-[300px] h-[520px] w-[520px] rounded-full border border-vesk-orange/35" aria-hidden />

    <div className="relative z-[1] grid items-center gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
      <div className="md:col-span-2 lg:col-span-1" data-reveal>
        <MonoTag className="mb-[18px] flex text-vesk-orange-light">Vamos conversar?</MonoTag>
        <h2 className="font-display text-[clamp(1.875rem,3.4vw,2.5rem)] leading-[1.08] font-normal tracking-[-0.015em] text-balance">
          Seu próximo projeto pode começar agora.
        </h2>
        <p className="mt-3.5 max-w-[44ch] text-[15px] leading-relaxed text-vesk-mid">
          Fale com a VESK e descubra como podemos desenvolver seu negócio com tecnologia. Atendemos Curitiba e toda a
          região Sul e desenvolvemos para o Brasil inteiro.
        </p>
      </div>

      <div className="grid justify-items-start gap-3.5" data-reveal>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick('cta_band')}
          className={btnPrimaryClasses()}
        >
          Falar no WhatsApp
          <ArrowIcon />
        </a>
        <small className="flex items-center gap-2 text-sm text-vesk-mid">
          <Clock size={16} className="text-vesk-orange-light" aria-hidden />
          Seg a sex, 09h às 18h · Sáb, 09h às 13h
        </small>
      </div>

      <ul
        className="grid list-none gap-4 border-t border-vesk-orange/35 pt-[22px] md:border-t-0 md:border-l md:pt-0 md:pl-8"
        data-reveal
      >
        {promises.map((item) => (
          <li key={item.label} className="flex items-center gap-3 text-[14.5px] text-vesk-mid [&_svg]:h-5 [&_svg]:w-5 [&_svg]:text-vesk-orange-light">
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
