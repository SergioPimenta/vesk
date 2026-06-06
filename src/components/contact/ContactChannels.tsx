import { IconBox } from '../home/ui';
import { contactChannels } from './contactData';

export const ContactChannels = ({ stacked = false }: { stacked?: boolean }) => (
  <div className={stacked ? 'flex flex-col gap-4' : 'flex flex-wrap justify-center gap-7'}>
    {contactChannels.map((item) => (
      <div
        key={item.title}
        className={
          stacked
            ? 'flex items-start gap-4 rounded-xl border border-vesk-border bg-vesk-dark-2 p-5'
            : 'flex items-start gap-4'
        }
      >
        <IconBox size="md" className="!h-11 !w-11 rounded-[10px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {item.icon}
          </svg>
        </IconBox>
        <div>
          <h4 className="font-display mb-0.5 text-sm font-semibold">{item.title}</h4>
          {stacked && <p className="mb-1.5 text-[11px] text-vesk-muted">{item.desc}</p>}
          <p className="text-[13px] text-vesk-muted">{item.content}</p>
        </div>
      </div>
    ))}
  </div>
);
