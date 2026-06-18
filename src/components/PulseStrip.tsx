
import { motion } from 'framer-motion';
import CountUp from './CountUp';

const stats = [
  { value: 73, suffix: '+', label: 'Publications' },
  { value: 40, suffix: '+', label: 'Researchers' },
];

export default function PulseStrip() {
  return (
    <motion.section
      className="bg-[#112F72] border-y border-[#1A428A] py-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-24">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-bold text-4xl text-[#F3E4C9] tabular-nums leading-none">
                <CountUp to={stat.value} />{stat.suffix}
              </span>
              <span className="text-sm text-[#C4A97A] font-medium tracking-wide mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
