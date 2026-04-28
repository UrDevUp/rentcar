import { useMemo, useState } from "react";
import "./questionnairePage.css";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  pickupDate: "",
  returnDate: "",
  pickupCity: "",
  notes: "",
};

export default function QuestionnairePage({ car, onBack }) {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);

  const priceLabel = useMemo(() => {
    if (!car?.price) {
      return "Prix sur demande";
    }

    return `${car.price.toLocaleString("fr-FR")} DH / jour`;
  }, [car]);

  const galleryImages = useMemo(() => {
    if (!car) {
      return [];
    }

    const source =
      Array.isArray(car.gallery) && car.gallery.length > 0
        ? car.gallery
        : [car.image];
    const normalized = [...source];

    while (normalized.length < 4) {
      normalized.push(car.image);
    }

    return normalized.slice(0, 4);
  }, [car]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="questionnaire-page">
      <div className="questionnaire-shell">
        <button
          className="questionnaire-back-btn"
          onClick={onBack}
          type="button"
        >
          ← Retour
        </button>

        <div className="questionnaire-header">
          <h1>Questionnaire de reservation</h1>
          <p>
            Remplissez ce formulaire pour reserver votre voiture rapidement.
          </p>
        </div>

        {car && (
          <div className="questionnaire-car-summary">
            <div className="questionnaire-car-gallery">
              {galleryImages.map((img, index) => (
                <div
                  className="questionnaire-car-media"
                  key={`${car.id}-${index}`}
                >
                  <img
                    src={img}
                    alt={`${car.name} ${index + 1}`}
                    onClick={() => setExpandedImage(img)}
                  />
                </div>
              ))}
            </div>

            <div className="questionnaire-car-content">
              <div>
                <h2>{car.name}</h2>
                <span>{car.type}</span>
              </div>

              <ul className="questionnaire-car-meta">
                <li>Note: {car.rating ?? "-"}</li>
                <li>Avis: {car.reviews ?? 0}</li>
                <li>Reduction: {car.discount ?? 0}%</li>
              </ul>

              <ul className="questionnaire-car-details">
                <li>Carburant: {car.type ?? "-"}</li>
                <li>Boite: {car.gearbox ?? "-"}</li>
                <li>Places: {car.seats ?? "-"}</li>
                <li>Bagages: {car.baggage ?? "-"}</li>
                <li>Ville: {car.city ?? "-"}</li>
                <li>Age minimum: {car.minAge ?? "-"} ans</li>
              </ul>
            </div>

            <div className="questionnaire-car-price">
              <small>Tarif</small>
              <strong>{priceLabel}</strong>
            </div>
          </div>
        )}

        {!car && (
          <div className="questionnaire-car-summary">
            <div className="questionnaire-car-content">
              <h2>Aucune voiture selectionnee</h2>
              <p>Retournez a l'accueil puis cliquez sur Rent Now.</p>
            </div>
          </div>
        )}

        {isSubmitted ? (
          <div className="questionnaire-success">
            <h3>Merci, votre demande a ete envoyee.</h3>
            <p>
              Nous vous contacterons tres bientot pour confirmer la reservation.
            </p>
            <button
              type="button"
              className="questionnaire-primary"
              onClick={onBack}
            >
              Revenir a l'accueil
            </button>
          </div>
        ) : (
          <form className="questionnaire-form" onSubmit={handleSubmit}>
            <label>
              Nom complet
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </label>

            <label>
              Telephone
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="06XXXXXXXX"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="vous@email.com"
                required
              />
            </label>

            <label>
              Date de depart
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Date de retour
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Ville de prise en charge
              <input
                type="text"
                name="pickupCity"
                value={formData.pickupCity}
                onChange={handleChange}
                placeholder="Casablanca, Rabat..."
                required
              />
            </label>

            <label className="questionnaire-full">
              Message (optionnel)
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Details supplementaires"
                rows={4}
              />
            </label>

            <button
              type="submit"
              className="questionnaire-primary questionnaire-full"
            >
              Envoyer la demande
            </button>
          </form>
        )}
      </div>

      {expandedImage && (
        <div
          className="questionnaire-lightbox"
          onClick={() => setExpandedImage(null)}
        >
          <button
            type="button"
            className="questionnaire-lightbox-close"
            onClick={() => setExpandedImage(null)}
            aria-label="Fermer l'image"
          >
            ×
          </button>
          <img
            className="questionnaire-lightbox-image"
            src={expandedImage}
            alt="Apercu voiture"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
