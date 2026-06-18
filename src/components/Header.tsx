
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Agentic AI', path: '/agenticai' },
    { name: 'AutoSE', path: '/autose' },
    { name: 'News', path: '/news' },
    { name: 'Tools', path: '/tools' },
    { name: 'Showcases', path: '/showcases' },
    { name: 'Projects', path: '/work' },
    { name: 'Publications', path: '/publications' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Research', path: '/research' },
    { name: 'Team', path: '/team' },
    { name: 'Vacancies', path: '/vacancies' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/images/logos/sa4s.png" 
                alt="SA4S Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-gray-900">SA4S @ SERC</div>
              <div className="text-xs text-gray-600">IIIT Hyderabad</div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 relative ${
                    isActive
                      ? 'text-sa4s-teal-600 bg-sa4s-teal-50'
                      : 'text-gray-700 hover:text-sa4s-teal-600 hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-sa4s-teal-600 hover:bg-gray-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? 'text-sa4s-teal-600 bg-sa4s-teal-50'
                        : 'text-gray-700 hover:text-sa4s-teal-600 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
