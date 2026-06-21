
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Pause, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BonsaiTree from './BonsaiTree';
import { publicUrl } from '../lib/utils';

const TAGLINE = "building the next generation of intelligent and sustainable software systems";
const FIXED_SEED = 97225; // tune this to pick your favourite tree
const CANVAS_W = 100 * 10;  // COLS * CHAR_W
const CANVAS_H = 40 * 20;   // ROWS * CHAR_H

const Hero = () => {
  const [seed, setSeed] = useState(FIXED_SEED);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [podcastStarted, setPodcastStarted] = useState(false);
  const [podcastPlaying, setPodcastPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const regen = () => setSeed(Date.now());

  const togglePodcast = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!podcastStarted) setPodcastStarted(true);
    if (podcastPlaying) {
      audio.pause();
      setPodcastPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPodcastPlaying(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setSeed(Date.now()), 12000);
    return () => clearInterval(interval);
  }, [seed]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    /*
     * Mobile:  h-[100svh-4rem] flex-col justify-between — text block anchored top,
     *          tree anchored bottom. svh (small viewport height) never changes on
     *          scroll so there's no layout shift when the iOS URL bar hides.
     * Desktop: block — tree is absolute bottom-right.
     */
    <section className="relative bg-[#FAF7F2] overflow-hidden flex flex-col justify-between h-[calc(100svh-4rem)] lg:block lg:h-auto lg:min-h-[calc(100svh-6rem)]">

      {/* ── Text block ────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 lg:flex-none flex flex-col items-center lg:items-start text-center lg:text-left justify-start lg:justify-center lg:min-h-[calc(100svh-6rem)] lg:w-1/2 w-full px-6 lg:px-10 xl:px-16 pt-0 pb-0 lg:py-12 gap-0 lg:gap-8">

        {/* Top spacer — 5 parts (mobile only) */}
        <div className="flex-[5] min-h-0 order-[0] lg:hidden" />

        {/* SA4S heading — order 2 mobile, order 3 desktop */}
        <div className="select-none order-[2] lg:order-[3]">
          <div
            className="font-black leading-none tracking-tight text-[#2D6A4F]"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
            aria-label="SA4S"
          >
            {['S', 'A', '4', 'S'].map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="text-sm text-[#9A9080] font-medium tracking-wide mt-1.5 lg:mt-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            Research Group at SERC, IIIT Hyderabad
          </motion.p>
        </div>

        {/* SA4S→tagline spacer — 3 parts (3/4 of the equal slot) */}
        <div className="flex-[3] min-h-0 order-[4] lg:hidden" />

        {/* Garamond tagline — order 6 mobile, order 1 desktop */}
        <motion.p
          className="font-garamond text-2xl leading-snug sm:text-3xl md:text-3xl lg:text-4xl xl:text-[3.1rem] lg:leading-[1.18] text-[#1A1710] order-[6] lg:order-[1]"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0, 0, 1], delay: 0.1 }}
        >
          {TAGLINE}
        </motion.p>

        {/* Tagline→podcast spacer — 4 parts */}
        <div className="flex-[4] min-h-0 order-[8] lg:hidden" />

        {/* Podcast + Research buttons */}
        <motion.div
          className="order-[10] lg:order-[5] flex flex-col lg:flex-row items-center gap-2 lg:gap-3 px-6 lg:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <Link
            to="/research"
            className="order-first lg:order-last w-full lg:w-auto inline-flex justify-center items-center gap-1.5 lg:gap-2 px-3 py-2 lg:px-5 lg:py-2.5 rounded-full bg-[#2D6A4F] text-[#EDE8DF] hover:bg-[#1D5038] transition-all duration-200 text-xs lg:text-sm font-medium shadow-sm group"
          >
            Explore our research
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-150" />
          </Link>
          <button
            onClick={togglePodcast}
            className="lg:w-auto inline-flex justify-center items-center gap-1.5 lg:gap-3 px-2.5 py-1 lg:px-5 lg:py-2.5 rounded-full bg-[#E8E2D8] border border-[#C8C2B6] text-[#5A5040] hover:bg-[#DDD7CB] hover:text-[#3A3028] transition-all duration-200 text-[11px] lg:text-sm font-medium shadow-sm"
            aria-label={podcastPlaying ? 'Pause podcast' : 'Play podcast'}
          >
            <span className="flex-shrink-0 flex items-center justify-center w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-[#C8C2B6]/60">
              {podcastPlaying ? <Pause size={8} /> : <Play size={8} className="ml-0.5" />}
            </span>
            <span
              className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                podcastStarted ? 'max-w-0 opacity-0' : 'max-w-[8rem] opacity-100'
              }`}
            >
              Our Podcast
            </span>
          </button>
          <audio
            ref={audioRef}
            src={publicUrl("/LLMs%20for%20Architectural%20Design%20Decisions.mp3")}
            onEnded={() => setPodcastPlaying(false)}
          />
        </motion.div>

        {/* Bottom spacer — 4 parts (mobile only) */}
        <div className="flex-[4] min-h-0 order-[12] lg:hidden" />
      </div>

      {/* ── Bonsai — anchored bottom on mobile, absolute bottom-right on desktop ── */}
      <div className="relative flex-shrink-0 flex justify-center pointer-events-none z-0 lg:absolute lg:bottom-0 lg:right-0 lg:w-[min(55vw,1000px)]">
        <button
          onClick={regen}
          className="absolute top-2 left-3 lg:top-4 lg:left-auto lg:right-4 z-20 pointer-events-auto text-2xl leading-none text-[#c4beb5] hover:text-[#7A7060] transition-colors duration-400 bg-transparent border-none cursor-pointer select-none"
          aria-label="Regenerate bonsai tree"
        >
          ⟳
        </button>
        <div className="w-[95vw] max-w-[min(600px,56svh)] lg:w-full lg:max-w-none">
          <BonsaiTree
            seed={seed}
            onClick={regen}
            style={{ width: '100%', height: 'auto', aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
          />
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <AnimatePresence>
        {showScrollHint && !scrolled && (
          <motion.div
            className="absolute bottom-6 inset-x-0 mx-auto w-max flex flex-col items-center gap-1.5 pointer-events-none z-10"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 0.38, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[9px] tracking-[0.28em] uppercase font-medium text-[#4a453b]">Scroll</span>
            <ChevronDown size={15} className="text-[#6B6455] animate-bounce" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
