import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BannerCarousel = () => {
  const images = [
    "/images/CARRUSEL-DECUENTO.webp",
    "/images/CARRUSEL-FOTOMUJER.webp",
    "/images/taormina.webp",
  ];

  return (
    <Carousel fade interval={4000}>
      {images.map((img, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={img}
            alt={`Banner ${i + 1}`}
            style={{ maxHeight: "480px", objectFit: "cover" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
