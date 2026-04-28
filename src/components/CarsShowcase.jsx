"use client";

import CarCard from "./CarCard";
import "./carsShowcase.css";
import { carsCatalog } from "../data/carsCatalog";

export default function CarsShowcase({ onRentNow }) {
  const recentCars = carsCatalog.slice(0, 4);

  const handleOpenQuestionnaire = () => {
    onRentNow?.(recentCars[0]);
  };

  return (
    <section className="cars-showcase-section">
      <div className="showcase-container">
        <div className="showcase-header">
          <h2 className="showcase-title">Découvrez nos voitures récentes</h2>
          <button className="view-more-btn" onClick={handleOpenQuestionnaire}>
            Voir Plus
            <span className="arrow-icon">→</span>
          </button>
        </div>

        <div className="cars-grid">
          {recentCars.map((car, index) => (
            <CarCard key={car.id} car={car} onRentNow={onRentNow} />
          ))}
        </div>
      </div>
    </section>
  );
}
