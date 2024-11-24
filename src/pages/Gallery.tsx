import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "./Gallery.css";

// Imported images
import img1 from "../assets/gallery/bath-1.jpg";
import img2 from "../assets/gallery/bath-2.jpg";
import img3 from "../assets/gallery/bedroom-1.jpg";
import img4 from "../assets/gallery/bedroom-2.jpg";
// import img5 from "../assets/bedroom-3.jpg";
import img6 from "../assets/gallery/bedroom-4.jpg";
import img7 from "../assets/gallery/bedroom-5.jpg";
import img8 from "../assets/gallery/bedroom-6.jpg";
// import img9 from "../assets/bedroom-7.jpg";
import img10 from "../assets/gallery/dam-view.jpg";
import img11 from "../assets/gallery/dining-1.jpg";
import img12 from "../assets/gallery/dining-2.jpg";
import img13 from "../assets/gallery/hall-1.jpg";
import img14 from "../assets/gallery/hall-2.jpg";
import img15 from "../assets/gallery/hall-3.jpg";
import img16 from "../assets/gallery/hall-4.jpg";
import img17 from "../assets/gallery/hall-5.jpg";
import img19 from "../assets/gallery/home-front.jpg";
// import img20 from "../assets/gallery/home-long.jpg";
import img21 from "../assets/gallery/home-long-2.jpg";
import img22 from "../assets/gallery/home-side-2.jpg";
// import img23 from "../assets/gallery/home-side.jpg";
import img24 from "../assets/gallery/kichen.jpg";
import img25 from "../assets/gallery/nature-1.jpg";
import img26 from "../assets/gallery/nature-2.jpg";
import img27 from "../assets/gallery/nature-3.jpg";
import img28 from "../assets/gallery/nature-4.jpg";
import img29 from "../assets/gallery/nature-5.jpg";

// Array of images
const images = [
  { src: img10, alt: "Dam View" },
  { src: img21, alt: "Home Long View 2" },
  //   { src: img20, alt: "Home Long View 1" },
  { src: img22, alt: "Home Side View 1" },
  //   { src: img23, alt: "Home Side View 2" },
  { src: img19, alt: "Home Front" },
  { src: img13, alt: "Hall 1" },
  { src: img14, alt: "Hall 2" },
  { src: img15, alt: "Hall 3" },
  { src: img16, alt: "Hall 4" },
  { src: img17, alt: "Hall 5" },
  { src: img11, alt: "Dining Area 1" },
  { src: img12, alt: "Dining Area 2" },
  { src: img3, alt: "Bedroom 1" },
  { src: img4, alt: "Bedroom 2" },
  //   { src: img5, alt: "Bedroom 3" },
  { src: img6, alt: "Bedroom 4" },
  { src: img7, alt: "Bedroom 5" },
  { src: img8, alt: "Bedroom 6" },
  //   { src: img9, alt: "Bedroom 7" },
  { src: img1, alt: "Bathroom 1" },
  { src: img2, alt: "Bathroom 2" },
  { src: img24, alt: "Kitchen" },
  { src: img25, alt: "Nature 1" },
  { src: img26, alt: "Nature 2" },
  { src: img27, alt: "Nature 3" },
  { src: img28, alt: "Nature 4" },
  { src: img29, alt: "Nature 5" },
];

const Gallery: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const handleImageClick = (image: { src: string; alt: string }) => {
    setActiveImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveImage(null);
  };

  return (
    <Container className="gallery-page py-5">
      <h2 className="text-center gallery-heading mb-4">Gallery</h2>
      <p className="text-center gallery-description mb-5">
        Explore the beauty and comfort of Cozy Cova through these pictures.
      </p>
      <Row className="g-4">
        {images.map((image, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <div
              className="gallery-item"
              onClick={() => handleImageClick(image)}
              role="button"
            >
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal for fullscreen image */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body className="p-0">
          {activeImage && (
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-100"
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Gallery;
