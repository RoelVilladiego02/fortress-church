import eventsData from '../data/events.json';

export default function Events() {
  const upcomingEvents = [...eventsData.upcomingEvents]
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const eventTypes = {
    worship: 'Worship',
    fellowship: 'Fellowship',
    outreach: 'Outreach',
    discipleship: 'Discipleship',
    other: 'Activation'
  };

  const highlight = [
    { title: 'Encounter', description: '48-hours of healing & deliverance' },
    { title: 'School of Leaders', description: 'Training tracks for emerging leaders' },
    { title: 'Cells on Mission', description: 'Community outreaches led by every twelve' }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header Section */}
      <section className="bg-black py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4">Events</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">G12 Calendar</h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Every date on our calendar serves the ladder: win, consolidate, disciple, send.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 border-b border-white/10 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlight.map((item) => (
              <div key={item.title} className="border border-white/10 rounded-2xl p-6 bg-white/5">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">{item.title}</p>
                <p className="text-white/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          {upcomingEvents.length > 0 ? (
            <div className="max-w-4xl mx-auto space-y-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-white/10 rounded-2xl p-6 bg-black">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 border border-white/30 rounded-full text-xs uppercase tracking-[0.4em] text-white/70">
                        {eventTypes[event.type] || eventTypes.other}
                      </span>
                      <span className="text-white/60 text-sm">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold">{event.title}</h3>
                    <p className="text-white/70 leading-relaxed">{event.description}</p>
                    <div className="flex flex-wrap gap-6 text-sm text-white/60">
                      <span>
                        <span className="font-semibold text-white/80">Time:</span> {event.time}
                      </span>
                      <span>
                        <span className="font-semibold text-white/80">Location:</span> {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto text-center">
              <div className="border border-white/10 rounded-2xl p-12 bg-black">
                <p className="text-xl text-white/80 mb-4">No upcoming events scheduled</p>
                <p className="text-white/60">Check back soon or follow us on social for the latest updates.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
            <div className="border border-white/10 rounded-2xl p-8 bg-black">
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Get event reminders, Encounter registrations, and School of Leaders updates directly in your inbox.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61576246697187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full border border-white/40 text-white text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="mailto:info@fortresschurch.org"
                  className="px-8 py-3 rounded-full border border-white/40 text-white text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors"
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

