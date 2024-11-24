import React from "react";
import "./PlacesNearby.css";
import { Container } from "react-bootstrap";

import anamudi from "../assets/nearby/anamudi.jpg";
import attukalWaterfalls from "../assets/nearby/attukal-waterfall.jpg";
import blossomHydel from "../assets/nearby/blossom-hydel-park.jpg";
import chengulamDam from "../assets/nearby/chengulam-dam.jpg";
import chinnakkanal from "../assets/nearby/chinnakanal-waterfalls.jpg";
import chinnar from "../assets/nearby/chinnar-wildlife-sanctuary.jpg";
import echoPoint from "../assets/nearby/echo-point.jpg";
import eravikulam from "../assets/nearby/eravikulam-park.jpg";
import kundalaDam from "../assets/nearby/kundala-dam-lake.jpg";
import mattupettiDam from "../assets/nearby/mattupetti-dam.jpg";
import powerHouseFalls from "../assets/nearby/power-house-falls.jpg";
import teaPlant from "../assets/nearby/tata-tea-gardens.jpg";
import topStation from "../assets/nearby/top-station.jpg";

interface Place {
  name: string;
  description: string;
  distance: string;
  image: string;
}

const places: Place[] = [
  {
    name: "Munnar Town",
    description: "nill",
    distance: "0 minutes drive",
    image: chengulamDam, // Replace with actual image paths
  },
  {
    name: "Anamudi",
    description: "nill",
    distance: "5 minutes walk",
    image: anamudi,
  },
  {
    name: "Attukal Waterfalls",
    description: "nill",
    distance: "5 minutes drive",
    image: attukalWaterfalls,
  },
  {
    name: "Blossom Hydel Park",
    description: "nill",
    distance: "5 minutes drive",
    image: blossomHydel,
  },
  {
    name: "Chinnakkanal Waterfalls",
    description: "nill",
    distance: "5 minutes walk",
    image: chinnakkanal,
  },
  {
    name: "Chinnar Wildlife Sanctuary",
    description: "nill",
    distance: "5 minutes walk",
    image: chinnar,
  },
  {
    name: "Echo Point",
    description: "nill",
    distance: "5 minutes walk",
    image: echoPoint,
  },
  {
    name: "Eravikulam Park",
    description: "nill",
    distance: "5 minutes walk",
    image: eravikulam,
  },
  {
    name: "Kundala Dam Lake",
    description: "nill",
    distance: "5 minutes walk",
    image: kundalaDam,
  },
  {
    name: "Mattupetti Dam",
    description: "nill",
    distance: "5 minutes walk",
    image: mattupettiDam,
  },
  {
    name: "Power House Falls",
    description: "nill",
    distance: "5 minutes walk",
    image: powerHouseFalls,
  },
  {
    name: "Tata Tea Garden",
    description: "nill",
    distance: "5 minutes walk",
    image: teaPlant,
  },
  {
    name: "Top Station",
    description: "nill",
    distance: "5 minutes walk",
    image: topStation,
  },
];

const PlacesNearby: React.FC = () => {
  return (
    <Container>
      <div className="places-nearby">
        <h2 className="places-heading">Places Nearby</h2>
        <div className="places-grid">
          {places.map((place, index) => (
            <div className="place-card" key={index}>
              <img src={place.image} alt={place.name} className="place-image" />
              <div className="place-details">
                <h3 className="place-name">{place.name}</h3>
                <p className="place-description">{place.description}</p>
                <p className="place-distance">{place.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PlacesNearby;
