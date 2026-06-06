import { useEffect } from 'react';

export function useVeskBodyTheme() {
  useEffect(() => {
    const prev = document.body.style.cssText;
    document.body.style.margin = '0';
    document.body.style.background = '#0b111a';
    document.body.style.color = '#d4c3b3';
    return () => {
      document.body.style.cssText = prev;
    };
  }, []);
}
