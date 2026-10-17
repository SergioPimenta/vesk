export const SITE_URL = 'https://www.vesk.com.br';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const SITE_NAME = 'VESK Software House';

export const WHATSAPP_NUMBER = '554196902905';
export const DEFAULT_WHATSAPP_MESSAGE = 'Olá! Vim pelo site da VESK e gostaria de conversar sobre um projeto.';

/** Link wa.me com mensagem inicial. `interest` adapta o texto ao serviço já escolhido. */
export function whatsappUrl(interest?: string): string {
  const text = interest
    ? `Olá! Vim pelo site da VESK e tenho interesse em: ${interest}. Gostaria de conversar sobre um projeto.`
    : DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
