import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { getAllNewsItems, NewsItem } from '../data/newsLoader';

const News = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleItemSelect = (item: NewsItem) => {
    setSelectedItem(item);

    // On mobile screens, scroll to preview when an item is selected
    if (window.innerWidth < 1024 && previewRef.current) {
      // Small timeout to allow React to render the new state content if needed
      setTimeout(() => {
        const yOffset = -80; // Account for the sticky header
        if (previewRef.current) {
          const y = previewRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  useEffect(() => {
    const loadNews = async () => {
      try {
        const items = await getAllNewsItems();
        setNewsItems(items);
        if (items.length > 0) {
          setSelectedItem(items[0]);
        }
      } catch (error) {
        console.error('Error loading news:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-sa4s-teal-50 to-sa4s-blue-50 py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-sa4s-teal-600 hover:text-sa4s-teal-700 mb-6 transition-colors duration-150"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest News
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Stay updated with the latest developments, achievements, and announcements from the SA4S research group.
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="text-gray-600">Loading news...</div>
            </div>
          ) : (
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8">
              {/* Left column - Headlines list */}
              <div className="lg:col-span-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">All News</h2>
                <div className="space-y-4">
                  {newsItems.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleItemSelect(item)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-150 ${selectedItem === item
                          ? 'border-sa4s-teal-600 bg-sa4s-teal-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                      <div className="flex items-center text-sm text-sa4s-teal-600 font-medium mb-2">
                        <Calendar size={14} className="mr-2" />
                        {item.date}
                      </div>
                      <h3 className="font-medium text-gray-900 line-clamp-2">
                        {item.headline}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column - Expanded preview */}
              <div ref={previewRef} className="lg:col-span-2">
                {selectedItem && (
                  <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                    <div className="flex items-center text-sm text-sa4s-teal-600 font-medium mb-4">
                      <Calendar size={16} className="mr-2" />
                      {selectedItem.date}
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      {selectedItem.headline}
                    </h1>
                    {selectedItem.sourceUrl && (
                      <a
                        href={selectedItem.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mb-6 text-sm font-semibold text-sa4s-teal-600 hover:text-sa4s-teal-700"
                      >
                        View original LinkedIn post
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {selectedItem.description && (
                      <div className="prose max-w-none">
                        <ReactMarkdown
                          rehypePlugins={[rehypeRaw]}
                          components={{
                            img: ({ className, ...props }) => (
                              <img
                                {...props}
                                className={`block my-6 w-full rounded-lg border border-gray-200 ${className ?? ''}`.trim()}
                                loading="lazy"
                              />
                            ),
                          }}
                        >
                          {selectedItem.description}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
