import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SectionLabel } from '../home/ui';

export type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageLayoutProps = {
  label: string;
  title: string;
  updatedAt: string;
  intro: ReactNode;
  sections: LegalSection[];
};

export const LegalPageLayout = ({ label, title, updatedAt, intro, sections }: LegalPageLayoutProps) => (
  <section className="bg-vesk-black page-px pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-[140px] lg:pb-24">
    <div className="mx-auto max-w-3xl">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="font-display text-[clamp(2rem,5vw,2.75rem)] leading-[1.08] font-bold tracking-[-0.04em]">
        {title}
      </h1>
      <p className="mt-4 text-sm text-vesk-muted">Última atualização: {updatedAt}</p>
      <div className="mt-8 text-base leading-[1.85] font-light text-vesk-mid [&_a]:text-vesk-orange [&_a]:no-underline [&_a]:hover:text-vesk-orange-light">
        {intro}
      </div>

      <div className="mt-12 flex flex-col gap-10">
        {sections.map((section) => (
          <article key={section.title}>
            <h2 className="font-display mb-4 text-lg font-semibold text-vesk-surface">{section.title}</h2>
            <div className="flex flex-col gap-3 text-sm leading-[1.85] text-vesk-mid [&_a]:text-vesk-orange [&_a]:no-underline [&_a]:hover:text-vesk-orange-light [&_li]:ml-5 [&_li]:list-disc [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_strong]:font-medium [&_strong]:text-vesk-surface">
              {section.content}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-14 border-t border-vesk-border pt-8 text-sm text-vesk-muted">
        Dúvidas sobre este documento?{' '}
        <Link to="/contato" className="text-vesk-orange no-underline hover:text-vesk-orange-light">
          Entre em contato conosco
        </Link>
        .
      </p>
    </div>
  </section>
);
