import { Link } from 'react-router-dom';
import churchInfo from '../data/church-info.json';

const stats = [
  { label: 'Active Cells', value: churchInfo.g12Vision.metrics.activeCells },
  { label: 'Leaders in Training', value: churchInfo.g12Vision.metrics.leadersInTraining },
  { label: 'Sunday Gathering', value: '3–7 PM' },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white py-20 md:py-32 min-h-[70vh] flex items-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-black to-black"></div>
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[70vw] blur-3xl opacity-50 bg-white/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-white/60">Welcome Home</p>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight">
            This is Fortress Church.
          </h1>
          <p className="text-sm md:text-base uppercase tracking-[0.6em] text-white/50 mb-6">
            Win • Consolidate • Disciple • Send
          </p>
          <p className="text-xl md:text-2xl mb-4 text-white/80 font-light">
            {churchInfo.tagline}
          </p>
          <p className="text-lg md:text-xl mb-10 text-white/70 max-w-3xl mx-auto leading-relaxed">
            {churchInfo.welcomeMessage}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-white text-black px-10 py-3 rounded-full font-semibold tracking-[0.2em] text-xs uppercase hover:bg-neutral-200 transition-colors shadow-2xl"
            >
              Join the Movement
            </Link>
            <Link
              to="/about"
              className="border border-white/40 text-white px-10 py-3 rounded-full font-semibold tracking-[0.2em] text-xs uppercase hover:bg-white hover:text-black transition-colors"
            >
              Learn the Vision
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl px-6 py-5">
                <p className="text-3xl font-black tracking-tight">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

