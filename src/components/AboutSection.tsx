import React from "react";
import "./AboutSection.css";
import dining from "../assets/dining-1.jpg";
import amenities from "../assets/dam-view.jpg";
import activities from "../assets/activities.png";
import relaxation from "../assets/relaxation.jpg";

const AboutSection: React.FC = () => {
  const sections = [
    {
      title: "Dining",
      content:
        "Indulge in a delightful dining experience during your stay at our homestay. Our cozy dining area offers the perfect setting to savor homemade meals and create cherished memories with loved ones.",
      image: dining, // Replace with actual image paths
    },
    {
      title: "Amenities",
      content:
        "- Located just 20 minutes from Munnar\n- Sengulam Dam is a 5-minute walk away\n- Enjoy cozy campfire evenings\n- Surrounded by nature, in a peaceful neighborhood\n- Cardamom and pepper plants cultivated on-site (Make a pre-order to get fresh spices!)\n- Main floor, bedroom, and kitchen access; upstairs entry is restricted\n- Cable TV and high-speed internet access in rooms",
      image: amenities, // Replace with actual image path
    },
    {
      title: "Activities",
      content:
        "Our homestay offers exciting adventure activities and experiences that can be arranged with discounts:\n- Ziplining\n- Hot air balloon rides\n- Off-road jeep trekking\n- Traditional Kathakali and Kalaripayattu performances\n- Discounted tickets for Dream Valley and Wonder Valley Adventure Parks\n\nPlease contact us to pre-book these activities and enjoy an unforgettable experience.",
      image: activities, // Replace with actual image path
    },
    {
      title: "100% Satisfaction and Relaxation Guaranteed",
      content:
        "Whether this is your first visit, or you have been a guest many times, we want your experience to be excellent. Our staff is always available to help with any questions or concerns you may have.",
      image: relaxation, // Replace with actual image path
    },
  ];

  return (
    <div className="about-section-wrapper">
      {/* About Us Section */}
      <div className="about-section">
        <div className="about-heading">
          <h4>About Us</h4>
        </div>
        <div className="about-content">
          <p>
            Cozy Cova Homestay is a serene retreat located just 20 minutes from
            Munnar and a 5-minute walk from Sengulam Dam. Nestled in a peaceful
            neighborhood surrounded by nature, our homestay offers campfire
            evenings, fresh cardamom and pepper cultivation, and easy access to
            adventure activities.
          </p>
        </div>
      </div>

      {/* Alternating Sections */}
      <div className="alternating-section">
        {sections.map((section, index) => (
          <div
            className={`about-section-row ${
              index % 2 === 0 ? "normal" : "reversed"
            }`}
            key={index}
          >
            <div className="about-text">
              <h4>{section.title}</h4>
              <p>{section.content}</p>
            </div>
            <div className="about-image">
              <img src={section.image} alt={section.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
