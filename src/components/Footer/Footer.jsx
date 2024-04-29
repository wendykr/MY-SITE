import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <h2 className="title">Oslovil vás můj profil? Pojďme se potkat </h2>
      <p className="contact__text">... zjistíme, zdali najdeme ideální souhrnu mezi mými dovednostmi a vašimi potřebami.</p>
      <div className="contact__container">
        <a href="mailto:vendysacek@seznam.cz" aria-label="Kontaktovat Vendulu" className="contact__button">
          vendysacek@seznam.cz
        </a>
        <a href="https://www.linkedin.com/in/vendula-krajickova/" className="contact__button" aria-label="Profil na LinkedInu">
          <FaLinkedin className="contact__icon" alt="Ikona LinkedInu" /> LinkedIn
        </a>
      </div>
      <div>
      </div>
      <hr className="footer__line" />
      <div className="footer__content">
        <p className="footer__text">© 2024 <NavLink target="_blank" to="https://github.com/wendykr/" className="footer__link">Vendula Krajíčková</NavLink></p>
      </div>
  </footer>
  )
}