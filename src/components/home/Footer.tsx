import { Link } from 'react-router-dom';
import { externalLinkProps } from '../../lib/links';
import { SOCIAL_LINKS, WHATSAPP_NUMBER } from '../../lib/site';
import { NavLogo } from './ui';

const footerCols = [
  {
    title: 'Navegação',
    links: [
      { label: 'Início', href: '/' },
      { label: 'Serviços', href: '/servicos' },
      { label: 'Produtos', href: '/produtos' },
      { label: 'Portfólio', href: '/portfolio' },
      { label: 'Planos', href: '/planos' },
      { label: 'Sobre', href: '/sobre' },
      { label: 'Contato', href: '/contato' },
    ],
  },
  {
    title: 'Serviços',
    links: [
      { label: 'Sistemas', href: '/servicos' },
      { label: 'Criação de sites', href: '/criacao-de-sites' },
      { label: 'E-commerce', href: '/servicos' },
      { label: 'APIs e integrações', href: '/servicos' },
      { label: 'Suporte técnico', href: '/servicos' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Política de privacidade', href: '/politica-de-privacidade' },
      { label: 'Termos de uso', href: '/termos-de-uso' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: '(41) 9690-2905', href: `https://wa.me/${WHATSAPP_NUMBER}` },
      { label: 'comercial@vesk.com.br', href: 'mailto:comercial@vesk.com.br' },
      { label: 'Curitiba, PR' },
    ],
  },
] as const;

const linkClass = 'inline-flex min-h-[32px] items-center text-sm text-vesk-muted no-underline transition-colors duration-200 hover:text-vesk-surface';

const socials = [
  {
    label: 'Instagram',
    href: SOCIAL_LINKS.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4M3 9h3v12H3zM9 9h2.9v1.7A3.4 3.4 0 0 1 15 9c3 0 3.6 2 3.6 4.6V21h-3v-6.5c0-1.6 0-3.5-2.1-3.5S11 12.6 11 14.4V21H9z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2m0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2m4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.3a.5.5 0 0 0 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3" />
      </svg>
    ),
  },
];

/**
 * "VESK" gigante encostado no fim da página, cortado embaixo. Em SVG para o texto ocupar
 * sempre a largura exata do conteúdo (o espaçamento entre as letras se ajusta sozinho).
 */
const FooterWordmark = () => (
  <svg
    viewBox="0 0 1000 205"
    className="mt-10 block w-full select-none md:mt-14"
    aria-hidden
    focusable="false"
  >
    <defs>
      <linearGradient id="footer-wordmark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#d27a44" stopOpacity="0.3" />
        <stop offset="0.55" stopColor="#d27a44" stopOpacity="0.1" />
        <stop offset="1" stopColor="#d27a44" stopOpacity="0" />
      </linearGradient>
    </defs>
    <text
      x="0"
      y="262"
      textLength="1000"
      lengthAdjust="spacing"
      fill="url(#footer-wordmark)"
      className="font-display"
      style={{ fontSize: 352, fontWeight: 500, letterSpacing: '-0.01em' }}
    >
      VESK
    </text>
  </svg>
);

export const Footer = () => (
  <footer className="overflow-hidden bg-[#0a0b0d] page-px pt-14 text-sm text-vesk-muted">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-[1.6fr_repeat(4,1fr)]">
      <div className="col-span-2 md:col-span-3 xl:col-span-1">
        <NavLogo variant="footer" />
        <p className="mt-[18px] max-w-[32ch] leading-relaxed">
          Desenvolvemos soluções digitais que transformam negócios, simplificam processos e geram resultados reais.
        </p>
        <div className="mt-[22px] flex gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              {...externalLinkProps(social.href)}
              className="grid h-11 w-11 place-items-center rounded-full border border-vesk-orange/40 text-white transition-colors duration-200 hover:border-vesk-orange hover:bg-vesk-orange [&_svg]:h-4 [&_svg]:w-4"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {footerCols.map((col) => (
        <div key={col.title}>
          <h4 className="mono-tag mb-4 text-[12px] tracking-[0.24em] text-vesk-orange-light">{col.title}</h4>
          <ul className="grid list-none gap-1">
            {col.links.map((link) => (
              <li key={link.label}>
                {!('href' in link) ? (
                  <span className="inline-flex min-h-[32px] items-center">{link.label}</span>
                ) : link.href.startsWith('/') ? (
                  <Link to={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className={linkClass} {...externalLinkProps(link.href)}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/[0.08] pt-[22px] text-[13px]">
      <span>VESK Software House, Curitiba, PR, Brasil</span>
      <span>© {new Date().getFullYear()} VESK. Todos os direitos reservados.</span>
    </div>

    <FooterWordmark />
  </footer>
);
