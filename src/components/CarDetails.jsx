import { useState } from "react";
import {
  Gauge,
  Zap,
  FuelIcon,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import "./carDetails.css";

export default function CarDetails({ car }) {
  const [isOpen, setIsOpen] = useState(false);

  const specs = car?.specs ?? {
    doors: "-",
    distance: "-",
    gearBox: "-",
    fuel: "-",
  };

  const details = [
    {
      id: 1,
      icon: Users,
      label: "Doors",
      value: specs.doors,
    },
    {
      id: 2,
      icon: Gauge,
      label: "Distance",
      value: specs.distance,
    },
    {
      id: 3,
      icon: Zap,
      label: "Gear Box",
      value: specs.gearBox,
    },
    {
      id: 4,
      icon: FuelIcon,
      label: "Fuel",
      value: specs.fuel,
    },
  ];

  return (
    <section className={`car-details ${isOpen ? "car-details--open" : ""}`}>
      <div className="car-details__mobile-rail">
        <div className="car-details__mobile-icons">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.id}
                className="car-details__mobile-icon"
                aria-hidden="true"
              >
                <Icon size={30} strokeWidth={1.8} />
              </div>
            );
          })}
        </div>
        <button
          className="car-details__toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Masquer les details" : "Afficher les details"}
        >
          {isOpen ? (
            <ChevronLeft size={38} strokeWidth={2.25} />
          ) : (
            <ChevronRight size={38} strokeWidth={2.25} />
          )}
        </button>
      </div>

      <div className="car-details__container">
        <div className="car-details__card">
          <button
            className="car-details__close"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer les details"
          >
            <X size={18} />
          </button>

          <div className="car-details__grid">
            {details.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.id} className="car-details__item">
                  <div className="car-details__icon">
                    <Icon size={28} />
                  </div>
                  <div className="car-details__text">
                    <p className="car-details__label">{detail.label}</p>
                    <p className="car-details__value">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="car-details__button">Voir Plus</button>
        </div>
      </div>
    </section>
  );
}
