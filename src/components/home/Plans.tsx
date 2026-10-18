import { Check } from 'lucide-react';
import { btnOutlineClasses, btnPrimaryClasses, SectionDesc, SectionLabel } from './ui';
import { cn } from '../../lib/cn';
import { track } from '../../lib/analytics';
import type { ProjectTypeValue } from '../../lib/leadOptions';
import { plans } from '../../lib/plans';
import { scrollToLeadForm } from '../contact/contactActions';

export const Plans = ({ onChoose }: { onChoose: (service: ProjectTypeValue, plan: string) => void }) => (
  <section id="planos" className="scroll-mt-24 bg-vesk-black page-px pb-[72px] md:pb-24">
    <div className="grid items-center gap-8 rounded-[14px] border border-vesk-border bg-vesk-dark px-[18px] py-7 sm:p-10 2xl:grid-cols-[1fr_3fr]">
      <div data-reveal className="max-w-[640px] 2xl:max-w-none">
        <SectionLabel>Planos</SectionLabel>
        <h2 className="font-display text-[clamp(1.875rem,2.7vw,2.25rem)] leading-[1.08] font-normal tracking-[-0.015em] text-balance text-vesk-surface">
          Soluções para cada etapa do seu negócio.
        </h2>
        <SectionDesc className="text-[15.5px]">Transparência, qualidade e suporte em todos os planos.</SectionDesc>
      </div>

      <ul className="grid list-none items-stretch gap-4 gap-y-7 sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <li
            key={plan.name}
            className={cn(
              'relative flex flex-col rounded-[10px] border px-[22px] py-[26px]',
              plan.featured
                ? 'border-vesk-orange/60 bg-[linear-gradient(180deg,#2a1d15,#1a1512)] shadow-[0_30px_60px_-26px_rgba(0,0,0,0.8),0_0_0_1px_rgba(210,122,68,0.25)] xl:-translate-y-3'
                : 'border-vesk-border bg-vesk-dark-2',
            )}
          >
            {plan.featured && (
              <span className="bg-copper absolute -top-[11px] left-[22px] rounded px-2.5 py-1 text-[10.5px] font-semibold tracking-[0.16em] text-white uppercase">
                Mais escolhido
              </span>
            )}
            <h3 className="font-display text-[21px] leading-[1.1] font-normal text-vesk-surface">{plan.name}</h3>
            <p
              className={cn(
                'font-display mt-2 mb-[18px] leading-[1.1]',
                plan.price.startsWith('R$') ? 'text-[34px]' : 'py-1 text-[26px]',
                plan.featured ? 'text-vesk-orange-light' : 'text-vesk-orange',
              )}
            >
              {plan.price}
            </p>
            <ul className="mb-6 grid flex-1 list-none content-start gap-[9px]">
              {plan.items.map((item) => (
                <li key={item} className="grid grid-cols-[16px_1fr] gap-2 text-sm leading-[1.4] text-vesk-mid">
                  <Check size={16} strokeWidth={2} className={cn('mt-px', plan.featured ? 'text-vesk-orange-light' : 'text-vesk-orange')} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#formulario"
              onClick={(e) => {
                e.preventDefault();
                onChoose(plan.service, plan.name);
                track('plan_select', { plan: plan.name, service: plan.service });
                scrollToLeadForm();
              }}
              aria-label={`${plan.cta}: ${plan.name}`}
              className={
                plan.featured
                  ? btnPrimaryClasses('min-h-[44px] w-full px-3! text-sm whitespace-nowrap')
                  : btnOutlineClasses('min-h-[44px] w-full px-3! text-sm whitespace-nowrap')
              }
            >
              {plan.cta}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-[13px] text-vesk-muted 2xl:col-start-2 2xl:-mt-2">
        Valores de referência. O orçamento final é confirmado após o diagnóstico do projeto.
      </p>
    </div>
  </section>
);
