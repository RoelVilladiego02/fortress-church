import eventsData from '../data/events.json';
import ImageGrid from '../components/ImageGrid';

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

      {/* Highlights with Images */}
      <section className="py-16 border-b border-white/10 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Featured Events</h2>
            
            {/* Image Gallery */}
            <div className="mb-10">
              <ImageGrid 
                images={[
                  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop', alt: 'Encounter retreats', overlay: 'Encounter' },
                  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'School of Leaders', overlay: 'Leaders' },
                  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Community outreach', overlay: 'Outreach' }
                ]}
                columns={3}
                gap={4}
              />
            </div>

            {/* Event Highlights (condensed) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlight.map((item) => (
                <div key={item.title} className="border border-white/10 rounded-xl p-4 bg-white/5">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events List - Compact */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          {upcomingEvents.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Upcoming</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-white/10 rounded-2xl p-6 bg-black hover:border-white/30 transition">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-xs text-white/50 uppercase tracking-[0.3em] mb-1">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                      </div>
                      <span className="px-2 py-1 border border-white/30 rounded text-xs uppercase tracking-[0.3em] text-white/60">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm mb-2">{event.time}</p>
                    <p className="text-white/60 text-xs line-clamp-2">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto text-center">
              <div className="border border-white/10 rounded-2xl p-12 bg-black">
                <p className="text-xl text-white/80 mb-2">No upcoming events</p>
                <p className="text-white/60">Check back soon</p>
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

