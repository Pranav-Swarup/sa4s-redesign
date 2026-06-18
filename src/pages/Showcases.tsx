
import { ExternalLink, Github, FileText, Youtube } from 'lucide-react';

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
  stats?: {
    icon: string;
    value: string;
    label: string;
  }[];
}

const showcases: ShowcaseItem[] = [
  {
    id: 'harmone',
    title: 'HarmonE: A Self-Adaptive Approach to Architecting Sustainable MLOps',
    subtitle: 'Runtime MLOps that only retrains or switches models when energy, accuracy, or drift thresholds demand it.',
    description: 'Machine learning pipelines drift, and blind retraining wastes energy. HarmonE wraps a MAPE-K loop around your standard training + inference subsystems, monitoring accuracy, power draw, and data shifts—and only adapts when sustainability goals are breached. In our traffic-prediction digital twin, it slashed energy use by 54.5% while preserving 95% of peak accuracy.',
    image: '/images/showcases/harmone.png',
    imageAlt: 'Architecture diagram of HarmonE with MAPE-K boxes and repositories',
    links: {
      demo: 'https://sa4s-serc.github.io/HarmonE/',
      paper: 'https://arxiv.org/abs/2505.13693',
      code: 'https://github.com/sa4s-serc/HarmonE'
    },
    stats: [
      { icon: '⚡', value: '54.5%', label: 'less energy' },
      { icon: '🎯', value: '95%', label: 'of peak accuracy' },
      { icon: '⏱️', value: '1.89ms', label: 'avg. inference' }
    ]
  },
  {
    id: 'sas_llm_query',
    title: 'SAS_llm_query: Mixed-Initiative IoT Service Generation',
    subtitle: 'Co-creating adaptive IoT microservices via a three-pass dialogue loop',
    description: 'Many IoT apps are siloed and static. SAS_llm_query breaks this mold by combining LLM-driven goal refinement and automated service scaffolding—so users can chat out their needs and get a tailored backend spun up on the fly.',
    image: '/images/showcases/sas_llm_query.png',
    imageAlt: 'A 3-panel comic showing a tourist interacting with a travel guide to plan a trip.',
    links: {
      paper: 'https://arxiv.org/pdf/2502.00689',
      youtube: 'https://www.youtube.com/watch?v=t5iSYytZdw4',
      code: 'https://github.com/sa4s-serc/SAS_llm_query/tree/iot-prototype',
      demo: 'https://sa4s-serc.github.io/SAS_llm_query/'
    },
    stats: [
      { icon: '⚙️', value: '0.603', label: 'F1 score' },
      { icon: '⬆️', value: '0.778', label: 'recall' },
      { icon: '🔢', value: '≈3k', label: 'tokens/service' }
    ]
  }
];

const Showcases = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-sa4s-teal-50 to-sa4s-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Showcases
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore our innovative demos and systems that demonstrate the power of self-adaptive computing and sustainable software architecture.
          </p>
        </div>
      </div>

      {/* Showcase Blocks */}
      <div className="py-8">
        {showcases.map((showcase, index) => {
          const isReversed = index % 2 === 1;
          const hasBackground = index % 2 === 1;
          
          return (
            <div
              key={showcase.id}
              className={`py-16 ${hasBackground ? 'bg-blue-50' : 'bg-white'}`}
            >
              <div className="container mx-auto px-4">
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-video overflow-hidden rounded-lg shadow-lg bg-gray-100">
                      <img
                        src={showcase.image}
                        alt={showcase.imageAlt}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {showcase.title}
                      </h2>
                      <p className="text-sm italic text-sa4s-teal-600 mb-4">
                        {showcase.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {showcase.description}
                      </p>
                    </div>

                    {/* Stats */}
                    {showcase.stats && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                        {showcase.stats.map((stat, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <span className="text-3xl" role="img" aria-label={stat.label}>{stat.icon}</span>
                            <p className="text-2xl font-bold text-sa4s-blue-600">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                      {showcase.links.demo && (
                        <a
                          href={showcase.links.demo}
                          className="inline-flex items-center px-4 py-2 bg-sa4s-blue-600 text-white rounded-lg hover:bg-sa4s-blue-700 transition-colors duration-150 group"
                        >
                          <ExternalLink className="mr-2 group-hover:scale-110 transition-transform duration-150" size={16} />
                          Live Demo
                        </a>
                      )}
                      {showcase.links.paper && (
                        <a
                          href={showcase.links.paper}
                          className="inline-flex items-center px-4 py-2 border border-sa4s-teal-600 text-sa4s-teal-600 rounded-lg hover:bg-sa4s-teal-600 hover:text-white transition-colors duration-150 group"
                        >
                          <FileText className="mr-2 group-hover:scale-110 transition-transform duration-150" size={16} />
                          Paper
                        </a>
                      )}
                      {showcase.links.youtube && (
                        <a
                          href={showcase.links.youtube}
                          className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-150 group"
                        >
                          <Youtube className="mr-2 group-hover:scale-110 transition-transform duration-150" size={16} />
                          Demo
                        </a>
                      )}
                      {showcase.links.code && (
                        <a
                          href={showcase.links.code}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-150 group"
                        >
                          <Github className="mr-2 group-hover:scale-110 transition-transform duration-150" size={16} />
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
