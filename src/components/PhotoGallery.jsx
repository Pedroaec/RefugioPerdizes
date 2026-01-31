import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { roomPhotos } from '../data/roomPhotos';

const PhotoGallery = ({ roomId, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const room = roomPhotos[roomId];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!room) return null;

  const photos = room.photos;

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleSwipe = (e) => {
    const touch = e.changedTouches[0];
    const startX = e.target.dataset.startX;
    const diff = touch.clientX - startX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prevPhoto();
      else nextPhoto();
    }
  };

  const handleTouchStart = (e) => {
    e.target.dataset.startX = e.touches[0].clientX;
  };

  return (
    <div className="gallery-overlay" onClick={onClose}>
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-title">
            <h3>{room.name}</h3>
            <span className="gallery-area">{room.area}</span>
          </div>
          <button className="gallery-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Main Image */}
        <div
          className="gallery-main"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleSwipe}
        >
          {photos.length > 1 && (
            <button className="gallery-nav gallery-prev" onClick={prevPhoto}>
              <ChevronLeft size={32} />
            </button>
          )}

          <img
            src={`/fotos/${photos[currentIndex]}`}
            alt={`${room.name} - Foto ${currentIndex + 1}`}
            className="gallery-image"
          />

          {photos.length > 1 && (
            <button className="gallery-nav gallery-next" onClick={nextPhoto}>
              <ChevronRight size={32} />
            </button>
          )}

          <div className="gallery-counter">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>

        {/* Thumbnails */}
        {photos.length > 1 && (
          <div className="gallery-thumbnails">
            {photos.map((photo, index) => (
              <button
                key={photo}
                className={`gallery-thumb ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={`/fotos/${photo}`}
                  alt={`Thumbnail ${index + 1}`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}

        {/* Video Tour Button */}
        <a
          href="/fotos/00_Video_Tour_Apartamento.mp4"
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-video-btn"
        >
          <Play size={20} />
          Ver Tour em Vídeo
        </a>
      </div>
    </div>
  );
};

export default PhotoGallery;
