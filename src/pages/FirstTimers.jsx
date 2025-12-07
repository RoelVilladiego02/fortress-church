import { Link } from 'react-router-dom';
import churchInfo from '../data/church-info.json';
import servicesData from '../data/services.json';
import familyPhoto from '../assets/family.jpg';

export default function FirstTimers() {
  const service = servicesData.serviceTimes?.[0]?.services?.[0];

  const nextSteps = [
    {
      title: 'SUNYL (Starting Up Your New Life)',
      description: 'Four foundational sessions right after salvation that anchor you in Scripture, prayer, and the Holy Spirit.',
      action: 'Happens immediately after Sunday celebration.'
    },
    {
      title: 'PID (Personal Intentional Discipleship)',
      description: 'One-on-one mentoring that helps you heal, grow, and form spiritual disciplines with a coach.',
      action: 'Weekly meetups + daily encouragement for 6–8 weeks.'
    },
    {
      title: 'Join a Cell Group',
      description: 'Every believer belongs to a house-to-house community for worship, Word, and mission.',
      action: 'Cells gather across Biñan, Sta. Rosa, and nearby cities.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="bg-black py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4">First Timers</p>
              <h1 className="text-4xl md:text-5xl font-black mb-6">Welcome Home, First Timer.</h1>
              <p className="text-xl text-white/70">
                We prepared this page just for you. Discover what to expect, how to plan your visit, and what happens after you say yes to Jesus.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
              <img
                src={familyPhoto}
                alt="Fortress Church family celebrating together"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Visit */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="border border-white/10 rounded-3xl p-8 bg-black">
              <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-3">Plan Your Visit</p>
              <h2 className="text-3xl font-bold mb-4">Sunday Celebration</h2>
              <p className="text-white/70 mb-6">
                Every Sunday we gather for worship, the Word, ministry, and connection. Come early for coffee, stay late for conversations.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-1">Time</p>
                  <p className="text-2xl font-black">{service?.time || '3:00 PM – 7:00 PM'}</p>
                  <p className="text-white/60">{service?.name || 'Celebration Service'}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-1">Location</p>
                  <p className="text-lg font-semibold">{churchInfo.address.street}</p>
                  <p className="text-white/60">
                    {churchInfo.address.city}, {churchInfo.address.state} {churchInfo.address.zip}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="px-6 py-3 bg-white text-black rounded-full text-xs font-semibold tracking-[0.3em] uppercase focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-colors"
                >
                  Full Schedule
                </Link>
                <a
                  href={`mailto:${churchInfo.contact.email}`}
                  className="px-6 py-3 border border-white/40 text-white rounded-full text-xs font-semibold tracking-[0.3em] uppercase focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-colors"
                >
                  Ask a Question
                </a>
              </div>
            </div>
            <div className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-3">What to Expect</p>
              <ul className="space-y-6">
                <li>
                  <p className="text-lg font-semibold mb-1">Hosts & Usher Team</p>
                  <p className="text-white/70">Arrive at the Welcome Lounge to meet hosts who will guide you to seating, kids check-in, and cell leaders.</p>
                </li>
                <li>
                  <p className="text-lg font-semibold mb-1">First Timer Card</p>
                  <p className="text-white/70">Fill out a quick connect card so we can plug you into a cell, PID coach, or SUNYL track.</p>
                </li>
                <li>
                  <p className="text-lg font-semibold mb-1">Encounter Invitation</p>
                  <p className="text-white/70">You&apos;ll receive an invitation to the next Encounter Weekend—our immersive retreat where lives are transformed.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-black border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-3">Next Steps</p>
            <h2 className="text-4xl font-bold">What Happens After You Visit?</h2>
            <p className="text-white/70 mt-4">
              We follow the G12 ladder—win, consolidate, disciple, send. Here&apos;s how that looks for every first timer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nextSteps.map((step) => (
              <div key={step.title} className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">{step.action}</p>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Connected */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto border border-white/10 rounded-3xl p-8 bg-black text-center">
            <p className="text-xs uppercase tracking-[0.6em] text-white/50 mb-4">Stay Connected</p>
            <h2 className="text-3xl font-bold mb-4">We would love to hear from you.</h2>
            <p className="text-white/70 mb-6">
              Text, email, or DM us anytime. A leader will reply within 24 hours to pray with you and help you take your next step.
            </p>
            <div className="space-y-2 text-white/80 text-sm">
              <p>
                <span className="font-semibold text-white">Phone:</span> {churchInfo.contact.phone}
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span> {churchInfo.contact.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

