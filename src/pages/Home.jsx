import Hero from '../components/Hero';
import ProgressTimeline from '../components/BuildingProgress/ProgressTimeline';
import churchInfo from '../data/church-info.json';
import progressUpdates from '../data/progress-updates.json';
import servicesData from '../data/services.json';
import ministriesData from '../data/ministries.json';
import eventsData from '../data/events.json';
import { Link } from 'react-router-dom';

export default function Home() {
  // Get latest 2 updates
  const latestUpdates = [...progressUpdates.updates]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  // Get next 3 events
  const upcomingEvents = [...eventsData.upcomingEvents]
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  // Get featured ministries (first 3)
  const featuredMinistries = ministriesData.ministries.slice(0, 3);

  const g12Pillars = churchInfo.g12Vision.pillars;
  const g12Values = churchInfo.values;

  return (
    <div className="bg-neutral-950 text-white">
      <Hero />

      {/* G12 Vision Section */}
      <section className="py-20 border-y border-white/5 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4">G12 Vision</p>
            <h2 className="text-4xl font-black mb-4">{churchInfo.g12Vision.theme}</h2>
            <p className="text-white/70 text-lg leading-relaxed">{churchInfo.g12Vision.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {g12Pillars.map((pillar) => (
              <div key={pillar.title} className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">{pillar.title}</p>
                <p className="text-white/80 leading-relaxed">{pillar.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 border-b border-white/5 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center mb-10">
              <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4">Weekend Rhythm</p>
              <h2 className="text-4xl font-bold mb-4">Sunday Celebration</h2>
              <p className="text-white/70 max-w-2xl">
                Worship, word, and ministry moments that launch every disciple into a week of cell life and mission.
              </p>
            </div>
            <div className="space-y-6">
              {servicesData.serviceTimes[0].services.map((service, index) => (
                <div key={index} className="border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-neutral-900 to-black">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">Sunday</p>
                      <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-white/70">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black">{service.time}</div>
                      <div className="text-white/50 text-sm">On campus + online</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center border border-white/40 text-white px-10 py-3 rounded-full font-semibold tracking-[0.3em] text-xs uppercase hover:bg-white hover:text-black transition-colors"
              >
                Full Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* G12 Metrics */}
      <section className="py-16 bg-black border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.entries(churchInfo.g12Vision.metrics).map(([key, value]) => (
              <div key={key} className="border border-white/10 rounded-2xl p-6 text-center bg-white/5 backdrop-blur">
                <p className="text-4xl font-black">{value}</p>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60 mt-3">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-16 bg-neutral-950 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-3">Cells & Teams</p>
              <h2 className="text-4xl font-bold">Multiplying Ministries</h2>
            </div>
            <Link
              to="/ministries"
              className="text-white/70 hover:text-white font-semibold tracking-[0.3em] text-xs uppercase"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredMinistries.map((ministry, index) => (
              <div key={index} className="border border-white/10 rounded-2xl p-6 bg-black">
                <h3 className="text-2xl font-semibold mb-3">{ministry.name}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{ministry.description}</p>
                <p className="text-sm text-white/50">
                  <span className="font-semibold text-white/70">Meets:</span> {ministry.meets}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-black border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-3">Calendar</p>
              <h2 className="text-4xl font-bold">Upcoming Activations</h2>
            </div>
            <Link
              to="/events"
              className="text-white/70 hover:text-white font-semibold tracking-[0.3em] text-xs uppercase"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-neutral-900 to-black">
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h3 className="text-2xl font-semibold">{event.title}</h3>
                  <p className="text-white/60 text-sm mt-2">{event.time}</p>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Progress Section */}
      <section className="py-16 bg-neutral-950 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-3">Future Home</p>
              <h2 className="text-4xl font-bold">New Sanctuary Project</h2>
            </div>
            <Link
              to="/progress"
              className="text-white/70 hover:text-white font-semibold tracking-[0.3em] text-xs uppercase"
            >
              Track Progress →
            </Link>
          </div>
          <div className="mb-8 border border-white/10 rounded-2xl p-6 bg-black">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <span className="text-lg font-semibold text-white/80">Overall Progress</span>
              <span className="text-3xl font-black">{churchInfo.buildingProject.currentProgress}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${churchInfo.buildingProject.currentProgress}%` }}
              />
            </div>
          </div>
          <ProgressTimeline updates={latestUpdates} />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4">Culture</p>
            <h2 className="text-4xl font-bold mb-8">Our G12 Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {g12Values.map((value, index) => (
                <div key={index} className="border border-white/10 rounded-2xl p-6 bg-white/5">
                  <p className="text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border border-white/40 text-white px-10 py-3 rounded-full font-semibold tracking-[0.3em] text-xs uppercase hover:bg-white hover:text-black transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

