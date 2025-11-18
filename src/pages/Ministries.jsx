import ministriesData from '../data/ministries.json';

export default function Ministries() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-wood-dark text-white py-16 border-b border-wood-brown">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Ministries</h1>
          <p className="text-xl text-gray-200">Find your place to grow, serve, and connect</p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 bg-wood-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministriesData.ministries.map((ministry, index) => (
              <div key={index} className="bg-wood-dark border border-wood-brown rounded-lg p-6 hover:border-wood-light transition-all">
                <h3 className="text-xl font-semibold text-white mb-3">{ministry.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{ministry.description}</p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">
                    <span className="font-semibold text-gray-300">Meets:</span> {ministry.meets}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-semibold text-gray-300">Contact:</span>{' '}
                    <a href={`mailto:${ministry.contact}`} className="text-white hover:text-gray-300 transition-colors">
                      {ministry.contact}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-wood-dark border-y border-wood-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Get Involved</h2>
            <div className="bg-wood-charcoal border border-wood-brown rounded-lg p-8">
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                We believe everyone has a place to serve and grow. Whether you're interested in joining a ministry,
                starting a new one, or just want to learn more, we'd love to connect with you.
              </p>
              <p className="text-gray-300">
                Contact us at <a href="mailto:info@fortresschurch.org" className="text-white hover:text-gray-300 transition-colors">info@fortresschurch.org</a> to learn more about getting involved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

