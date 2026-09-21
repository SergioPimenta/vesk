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
    'group relative font-mono text-[12px] tracking-[0.08em] uppercase no-underline transition-colors duration-200',
    isActive ? 'text-vesk-surface' : 'text-vesk-mid hover:text-vesk-surface',
  );

const ctaClass =
  'items-center gap-2 rounded-lg bg-gradient-to-b from-vesk-orange-light to-vesk-orange px-6 py-2.5 font-mono text-[12px] tracking-[0.06em] whitespace-nowrap text-white no-underline shadow-[0_1px_0_rgb(255_255_255/0.25)_inset,0_8px_22px_-8px_rgb(194_101_59/0.7)] transition-transform duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesk-orange-light focus-visible:ring-offset-2 focus-visible:ring-offset-vesk-black';

export const Nav = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 right-0 left-0 z-[100] flex h-[72px] items-center justify-between page-px transition-[background-color,border-color,backdrop-filter] duration-300',
          scrolled || menuOpen
            ? 'border-b border-vesk-border bg-[rgb(8_11_18/0.82)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <NavLogo variant="header" />

        <ul className="hidden list-none gap-9 lg:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link to={link.href} className={linkClass(isActive)}>
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-2 left-0 h-px bg-vesk-orange transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full',
                    )}
                    aria-hidden
                  />
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
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-vesk-border text-vesk-surface transition-colors hover:border-vesk-border-warm lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 top-[72px] z-[99] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-[rgb(8_11_18/0.7)]"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          />
          <div className="relative border-b border-vesk-border bg-vesk-black page-px py-6 shadow-[0_24px_50px_rgba(0,0,0,0.5)]">
            <ul className="flex list-none flex-col gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={cn(
                        'block rounded-lg px-3 py-3.5 font-mono text-[14px] tracking-[0.06em] uppercase no-underline transition-colors',
                        isActive ? 'bg-vesk-orange-dim text-vesk-surface' : 'text-vesk-mid hover:text-vesk-surface',
                      )}
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
              className={cn(ctaClass, 'mt-4 flex w-full justify-center py-3.5')}
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
