
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import BonsaiTree from './BonsaiTree';

const TAGLINE = "building the next generation of intelligent, energy-efficient software";
const FIXED_SEED = 97225; // tune this to pick your favourite tree

const Hero = () => {
  const [seed, setSeed] = useState(FIXED_SEED);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const regen = () => setSeed(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-[#FAF7F2] overflow-hidden">

      {/* ── Bonsai — absolute right, bottom-anchored, bleeds left ── */}
      <div
        className="absolute bottom-8 right-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <BonsaiTree seed={seed} onClick={regen} />
      </div>

      {/* ── Subtle refresh button near tree ────────────────────── */}
      <button
        onClick={regen}
        className="absolute top-20 right-20 z-20 text-2xl leading-none text-[#c4beb5] hover:text-[#7A7060] transition-colors duration-400 bg-transparent border-none cursor-pointer select-none"
        aria-label="Regenerate bonsai tree"
      >
        ⟳
      </button>

      {/* ── Left text column — z above canvas ──────────────────── */}
      <div
        className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-4rem)] w-1/2 px-10 xl:px-16 py-12 gap-5 lg:gap-8"
      >

        {/* Garamond tagline */}
        <motion.p
          className="font-garamond italic text-4xl md:text-5xl xl:text-[3.1rem] text-[#1A1710] leading-[1.18]"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0, 0, 1], delay: 0.1 }}
        >
          {TAGLINE}
        </motion.p>

        {/* SA4S + subtitle */}
        <div className="select-none">
          <div
            className="font-black leading-none tracking-tight text-[#2D6A4F]"
            style={{ fontSize: 'clamp(5rem, 10vw, 9rem)' }}
            aria-label="SA4S"
          >
            {['S', 'A', '4', 'S'].map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + i * 0.2,
                  ease: [0.25, 0, 0, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="text-sm text-[#9A9080] font-medium tracking-wide mt-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            SA4S at SERC, IIIT Hyderabad
          </motion.p>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────── */}
      <AnimatePresence>
        {showScrollHint && !scrolled && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-10"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 0.38, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[9px] tracking-[0.28em] uppercase font-medium text-[#6B6455]">Scroll</span>
            <ChevronDown size={15} className="text-[#6B6455] animate-bounce" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
