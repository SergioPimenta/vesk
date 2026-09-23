import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';
import { externalLinkProps } from '../../lib/links';

export const NavLogo = ({
  className,
  variant = 'header',
}: {
  className?: string;
  variant?: 'header' | 'footer';
}) => (
  <Link
    to="/"
    className={cn('inline-flex shrink-0 items-center gap-2.5 no-underline', className)}
    aria-label={variant === 'header' ? 'VESK Software House, Início' : 'VESK, Início'}
  >
    <img
      src="/assets/logo-mark.svg"
      alt={
        variant === 'header'
          ? 'VESK Software House, Desenvolvimento de Software em Curitiba'
          : 'VESK'
      }
      className="h-8 w-auto md:h-9"
      fetchPriority={variant === 'header' ? 'high' : undefined}
      loading={variant === 'header' ? 'eager' : 'lazy'}
    />
    <span className="font-display text-[22px] font-extrabold tracking-tight text-vesk-surface">
      VE<span className="text-vesk-orange">SK</span>
    </span>
  </Link>
);

/** Título principal do hero — escala fluida, editorial e grande. */
export const pageHeroTitleClass =
  'font-display text-[clamp(1.9rem,6.6vw,4.75rem)] leading-[1.02] font-extrabold tracking-[-0.03em] text-balance';

/** Etiqueta monoespaçada — a "voz de terminal" que assina o estúdio. */
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
    <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-vesk-orange" aria-hidden />
    {index && <span className="text-vesk-orange-light/90">{index}</span>}
    <span className="text-vesk-mid">{children}</span>
  </span>
);

export const SectionLabel = ({
  children,
  centered = false,
  showLine = true,
  index,
  className,
}: {
  children: ReactNode;
  centered?: boolean;
  showLine?: boolean;
  index?: string;
  className?: string;
}) => (
  <div className={cn('mb-5 flex', centered && 'justify-center', className)}>
    <span className="mono-tag inline-flex items-center gap-2.5 text-vesk-orange">
      {showLine && <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-vesk-orange" aria-hidden />}
      {index && <span className="text-vesk-orange-light/90">{index}</span>}
      <span className="text-vesk-mid">{children}</span>
    </span>
  </div>
);

export const SectionTitle = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h2
    className={cn(
      'font-display text-[clamp(2.05rem,4.2vw,3.35rem)] leading-[1.06] font-extrabold tracking-[-0.025em] text-vesk-surface',
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
    'inline-flex items-center gap-2.5 rounded-lg px-8 py-3.5 text-sm font-semibold text-white no-underline',
    'bg-gradient-to-b from-vesk-orange-light to-vesk-orange',
    'shadow-[0_1px_0_rgb(255_255_255/0.25)_inset,0_10px_30px_-8px_rgb(194_101_59/0.6)]',
    'transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgb(255_255_255/0.3)_inset,0_18px_44px_-8px_rgb(194_101_59/0.75)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesk-orange-light focus-visible:ring-offset-2 focus-visible:ring-offset-vesk-black',
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
      'inline-flex items-center gap-2 rounded-lg border border-vesk-border px-8 py-3.5 text-sm font-medium text-vesk-surface no-underline transition-all duration-200',
      'hover:border-vesk-border-warm hover:bg-vesk-orange-dim hover:text-vesk-surface',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesk-orange-light focus-visible:ring-offset-2 focus-visible:ring-offset-vesk-black',
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
  decorative = false,
}: {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  decorative?: boolean;
}) => {
  const sizes = {
    sm: 'h-8 w-8 [&_svg]:h-4 [&_svg]:w-4',
    md: 'h-9 w-9 [&_svg]:h-[18px] [&_svg]:w-[18px]',
    lg: 'h-12 w-12 [&_svg]:h-[22px] [&_svg]:w-[22px]',
  };

  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center rounded-xl border border-vesk-border-warm bg-vesk-orange-dim text-vesk-orange',
        'shadow-[0_1px_0_rgb(237_228_216/0.06)_inset]',
        sizes[size],
        className,
      )}
      {...(decorative ? { role: 'presentation' as const } : {})}
    >
      {children}
    </div>
  );
};
