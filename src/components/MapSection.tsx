import React from "react";
import "./MapSection.css";

const MapSection: React.FC = () => {
  return (
    <div className="map-section">
      <h4 className="map-title">Find Us on Google Maps</h4>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5718.047193444153!2d77.02945375486601!3d10.01334961366641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07990031763281%3A0xab5dcc8a69b0f352!2sCozy%20cova!5e1!3m2!1sen!2sin!4v1732486279212!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
