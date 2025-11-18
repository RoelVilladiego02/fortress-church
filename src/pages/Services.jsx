import churchInfo from '../data/church-info.json';
import servicesData from '../data/services.json';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-wood-dark text-white py-16 border-b border-wood-brown">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Services</h1>
          <p className="text-xl text-gray-200">Join us for worship, teaching, and fellowship</p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-wood-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-tight">Service Schedule</h2>
            <div className="space-y-8">
              {servicesData.serviceTimes.map((day, dayIndex) => (
                <div key={dayIndex} className="bg-wood-dark border border-wood-brown rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">{day.day}</h3>
                  <div className="space-y-6">
                    {day.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="border-t border-wood-brown pt-6 first:border-t-0 first:pt-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                            <p className="text-gray-300 leading-relaxed">{service.description}</p>
                          </div>
                          <div className="md:text-right">
                            <div className="text-2xl font-bold text-white mb-1">{service.time}</div>
                            <div className="text-gray-400 text-sm">{day.day}</div>
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

      {/* Location */}
      <section className="py-16 bg-wood-dark border-y border-wood-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight text-center">Location</h2>
            <div className="bg-wood-charcoal border border-wood-brown rounded-lg p-8 text-center">
              <p className="text-lg text-gray-200 mb-4">{servicesData.location}</p>
              <div className="mt-6">
                <p className="text-white font-semibold mb-2">Our Address</p>
                <p className="text-gray-300">
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
        <section className="py-16 bg-wood-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Watch Online</h2>
              <div className="bg-wood-dark border border-wood-brown rounded-lg p-8">
                <p className="text-lg text-gray-200 mb-6">{servicesData.livestream.description}</p>
                <a
                  href={servicesData.livestream.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-wood-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors uppercase tracking-wide"
                >
                  Watch Live
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="py-16 bg-wood-dark border-t border-wood-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Questions?</h2>
            <div className="bg-wood-charcoal border border-wood-brown rounded-lg p-8">
              <p className="text-gray-200 mb-4">
                Have questions about our services? We'd love to hear from you!
              </p>
              <div className="space-y-2 text-gray-300">
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

