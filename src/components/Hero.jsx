import { useEffect } from "react";
import CarDetails from "./CarDetails";
import "./Hero.css";

export default function Hero({ cars, activeSlide, onSlideChange, activeCar }) {
  const handleDotClick = (index) => {
    onSlideChange(index);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      onSlideChange((prevSlide) => (prevSlide + 1) % cars.length);
    }, 4000);

    return () => {
      clearInterval(autoplay);
    };
  }, [cars.length, onSlideChange]);

  return (
    <section className="hero">
      <div className="hero__slider">
        <div className="hero__slide">
          <div className="hero__background">
            <img
              src={cars[activeSlide].image}
              alt={cars[activeSlide].name}
              className="hero__image"
              loading="eager"
              fetchPriority="high"
            />
            <div className="hero__overlay" />
          </div>

          <div className="hero__content">
            <div className="hero__text-wrapper">
              <p className="hero__model-name">{cars[activeSlide].name}</p>
              <h1 className="hero__title">
                Rent Your
                <br />
                Favourite Car
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="hero__indicators">
        {cars.map((_, index) => (
          <button
            key={index}
            className={`hero__dot ${index === activeSlide ? "hero__dot--active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <CarDetails car={activeCar} />
    </section>
  );
}
