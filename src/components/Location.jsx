import { MapPin, GraduationCap, Train, Landmark } from 'lucide-react';

const Location = () => {
  const nearbyPlaces = [
    {
      icon: GraduationCap,
      name: 'PUC-SP',
      distance: '5 min',
      description: 'de carro'
    },
    {
      icon: Landmark,
      name: 'Allianz Parque',
      distance: '10 min',
      description: 'de carro'
    },
    {
      icon: Train,
      name: 'Metrô Barra Funda',
      distance: '15 min',
      description: 'de carro'
    },
  ];

  return (
    <section className="location-section">
      <h2 className="section-title">Localização</h2>

      <div className="location-address">
        <MapPin size={20} />
        <span>Perdizes, São Paulo - SP</span>
      </div>

      <div className="location-content">
        <div className="map-container">
          <iframe
            title="Localização do apartamento"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14630.641441167887!2d-46.68500000000001!3d-23.538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579797b13f9f%3A0x4a5a5a5a5a5a5a5a!2sPerdizes%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1706789012345!5m2!1spt-BR!2sbr"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="nearby-places">
          <h3 className="nearby-title">Pontos de referência</h3>
          <div className="nearby-grid">
            {nearbyPlaces.map((place, index) => (
              <div key={index} className="nearby-card">
                <place.icon className="nearby-icon" size={28} />
                <div className="nearby-info">
                  <span className="nearby-name">{place.name}</span>
                  <span className="nearby-distance">
                    {place.distance} {place.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="neighborhood-info">
        <h3>Sobre Perdizes</h3>
        <p>
          Um dos bairros mais tradicionais e arborizados de São Paulo, Perdizes combina
          qualidade de vida com excelente infraestrutura. Ruas tranquilas, comércio
          diversificado, hospitais renomados e fácil acesso às principais vias da cidade.
        </p>
      </div>
    </section>
  );
};

export default Location;
