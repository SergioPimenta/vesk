import { getAttribution } from './attribution';
import {
  etapaOptions,
  inicioOptions,
  perfilOptions,
  projectTypeLabel,
  type ProjectTypeValue,
} from './leadOptions';

/* ── Tipos ─────────────────────────────────────────────────────────── */

export type LeadFormValues = {
  nome: string;
  telefone: string; // com máscara, como digitado
  servico: ProjectTypeValue | '';
  mensagem: string;
  perfil: string;
  etapa: string;
  inicio: string;
  possui: '' | 'sim' | 'nao';
  urlAtual: string;
  /** Plano escolhido na seção de Planos da home, quando houver. */
  plano?: string;
};

export type LeadErrors = Partial<Record<'nome' | 'telefone' | 'servico' | 'urlAtual', string>>;

export const emptyLead: LeadFormValues = {
  nome: '',
  telefone: '',
  servico: '',
  mensagem: '',
  perfil: '',
  etapa: '',
  inicio: '',
  possui: '',
  urlAtual: '',
};

/* ── Telefone ──────────────────────────────────────────────────────── */

export function maskPhone(input: string): string {
  let d = input.replace(/\D/g, '');
  if (d.length > 11 && d.startsWith('55')) d = d.slice(2); // colou com +55
  d = d.slice(0, 11);
  if (d.length === 0) return '';
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export const phoneDigits = (value: string) => value.replace(/\D/g, '');

/** Celular brasileiro com DDD: 11 dígitos, DDD válido, 9º dígito. */
export function isValidMobile(digits: string): boolean {
  if (digits.length !== 11) return false;
  if (digits[0] === '0' || digits[1] === '0') return false; // DDD 10, 20... não existem
  if (digits[2] !== '9') return false;
  return !/^(\d)\1+$/.test(digits);
}

/* ── Validação ─────────────────────────────────────────────────────── */

export function normalizeUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function isPlausibleUrl(value: string): boolean {
  try {
    const url = new URL(normalizeUrl(value));
    return /^https?:$/.test(url.protocol) && /\.[a-z]{2,}$/i.test(url.hostname);
  } catch {
    return false;
  }
}

export function validateField(name: keyof LeadErrors, values: LeadFormValues): string | undefined {
  switch (name) {
    case 'nome':
      return values.nome.trim().length < 2 ? 'Informe seu nome para podermos nos apresentar.' : undefined;
    case 'telefone': {
      const digits = phoneDigits(values.telefone);
      if (!digits) return 'Informe seu WhatsApp com DDD.';
      return isValidMobile(digits) ? undefined : 'Confira o número: use DDD + celular, ex.: (41) 99999-9999.';
    }
    case 'servico':
      return values.servico ? undefined : 'Escolha o que você deseja desenvolver. Se estiver em dúvida, selecione “Ainda não sei”.';
    case 'urlAtual':
      return values.possui === 'sim' && values.urlAtual.trim() && !isPlausibleUrl(values.urlAtual)
        ? 'Endereço inválido. Informe algo como www.seusite.com.br ou deixe em branco.'
        : undefined;
  }
}

export function validateLead(values: LeadFormValues): LeadErrors {
  const errors: LeadErrors = {};
  (['nome', 'telefone', 'servico', 'urlAtual'] as const).forEach((field) => {
    const message = validateField(field, values);
    if (message) errors[field] = message;
  });
  return errors;
}

/* ── Mensagem estruturada para o comercial ─────────────────────────── */

const labelOf = (list: readonly { value: string; label: string }[], value: string) =>
  list.find((item) => item.value === value)?.label;

/**
 * O CRM recebe nome, telefone e um campo de texto livre. Tudo que qualifica o lead
 * (serviço, contexto, origem/UTMs) vai estruturado nesse texto até o CRM ganhar campos próprios.
 */
export function buildMessage(values: LeadFormValues): string {
  const attribution = getAttribution();
  const lines: string[] = [`Serviço de interesse: ${projectTypeLabel(values.servico) || 'Não informado'}`];
  if (values.plano) lines.push(`Plano de interesse: ${values.plano}`);

  const perfil = labelOf(perfilOptions, values.perfil);
  const etapa = labelOf(etapaOptions, values.etapa);
  const inicio = labelOf(inicioOptions, values.inicio);
  if (perfil) lines.push(`Projeto para: ${perfil}`);
  if (etapa) lines.push(`Etapa: ${etapa}`);
  if (inicio) lines.push(`Pretende iniciar: ${inicio}`);
  if (values.possui === 'sim') {
    lines.push(`Já possui site/sistema: Sim${values.urlAtual.trim() ? ` (${normalizeUrl(values.urlAtual)})` : ''}`);
  } else if (values.possui === 'nao') {
    lines.push('Já possui site/sistema: Não');
  }

  const utm = Object.entries(attribution.params)
    .map(([k, v]) => `${k}=${v}`)
    .join(', ');
  lines.push(`Origem: ${attribution.origem}${utm ? ` [${utm}]` : ''}`);
  if (attribution.referrer) lines.push(`Referrer: ${attribution.referrer}`);
  lines.push(`Página de entrada: ${attribution.landing}`);
  lines.push(
    `Solicitado em: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })} (horário de Brasília)`,
  );
  lines.push(`Canal: Formulário (${window.location.pathname === '/' ? 'página inicial' : 'página de contato'})`);

  const description = values.mensagem.trim();
  lines.push('', 'Sobre o projeto:', description || '(não informado)');
  return lines.join('\n');
}

/* ── Envio, fila e reprocessamento ─────────────────────────────────── */

const CRM_API = 'https://crm.vesk.com.br';
const CRM_FORM_CODE = 'c799dd71f5ce9717e7609f66905aea52';
const QUEUE_KEY = 'vesk_lead_queue_v1';
const SENT_KEY = 'vesk_lead_last_v1';
const QUEUE_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const QUEUE_MAX_ITEMS = 5;
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000;

type LeadPayload = {
  id: string;
  nome: string;
  telefone: string; // somente dígitos
  mensagem: string;
  pageUrl: string;
  website: string; // honeypot
  elapsedMs: number;
};

type QueueItem = { payload: LeadPayload; createdAt: number };
type SendResult = { result: 'sent' } | { result: 'invalid'; message?: string } | { result: 'retry' };

export type SubmitOutcome =
  | { status: 'sent' }
  | { status: 'queued' }
  | { status: 'invalid'; message?: string };

function uid(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function readQueue(): QueueItem[] {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(QUEUE_KEY) || '[]') as QueueItem[];
    const now = Date.now();
    return parsed.filter((item) => now - item.createdAt < QUEUE_MAX_AGE_MS);
  } catch {
    return [];
  }
}

