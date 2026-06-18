
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const carouselImages = [
    { src: '/images/home/ICSA-1.jpeg', width: 1600, height: 1066 },
    { src: '/images/home/freshers2k24_sa4s.jpg', width: 1600, height: 1200 },
    { src: '/images/home/icsa24_best_poster.jpeg', width: 1600, height: 1200 },
    { src: '/images/home/sustaind.jpg', width: 1600, height: 1200 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleExploreResearch = () => {
    navigate('/research');
  };

  const handleViewPublications = () => {
    navigate('/publications');
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-sa4s-teal-600 to-sa4s-blue-600 bg-clip-text text-transparent">
                  SA4S
                </span>{' '}
                Research Group
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Pioneering self-adaptive systems and sustainable computing solutions 
                to build the next generation of intelligent, energy-efficient software.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
              <button 
                onClick={handleExploreResearch}
                className="bg-sa4s-teal-600 hover:bg-sa4s-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-150 flex items-center justify-center group"
              >
                Explore Our Research
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-150" size={20} />
              </button>
              <button 
                onClick={handleViewPublications}
                className="border-2 border-sa4s-blue-500 text-sa4s-blue-600 hover:bg-sa4s-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-150"
              >
                View Publications
              </button>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 transition-opacity duration-700 opacity-100">
                <img
                  key={carouselImages[currentSlide].src}
                  src={carouselImages[currentSlide].src}
                  alt={`Lab photo ${currentSlide + 1}`}
                  width={carouselImages[currentSlide].width}
                  height={carouselImages[currentSlide].height}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-150 ${
                    index === currentSlide
                      ? 'bg-sa4s-teal-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
