
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe2, Brain, Cpu, Zap, Leaf, ArrowRight, ExternalLink } from 'lucide-react';
import Hero from '../components/Hero';
import PulseStrip from '../components/PulseStrip';
import FeaturedNews from '../components/FeaturedNews';
import LogoCloud from '../components/LogoCloud';

// Palette: bg #0D2B6B · surface #112F72 · border #1A428A · text #F3E4C9 · muted #B8CCE8 · amber #C4A97A

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
} as const;

// ── Spotlight cards ────────────────────────────────────────────────────────────
const spotlights = [
  {
    tag: 'Latest',
    headline: '9 Papers Accepted at ICSE 2026',
    body: 'SA4S is proud to announce a record 9 papers accepted at ICSE 2026 — spanning LLM-based software engineering, architectural decision-making, and green computing.',
    meta: 'ICSE 2026 · Rio de Janeiro, Brazil',
    linkText: 'See the papers',
    linkHref: '/news',
    image: '/images/home/ICSA-1.jpeg',
  },
  {
    tag: 'Upcoming',
    headline: 'Research Showcase 2025',
    body: 'Placeholder — update this card with an upcoming conference, award, or announcement relevant to this week or month.',
    meta: 'Coming soon · 2025',
    linkText: 'Learn more',
    linkHref: '/news',
    image: '/images/home/freshers2k24_sa4s.jpg',
  },
];

// ── Research areas ─────────────────────────────────────────────────────────────
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
    <div className="bg-[#0D2B6B]">

      {/* ── Hero ──────────────────────────────────── */}
      <Hero />

      {/* ── Spotlight cards ───────────────────────── */}
      <motion.section className="py-16 bg-[#0D2B6B]" {...inView}>
        <div className="container mx-auto px-4">
          <p className="text-xs text-[#C4A97A] tracking-[0.25em] uppercase font-medium mb-8">Spotlight</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {spotlights.map((s, i) => (
              <motion.div
                key={i}
                className="flex flex-col border border-[#1A428A] rounded-xl overflow-hidden bg-[#112F72] hover:border-[#2453A8] transition-all duration-200 group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.headline}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0D2B6B]/30" />
                  <span className="absolute top-3 left-3 bg-[#0D2B6B]/70 text-[#F3E4C9] text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded">
                    {s.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="font-bold text-lg text-[#F3E4C9] leading-snug">
                    {s.headline}
                  </h3>
                  <p className="text-sm text-[#B8CCE8] leading-relaxed flex-1">
                    {s.body}
                  </p>
                  <p className="text-xs text-[#C4A97A] font-medium tracking-wide">
                    {s.meta}
                  </p>
                  <a
                    href={s.linkHref}
                    className="inline-flex items-center gap-1.5 text-[#5BA3D9] hover:text-[#F3E4C9] text-sm font-medium transition-colors duration-150 group/link w-fit"
                  >
                    {s.linkText}
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-150" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── SustAInd ──────────────────────────────── */}
      <motion.section className="pb-12 bg-[#0D2B6B]" {...inView}>
        <div className="container mx-auto px-4">
          <a
            href="https://sa4s-serc.github.io/sustaind/"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col md:flex-row gap-5 items-start md:items-center border border-[#1A428A] hover:border-[#C4A97A]/50 rounded-xl p-7 bg-[#112F72] hover:bg-[#132F76] transition-all duration-200"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded border border-[#C4A97A]/30 flex items-center justify-center text-[#C4A97A]">
              <Globe2 size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base text-[#F3E4C9] mb-1.5">SustAInd</h3>
              <p className="text-sm text-[#B8CCE8] leading-relaxed max-w-2xl">
                Sustainable AI for India — low-carbon, cost-aware, production-ready ML systems built for the next billion users.
              </p>
            </div>
            <ExternalLink
              size={16}
              className="text-[#C4A97A]/40 group-hover:text-[#C4A97A] transition-colors duration-200 flex-shrink-0 mt-1 md:mt-0"
            />
          </a>
        </div>
      </motion.section>

      {/* ── Stats strip ───────────────────────────── */}
      <PulseStrip />

      {/* ── Research areas ────────────────────────── */}
      <section className="py-16 bg-[#0D2B6B]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-10" {...inView}>
            <p className="text-xs text-[#C4A97A] tracking-[0.25em] uppercase font-medium mb-3">Research</p>
            <h2 className="font-bold text-2xl text-[#F3E4C9]">What We Work On</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {researchAreas.map((area, i) => (
              <motion.button
                key={area.abbr}
                onClick={() => navigate('/research')}
                className="group flex gap-4 text-left border border-[#1A428A] hover:border-[#2453A8] rounded-xl p-6 bg-[#112F72] hover:bg-[#132F76] transition-all duration-200 w-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <div className="flex-shrink-0 mt-0.5 text-[#5BA3D9] group-hover:text-[#F3E4C9] transition-colors duration-200">
                  {area.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#C4A97A] tracking-widest uppercase font-medium mb-2">
                    {area.abbr}
                  </div>
                  <h3 className="font-semibold text-base text-[#F3E4C9] mb-2 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#B8CCE8] leading-relaxed">{area.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="mt-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => navigate('/research')}
              className="inline-flex items-center border border-[#1A428A] hover:border-[#5BA3D9] text-[#B8CCE8] hover:text-[#F3E4C9] px-5 py-2.5 rounded text-sm font-medium transition-all duration-200 group"
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
