import { useEffect, useRef, useState } from 'react';
import { Check, Link2 } from 'lucide-react';
import { getCanonicalUrl } from '../seo/seoConfig';
import { externalLinkProps } from '../../lib/links';
import { postPath, type BlogPost } from './blogData';

const btn =
  'inline-flex h-11 items-center gap-2 rounded-full border border-vesk-border bg-vesk-dark-2 px-4 text-[13px] text-vesk-mid no-underline transition-colors hover:border-vesk-orange hover:text-vesk-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vesk-orange';

export const ShareButtons = ({ post }: { post: BlogPost }) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();
  const url = getCanonicalUrl(postPath(post));

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sem permissão de área de transferência: o link continua disponível nos botões de rede.
    }
  };

  const whatsapp = `https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="mono-tag mr-1 text-[11px] text-vesk-muted">Compartilhar</span>
      <a href={whatsapp} className={btn} {...externalLinkProps(whatsapp)}>
        WhatsApp
      </a>
      <a href={linkedin} className={btn} {...externalLinkProps(linkedin)}>
        LinkedIn
      </a>
      <button type="button" onClick={copy} className={btn} aria-live="polite">
        {copied ? <Check size={14} aria-hidden /> : <Link2 size={14} aria-hidden />}
        {copied ? 'Link copiado' : 'Copiar link'}
      </button>
    </div>
  );
};
