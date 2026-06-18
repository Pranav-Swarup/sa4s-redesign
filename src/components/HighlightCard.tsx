import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface HighlightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  ctaText: string;
  ctaAction?: () => void;
}

const HighlightCard = ({ icon, title, description, ctaText, ctaAction }: HighlightCardProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-150 group">
      <div className="text-sa4s-teal-600 mb-4 group-hover:scale-110 transition-transform duration-150">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <button 
        onClick={ctaAction}
        className="text-sa4s-blue-600 hover:text-sa4s-blue-700 font-medium text-sm flex items-center group"
      >
        {ctaText}
        <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-150" size={16} />
      </button>
    </div>
  );
};

export default HighlightCard;
