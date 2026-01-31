import { useState, useEffect } from 'react';
import { MapPin, Menu, X, Phone } from 'lucide-react';
import { propertyInfo } from '../data/roomPhotos';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const scrollToSection = (sectionClass) => {
    setIsMobileMenuOpen(false);
    document.querySelector(`.${sectionClass}`)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const navItems = [
    { label: 'Galeria', section: 'hero-gallery' },
    { label: 'Planta', section: 'floor-plan-container' },
    { label: 'Bairro', section: 'neighborhood-section' },
    { label: 'Localização', section: 'location-section' },
    { label: 'Contato', section: 'contact-section' },
  ];

  return (
    <header className={`header-new ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-new-content">
        {/* Logo/Title */}
        <div className="header-brand">
          <div className="header-logo-new">
            <div className="logo-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Building icon stylized */}
                <rect x="8" y="14" width="24" height="22" rx="2" fill="currentColor" opacity="0.2"/>
                <rect x="12" y="18" width="6" height="6" rx="1" fill="currentColor"/>
                <rect x="22" y="18" width="6" height="6" rx="1" fill="currentColor"/>
                <rect x="12" y="27" width="6" height="9" rx="1" fill="currentColor"/>
                <rect x="22" y="27" width="6" height="6" rx="1" fill="currentColor"/>
                {/* Roof */}
                <path d="M4 16L20 4L36 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="header-title-group">
            <h1>{propertyInfo.name}</h1>
            <p className="header-address">
              <MapPin size={11} />
              Perdizes, São Paulo
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          {navItems.map((item) => (
            <button
              key={item.section}
              className="nav-link"
              onClick={() => scrollToSection(item.section)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Price & CTA */}
        <div className="header-actions">
          <div className={`header-price-compact ${isScrolled ? 'show' : ''}`}>
            <span className="price-tag">{formatPrice(propertyInfo.price)}</span>
          </div>
          <button
            onClick={() => scrollToSection('contact-section')}
            className="header-cta-new"
          >
            <Phone size={16} />
            <span>Falar com Corretor</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.section}
              className="mobile-nav-link"
              onClick={() => scrollToSection(item.section)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <div className="mobile-price">{formatPrice(propertyInfo.price)}</div>
          <button
            onClick={() => scrollToSection('contact-section')}
            className="mobile-cta"
          >
            Falar com Corretor
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
