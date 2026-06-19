
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const items = [
  { tag: 'Latest',     text: '9 Papers Accepted at ICSE 2026' },
  { tag: 'Award',      text: 'Best Poster at ICSA 2024' },
  { tag: 'Team',       text: 'Freshers Welcome 2024' },
  { tag: 'Conference', text: 'Research at ICSA 2024' },
];

const INTERVAL_MS = 4000;

const TickerBar = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(show);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [visible]);

  const scrollToSpotlight = () => {
    document.getElementById('spotlight')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!visible) return null;

  const item = items[index];

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 z-40 h-8 bg-[#CBC4B8] border-b border-[#B5AEA4] overflow-hidden cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      onClick={scrollToSpotlight}
      title="View spotlight"
      aria-label="Scroll to spotlight section"
    >
      <div className="flex items-center justify-center h-full px-4">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className="flex items-center gap-2.5 text-[11px] tracking-[0.08em] select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#4A7A5E] font-semibold uppercase tracking-[0.15em]">{item.tag}</span>
            <span className="text-[#4A4035]/40 text-[8px]">◆</span>
            <span className="text-[#3D3830]">{item.text}</span>
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TickerBar;
