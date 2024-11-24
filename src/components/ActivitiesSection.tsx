import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "./ActivitiesSection.css";

// Import activity images
import zipliningImg from "../assets/activities/ziplining.png";
import hotAirBalloonImg from "../assets/activities/hot-air-balloon.jpg";
import jeepTrekkingImg from "../assets/activities/jeep-trekking.jpg";
import kathakaliImg from "../assets/activities/kathakali.jpeg";
import adventureParksImg from "../assets/activities/adventure-parks.jpg";
import campfireImg from "../assets/activities/campfire.jpg"; // Add this image

const activities = [
  {
    title: "Off-Road Jeep Trekking",
    description:
      "Explore rugged terrains and hidden trails with exciting off-road jeep adventures.",
    image: jeepTrekkingImg,
  },
  {
    title: "Ziplining",
    description:
      "Feel the adrenaline rush as you zip through lush green landscapes, surrounded by breathtaking views.",
    image: zipliningImg,
  },
  {
    title: "Hot Air Balloon Rides",
    description:
      "Soar high above the hills and enjoy a panoramic view of the stunning Munnar region.",
    image: hotAirBalloonImg,
  },
  {
    title: "Kathakali and Kalaripayattu Performances",
    description:
      "Experience the rich culture of Kerala with traditional dance and martial art performances.",
    image: kathakaliImg,
  },
  {
    title: "Dream Valley & Wonder Valley Adventure Parks",
    description:
      "Enjoy discounted tickets to popular adventure parks, offering thrilling rides and activities.",
    image: adventureParksImg,
  },
  {
    title: "Campfire",
    description:
      "Unwind under the starry skies with a cozy campfire, perfect for relaxing evenings.",
    image: campfireImg,
  },
];

const ActivitiesSection: React.FC = () => {
  return (
    <section className="activities-section py-5">
      <Container>
        <h2 className="text-center mb-4">Activities</h2>
        <p className="text-center mb-4">
          Explore exciting activities and experiences during your stay at Cozy
          Cova. Please contact us to pre-book!
        </p>
        <Carousel className="activity-carousel">
          {activities.map((activity, index) => (
            <Carousel.Item key={index}>
              <div className="activity-carousel-item">
                <img
                  className="d-block w-100 activity-carousel-img"
                  src={activity.image}
                  alt={activity.title}
                />
                <Carousel.Caption>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default ActivitiesSection;
