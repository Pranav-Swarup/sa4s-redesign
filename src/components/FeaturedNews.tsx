
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
    <section className="py-16 bg-[#0D2B6B]">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <p className="text-xs text-[#C4A97A] tracking-[0.25em] uppercase font-medium mb-3">News</p>
          <h2 className="font-bold text-2xl text-[#F3E4C9]">Latest from the Lab</h2>
        </div>

        {loading ? (
          <div className="py-8">
            <span className="text-sm text-[#B8CCE8]">Loading...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {featuredNews.map((item, index) => {
              const previewText = toPreviewText(item.description || '');
              return (
                <div
                  key={index}
                  className="flex flex-col bg-[#112F72] border border-[#1A428A] rounded-xl p-6 hover:border-[#2453A8] transition-all duration-200 group"
                >
                  <div className="text-xs text-[#C4A97A] font-medium mb-3 tracking-wide">
                    {item.date}
                  </div>
                  <h3 className="font-semibold text-sm text-[#F3E4C9] mb-3 line-clamp-2 leading-snug group-hover:text-[#B8CCE8] transition-colors duration-150">
                    {item.headline}
                  </h3>
                  {previewText && (
                    <p className="text-sm text-[#B8CCE8] mb-4 line-clamp-3 leading-relaxed flex-1">
                      {previewText.slice(0, 140)}{previewText.length > 140 ? '…' : ''}
                    </p>
                  )}
                  <Link
                    to="/news"
                    className="inline-flex items-center text-[#5BA3D9] hover:text-[#F3E4C9] text-sm font-medium mt-auto transition-colors duration-150 group/link"
                  >
                    Read more
                    <ArrowRight className="ml-1 group-hover/link:translate-x-1 transition-transform duration-150" size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        <Link
          to="/news"
          className="inline-flex items-center border border-[#1A428A] hover:border-[#5BA3D9] text-[#B8CCE8] hover:text-[#F3E4C9] px-5 py-2.5 rounded text-sm font-medium transition-all duration-200 group"
        >
          All news
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-150" size={13} />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedNews;
