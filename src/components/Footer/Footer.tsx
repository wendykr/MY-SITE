import "./Footer.scss";
import { Link } from "react-router-dom";
import { linkMenuData } from "../../constants/linkMenu";
import { getSectionPath } from "../../constants/sectionRoutes";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const lang = i18n.language.slice(0, 2);

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__navigation">
          {linkMenuData.map((link) => (
            <Link
              key={link.id}
              className="footer__navigation--link"
              to={getSectionPath(link.sectionKey, lang)}
            >
              {t(link.name)}
            </Link>
          ))}
        </p>
        <p className="footer__text">
          © {currentYear}{" "}
          <a
            target="_blank"
            href="https://github.com/wendykr/"
            className="footer__link"
          >
            {t("footer.author")}
          </a>
        </p>
      </div>
    </footer>
  );
};
