import ProgressCard from './ProgressCard';

export default function ProgressTimeline({ updates }) {
  // Sort updates by date (newest first)
  const sortedUpdates = [...updates].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="space-y-6">
      {sortedUpdates.map((update) => (
        <ProgressCard key={update.id} update={update} />
      ))}
    </div>
  );
}

