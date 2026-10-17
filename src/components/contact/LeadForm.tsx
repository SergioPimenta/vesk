import { useCallback, useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Loader2 } from 'lucide-react';
import { track } from '../../lib/analytics';
import {
  emptyLead,
  maskPhone,
  submitLead,
  validateField,
  validateLead,
  type LeadErrors,
  type LeadFormValues,
} from '../../lib/leads';
import {
  etapaOptions,
  inicioOptions,
  perfilOptions,
  possuiOptions,
  projectTypes,
  type ProjectTypeValue,
} from '../../lib/leadOptions';
import { btnPrimaryClasses } from '../home/ui';
import { cn } from '../../lib/cn';
import { FIRST_FIELD_ID } from './contactActions';

const DRAFT_KEY = 'vesk_lead_draft_v1';
const FIELD_ORDER = ['nome', 'telefone', 'servico', 'urlAtual'] as const;

const fieldBase =
  'w-full min-h-[52px] rounded-lg border bg-vesk-dark-2 px-4 py-3.5 text-base text-vesk-surface outline-none transition-colors duration-200 placeholder:text-vesk-surface/55 focus:border-vesk-orange focus-visible:ring-2 focus-visible:ring-vesk-orange/40';
const fieldClass = (invalid: boolean) =>
  cn(fieldBase, invalid ? 'border-[#ff9b8c]' : 'border-vesk-surface/35');

type Fields = Omit<LeadFormValues, 'servico'>;

function readDraft(): Partial<LeadFormValues> {
  try {
    return JSON.parse(window.sessionStorage.getItem(DRAFT_KEY) || '{}') as Partial<LeadFormValues>;
  } catch {
    return {};
  }
}

function writeDraft(values: LeadFormValues) {
  try {
    window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(values));
  } catch {
    /* sem storage: apenas não persiste o rascunho */
  }
}

function clearDraft() {
  try {
    window.sessionStorage.removeItem(DRAFT_KEY);
  } catch {
    /* noop */
  }
}

/* ── Peças de UI ───────────────────────────────────────────────────── */

