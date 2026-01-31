import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5511999999999'; // Substituir pelo número real
  const message = encodeURIComponent(
    'Olá! Vi o Refúgio Perdizes e gostaria de mais informações.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="whatsapp-float">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="whatsapp-pulse" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
