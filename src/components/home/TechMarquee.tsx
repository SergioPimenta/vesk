import { techStack } from '../services/servicesData';

const row = [...techStack, ...techStack];

export const TechMarquee = () => (
  <section
    aria-label="Tecnologias que a VESK utiliza"
    className="relative overflow-hidden border-y border-vesk-border bg-vesk-black py-6"
  >
    <div className="flex items-center gap-4 page-px">
      <span className="mono-tag hidden shrink-0 text-vesk-orange sm:inline">Stack //</span>
      <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-10">
          {row.map((tech, i) => (
            <span key={`${tech}-${i}`} className="flex shrink-0 items-center gap-10">
              <span className="font-mono text-sm tracking-[0.06em] text-vesk-mid transition-colors hover:text-vesk-surface">
                {tech}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-vesk-orange/50" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
