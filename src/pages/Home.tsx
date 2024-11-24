import React from "react";
import "./Home.css";
import AboutHomestay from "../components/AboutSection";
import { Container } from "react-bootstrap";
import MapSection from "../components/MapSection";
import WhatsAppButton from "../components/WhatsAppButton";
// import MyMapComponent from "../components/MyMapComponent";
// import PartnersSection from "../components/PartnersSection";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Revel in Luxury</h1>
          <p className="hero-subtitle">Welcome to Cozy Cova</p>
          <WhatsAppButton />
        </div>
      </section>

      <Container>
        <AboutHomestay />
        <MapSection
          centerCoordinates={[10.1185, 77.0603]} // Coordinates for Munnar (example)
          zoomLevel={13}
          title="Find Us on the Map"
          popupContent="Cozy Cova Homestay, 20 minutes from Munnar, 5-minute walk to Sengulam Dam."
        />
        {/* <MyMapComponent /> */}
        {/* <PartnersSection /> */}
      </Container>
    </div>
  );
};

export default Home;
