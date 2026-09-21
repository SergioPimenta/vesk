const stats = [
  { label: 'Clientes', value: '30+', note: '+6 este mês' },
  { label: 'Projetos', value: '50+', note: 'Entregues' },
];

export const HeroDashboard = () => (
  <div
    className="relative overflow-hidden rounded-2xl border border-vesk-border bg-gradient-to-b from-vesk-dark-2 to-vesk-black shadow-[0_50px_100px_-30px_rgba(0,0,0,0.75)]"
    role="img"
    aria-label="Painel de analytics da VESK — indicadores de clientes, projetos, performance e satisfação"
  >
    <div className="pointer-events-none absolute inset-0 blueprint opacity-40" aria-hidden />
    <div
      className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(194,101,59,0.16)_0%,transparent_70%)]"
      aria-hidden
    />

    {/* console chrome */}
    <div className="relative flex items-center gap-2 border-b border-vesk-border px-5 py-3.5">
      <span className="h-3 w-3 rounded-full bg-[#e0605a]" />
      <span className="h-3 w-3 rounded-full bg-[#e0b24a]" />
      <span className="h-3 w-3 rounded-full bg-[#5bb56a]" />
      <span className="ml-3 font-mono text-[12px] tracking-[0.04em] text-vesk-muted">vesk://dashboard</span>
      <span className="ml-auto font-mono text-[11px] tracking-[0.1em] text-vesk-orange/80">v2.0</span>
    </div>

    <div className="relative z-10 p-5 sm:p-6">
      {/* stat cards */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-vesk-border bg-[rgb(8_11_18/0.5)] px-5 py-4">
            <div className="mono-tag text-vesk-muted">{stat.label}</div>
            <div className="font-display mt-1.5 text-3xl font-extrabold text-vesk-surface">{stat.value}</div>
            <div className="mt-1.5 flex items-center gap-1 font-mono text-[11px] text-vesk-orange">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
              {stat.note}
            </div>
          </div>
        ))}
      </div>

      {/* chart */}
      <div className="mt-5 rounded-xl border border-vesk-border bg-[rgb(8_11_18/0.4)] p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="mono-tag text-vesk-muted">Crescimento</span>
          <span className="font-mono text-[11px] tracking-[0.08em] text-vesk-muted">// 6 meses</span>
        </div>
        <svg viewBox="0 0 600 190" preserveAspectRatio="none" className="h-28 w-full sm:h-32" aria-hidden>
          <defs>
            <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c2653b" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#c2653b" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroChartLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e08a5c" />
              <stop offset="100%" stopColor="#c2653b" />
            </linearGradient>
          </defs>

          {/* faint blueprint baselines */}
          {[47, 95, 143].map((y) => (
            <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#ede4d8" strokeOpacity="0.06" strokeWidth="1" />
          ))}

          <path
            d="M0,160 C80,150 130,128 200,110 C260,95 300,86 360,64 C420,44 470,40 540,26 L600,20 L600,190 L0,190 Z"
            fill="url(#heroChartFill)"
          />
          <path
            d="M0,160 C80,150 130,128 200,110 C260,95 300,86 360,64 C420,44 470,40 540,26 L600,20"
            fill="none"
            stroke="url(#heroChartLine)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-draw"
            style={{ ['--draw-length' as string]: 760, strokeDasharray: 760 }}
          />
          <circle cx="360" cy="64" r="4.5" fill="#0a0f18" stroke="#e08a5c" strokeWidth="2.5" />
          <circle cx="600" cy="20" r="5" fill="#e08a5c" />
        </svg>
      </div>

      {/* bottom metrics */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            label: 'Performance',
            value: '98% Uptime',
            icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
          },
          {
            label: 'Satisfação',
            value: '5★ Avaliação',
            icon: (
              <>
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </>
            ),
          },
        ].map((metric) => (
          <div
            key={metric.label}
            className="flex items-center gap-3 rounded-xl border border-vesk-border bg-[rgb(8_11_18/0.5)] px-4 py-3.5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-vesk-border-warm bg-vesk-orange-dim text-vesk-orange">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {metric.icon}
              </svg>
            </span>
            <div>
              <div className="mono-tag text-vesk-muted">{metric.label}</div>
              <div className="mt-0.5 text-sm font-semibold text-vesk-surface">{metric.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
