import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "./Header.scss";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

const HIGHLIGHTS_SECTION_ID = "highlights";

export const Header = () => {
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

  const handleScrollToHighlights = () => {
    const nav = document.querySelector(".navigation__container") as HTMLElement;
    const navOffset = nav ? -nav.offsetHeight : 0;
    scroller.scrollTo(HIGHLIGHTS_SECTION_ID, {
      spy: true,
      smooth: true,
      offset: navOffset,
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
                aria-label={t("hero.ariaLabelButtonGH")}
              >
                <FaGithub className="header__icon" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vendula-krajickova/"
                aria-label={t("hero.ariaLabelButtonLI")}
              >
                <FaLinkedinIn className="header__icon" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="mailto:vendysacek@seznam.cz"
                aria-label={t("hero.ariaLabelButtonMail")}
              >
                <FaEnvelope className="header__icon" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
        {isDisplay && (
          <Link
            to={`#${HIGHLIGHTS_SECTION_ID}`}
            onClick={handleScrollToHighlights}
            aria-label={t("hero.ariaLabelButtonScrollDown")}
          >
            <FaAngleDoubleDown className="header__icon--down" aria-hidden="true" />
          </Link>
        )}
      </header>
    </div>
  );
};
