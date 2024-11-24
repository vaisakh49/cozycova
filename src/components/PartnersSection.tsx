import React from "react";
import "./PartnersSection.css";

// Import partner logos
import airbnbLogo from "../assets/partners/airbnb.png";
import bookingLogo from "../assets/partners/booking.png";
// import expediaLogo from "../assets/partners/expedia.png";

const PartnersSection: React.FC = () => {
  const partners = [
    { name: "Airbnb", logo: airbnbLogo, url: "https://www.airbnb.com" },
    { name: "Booking.com", logo: bookingLogo, url: "https://www.booking.com" },
    // { name: "Expedia", logo: expediaLogo, url: "https://www.expedia.com" },
  ];

  return (
    <div className="partners-section">
      <h2>Our Partners</h2>
      <div className="partners-logos">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-link"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="partner-logo"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
