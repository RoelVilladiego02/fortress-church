export default function ProgressCard({ update }) {
  const date = new Date(update.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-wood-charcoal border border-wood-brown rounded-lg overflow-hidden hover:border-wood-light transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              {update.title}
            </h3>
            <p className="text-gray-400 text-sm">{formattedDate}</p>
          </div>
          {update.milestone && (
            <span className="bg-white text-wood-dark px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
              Milestone
            </span>
          )}
        </div>
        
        <p className="text-gray-200 mb-4 leading-relaxed">
          {update.description}
        </p>

        {update.progress_percentage && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-300">Progress</span>
              <span className="text-sm font-semibold text-white">
                {update.progress_percentage}%
              </span>
            </div>
            <div className="w-full bg-wood-dark rounded-full h-2 border border-wood-brown">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${update.progress_percentage}%` }}
              />
            </div>
          </div>
        )}

        {update.photos && update.photos.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {update.photos.map((photo, index) => (
              <div
                key={index}
                className="aspect-video bg-gray-200 rounded overflow-hidden"
              >
                <img
                  src={`/progress-photos/${photo}`}
                  alt={`${update.title} - Photo ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

