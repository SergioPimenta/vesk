import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

/**
 * Visual thesis of the hero: the VESK System Core connected to the modules
 * it develops (e-commerce, CRM, automations, ERP, APIs, dashboards) via thin
 * copper lines with a slow, continuous flow of light. Not a dashboard mockup
 * — an ecosystem diagram.
 *
 * One shared 0–100 coordinate space drives everything: `path` strings (SVG
 * user units, viewBox="0 0 100 100") and `left`/`top` (the same points as
 * percentages for the HTML chips) always refer to the same point, so the
 * lines and the cards they connect to can never drift apart — at any
 * container size, since nothing here is pinned to a fixed pixel breakpoint.
 *
 * Card width and every internal size (icon, type, padding) scale fluidly
 * with the container via `clamp(min, N%, max)` — no transform: scale().
 */

const Sparkline = () => (
  <svg viewBox="0 0 40 16" className="h-[1.1em] w-[2.5em]" aria-hidden>
    <polyline
      points="0,13 8,10.5 16,11.5 24,6 32,7 40,2"
      fill="none"
      stroke="var(--color-vesk-orange-light)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProgressRing = ({ percent }: { percent: number }) => {
  const r = 7;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 18 18" className="h-[1.1em] w-[1.1em] -rotate-90 shrink-0" aria-hidden>
      <circle cx="9" cy="9" r={r} fill="none" stroke="var(--color-vesk-border)" strokeWidth="2.5" />
      <circle
        cx="9"
        cy="9"
        r={r}
        fill="none"
        stroke="var(--color-vesk-orange-light)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c - (percent / 100) * c}
      />
    </svg>
  );
};

const MiniBars = () => (
  <svg viewBox="0 0 32 16" className="h-[1.1em] w-[2.2em]" aria-hidden>
    <rect x="0" y="8" width="5" height="8" rx="1" fill="var(--color-vesk-orange)" opacity="0.5" />
    <rect x="9" y="4" width="5" height="12" rx="1" fill="var(--color-vesk-orange-light)" opacity="0.85" />
    <rect x="18" y="9" width="5" height="7" rx="1" fill="var(--color-vesk-orange)" opacity="0.5" />
    <rect x="27" y="1" width="5" height="15" rx="1" fill="var(--color-vesk-orange-light)" />
  </svg>
);

const SyncIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[1.1em] w-[1.1em] shrink-0 animate-spin-slow text-vesk-orange-light"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M4 4v5h5M20 20v-5h-5" />
    <path d="M4.5 9a8 8 0 0113.9-4.2M19.5 15a8 8 0 01-13.9 4.2" />
  </svg>
);

const PulseDot = () => (
  <span className="relative flex h-[0.5em] w-[0.5em] shrink-0">
    <span className="absolute inset-[-3px] animate-glow-pulse rounded-full bg-vesk-orange-light/70 blur-[2px]" aria-hidden />
    <span className="relative h-full w-full rounded-full bg-vesk-orange-light" />
  </span>
);

type Module = {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  onMobile: boolean;
  delay: string;
  duration: string;
  floatDelay: string;
  icon: ReactNode;
  indicator: ReactNode;
};

const CORE = { x: 50, y: 50 };

const modules: Module[] = [
  {
    id: 'ecommerce',
    label: 'E‑COMMERCE',
    sub: 'Vendas online',
    x: 50,
    y: 10,
    onMobile: true,
    delay: '-1.2s',
    duration: '26s',
    floatDelay: '0s',
    icon: (
      <>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </>
    ),
    indicator: (
      <>
        <Sparkline />
        <span className="mono-tag whitespace-nowrap text-[0.72em] text-vesk-orange-light/90">+18%</span>
      </>
    ),
  },
  {
    id: 'crm',
    label: 'CRM',
    sub: 'Gestão de clientes',
    x: 10,
    y: 33,
    onMobile: true,
    delay: '-3s',
    duration: '26s',
    floatDelay: '-1.3s',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </>
    ),
    indicator: (
      <>
        <PulseDot />
        <span className="whitespace-nowrap font-mono text-[0.78em] text-vesk-mid">24 leads</span>
      </>
    ),
  },
  {
    id: 'automacoes',
    label: 'AUTOMAÇÕES',
    sub: 'Processos inteligentes',
    x: 90,
    y: 33,
    onMobile: true,
    delay: '-4.5s',
    duration: '26s',
    floatDelay: '-2.6s',
    icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
    indicator: (
      <>
        <ProgressRing percent={72} />
        <span className="whitespace-nowrap font-mono text-[0.78em] text-vesk-mid">6 ativas</span>
      </>
    ),
  },
  {
    id: 'erp',
    label: 'ERP',
    sub: 'Gestão integrada',
    x: 10,
    y: 70,
    onMobile: false,
    delay: '-0.5s',
    duration: '26s',
    floatDelay: '-4s',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
      </>
    ),
    indicator: (
      <>
        <SyncIcon />
        <span className="whitespace-nowrap font-mono text-[0.78em] text-vesk-mid">sincronizado</span>
      </>
    ),
  },
  {
    id: 'apis',
    label: 'APIS',
    sub: 'Integrações e dados',
    x: 90,
    y: 70,
    onMobile: false,
    delay: '-2.2s',
    duration: '26s',
    floatDelay: '-5.3s',
    icon: (
      <path d="M10 13a5 5 0 007.54.54l2.12-2.12a5 5 0 00-7.07-7.07L11.5 5.5M14 11a5 5 0 00-7.54-.54L4.34 12.6a5 5 0 007.07 7.07l1.13-1.13" />
    ),
    indicator: (
      <>
        <PulseDot />
        <span className="whitespace-nowrap font-mono text-[0.78em] text-vesk-mid">99.9% uptime</span>
      </>
    ),
  },
  {
    id: 'dashboard',
    label: 'DASHBOARD',
    sub: 'Dados em tempo real',
    x: 50,
    y: 90,
    onMobile: false,
    delay: '-5.5s',
    duration: '26s',
    floatDelay: '-6.6s',
    icon: (
      <>
        <rect x="3" y="3" width="7" height="9" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="10" width="7" height="11" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    indicator: <MiniBars />,
  },
];

