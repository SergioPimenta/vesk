import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '../components/home/icons';
import { BtnOutline, BtnPrimary, MonoTag, pageHeroTitleClass } from '../components/home/ui';
import { Contact } from '../components/home/Contact';
import { CtaBand } from '../components/home/CtaBand';
import { Plans } from '../components/home/Plans';
import { Process } from '../components/home/Process';
import { PublicLayout } from '../components/layout/PublicLayout';
import { PageSeo } from '../components/seo/PageSeo';
import { openQuote, smoothScrollTo } from '../components/contact/contactActions';
import { cn } from '../lib/cn';
import { lowestPlanPrice } from '../lib/plans';
import type { ProjectTypeValue } from '../lib/leadOptions';

const PlansPage = () => {
  // Escolher um plano pré-preenche o formulário de contato no fim da página.
  const [service, setService] = useState<ProjectTypeValue | ''>('');
  const [plan, setPlan] = useState<string | undefined>();

  return (
    <PublicLayout>
      <PageSeo page="planos" />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-vesk-black page-px pt-[112px] pb-12 md:pt-[140px] md:pb-16">
          <div
            className="pointer-events-none absolute -top-[260px] -right-[200px] h-[640px] w-[640px] rounded-full border border-vesk-orange/25"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-[200px] -left-[200px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(210,122,68,0.12)_0%,transparent_68%)]"
            aria-hidden
          />
          <div className="relative max-w-3xl">
            <nav aria-label="Você está em" className="animate-fade-up mb-6 text-sm text-vesk-muted">
              <Link to="/" className="text-vesk-mid no-underline hover:text-vesk-surface">
                Início
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <span aria-current="page">Planos</span>
            </nav>
            <div className="animate-fade-up mb-[18px] [animation-delay:60ms]">
              <MonoTag>Planos e preços &nbsp;•&nbsp; Curitiba, PR</MonoTag>
            </div>
            <h1 className={cn('animate-fade-up text-vesk-surface [animation-delay:120ms]', pageHeroTitleClass)}>
              Planos que cabem no seu <span className="text-vesk-orange">projeto.</span>
            </h1>
            <p className="animate-fade-up mt-[26px] max-w-[60ch] text-lg leading-[1.6] text-vesk-muted [animation-delay:200ms]">
              Landing pages, sites profissionais e lojas virtuais com valor de referência, e sistemas sob medida com
              condição especial. Escolha o plano e confirmamos o orçamento final depois de entender o seu projeto.
            </p>
            <p className="animate-fade-up mt-4 text-base text-vesk-mid [animation-delay:240ms]">
              Planos a partir de{' '}
              <strong className="font-display text-2xl font-normal text-vesk-orange-light">
                R$ {lowestPlanPrice.toLocaleString('pt-BR')}
              </strong>
            </p>
            <div className="animate-fade-up mt-9 flex flex-col gap-3.5 [animation-delay:300ms] sm:flex-row sm:flex-wrap">
              <BtnPrimary
                href="#planos"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('planos');
                }}
              >
                Ver planos
                <ArrowIcon />
              </BtnPrimary>
              <BtnOutline
                href="#formulario"
                onClick={(e) => {
                  e.preventDefault();
                  openQuote('planos_hero');
                }}
              >
                Solicitar orçamento
              </BtnOutline>
            </div>
          </div>
        </section>

        <Plans
          onChoose={(value, name) => {
            setService(value);
            setPlan(name);
          }}
        />
        <Process />
        <Contact
          service={service}
          onServiceChange={(value) => {
            setService(value);
            setPlan(undefined);
          }}
          plan={plan}
        />
        <CtaBand />
      </main>
    </PublicLayout>
  );
};

export default PlansPage;
