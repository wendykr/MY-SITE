import './Contact.scss';
import { FaLinkedin } from "react-icons/fa";

export const Contact: React.FC = () => {
  return (
    <>
      <h2 className="title">
        Aktuálně nejsem na lovu, ale odvážní mohou zaklepat.
      </h2>
      <p className="contact__text">
        ... zapojení do krátkodobého projektu nebo nové propojení z oboru?
        Sem s tím!
      </p>
      <div className="contact__container">
        <a
          href="mailto:vendysacek@seznam.cz"
          aria-label="Kontaktovat Vendulu"
          className="contact__button"
        >
          vendysacek@seznam.cz
        </a>
        <a
          href="https://www.linkedin.com/in/vendula-krajickova/"
          className="contact__button"
          aria-label="Profil na LinkedInu"
        >
          <FaLinkedin className="contact__icon" /> LinkedIn
        </a>
      </div>
    </>
  );
}
