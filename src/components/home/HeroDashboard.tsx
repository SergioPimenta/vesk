const stats = [
  { label: 'Clientes', value: '30+', note: '6 novos' },
  { label: 'Projetos', value: '50+', note: 'Entregues' },
];

export const HeroDashboard = () => (
  <div
    className="relative overflow-hidden rounded-[20px] border border-vesk-border bg-vesk-black shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
    role="img"
    aria-label="Painel de analytics da VESK mostrando indicadores de clientes, projetos, performance e satisfação"
  >
    <div
      className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(184,92,56,0.12)_0%,transparent_70%)]"
      aria-hidden
    />

    {/* window chrome */}
    <div className="flex items-center gap-2 border-b border-vesk-border px-5 py-4">
      <span className="h-3 w-3 rounded-full bg-[#e0605a]" />
      <span className="h-3 w-3 rounded-full bg-[#e0b24a]" />
      <span className="h-3 w-3 rounded-full bg-[#5bb56a]" />
      <span className="ml-3 text-[13px] font-medium text-vesk-muted">VESK Dashboard — Analytics</span>
    </div>

    <div className="relative z-10 p-5 sm:p-6">
      {/* stat cards */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-vesk-border bg-vesk-dark-2 px-5 py-4">
            <div className="text-[10px] font-medium tracking-[0.14em] text-vesk-muted uppercase">{stat.label}</div>
            <div className="font-display mt-1.5 text-2xl font-extrabold text-vesk-surface sm:text-3xl">{stat.value}</div>
            <div className="mt-1.5 flex items-center gap-1 text-xs font-medium text-[#7fae86]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
              {stat.note}
            </div>
          </div>
        ))}
      </div>

      {/* chart */}
      <div className="mt-5">
        <svg viewBox="0 0 600 200" preserveAspectRatio="none" className="h-32 w-full sm:h-40" aria-hidden>
          <defs>
            <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b85c38" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#b85c38" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,170 C80,160 130,140 200,120 C260,104 300,96 360,74 C420,54 470,50 540,36 L600,30 L600,200 L0,200 Z"
            fill="url(#heroChartFill)"
          />
          <path
            d="M0,170 C80,160 130,140 200,120 C260,104 300,96 360,74 C420,54 470,50 540,36 L600,30"
            fill="none"
            stroke="#c96d4a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="360" cy="74" r="5" fill="#c96d4a" />
          <circle cx="600" cy="30" r="5" fill="#c96d4a" />
        </svg>
      </div>

      {/* bottom metrics */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-xl border border-vesk-border bg-vesk-dark-2 px-5 py-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-vesk-orange-dim text-vesk-orange">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
          </span>
          <div>
            <div className="text-xs text-vesk-muted">Performance</div>
            <div className="text-sm font-semibold text-vesk-surface">98% Uptime</div>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-vesk-border bg-vesk-dark-2 px-5 py-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-vesk-orange-dim text-vesk-orange">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
          </span>
          <div>
            <div className="text-xs text-vesk-muted">Satisfação</div>
            <div className="text-sm font-semibold text-vesk-surface">5★ Avaliação</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
