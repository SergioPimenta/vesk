/**
 * POST /api/lead  (Vercel Serverless Function)
 *
 * Valida e higieniza a solicitação do formulário de contato no servidor,
 * aplica proteção básica contra spam e encaminha ao CRM da VESK.
 *
 * Variáveis opcionais: CRM_API_URL, CRM_FORM_CODE, ALLOWED_ORIGINS (separadas por vírgula).
 */

const CRM_API_URL = process.env.CRM_API_URL || 'https://crm.vesk.com.br';
const CRM_FORM_CODE = process.env.CRM_FORM_CODE || 'c799dd71f5ce9717e7609f66905aea52';
const ALLOWED_ORIGINS = (
  process.env.ALLOWED_ORIGINS || 'https://www.vesk.com.br,https://vesk.com.br'
)
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map(); // melhor esforço: por instância da função

const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const clean = (value, max) =>
  typeof value === 'string' ? value.replace(CONTROL_CHARS, '').trim().slice(0, max) : '';

function isValidMobile(d) {
  return (
    /^\d{11}$/.test(d) && d[0] !== '0' && d[1] !== '0' && d[2] === '9' && !/^(\d)\1+$/.test(d)
  );
}

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_MAX;
}

function originAllowed(origin) {
  if (!origin) return true; // chamadas sem Origin (ex.: mesmo site, alguns WebViews)
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin) || /^https:\/\/[\w-]+\.vercel\.app$/.test(origin);
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, message: 'Método não permitido.' });
  }
  if (!originAllowed(req.headers.origin)) {
    return res.status(403).json({ ok: false, message: 'Origem não permitida.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = null;
    }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ ok: false, message: 'Requisição inválida.' });
  }

  // Honeypot / envio instantâneo: finge sucesso para não dar pista ao bot.
  if (clean(body.website, 200) || Number(body.elapsedMs) < 1500) {
    return res.status(200).json({ ok: true });
  }

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown')
    .split(',')[0]
    .trim();
  if (rateLimited(ip)) {
    return res.status(429).json({ ok: false, message: 'Muitas tentativas. Tente novamente em alguns minutos.' });
  }

  const nome = clean(body.nome, 80);
  const telefone = String(body.telefone || '').replace(/\D/g, '');
  const mensagem = clean(body.mensagem, 4000);
  const pageUrl = clean(body.pageUrl, 500);

  if (nome.length < 2) return res.status(422).json({ ok: false, message: 'Informe seu nome.' });
  if (!isValidMobile(telefone)) {
    return res.status(422).json({ ok: false, message: 'Informe um WhatsApp válido com DDD.' });
  }
  if (!mensagem) return res.status(422).json({ ok: false, message: 'Solicitação incompleta.' });

  try {
    const crm = await fetch(`${CRM_API_URL}/api/form/${CRM_FORM_CODE}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: JSON.stringify({ nome, telefone, mensagem, pageUrl }),
      signal: AbortSignal.timeout(10000),
    });
    if (!crm.ok) {
      console.error('[lead] CRM respondeu', crm.status);
      return res.status(502).json({ ok: false, message: 'CRM indisponível.' });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('[lead] falha ao falar com o CRM', error);
    return res.status(502).json({ ok: false, message: 'CRM indisponível.' });
  }
}
