
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home',         path: '/' },
  { name: 'Agentic AI',   path: '/agenticai' },
  { name: 'AutoSE',       path: '/autose' },
  { name: 'News',         path: '/news' },
  { name: 'Tools',        path: '/tools' },
  { name: 'Showcases',    path: '/showcases' },
  { name: 'Projects',     path: '/work' },
  { name: 'Publications', path: '/publications' },
  { name: 'Blogs',        path: '/blogs' },
  { name: 'Research',     path: '/research' },
  { name: 'Team',         path: '/team' },
  { name: 'Gallery',      path: '/gallery' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = (isActive: boolean) =>
    `px-3 py-2 rounded text-sm font-medium transition-all duration-150 ${
      isActive
        ? 'text-[#F3E4C9] bg-[#1A428A]'
        : 'text-[#B8CCE8] hover:text-[#F3E4C9] hover:bg-[#112F72]'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D2B6B] border-b border-[#1A428A]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <NavLink to="/" className="flex items-center space-x-3">
            <img src="/images/logos/sa4s.png" alt="SA4S Logo" className="w-9 h-9 object-contain" />
            <div className="hidden sm:block">
              <div className="font-semibold text-[#F3E4C9] text-sm tracking-wide">SA4S @ SERC</div>
              <div className="text-[10px] text-[#B8CCE8] tracking-wider uppercase">IIIT Hyderabad</div>
            </div>
          </NavLink>

          <nav className="hidden lg:flex items-center space-x-0.5">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={({ isActive }) => linkClass(isActive)}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded text-[#B8CCE8] hover:text-[#F3E4C9] hover:bg-[#112F72] transition-colors duration-150"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#1A428A] bg-[#0D2B6B]">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => linkClass(isActive)}
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
