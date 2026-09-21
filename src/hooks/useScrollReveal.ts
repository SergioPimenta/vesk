import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Orchestrated scroll reveal. Any element with `data-reveal` fades/rises into
 * place when it enters the viewport. Stagger with an inline `--reveal-delay`.
 *
 * Uses a rAF-throttled scroll check (not IntersectionObserver) so it stays
 * reliable even in tabs the browser throttles, and never leaves content stuck
 * hidden. Reduced-motion is honored in CSS and here.
 */
export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Gate the hidden state on JS being active — without this class the CSS
    // leaves every [data-reveal] fully visible.
    document.documentElement.classList.add('reveal-ready');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const reveal = () => {
      const h = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < h * 0.9 && rect.bottom > 0) {
          el.classList.add('is-visible');
        }
      });
    };

    // Reveal what's already in view, then follow the scroll.
    reveal();
    window.addEventListener('scroll', reveal, { passive: true });
    window.addEventListener('resize', reveal, { passive: true });
    // Safety re-checks once layout/images settle.
    const t1 = window.setTimeout(reveal, 200);
    const t2 = window.setTimeout(reveal, 800);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('resize', reveal);
    };
  }, [pathname]);
}
