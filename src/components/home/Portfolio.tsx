import { Link } from 'react-router-dom';
import { ArrowIcon } from './icons';
import { btnOutlineClasses, CircleArrow, MonoTag, SectionTitle, SectionDesc } from './ui';
import { portfolioItems } from '../portfolio/portfolioData';
import { track } from '../../lib/analytics';

// Três projetos reais e variados: site institucional, plataforma de pedidos e loja virtual.
const featured = ['Almeida Pimenta Advogados', 'The Forest Açaí', 'Expressa Co.'];
const projects = featured
  .map((name) => portfolioItems.find((item) => item.name.startsWith(name)))
  .filter((item): item is (typeof portfolioItems)[number] => !!item);

export const Portfolio = () => (
  <section id="portfolio" className="scroll-mt-24 bg-vesk-black page-px py-[72px] md:py-24">
    <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_2.15fr]">
      <div data-reveal>
        <MonoTag className="mb-[18px] flex">
          Projetos que
          <br />
          geram resultados
        </MonoTag>
        <SectionTitle>Conheça alguns dos nossos projetos.</SectionTitle>
        <SectionDesc className="mt-[18px] mb-7 text-[15.5px]">
          Cada projeto é um novo desafio e uma oportunidade de transformar ideias em grandes resultados.
        </SectionDesc>
        <Link
          to="/portfolio"
          onClick={() => track('portfolio_click', { cta_location: 'home_portfolio' })}
          className={btnOutlineClasses('min-h-[44px] px-5 text-sm')}
        >
          Ver todo o portfólio
          <ArrowIcon />
        </Link>
      </div>

      <ul className="grid list-none gap-[18px] sm:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.name} data-reveal style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}>
            <Link
              to="/portfolio"
              onClick={() => track('portfolio_click', { cta_location: 'home_project_card' })}
              className="group block h-full overflow-hidden rounded-[10px] border border-vesk-border bg-vesk-dark-2 no-underline transition-shadow duration-200 hover:shadow-[0_22px_44px_-26px_rgba(0,0,0,0.6)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-vesk-dark-3">
                <img
                  src={project.image}
                  alt={`${project.name}: ${project.sub}, projeto desenvolvido pela VESK`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-[18px] pt-[18px] pb-5">
                <div>
                  <h3 className="font-display text-[21px] leading-[1.1] font-normal text-vesk-surface">{project.name}</h3>
                  <span className="mt-1 block text-[13.5px] leading-[1.4] text-vesk-muted">{project.sub}</span>
                </div>
                <CircleArrow />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
