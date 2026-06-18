
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsItem {
  date: string;
  title: string;
  summary?: string;
}

interface NewsCardProps {
  news: NewsItem[];
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-20">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <div className="w-2 h-2 bg-sa4s-blue-500 rounded-full mr-3"></div>
        Latest News
      </h3>
      
      <div className="space-y-4">
        {news.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="text-sm text-sa4s-teal-600 font-medium mb-1">
              {item.date}
            </div>
            <h4 className="text-gray-900 font-medium group-hover:text-sa4s-teal-600 transition-colors duration-150 line-clamp-2">
              {item.title}
            </h4>
            {item.summary && (
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {item.summary}
              </p>
            )}
          </div>
        ))}
      </div>
      
      <Link 
        to="/news"
        className="w-full mt-6 text-sa4s-blue-600 hover:text-sa4s-blue-700 font-medium text-sm flex items-center justify-center group"
      >
        See all News
        <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-150" size={16} />
      </Link>
    </div>
  );
};

export default NewsCard;
