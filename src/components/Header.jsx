import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-wood-charcoal border-b border-wood-brown sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white tracking-tight uppercase">
            FORTRESS CHURCH
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors font-medium">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-gray-300 transition-colors font-medium">
              Services
            </Link>
            <Link to="/ministries" className="text-white hover:text-gray-300 transition-colors font-medium">
              Ministries
            </Link>
            <Link to="/events" className="text-white hover:text-gray-300 transition-colors font-medium">
              Events
            </Link>
            <Link to="/progress" className="text-white hover:text-gray-300 transition-colors font-medium">
              Building Progress
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors font-medium">
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
            <Link
              to="/"
              className="block py-2 text-white hover:text-gray-300 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block py-2 text-white hover:text-gray-300 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/ministries"
              className="block py-2 text-white hover:text-gray-300 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Ministries
            </Link>
            <Link
              to="/events"
              className="block py-2 text-white hover:text-gray-300 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/progress"
              className="block py-2 text-white hover:text-gray-300 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Building Progress
            </Link>
            <Link
              to="/about"
              className="block py-2 text-white hover:text-gray-300 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

