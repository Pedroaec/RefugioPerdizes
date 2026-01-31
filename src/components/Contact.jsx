import { useState } from 'react';
import { Send, CheckCircle, MapPin, Home, Ruler, Building2 } from 'lucide-react';
import { propertyInfo } from '../data/roomPhotos';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'Olá! Vi o Refúgio Perdizes e gostaria de mais informações.'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xeezjzpq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          property: 'Refúgio Perdizes'
        })
      });

      if (!response.ok) throw new Error('Erro no envio');

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (isSubmitted) setIsSubmitted(false);
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Entre em Contato</h2>
      <p className="section-subtitle">
        Preencha o formulário e entraremos em contato com você
      </p>

      <div className="contact-content">
        <div className="contact-cta">
          {isSubmitted ? (
            <div className="form-success">
              <CheckCircle size={48} className="success-icon" />
              <h3>Mensagem Enviada!</h3>
              <p>Obrigado pelo seu interesse. Entraremos em contato em breve.</p>
              <button
                className="new-message-btn"
                onClick={() => setIsSubmitted(false)}
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Escreva sua mensagem..."
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensagem
                  </>
                )}
              </button>

              <p className="form-note">
                * Campos obrigatórios. Suas informações serão tratadas com confidencialidade.
              </p>
            </form>
          )}
        </div>

        <div className="contact-info-box">
          <h3>Refúgio Perdizes</h3>

          <div className="property-summary">
            <div className="summary-item">
              <MapPin size={18} />
              <div>
                <span className="summary-label">Localização</span>
                <span className="summary-value">Perdizes, São Paulo</span>
              </div>
            </div>

            <div className="summary-item">
              <Home size={18} />
              <div>
                <span className="summary-label">Tipologia</span>
                <span className="summary-value">{propertyInfo.bedrooms} dormitórios ({propertyInfo.suites} suíte)</span>
              </div>
            </div>

            <div className="summary-item">
              <Ruler size={18} />
              <div>
                <span className="summary-label">Área útil</span>
                <span className="summary-value">{propertyInfo.usefulArea}m²</span>
              </div>
            </div>

            <div className="summary-item">
              <Building2 size={18} />
              <div>
                <span className="summary-label">Vagas</span>
                <span className="summary-value">{propertyInfo.parkingSpots} vagas cobertas</span>
              </div>
            </div>
          </div>

          <div className="price-highlight">
            <span className="price-label">Valor do Imóvel</span>
            <span className="price-big">
              {propertyInfo.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
              })}
            </span>
          </div>

          <p className="contact-disclaimer">
            Venda direta pelo proprietário. Sem intermediários.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
