import { useState } from 'react';
import ProgressTimeline from '../components/BuildingProgress/ProgressTimeline';
import ProgressGallery from '../components/BuildingProgress/ProgressGallery';
import churchInfo from '../data/church-info.json';
import progressUpdates from '../data/progress-updates.json';

export default function Progress() {
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline' or 'gallery'
  const { buildingProject } = churchInfo;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-wood-dark text-white py-16 border-b border-wood-brown">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Building Progress</h1>
          <p className="text-xl text-gray-200 mb-8">
            Follow along as we build our new sanctuary
          </p>
          
          {/* Overall Progress */}
          <div className="bg-wood-charcoal border border-wood-brown rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-white">Overall Progress</span>
              <span className="text-2xl font-bold text-white">{buildingProject.currentProgress}%</span>
            </div>
            <div className="w-full bg-wood-dark rounded-full h-4 overflow-hidden border border-wood-brown">
              <div
                className="bg-white h-4 rounded-full transition-all duration-500"
                style={{ width: `${buildingProject.currentProgress}%` }}
              />
            </div>
            <div className="mt-4 text-sm text-gray-300">
              <p>Started: {new Date(buildingProject.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p>Estimated Completion: {new Date(buildingProject.estimatedCompletion).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </section>

      {/* View Toggle */}
      <section className="bg-wood-charcoal border-b border-wood-brown sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-4">
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors uppercase tracking-wide ${
                viewMode === 'timeline'
                  ? 'bg-white text-wood-dark'
                  : 'bg-wood-dark text-gray-300 hover:text-white border border-wood-brown'
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => setViewMode('gallery')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors uppercase tracking-wide ${
                viewMode === 'gallery'
                  ? 'bg-white text-wood-dark'
                  : 'bg-wood-dark text-gray-300 hover:text-white border border-wood-brown'
              }`}
            >
              Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-wood-dark">
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

