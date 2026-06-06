import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';
import { externalLinkProps } from '../../lib/links';

export const NavLogo = ({ className }: { className?: string }) => (
  <Link
    to="/"
    className={cn('inline-flex shrink-0 items-center gap-2.5 no-underline', className)}
    aria-label="VESK — Início"
  >
    <img src="/assets/logo-mark.svg" alt="" className="h-8 w-auto md:h-9" aria-hidden />
    <span className="font-display text-[22px] font-extrabold tracking-tight text-vesk-surface">
      VE<span className="text-vesk-orange">SK</span>
    </span>
  </Link>
);

/** Título principal do hero — mesmo tamanho e peso da home (60px, bold). */
export const pageHeroTitleClass =
  'font-display text-[60px] leading-[1.02] font-bold tracking-[-0.05em]';

export const SectionLabel = ({
  children,
  centered = false,
  showLine = true,
  className,
}: {
  children: ReactNode;
  centered?: boolean;
  showLine?: boolean;
  className?: string;
}) => (
  <div
    className={cn(
      'mb-4 flex items-center gap-2.5 text-[11px] font-medium tracking-[0.14em] text-vesk-orange uppercase',
      centered && 'justify-center',
      className,
    )}
  >
    {showLine && !centered && <span className="block h-px w-6 bg-vesk-orange" />}
    {children}
  </div>
);

export const SectionTitle = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h2
    className={cn(
      'font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-bold tracking-[-0.04em]',
      className,
    )}
  >
    {children}
  </h2>
);

export const SectionDesc = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn('mt-4 max-w-[520px] text-base leading-[1.75] font-light text-vesk-mid', className)}>{children}</p>
);

export const BtnPrimary = ({
  href,
  children,
  className,
  type = 'link',
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  type?: 'link' | 'button';
}) => {
  const classes = cn(
    'inline-flex items-center gap-2.5 rounded bg-vesk-orange px-8 py-3.5 text-sm font-medium text-white no-underline transition-all duration-200',
    'hover:-translate-y-0.5 hover:bg-vesk-orange-light',
    '[&_svg]:transition-transform hover:[&_svg]:translate-x-1',
    className,
  );

  if (type === 'button') {
    return (
      <button type="submit" className={classes}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={classes} {...externalLinkProps(href ?? '')}>
      {children}
    </a>
  );
};

export const BtnOutline = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    className={cn(
      'inline-block rounded border border-vesk-border px-8 py-3.5 text-sm font-normal text-vesk-surface no-underline transition-all duration-200',
      'hover:border-[rgb(212_195_179/0.28)] hover:bg-[rgb(212_195_179/0.05)]',
      className,
    )}
    {...externalLinkProps(href)}
  >
    {children}
  </a>
);

export const IconBox = ({
  children,
  size = 'md',
  className,
}: {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) => {
  const sizes = {
    sm: 'h-8 w-8 [&_svg]:h-4 [&_svg]:w-4',
    md: 'h-9 w-9 [&_svg]:h-[18px] [&_svg]:w-[18px]',
    lg: 'h-12 w-12 [&_svg]:h-[22px] [&_svg]:w-[22px]',
  };

  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center rounded-lg bg-vesk-orange-dim text-vesk-orange',
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
};
