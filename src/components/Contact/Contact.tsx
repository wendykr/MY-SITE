import './Contact.scss';
import { FaLinkedin } from "react-icons/fa";

export const Contact: React.FC = () => {
  return (
    <>
      <h2 className="title">Oslovil vás můj profil? Pojďme se setkat v Praze!</h2>
      <p className="contact__text">... zjistíme, zdali najdeme ideální souhru mezi mými dovednostmi a vašimi potřebami.</p>
      <div className="contact__container">
        <a href="mailto:vendysacek@seznam.cz" aria-label="Kontaktovat Vendulu" className="contact__button">
          vendysacek@seznam.cz
        </a>
        <a href="https://www.linkedin.com/in/vendula-krajickova/" className="contact__button" aria-label="Profil na LinkedInu">
          <FaLinkedin className="contact__icon" /> LinkedIn
        </a>
      </div>
    </>
  )
}
