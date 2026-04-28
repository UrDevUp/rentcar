import { useMemo, useState } from "react";
import { Filter, X } from "lucide-react";
import CarCard from "../components/CarCard";
import "./galleryPage.css";

export default function GalleryPage({ cars, onRentNow }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeFuel, setActiveFuel] = useState("Tous");
  const [activeBrand, setActiveBrand] = useState("Tous");
  const [activePrice, setActivePrice] = useState("Tous");
  const selectedFiltersCount = [activeFuel, activeBrand, activePrice].filter(
    (value) => value !== "Tous",
  ).length;

  const fuelFilters = useMemo(() => {
    const uniqueTypes = [...new Set(cars.map((car) => car.type))];
    return ["Tous", ...uniqueTypes];
  }, [cars]);

  const brandFilters = useMemo(() => {
    const uniqueBrands = [
      ...new Set(cars.map((car) => car.brand ?? car.name.split(" ")[0])),
    ];
    return ["Tous", ...uniqueBrands];
  }, [cars]);

  const priceFilters = [
    { label: "Tous", value: "Tous" },
    { label: "Moins de 400 DH/jour", value: "under-400" },
    { label: "400 - 700 DH/jour", value: "400-700" },
    { label: "+700 DH/jour", value: "over-700" },
  ];

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesFuel = activeFuel === "Tous" || car.type === activeFuel;
      const matchesBrand =
        activeBrand === "Tous" ||
        (car.brand ?? car.name.split(" ")[0]) === activeBrand;

      const matchesPrice = (() => {
        if (activePrice === "Tous") return true;
        if (activePrice === "under-400") return car.price < 400;
        if (activePrice === "400-700")
          return car.price >= 400 && car.price <= 700;
        if (activePrice === "over-700") return car.price > 700;
        return true;
      })();

      return matchesFuel && matchesBrand && matchesPrice;
    });
  }, [activeFuel, activeBrand, activePrice, cars]);

  const resetFilters = () => {
    setActiveFuel("Tous");
    setActiveBrand("Tous");
    setActivePrice("Tous");
  };

  return (
    <section className="gallery-page">
      <div className="gallery-shell">
        <div className="gallery-header">
          <h1>Gallery des voitures</h1>
          <p>
            Filtrez les voitures par carburant, marque et prix pour trouver le
            bon modèle.
          </p>
        </div>

        <div className="gallery-menu-toggle-row">
          <button
            type="button"
            className="gallery-menu-open-btn"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={
              isMenuOpen ? "Fermer le filtrage" : "Afficher le filtrage"
            }
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={2.5} />
            ) : (
              <Filter size={20} strokeWidth={2.5} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="gallery-menu">
            <div className="gallery-menu-top">
              <div>
                <p className="gallery-menu-kicker">Menu de galerie</p>
                <h2>Filtres dynamiques</h2>
              </div>

              <div className="gallery-menu-stats">
                <span>
                  {filteredCars.length} / {cars.length} voitures
                </span>
                <button
                  type="button"
                  className="gallery-menu-reset"
                  onClick={resetFilters}
                  disabled={selectedFiltersCount === 0}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="gallery-menu-close"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fermer
                </button>
              </div>
            </div>

            <div className="gallery-filter-group">
              <h2>Carburant</h2>
              <div className="gallery-filters">
                {fuelFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`gallery-filter-btn ${activeFuel === filter ? "active" : ""}`}
                    onClick={() => setActiveFuel(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="gallery-filter-group">
              <h2>Marque</h2>
              <div className="gallery-filters">
                {brandFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`gallery-filter-btn ${activeBrand === filter ? "active" : ""}`}
                    onClick={() => setActiveBrand(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="gallery-filter-group">
              <h2>Prix</h2>
              <div className="gallery-filters">
                {priceFilters.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    className={`gallery-filter-btn ${activePrice === filter.value ? "active" : ""}`}
                    onClick={() => setActivePrice(filter.value)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="gallery-grid">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} onRentNow={onRentNow} />
          ))}
        </div>
      </div>
    </section>
  );
}
