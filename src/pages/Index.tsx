
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Leaf, ArrowRight, Mail } from 'lucide-react';
import Hero from '../components/Hero';
import PulseStrip from '../components/PulseStrip';
import FeaturedNews from '../components/FeaturedNews';
import LogoCloud from '../components/LogoCloud';
import allSpotlightItems from 'virtual:spotlight';
const spotlightItems = allSpotlightItems.filter((s) => s.homepage).slice(0, 4);
import { publicUrl } from '../lib/utils';

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
} as const;


// ── Research areas ─────────────────────────────────────────────────────────
const researchAreas = [
  {
    icon: <Brain size={18} />,
    title: 'ML for Software Architecture',
    abbr: 'ML4SA',
    desc: 'Applying machine learning to predict, optimize, and evolve architectural decisions in complex systems.',
  },
  {
    icon: <Cpu size={18} />,
    title: 'Software Architecture for ML',
    abbr: 'SA4ML',
    desc: 'Designing robust, maintainable software architectures for production machine learning pipelines.',
  },
  {
    icon: <Zap size={18} />,
    title: 'Intelligent IoT Systems',
    abbr: 'IoT & CPS',
    desc: 'Self-adaptive software for IoT and cyber-physical systems in dynamic, resource-constrained environments.',
  },
  {
    icon: <Leaf size={18} />,
    title: 'Green & Sustainable Computing',
    abbr: 'Green SW',
    desc: 'Energy-aware architectures and low-carbon ML practices for production systems at scale.',
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF7F2]">

      {/* ── Hero ──────────────────────────────────── */}
      <Hero />

      {/* ── Subscribe — mobile only, above spotlight ──────── */}
      <div className="lg:hidden bg-[#F0EBE1] border-b border-[#D8D2C4] px-6 py-10 text-center">
        <p className="text-xs text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold mb-3">Newsletter</p>
        <p className="text-sm text-[#6B6455] mb-5 max-w-xs mx-auto leading-relaxed">
          Research updates, paper releases, and lab news from SA4S.
        </p>
        <a
          href="mailto:sa4s@iiit.ac.in?subject=Subscribe%20to%20SA4S%20Updates"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2D6A4F] text-[#EDE8DF] rounded-full text-sm font-medium hover:bg-[#1D5038] transition-colors duration-200"
        >
          <Mail size={14} />
          Subscribe to Updates
        </a>
        <p className="text-[11px] text-[#9A9080] mt-3">Unsubscribe anytime.</p>
      </div>

      {/* ── Spotlight — Porsche-style 2×2 full-bleed grid ── */}
      <section id="spotlight" className="w-full">
        <div className="px-6 lg:px-[clamp(3rem,8vw,7rem)] pt-14 pb-6 text-center">
          <h2 className="text-xl lg:text-2xl text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold">Spotlight</h2>
        </div>
        <div className="lg:px-[clamp(3rem,8vw,7rem)]">
        <div className="grid grid-cols-2 h-screen gap-[3px] lg:gap-[clamp(0.375rem,0.6vw,0.75rem)] p-[3px] lg:p-0 bg-[#D8D2C4] lg:bg-transparent">
          {spotlightItems.map((s, i) => (
            <motion.div
              key={s.date}
              className="relative overflow-hidden group cursor-pointer block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
            >
              <Link to="/spotlight" className="absolute inset-0 z-10" aria-label={s.title} />
              {s.image && (
                <img
                  src={publicUrl(s.image)}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
              )}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
              {/* Hover highlight border */}
              <div className="absolute inset-0 ring-inset ring-0 group-hover:ring-[1.5px] ring-white/25 transition-all duration-400" />

              {/* Card content */}
              <div className="absolute bottom-0 left-0 p-7">
                {s.tag && (
                  <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#52B788]">
                    {s.tag}
                  </span>
                )}
                <h3 className="mt-2 text-xl font-bold text-white leading-snug max-w-[17rem]">
                  {s.title}
                </h3>
                {s.preview && (
                  <p className="mt-1.5 text-sm text-white/50 line-clamp-2 max-w-[17rem]">{s.preview}</p>
                )}
                <div className="mt-4 flex items-center gap-1.5 text-white/60 text-sm font-medium group-hover:text-white transition-colors duration-200">
                  <span>Explore</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-150" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────── */}
      <PulseStrip />

      {/* ── Subscribe strip — desktop only, below stats ───── */}
      <div className="hidden lg:block bg-[#F0EBE1] border-b border-[#D8D2C4]">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between gap-8">
          <div>
            <p className="text-sm font-semibold text-[#1A1710]">Stay in touch with our group</p>
            <p className="text-xs text-[#6B6455] mt-0.5">Research updates, paper releases, and lab news. Unsubscribe anytime.</p>
          </div>
          <a
            href="mailto:sa4s@iiit.ac.in?subject=Subscribe%20to%20SA4S%20Updates"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2 bg-[#2D6A4F] text-[#EDE8DF] rounded-full text-sm font-medium hover:bg-[#1D5038] transition-colors duration-200"
          >
            <Mail size={14} />
            Subscribe to Updates
          </a>
        </div>
      </div>

      {/* ── Research areas ────────────────────────── */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-10 text-center" {...inView}>
            <h2 className="text-xl lg:text-2xl text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold">What We Work On</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {researchAreas.map((area, i) => (
              <motion.button
                key={area.abbr}
                onClick={() => navigate('/research')}
                className="group flex gap-4 text-left border border-[#D8D2C4] hover:border-[#2D6A4F]/45 rounded-xl p-6 bg-[#F0EBE1] hover:bg-[#EAE4D6] transition-all duration-200 w-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <div className="flex-shrink-0 mt-0.5 text-[#2D6A4F] group-hover:text-[#1D5038] transition-colors duration-200">
                  {area.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#2D6A4F] tracking-widest uppercase font-semibold mb-2">
                    {area.abbr}
                  </div>
                  <h3 className="font-semibold text-base text-[#1A1710] mb-2 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#6B6455] leading-relaxed">{area.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="mt-7 flex justify-center md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => navigate('/research')}
              className="inline-flex items-center border border-[#D8D2C4] hover:border-[#2D6A4F] text-[#6B6455] hover:text-[#1A1710] px-5 py-2.5 rounded text-sm font-medium transition-all duration-200 group"
            >
              All research areas
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-150" size={14} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Latest news ───────────────────────────── */}
      <motion.div {...inView}>
        <FeaturedNews />
      </motion.div>

      {/* ── Logos ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <LogoCloud />
      </motion.div>

    </div>
  );
};

export default Index;
