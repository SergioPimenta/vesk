/**
 * Origem do visitante (UTMs, referrer, Instagram). Guardada por sessão para que o lead
 * mantenha a origem mesmo depois de navegar por outras páginas do site.
 * Não contém dados pessoais.
 */

const KEY = 'vesk_attribution_v1';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const CLICK_KEYS = ['gclid', 'fbclid'] as const;

export type Attribution = {
  origem: string;
  params: Record<string, string>;
  referrer: string;
  landing: string;
};

let memory: Attribution | null = null;

function read(): Attribution | null {
  if (memory) return memory;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (raw) return (memory = JSON.parse(raw) as Attribution);
  } catch {
    /* sessionStorage indisponível */
  }
  return null;
}

function write(value: Attribution) {
  memory = value;
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    /* mantém em memória */
  }
}

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

function deriveOrigin(params: Record<string, string>, referrer: string): string {
  if (params.utm_source) {
    return params.utm_medium ? `${params.utm_source} / ${params.utm_medium}` : params.utm_source;
  }
  if (params.fbclid) return 'Meta (anúncio)';
  if (params.gclid) return 'Google Ads';
  if (/Instagram/i.test(navigator.userAgent)) return 'Instagram';

  const host = hostOf(referrer);
  if (!host || host === window.location.hostname.replace(/^www\./, '')) return 'Acesso direto';
  if (/(^|\.)instagram\.com$/.test(host)) return 'Instagram';
  if (/(^|\.)(facebook|fb)\.com$/.test(host)) return 'Facebook';
  if (/(^|\.)google\./.test(host)) return 'Google (busca)';
  if (/(^|\.)(bing|duckduckgo|yahoo)\./.test(host)) return `Busca (${host})`;
  return host;
}

/** Chame uma vez ao carregar o app: registra a origem da visita. */
export function captureAttribution() {
  if (typeof window === 'undefined') return;

  const search = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};
  [...UTM_KEYS, ...CLICK_KEYS].forEach((key) => {
    const value = search.get(key);
    if (value) params[key] = value.slice(0, 120);
  });

  const hasNewCampaign = Object.keys(params).length > 0;
  if (read() && !hasNewCampaign) return;

  write({
    origem: deriveOrigin(params, document.referrer),
    params,
    // Navegação interna (mesmo site) não é origem de nada.
    referrer: hostOf(document.referrer) === window.location.hostname.replace(/^www\./, '') ? '' : document.referrer.slice(0, 300),
    landing: `${window.location.pathname}${window.location.search}`.slice(0, 300),
  });
}

export function getAttribution(): Attribution {
  return (
    read() ?? {
      origem: 'Acesso direto',
      params: {},
      referrer: '',
      landing: window.location.pathname,
    }
  );
}
