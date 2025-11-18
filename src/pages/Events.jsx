import eventsData from '../data/events.json';

export default function Events() {
  const upcomingEvents = [...eventsData.upcomingEvents]
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const eventTypes = {
    worship: 'Worship',
    fellowship: 'Fellowship',
    outreach: 'Outreach',
    other: 'Other'
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-wood-dark text-white py-16 border-b border-wood-brown">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Events</h1>
          <p className="text-xl text-gray-200">Join us for upcoming events and gatherings</p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-wood-charcoal">
        <div className="container mx-auto px-4">
          {upcomingEvents.length > 0 ? (
            <div className="max-w-4xl mx-auto space-y-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-wood-dark border border-wood-brown rounded-lg p-6 hover:border-wood-light transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-white text-wood-dark px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                          {eventTypes[event.type] || 'Event'}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span>
                          <span className="font-semibold text-gray-300">Time:</span> {event.time}
                        </span>
                        <span>
                          <span className="font-semibold text-gray-300">Location:</span> {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-wood-dark border border-wood-brown rounded-lg p-12">
                <p className="text-xl text-gray-300 mb-4">No upcoming events scheduled</p>
                <p className="text-gray-400">Check back soon for upcoming events and gatherings!</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16 bg-wood-dark border-t border-wood-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Stay Connected</h2>
            <div className="bg-wood-charcoal border border-wood-brown rounded-lg p-8">
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Want to stay updated on all our events? Follow us on social media or contact us to be added to our newsletter.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://facebook.com/fortresschurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-wood-dark px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors uppercase tracking-wide"
                >
                  Facebook
                </a>
                <a
                  href="mailto:info@fortresschurch.org"
                  className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-wood-dark transition-colors uppercase tracking-wide"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

