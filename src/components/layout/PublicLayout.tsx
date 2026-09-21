import type { ReactNode } from 'react';
import { Footer } from '../home/Footer';
import { Nav } from '../home/Nav';
import { ScrollProgress } from './ScrollProgress';
import { useVeskBodyTheme } from '../../hooks/useVeskBodyTheme';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const PublicLayout = ({ children }: { children: ReactNode }) => {
  useVeskBodyTheme();
  useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-hidden bg-vesk-black font-body text-base leading-relaxed text-vesk-surface antialiased">
      <ScrollProgress />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};