/** Gentle organic curve from the core out to a module's point. */
const pathTo = (x: number, y: number) => {
  const cx = CORE.x + (x - CORE.x) * 0.55;
  const cy = CORE.y + (y - CORE.y) * 0.45;
  return `M${CORE.x},${CORE.y} Q${cx},${cy} ${x},${y}`;
};

export const VeskEcosystem = () => (
  <div
    className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full"
    role="img"
    aria-label="Ecossistema VESK: núcleo tecnológico central conectado a módulos de e-commerce, CRM, automações, ERP, APIs e dashboard, representando como a VESK integra diferentes sistemas em uma única solução"
  >
    <div className="absolute inset-3 sm:inset-4">
      {/* connective tissue */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        {modules.map((m) => (
          <g key={m.id} className={cn(!m.onMobile && 'hidden sm:block')}>
            {/* extremely thin base line — the copper trace itself */}
            <path
              d={pathTo(m.x, m.y)}
              fill="none"
              stroke="var(--color-vesk-orange)"
              strokeWidth="0.22"
              strokeOpacity="0.4"
            />
            {/* small lit points travelling the path — the flow of data */}
            <path
              d={pathTo(m.x, m.y)}
              fill="none"
              stroke="var(--color-vesk-orange-light)"
              strokeWidth="0.65"
              strokeLinecap="round"
              strokeDasharray="0.1 3.9"
              className="animate-flow-dots"
              style={{ animationDelay: m.delay, animationDuration: m.duration }}
              opacity="0.95"
            />
          </g>
        ))}
      </svg>

      {/* core — the still center everything orbits. Glow is alpha-only (same
          hue throughout) so it dissolves with no visible ring; nothing here
          is bordered or clipped. */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div
          className="absolute top-1/2 left-1/2 h-[clamp(220px,40%,520px)] w-[clamp(220px,40%,520px)] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(194,101,59,0.34) 0%, rgba(194,101,59,0.20) 26%, rgba(194,101,59,0.09) 48%, rgba(194,101,59,0.02) 68%, rgba(194,101,59,0) 82%)',
          }}
          aria-hidden
        />
        <div className="absolute top-1/2 left-1/2 flex aspect-square w-[clamp(100px,16%,220px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[0.5em] rounded-2xl border border-vesk-border-warm bg-[rgb(17_26_38/0.68)] p-[8%] text-[clamp(11px,1.1vw,20px)] shadow-[0_1px_0_rgb(237_228_216/0.08)_inset,0_30px_70px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md">
          <svg viewBox="0 0 100 60" className="h-[1.3em] w-[2.15em]" aria-hidden>
            <defs>
              <linearGradient id="logoCoreSheen" x1="8%" y1="0%" x2="92%" y2="100%">
                <stop offset="0%" stopColor="#7a3c22" />
                <stop offset="28%" stopColor="#c2653b" />
                <stop offset="52%" stopColor="#e0895c" />
                <stop offset="76%" stopColor="#c2653b" />
                <stop offset="100%" stopColor="#8a4020" />
              </linearGradient>
            </defs>
            <polygon points="8,4 32,4 62,56 46,56" fill="url(#logoCoreSheen)" />
            <polygon points="66,6 92,6 79,28" fill="url(#logoCoreSheen)" />
          </svg>
          <span className="font-display text-[1.05em] leading-none font-extrabold tracking-tight whitespace-nowrap text-vesk-surface">
            VESK
          </span>
          <span className="mono-tag whitespace-nowrap text-[0.46em] text-vesk-orange-light/85">System Core</span>
        </div>
      </div>

      {/* modules — floating, not cards */}
      {modules.map((m) => (
        <div
          key={m.id}
          className={cn('absolute z-20 -translate-x-1/2 -translate-y-1/2', !m.onMobile && 'hidden sm:block')}
          style={{ left: `${m.x}%`, top: `${m.y}%`, width: 'clamp(165px, 22%, 280px)' }}
        >
          <div
            className="animate-float-slower flex w-full flex-col gap-[0.6em] rounded-xl border border-vesk-border bg-[rgb(17_26_38/0.58)] p-[9%] text-[clamp(11px,0.95vw,16px)] shadow-[0_20px_45px_-20px_rgba(0,0,0,0.65)] backdrop-blur-sm"
            style={{ animationDelay: m.floatDelay }}
          >
            <div className="flex items-center gap-[0.5em]">
              <span className="flex h-[1.9em] w-[1.9em] shrink-0 items-center justify-center rounded-md border border-vesk-border-warm bg-vesk-orange-dim text-vesk-orange-light">
                <svg viewBox="0 0 24 24" className="h-[1.05em] w-[1.05em]" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {m.icon}
                </svg>
              </span>
              <span className="font-display text-[0.92em] font-bold tracking-wide whitespace-nowrap text-vesk-surface">
                {m.label}
              </span>
            </div>
            <p className="text-[0.78em] leading-tight whitespace-nowrap text-vesk-muted">{m.sub}</p>
            <div className="flex items-center gap-[0.4em]">{m.indicator}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
