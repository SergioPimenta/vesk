import { track } from '../../lib/analytics';

export const FORM_SECTION_ID = 'formulario';
export const FIRST_FIELD_ID = 'lead-nome';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches;

export function smoothScrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
}

/** Rolagem suave até o formulário, sem recarregar a página. */
export function scrollToLeadForm({ focus = true }: { focus?: boolean } = {}) {
  if (!document.getElementById(FORM_SECTION_ID)) return;
  smoothScrollTo(FORM_SECTION_ID);
  // No celular, abrir o teclado sozinho esconde o formulário: só focamos em desktop.
  if (focus && !isTouchDevice()) {
    window.setTimeout(() => document.getElementById(FIRST_FIELD_ID)?.focus({ preventScroll: true }), 500);
  }
}

/** Clique em "Solicitar orçamento" (mede e rola até o formulário). */
export function openQuote(ctaLocation: string) {
  track('cta_quote_click', { cta_location: ctaLocation });
  scrollToLeadForm();
}

/** Clique para abrir o WhatsApp: é intenção de contato, NÃO um lead. */
export function trackWhatsappClick(ctaLocation: string, service?: string) {
  track('whatsapp_click', { cta_location: ctaLocation, ...(service ? { service } : {}) });
}
