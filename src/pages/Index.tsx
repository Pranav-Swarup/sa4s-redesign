
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Leaf, ArrowRight, Mail } from 'lucide-react';
import Hero from '../components/Hero';
import PulseStrip from '../components/PulseStrip';
import FeaturedNews from '../components/FeaturedNews';
import LogoCloud from '../components/LogoCloud';
import allSpotlightItems from 'virtual:spotlight';
const spotlightItems = allSpotlightItems.filter((s) => s.homepage).slice(0, 10);
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
    title: 'AI for Software Architecture (Design-Time)',
    abbr: 'AI4SA Design',
    desc: 'Using LLMs and AI agents to support architectural decision-making, ADR generation, view generation, and architecture knowledge management before systems are deployed.',
  },
  {
    icon: <Zap size={18} />,
    title: 'AI for Software Architecture (Run-Time)',
    abbr: 'AI4SA Runtime',
    desc: 'Building self-adaptive systems that monitor, reason about, and reconfigure themselves at runtime to meet quality goals around performance, energy, and reliability.',
  },
  {
    icon: <Cpu size={18} />,
    title: 'Architecting AI Systems',
    abbr: 'Arch4AI',
    desc: 'Studying how to design and structure AI-enabled and agentic systems well, from ML pipelines and multi-agent architectures to sustainable MLOps and production deployment patterns.',
  },
  {
    icon: <Leaf size={18} />,
    title: 'Code Generation',
    abbr: 'CodeGen',
    desc: 'Evaluating and advancing the ability of AI agents to generate functional software components, including microservices, serverless functions, and architecture-conformant code at scale.',
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF7F2]">

      {/* ── Hero ──────────────────────────────────── */}
      <Hero />

      {/* ── Subscribe — mobile only, above spotlight ──────── */}
      <div className="lg:hidden bg-[#F0EBE1] border-b border-[#D8D2C4] px-6 py-6 text-center">
        <p className="text-xs text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold mb-3">Newsletter</p>
        <p className="text-sm text-[#6B6455] mb-5 max-w-xs mx-auto leading-relaxed">
          Research updates, paper releases, and lab news from SA4S.
        </p>
        <a
          href="mailto:sa4sserc@gmail.com?subject=I%20wish%20to%20subscribe%20to%20the%20SA4S%20Newsletter.&body=Simply%20hit%20send%20on%20this%20mail%20and%20we%20will%20add%20you%20to%20our%20list%20%3A%29"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2D6A4F] text-[#EDE8DF] rounded-full text-sm font-medium hover:bg-[#1D5038] transition-colors duration-200"
        >
          <Mail size={14} />
          Subscribe to Updates
        </a>
        <p className="text-[11px] text-[#9A9080] mt-3">Unsubscribe anytime.</p>
      </div>

      {/* ── Spotlight grid ── */}
      <section id="spotlight" className="w-full">
        {/* Mobile: single column, image + title below */}
        <div className="lg:hidden flex flex-col gap-5 px-4 py-4">
          {spotlightItems.map((s, i) => (
            <motion.div
              key={s.date}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link to={`/spotlight?item=${s.date}`} className="block">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  {s.image && (
                    <img
                      src={publicUrl(s.image)}
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading={i < 2 ? 'eager' : 'lazy'}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                  {s.tag && (
                    <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.2em] uppercase font-semibold text-[#52B788]">
                      {s.tag}
                    </span>
                  )}
                </div>
                <div className="pt-2.5 px-0.5">
                  <h3 className="text-sm font-semibold text-[#1A1710] leading-snug">{s.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 2-column grid with overlay text */}
        <div className="hidden lg:block px-[clamp(6rem,14vw,12rem)] py-8">
          <div className="grid grid-cols-2 gap-5">
            {spotlightItems.map((s, i) => {
              const isLastOdd = spotlightItems.length % 2 === 1 && i === spotlightItems.length - 1;
              return (
                <motion.div
                  key={s.date}
                  className={isLastOdd ? 'col-span-2 w-1/2 mx-auto' : ''}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.08 }}
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl group cursor-pointer">
                    <Link to={`/spotlight?item=${s.date}`} className="absolute inset-0 z-10" aria-label={s.title} />
                    {s.image && (
                      <img
                        src={publicUrl(s.image)}
                        alt={s.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                        loading={i < 2 ? 'eager' : 'lazy'}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/5 to-transparent" />
                    <div className="absolute inset-0 ring-inset ring-0 group-hover:ring-[1.5px] ring-white/25 transition-all duration-400" />
                    <div className="absolute top-0 left-0 right-0 p-5">
                      <h3 className="text-base font-bold text-white leading-snug">{s.title}</h3>
                    </div>
                    <div className="absolute bottom-0 left-0 p-6">
                      {s.tag && (
                        <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#52B788]">
                          {s.tag}
                        </span>
                      )}
                      {s.preview && (
                        <p className="mt-2 text-sm text-white/60 line-clamp-2 max-w-[17rem]">{s.preview}</p>
                      )}
                      <div className="mt-3 flex items-center gap-1.5 text-white/60 text-sm font-medium group-hover:text-white transition-colors duration-200">
                        <span>Explore</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-150" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
            href="mailto:sa4sserc@gmail.com?subject=I%20wish%20to%20subscribe%20to%20the%20SA4S%20Newsletter.&body=Simply%20hit%20send%20on%20this%20mail%20and%20we%20will%20add%20you%20to%20our%20list%20%3A%29"
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
