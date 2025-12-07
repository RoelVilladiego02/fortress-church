import churchInfo from '../data/church-info.json';
import servicesData from '../data/services.json';

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

      {/* Service Times */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Celebration Services</h2>
            <div className="space-y-8">
              {servicesData.serviceTimes.map((day, dayIndex) => (
                <div key={dayIndex} className="border border-white/10 rounded-2xl p-6 bg-black">
                  <h3 className="text-2xl font-semibold mb-6">{day.day}</h3>
                  <div className="space-y-6">
                    {day.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="pt-6 border-t border-white/10 first:border-t-0 first:pt-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold mb-2">{service.name}</h4>
                            <p className="text-white/70 leading-relaxed">{service.description}</p>
                          </div>
                          <div className="text-left md:text-right">
                            <div className="text-2xl font-black mb-1">{service.time}</div>
                            <div className="text-white/50 text-sm">{day.day}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* G12 Rhythms */}
      {g12Rhythms.length > 0 && (
        <section className="py-16 border-b border-white/10 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4 text-center">Beyond Sunday</p>
              <h2 className="text-4xl font-bold text-center mb-10">G12 Rhythms</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {g12Rhythms.map((rhythm) => (
                  <div key={rhythm.title} className="border border-white/10 rounded-2xl p-6 bg-white/5">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">{rhythm.day} • {rhythm.time}</p>
                    <h3 className="text-xl font-semibold mb-3">{rhythm.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{rhythm.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Location */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Where We Meet</h2>
            <div className="border border-white/10 rounded-2xl p-8 bg-black">
              <p className="text-lg text-white/80 mb-4">{servicesData.location}</p>
              
              {/* Address */}
              <div>
                <p className="text-white font-semibold mb-2">Address</p>
                <p className="text-white/70 leading-relaxed">
                  {churchInfo.address.street}<br />
                  {churchInfo.address.city}, {churchInfo.address.state} {churchInfo.address.zip}
                </p>
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

