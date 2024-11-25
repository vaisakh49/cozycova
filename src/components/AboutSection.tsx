import React from "react";
import "./AboutSection.css";
import amenities from "../assets/gallery/dam-view.jpg";
import activities from "../assets/gallery/activities.png";
import relaxation from "../assets/gallery/relaxation.jpg";

const AboutSection: React.FC = () => {
  const sections = [
    {
      title: "Amenities",
      content:
        "• <strong>Prime Location</strong>: Only 20 minutes away from Munnar and a 5-minute walk from Sengulam Dam.<br />• <strong>Natural Surroundings</strong>: Nestled in a peaceful neighborhood, surrounded by nature’s beauty.<br />• <strong>Campfire Evenings</strong>: Enjoy cozy evenings around a crackling campfire under the stars.<br />• <strong>Fresh Produce</strong>: Take a tour of our cardamom and pepper plants, grown right here at our homestay. You can even pre-order fresh spices!<br />• <strong>Modern Comforts</strong>: Access to the main floor, bedrooms, and kitchen. Upstairs entry is restricted for privacy.<br />• <strong>High-Speed Internet</strong>: Stay connected with high-speed internet access in all rooms, along with cable TV for your entertainment.",
      image: amenities,
    },
    {
      title: "Activities",
      content:
        "Our homestay offers a range of exciting adventure activities that you can book with discounts. Whether you’re into nature walks, exploring nearby landmarks, or enjoying quiet evenings, we can arrange these experiences for you. Please contact us to pre-book these activities and make your stay even more memorable.",
      image: activities,
    },
    {
      title: "100% Satisfaction and Relaxation Guaranteed",
      content:
        "Whether this is your first visit or you've been here many times, we are dedicated to making your experience outstanding. Our friendly staff is always ready to assist with any questions or concerns you may have. Rest assured, your satisfaction is our top priority.",
      image: relaxation,
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
            adventure activities. Whether you're here to relax or explore, Cozy
            Cova provides the perfect setting.
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
            <div className="about-image">
              <img src={section.image} alt={section.title} loading="lazy" />
            </div>
            <div className="about-text">
              <h4>{section.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
