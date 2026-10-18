import { useEffect } from 'react';

export function useVeskBodyTheme() {
  useEffect(() => {
    const prev = document.body.style.cssText;
    document.body.style.margin = '0';
    document.body.style.background = '#0f1113';
    document.body.style.color = '#f2ece4';
    return () => {
      document.body.style.cssText = prev;
    };
  }, []);
}
