import "./contactSection.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-layout">
          <div className="contact-main">
            <p className="contact-kicker">Contact Us</p>
            <h2>Parlons de votre prochaine reservation</h2>
            <p className="contact-intro">
              Notre equipe vous accompagne pour choisir la bonne voiture,
              confirmer les dates et preparer la livraison selon votre ville.
            </p>

            <div className="contact-actions">
              <a className="contact-primary-btn" href="tel:+212612345678">
                Appeler maintenant
              </a>
              <a
                className="contact-secondary-btn"
                href="mailto:contact@ridex.ma"
              >
                Envoyer un email
              </a>
            </div>

            <div className="contact-hours">
              <span>Horaires: 8h00 - 21h00</span>
              <span>Disponible 7j/7</span>
            </div>
          </div>

          <div className="contact-grid">
            <article className="contact-card">
              <h3>Telephone</h3>
              <p>+212 6 00 00 00 00</p>
              <span>Support direct et confirmation rapide.</span>
            </article>

            <article className="contact-card">
              <h3>Email</h3>
              <p>contact@ridex.ma</p>
              <span>Reponse en moins de 24h.</span>
            </article>

            <article className="contact-card">
              <h3>Adresse</h3>
              <p>Hay Riad, Rabat, Maroc</p>
              <span>Retrait et livraison selon disponibilite.</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
