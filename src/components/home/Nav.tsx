import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { btnPrimaryClasses, NavLogo } from './ui';
import { cn } from '../../lib/cn';
import { ArrowIcon } from './icons';

const links = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/produtos', label: 'Produtos' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/#planos', label: 'Planos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

export const Nav = () => {
  const { pathname, hash } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) =>
    href.includes('#') ? `${pathname}${hash}` === href : pathname === href;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-[100] border-b bg-[rgb(15_17_19/0.82)] backdrop-blur-xl transition-colors duration-200',
        scrolled || menuOpen ? 'border-vesk-border' : 'border-transparent',
      )}
    >
      <div className="flex h-[72px] items-center justify-between gap-6 page-px md:h-[84px]">
        <NavLogo variant="header" />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex list-none gap-5 xl:gap-[30px]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={cn(
                    'border-b-[1.5px] py-1.5 text-sm no-underline xl:text-[15px] transition-colors duration-200',
                    isActive(link.href)
                      ? 'border-vesk-orange text-vesk-surface'
                      : 'border-transparent text-vesk-mid hover:border-vesk-orange hover:text-vesk-surface',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link to="/contato" className={btnPrimaryClasses('min-h-[44px] px-5 py-2.5 text-sm whitespace-nowrap')}>
            Solicitar orçamento
            <ArrowIcon />
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-vesk-border bg-vesk-dark-2 text-vesk-surface lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="absolute top-full right-4 left-4 mt-2 rounded-[10px] border border-vesk-border bg-vesk-dark-2 px-4 py-2 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] lg:hidden"
        >
          <ul className="flex list-none flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-vesk-border last:border-b-0">
                <Link
                  to={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={cn(
                    'flex min-h-[48px] items-center text-base no-underline',
                    isActive(link.href) ? 'text-vesk-orange-light' : 'text-vesk-surface',
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contato"
            className={btnPrimaryClasses('my-3 w-full')}
            onClick={() => setMenuOpen(false)}
          >
            Solicitar orçamento
            <ArrowIcon />
          </Link>
        </nav>
      )}
    </header>
  );
};
