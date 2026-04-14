import ministriesData from '../data/ministries.json';
import ImageGrid from '../components/ImageGrid';

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

      {/* G12 Streams with Images */}
      {streams.length > 0 && (
        <section className="py-16 border-b border-white/10 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4 text-center">Discipleship Flow</p>
              <h2 className="text-4xl font-bold text-center mb-10">G12 Streams</h2>
              
              {/* Image Gallery */}
              <div className="mb-10">
                <ImageGrid 
                  images={[
                    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop', alt: 'Encounter retreat', overlay: 'Encounter' },
                    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Consolidation groups', overlay: 'Consolidate' },
                    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'School of Leaders', overlay: 'Disciple' }
                  ]}
                  columns={3}
                  gap={4}
                />
              </div>

              {/* Stream Details (condensed) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {streams.map((stream) => (
                  <div key={stream.title} className="border border-white/10 rounded-xl p-4 bg-white/5">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-1">{stream.rhythm}</p>
                    <h3 className="font-semibold mb-2">{stream.title}</h3>
                    <p className="text-white/60 text-xs line-clamp-2">{stream.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ministries Grid with Images */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4 text-center">Ministry Teams</p>
          <h2 className="text-3xl font-bold text-center mb-10">Our Ministries</h2>
          
          {/* Image Gallery */}
          <div className="mb-10 max-w-5xl mx-auto">
            <ImageGrid 
              images={[
                { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Worship ministry', overlay: 'Worship' },
                { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Youth ministry', overlay: 'Youth' },
                { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Outreach', overlay: 'Outreach' },
                { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Children ministry', overlay: 'Kids' },
                { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Admin team', overlay: 'Support' },
                { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Tech ministry', overlay: 'Tech' }
              ]}
              columns={3}
              gap={4}
            />
          </div>

          {/* Ministry Cards (condensed with 3 columns) */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ministriesData.ministries.map((ministry, index) => (
                <div key={index} className="border border-white/10 rounded-xl p-4 bg-black/50 hover:border-white/30 transition">
                  <h3 className="font-bold mb-2 line-clamp-1">{ministry.name}</h3>
                  <p className="text-white/70 text-xs line-clamp-2">{ministry.description}</p>
                </div>
              ))}
            </div>
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

