
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLatestNewsItems, NewsItem } from '../data/newsLoader';

const MARKDOWN_IMAGE_REGEX = /!\[[^\]]*?\]\(([^)\s]+)[^)]*\)/g;

function toPreviewText(description: string): string {
  return description
    .replace(MARKDOWN_IMAGE_REGEX, '')
    .replace(/<img[^>]*>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    .replace(/~~(.*?)~~/g, '$1')
    .replace(/`{1,3}([^`]*)`{1,3}/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

const FeaturedNews = () => {
  const [featuredNews, setFeaturedNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestNewsItems(3)
      .then(setFeaturedNews)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-xl lg:text-2xl text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold">News from the Lab</h2>
        </div>

        {loading ? (
          <div className="py-8">
            <span className="text-sm text-[#6B6455]">Loading...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {featuredNews.map((item, index) => {
              const previewText = toPreviewText(item.description || '');
              return (
                <div
                  key={index}
                  className="flex flex-col bg-[#F0EBE1] border border-[#D8D2C4] rounded-xl p-6 hover:border-[#2D6A4F]/40 transition-all duration-200 group"
                >
                  <div className="text-xs text-[#8B6420] font-medium mb-3 tracking-wide">
                    {item.date}
                  </div>
                  <h3 className="font-semibold text-sm text-[#1A1710] mb-3 line-clamp-2 leading-snug group-hover:text-[#4A4438] transition-colors duration-150">
                    {item.headline}
                  </h3>
                  {previewText && (
                    <p className="text-sm text-[#6B6455] mb-4 line-clamp-3 leading-relaxed flex-1">
                      {previewText.slice(0, 140)}{previewText.length > 140 ? '…' : ''}
                    </p>
                  )}
                  <Link
                    to="/news"
                    className="inline-flex items-center text-[#2D5A40] hover:text-[#1A1710] text-sm font-medium mt-auto transition-colors duration-150 group/link"
                  >
                    Read more
                    <ArrowRight className="ml-1 group-hover/link:translate-x-1 transition-transform duration-150" size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex justify-center">
          <Link
            to="/news"
            className="inline-flex items-center border border-[#D8D2C4] hover:border-[#2D6A4F] text-[#6B6455] hover:text-[#1A1710] px-5 py-2.5 rounded text-sm font-medium transition-all duration-200 group"
          >
            All news
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-150" size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
