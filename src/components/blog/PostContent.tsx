import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb } from 'lucide-react';
import { externalLinkProps } from '../../lib/links';
import { slugify, type PostBlock } from './blogData';

const linkClass =
  'text-vesk-orange-light underline decoration-vesk-orange/40 underline-offset-4 transition-colors hover:text-vesk-orange hover:decoration-vesk-orange';

/** Converte `**negrito**` e `[texto](destino)` em elementos React. */
export const renderInline = (text: string): ReactNode[] =>
  text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      return href.startsWith('/') ? (
        <Link key={index} to={href} className={linkClass}>
          {label}
        </Link>
      ) : (
        <a key={index} href={href} className={linkClass} {...externalLinkProps(href)}>
          {label}
        </a>
      );
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      return (
        <strong key={index} className="font-semibold text-vesk-surface">
          {bold[1]}
        </strong>
      );
    }
    return <Fragment key={index}>{part}</Fragment>;
  });

export const headingsOf = (content: PostBlock[]) =>
  content.flatMap((block) => (block.type === 'h2' ? [{ id: slugify(block.text), text: block.text }] : []));

export const PostContent = ({ content }: { content: PostBlock[] }) => (
  <div className="text-[17px] leading-[1.8] text-vesk-mid">
    {content.map((block, index) => {
      switch (block.type) {
        case 'p':
          return (
            <p key={index} className="mb-6">
              {renderInline(block.text)}
            </p>
          );
        case 'h2':
          return (
            <h2
              key={index}
              id={slugify(block.text)}
              className="mt-14 mb-5 scroll-mt-28 font-display text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.15] font-normal tracking-[-0.01em] text-balance text-vesk-surface"
            >
              {block.text}
            </h2>
          );
        case 'h3':
          return (
            <h3 key={index} className="mt-10 mb-4 scroll-mt-28 font-display text-2xl leading-tight font-normal text-vesk-surface">
              {block.text}
            </h3>
          );
        case 'ul':
          return (
            <ul key={index} className="mb-6 grid list-none gap-3">
              {block.items.map((item, i) => (
                <li key={i} className="relative pl-6 before:absolute before:top-[0.8em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-vesk-orange before:content-['']">
                  {renderInline(item)}
                </li>
              ))}
            </ul>
          );
        case 'ol':
          return (
            <ol key={index} className="mb-6 grid list-none gap-3 [counter-reset:step]">
              {block.items.map((item, i) => (
                <li
                  key={i}
                  className="relative pl-10 [counter-increment:step] before:absolute before:top-[0.35em] before:left-0 before:grid before:h-6 before:w-6 before:place-items-center before:rounded-full before:border before:border-vesk-orange/45 before:text-[12px] before:font-medium before:text-vesk-orange-light before:content-[counter(step)]"
                >
                  {renderInline(item)}
                </li>
              ))}
            </ol>
          );
        case 'quote':
          return (
            <blockquote
              key={index}
              className="my-8 border-l-2 border-vesk-orange pl-6 font-display text-2xl leading-snug text-vesk-surface italic"
            >
              {renderInline(block.text)}
            </blockquote>
          );
        case 'callout':
          return (
            <aside
              key={index}
              className="my-9 rounded-xl border border-vesk-border-warm bg-vesk-orange-dim p-6"
            >
              <p className="mb-2 flex items-center gap-2.5 font-display text-xl text-vesk-surface">
                <Lightbulb size={18} aria-hidden className="text-vesk-orange-light" />
                {block.title}
              </p>
              <p className="text-base leading-relaxed text-vesk-mid">{renderInline(block.text)}</p>
            </aside>
          );
      }
    })}
  </div>
);
