export default function ProgressGallery({ updates }) {
  // Extract all photos from all updates
  const allPhotos = updates
    .flatMap(update =>
      (update.photos || []).map(photo => ({
        url: `/progress-photos/${photo}`,
        title: update.title,
        date: update.date,
        updateId: update.id
      }))
    )
    .reverse(); // Newest first

  if (allPhotos.length === 0) {
    return (
      <div className="text-center py-12 text-white/60">
        <p>No photos available yet. Check back soon for construction updates!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {allPhotos.map((photo, index) => (
        <div
          key={index}
          className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer border border-white/10 bg-white/5"
        >
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `
                <div class="w-full h-full flex items-center justify-center text-white/40">
                  <p class="text-sm">Photo unavailable</p>
                </div>
              `;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white">
              <p className="text-sm font-semibold">{photo.title}</p>
              <p className="text-xs text-white/70">
                {new Date(photo.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

