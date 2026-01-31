import { Check, Star } from 'lucide-react';

const Features = () => {
  const highlights = [
    { text: 'Piso de madeira em excelente estado', featured: true },
    { text: 'Armários embutidos em todos os quartos', featured: true },
    { text: 'Janelas acústicas — reduz até 95% do ruído', featured: true },
    { text: 'Living integrado amplo e iluminado', featured: false },
    { text: 'Varanda com forro de madeira', featured: false },
    { text: 'Ótima ventilação e iluminação natural', featured: false },
    { text: 'Prédio boutique com apenas 52 unidades', featured: false },
    { text: '2 vagas de garagem cobertas', featured: false },
  ];

  return (
    <section className="features-section-new">
      <div className="features-header">
        <h2 className="section-title">Diferenciais do Imóvel</h2>
        <p className="section-subtitle">O que torna este apartamento especial</p>
      </div>

      <div className="highlights-grid-new">
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`highlight-item-new ${item.featured ? 'featured' : ''}`}
          >
            <div className="highlight-icon-new">
              {item.featured ? (
                <Star size={18} />
              ) : (
                <Check size={18} />
              )}
            </div>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
