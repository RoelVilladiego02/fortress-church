import { motion } from 'framer-motion';

export default function ImageGrid({ images = [], columns = 3, gap = 4, variant = 'default' }) {
  // Generate placeholder image if none provided
  const displayImages = images.length > 0 
    ? images 
    : Array(columns).fill(null).map((_, i) => ({
        src: `https://images.unsplash.com/photo-${1600000000 + i}?w=500&h=400&fit=crop`,
        alt: `Image ${i + 1}`
      }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-${gap}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {displayImages.map((image, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-3xl border border-white/10 aspect-video group"
          variants={itemVariants}
        >
          <img
            src={image.src}
            alt={image.alt || `Gallery image ${index + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {image.overlay && (
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <p className="text-white font-semibold text-lg">{image.overlay}</p>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
