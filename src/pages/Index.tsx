
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe2, Brain, Cpu, Zap, Leaf, ArrowRight, ExternalLink } from 'lucide-react';
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

      {/* ── Spotlight — Porsche-style 2×2 full-bleed grid ── */}
      <section id="spotlight" className="w-full">
        <div className="px-6 lg:px-[clamp(3rem,8vw,7rem)] pt-14 pb-6 text-center">
          <h2 className="text-xl lg:text-2xl text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold">Spotlight</h2>
        </div>
        <div className="lg:px-[clamp(3rem,8vw,7rem)]">
        <div className="grid grid-cols-2 h-screen gap-[3px] lg:gap-[clamp(0.375rem,0.6vw,0.75rem)] p-[3px] lg:p-0 bg-[#D8D2C4] lg:bg-transparent">
          {spotlightItems.map((s, i) => (
            <motion.a
              key={s.date}
              href={s.link}
              className="relative overflow-hidden group cursor-pointer block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
            >
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
            </motion.a>
          ))}
        </div>
        </div>
      </section>

      {/* ── SustAInd ──────────────────────────────── */}
      <motion.section className="pt-12 pb-12 bg-[#FAF7F2]" {...inView}>
        <div className="container mx-auto px-4">
          <a
            href="https://sa4s-serc.github.io/sustaind/"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col md:flex-row gap-5 items-start md:items-center border border-[#D8D2C4] hover:border-[#2D6A4F]/40 rounded-xl p-7 bg-[#F0EBE1] hover:bg-[#EAE4D6] transition-all duration-200"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded border border-[#2D6A4F]/25 flex items-center justify-center text-[#2D6A4F]">
              <Globe2 size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base text-[#1A1710] mb-1.5">SustAInd</h3>
              <p className="text-sm text-[#6B6455] leading-relaxed max-w-2xl">
                Sustainable AI for India — low-carbon, cost-aware, production-ready ML systems built for the next billion users.
              </p>
            </div>
            <ExternalLink
              size={16}
              className="text-[#2D6A4F]/30 group-hover:text-[#2D6A4F] transition-colors duration-200 flex-shrink-0 mt-1 md:mt-0"
            />
          </a>
        </div>
      </motion.section>

      {/* ── Stats strip ───────────────────────────── */}
      <PulseStrip />

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
