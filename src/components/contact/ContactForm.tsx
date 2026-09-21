import { useNavigate } from 'react-router-dom';
import { ArrowIcon } from '../home/icons';
import { BtnPrimary } from '../home/ui';
import { inputClass } from './contactData';

type ContactFormProps = {
  id?: string;
  className?: string;
  submitLabel?: string;
  showPrivacyNote?: boolean;
};

export const ContactForm = ({
  id,
  className,
  submitLabel = 'Enviar Mensagem',
  showPrivacyNote = false,
}: ContactFormProps) => {
  const navigate = useNavigate();

  return (
  <form
    id={id}
    className={className}
    onSubmit={(e) => {
      e.preventDefault();
      navigate('/obrigado');
    }}
    aria-label="Formulário de contato"
  >
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="flex flex-col gap-2">
        <span className="mono-tag text-vesk-muted">Nome Completo *</span>
        <input type="text" name="name" required placeholder="Seu nome" className={inputClass} />
      </label>
      <label className="flex flex-col gap-2">
        <span className="mono-tag text-vesk-muted">Empresa</span>
        <input type="text" name="company" placeholder="Sua empresa" className={inputClass} />
      </label>
    </div>
    <div className="mt-4 grid gap-4 sm:grid-cols-2">
      <label className="flex flex-col gap-2">
        <span className="mono-tag text-vesk-muted">Email *</span>
        <input type="email" name="email" required placeholder="seu@email.com.br" className={inputClass} />
      </label>
      <label className="flex flex-col gap-2">
        <span className="mono-tag text-vesk-muted">Telefone *</span>
        <input type="tel" name="phone" required placeholder="(41) 9690-2905" className={inputClass} />
      </label>
    </div>
    <label className="mt-4 flex flex-col gap-2">
      <span className="text-xs tracking-wider text-vesk-muted uppercase">Assunto</span>
      <select name="subject" className={inputClass} defaultValue="">
        <option value="" disabled>
          Selecione um assunto
        </option>
        <option value="orcamento">Solicitar orçamento</option>
        <option value="projeto">Novo projeto</option>
        <option value="suporte">Suporte técnico</option>
        <option value="parceria">Parceria</option>
        <option value="outro">Outro</option>
      </select>
    </label>
    <label className="mt-4 flex flex-col gap-2">
      <span className="text-xs tracking-wider text-vesk-muted uppercase">Mensagem *</span>
      <textarea
        name="message"
        required
        placeholder="Conte sobre seu projeto, prazos e objetivos..."
        className={`${inputClass} min-h-[140px] resize-y`}
      />
    </label>
    <BtnPrimary type="button" className="mt-6 cursor-pointer self-start border-none">
      {submitLabel}
      <ArrowIcon />
    </BtnPrimary>
    {showPrivacyNote && (
      <p className="mt-3 text-xs text-vesk-muted">🔒 Seus dados são confidenciais. Não enviamos spam.</p>
    )}
  </form>
  );
};
