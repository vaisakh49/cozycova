import React from "react";
import "./Home.css";
import AboutHomestay from "../components/AboutSection";
import { Container } from "react-bootstrap";
import MapSection from "../components/MapSection";
import WhatsAppButton from "../components/WhatsAppButton";
import ActivitiesSection from "../components/ActivitiesSection";
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
        <ActivitiesSection />
        <MapSection />
        {/* <MyMapComponent /> */}
        {/* <PartnersSection /> */}
      </Container>
    </div>
  );
};

export default Home;
