import { BtnOutline, BtnPrimary, IconBox, pageHeroTitleClass } from './ui';
import { cn } from '../../lib/cn';
import { ArrowIcon } from './icons';

const badges = [
  {
    title: 'Soluções Personalizadas',
    desc: 'Sob medida para cada negócio',
    icon: (
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    ),
  },
  {
    title: 'Tecnologia Escalável',
    desc: 'Cresce com o seu negócio',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </>
    ),
  },
  {
    title: 'Suporte Contínuo',
    desc: 'Acompanhamento dedicado',
    icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
];

export const Hero = () => (
  <section
    id="inicio"
    className="relative grid min-h-0 grid-cols-1 items-center gap-12 overflow-hidden page-px pt-28 pb-16 sm:pt-32 sm:pb-20 lg:min-h-screen lg:grid-cols-2 lg:gap-20 lg:pt-40 lg:pb-[100px]"
  >
    <div
      className="pointer-events-none absolute -top-[200px] -left-[200px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(184,92,56,0.1)_0%,transparent_70%)]"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(184,92,56,0.05)_0%,transparent_70%)]"
      aria-hidden
    />

    <div className="relative z-10">
      <div className="animate-fade-up mb-7 inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.14em] text-vesk-orange uppercase before:block before:h-px before:w-8 before:bg-vesk-orange before:content-['']">
        Software Premium
      </div>
      <h1 className={cn('animate-fade-up mb-7 [animation-delay:80ms]', pageHeroTitleClass)}>
        Software House em Curitiba que <em className="text-vesk-orange not-italic">transforma</em> negócios com
        tecnologia.
      </h1>
      <p className="animate-fade-up mb-11 max-w-[440px] text-[17px] leading-[1.75] font-light text-vesk-mid [animation-delay:160ms]">
        Criamos sistemas, CRMs, e-commerces e automações sob medida para PMEs em Curitiba e todo o Brasil —
        tecnologia que você usa de verdade e que gera resultado.
      </p>
      <div className="animate-fade-up flex flex-wrap items-center gap-4 [animation-delay:240ms]">
        <BtnPrimary href="#contato">
          Solicitar orçamento
          <ArrowIcon />
        </BtnPrimary>
        <BtnOutline href="#processo">Como trabalhamos →</BtnOutline>
      </div>
      <div className="animate-fade-up mt-10 flex flex-col gap-5 border-t border-vesk-border pt-8 sm:mt-[52px] sm:flex-row sm:flex-wrap sm:gap-7 sm:pt-10 [animation-delay:320ms]">
        {badges.map((badge) => (
          <div key={badge.title} className="flex min-w-0 items-center gap-2.5 sm:min-w-[180px]">
            <IconBox size="md">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {badge.icon}
              </svg>
            </IconBox>
            <div>
              <strong className="block text-[13px] font-medium text-vesk-surface">{badge.title}</strong>
              <p className="text-xs leading-snug text-vesk-muted">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="relative z-10 animate-fade-up [animation-delay:300ms] [animation-duration:0.8s]">
      <div
        className="overflow-hidden rounded-2xl border border-vesk-border bg-vesk-dark-2 shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
        role="img"
        aria-label="Dashboard do VESK CRM com métricas de vendas e conversão"
      >
        <div className="flex items-center gap-3 border-b border-vesk-border px-5 py-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c941]" />
          </div>
          <span className="font-body text-xs tracking-wide text-vesk-muted">VESK Dashboard — Analytics</span>
        </div>
        <div className="p-6">
          <div className="mb-5 grid grid-cols-3 gap-3">
            <div className="rounded-[10px] border border-vesk-border bg-vesk-dark-3 p-3.5">
              <div className="mb-1.5 text-[10px] tracking-[0.08em] text-vesk-muted uppercase">Receita</div>
              <div className="font-display text-[22px] font-bold text-vesk-orange">R$84k</div>
              <div className="mt-1 text-[10px] text-green-400">↑ 18% este mês</div>
            </div>
            <div className="rounded-[10px] border border-vesk-border bg-vesk-dark-3 p-3.5">
              <div className="mb-1.5 text-[10px] tracking-[0.08em] text-vesk-muted uppercase">Clientes</div>
              <div className="font-display text-[22px] font-bold text-vesk-surface">30+</div>
              <div className="mt-1 text-[10px] text-blue-400">↑ 6 novos</div>
            </div>
            <div className="rounded-[10px] border border-vesk-border bg-vesk-dark-3 p-3.5">
              <div className="mb-1.5 text-[10px] tracking-[0.08em] text-vesk-muted uppercase">Projetos</div>
              <div className="font-display text-[22px] font-bold text-vesk-surface">50+</div>
              <div className="mt-1 text-[10px] text-green-400">Entregues</div>
            </div>
          </div>
          <div className="relative h-[120px] [&_svg]:h-full [&_svg]:w-full">
            <svg viewBox="0 0 380 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#b85c38" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#b85c38" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,90 C30,85 60,75 90,65 C120,55 150,40 180,35 C210,30 240,38 270,28 C300,18 330,15 380,10 L380,120 L0,120 Z"
                fill="url(#g1)"
              />
              <path
                d="M0,90 C30,85 60,75 90,65 C120,55 150,40 180,35 C210,30 240,38 270,28 C300,18 330,15 380,10"
                fill="none"
                stroke="#b85c38"
                strokeWidth="2"
              />
              <circle cx="270" cy="28" r="4" fill="#b85c38" />
              <circle cx="380" cy="10" r="4" fill="#b85c38" />
            </svg>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 rounded-[10px] border border-vesk-border bg-vesk-dark-3 p-3.5">
              <IconBox size="sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </IconBox>
              <div>
                <div className="text-[11px] text-vesk-muted">Performance</div>
                <div className="text-[15px] font-medium text-vesk-surface">98% Uptime</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-[10px] border border-vesk-border bg-vesk-dark-3 p-3.5">
              <IconBox size="sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </IconBox>
              <div>
                <div className="text-[11px] text-vesk-muted">Satisfação</div>
                <div className="text-[15px] font-medium text-vesk-surface">5★ Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 left-0 flex max-w-[calc(100%-1rem)] items-center gap-3 rounded-xl border border-vesk-border-warm bg-vesk-dark-2 px-4 py-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] sm:-left-[30px] sm:max-w-none sm:px-5">
        <div className="font-display flex h-9 w-9 items-center justify-center rounded-full border-2 border-vesk-orange bg-vesk-orange-dim text-[13px] font-bold text-vesk-orange">
          VK
        </div>
        <div className="text-xs">
          <strong className="block font-medium text-vesk-surface">Novo projeto entregue</strong>
          <span className="text-vesk-muted">TechStore — há 2 horas</span>
        </div>
      </div>
    </div>
  </section>
);

