
import { ExternalLink, Github, FileText, Youtube, Zap, Target, Timer, Settings, TrendingUp, Hash } from 'lucide-react';
import { publicUrl } from '../lib/utils';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  links: {
    demo?: string;
    paper?: string;
    code?: string;
    youtube?: string;
  };
  stats?: StatItem[];
}

const showcases: ShowcaseItem[] = [
  {
    id: 'harmone',
    title: 'HarmonE: A Self-Adaptive Approach to Architecting Sustainable MLOps',
    subtitle: 'Runtime MLOps that only retrains or switches models when energy, accuracy, or drift thresholds demand it.',
    description: 'Machine learning pipelines drift, and blind retraining wastes energy. HarmonE wraps a MAPE-K loop around your standard training + inference subsystems, monitoring accuracy, power draw, and data shifts — and only adapts when sustainability goals are breached. In our traffic-prediction digital twin, it slashed energy use by 54.5% while preserving 95% of peak accuracy.',
    image: '/images/showcases/harmone.png',
    imageAlt: 'Architecture diagram of HarmonE with MAPE-K boxes and repositories',
    links: {
      demo: 'https://sa4s-serc.github.io/HarmonE/',
      paper: 'https://arxiv.org/abs/2505.13693',
      code: 'https://github.com/sa4s-serc/HarmonE',
    },
    stats: [
      { icon: <Zap size={16} />,    value: '54.5%', label: 'less energy' },
      { icon: <Target size={16} />, value: '95%',   label: 'of peak accuracy' },
      { icon: <Timer size={16} />,  value: '1.89ms', label: 'avg. inference' },
    ],
  },
  {
    id: 'sas_llm_query',
    title: 'SAS_llm_query: Mixed-Initiative IoT Service Generation',
    subtitle: 'Co-creating adaptive IoT microservices via a three-pass dialogue loop.',
    description: 'Many IoT apps are siloed and static. SAS_llm_query breaks this mold by combining LLM-driven goal refinement and automated service scaffolding — so users can describe their needs in natural language and get a tailored backend spun up on the fly.',
    image: '/images/showcases/sas_llm_query.png',
    imageAlt: 'A 3-panel diagram showing a user interacting with a travel guide to plan a trip.',
    links: {
      paper:   'https://arxiv.org/pdf/2502.00689',
      youtube: 'https://www.youtube.com/watch?v=t5iSYytZdw4',
      code:    'https://github.com/sa4s-serc/SAS_llm_query/tree/iot-prototype',
      demo:    'https://sa4s-serc.github.io/SAS_llm_query/',
    },
    stats: [
      { icon: <Settings size={16} />,    value: '0.603', label: 'F1 score' },
      { icon: <TrendingUp size={16} />,  value: '0.778', label: 'recall' },
      { icon: <Hash size={16} />,        value: '~3k',   label: 'tokens / service' },
    ],
  },
];

const Showcases = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-[#0C2118] border-b border-[#1C4030] py-16">
        <div className="container mx-auto px-4">
          <p className="text-xs text-[#52B788] tracking-[0.25em] uppercase font-semibold mb-3">Showcases</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">Featured Systems</h1>
          <p className="mt-3 text-[#8DB8A2] max-w-2xl">
            Demos and systems that demonstrate self-adaptive computing and sustainable software architecture.
          </p>
        </div>
      </div>

      {/* Showcase blocks */}
      <div className="py-8">
        {showcases.map((showcase, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={showcase.id}
              className={`py-16 ${isReversed ? 'bg-[#F0EBE1]' : 'bg-[#FAF7F2]'}`}
            >
              <div className="container mx-auto px-4">
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>

                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-video overflow-hidden rounded-xl border border-[#D8D2C4] bg-[#EAE4D6]">
                      <img
                        src={publicUrl(showcase.image)}
                        alt={showcase.imageAlt}
                        className="w-full h-full object-contain hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-[#1A1710] mb-2 leading-snug">{showcase.title}</h2>
                      <p className="text-sm italic text-[#2D6A4F] mb-4">{showcase.subtitle}</p>
                      <p className="text-sm text-[#6B6455] leading-relaxed">{showcase.description}</p>
                    </div>

                    {/* Stats */}
                    {showcase.stats && (
                      <div className="grid grid-cols-3 gap-3">
                        {showcase.stats.map((stat, i) => (
                          <div key={i} className="bg-[#F0EBE1] border border-[#D8D2C4] rounded-lg p-4 text-center">
                            <div className="flex justify-center text-[#2D6A4F] mb-1">{stat.icon}</div>
                            <p className="text-lg font-bold text-[#1A1710]">{stat.value}</p>
                            <p className="text-xs text-[#6B6455] mt-0.5">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {showcase.links.demo && (
                        <a href={showcase.links.demo} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D6A4F] text-[#EDE8DF] text-sm font-medium rounded-lg hover:bg-[#1D5038] transition-colors duration-150">
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      {showcase.links.paper && (
                        <a href={showcase.links.paper} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-[#2D6A4F] text-[#2D6A4F] text-sm font-medium rounded-lg hover:bg-[#2D6A4F] hover:text-[#EDE8DF] transition-colors duration-150">
                          <FileText size={14} />
                          Paper
                        </a>
                      )}
                      {showcase.links.youtube && (
                        <a href={showcase.links.youtube} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-[#D8D2C4] text-[#6B6455] text-sm font-medium rounded-lg hover:border-[#2D6A4F]/40 hover:text-[#1A1710] transition-colors duration-150">
                          <Youtube size={14} />
                          Demo Video
                        </a>
                      )}
                      {showcase.links.code && (
                        <a href={showcase.links.code} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-[#D8D2C4] text-[#6B6455] text-sm font-medium rounded-lg hover:border-[#2D6A4F]/40 hover:text-[#1A1710] transition-colors duration-150">
                          <Github size={14} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Showcases;
