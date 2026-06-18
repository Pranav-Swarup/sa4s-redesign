
import { Eye, FileText, Users, Globe2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedNews from '../components/FeaturedNews';
import HighlightCard from '../components/HighlightCard';
import LogoCloud from '../components/LogoCloud';
import AudioPlayer from '../components/AudioPlayer';

const Index = () => {
  const navigate = useNavigate();

  const handleVisionClick = () => {
    navigate('/research');
  };

  const handlePublicationClick = () => {
    navigate('/publications');
  };

  const handleJoinUsClick = () => {
    navigate('/vacancies');
  };

  return (
    <div>

      {/* ICSE 2026 Announcement */}
      <section className="bg-gradient-to-r from-yellow-400 via-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-row flex-wrap md:flex-row md:items-center justify-center gap-3 md:gap-4 text-center md:text-left">
            <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 md:px-3 md:py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
              🇧🇷 Rio 2026
            </span>
            <span className="font-medium text-sm md:text-base">
              🎉 <strong>9 Papers Accepted at ICSE 2026!</strong>
            </span>
            <a
              href="/news"
              className="inline-flex items-center justify-center text-sm font-semibold bg-white text-green-700 hover:bg-white/90 px-4 py-1.5 rounded-full transition-all duration-200"
            >
              See the Papers →
            </a>
          </div>
        </div>
      </section>

      {/* SustAInd cross-promo */}
      <section className="py-3 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative group">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl opacity-80"></div>

            {/* Glassmorphism overlay */}
            <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-lg overflow-hidden">
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>

              <div className="relative flex flex-col items-center text-center gap-4 p-4 md:flex-row md:items-center md:text-left md:justify-between">
                {/* Left content */}
                <div className="flex flex-col items-center md:flex-row md:items-center gap-3 flex-1">
                  {/* Icon */}
                  <span className="inline-flex h-12 w-12 md:h-10 md:w-10 items-center justify-center rounded-lg bg-white/90 text-emerald-700 shadow group-hover:scale-105 transition-transform duration-200 shrink-0">
                    <Globe2 size={20} strokeWidth={2.5} />
                  </span>

                  {/* Text content */}
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">
                      SustAInd
                    </h3>
                    <p className="text-xs md:text-sm text-white/85 leading-snug">
                      Sustainable AI for India: low-carbon, cost-aware, production-ready ML systems.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex mt-2 md:mt-0">
                  <a
                    href="https://sa4s-serc.github.io/sustaind/"
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-5 py-2.5 md:px-4 md:py-2 text-sm font-semibold text-emerald-700 shadow transition-all duration-200 hover:shadow-lg hover:scale-105"
                  >
                    <span>Visit SustAInd</span>
                    <svg
                      className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Hero />

      {/* Podcast Player Section */}
      <section className="py-12 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <AudioPlayer
            src="/LLMs for Architectural Design Decisions.mp3"
            title="SA4S Research Summary Podcast"
          />
        </div>
      </section>

      {/* Featured News Section */}
      <FeaturedNews />

      {/* Research Highlights Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Research Highlights
            </h2>
            <div className="prose text-gray-600 max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The SA4S research group at SERC, IIIT-Hyderabad, focuses on developing
                intelligent software systems that can adapt to changing environments while
                maintaining optimal performance and energy efficiency.
              </p>
              <p className="leading-relaxed">
                Our interdisciplinary approach combines software engineering, machine learning,
                and systems research to create solutions that are both theoretically sound and
                practically impactful. We work closely with industry partners to ensure our
                innovations address real-world challenges in cloud computing, IoT systems,
                and distributed applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HighlightCard
              icon={<Eye size={32} />}
              title="Our Vision"
              description="To pioneer the next generation of self-adaptive software systems that intelligently optimize for performance, reliability, and sustainability."
              ctaText="Learn More"
              ctaAction={handleVisionClick}
            />

            <HighlightCard
              icon={<FileText size={32} />}
              title="Latest Publication"
              description="Engineering End-to-End Remote Labs Using IoT-Based Retrofitting - Published in IEEE Access 2025"
              ctaText="Read Paper"
              ctaAction={() => window.open('https://doi.org/10.1109/ACCESS.2024.3523066', '_blank')}
            />

            <HighlightCard
              icon={<Users size={32} />}
              title="Join Us"
              description="We're looking for passionate researchers interested in adaptive systems, ML for software engineering, and sustainable computing."
              ctaText="View Openings"
              ctaAction={handleJoinUsClick}
            />
          </div>
        </div>
      </section>

      {/* Logo Cloud Section */}
      <LogoCloud />
    </div>
  );
};

export default Index;
