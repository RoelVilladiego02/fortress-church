import { Link, useLocation } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import logoMark from '../assets/logo/fortress.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useLayoutEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const linkClasses =
    'text-white/90 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded transition-colors font-semibold tracking-wide text-sm uppercase';

  return (
    <header className="sticky top-0 z-50 bg-black/80 border-b border-white/10 backdrop-blur-lg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:font-semibold"
      >
        Skip to main content
      </a>
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white" aria-label="Fortress Church home">
            <div className="flex items-center gap-3">
              <img src={logoMark} alt="Fortress Church logo" className="h-10 w-auto" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-semibold tracking-[0.6em] uppercase text-white/70">Fortress Church</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClasses}>
              Home
            </Link>
            <Link to="/first-timers" className={`${linkClasses} text-white`}>
              First Timers
            </Link>
            <Link to="/services" className={linkClasses}>
              Services
            </Link>
            <Link to="/ministries" className={linkClasses}>
              Ministries
            </Link>
            <Link to="/events" className={linkClasses}>
              Events
            </Link>
            <Link to="/progress" className={linkClasses}>
              Progress
            </Link>
            <Link to="/about" className={linkClasses}>
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 space-y-2 pb-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/ministries', label: 'Ministries' },
              { path: '/events', label: 'Events' },
              { path: '/progress', label: 'Progress' },
              { path: '/about', label: 'About' },
              { path: '/first-timers', label: 'First Timers' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-white/80 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded transition-colors font-semibold tracking-wide uppercase text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

