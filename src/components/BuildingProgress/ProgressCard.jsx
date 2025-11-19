export default function ProgressCard({ update }) {
  const date = new Date(update.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-black hover:border-white/30 transition">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              {update.title}
            </h3>
            <p className="text-white/50 text-sm">{formattedDate}</p>
          </div>
          {update.milestone && (
            <span className="px-3 py-1 rounded-full border border-white/40 text-xs uppercase tracking-[0.3em]">
              Milestone
            </span>
          )}
        </div>

        <p className="text-white/75 mb-4 leading-relaxed">
          {update.description}
        </p>

        {update.progress_percentage && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-white/60">Progress</span>
              <span className="text-sm font-semibold text-white">
                {update.progress_percentage}%
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
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
                className="aspect-video bg-white/5 rounded overflow-hidden"
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

