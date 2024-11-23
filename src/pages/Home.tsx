import React from "react";
import "./Home.css";
import AboutHomestay from "../components/AboutSection";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Revel in Luxury</h1>
          <p className="hero-subtitle">Welcome to Cozy Cova</p>
        </div>
      </section>

      {/* About Section */}
      <AboutHomestay />
    </div>
  );
};

export default Home;
