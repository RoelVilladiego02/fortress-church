import churchInfo from '../data/church-info.json';
import pastorInfo from '../data/pastor.json';
import pastorsImage from '../assets/pastors/pastors.jpg';

export default function About() {
  const { g12Vision } = churchInfo;
  const { seniorPastors } = pastorInfo;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header Section */}
      <section className="bg-black py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Fortress Church</h1>
          <p className="text-xl text-white/70 max-w-3xl">{churchInfo.tagline}</p>
        </div>
      </section>

      {/* Mission + G12 */}
      <section className="py-16 border-b border-white/10 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Mission</p>
              <h2 className="text-3xl font-bold mb-4">Why We Exist</h2>
              <p className="text-white/80 leading-relaxed">{churchInfo.mission}</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">G12 Vision</p>
              <h2 className="text-3xl font-bold mb-4">{g12Vision.theme}</h2>
              <p className="text-white/80 leading-relaxed">{g12Vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* G12 Pillars */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4 text-center">Blueprint</p>
          <h2 className="text-3xl font-bold text-center mb-10">G12 Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {g12Vision.pillars.map((pillar) => (
              <div key={pillar.title} className="border border-white/10 rounded-2xl p-6 bg-black">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">{pillar.title}</p>
                <p className="text-white/75">{pillar.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Project Section */}
      <section className="py-16 border-b border-white/10 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4">Our New Home</p>
            <h2 className="text-3xl font-bold mb-6">{churchInfo.buildingProject.name}</h2>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <p className="text-white/80 leading-relaxed mb-6">
                {churchInfo.buildingProject.description}
              </p>

              <div className="mb-8 border border-white/10 rounded-2xl p-6 bg-black">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">Location</p>
                <p className="text-white/80 font-semibold">
                  {churchInfo.address.street}
                  <br />
                  {churchInfo.address.city}, {churchInfo.address.state} {churchInfo.address.zip}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-white mb-2">Project Start</h4>
                  <p className="text-white/70">
                    {new Date(churchInfo.buildingProject.startDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Completed</h4>
                  <p className="text-white/70">
                    {new Date(churchInfo.buildingProject.estimatedCompletion).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Status</h4>
                  <p className="text-white/70">Completed - We've moved in!</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Progress</h4>
                  <p className="text-white/70">{churchInfo.buildingProject.currentProgress}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 border-b border-white/10 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4 text-center">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Meet our Senior Pastors</h2>
            
            {/* Image first, then content below */}
            <div className="space-y-8">
              {/* Landscape image */}
              <div className="border border-white/10 rounded-3xl overflow-hidden bg-white/5 shadow-2xl">
                <img 
                  src={pastorsImage} 
                  alt="Senior Pastors James and Kate" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content below image */}
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{seniorPastors.title}</h3>
                  <p className="text-white/80 leading-relaxed text-base md:text-lg">
                    {seniorPastors.bio}
                  </p>
                </div>

                {/* Two separate details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  {seniorPastors.pastors.map((pastor, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-semibold mb-3 text-white">{pastor.name}</h4>
                      <p className="text-white/70 leading-relaxed">
                        {pastor.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <div className="border border-white/10 rounded-2xl p-8 bg-black">
              <div className="space-y-4 text-white/80">
                <div>
                  <h3 className="font-semibold text-white mb-2">Address</h3>
                  <p>
                    {churchInfo.address.street}<br />
                    {churchInfo.address.city}, {churchInfo.address.state} {churchInfo.address.zip}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Contact</h3>
                  <p>
                    <strong>Phone:</strong> {churchInfo.contact.phone}<br />
                    <strong>Email:</strong> {churchInfo.contact.email}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Pastor</h3>
                  <p>{churchInfo.contact.pastor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

