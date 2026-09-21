import { useEffect, useState } from 'react';

/** Fina barra de progresso de leitura no topo da página. */
export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(scrollTop / height, 1) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[110] h-[3px] bg-transparent" aria-hidden>
      <div
        className="h-full origin-left bg-gradient-to-r from-vesk-orange-deep via-vesk-orange to-vesk-orange-light shadow-[0_0_12px_rgba(194,101,59,0.6)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
