import churchInfo from '../data/church-info.json';
import servicesData from '../data/services.json';
import ImageGrid from '../components/ImageGrid';

export default function Services() {
  const g12Rhythms = servicesData.g12Rhythms || [];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header Section */}
      <section className="bg-black text-white py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Worship & Weekly Rhythm</h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Every gathering fuels the G12 ladder—encounter, consolidation, discipleship, and sending.
          </p>
        </div>
      </section>

      {/* Service Times - Simplified */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Celebration Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesData.serviceTimes.map((day, dayIndex) => (
                <div key={dayIndex} className="border border-white/10 rounded-2xl p-6 bg-black">
                  <h3 className="text-xl font-semibold mb-4">{day.day}</h3>
                  <div className="space-y-3">
                    {day.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="pb-3 border-b border-white/10 last:border-0 last:pb-0">
                        <h4 className="font-semibold text-white/90 mb-1">{service.name}</h4>
                        <p className="text-sm text-white/60">{service.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* G12 Rhythms with Images */}
      {g12Rhythms.length > 0 && (
        <section className="py-16 border-b border-white/10 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4 text-center">Beyond Sunday</p>
              <h2 className="text-4xl font-bold text-center mb-10">G12 Rhythms</h2>
              
              {/* Image Gallery */}
              <div className="mb-10">
                <ImageGrid 
                  images={[
                    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Cell group', overlay: 'Cells' },
                    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop', alt: 'Leaders retreat', overlay: 'Leaders' },
                    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Encounter', overlay: 'Growth' }
                  ]}
                  columns={3}
                  gap={4}
                />
              </div>

              {/* Rhythm Details (condensed) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {g12Rhythms.map((rhythm) => (
                  <div key={rhythm.title} className="border border-white/10 rounded-xl p-4 bg-white/5">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">{rhythm.day}</p>
                    <h3 className="font-semibold mb-1">{rhythm.title}</h3>
                    <p className="text-white/60 text-xs line-clamp-2">{rhythm.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Location - Visual Focus */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Find Us</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Location Map/Image */}
            <div className="rounded-3xl overflow-hidden border border-white/10 h-64 md:h-80">
              <img 
                src="https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=600&h=400&fit=crop"
                alt="Location map"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Details */}
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">Address</p>
                <p className="text-white/80 font-semibold">
                  {churchInfo.address.street}<br />
                  {churchInfo.address.city}, {churchInfo.address.state} {churchInfo.address.zip}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">Parking</p>
                <p className="text-white/70">Free parking on-site</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">Access</p>
                <p className="text-white/70">Accessible facilities • Nursery available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livestream */}
      {servicesData.livestream.available && (
        <section className="py-16 border-b border-white/10 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Watch Online</h2>
              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <p className="text-lg text-white/80 mb-6">{servicesData.livestream.description}</p>
                <a
                  href={servicesData.livestream.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white/40 text-white px-10 py-3 rounded-full font-semibold tracking-[0.3em] text-xs uppercase hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-colors"
                >
                  Watch Live
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Questions?</h2>
            <div className="border border-white/10 rounded-2xl p-8 bg-black">
              <p className="text-white/70 mb-6">
                Have questions about our gatherings or how to plug into the G12 process? We would love to connect.
              </p>
              <div className="space-y-2 text-white/80">
                <p><strong className="text-white">Phone:</strong> {churchInfo.contact.phone}</p>
                <p><strong className="text-white">Email:</strong> {churchInfo.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

