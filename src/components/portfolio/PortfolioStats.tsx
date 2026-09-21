import { portfolioStats } from './portfolioData';
import { Counter } from '../home/Counter';

export const PortfolioStats = () => (
  <section className="bg-vesk-dark page-px py-16 md:py-24 lg:py-[100px]">
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {portfolioStats.map((stat, i) => (
        <div
          key={stat.label}
          data-reveal
          style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
          className="group rounded-2xl border border-vesk-border bg-vesk-dark-2 px-6 py-7 text-center transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-vesk-border-warm md:text-left"
        >
          <div
            className={`font-display mb-2 leading-none font-extrabold text-vesk-surface ${'small' in stat && stat.small ? 'text-3xl sm:text-4xl' : 'text-3xl sm:text-[44px]'}`}
          >
            <Counter end={Number(stat.value)} suffix={stat.suffix} suffixClassName="copper-metal" />
          </div>
          <div className="mono-tag text-vesk-muted">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);
