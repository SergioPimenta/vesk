import { portfolioStats } from './portfolioData';

export const PortfolioStats = () => (
  <section className="bg-vesk-dark page-px py-[100px]">
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {portfolioStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-vesk-border bg-vesk-dark-2 px-6 py-7 text-center md:text-left"
        >
          <div
            className={`font-display mb-2 leading-none font-extrabold text-vesk-surface ${'small' in stat && stat.small ? 'text-4xl' : 'text-[44px]'}`}
          >
            {stat.value}
            <span className="text-vesk-orange">{stat.suffix}</span>
          </div>
          <div className="text-[13px] text-vesk-muted">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);
