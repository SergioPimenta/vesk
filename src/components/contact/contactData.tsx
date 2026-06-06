import { externalLinkProps } from '../../lib/links';

export const inputClass =
  'font-body w-full rounded-md border border-vesk-border bg-vesk-dark-2 px-4 py-[13px] text-sm text-vesk-surface outline-none transition-colors duration-200 placeholder:text-vesk-muted/60 focus:border-vesk-orange';

export const contactChannels = [
  {
    title: 'Email',
    desc: 'Resposta em até 24 horas úteis',
    content: (
      <a href="mailto:contato@vesk.com.br" className="text-vesk-mid no-underline hover:text-vesk-surface">
        contato@vesk.com.br
      </a>
    ),
    icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  },
  {
    title: 'WhatsApp',
    desc: 'Atendimento comercial',
    content: (
      <a
        href="https://wa.me/554196902905"
        className="text-vesk-mid no-underline hover:text-vesk-surface"
        {...externalLinkProps('https://wa.me/554196902905')}
      >
        (41) 9690-2905
      </a>
    ),
    icon: (
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
  {
    title: 'Localização',
    desc: 'Atendimento remoto em todo o Brasil',
    content: <span className="text-vesk-mid">Curitiba, PR — Brasil</span>,
    icon: (
      <>
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <circle cx="12" cy="11" r="3" />
      </>
    ),
  },
] as const;

export const contactFaqs = [
  {
    q: 'Qual o prazo para retorno do primeiro contato?',
    a: 'Respondemos em até 24 horas úteis. Para demandas urgentes, utilize o WhatsApp.',
  },
  {
    q: 'Vocês atendem empresas de qual porte?',
    a: 'Trabalhamos com startups, PMEs e empresas consolidadas — do MVP ao sistema corporativo.',
  },
  {
    q: 'Como funciona o orçamento?',
    a: 'Após entender seu projeto, enviamos uma proposta com escopo, prazos e investimento estimado.',
  },
  {
    q: 'Fazem manutenção de sistemas existentes?',
    a: 'Sim. Avaliamos legado, refatoração e evolução contínua com suporte técnico dedicado.',
  },
] as const;
