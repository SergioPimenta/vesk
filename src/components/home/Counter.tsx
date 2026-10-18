import { useEffect, useRef, useState } from 'react';

type CounterProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  suffixClassName?: string;
};

/**
 * Conta de 0 até `end` quando entra na viewport. Honra prefers-reduced-motion.
 * Renderiza `end` de saída (HTML pré-renderizado e buscadores leem o número real) e só zera
 * no navegador se ainda estiver fora da tela, para animar quando aparecer.
 */
export const Counter = ({
  end,
  suffix = '',
  prefix = '',
  duration = 1600,
  className,
  suffixClassName,
}: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(end);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setValue(end);
      return;
    }

    const isInView = () => {
      const rect = node.getBoundingClientRect();
      const h = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < h * 0.85 && rect.bottom > 0;
    };
    // Já visível ao carregar: mantém o número final, sem piscar para 0.
    if (isInView()) {
      setValue(end);
      return;
    }
    setValue(0);

    let animRaf = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        // easeOutExpo
        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        setValue(Math.round(eased * end));
        if (p < 1) animRaf = requestAnimationFrame(tick);
      };
      animRaf = requestAnimationFrame(tick);
    };

    // rAF-throttled scroll check — reliable even when tabs are throttled.
    const check = () => {
      if (started) return;
      if (isInView()) {
        started = true;
        run();
        cleanup();
      }
    };

    function cleanup() {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    }

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    const settle = window.setTimeout(check, 200);

    return () => {
      cleanup();
      cancelAnimationFrame(animRaf);
      window.clearTimeout(settle);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </span>
  );
};
