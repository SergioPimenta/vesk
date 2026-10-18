import { Code2, Monitor, Plug, Settings, ShoppingCart, Wrench } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CircleArrow, MonoTag } from './ui';
import { track } from '../../lib/analytics';
import type { ProjectTypeValue } from '../../lib/leadOptions';
import { scrollToLeadForm } from '../contact/contactActions';

type Solution = {
  title: string;
  desc: string;
  service: ProjectTypeValue;
  icon: ReactNode;
  /** Quando existe, o card leva à página do serviço em vez de pré-preencher o formulário. */
  href?: string;
};

const solutions: Solution[] = [
  {
    title: 'Desenvolvimento de Sistemas',
    desc: 'Sistemas web e mobile desenvolvidos do zero, integrados aos seus processos. Substituímos planilhas e processos manuais por software que escala com seu negócio.',
    service: 'sistema',
    icon: <Code2 />,
  },
  {
    title: 'Criação de Sites',
    desc: 'Sites institucionais e landing pages rápidos, otimizados para SEO e focados em conversão. Entregamos prontos para aparecer no Google.',
    service: 'site',
    href: '/criacao-de-sites',
    icon: <Monitor />,
  },
  {
    title: 'E-commerce',
    desc: 'Lojas virtuais completas, integradas com meios de pagamento, ERP e marketplaces. Seu negócio vendendo 24h por dia.',
    service: 'loja',
    icon: <ShoppingCart />,
  },
  {
    title: 'Sistemas Personalizados',
    desc: 'Quando nenhuma solução pronta resolve, criamos do zero. Sistemas específicos para o seu segmento, suas regras e seus clientes.',
    service: 'sistema',
    icon: <Settings />,
  },
  {
    title: 'Suporte e Manutenção',
    desc: 'Seu sistema funcionando com monitoramento contínuo, atualizações e suporte rápido via WhatsApp. Sem surpresas, sem tempo parado.',
    service: 'modernizacao',
    icon: <Wrench />,
  },
  {
    title: 'APIs e Integrações',
    desc: 'Conectamos sistemas que não conversam entre si. Integrações com ERPs, marketplaces, meios de pagamento, WhatsApp e qualquer API do mercado.',
    service: 'integracao',
    icon: <Plug />,
  },
];

const cardClass =
  'group grid h-full grid-cols-[1fr_auto] grid-rows-[auto_auto_1fr] gap-x-4 rounded-[10px] border border-vesk-border bg-vesk-dark-2 px-[26px] py-7 no-underline transition-[border-color,box-shadow] duration-200 hover:border-vesk-orange/55 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)]';

const CardBody = ({ item }: { item: Solution }) => (
  <>
    <span className="col-span-full mb-5 text-vesk-orange [&_svg]:h-[38px] [&_svg]:w-[38px] [&_svg]:stroke-[1.3]" aria-hidden>
      {item.icon}
    </span>
    <h3 className="font-display col-span-full mb-2.5 text-2xl leading-[1.08] font-normal tracking-[-0.015em] text-vesk-surface">
      {item.title}
    </h3>
    <p className="self-start text-[14.5px] leading-[1.55] text-vesk-muted">{item.desc}</p>
    <CircleArrow className="self-end" />
  </>
);

export const Solutions = ({ onSelect }: { onSelect: (service: ProjectTypeValue) => void }) => (
  <section id="solucoes" className="scroll-mt-24 bg-vesk-black page-px pt-14 pb-10">
    <div className="mb-[22px] flex items-baseline justify-between gap-5">
      <MonoTag>Nossas soluções</MonoTag>
      <MonoTag className="text-vesk-mid max-sm:hidden">Da ideia ao lançamento</MonoTag>
    </div>

    <ul className="grid list-none gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
      {solutions.map((item, i) => (
        <li key={item.title} data-reveal style={{ ['--reveal-delay' as string]: `${(i % 3) * 70}ms` }}>
          {item.href ? (
            <Link
              to={item.href}
              onClick={() => track('solutions_click', { cta_location: 'home_solutions', service: item.service })}
              className={cardClass}
            >
              <CardBody item={item} />
            </Link>
          ) : (
            <a
              href="#formulario"
              onClick={(e) => {
                e.preventDefault();
                onSelect(item.service);
                track('service_select', { service: item.service, source: 'home_solutions' });
                scrollToLeadForm();
              }}
              className={cardClass}
            >
              <CardBody item={item} />
            </a>
          )}
        </li>
      ))}
    </ul>
  </section>
);
