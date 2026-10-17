export const projectTypes = [
  { value: 'site', label: 'Site profissional' },
  { value: 'loja', label: 'Loja virtual / e-commerce' },
  { value: 'sistema', label: 'Sistema personalizado' },
  { value: 'app', label: 'Aplicativo' },
  { value: 'crm-automacao', label: 'CRM ou automação' },
  { value: 'integracao', label: 'Integração entre sistemas' },
  { value: 'modernizacao', label: 'Modernização de uma solução existente' },
  { value: 'orientacao', label: 'Ainda não sei / Quero orientação' },
  { value: 'outro', label: 'Outro projeto' },
] as const;

export type ProjectTypeValue = (typeof projectTypes)[number]['value'];

export const projectTypeLabel = (value: string): string =>
  projectTypes.find((p) => p.value === value)?.label ?? '';

export const perfilOptions = [
  { value: 'empresa', label: 'Uma empresa existente' },
  { value: 'novo-negocio', label: 'Um negócio que estou começando' },
  { value: 'pessoal', label: 'Um projeto pessoal' },
  { value: 'outro', label: 'Outro' },
] as const;

export const etapaOptions = [
  { value: 'ideia', label: 'Tenho apenas uma ideia' },
  { value: 'planejando', label: 'Estou planejando o projeto' },
  { value: 'melhorar', label: 'Já tenho uma solução e quero melhorar' },
  { value: 'urgente', label: 'Preciso desenvolver o quanto antes' },
] as const;

export const inicioOptions = [
  { value: 'imediato', label: 'O mais rápido possível' },
  { value: '30-dias', label: 'Nos próximos 30 dias' },
  { value: '3-meses', label: 'Nos próximos 3 meses' },
  { value: 'pesquisando', label: 'Ainda estou pesquisando' },
] as const;

export const possuiOptions = [
  { value: 'sim', label: 'Sim' },
  { value: 'nao', label: 'Não' },
] as const;
