
import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllNewsItems, NewsItem } from '../data/newsLoader';

const StickyNewsBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topNews, setTopNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const loadTopNews = async () => {
      try {
        const allItems = await getAllNewsItems();
        setTopNews(allItems.slice(0, 3));
      } catch (error) {
        console.error('Error loading top news:', error);
      }
    };

    loadTopNews();
  }, []);

  useEffect(() => {
    if (!isVisible || topNews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topNews.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isVisible, topNews.length]);

  useEffect(() => {
    if (topNews.length > 0) {
      setCurrentIndex(0);
    }
  }, [topNews.length]);

  if (!isVisible || topNews.length === 0) return null;
  const safeIndex = Number.isFinite(currentIndex) ? currentIndex % topNews.length : 0;
  const currentItem = topNews[safeIndex];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-sa4s-teal-600 text-white z-40 animate-slide-in-right">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4 min-w-0 flex-1">
            <div className="text-xs font-medium opacity-90">
              {currentItem.date}
            </div>
            <div className="font-medium text-sm truncate">
              {currentItem.headline}
            </div>
          </div>
          
          <div className="flex items-center space-x-3 ml-4">
            <Link 
              to="/news"
              className="inline-flex items-center text-white hover:text-sa4s-teal-100 text-sm font-medium group"
              aria-label="View all news"
            >
              View all
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-150" size={14} />
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-sa4s-teal-100 p-1"
              aria-label="Close news bar"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNewsBar;
