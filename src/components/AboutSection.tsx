import React from "react";
import "./AboutSection.css";
import pool from "../assets/background.jpg";
import dining from "../assets/background.jpg";
import amenities from "../assets/background.jpg";
import activities from "../assets/background.jpg";
import hammock from "../assets/background.jpg";

const AboutSection: React.FC = () => {
  const sections = [
    {
      title: "Private Pool",
      description:
        "Experience the epitome of luxury and relaxation with your own private pool in our homestay. Dive in, unwind, and bask in the tranquility of your exclusive aquatic oasis.",
      image: pool,
    },
    {
      title: "Dining",
      description:
        "Indulge in a delightful dining experience during your stay at our homestay. Our cozy dining area offers the perfect setting to savor homemade meals and create cherished memories with loved ones.",
      image: dining,
    },
    {
      title: "Amenities",
      description:
        "We offer a variety of amenities to make your stay with us as comfortable as possible. Cozy interiors in luxury rooms with the option of spa services, and more. We provide complimentary high-speed Internet access.",
      image: amenities,
    },
    {
      title: "Activities",
      description:
        "Embark on unforgettable outdoor adventures from our homestay. Immerse yourself in breathtaking trails and explore hidden gems at your doorstep.",
      image: activities,
    },
    {
      title: "100% Satisfaction and Relaxation Guaranteed",
      description:
        "Whether this is your first visit or you have been a guest many times, we want your experience to be excellent. Our staff is always available to help with any questions or concerns you may have.",
      image: hammock,
    },
  ];

  return (
    <div className="about-section">
      <h2>About Us</h2>
      <div className="about-cards">
        {sections.map((section, index) => (
          <div className="about-card" key={index}>
            <img src={section.image} alt={section.title} />
            <div className="about-content">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
