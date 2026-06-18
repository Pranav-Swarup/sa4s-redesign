
import { Github, FileText, Youtube, ArrowRight, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tools & Frameworks
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Open-source tools and frameworks developed by our research group to advance 
            self-adaptive systems and sustainable computing practices.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 group"
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {tool.logo.startsWith('/') ? <img src={tool.logo} alt={`${tool.name} logo`} className="w-16 h-16 object-contain" /> : tool.logo}
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tool.name}
                </h3>
                <p className="text-sa4s-teal-600 font-medium mb-4">
                  {tool.tagline}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap justify-center gap-3">
                {Object.entries(tool.links).map(([type, url]) => (
                  <a
                    key={type}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-sa4s-teal-50 text-gray-700 hover:text-sa4s-teal-700 rounded-lg border border-gray-200 hover:border-sa4s-teal-200 transition-all duration-150 text-sm font-medium"
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
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sa4s-teal-500 to-sa4s-blue-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Interested in Contributing?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Our tools are open-source and we welcome contributions from the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/work" className="bg-white text-sa4s-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-150 text-center">
                View All Projects
              </Link>
              <a href="mailto:karthik.vaidhyanathan@iiit.ac.in" className="border-2 border-white text-white hover:bg-white hover:text-sa4s-teal-600 px-8 py-3 rounded-lg font-medium transition-all duration-150 text-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;

