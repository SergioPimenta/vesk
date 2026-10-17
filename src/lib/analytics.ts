/**
 * Camada de mensuração. Empurra eventos padronizados para o `dataLayer` (GTM/GA4)
 * e espelha os de conversão no Meta Pixel quando ele existir na página.
 *
 * Privacidade (LGPD): NUNCA passe nome, telefone, e-mail ou texto livre do
 * visitante como parâmetro. Apenas valores categóricos (ex.: tipo de serviço).
 *
 * Consentimento: o Consent Mode v2 inicia como "negado". Quando existir um banner
 * de cookies, chame `grantAnalyticsConsent()` na aceitação. O GTM só é carregado
 * se `VITE_GTM_ID` estiver definido no build.
 */

export type EventParams = Record<string, string | number | boolean>;

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = 'vesk_consent';
let initialised = false;

function safeStorageGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function gtag(..._args: unknown[]) {
  // GTM exige o objeto `arguments` (não um array) para comandos no estilo gtag.
  // eslint-disable-next-line prefer-rest-params
  (window.dataLayer = window.dataLayer || []).push(arguments);
}

export function initAnalytics() {
  if (initialised || typeof window === 'undefined') return;
  initialised = true;

  window.dataLayer = window.dataLayer || [];
  (gtag as Gtag)('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  });
  if (safeStorageGet(CONSENT_KEY) === 'granted') applyConsent(true);

  const gtmId = import.meta.env.VITE_GTM_ID as string | undefined;
  if (gtmId && /^GTM-[A-Z0-9]+$/.test(gtmId)) {
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);
  }
}

function applyConsent(granted: boolean) {
  const value = granted ? 'granted' : 'denied';
  (gtag as Gtag)('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

/** Para o futuro banner de cookies. */
export function grantAnalyticsConsent() {
  try {
    window.localStorage.setItem(CONSENT_KEY, 'granted');
  } catch {
    /* storage indisponível: vale apenas para esta sessão */
  }
  applyConsent(true);
}

export function revokeAnalyticsConsent() {
  try {
    window.localStorage.setItem(CONSENT_KEY, 'denied');
  } catch {
    /* noop */
  }
  applyConsent(false);
}

const PIXEL_STANDARD: Record<string, string> = {
  generate_lead: 'Lead',
};
const PIXEL_CUSTOM: Record<string, string> = {
  whatsapp_click: 'WhatsAppClick',
  cta_quote_click: 'QuoteCtaClick',
};

export function track(event: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return;
  try {
    (window.dataLayer = window.dataLayer || []).push({ event, ...params });
    if (window.fbq) {
      if (PIXEL_STANDARD[event]) window.fbq('track', PIXEL_STANDARD[event], params);
      else if (PIXEL_CUSTOM[event]) window.fbq('trackCustom', PIXEL_CUSTOM[event], params);
    }
  } catch {
    /* medição nunca pode quebrar a página */
  }
}
