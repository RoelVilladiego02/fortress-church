import { useState } from 'react';
import ProgressTimeline from '../components/BuildingProgress/ProgressTimeline';
import ProgressGallery from '../components/BuildingProgress/ProgressGallery';
import churchInfo from '../data/church-info.json';
import progressUpdates from '../data/progress-updates.json';
import fundPoster from '../assets/fund/1.jpg';
import fundBank from '../assets/fund/2.jpg';
import fundWork from '../assets/fund/3.jpg';
import fundVision from '../assets/fund/4.jpg';

export default function Progress() {
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline' or 'gallery'
  const { buildingProject } = churchInfo;
  const givingInfo = {
    bank: 'EastWest Bank',
    accountNumber: '200053680746',
    accountName: 'Fortress Life Church Inc.'
  };

  const fundImages = [
    { src: fundBank, span: 'col-span-1', height: 'h-48 md:h-56' },
    { src: fundWork, span: 'col-span-1', height: 'h-48 md:h-56' },
    { src: fundVision, span: 'col-span-2 row-span-2', height: 'h-64 md:h-96' }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header Section */}
      <section className="bg-black py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50 mb-4">Progress</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Building the House</h1>
          <p className="text-xl text-white/70 mb-8">
            Follow along as we prepare a sanctuary for multiplying disciples.
          </p>

          {/* Overall Progress */}
          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <span className="text-lg font-semibold text-white/80">Overall Progress</span>
              <span className="text-3xl font-black">{buildingProject.currentProgress}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${buildingProject.currentProgress}%` }}
              />
            </div>
            <div className="mt-4 text-sm text-white/60 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p>Started: {new Date(buildingProject.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p>Estimated Completion: {new Date(buildingProject.estimatedCompletion).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraising Section */}
      <section className="bg-white text-neutral-900 border-b border-neutral-200">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-neutral-500 mb-4">Fundraising</p>
              <h2 className="text-4xl font-black mb-4">In Aid of Our New Home</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Your generosity builds more than walls—it builds lives. Every peso fuels construction, furnishes the sanctuary,
                and accelerates the G12 vision reaching families across Sta. Rosa and Biñan.
              </p>
              <div className="border border-neutral-200 rounded-3xl p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-neutral-500 mb-2">{givingInfo.bank}</p>
                <p className="text-2xl font-black tracking-wide">{givingInfo.accountNumber}</p>
                <p className="text-neutral-500 text-sm mt-2">{givingInfo.accountName}</p>
              </div>
              <div className="mt-6 text-sm text-neutral-600 space-y-1">
                <p>For inquiries email <span className="font-semibold">{churchInfo.contact.email}</span></p>
                <p>or message us at <span className="font-semibold">{churchInfo.contact.phone}</span></p>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {fundImages.map((image, index) => (
                <div
                  key={index}
                  className={`${image.span} ${image.height} rounded-2xl overflow-hidden bg-neutral-100`}
                >
                  <img
                    src={image.src}
                    alt={`Fortress Church building fund - ${index === 0 ? 'Bank details' : index === 1 ? 'Construction work' : 'Vision'}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* View Toggle */}
      <section className="bg-black/80 border-b border-white/10 sticky top-16 z-40 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-4">
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-6 py-2 rounded-full font-semibold uppercase tracking-[0.3em] text-xs focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
                viewMode === 'timeline'
                  ? 'bg-white text-black'
                  : 'border border-white/30 text-white/70 hover:text-white transition-colors'
              }`}
              aria-pressed={viewMode === 'timeline'}
            >
              Timeline
            </button>
            <button
              onClick={() => setViewMode('gallery')}
              className={`px-6 py-2 rounded-full font-semibold uppercase tracking-[0.3em] text-xs focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
                viewMode === 'gallery'
                  ? 'bg-white text-black'
                  : 'border border-white/30 text-white/70 hover:text-white transition-colors'
              }`}
              aria-pressed={viewMode === 'gallery'}
            >
              Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {viewMode === 'timeline' ? (
            <ProgressTimeline updates={progressUpdates.updates} />
          ) : (
            <ProgressGallery updates={progressUpdates.updates} />
          )}
        </div>
      </section>
    </div>
  );
}

