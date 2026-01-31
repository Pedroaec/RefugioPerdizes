import { useState } from 'react';
import { roomPhotos } from '../data/roomPhotos';
import { Sofa, Bed, Bath, UtensilsCrossed, Coffee, Sun, LayoutGrid } from 'lucide-react';

const FloorPlan = ({ onRoomClick }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Categorias de ambientes com ícones diferentes
  const categories = [
    { id: 'all', label: 'Todos', icon: LayoutGrid },
    { id: 'social', label: 'Social', icon: Sofa },
    { id: 'intimo', label: 'Íntimo', icon: Bed },
    { id: 'servico', label: 'Serviço', icon: UtensilsCrossed },
  ];

  // Ambientes agrupados por categoria com fotos de preview
  const ambientes = [
    {
      id: 'varanda',
      label: 'Terraço',
      area: '~8m²',
      category: 'social',
      icon: Sun,
      preview: '/fotos/Varanda.jpeg',
      description: 'Com vista para a cidade'
    },
    {
      id: 'salaEstar',
      label: 'Sala de Estar',
      area: '~20m²',
      category: 'social',
      icon: Sofa,
      preview: '/fotos/Sala-entrada.jpeg',
      description: 'Living amplo integrado'
    },
    {
      id: 'salaJantar',
      label: 'Sala de Jantar',
      area: '~14m²',
      category: 'social',
      icon: Coffee,
      preview: '/fotos/Sala-de-jantar.jpeg',
      description: 'Ambiente elegante'
    },
    {
      id: 'suite',
      label: 'Suíte Master',
      area: '~18m²',
      category: 'intimo',
      icon: Bed,
      preview: '/fotos/Suite-master.jpeg',
      description: 'Com closet e banheiro'
    },
    {
      id: 'wcSuite',
      label: 'Banho Suíte',
      area: '~5m²',
      category: 'intimo',
      icon: Bath,
      preview: '/fotos/BanheiroSuite.jpeg',
      description: 'Acabamento completo'
    },
    {
      id: 'dormitorio1',
      label: 'Dormitório 1',
      area: '~12m²',
      category: 'intimo',
      icon: Bed,
      preview: '/fotos/Quarto1.jpeg',
      description: 'Com armários embutidos'
    },
    {
      id: 'dormitorio2',
      label: 'Dormitório 2',
      area: '~10m²',
      category: 'intimo',
      icon: Bed,
      preview: '/fotos/Quarto2.jpeg',
      description: 'Versátil como escritório'
    },
    {
      id: 'wcSocial',
      label: 'Banho Social',
      area: '~4m²',
      category: 'intimo',
      icon: Bath,
      preview: '/fotos/Banheiro2.jpeg',
      description: 'Bem conservado'
    },
    {
      id: 'cozinha',
      label: 'Cozinha',
      area: '~12m²',
      category: 'servico',
      icon: UtensilsCrossed,
      preview: '/fotos/Cozinha-entrada.jpeg',
      description: 'Planejada completa'
    },
  ];

  const filteredAmbientes = activeCategory === 'all'
    ? ambientes
    : ambientes.filter(a => a.category === activeCategory);

  return (
    <div className="floor-plan-container">
      <div className="floor-plan-header">
        <h2 className="section-title">Conheça os Ambientes</h2>
        <p className="section-subtitle">Explore cada espaço do apartamento</p>
      </div>

      <div className="floor-plan-layout">
        {/* Planta à esquerda */}
        <div className="floor-plan-image-section">
          <div className="floor-plan-image-wrapper">
            <div className="floor-plan-image-container">
              <img
                src="/fotos/planta_humanizada.jpeg"
                alt="Planta humanizada do apartamento"
                className="floor-plan-image"
              />
            </div>
            <div className="floor-plan-legend">
              <span className="legend-item">Andar alto</span>
              <span className="legend-divider">•</span>
              <span className="legend-item">110m² úteis</span>
              <span className="legend-divider">•</span>
              <span className="legend-item">Sol da manhã</span>
            </div>
          </div>
        </div>

        {/* Ambientes à direita */}
        <div className="floor-plan-rooms-section">
          {/* Category Filter */}
          <div className="rooms-filter">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <cat.icon size={16} />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Room Cards */}
          <div className="rooms-cards">
            {filteredAmbientes.map((ambiente) => (
              <button
                key={ambiente.id}
                className="room-card"
                onClick={() => onRoomClick(ambiente.id)}
              >
                <div className="room-card-image">
                  <img src={ambiente.preview} alt={ambiente.label} />
                  <div className="room-card-overlay">
                    <ambiente.icon size={24} />
                  </div>
                </div>
                <div className="room-card-info">
                  <h4>{ambiente.label}</h4>
                  <p>{ambiente.description}</p>
                  <span className="room-card-area">{ambiente.area}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
