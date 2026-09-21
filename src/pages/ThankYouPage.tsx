import { PublicLayout } from '../components/layout/PublicLayout';
import { PageSeo } from '../components/seo/PageSeo';
import { BtnOutline, BtnPrimary, MonoTag } from '../components/home/ui';
import { ArrowIcon } from '../components/home/icons';
import { externalLinkProps } from '../lib/links';

const nextSteps = [
  {
    num: '01',
    title: 'Análise do seu contexto',
    desc: 'Um especialista lê sua mensagem e prepara as primeiras perguntas sobre o projeto.',
  },
  {
    num: '02',
    title: 'Retorno em até 2h úteis',
    desc: 'Entramos em contato por e-mail ou WhatsApp para entender a fundo o que você precisa.',
  },
  {
    num: '03',
    title: 'Proposta sob medida',
    desc: 'Enviamos escopo, prazos e investimento estimado — sem compromisso e sem enrolação.',
  },
];

const ThankYouPage = () => (
  <PublicLayout>
    <PageSeo page="obrigado" />
    <main className="relative flex min-h-[88vh] items-center overflow-hidden blueprint page-px pt-32 pb-20">
      <div
        className="pointer-events-none absolute -top-[220px] left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(194,101,59,0.16)_0%,transparent_68%)] animate-glow-pulse"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-vesk-black)_92%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        {/* animated success badge */}
        <div className="animate-fade-up mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-vesk-border-warm bg-vesk-orange-dim shadow-[0_0_0_8px_rgb(194_101_59/0.06)]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-vesk-orange" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M20 6L9 17l-5-5"
              className="animate-draw"
              style={{ ['--draw-length' as string]: 30, strokeDasharray: 30, animationDelay: '250ms' }}
            />
          </svg>
        </div>

        <div className="animate-fade-up flex justify-center [animation-delay:80ms]">
          <MonoTag>Mensagem enviada</MonoTag>
        </div>

        <h1 className="animate-fade-up mt-6 font-display text-[clamp(2.15rem,5.5vw,3.75rem)] leading-[1.03] font-extrabold tracking-[-0.03em] text-balance text-vesk-surface [animation-delay:130ms]">
          Obrigado! Recebemos
          <br />
          sua mensagem
          <span className="text-vesk-orange">.</span>
        </h1>

        <p className="animate-fade-up mx-auto mt-5 max-w-xl text-lg leading-[1.7] font-light text-vesk-mid [animation-delay:200ms]">
          Um especialista da VESK vai entrar em contato em{' '}
          <span className="font-medium text-vesk-surface">até 2 horas úteis</span>. Enquanto isso, fique à
          vontade para conhecer mais do nosso trabalho.
        </p>

        <div className="animate-fade-up mt-9 flex flex-wrap justify-center gap-3.5 [animation-delay:280ms]">
          <BtnPrimary href="/">
            Voltar para o início
            <ArrowIcon />
          </BtnPrimary>
          <BtnOutline href="/portfolio">Ver portfólio</BtnOutline>
        </div>

        {/* next steps */}
        <div className="animate-fade-up mt-16 grid gap-4 text-left sm:grid-cols-3 [animation-delay:360ms]">
          {nextSteps.map((step) => (
            <div key={step.num} className="rounded-2xl border border-vesk-border bg-vesk-dark-2 p-6">
              <span className="mono-tag text-vesk-orange">{step.num}</span>
              <h3 className="font-display mt-3 mb-1.5 text-base font-bold text-vesk-surface">{step.title}</h3>
              <p className="text-[13px] leading-relaxed text-vesk-muted">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="animate-fade-up mt-10 text-sm text-vesk-muted [animation-delay:440ms]">
          Precisa falar agora?{' '}
          <a
            href="https://wa.me/554196902905"
            className="font-medium text-vesk-orange no-underline hover:text-vesk-orange-light"
            {...externalLinkProps('https://wa.me/554196902905')}
          >
            Chame no WhatsApp →
          </a>
        </p>
      </div>
    </main>
  </PublicLayout>
);

export default ThankYouPage;
