import { useState, useEffect } from 'react';
import './Header.scss';
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

export const Header: React.FC = () => {
  const [isDisplay, setIsDisplay] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsDisplay(false);
      } else {
        setIsDisplay(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (to: string) => {
    scroller.scrollTo(to, {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 1000,
    });
  };

  return (
    <div className="header__cover">
      <header className="header">
        <div className="header__info">
          <h1 className="header__title">
            <span className="black">Ahoj 👋, jsem</span> Vendy&nbsp;:)
          </h1>
          <h2 className="header__subtitle">
            Junior frontend developer & coder
          </h2>
          <p className="header__description">
            Zaměřuji se na front-end vývoj webů a aplikací v Reactu s využitím TypeScriptu.{" "}
            <br></br>
            Mám zkušenosti s kódováním grafických návrhů webů do HTML/CSS s
            prvky JavaScriptu.
          </p>
          <ul className="header__list">
            <li>
              <a
                href="https://github.com/wendykr/"
                aria-label="Profil na GitHubu"
              >
                <FaGithub className="header__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vendula-krajickova/"
                aria-label="Profil na LinkedInu"
              >
                <FaLinkedinIn className="header__icon" />
              </a>
            </li>
            <li>
              <a
                href="mailto:vendysacek@seznam.cz"
                aria-label="Kontaktovat Vendulu"
              >
                <FaEnvelope className="header__icon" />
              </a>
            </li>
          </ul>
        </div>
        {isDisplay && (
          <Link
            to="#about"
            onClick={() => handleClick("about")}
            aria-label="Přejít na sekci 'O mně'"
          >
            <FaAngleDoubleDown className="header__icon--down" />
          </Link>
        )}
      </header>
    </div>
  );
}