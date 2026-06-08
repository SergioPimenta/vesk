import { Link } from 'react-router-dom';
import { externalLinkProps } from '../../lib/links';
import { NavLogo } from './ui';

const footerCols = [
  {
    title: 'Navegação',
    links: [
      { label: 'Início', href: '/' },
      { label: 'Sobre', href: '/sobre' },
      { label: 'Serviços', href: '/servicos' },
      { label: 'Produtos', href: '/produtos' },
      { label: 'Portfólio', href: '/portfolio' },
      { label: 'Contato', href: '/contato' },
    ],
  },
  {
    title: 'Serviços',
    links: [
      { label: 'Sistemas', href: '/servicos' },
      { label: 'Websites', href: '/servicos' },
      { label: 'E-commerce', href: '/servicos' },
      { label: 'APIs', href: '/servicos' },
      { label: 'Suporte Técnico', href: '/servicos' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: '#' },
      { label: 'Termos de Uso', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: '(41) 9690-2905', href: 'tel:+554196902905' },
      { label: 'contato@vesk.com.br', href: 'mailto:contato@vesk.com.br' },
      { label: 'Curitiba, PR', href: '#' },
    ],
  },
];

const socials = [
  {
    label: 'Instagram',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: 'GitHub',
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    ),
  },
];

export const Footer = () => (
  <footer className="border-t border-vesk-border bg-vesk-black page-px pt-12 pb-8 md:pt-[60px]">
    <div className="mb-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mb-12 xl:grid-cols-[2fr_1fr_1fr_1fr_1fr] xl:gap-12">
      <div className="sm:col-span-2 xl:col-span-1">
        <NavLogo variant="footer" />
        <p className="mt-4 max-w-[260px] text-[13px] leading-[1.75] text-vesk-muted">
          Desenvolvemos soluções digitais que transformam negócios, simplificam processos e geram
          resultados reais.
        </p>
      </div>
      {footerCols.map((col) => (
        <div key={col.title}>
          <h4 className="font-display mb-4 text-[13px] font-semibold">{col.title}</h4>
          <ul className="flex list-none flex-col gap-2.5">
            {col.links.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    to={link.href}
                    className="text-[13px] text-vesk-muted no-underline transition-colors duration-200 hover:text-vesk-surface"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-[13px] text-vesk-muted no-underline transition-colors duration-200 hover:text-vesk-surface"
                    {...externalLinkProps(link.href)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="flex flex-col items-start gap-5 border-t border-vesk-border pt-7 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs text-vesk-muted">VESK Software House — Curitiba, PR — Brasil</p>
        <p className="mt-1 text-xs text-vesk-muted">© 2025 VESK. Todos os direitos reservados.</p>
      </div>
      <div className="flex gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href="#"
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-vesk-border bg-vesk-dark-2 no-underline transition-all duration-200 hover:border-vesk-border-warm hover:bg-vesk-orange-dim [&_svg]:h-[15px] [&_svg]:w-[15px] [&_svg]:text-vesk-mid hover:[&_svg]:text-vesk-orange"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {social.icon}
            </svg>
          </a>
        ))}
      </div>
    </div>
  </footer>
);

