
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { getAllNewsItems, NewsItem } from '../data/newsLoader';
import { publicUrl } from '../lib/utils';

const News = () => {
  const [newsItems, setNewsItems]     = useState<NewsItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);
  const [loading, setLoading]         = useState(true);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleItemSelect = (item: NewsItem) => {
    setSelectedItem(item);
    if (window.innerWidth < 1024 && previewRef.current) {
      setTimeout(() => {
        if (previewRef.current) {
          const y = previewRef.current.getBoundingClientRect().top + window.pageYOffset - 80;
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
        if (items.length > 0) setSelectedItem(items[0]);
      } catch (error) {
        console.error('Error loading news:', error);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-[#0C2118] border-b border-[#1C4030] py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-[#8DB8A2] hover:text-[#EDE8DF] mb-6 transition-colors duration-150 text-sm"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
          <p className="text-xs text-[#52B788] tracking-[0.25em] uppercase font-semibold mb-3">News</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">Latest News</h1>
          <p className="mt-3 text-[#8DB8A2] max-w-2xl">
            Developments, achievements, and announcements from the SA4S research group.
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <span className="text-sm text-[#6B6455]">Loading news…</span>
            </div>
          ) : (
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-6">

              {/* Left — headline list */}
              <div className="lg:col-span-1">
                <p className="text-xs text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold mb-5">All News</p>
                <div className="space-y-2">
                  {newsItems.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleItemSelect(item)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-150 ${
                        selectedItem === item
                          ? 'border-[#2D6A4F] bg-[#EAE4D6]'
                          : 'border-[#D8D2C4] bg-[#F0EBE1] hover:border-[#2D6A4F]/40 hover:bg-[#EAE4D6]'
                      }`}
                    >
                      <div className="flex items-center text-xs text-[#2D6A4F] font-medium mb-1.5">
                        <Calendar size={12} className="mr-1.5" />
                        {item.date}
                      </div>
                      <h3 className="text-sm font-medium text-[#1A1710] line-clamp-2 leading-snug">
                        {item.headline}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — expanded preview */}
              <div ref={previewRef} className="lg:col-span-2">
                {selectedItem && (
                  <div className="bg-[#F0EBE1] border border-[#D8D2C4] rounded-xl p-8">
                    <div className="flex items-center text-xs text-[#2D6A4F] font-medium mb-4">
                      <Calendar size={13} className="mr-1.5" />
                      {selectedItem.date}
                    </div>
                    <h1 className="text-2xl font-bold text-[#1A1710] mb-4 leading-snug">
                      {selectedItem.headline}
                    </h1>
                    {selectedItem.sourceUrl && (
                      <a
                        href={selectedItem.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-[#2D6A4F] hover:text-[#1A1710] transition-colors duration-150"
                      >
                        View original post
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {selectedItem.description && (
                      <div className="prose prose-sm max-w-none prose-headings:text-[#1A1710] prose-p:text-[#6B6455] prose-a:text-[#2D6A4F]">
                        <ReactMarkdown
                          rehypePlugins={[rehypeRaw]}
                          components={{
                            img: ({ className, src, ...props }) => (
                              <img
                                {...props}
                                src={src ? publicUrl(src) : undefined}
                                className={`block my-6 w-full rounded-lg border border-[#D8D2C4] ${className ?? ''}`.trim()}
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
