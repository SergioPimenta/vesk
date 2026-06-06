export function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function externalLinkProps(href: string) {
  if (!isExternalHref(href)) return {};
  return { target: '_blank' as const, rel: 'noopener noreferrer' };
}
