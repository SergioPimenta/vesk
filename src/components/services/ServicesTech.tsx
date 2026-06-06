import { SectionDesc, SectionLabel, SectionTitle } from '../home/ui';
import { techStack } from './servicesData';

export const ServicesTech = () => (
  <section className="bg-vesk-dark-2 page-px py-[100px]">
    <div className="mb-12 max-w-2xl">
      <SectionLabel>Stack tecnológica</SectionLabel>
      <SectionTitle>Ferramentas que dominamos</SectionTitle>
      <SectionDesc>
        Utilizamos tecnologias modernas e consolidadas para garantir performance, segurança e facilidade de
        evolução nos projetos.
      </SectionDesc>
    </div>
    <div className="flex flex-wrap gap-3">
      {techStack.map((tech) => (
        <span
          key={tech}
          className="rounded-lg border border-vesk-border bg-vesk-dark px-5 py-2.5 text-[13px] font-medium text-vesk-mid transition-colors hover:border-vesk-border-warm hover:text-vesk-surface"
        >
          {tech}
        </span>
      ))}
    </div>
  </section>
);
