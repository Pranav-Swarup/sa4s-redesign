
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { publicUrl } from '../lib/utils';

const primaryNav = [
  { name: 'Home',         path: '/' },
  { name: 'Spotlight',    path: '/spotlight' },
  { name: 'Research',     path: '/research' },
  { name: 'Publications', path: '/publications' },
  { name: 'News',         path: '/news' },
];

const drawerNav = [
  { name: 'Blogs',      path: '/blogs' },
  { name: 'Agentic AI', path: '/agenticai' },
  { name: 'AutoSE',     path: '/autose' },
  { name: 'Tools',      path: '/tools' },
  { name: 'Showcases',  path: '/showcases' },
  { name: 'Projects',   path: '/work' },
  { name: 'Team',       path: '/team' },
  { name: 'Gallery',    path: '/gallery' },
];

// Mobile drawer shows every page
const allNav = [...primaryNav, ...drawerNav];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const primaryLinkClass = (isActive: boolean) =>
    `px-3 py-2 rounded text-sm font-medium transition-all duration-150 ${
      isActive
        ? 'text-[#EDE8DF] bg-[#1F4A30]'
        : 'text-[#C4DDD1] hover:text-[#EDE8DF] hover:bg-[#142E1E]'
    }`;

  const visibleDrawerItems = isMobile ? allNav : drawerNav;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C2118] border-b border-[#1C4030]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">

            <NavLink to="/" onClick={close} className="flex items-center space-x-3 shrink-0">
              <img src={publicUrl("/images/logos/sa4s.png")} alt="SA4S Logo" className="w-9 h-9 object-contain" />
              <div className="hidden sm:block">
                <div className="font-semibold text-[#EDE8DF] text-sm tracking-wide">SA4S Research Group</div>
                <div className="text-[10px] text-[#8DB8A2] tracking-wider uppercase">SERC - IIIT Hyderabad</div>
              </div>
            </NavLink>

            <div className="flex items-center gap-0.5">
              {/* Primary nav — desktop only */}
              <nav className="hidden md:flex items-center space-x-0.5">
                {primaryNav.map((item) => (
                  <NavLink key={item.path} to={item.path} className={({ isActive }) => primaryLinkClass(isActive)}>
                    {item.name}
                  </NavLink>
                ))}
              </nav>

              <div className="hidden md:block w-px h-5 bg-[#1C4030] mx-2" />

              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1F4A30] hover:bg-[#2D6A4F] text-[#C4DDD1] hover:text-[#EDE8DF] transition-colors duration-150 shrink-0"
                aria-label="Open navigation menu"
              >
                <Menu size={18} />
                <span className="text-sm font-semibold tracking-wide">Menu</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full md:w-[420px] bg-[#0A1C12] border-l border-[#1C4030] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-8 h-16 border-b border-[#1C4030] shrink-0">
          <span className="text-[10px] font-bold text-[#52B788] tracking-[0.3em] uppercase">Pages</span>
          <button
            onClick={close}
            className="p-2 rounded-lg text-[#52B788] hover:text-[#EDE8DF] hover:bg-[#1F4A30] transition-colors duration-150"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-8 py-8 flex flex-col gap-1">
          {visibleDrawerItems.map((item, i) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={close}
              style={{
                transitionDelay: isOpen ? `${i * 40}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
              }}
              className={({ isActive }) =>
                `group flex items-center justify-between py-4 border-b transition-all duration-300 ${
                  isActive
                    ? 'border-[#2D6A4F] text-[#52B788]'
                    : 'border-[#1C4030] text-[#F0EBE1] hover:text-white hover:border-[#2D6A4F]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'normal' }}
                    className={`text-2xl font-normal tracking-wide transition-all duration-150 ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`}
                  >
                    {item.name}
                  </span>
                  <ArrowRight
                    size={16}
                    className={`transition-all duration-150 ${
                      isActive
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="px-8 py-6 border-t border-[#1C4030] shrink-0">
          <p className="text-[10px] text-[#2D6A4F] tracking-[0.3em] uppercase font-semibold">SERC · IIIT Hyderabad</p>
        </div>
      </div>
    </>
  );
};

export default Header;
