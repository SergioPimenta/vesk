import type { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';
import { externalLinkProps } from '../../lib/links';

/** Marca oficial + assinatura "VESK / Software house". */
export const NavLogo = ({
  className,
  variant = 'header',
}: {
  className?: string;
  variant?: 'header' | 'footer';
}) => (
  <Link
    to="/"
    className={cn('inline-flex shrink-0 items-center gap-3 no-underline', className)}
    aria-label={variant === 'header' ? 'VESK Software House, Início' : 'VESK, Início'}
  >
    <img
      src="/assets/logo-mark.svg"
      alt=""
      width={46}
      height={38}
      className="h-8 w-auto sm:h-[38px]"
      loading={variant === 'header' ? 'eager' : 'lazy'}
      // React 18 só repassa o atributo em minúsculas.
      {...(variant === 'header' ? ({ fetchpriority: 'high' } as Record<string, string>) : {})}
    />
    <span className="flex flex-col items-center leading-none">
      <span className="mr-[-0.42em] text-[21px] font-normal tracking-[0.42em] text-vesk-surface sm:text-[24px]">VESK</span>
      <span className="mt-1.5 flex items-center gap-1.5 text-[8.5px] tracking-[0.32em] text-vesk-orange uppercase before:h-px before:w-3 before:bg-current before:content-[''] after:h-px after:w-3 after:bg-current after:content-['']">
        Software house
      </span>
    </span>
  </Link>
);

/** Título principal do hero: serifa editorial, grande e fluida. */
export const pageHeroTitleClass =
  'font-display text-[clamp(2.6rem,5.2vw,4.5rem)] leading-[1.03] font-normal tracking-[-0.015em] text-balance';

/** Kicker: rótulo em caixa alta que abre seções e blocos. */
export const MonoTag = ({
  children,
  className,
  index,
}: {
  children: ReactNode;
  className?: string;
  index?: string;
}) => (
  <span className={cn('mono-tag inline-flex items-center gap-2 text-vesk-orange', className)}>
    {index && <span className="text-vesk-orange-light">{index}</span>}
    {children}
  </span>
);

export const SectionLabel = ({
  children,
  centered = false,
  index,
  className,
}: {
  children: ReactNode;
  centered?: boolean;
  /** Mantido por compatibilidade; o kicker novo não usa marcador. */
  showLine?: boolean;
  index?: string;
  className?: string;
}) => (
  <div className={cn('mb-[18px] flex', centered && 'justify-center', className)}>
    <MonoTag index={index}>{children}</MonoTag>
  </div>
);

export const SectionTitle = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h2
    className={cn(
      'font-display text-[clamp(2.125rem,4.2vw,3rem)] leading-[1.08] font-normal tracking-[-0.015em] text-balance text-vesk-surface',
      className,
    )}
  >
    {children}
  </h2>
);

export const SectionDesc = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn('mt-4 max-w-[54ch] text-[17px] leading-[1.6] text-vesk-muted', className)}>{children}</p>
);

export const btnPrimaryClasses = (className?: string) =>
  cn(
    'inline-flex min-h-[52px] items-center justify-center gap-3 rounded-md px-[26px] py-3 text-[15px] font-medium text-white no-underline',
    'bg-copper shadow-[0_10px_24px_-12px_rgba(140,67,34,0.7)] transition-[filter] duration-200 hover:brightness-110',
    'focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-vesk-orange',
    '[&_svg]:transition-transform hover:[&_svg]:translate-x-0.5',
    className,
  );

export const btnOutlineClasses = (className?: string) =>
  cn(
    'inline-flex min-h-[52px] items-center justify-center gap-3 rounded-md border border-vesk-orange bg-transparent px-[26px] py-3 text-[15px] font-medium text-vesk-surface no-underline',
    'transition-colors duration-200 hover:bg-vesk-orange-dim',
    'focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-vesk-orange',
    className,
  );

export const BtnPrimary = ({
  href,
  children,
  className,
  type = 'link',
  onClick,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  type?: 'link' | 'button';
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) => {
  const classes = btnPrimaryClasses(className);

  if (type === 'button') {
    return (
      <button type="submit" className={classes}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={classes} onClick={onClick} {...externalLinkProps(href ?? '')}>
      {children}
    </a>
  );
};

export const BtnOutline = ({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) => (
  <a href={href} onClick={onClick} className={btnOutlineClasses(className)} {...externalLinkProps(href)}>
    {children}
  </a>
);

/** Seta em círculo dos cards; preenche de cobre no hover do card (`group`). */
export const CircleArrow = ({ className }: { className?: string }) => (
  <span
    aria-hidden
    className={cn(
      'grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full border border-vesk-orange/45 text-vesk-orange transition-colors duration-200',
      'group-hover:border-vesk-orange group-hover:bg-vesk-orange group-hover:text-white',
      className,
    )}
  >
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </span>
);

export const IconBox = ({
  children,
  size = 'md',
  className,
  decorative = false,
}: {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  decorative?: boolean;
}) => {
  const sizes = {
    sm: 'h-8 w-8 [&_svg]:h-4 [&_svg]:w-4',
    md: 'h-10 w-10 [&_svg]:h-[18px] [&_svg]:w-[18px]',
    lg: 'h-[46px] w-[46px] [&_svg]:h-5 [&_svg]:w-5',
  };

  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center rounded-full border border-vesk-orange/35 bg-vesk-orange-dim text-vesk-orange-light',
        sizes[size],
        className,
      )}
      {...(decorative ? { role: 'presentation' as const } : {})}
    >
      {children}
    </div>
  );
};
