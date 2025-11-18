import { Link } from 'react-router-dom';
import churchInfo from '../data/church-info.json';

export default function Hero() {
  return (
    <section className="relative bg-wood-dark text-white py-20 md:py-32 min-h-[70vh] flex items-center">
      <div className="absolute inset-0 opacity-10 bg-wood-texture"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white uppercase tracking-tight">
            Welcome to Fortress Church
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200 font-light">
            {churchInfo.tagline}
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {churchInfo.welcomeMessage}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/services"
              className="bg-white text-wood-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg uppercase tracking-wide"
            >
              Join Us Sunday
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-wood-dark transition-colors uppercase tracking-wide"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

