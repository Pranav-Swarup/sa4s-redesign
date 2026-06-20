
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import spotlightItems from 'virtual:spotlight';

const INTERVAL_MS = 4000;

const TickerBar = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(show);
  }, []);

  useEffect(() => {
    if (!visible || spotlightItems.length === 0) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % spotlightItems.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [visible]);

  const scrollToSpotlight = () => {
    document.getElementById('spotlight')?.scrollIntoView({ behavior: 'smooth' });
  };

  const item = spotlightItems[index];

  return (
    <div
      className="fixed top-16 left-0 right-0 z-40 h-9 lg:h-12 bg-[#A8D8BA] border-b border-[#6CB898] overflow-hidden cursor-pointer"
      onClick={visible ? scrollToSpotlight : undefined}
      title="View spotlight"
      aria-label="Scroll to spotlight section"
    >
      <div className="flex items-center justify-center h-full px-4">
        <AnimatePresence mode="wait">
          {visible && item && (
            <motion.span
              key={index}
              className="flex items-center gap-2.5 text-[12px] lg:text-[14px] tracking-[0.08em] select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {item.tag && (
                <span className="text-[#1D5038] font-bold uppercase tracking-[0.15em]">{item.tag}</span>
              )}
              {item.tag && <span className="text-[#2D6A4F] text-[8px]">◆</span>}
              <span className="text-[#1A3D2A]">{item.title}</span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TickerBar;
