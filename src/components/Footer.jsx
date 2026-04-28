import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-col">
            <h4>À propos</h4>
            <p>
              Ridex est votre partenaire de confiance pour la location de
              voitures au Maroc. Flotte récente, service client réactif et
              livraison disponible.
            </p>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>Téléphone: +212 6 00 00 00 00</li>
              <li>Email: contact@ridex.ma</li>
              <li>Adresse: Hay Riad, Rabat</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Liens utiles</h4>
            <ul>
              <li>
                <a href="#about">Pourquoi nous choisir</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ridex. Tous droits réservés.</span>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              FB
            </a>
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="Twitter">
              TW
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
