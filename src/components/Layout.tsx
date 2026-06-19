
import { ReactNode } from 'react';
import Header from './Header';
import TickerBar from './TickerBar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Grain noise — fixed, full-screen, below all chrome */}
      <div className="grain-overlay fixed inset-0 z-[5] pointer-events-none" aria-hidden="true" />
      {/* Edge vignette — softens the flat cream slab feel */}
      <div className="vignette-overlay fixed inset-0 z-[5] pointer-events-none" aria-hidden="true" />

      <Header />
      <TickerBar />
      {/* pt-24: 64px navbar + 32px ticker bar */}
      <main className="flex-1 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
