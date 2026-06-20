
import { Github, FileText, Youtube, ArrowRight, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { publicUrl } from '../lib/utils';

const Tools = () => {
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
        email: 'mailto:switchseams2024@gmail.com'
      }
    },
    {
      name: 'ArchBench',
      tagline: 'LLMs for Software Architecture Tasks',
      description:
        'ArchBench is a leaderboard and resource hub for benchmarking LLMs on software architecture tasks, including ADR generation, serverless components, and dynamic services.',
      logo: '/images/tools/archbench.png',
      links: {
        demo: 'https://www.sabench.com/',
        paper: 'https://www.sabench.com/',
        email: 'mailto:bassam.adnan@research.iiit.ac.in'
      }
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
        video: 'https://www.youtube.com/watch?v=cdJv43Jsv_c'
      }
    }
  ];

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'paper': return <FileText size={16} />;
      case 'github': return <Github size={16} />;
      case 'demo': return <ArrowRight size={16} />;
      case 'video': return <Youtube size={16} />;
      case 'download': return <Download size={16} />;
      case 'email': return <Mail size={16} />;
      default: return <ArrowRight size={16} />;
    }
  };

  const getLinkLabel = (type: string) => {
    switch (type) {
      case 'paper': return 'Paper';
      case 'github': return 'GitHub';
      case 'demo': return 'Platform';
      case 'video': return 'Demo';
      case 'download': return 'Download';
      case 'email': return 'Email Us';
      default: return 'Link';
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-[#0C2118] border-b border-[#1C4030] py-16">
        <div className="container mx-auto px-4">
          <p className="text-xs text-[#52B788] tracking-[0.25em] uppercase font-semibold mb-3">Open source</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">Tools &amp; Frameworks</h1>
          <p className="mt-3 text-[#8DB8A2] max-w-2xl">
            Open-source tools and frameworks developed by our research group to advance self-adaptive systems and sustainable computing.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">

          {/* Tools Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#F0EBE1] border border-[#D8D2C4] hover:border-[#2D6A4F]/40 rounded-xl p-7 transition-all duration-200 group"
              >
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 bg-[#FAF7F2] border border-[#D8D2C4] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {tool.logo.startsWith('/') ? (
                      <img src={publicUrl(tool.logo)} alt={`${tool.name} logo`} className="w-12 h-12 object-contain" />
                    ) : tool.logo}
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

          {/* Call to Action */}
          <div className="text-center mt-14 max-w-5xl mx-auto">
            <div className="bg-[#0C2118] border border-[#1C4030] rounded-xl p-8">
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
    </div>
  );
};

export default Tools;

