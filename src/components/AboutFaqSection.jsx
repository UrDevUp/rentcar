import { useState } from "react";
import "./aboutFaqSection.css";

const faqItems = [
  {
    question: "Quels documents sont necessaires pour louer une voiture ?",
    answer:
      "Une piece d'identite valide, un permis de conduire valide et un moyen de paiement au nom du conducteur principal.",
  },
  {
    question: "Le prix affiche est-il par jour ?",
    answer:
      "Oui, tous les prix affiches sont en DH par jour. Les remises sont deja appliquees sur le tarif actuel.",
  },
  {
    question: "Puis-je reserver en ligne et payer plus tard ?",
    answer:
      "Oui. Vous pouvez envoyer votre demande via le questionnaire, puis confirmer la reservation avec notre equipe.",
  },
  {
    question: "La livraison du vehicule est-elle disponible ?",
    answer:
      "Oui, selon la ville et la disponibilite. Notre equipe vous confirme les details apres la demande.",
  },
];

export default function AboutFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="about" className="about-faq-section">
      <div className="about-faq-container">
        <div className="about-faq-header">
          <h2>POURQUOI NOUS CHOISIR ?</h2>
        </div>

        <div className="about-faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className={`about-faq-item ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="about-faq-question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="about-faq-arrow">⌄</span>
                </button>

                {isOpen && <p className="about-faq-answer">{item.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
