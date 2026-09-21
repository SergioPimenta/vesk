import { SectionDesc, SectionLabel, SectionTitle } from '../home/ui';
import { techStack } from './servicesData';

export const ServicesTech = () => (
  <section className="bg-vesk-dark-2 page-px py-16 md:py-24 lg:py-[100px]">
    <div className="mb-12 max-w-2xl" data-reveal>
      <SectionLabel>Stack tecnológica</SectionLabel>
      <SectionTitle>Ferramentas que dominamos</SectionTitle>
      <SectionDesc>
        Utilizamos tecnologias modernas e consolidadas para garantir performance, segurança e facilidade de
        evolução nos projetos.
      </SectionDesc>
    </div>
    <div className="flex flex-wrap gap-3">
      {techStack.map((tech, i) => (
        <span
          key={tech}
          data-reveal="scale"
          style={{ ['--reveal-delay' as string]: `${i * 45}ms` }}
          className="rounded-lg border border-vesk-border bg-vesk-dark px-5 py-2.5 font-mono text-[13px] tracking-[0.02em] text-vesk-mid transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-vesk-border-warm hover:text-vesk-surface"
        >
          {tech}
        </span>
      ))}
    </div>
  </section>
);
