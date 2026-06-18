
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Palette tokens
// bg: #0D2B6B  surface: #112F72  border: #1A428A  text: #F3E4C9  muted: #B8CCE8

const galleryFrames = [
  {
    src: '/images/home/ICSA-1.jpeg',
    className: 'absolute top-[4%] left-[0.5%] w-[22rem] h-[15rem] -rotate-2',
    delay: 0.65,
  },
  {
    src: '/images/home/freshers2k24_sa4s.jpg',
    className: 'absolute bottom-[8%] left-[1%] w-80 h-56 rotate-1',
    delay: 0.95,
  },
  {
    src: '/images/home/icsa24_best_poster.jpeg',
    className: 'absolute top-[6%] right-[0.5%] w-[22rem] h-[15rem] rotate-2',
    delay: 0.8,
  },
  {
    src: '/images/home/sustaind.jpg',
    className: 'absolute bottom-[10%] right-[1%] w-80 h-56 -rotate-1',
    delay: 1.1,
  },
];

const Hero = () => {
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowScrollHint(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-[#0D2B6B] min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">

      {/* Floating gallery images */}
      {galleryFrames.map((frame, i) => (
        <motion.div
          key={i}
          className={`${frame.className} hidden xl:block rounded overflow-hidden border border-[#F3E4C9]/12 shadow-2xl`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: frame.delay, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <img src={frame.src} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[#0D2B6B]/25" />
        </motion.div>
      ))}

      {/* Centered main content */}
      <motion.div
        className="relative z-10 container mx-auto px-4"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs text-[#C4A97A] tracking-[0.3em] uppercase mb-5 font-medium">
            SA4S @ SERC · IIIT Hyderabad
          </p>
          <h1 className="font-bold text-[#F3E4C9] leading-tight mb-5">
            <span className="block text-2xl md:text-3xl font-normal text-[#B8CCE8] mb-2 tracking-wide">
              Welcome to
            </span>
            <span className="block text-7xl md:text-8xl lg:text-9xl tracking-tight">
              SA4S
            </span>
          </h1>
          <p className="text-base md:text-lg text-[#B8CCE8] leading-relaxed max-w-md mx-auto">
            Pioneering self-adaptive systems and sustainable computing solutions
            to build the next generation of intelligent, energy-efficient software.
          </p>
        </div>
      </motion.div>

      {/* Scroll hint — appears after 3s, subtle but visible */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
          >
            <span className="text-[9px] text-[#F3E4C9] tracking-[0.25em] uppercase">scroll</span>
            <ChevronDown size={16} className="text-[#F3E4C9]" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
