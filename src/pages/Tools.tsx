
import { Github, FileText, Youtube, ArrowRight, Download, Mail, ExternalLink, Zap, Target, Timer, Settings, TrendingUp, Hash } from 'lucide-react';
import { Link } from 'react-router-dom';
import { publicUrl } from '../lib/utils';

const tools = [
  {
    name: 'SWITCH',
    tagline: 'An Exemplar for Evaluating Self-Adaptive ML-Enabled Systems',
    description: 'A web-service platform that lets researchers plug in and evaluate dynamic ML model-switching strategies at runtime—complete with real-time dashboards, experiment management, and adaptation metric logging.',
    logo: '/images/tools/switch.png',
    links: {
      paper: 'https://arxiv.org/pdf/2402.06351',
      github: 'https://github.com/sa4s-serc/switch',
      video: 'https://www.youtube.com/watch?v=ZIDE1v3jxeQ&feature=youtu.be',
      download: 'https://drive.google.com/file/d/14PYAqZZ4mEradS4dh7thO69IawhgdDiY/view?usp=drive_link',
      email: 'mailto:switchseams2024@gmail.com',
    },
  },
  {
    name: 'ArchBench',
    tagline: 'LLMs for Software Architecture Tasks',
    description: 'ArchBench is a leaderboard and resource hub for benchmarking LLMs on software architecture tasks, including ADR generation, serverless components, and dynamic services.',
    logo: '/images/tools/archbench.png',
    links: {
      demo: 'https://www.sabench.com/',
      paper: 'https://www.sabench.com/',
      email: 'mailto:bassam.adnan@research.iiit.ac.in',
    },
  },
  {
    name: 'LoCoML',
    tagline: 'Low-Code Framework for Real-World ML Inference Pipelines',
    description: 'LoCoML abstracts away engineering complexity with a low-code, drag-and-drop interface—stitching ASR, MT, TTS & OCR into robust 20+-language inference pipelines for the Bhashini Project with just ~2% runtime overhead.',
    logo: '/images/tools/locoml.png',
    links: {
      paper: 'https://arxiv.org/abs/2501.14165',
      github: 'https://github.com/sa4s-serc/locoml',
      demo: 'https://locoml-website.vercel.app/',
      video: 'https://www.youtube.com/watch?v=cdJv43Jsv_c',
    },
  },
];

const showcases = [
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
      demo:    'https://sa4s-serc.github.io/SAS_llm_query/',
      paper:   'https://arxiv.org/pdf/2502.00689',
      youtube: 'https://www.youtube.com/watch?v=t5iSYytZdw4',
      code:    'https://github.com/sa4s-serc/SAS_llm_query/tree/iot-prototype',
    },
    stats: [
      { icon: <Settings size={16} />,   value: '0.603', label: 'F1 score' },
      { icon: <TrendingUp size={16} />, value: '0.778', label: 'recall' },
      { icon: <Hash size={16} />,       value: '~3k',   label: 'tokens / service' },
    ],
  },
];

const getLinkIcon = (type: string) => {
  switch (type) {
    case 'paper':    return <FileText size={16} />;
    case 'github':   return <Github size={16} />;
    case 'demo':     return <ArrowRight size={16} />;
    case 'video':    return <Youtube size={16} />;
    case 'download': return <Download size={16} />;
    case 'email':    return <Mail size={16} />;
    default:         return <ArrowRight size={16} />;
  }
};

const getLinkLabel = (type: string) => {
  switch (type) {
    case 'paper':    return 'Paper';
    case 'github':   return 'GitHub';
    case 'demo':     return 'Platform';
    case 'video':    return 'Demo';
    case 'download': return 'Download';
    case 'email':    return 'Email Us';
    default:         return 'Link';
  }
};

