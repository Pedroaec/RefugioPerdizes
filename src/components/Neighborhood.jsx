import { TreePine, Coffee, ShoppingBag, Heart, GraduationCap, Bus, Shield, Utensils } from 'lucide-react';

const Neighborhood = () => {
  const highlights = [
    {
      icon: TreePine,
      title: 'Qualidade de Vida',
      description: 'Ruas arborizadas e tranquilas, ideal para famílias'
    },
    {
      icon: GraduationCap,
      title: 'Educação',
      description: 'PUC-SP, Colégio Santa Marcelina, Mackenzie'
    },
    {
      icon: Heart,
      title: 'Saúde',
      description: 'Hospital São Camilo e diversas clínicas'
    },
    {
      icon: ShoppingBag,
      title: 'Comércio',
      description: 'Bourbon Shopping, lojas e mercados próximos'
    },
    {
      icon: Coffee,
      title: 'Gastronomia',
      description: 'Restaurantes, cafés e padarias renomadas'
    },
    {
      icon: Bus,
      title: 'Mobilidade',
      description: 'Fácil acesso ao metrô e principais vias'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Bairro residencial com baixos índices de criminalidade'
    },
    {
      icon: Utensils,
      title: 'Lazer',
      description: 'Praça Perdizes, parques e vida cultural ativa'
    },
  ];

  // Imagens reais de pontos de interesse em Perdizes
  const neighborhoodImages = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Allianz_Parque_Aerial.jpg/1200px-Allianz_Parque_Aerial.jpg',
      alt: 'Allianz Parque - Arena multiuso',
      caption: 'Allianz Parque'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/SESC_Pompeia.jpg/1200px-SESC_Pompeia.jpg',
      alt: 'SESC Pompeia - Centro cultural',
      caption: 'SESC Pompeia'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/PUC-SP_-_Campus_Monte_Alegre.jpg/1200px-PUC-SP_-_Campus_Monte_Alegre.jpg',
      alt: 'PUC-SP - Universidade',
      caption: 'PUC-SP'
    },
  ];

  return (
    <section className="neighborhood-section">
      <h2 className="section-title">Conheça Perdizes</h2>
      <p className="section-subtitle">
        Um dos bairros mais tradicionais e desejados de São Paulo
      </p>

      {/* Hero do bairro */}
      <div className="neighborhood-hero">
        <div className="neighborhood-intro">
          <h3>Tradição e Qualidade de Vida</h3>
          <p>
            Perdizes é um dos bairros mais nobres e tradicionais da Zona Oeste de São Paulo.
            Fundado no início do século XX, o bairro se consolidou como uma área residencial
            de alto padrão, conhecida por suas ruas arborizadas, praças charmosas e
            infraestrutura completa.
          </p>
          <p>
            Com uma localização privilegiada, Perdizes oferece fácil acesso às principais
            vias da cidade, como as Marginais Tietê e Pinheiros, além de estar próximo
            ao centro expandido. O bairro é cercado por outros bairros nobres como
            Higienópolis, Pacaembu e Pompeia.
          </p>
          <p>
            A região é conhecida pela forte presença de instituições de ensino renomadas,
            como a PUC-SP e o Colégio Santa Marcelina, tornando-o um polo educacional
            importante. Além disso, conta com hospitais de referência, como o São Camilo,
            e uma ampla rede de comércios e serviços.
          </p>
        </div>

        {/* Grid de imagens */}
        <div className="neighborhood-images">
          {neighborhoodImages.map((image, index) => (
            <div key={index} className="neighborhood-image-card">
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
              />
              <span className="image-caption">{image.caption}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid de destaques */}
      <div className="neighborhood-highlights">
        <h3>O que você encontra em Perdizes</h3>
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <item.icon className="highlight-icon" size={28} />
              <div className="highlight-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estatísticas */}
      <div className="neighborhood-stats">
        <div className="stat-item">
          <span className="stat-number">15 min</span>
          <span className="stat-label">do Centro</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5 min</span>
          <span className="stat-label">da Marginal</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">+50</span>
          <span className="stat-label">Restaurantes</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">3</span>
          <span className="stat-label">Hospitais</span>
        </div>
      </div>

      {/* Pontos de interesse */}
      <div className="neighborhood-poi">
        <h3>Principais pontos de interesse</h3>
        <div className="poi-list">
          <div className="poi-category">
            <h4>Educação</h4>
            <ul>
              <li>PUC-SP (5 min de carro)</li>
              <li>Colégio Santa Marcelina</li>
              <li>Universidade Mackenzie (10 min)</li>
              <li>FAAP (15 min)</li>
            </ul>
          </div>
          <div className="poi-category">
            <h4>Lazer & Cultura</h4>
            <ul>
              <li>Allianz Parque (10 min)</li>
              <li>SESC Pompeia (10 min)</li>
              <li>Praça Perdizes</li>
              <li>Teatro TUCA</li>
            </ul>
          </div>
          <div className="poi-category">
            <h4>Compras</h4>
            <ul>
              <li>Bourbon Shopping Pompeia</li>
              <li>Shopping West Plaza</li>
              <li>Mercado de Pinheiros</li>
              <li>Comércio local diversificado</li>
            </ul>
          </div>
          <div className="poi-category">
            <h4>Saúde</h4>
            <ul>
              <li>Hospital São Camilo</li>
              <li>Hospital Samaritano</li>
              <li>Diversos laboratórios e clínicas</li>
              <li>UBS Perdizes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Neighborhood;
