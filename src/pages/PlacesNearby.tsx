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
  directionsLink: string; // Add a field for the Google Maps link
}

const places: Place[] = [
  {
    name: "Chengulam Dam",
    description: "Experience the charm of Munnar town.",
    distance: "5 minutes walk",
    image: chengulamDam,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/Chenkulam+Dam,+Bison+Valley,+Kerala/@10.0121179,77.0296155,1070m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b079900663cb379:0x76b98d5d0bd75f9b!2m2!1d77.0326634!2d10.0110139?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },

  {
    name: "Power House Falls",
    description: "A majestic waterfall in a lush green setting.",
    distance: "15 minutes drive",
    image: powerHouseFalls,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/Power+House+Waterfalls,+Muthirappuzhayar,+Aadit,+Kerala/@10.018048,77.0375779,4281m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b0798603470f19d:0x857ee92cab75cd46!2m2!1d77.0553354!2d10.023991?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Blossom Hydel Park",
    description: "Relax in a serene park environment.",
    distance: "25 minutes drive",
    image: blossomHydel,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/The+Blossom+Hydel+Park,+3398%2BVMV,+Bus+Stand,+Highway,+Aluva+-+Munnar+Rd,+near+KSRTC,+Moolakadai,+Munnar,+Kerala+685612/@10.0427916,77.0289863,8002m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b07990d379ba27f:0x5a42d98affe63f5e!2m2!1d77.0665249!2d10.069104?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Attukal Waterfalls",
    description: "Witness the beauty of cascading waterfalls.",
    distance: "25 minutes drive",
    image: attukalWaterfalls,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/Attukad+Waterfalls,+Attukad+Waterfall+Road,+Pallivasal,+Kerala/@10.0326624,77.0245915,8562m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b0799072e70314d:0x15e80e7c92e710da!2m2!1d77.0588501!2d10.0534408?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Tata Tea Garden",
    description: "Visit the lush tea plantations.",
    distance: "30 minutes drive",
    image: teaPlant,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/Munnar+tea+trekking+adventure,+Munnar+Road,+Nullatanni,+Pallivasal,+Kerala/@10.0496203,77.0079038,17122m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b0798e0d3a10855:0x7595dcc2b0b1abb2!2m2!1d77.0601938!2d10.0873396?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Eravikulam Park",
    description: "Famous for the Nilgiri Tahr.",
    distance: "45 minutes drive",
    image: eravikulam,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/Eravikulam+National+Park,+Kannan+Devan+Hills,+Kerala/@10.0785094,77.0079038,17121m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b079baa7e4ff5e1:0xe4b394ee6729f8a0!2m2!1d77.0366346!2d10.1453912?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Mattupetti Dam",
    description: "A great spot for picnics and photography.",
    distance: "45 minutes drive",
    image: mattupettiDam,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/Mattupetty+Dam,+Munnar+-+Top+Station+Highway,+Mattupetty,+Kerala/@10.0592281,77.0364691,17122m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b079c1847151239:0xce20307468de30c1!2m2!1d77.1238055!2d10.1063316?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Echo Point",
    description: "Hear your voice echo in this scenic spot.",
    distance: "50 minutes drive",
    image: echoPoint,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/Echo+point,+Mattupetty,+Kerala/@10.0602918,77.0406901,17122m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b079ddd56863f0d:0xf7fdd3cad4fb9085!2m2!1d77.1299069!2d10.108956?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Chinnakkanal Waterfalls",
    description: "A beautiful scenic waterfall.",
    distance: "50 minutes drive",
    image: chinnakkanal,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/Chinnakanal+Waterfalls,+NH-49,+Chinnakanal,+Kerala/@10.0439483,77.0584703,17123m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b079fa4235e3da9:0xb96a11a0fc0f2dc5!2m2!1d77.1549136!2d10.0376356?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Anamudi",
    description: "Explore the highest peak in South India.",
    distance: "1 hour drive",
    image: anamudi,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/Anamudi+Peak,+Munnar,+Kerala/@10.0901295,76.9759126,34240m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b079bf191b6edf3:0xda0373b0d9f86b1d!2m2!1d77.0637958!2d10.1684778?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Kundala Dam Lake",
    description: "Perfect for boating and sightseeing.",
    distance: "1 hour drive",
    image: kundalaDam,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/Kundala+Dam,+Munnar,+Kerala/@10.0776055,77.0738807,17121m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b0777d4f1d4f70f:0x175d7be2ccf82009!2m2!1d77.1986287!2d10.1435508?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },

  {
    name: "Top Station",
    description: "Famous for its panoramic views.",
    distance: "1.5 hour drive",
    image: topStation,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/Top+Station+View+Point+%E0%B4%9F%E0%B5%8B%E0%B4%AA%E0%B5%8D+%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B5%87%E0%B4%B7%E0%B4%A8%E0%B5%8D%E2%80%8D+%E0%B4%B5%E0%B5%8D%E0%B4%AF%E0%B5%82+%E0%B4%AA%E0%B5%8B%E0%B4%AF%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%8D,+Munnar,+Tamil+Nadu/@10.0770828,77.0973479,17121m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b07768bc9119f9f:0xd3df4f221d132102!2m2!1d77.2439531!2d10.1170875?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Chinnar Wildlife Sanctuary",
    description: "Home to diverse wildlife and flora.",
    distance: "2 hour drive",
    image: chinnar,
    directionsLink:
      "https://www.google.com/maps/dir/cozy+cova/Chinnar+Wildlife+Sanctuary,+Munnar+-+Udumalpet+Road,+Munnar,+Kerala/@10.1614204,76.953968,68465m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3b07990031763281:0xab5dcc8a69b0f352!2m2!1d77.0315633!2d10.013224!1m5!1m1!1s0x3b0781c4e32dcc6f:0x63e536ae70888ca6!2m2!1d77.2060241!2d10.3067974?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
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
              <img
                src={place.image}
                alt={place.name}
                className="place-image"
                loading="lazy"
              />
              <div className="place-details">
                <h3 className="place-name">{place.name}</h3>
                {/* <p className="place-description">{place.description}</p> */}
                <p className="place-distance">{place.distance}</p>
                <a
                  href={place.directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-button"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PlacesNearby;
