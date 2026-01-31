import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Camera, Maximize2, X } from 'lucide-react';
import { propertyInfo } from '../data/roomPhotos';

const HeroGallery = ({ onPhotoClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  // Fotos principais para o hero (as melhores do apartamento)
  const heroPhotos = [
    { src: '/fotos/Sala-entrada.jpeg', caption: 'Living integrado amplo e iluminado' },
    { src: '/fotos/Suite-master.jpeg', caption: 'Suíte master com armários embutidos' },
    { src: '/fotos/Varanda.jpeg', caption: 'Terraço com vista para a cidade' },
    { src: '/fotos/Cozinha-entrada.jpeg', caption: 'Cozinha planejada completa' },
    { src: '/fotos/Sala-de-jantar.jpeg', caption: 'Sala de jantar elegante' },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroPhotos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroPhotos.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + heroPhotos.length) % heroPhotos.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % heroPhotos.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="hero-gallery">
      <div className="hero-gallery-container">
        {/* Main Image */}
        <div className="hero-main-image">
          {heroPhotos.map((photo, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${photo.src})` }}
            >
              <div className="hero-slide-overlay" />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button className="hero-nav hero-prev" onClick={goToPrevious} aria-label="Foto anterior">
            <ChevronLeft size={28} />
          </button>
          <button className="hero-nav hero-next" onClick={goToNext} aria-label="Próxima foto">
            <ChevronRight size={28} />
          </button>

          {/* Photo Counter */}
          <div className="hero-counter">
            <Camera size={14} />
            <span>{currentIndex + 1} / {heroPhotos.length}</span>
          </div>

          {/* Expand Button */}
          <button
            className="hero-expand"
            onClick={() => onPhotoClick && onPhotoClick('salaEstar')}
            aria-label="Ver todas as fotos"
          >
            <Maximize2 size={18} />
            <span>Ver todas as fotos</span>
          </button>

          {/* Property Info Overlay - Single source of key data */}
          <div className="hero-property-info">
            <div className="hero-info-content">
              <div className="hero-price-tag">
                {formatPrice(propertyInfo.price)}
              </div>
              <div className="hero-specs">
                <span>{propertyInfo.usefulArea}m²</span>
                <span className="spec-divider">•</span>
                <span>{propertyInfo.bedrooms} quartos</span>
                <span className="spec-divider">•</span>
                <span>{propertyInfo.suites} suíte</span>
                <span className="spec-divider">•</span>
                <span>{propertyInfo.parkingSpots} vagas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="hero-thumbnails">
          {heroPhotos.map((photo, index) => (
            <button
              key={index}
              className={`hero-thumb ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <img src={photo.src} alt={photo.caption} />
              {index === currentIndex && <div className="thumb-progress" />}
            </button>
          ))}
        </div>

        {/* Dots for mobile */}
        <div className="hero-dots">
          {heroPhotos.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para foto ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video CTA */}
      <button
        className="hero-video-cta"
        onClick={() => setShowVideoModal(true)}
      >
        <Play size={18} />
        <span>Tour Virtual</span>
      </button>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="video-modal-overlay" onClick={() => setShowVideoModal(false)}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setShowVideoModal(false)}>
              <X size={24} />
            </button>
            <video
              controls
              autoPlay
              className="video-player"
              src="/fotos/tour-virtual.mp4"
            >
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroGallery;