const ToolsAndSystems = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-[#0C2118] border-b border-[#1C4030] py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">Tools, Frameworks &amp; Featured Systems</h1>
          <p className="mt-3 text-[#8DB8A2] max-w-2xl mx-auto">
            Open-source tools, research frameworks, and live demos from the SA4S group.
          </p>
        </div>
      </div>

      {/* ── Tools & Frameworks ── */}
      <div className="py-16 border-b border-[#D8D2C4]">
        <div className="container mx-auto px-4">
          <p className="text-xs text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold mb-8 text-center">Tools &amp; Frameworks</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#F0EBE1] border border-[#D8D2C4] hover:border-[#2D6A4F]/40 rounded-xl p-7 transition-all duration-200 group"
              >
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 bg-[#FAF7F2] border border-[#D8D2C4] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <img src={publicUrl(tool.logo)} alt={`${tool.name} logo`} className="w-12 h-12 object-contain" />
                  </div>
                </div>
                <div className="text-center mb-5">
                  <h3 className="text-lg font-bold text-[#1A1710] mb-1">{tool.name}</h3>
                  <p className="text-sm text-[#2D6A4F] font-medium mb-3">{tool.tagline}</p>
                  <p className="text-sm text-[#6B6455] leading-relaxed">{tool.description}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {Object.entries(tool.links).map(([type, url]) => (
                    <a
                      key={type}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2] text-[#6B6455] hover:text-[#1A1710] hover:border-[#2D6A4F]/40 rounded-lg border border-[#D8D2C4] transition-all duration-150 text-xs font-medium"
                    >
                      {getLinkIcon(type)}
                      <span>{getLinkLabel(type)}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Featured Systems ── */}
      <div className="py-8">
        <div className="container mx-auto px-4 pt-8">
          <p className="text-xs text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold mb-2 text-center">Featured Systems</p>
        </div>
        {showcases.map((showcase, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={showcase.id}
              className={`py-16 ${isReversed ? 'bg-[#F0EBE1]' : 'bg-[#FAF7F2]'}`}
            >
              <div className="container mx-auto px-4">
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>

                  <div className="w-full lg:w-1/2">
                    <div className="aspect-video overflow-hidden rounded-xl border border-[#D8D2C4] bg-[#EAE4D6]">
                      <img
                        src={publicUrl(showcase.image)}
                        alt={showcase.imageAlt}
                        className="w-full h-full object-contain hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-[#1A1710] mb-2 leading-snug">{showcase.title}</h2>
                      <p className="text-sm italic text-[#2D6A4F] mb-4">{showcase.subtitle}</p>
                      <p className="text-sm text-[#6B6455] leading-relaxed">{showcase.description}</p>
                    </div>

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

                    <div className="flex flex-wrap gap-3">
                      {showcase.links.demo && (
                        <a href={showcase.links.demo} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D6A4F] text-[#EDE8DF] text-sm font-medium rounded-lg hover:bg-[#1D5038] transition-colors duration-150">
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                      {showcase.links.paper && (
                        <a href={showcase.links.paper} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-[#2D6A4F] text-[#2D6A4F] text-sm font-medium rounded-lg hover:bg-[#2D6A4F] hover:text-[#EDE8DF] transition-colors duration-150">
                          <FileText size={14} /> Paper
                        </a>
                      )}
                      {showcase.links.youtube && (
                        <a href={showcase.links.youtube} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-[#D8D2C4] text-[#6B6455] text-sm font-medium rounded-lg hover:border-[#2D6A4F]/40 hover:text-[#1A1710] transition-colors duration-150">
                          <Youtube size={14} /> Demo Video
                        </a>
                      )}
                      {showcase.links.code && (
                        <a href={showcase.links.code} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-[#D8D2C4] text-[#6B6455] text-sm font-medium rounded-lg hover:border-[#2D6A4F]/40 hover:text-[#1A1710] transition-colors duration-150">
                          <Github size={14} /> Code
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

      {/* CTA */}
      <div className="bg-[#FAF7F2] py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-[#0C2118] border border-[#1C4030] rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-[#EDE8DF] mb-3">Interested in Contributing?</h2>
            <p className="text-sm text-[#8DB8A2] mb-6 max-w-lg mx-auto">
              Our tools are open-source and we welcome contributions from the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/work"
                className="px-6 py-2.5 bg-[#1F4A30] text-[#EDE8DF] hover:bg-[#2D6A4F] rounded-lg text-sm font-medium transition-colors duration-150 text-center"
              >
                View All Projects
              </Link>
              <a
                href="mailto:karthik.vaidhyanathan@iiit.ac.in"
                className="px-6 py-2.5 border border-[#2D6A4F] text-[#8DB8A2] hover:bg-[#1F4A30] hover:text-[#EDE8DF] rounded-lg text-sm font-medium transition-all duration-150 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndSystems;
