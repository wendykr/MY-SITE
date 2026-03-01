import "./Footer.scss";
import { Link, NavLink } from "react-router-dom";
import { linkMenuData } from "../../constants/linkMenu";
import { scroller } from "react-scroll";
import { Contact } from "../Contact/Contact";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const handleClick = (to: string) => {
    scroller.scrollTo(t(to), {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 1000,
    });
  };

  return (
    <footer id={t("contact.id")} className="footer">
      <Contact />
      <hr className="footer__line" />
      <div className="footer__content">
        <p className="footer__navigation">
          {linkMenuData.map((link) => (
            <Link
              key={link.id}
              className="footer__navigation--link"
              to={`#${t(link.url)}`}
              onClick={() => handleClick(link.url)}
            >
              {t(link.name)}
            </Link>
          ))}
        </p>
        <p className="footer__text">
          © 2024{" "}
          <NavLink
            target="_blank"
            to="https://github.com/wendykr/"
            className="footer__link"
          >
            {t("footer.author")}
          </NavLink>
        </p>
      </div>
    </footer>
  );
};
