import type { ProjectTypeValue } from './leadOptions';

export type Plan = {
  name: string;
  price: string;
  /** Valor numérico em BRL para os dados estruturados (vazio quando é sob consulta). */
  amount?: number;
  items: string[];
  service: ProjectTypeValue;
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: 'Landing Page',
    price: 'R$ 600',
    amount: 600,
    items: ['Site institucional de 1 página', 'Design moderno', 'Responsivo', 'Suporte inicial'],
    service: 'site',
    cta: 'Escolher plano',
  },
  {
    name: 'Site Profissional',
    price: 'R$ 1.000',
    amount: 1000,
    items: ['Site completo', 'Até 5 páginas', 'SEO básico', 'Suporte prioritário'],
    service: 'site',
    cta: 'Escolher plano',
    featured: true,
  },
  {
    name: 'E-commerce',
    price: 'R$ 2.000',
    amount: 2000,
    items: ['Loja virtual completa', 'Integração com pagamento', 'Gestão de produtos', 'Treinamento e suporte'],
    service: 'loja',
    cta: 'Escolher plano',
  },
  {
    name: 'Sistemas Personalizados',
    price: 'Sob consulta',
    items: ['Solução sob medida', 'Integrações e automações', 'Escalável e seguro', 'Suporte especializado'],
    service: 'sistema',
    cta: 'Falar com especialista',
  },
];

/** Menor preço publicado, usado em textos como "a partir de". */
export const lowestPlanPrice = Math.min(...plans.filter((p) => p.amount).map((p) => p.amount as number));