function writeQueue(items: QueueItem[]) {
  try {
    if (items.length) window.localStorage.setItem(QUEUE_KEY, JSON.stringify(items.slice(-QUEUE_MAX_ITEMS)));
    else window.localStorage.removeItem(QUEUE_KEY);
  } catch {
    /* sem storage: o envio imediato ainda foi tentado */
  }
}

async function fetchWithTimeout(url: string, init: RequestInit, ms = 12000): Promise<Response> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    window.clearTimeout(timer);
  }
}

async function sendOnce(payload: LeadPayload): Promise<SendResult> {
  // 1) API própria (validação + antispam no servidor, encaminha ao CRM)
  try {
    const res = await fetchWithTimeout('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const isJson = res.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await res.json().catch(() => null) : null;
    if (res.ok && data?.ok === true) return { result: 'sent' };
    if (res.status === 400 || res.status === 422) return { result: 'invalid', message: data?.message };
    if (res.status === 429) return { result: 'retry' };
    // 404/5xx/HTML (hospedagem sem API): cai para o CRM direto
  } catch {
    /* rede indisponível ou timeout: tenta o CRM direto */
  }

  // 2) CRM direto, mesmo contrato do script de formulário já usado no site
  try {
    const res = await fetchWithTimeout(`${CRM_API}/api/form/${CRM_FORM_CODE}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: JSON.stringify({
        nome: payload.nome,
        telefone: payload.telefone,
        mensagem: payload.mensagem,
        pageUrl: payload.pageUrl,
      }),
    });
    if (res.ok) return { result: 'sent' };
  } catch {
    /* sem conexão com o CRM */
  }
  return { result: 'retry' };
}

/** Evita reenviar a mesma solicitação (duplo clique, voltar e reenviar). */
function wasJustSent(fingerprint: string): boolean {
  try {
    const raw = JSON.parse(window.sessionStorage.getItem(SENT_KEY) || 'null') as { f: string; t: number } | null;
    return !!raw && raw.f === fingerprint && Date.now() - raw.t < DUPLICATE_WINDOW_MS;
  } catch {
    return false;
  }
}

function markSent(fingerprint: string) {
  try {
    window.sessionStorage.setItem(SENT_KEY, JSON.stringify({ f: fingerprint, t: Date.now() }));
  } catch {
    /* noop */
  }
}

export async function submitLead(
  values: LeadFormValues,
  meta: { honeypot: string; elapsedMs: number },
): Promise<SubmitOutcome> {
  const digits = phoneDigits(values.telefone);
  const mensagem = buildMessage(values);
  const fingerprint = `${digits}|${values.servico}|${values.mensagem.trim()}`;

  // Bot: finge sucesso e descarta, sem dar pista do bloqueio.
  if (meta.honeypot || meta.elapsedMs < 1500) return { status: 'sent' };
  if (wasJustSent(fingerprint)) return { status: 'sent' };

  const payload: LeadPayload = {
    id: uid(),
    nome: values.nome.trim().slice(0, 80),
    telefone: digits,
    mensagem,
    pageUrl: window.location.href,
    website: '',
    elapsedMs: meta.elapsedMs,
  };

  const outcome = await sendOnce(payload);
  if (outcome.result === 'sent') {
    markSent(fingerprint);
    return { status: 'sent' };
  }
  if (outcome.result === 'invalid') return { status: 'invalid', message: outcome.message };

  // Falha temporária: guarda com segurança e reprocessa depois. O visitante não perde a solicitação.
  writeQueue([...readQueue(), { payload, createdAt: Date.now() }]);
  return { status: 'queued' };
}

let flushing = false;

/** Reenvia solicitações guardadas. Chamado ao abrir o site, ao voltar online e ao voltar à aba. */
export async function flushLeadQueue(): Promise<number> {
  if (flushing || typeof window === 'undefined') return 0;
  const queue = readQueue();
  if (!queue.length) return 0;

  flushing = true;
  let delivered = 0;
  try {
    const remaining: QueueItem[] = [];
    for (const item of queue) {
      const outcome = await sendOnce(item.payload);
      if (outcome.result === 'sent') delivered += 1;
      else if (outcome.result === 'retry') remaining.push(item);
      // 'invalid' é descartado: reenviar não vai resolver
    }
    writeQueue(remaining);
  } finally {
    flushing = false;
  }
  return delivered;
}

export function pendingLeadCount(): number {
  return typeof window === 'undefined' ? 0 : readQueue().length;
}
