import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "./Header.scss";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isDisplay, setIsDisplay] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsDisplay(false);
      } else {
        setIsDisplay(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
            <span className="black">{t("hero.title")}</span> {t("hero.name")}
          </h1>
          <p className="header__subtitle">{t("hero.subtitle")}</p>
          <p className="header__description">
            {t("hero.descriptionRowFirst")} <br />
            {t("hero.descriptionRowSecond")}
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
            to={`#${t("about.id")}`}
            onClick={() => handleClick("about")}
            aria-label="Přejít na sekci 'O mně'"
          >
            <FaAngleDoubleDown className="header__icon--down" />
          </Link>
        )}
      </header>
    </div>
  );
};
