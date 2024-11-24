import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import "./WhatsAppButton.css";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "+919074561930"; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in booking your homestay."; // Optional preset message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      Message us on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
