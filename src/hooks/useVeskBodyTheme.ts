import { useEffect } from 'react';

export function useVeskBodyTheme() {
  useEffect(() => {
    const prev = document.body.style.cssText;
    document.body.style.margin = '0';
    document.body.style.background = '#080b12';
    document.body.style.color = '#ede4d8';
    return () => {
      document.body.style.cssText = prev;
    };
  }, []);
}
