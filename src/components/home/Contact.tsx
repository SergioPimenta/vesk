import { Clock, Mail, MapPin } from 'lucide-react';
import type { ReactNode } from 'react';
import { SectionDesc, SectionLabel, SectionTitle } from './ui';
import { externalLinkProps } from '../../lib/links';
import type { ProjectTypeValue } from '../../lib/leadOptions';
import { projectTypeLabel } from '../../lib/leadOptions';
import { whatsappUrl } from '../../lib/site';
import { FORM_SECTION_ID, trackWhatsappClick } from '../contact/contactActions';
import { LeadForm } from '../contact/LeadForm';

const WhatsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2m0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2m4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.3a.5.5 0 0 0 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3" />
  </svg>
);

const InfoItem = ({ icon, title, note, children }: { icon: ReactNode; title: string; note?: string; children: ReactNode }) => (
  <div className="flex items-start gap-4 rounded-[10px] border border-vesk-border bg-vesk-dark-2 px-5 py-[18px]">
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-vesk-orange/45 text-vesk-orange [&_svg]:h-[18px] [&_svg]:w-[18px]">
      {icon}
    </span>
    <div className="min-w-0 flex-1">
      <b className="block font-medium text-vesk-surface">{title}</b>
      {note && <small className="block text-[13px] text-vesk-muted">{note}</small>}
      <div className="text-[15px] text-vesk-mid">{children}</div>
    </div>
  </div>
);

const hours = [
  ['Segunda a sexta', '09h às 18h'],
  ['Sábado', '09h às 13h'],
  ['Domingo e feriados', 'Fechado'],
];

export const Contact = ({
  service,
  onServiceChange,
  plan,
}: {
  service: ProjectTypeValue | '';
  onServiceChange: (value: ProjectTypeValue | '') => void;
  plan?: string;
}) => {
  const interest = service ? projectTypeLabel(service) : undefined;
  return (
    <section id={FORM_SECTION_ID} className="scroll-mt-24 bg-vesk-dark page-px py-[72px] md:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.25fr] lg:gap-14">
        <div>
          <SectionLabel>Contato</SectionLabel>
          <SectionTitle>
            Vamos conversar sobre <span className="text-vesk-orange">seu projeto.</span>
          </SectionTitle>
          <SectionDesc className="mt-[18px] mb-[30px]">
            Preencha o formulário e um especialista da VESK entra em contato. Sem compromisso, sem enrolação.
          </SectionDesc>

          <div className="grid gap-3">
            <InfoItem icon={<WhatsIcon />} title="WhatsApp" note="Atendimento comercial">
              <a
                href={whatsappUrl(interest)}
                {...externalLinkProps(whatsappUrl(interest))}
                onClick={() => trackWhatsappClick('home_contact', service || undefined)}
                className="inline-flex min-h-[32px] items-center text-vesk-mid no-underline hover:text-vesk-surface"
              >
                (41) 9690-2905
              </a>
            </InfoItem>
            <InfoItem icon={<Mail />} title="E-mail" note="Resposta em até 24 horas úteis">
              <a href="mailto:comercial@vesk.com.br" className="inline-flex min-h-[32px] items-center text-vesk-mid no-underline hover:text-vesk-surface">
                comercial@vesk.com.br
              </a>
            </InfoItem>
            <InfoItem icon={<MapPin />} title="Localização" note="Atendimento remoto em todo o Brasil">
              Curitiba, PR, Brasil
            </InfoItem>
            <InfoItem icon={<Clock />} title="Horário de atendimento">
              <table className="mt-1.5 w-full border-collapse text-sm">
                <tbody>
                  {hours.map(([day, time]) => (
                    <tr key={day}>
                      <td className="py-[3px] text-vesk-mid">{day}</td>
                      <td className="py-[3px] text-right font-medium text-vesk-surface">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </InfoItem>
          </div>
        </div>

        <div>
          {plan && (
            <p className="mb-3 rounded-md border border-vesk-orange/40 bg-vesk-orange-dim px-4 py-3 text-sm text-vesk-surface" role="status">
              Plano escolhido: <strong className="font-medium">{plan}</strong>
            </p>
          )}
          <LeadForm service={service} onServiceChange={onServiceChange} plan={plan} />
        </div>
      </div>
    </section>
  );
};
