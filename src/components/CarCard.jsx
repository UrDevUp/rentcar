import { useState } from "react";
import "./carCard.css";

export default function CarCard({ car, onRentNow }) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const isImageSource =
    typeof car.image === "string" &&
    /\.(jpg|jpeg|png|webp|gif|avif|svg)(\?.*)?$/i.test(car.image);

  const formatPrice = (price) => {
    return price.toLocaleString("fr-FR");
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="star full">
            ★
          </span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <span key={`empty-${i}`} className="star empty">
            ★
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="car-card">
      <div className="car-card-image-container">
        {isImageSource ? (
          <img
            src={car.image}
            alt={car.name}
            className="car-image car-image-photo"
            loading="lazy"
          />
        ) : (
          <div className="car-image">{car.image}</div>
        )}
        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="Add to favorites"
        >
          ♡
        </button>
        {car.discount > 0 && (
          <div className="discount-badge">{car.discount}% off</div>
        )}
      </div>

      <div className="car-card-content">
        <div className="car-header">
          <h3 className="car-name">{car.name}</h3>
          <span className="car-type">{car.type}</span>
        </div>

        <div className="car-price-section">
          <div className="price-wrapper">
            <span className="original-price">
              {formatPrice(car.originalPrice)} DH/jour
            </span>
            <span className="current-price">
              {formatPrice(car.price)} DH/jour
            </span>
          </div>
        </div>

        <div className="car-rating">
          <div className="stars-container">{renderStars(car.rating)}</div>
          <span className="rating-value">{car.rating}</span>
        </div>

        <button className="rent-btn" onClick={() => onRentNow?.(car)}>
          Rent Now
        </button>
      </div>
    </div>
  );
}
