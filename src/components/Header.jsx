import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoMark from '../assets/logo/fortress.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses =
    'text-white/90 hover:text-white transition-colors font-semibold tracking-wide text-sm uppercase';

  return (
    <header className="sticky top-0 z-50 bg-black/80 border-b border-white/10 backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white">
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
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden mt-4 space-y-2 pb-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/ministries', label: 'Ministries' },
              { path: '/events', label: 'Events' },
              { path: '/progress', label: 'Progress' },
              { path: '/about', label: 'About' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-white/80 hover:text-white transition-colors font-semibold tracking-wide uppercase text-sm"
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

