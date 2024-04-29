import { useState, useEffect } from 'react';
import './Header.scss';
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

export const Header = () => {
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

  const handleClick = (to) => {
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
          <h1 className="header__title">Vendula Krajíčková</h1>
          <h2 className="header__subtitle">Junior frontend developer & coder</h2>
          <p className="header__description">Frontend React vývojářka webů a webových aplikací, HTML/CSS kodérka grafických návrhů webů.</p>
          <ul className="header__list">
          <li>
              <a href="https://github.com/wendykr/" aria-label="Profil na GitHubu">
                <FaGithub className="header__icon" alt="Ikona GitHubu" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vendula-krajickova/" aria-label="Profil na LinkedInu">
                <FaLinkedinIn className="header__icon" alt="Ikona LinkedInu" />
              </a>
            </li>
            <li>
              <a href="mailto:vendysacek@seznam.cz" aria-label="Kontaktovat Vendulu">
                <FaEnvelope className="header__icon" alt="Ikona e-mailu" />
              </a>
            </li>
          </ul>
        </div>
        {
          isDisplay && 
          (
            <Link
              to="#about"
              onClick={() => handleClick("about")}
              aria-label="Přejít na sekci 'O mě'"
            ><FaAngleDoubleDown className="header__icon--down" alt="Ikona scroll down" />
            </Link>
          )
        }

      </header>
    </div>
  )
}