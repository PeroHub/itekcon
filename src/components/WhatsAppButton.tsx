import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  // whatsapp button functionality
  const handleWhatsAppClick = () => {
    const phoneNumber = "+2349118404860";
    const message =
      "Hello ITEK Construction! I would like to inquire about your services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
