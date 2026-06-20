import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import allSpotlightItems from 'virtual:spotlight';
import { publicUrl } from '../lib/utils';

type SpotlightItem = typeof allSpotlightItems[number];

const TAG_COLORS: Record<string, string> = {
  Latest:     'bg-[#1F4A30] text-[#52B788]',
  Award:      'bg-[#3B2A0A] text-[#D4A843]',
  Conference: 'bg-[#0A2233] text-[#5BA4CF]',
  Team:       'bg-[#2A1040] text-[#A78BDA]',
  Research:   'bg-[#1F4A30] text-[#52B788]',
};
const defaultTag = 'bg-[#1C2A1E] text-[#8DB8A2]';

function tagClass(tag: string) {
  return TAG_COLORS[tag] ?? defaultTag;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

// ── Card ─────────────────────────────────────────────────────────────────────
function Card({ item, onClick }: { item: SpotlightItem; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      className="group text-left w-full flex flex-col rounded-2xl overflow-hidden border border-[#D8D2C4] hover:border-[#2D6A4F] bg-[#F0EBE1] hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 shrink-0 overflow-hidden bg-[#E0DBD0]">
        {item.image ? (
          <img
            src={publicUrl(item.image)}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1F4A30]/20 to-[#D8D2C4]" />
        )}
        {item.tag && (
          <span className={`absolute top-3 left-3 text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full ${tagClass(item.tag)}`}>
            {item.tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-[11px] text-[#9A8F80] mb-2">{formatDate(item.date)}</p>
        <h3
          style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'normal' }}
          className="text-xl font-normal text-[#1A1710] leading-snug mb-2 group-hover:text-[#2D6A4F] transition-colors duration-200"
        >
          {item.title}
        </h3>
        <p className="text-xs text-[#7A7060] leading-relaxed line-clamp-3 flex-1">{item.preview}</p>
        <div className="flex items-center gap-1.5 text-[#2D6A4F] text-xs font-medium mt-4">
          Read more
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-150" />
        </div>
      </div>
    </motion.button>
  );
}

// ── Detail view ───────────────────────────────────────────────────────────────
function Detail({ item, onBack }: { item: SpotlightItem; onBack: () => void }) {
  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-[#6B6455] hover:text-[#2D6A4F] transition-colors duration-150 mb-8 group"
      >
        <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform duration-150" />
        Back
      </button>

      {item.tag && (
        <span className={`inline-block text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full mb-4 ${tagClass(item.tag)}`}>
          {item.tag}
        </span>
      )}

      <h1
        style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'normal' }}
        className="text-4xl md:text-5xl font-normal text-[#1A1710] leading-tight mb-3"
      >
        {item.title}
      </h1>

      <p className="text-sm text-[#9A8F80] mb-8">{formatDate(item.date)}</p>

      {item.image && (
        <div className="rounded-2xl overflow-hidden mb-8 border border-[#D8D2C4]">
          <img
            src={publicUrl(item.image)}
            alt={item.title}
            className="w-full object-cover max-h-80"
          />
        </div>
      )}

      <div
        style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'normal' }}
        className="text-lg font-normal text-[#3A342A] leading-relaxed whitespace-pre-wrap mb-10"
      >
        {item.content}
      </div>

    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Spotlight = () => {
  const [selected, setSelected] = useState<SpotlightItem | null>(null);

  const openItem = (item: SpotlightItem) => {
    setSelected(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      <div className="bg-[#0C2118] border-b border-[#1C4030] py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">Spotlight</h1>
          <p className="mt-3 text-sm text-[#8DB8A2]">
            Highlights from our research, awards, and community.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-14">
        <AnimatePresence mode="wait">
          {selected ? (
            <Detail key="detail" item={selected} onBack={() => setSelected(null)} />
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {allSpotlightItems.map((item) => (
                <Card key={item.date} item={item} onClick={() => openItem(item)} />
              ))}
              {allSpotlightItems.length === 0 && (
                <p className="col-span-3 text-center text-[#6B6455] text-sm py-16">No spotlight items yet.</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Spotlight;
