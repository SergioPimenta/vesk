import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { ArrowIcon } from './icons';
import { btnOutlineClasses, SectionLabel, SectionTitle } from './ui';
import { products } from '../products/productsData';

const checks = [
  'Equipe especializada com foco em resultado e qualidade técnica comprovada',
  'Metodologia ágil com entregas contínuas e comunicação transparente',
  'Suporte dedicado e relacionamento de longo prazo com cada cliente',
];

const nums = [
  { value: '50+', label: 'Projetos entregues' },
  { value: '30+', label: 'Clientes atendidos' },
  { value: String(products.length), label: 'Produtos próprios' },
];

export const About = () => (
  <section id="sobre" className="scroll-mt-24 bg-vesk-black page-px pt-6 pb-[72px] md:pb-24">
    <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[72px]">
      <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]" data-reveal="left">
        <span
          className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-vesk-orange/25 sm:block"
          aria-hidden
        />
        {/* Troque por uma foto da equipe quando houver: <img> dentro do arco. */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[999px_999px_14px_14px] bg-[radial-gradient(circle_at_50%_30%,#e9c3a2_0%,#b9764a_38%,#5b3422_80%)]">
          <span className="absolute inset-4 rounded-[999px_999px_8px_8px] border border-[rgba(255,240,225,0.45)]" aria-hidden />
          <img
            src="/assets/logo-mark.svg"
            alt=""
            loading="lazy"
            className="absolute top-1/2 left-1/2 w-[42%] -translate-x-1/2 -translate-y-1/2 opacity-95 brightness-0 invert"
          />
        </div>
      </div>

      <div data-reveal="right">
        <SectionLabel>Sobre a VESK</SectionLabel>
        <SectionTitle>
          Tecnologia, pessoas <span className="text-vesk-orange">e propósito.</span>
        </SectionTitle>
        <p className="mt-[18px] mb-[26px] max-w-[56ch] text-[16.5px] leading-[1.6] text-vesk-muted">
          A VESK nasceu para transformar ideias em soluções digitais inteligentes. Unimos tecnologia, criatividade e
          estratégia para entregar software que impulsiona negócios e melhora vidas.
        </p>
        <ul className="mb-[34px] grid list-none gap-3.5">
          {checks.map((item) => (
            <li key={item} className="grid grid-cols-[22px_1fr] gap-3 text-vesk-mid">
              <Check size={20} strokeWidth={2} className="mt-0.5 text-vesk-orange" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <dl className="mb-[34px] flex gap-6 border-t border-vesk-border pt-[26px] sm:gap-10">
          {nums.map((num) => (
            <div key={num.label} className="flex flex-col-reverse">
              <dt className="text-[13px] text-vesk-muted">{num.label}</dt>
              <dd className="font-display text-[38px] leading-none text-vesk-orange">{num.value}</dd>
            </div>
          ))}
        </dl>
        <Link to="/sobre" className={btnOutlineClasses()}>
          Conheça nossa história
          <ArrowIcon />
        </Link>
      </div>
    </div>
  </section>
);
