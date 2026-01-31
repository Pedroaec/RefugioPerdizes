import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const phoneNumber = '5511999999999'; // Substituir pelo número real
  const message = encodeURIComponent(
    'Olá! Vi o Refúgio Perdizes e gostaria de mais informações.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTooltipVisible(false);
  };

  return (
    <div className="whatsapp-float">
      {isTooltipVisible && (
        <div className="whatsapp-tooltip">
          <button className="tooltip-close" onClick={handleClose}>
            <X size={14} />
          </button>
          <p>Tem dúvidas? Fale conosco!</p>
          <span className="tooltip-arrow" />
        </div>
      )}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Conversar no WhatsApp"
        onMouseEnter={() => setIsTooltipVisible(true)}
      >
        <MessageCircle size={28} />
        <span className="whatsapp-pulse" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
