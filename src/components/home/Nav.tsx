import { Link, useLocation } from 'react-router-dom';
import { NavLogo } from './ui';
import { cn } from '../../lib/cn';

const links = [
  { href: '/servicos', label: 'Serviços', route: true },
  { href: '/produtos', label: 'Produtos', route: true },
  { href: '/portfolio', label: 'Portfólio', route: true },
  { href: '/sobre', label: 'Sobre', route: true },
  { href: '/contato', label: 'Contato', route: true },
];

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 right-0 left-0 z-[100] flex h-[68px] items-center justify-between border-b border-vesk-border bg-[rgb(11_17_26/0.88)] backdrop-blur-xl page-px">
      <NavLogo />
      <ul className="flex list-none gap-9">
        {links.map((link) => {
          const isActive = link.route && pathname === link.href;
          const className = cn(
            'text-[13px] font-normal tracking-[0.04em] uppercase no-underline transition-colors duration-200',
            isActive ? 'text-vesk-surface' : 'text-vesk-mid hover:text-vesk-surface',
          );

          return (
            <li key={link.href}>
              {link.route ? (
                <Link to={link.href} className={className}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className={className}>
                  {link.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
      <Link
        to="/contato"
        className="rounded bg-vesk-orange px-6 py-2.5 text-[13px] font-medium tracking-wide whitespace-nowrap text-white no-underline transition-all duration-200 hover:-translate-y-px hover:bg-vesk-orange-light"
      >
        Solicitar orçamento →
      </Link>
    </nav>
  );
};
