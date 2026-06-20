import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
      <div className="text-center">
        <p className="text-xs text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold mb-4">404</p>
        <h1 className="text-4xl font-bold text-[#1A1710] mb-3">Page not found</h1>
        <p className="text-[#6B6455] mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#2D6A4F] hover:text-[#1A1710] text-sm font-medium transition-colors duration-150"
        >
          Return to Home
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
