import type { ReactNode } from 'react';
import { Footer } from '../home/Footer';
import { Nav } from '../home/Nav';
import { useVeskBodyTheme } from '../../hooks/useVeskBodyTheme';

export const PublicLayout = ({ children }: { children: ReactNode }) => {
  useVeskBodyTheme();

  return (
    <div className="min-h-screen overflow-x-hidden bg-vesk-black font-body text-base leading-relaxed text-vesk-surface antialiased">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};
