import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavLogo } from './ui';
import { cn } from '../../lib/cn';

const links = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/produtos', label: 'Produtos' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

const linkClass = (isActive: boolean) =>
  cn(
    'text-[13px] font-normal tracking-[0.04em] uppercase no-underline transition-colors duration-200',
    isActive ? 'text-vesk-surface' : 'text-vesk-mid hover:text-vesk-surface',
  );

const ctaClass =
  'rounded bg-vesk-orange px-6 py-2.5 text-[13px] font-medium tracking-wide whitespace-nowrap text-white no-underline transition-all duration-200 hover:-translate-y-px hover:bg-vesk-orange-light';

export const Nav = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-[100] flex h-[68px] items-center justify-between border-b border-vesk-border bg-[rgb(11_17_26/0.88)] backdrop-blur-xl page-px">
        <NavLogo variant="header" />

        <ul className="hidden list-none gap-9 lg:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link to={link.href} className={linkClass(isActive)}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link to="/contato" className={cn(ctaClass, 'hidden lg:inline-flex')}>
          Solicitar orçamento →
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-vesk-border text-vesk-surface lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 top-[68px] z-[99] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-[rgb(11_17_26/0.6)]"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          />
          <div className="relative border-b border-vesk-border bg-vesk-black page-px py-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <ul className="flex list-none flex-col gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={cn(linkClass(isActive), 'block rounded-lg px-3 py-3.5 text-[15px]')}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              to="/contato"
              className={cn(ctaClass, 'mt-4 block w-full py-3.5 text-center')}
              onClick={() => setMenuOpen(false)}
            >
              Solicitar orçamento →
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
