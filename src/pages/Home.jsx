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

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 bg-wood-charcoal border-y border-wood-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center uppercase tracking-tight">Join Us This Sunday</h2>
            <div className="space-y-6">
              {servicesData.serviceTimes[0].services.map((service, index) => (
                <div key={index} className="bg-wood-dark border border-wood-brown rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.time}</div>
                      <div className="text-gray-400 text-sm">Sunday</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/services"
                className="inline-block bg-white text-wood-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors uppercase tracking-wide"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-16 bg-wood-dark">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Our Ministries</h2>
            <Link
              to="/ministries"
              className="text-white hover:text-gray-300 font-semibold transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredMinistries.map((ministry, index) => (
              <div key={index} className="bg-wood-charcoal border border-wood-brown rounded-lg p-6 hover:border-wood-light transition-all">
                <h3 className="text-xl font-semibold text-white mb-3">{ministry.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{ministry.description}</p>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="font-semibold">Meets:</span> {ministry.meets}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-wood-charcoal border-y border-wood-brown">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Upcoming Events</h2>
            <Link
              to="/events"
              className="text-white hover:text-gray-300 font-semibold transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-wood-dark border border-wood-brown rounded-lg p-6 hover:border-wood-light transition-all">
                <div className="mb-3">
                  <div className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{event.time}</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Progress Section */}
      <section className="py-16 bg-wood-dark">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Building Progress</h2>
            <Link
              to="/progress"
              className="text-white hover:text-gray-300 font-semibold transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="mb-8 bg-wood-charcoal border border-wood-brown rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-white">Overall Progress</span>
              <span className="text-2xl font-bold text-white">{churchInfo.buildingProject.currentProgress}%</span>
            </div>
            <div className="w-full bg-wood-dark rounded-full h-4 overflow-hidden border border-wood-brown">
              <div
                className="bg-white h-4 rounded-full transition-all duration-500"
                style={{ width: `${churchInfo.buildingProject.currentProgress}%` }}
              />
            </div>
          </div>
          <ProgressTimeline updates={latestUpdates} />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-wood-charcoal border-t border-wood-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {churchInfo.values.map((value, index) => (
                <div key={index} className="bg-wood-dark border border-wood-brown rounded-lg p-4">
                  <p className="text-gray-200 font-medium">{value}</p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-block bg-white text-wood-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors uppercase tracking-wide"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

