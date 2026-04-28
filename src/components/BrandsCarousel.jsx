import { useState, useRef } from "react";
import "./brandsCarousel.css";
import Imagebrand from "../assets/b1.png";
import Imagebrand1 from "../assets/b2.png";
import Imagebrand2 from "../assets/b3.png";
import Imagebrand3 from "../assets/b4.png";
import Imagebrand4 from "../assets/b5.png";
import Imagebrand5 from "../assets/b6.png";
import { carsCatalog } from "../data/carsCatalog";
import CarCard from "./CarCard";

const brands = [
  {
    name: "Audi",
    logo: Imagebrand,
    description:
      "Audi offers a range of premium vehicles combining performance and luxury.",
  },
  {
    name: "BMW",
    logo: Imagebrand1,
    description:
      "BMW is known for sporty driving dynamics and high-quality engineering.",
  },
  {
    name: "Ford",
    logo: Imagebrand2,
    description:
      "Ford provides reliable, practical vehicles with strong dealer support.",
  },
  {
    name: "Mercedes",
    logo: Imagebrand3,
    description:
      "Mercedes focuses on comfort, advanced tech and refined luxury.",
  },
  {
    name: "Peugeot",
    logo: Imagebrand4,
    description:
      "Peugeot offers stylish European designs and efficient city-friendly cars.",
  },
  {
    name: "Volkswagen",
    logo: Imagebrand5,
    description:
      "Volkswagen produces versatile, well-built cars for everyday driving.",
  },
];

export default function BrandsCarousel({ onRentNow }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const filteredCars = selectedBrand
    ? carsCatalog.filter(
        (c) => c.brand.toLowerCase() === selectedBrand.name.toLowerCase(),
      )
    : [];

  const scroll = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = 300;

    if (direction === "left") {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };

  return (
    <section className="brands-carousel-section">
      <div className="brands-container">
        <h2 className="brands-title">Explore Our Premium Brands</h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-button prev-button"
            onClick={() => scroll("left")}
            aria-label="Previous brands"
          >
            ‹
          </button>

          <div className="brands-carousel" ref={carouselRef}>
            {brands.map((brand) => (
              <div
                key={brand.name}
                className={`brand-card ${
                  selectedBrand && selectedBrand.name === brand.name
                    ? "selected"
                    : ""
                }`}
                onClick={() => setSelectedBrand(brand)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setSelectedBrand(brand);
                }}
              >
                <div className="brand-logo">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="brand-image"
                  />
                </div>
                <p className="brand-name">{brand.name}</p>
              </div>
            ))}
          </div>

          <button
            className="carousel-button next-button"
            onClick={() => scroll("right")}
            aria-label="Next brands"
          >
            ›
          </button>
        </div>
      </div>
      {selectedBrand && (
        <div className="brand-info">
          <div className="brand-info-left">
            <div className="brand-logo large">
              <img
                src={selectedBrand.logo}
                alt={selectedBrand.name}
                className="brand-image"
              />
            </div>
            <div>
              <h3 className="brand-info-name">{selectedBrand.name}</h3>
              <p className="brand-info-desc">{selectedBrand.description}</p>
            </div>
          </div>
          <button
            className="brand-info-close"
            onClick={() => setSelectedBrand(null)}
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>
      )}
      {selectedBrand && (
        <div className="brand-cars-grid">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <CarCard key={car.id} car={car} onRentNow={onRentNow} />
            ))
          ) : (
            <p className="no-cars-msg">
              Aucune voiture trouvée pour cette marque.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
