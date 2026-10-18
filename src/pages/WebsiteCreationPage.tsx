import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown } from 'lucide-react';
import { ArrowIcon } from '../components/home/icons';
import { BtnOutline, BtnPrimary, MonoTag, SectionDesc, SectionLabel, SectionTitle, pageHeroTitleClass } from '../components/home/ui';
import { Contact } from '../components/home/Contact';
import { CtaBand } from '../components/home/CtaBand';
import { Plans } from '../components/home/Plans';
import { Portfolio } from '../components/home/Portfolio';
import { Process } from '../components/home/Process';
import { PublicLayout } from '../components/layout/PublicLayout';
import { PageSeo } from '../components/seo/PageSeo';
import { included, siteTypes, websiteFaqs } from '../components/websites/websitesData';
import { openQuote, smoothScrollTo } from '../components/contact/contactActions';
import { cn } from '../lib/cn';
import { lowestPlanPrice } from '../lib/plans';
import type { ProjectTypeValue } from '../lib/leadOptions';

const WebsiteCreationPage = () => {
  const [service, setService] = useState<ProjectTypeValue | ''>('site');
  const [plan, setPlan] = useState<string | undefined>();

  return (
    <PublicLayout>
      <PageSeo page="criacaoDeSites" />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-vesk-black page-px pt-[112px] pb-16 md:pt-[140px] md:pb-24">
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
              <span aria-current="page">Criação de sites</span>
            </nav>
            <div className="animate-fade-up mb-[18px] [animation-delay:60ms]">
              <MonoTag>Sites profissionais &nbsp;•&nbsp; Curitiba, PR</MonoTag>
            </div>
            <h1 className={cn('animate-fade-up text-vesk-surface [animation-delay:120ms]', pageHeroTitleClass)}>
              Criação de sites em Curitiba que <span className="text-vesk-orange">trazem clientes.</span>
            </h1>
            <p className="animate-fade-up mt-[26px] max-w-[60ch] text-lg leading-[1.6] text-vesk-muted [animation-delay:200ms]">
              Criamos sites profissionais, landing pages e lojas virtuais rápidos, bonitos e preparados para aparecer no
              Google. Do primeiro rascunho à publicação, você tem uma equipe de Curitiba cuidando de tudo.
            </p>
            <p className="animate-fade-up mt-4 text-base text-vesk-mid [animation-delay:240ms]">
              Sites a partir de{' '}
              <strong className="font-display text-2xl font-normal text-vesk-orange-light">
                R$ {lowestPlanPrice.toLocaleString('pt-BR')}
              </strong>
            </p>
            <div className="animate-fade-up mt-9 flex flex-col gap-3.5 [animation-delay:300ms] sm:flex-row sm:flex-wrap">
              <BtnPrimary
                href="#formulario"
                onClick={(e) => {
                  e.preventDefault();
                  openQuote('sites_hero');
                }}
              >
                Solicitar orçamento do meu site
                <ArrowIcon />
              </BtnPrimary>
              <BtnOutline
                href="#planos"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('planos');
                }}
              >
                Ver planos e preços
              </BtnOutline>
            </div>
          </div>
        </section>

        {/* Tipos de site */}
        <section className="bg-vesk-dark page-px py-[72px] md:py-24">
          <div className="mb-10 max-w-2xl md:mb-14" data-reveal>
            <SectionLabel>Tipos de site</SectionLabel>
            <SectionTitle>Qual site a sua empresa precisa?</SectionTitle>
            <SectionDesc>
              Cada negócio tem um objetivo diferente. Desenvolvemos o tipo de site certo para o seu momento, sem
              pacotes engessados.
            </SectionDesc>
          </div>
          <ul className="grid list-none gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {siteTypes.map((type, i) => (
              <li
                key={type.title}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${(i % 3) * 70}ms` }}
                className="rounded-[10px] border border-vesk-border bg-vesk-dark-2 px-[26px] py-7"
              >
                <h3 className="font-display mb-2.5 text-2xl leading-[1.1] font-normal text-vesk-surface">{type.title}</h3>
                <p className="text-[15px] leading-[1.6] text-vesk-muted">{type.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* O que está incluso */}
        <section className="bg-vesk-black page-px py-[72px] md:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div data-reveal>
              <SectionLabel>O que está incluso</SectionLabel>
              <SectionTitle>
                Um site completo, pronto para <span className="text-vesk-orange">vender.</span>
              </SectionTitle>
              <SectionDesc>
                Não entregamos só um visual bonito. Cada site da VESK é construído para carregar rápido, funcionar bem
                no celular e transformar visitas em conversas com a sua empresa.
              </SectionDesc>
            </div>
            <ul className="grid list-none gap-3 sm:grid-cols-2" data-reveal>
              {included.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-[10px] border border-vesk-border bg-vesk-dark-2 px-5 py-4 text-[15px] leading-[1.45] text-vesk-mid"
                >
                  <Check size={20} strokeWidth={2} className="mt-0.5 shrink-0 text-vesk-orange" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Portfolio />

        <Plans
          onChoose={(value, name) => {
            setService(value);
            setPlan(name);
          }}
        />

        <Process />

        {/* Atuação local */}
        <section className="bg-vesk-dark page-px py-[72px] md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal>
            <div>
              <SectionLabel>Empresa de Curitiba</SectionLabel>
              <SectionTitle>Criação de sites para empresas de Curitiba e região.</SectionTitle>
            </div>
            <div className="grid gap-4 text-[16.5px] leading-[1.7] text-vesk-muted">
              <p>
                A VESK é uma software house de Curitiba. Criamos sites para empresas, profissionais liberais e novos
                negócios da capital e da região metropolitana, como São José dos Pinhais, Pinhais, Colombo e Araucária,
                e também para clientes de todo o Brasil.
              </p>
              <p>
                Além da criação de sites, desenvolvemos{' '}
                <Link to="/servicos" className="text-vesk-orange-light underline underline-offset-4">
                  sistemas, lojas virtuais e integrações
                </Link>{' '}
                e temos{' '}
                <Link to="/produtos" className="text-vesk-orange-light underline underline-offset-4">
                  produtos próprios
                </Link>
                , então seu site pode crescer junto com a sua empresa.
              </p>
            </div>
          </div>
        </section>

        {/* Perguntas frequentes */}
        <section className="bg-vesk-black page-px py-[72px] md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 md:mb-12" data-reveal>
              <SectionLabel>Dúvidas frequentes</SectionLabel>
              <SectionTitle>Perguntas sobre criação de sites</SectionTitle>
            </div>
            <div className="divide-y divide-vesk-border rounded-[14px] border border-vesk-border bg-vesk-dark-2" data-reveal>
              {websiteFaqs.map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-vesk-surface focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-vesk-orange sm:px-7 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base font-medium">{item.q}</h3>
                    <ChevronDown
                      size={20}
                      aria-hidden
                      className="shrink-0 text-vesk-orange transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="px-5 pb-5 text-[15px] leading-[1.75] text-vesk-muted sm:px-7">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

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

export default WebsiteCreationPage;
