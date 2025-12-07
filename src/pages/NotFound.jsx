import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-4">404</h1>
        <p className="text-xl md:text-2xl text-white/70 mb-8">Page not found</p>
        <p className="text-white/60 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center border border-white/40 text-white px-10 py-3 rounded-full font-semibold tracking-[0.3em] text-xs uppercase hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