const Field = ({
  id,
  label,
  optional,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-vesk-surface">
      {label}
      {optional ? (
        <span className="ml-1.5 font-normal text-vesk-mid">(opcional)</span>
      ) : (
        <span className="ml-1 text-vesk-orange-light" aria-hidden>
          *
        </span>
      )}
    </label>
    {children}
    {hint && !error && (
      <p id={`${id}-hint`} className="mt-1.5 text-[13px] leading-snug text-vesk-mid">
        {hint}
      </p>
    )}
    {error && (
      <p id={`${id}-error`} className="mt-1.5 text-sm leading-snug text-[#ff9b8c]">
        {error}
      </p>
    )}
  </div>
);

const ChipGroup = ({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: readonly { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) => (
  <fieldset className="min-w-0 border-0 p-0">
    <legend className="mb-2 p-0 text-sm font-medium text-vesk-surface">{legend}</legend>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <label key={option.value} className="relative cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="peer sr-only"
          />
          <span className="flex min-h-[44px] items-center rounded-lg border border-vesk-surface/30 px-3.5 py-2 text-sm leading-tight text-vesk-mid transition-colors duration-150 peer-checked:border-vesk-orange peer-checked:bg-vesk-orange-dim peer-checked:text-vesk-surface peer-focus-visible:ring-2 peer-focus-visible:ring-vesk-orange-light">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  </fieldset>
);

/* ── Formulário ────────────────────────────────────────────────────── */

export const LeadForm = ({
  service,
  onServiceChange,
}: {
  service: ProjectTypeValue | '';
  onServiceChange: (value: ProjectTypeValue | '') => void;
}) => {
  const [fields, setFields] = useState<Fields>(() => {
    const { servico: _servico, ...draft } = readDraft();
    return { ...emptyLead, ...draft };
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending'>('idle');
  const [serverError, setServerError] = useState('');
  const [detailsOpen, setDetailsOpen] = useState(() => {
    const draft = readDraft();
    return !!(draft.perfil || draft.etapa || draft.inicio || draft.possui);
  });

  const mountedAt = useRef(Date.now());
  const started = useRef(false);
  const honeypot = useRef<HTMLInputElement>(null);
  const draftServiceRestored = useRef(false);

  const values: LeadFormValues = { ...fields, servico: service };

  // O script do CRM presente no site captura qualquer <form> no submit. Este formulário faz o próprio
  // envio (com validação e fila de reenvio); marcamos como já rastreado para não duplicar o lead.
  const formRef = useCallback((el: HTMLFormElement | null) => {
    if (el) (el as HTMLFormElement & { __veskFormTracked?: boolean }).__veskFormTracked = true;
  }, []);

  // Restaura o serviço do rascunho (se o visitante ainda não escolheu um card).
  useEffect(() => {
    if (draftServiceRestored.current) return;
    draftServiceRestored.current = true;
    const draftService = readDraft().servico;
    if (!service && draftService) onServiceChange(draftService);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Preserva o que foi digitado (erro de validação, recarga acidental, navegador do Instagram).
  useEffect(() => {
    writeDraft({ ...fields, servico: service });
  }, [fields, service]);

  // Serviço escolhido num card: limpa o erro desse campo.
  useEffect(() => {
    if (service && errors.servico) setErrors((prev) => ({ ...prev, servico: undefined }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    track('form_start');
  };

  const setField = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    markStarted();
    setFields((prev) => ({ ...prev, [key]: value }));
    // Revalida só o que já estava sinalizado, para o erro sumir assim que for corrigido.
    const next = { ...values, [key]: value } as LeadFormValues;
    setErrors((prev) => {
      const out = { ...prev };
      (Object.keys(prev) as (keyof LeadErrors)[]).forEach((name) => {
        out[name] = validateField(name, next);
      });
      return out;
    });
  };

  const blurValidate = (key: keyof LeadErrors) => {
    const message = validateField(key, values);
    setErrors((prev) => ({ ...prev, [key]: message }));
  };

  const fieldId = (name: string) => `lead-${name}`;
  const describedBy = (name: keyof LeadErrors, hint = false) =>
    errors[name] ? `${fieldId(name)}-error` : hint ? `${fieldId(name)}-hint` : undefined;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;
    markStarted();

    const found = validateLead(values);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((name) => found[name]);
    if (firstInvalid) {
      track('form_submit_error', { error_type: 'validation', fields: Object.keys(found).join(',') });
      if (firstInvalid === 'urlAtual') setDetailsOpen(true);
      window.setTimeout(() => document.getElementById(fieldId(firstInvalid))?.focus(), 0);
      return;
    }

    setStatus('sending');
    setServerError('');
    const outcome = await submitLead(values, {
      honeypot: honeypot.current?.value ?? '',
      elapsedMs: Date.now() - mountedAt.current,
    });

    if (outcome.status === 'invalid') {
      setStatus('idle');
      setServerError(outcome.message || 'Não foi possível validar os dados. Revise e tente novamente.');
      track('form_submit_error', { error_type: 'rejected' });
      return;
    }

    clearDraft();
    const queued = outcome.status === 'queued';
    if (queued) {
      track('form_submit_error', { error_type: 'delivery_queued', service: values.servico });
    } else {
      track('form_submit_success', { service: values.servico });
      track('generate_lead', { service: values.servico, method: 'contact_form' });
    }
    navigate('/obrigado', { state: { queued, service: values.servico } });
  };

  /* ── Formulário ── */
  const hasErrors = Object.values(errors).some(Boolean);
  const sending = status === 'sending';

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      onFocus={markStarted}
      aria-label="Solicitar orçamento"
      className="relative rounded-2xl border border-vesk-border bg-vesk-dark-2 p-5 sm:p-8 md:p-10"
    >
      <div className="grid gap-5">
        <Field id={FIRST_FIELD_ID} label="Nome" error={errors.nome}>
          <input
            id={FIRST_FIELD_ID}
            name="name"
            type="text"
            autoComplete="name"
            autoCapitalize="words"
            maxLength={80}
            placeholder="Como podemos chamar você?"
            value={fields.nome}
            onChange={(e) => setField('nome', e.target.value)}
            onBlur={() => blurValidate('nome')}
            aria-required="true"
            aria-invalid={!!errors.nome}
            aria-describedby={describedBy('nome')}
            className={fieldClass(!!errors.nome)}
          />
        </Field>

        <Field id={fieldId('telefone')} label="WhatsApp" error={errors.telefone}>
          <input
            id={fieldId('telefone')}
            name="tel-national"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="(00) 00000-0000"
            value={fields.telefone}
            onChange={(e) => setField('telefone', maskPhone(e.target.value))}
            onBlur={() => blurValidate('telefone')}
            aria-required="true"
            aria-invalid={!!errors.telefone}
            aria-describedby={describedBy('telefone')}
            className={fieldClass(!!errors.telefone)}
          />
        </Field>

        <Field id={fieldId('servico')} label="O que você deseja desenvolver?" error={errors.servico}>
          <div className="relative">
            <select
              id={fieldId('servico')}
              name="service"
              value={service}
              onChange={(e) => {
                markStarted();
                const value = e.target.value as ProjectTypeValue | '';
                onServiceChange(value);
                if (value) track('service_select', { service: value, source: 'form' });
              }}
              onBlur={() => blurValidate('servico')}
              aria-required="true"
              aria-invalid={!!errors.servico}
              aria-describedby={describedBy('servico')}
              className={cn(fieldClass(!!errors.servico), 'appearance-none pr-11', !service && 'text-vesk-surface/55')}
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value} className="bg-vesk-dark-2 text-vesk-surface">
                  {type.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              aria-hidden
              className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-vesk-mid"
            />
          </div>
        </Field>

        <Field id={fieldId('mensagem')} label="Conte um pouco sobre sua ideia" optional>
          <textarea
            id={fieldId('mensagem')}
            name="message"
            rows={5}
            maxLength={1500}
            placeholder="Conte o que você gostaria de criar, melhorar ou automatizar. Não precisa ter tudo definido."
            value={fields.mensagem}
            onChange={(e) => setField('mensagem', e.target.value)}
            className={cn(fieldClass(false), 'min-h-[132px] resize-y leading-relaxed')}
          />
        </Field>

        {/* Qualificação opcional: não bloqueia o envio */}
        <div className="rounded-xl border border-vesk-border bg-vesk-black/40">
          <button
            type="button"
            aria-expanded={detailsOpen}
            aria-controls="lead-details"
            onClick={() => setDetailsOpen((open) => !open)}
            className="flex min-h-[52px] w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-vesk-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesk-orange-light"
          >
            <span>
              Quer nos ajudar a entender melhor?
              <span className="block text-[13px] font-normal text-vesk-mid">Perguntas rápidas, todas opcionais</span>
            </span>
            <ChevronDown
              size={18}
              aria-hidden
              className={cn('shrink-0 text-vesk-mid transition-transform duration-200', detailsOpen && 'rotate-180')}
            />
          </button>

          {detailsOpen && (
            <div id="lead-details" className="grid gap-6 border-t border-vesk-border px-4 py-5">
              <ChipGroup
                legend="Seu projeto é para:"
                name="perfil"
                options={perfilOptions}
                value={fields.perfil}
                onChange={(v) => setField('perfil', v)}
              />
              <ChipGroup
                legend="Em que etapa você está?"
                name="etapa"
                options={etapaOptions}
                value={fields.etapa}
                onChange={(v) => setField('etapa', v)}
              />
              <ChipGroup
                legend="Quando pretende iniciar?"
                name="inicio"
                options={inicioOptions}
                value={fields.inicio}
                onChange={(v) => setField('inicio', v)}
              />
              <ChipGroup
                legend="Já possui site ou sistema?"
                name="possui"
                options={possuiOptions}
                value={fields.possui}
                onChange={(v) => setField('possui', v as Fields['possui'])}
              />
              {fields.possui === 'sim' && (
                <Field
                  id={fieldId('urlAtual')}
                  label="Endereço do site ou sistema"
                  optional
                  error={errors.urlAtual}
                >
                  <input
                    id={fieldId('urlAtual')}
                    name="current-url"
                    type="url"
                    inputMode="url"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    placeholder="www.seusite.com.br"
                    value={fields.urlAtual}
                    onChange={(e) => setField('urlAtual', e.target.value)}
                    onBlur={() => blurValidate('urlAtual')}
                    aria-invalid={!!errors.urlAtual}
                    aria-describedby={describedBy('urlAtual')}
                    className={fieldClass(!!errors.urlAtual)}
                  />
                </Field>
              )}
            </div>
          )}
        </div>

        {/* Armadilha para robôs: invisível e fora da ordem de tabulação */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Não preencha este campo
            <input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
          </label>
        </div>
      </div>

      <div aria-live="polite" className={cn((hasErrors || serverError) && 'mt-5')}>
        {hasErrors && (
          <p className="rounded-lg border border-[#ff9b8c]/50 bg-[#ff9b8c]/10 px-4 py-3 text-sm text-[#ffb4a8]">
            Revise os campos destacados para enviar sua solicitação.
          </p>
        )}
        {serverError && (
          <p role="alert" className="rounded-lg border border-[#ff9b8c]/50 bg-[#ff9b8c]/10 px-4 py-3 text-sm text-[#ffb4a8]">
            {serverError}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className={btnPrimaryClasses(
          'mt-6 min-h-[56px] w-full cursor-pointer justify-center border-none text-base disabled:cursor-wait disabled:opacity-70',
        )}
      >
        {sending ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden />
            Enviando…
          </>
        ) : (
          'Enviar minha solicitação'
        )}
      </button>

      <p className="mt-4 text-center text-[13px] leading-relaxed text-vesk-mid">
        Usamos seus dados apenas para responder à sua solicitação, conforme nossa{' '}
        <Link to="/politica-de-privacidade" className="text-vesk-surface underline underline-offset-4">
          Política de Privacidade
        </Link>
        .
      </p>
    </form>
  );
};
