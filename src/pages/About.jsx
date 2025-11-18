import churchInfo from '../data/church-info.json';
import teamInfo from '../data/team.json';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-wood-dark text-white py-16 border-b border-wood-brown">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">About Fortress Church</h1>
          <p className="text-xl text-gray-200">{churchInfo.tagline}</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-wood-charcoal border-b border-wood-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Our Mission</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              {churchInfo.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Building Project Section */}
      <section className="py-16 bg-wood-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Our Building Project</h2>
            <div className="bg-wood-charcoal border border-wood-brown rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {churchInfo.buildingProject.name}
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                {churchInfo.buildingProject.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-white mb-2">Project Start</h4>
                  <p className="text-gray-300">
                    {new Date(churchInfo.buildingProject.startDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Estimated Completion</h4>
                  <p className="text-gray-300">
                    {new Date(churchInfo.buildingProject.estimatedCompletion).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Current Progress</h4>
                  <p className="text-gray-300">{churchInfo.buildingProject.currentProgress}%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Goal</h4>
                  <p className="text-gray-300">{churchInfo.buildingProject.goal}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-wood-charcoal border-y border-wood-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center uppercase tracking-tight">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamInfo.leadership.map((member, index) => (
                <div key={index} className="bg-wood-dark border border-wood-brown rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-300 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-200">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-wood-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Get In Touch</h2>
            <div className="bg-wood-charcoal border border-wood-brown rounded-lg p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">
                    {churchInfo.address.street}<br />
                    {churchInfo.address.city}, {churchInfo.address.state} {churchInfo.address.zip}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Contact Information</h3>
                  <p className="text-gray-300">
                    <strong>Phone:</strong> {churchInfo.contact.phone}<br />
                    <strong>Email:</strong> {churchInfo.contact.email}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Pastor</h3>
                  <p className="text-gray-300">{churchInfo.contact.pastor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

