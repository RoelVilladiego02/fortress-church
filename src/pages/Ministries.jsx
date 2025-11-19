import ministriesData from '../data/ministries.json';

export default function Ministries() {
  const streams = ministriesData.g12Streams || [];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header Section */}
      <section className="bg-black py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4">Ministries</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Cells, Streams & Teams</h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Every disciple belongs to a cell, serves on a team, and carries the G12 Vision into their world.
          </p>
        </div>
      </section>

      {/* G12 Streams */}
      {streams.length > 0 && (
        <section className="py-16 border-b border-white/10 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4 text-center">Discipleship Flow</p>
              <h2 className="text-4xl font-bold text-center mb-10">G12 Streams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {streams.map((stream) => (
                  <div key={stream.title} className="border border-white/10 rounded-2xl p-6 bg-white/5">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">{stream.rhythm}</p>
                    <h3 className="text-2xl font-semibold mb-3">{stream.title}</h3>
                    <p className="text-white/70 mb-3">{stream.focus}</p>
                    <p className="text-sm text-white/60">{stream.nextStep}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ministries Grid */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministriesData.ministries.map((ministry, index) => (
              <div key={index} className="border border-white/10 rounded-2xl p-6 bg-black hover:border-white/30 transition">
                <h3 className="text-2xl font-semibold mb-3">{ministry.name}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{ministry.description}</p>
                <div className="space-y-2 text-sm text-white/60">
                  {/* <p>
                    <span className="font-semibold text-white/80">Meets:</span> {ministry.meets}
                  </p>
                  <p>
                    <span className="font-semibold text-white/80">Contact:</span>{' '}
                    <a href={`mailto:${ministry.contact}`} className="text-white hover:text-white/70 transition-colors">
                      {ministry.contact}
                    </a>
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <div className="border border-white/10 rounded-2xl p-8 bg-black">
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                There is room at the table for you. Whether you&apos;re ready to host a cell, co-lead a stream,
                or simply explore, we will walk with you.
              </p>
              <p className="text-white/70">
                Email us at{' '}
                <a href="mailto:fortresschurchph@gmail.com" className="text-white hover:text-white/70 transition-colors">
                  fortresschurchph@gmail.com
                </a>{' '}
                to get started.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

