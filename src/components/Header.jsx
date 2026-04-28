import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./header.css";

export default function Header({ onHome, onGallery, onAbout, onContact }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (action) => {
    action?.();
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__container">
          <button
            type="button"
            className="header__logo header__logo-button"
            onClick={() => handleNavigate(onHome)}
          >
            RideX
          </button>

          {/* Desktop Menu */}
          <ul className="header__menu">
            <li>
              <button
                type="button"
                className="header__link header__link-button"
                onClick={() => handleNavigate(onAbout)}
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                type="button"
                className="header__link header__link-button"
                onClick={() => handleNavigate(onGallery)}
              >
                GALLERY
              </button>
            </li>
            <li>
              <a href="#blog" className="header__link">
                BLOG
              </a>
            </li>
            <li>
              <button
                type="button"
                className="header__link header__link-button"
                onClick={() => handleNavigate(onContact)}
              >
                CONTACT
              </button>
            </li>
          </ul>

          {/* Desktop Contact Button */}
          <div className="header__icons">
            <a
              href="#"
              className="header__contact-btn"
              aria-label="Contact Us"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate(onContact);
              }}
            >
              CONTACT US
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="header__menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="header__mobile-menu active">
            <li>
              <button
                type="button"
                className="header__mobile-link header__mobile-link-button"
                onClick={() => handleNavigate(onAbout)}
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                type="button"
                className="header__mobile-link header__mobile-link-button"
                onClick={() => handleNavigate(onGallery)}
              >
                GALLERY
              </button>
            </li>
            <li>
              <a href="#blog" className="header__mobile-link">
                BLOG
              </a>
            </li>
            <li>
              <button
                type="button"
                className="header__mobile-link header__mobile-link-button"
                onClick={() => handleNavigate(onContact)}
              >
                CONTACT
              </button>
            </li>
            <li className="header__mobile-contact">
              <button
                type="button"
                className="header__mobile-link header__mobile-link-button"
                onClick={() => handleNavigate(onContact)}
              >
                CONTACT US
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
