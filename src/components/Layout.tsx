
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import TickerBar from './TickerBar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const showTicker = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grain-overlay fixed inset-0 z-[5] pointer-events-none" aria-hidden="true" />
      <div className="vignette-overlay fixed inset-0 z-[5] pointer-events-none" aria-hidden="true" />

      <Header />
      {showTicker && <TickerBar />}
      {/* pt-24 on home (64px header + 32px ticker), pt-16 elsewhere */}
      <main className={`flex-1 ${showTicker ? 'pt-24' : 'pt-16'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
