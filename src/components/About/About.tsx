import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import "./About.scss";
import { useTranslation } from "react-i18next";

export const About: React.FC = () => {
  const { t } = useTranslation();
  const handleClick = (to: string) => {
    scroller.scrollTo(to, {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 1000,
    });
  };

  return (
    <section id={t("about.id")} className="about">
      <h2 className="title">{t("about.title")}</h2>
      <h3 className="about__subtitle">{t("about.subtitle.who")}</h3>
      <div className="about__text">
        <p>
          {t("about.text.p1.pre")}{" "}
          <Link
            className="link-anchor"
            to={`#${t("skills.id")}`}
            onClick={() => handleClick(`${t("skills.id")}`)}
          >
            {t("about.text.p1.link")}
          </Link>{" "}
          {t("about.text.p1.post")}
        </p>
        <p>{t("about.text.p2")}</p>
        <p>{t("about.text.p3")}</p>
        <p>{t("about.text.p4")}</p>
      </div>

      <h3 className="about__subtitle">{t("about.subtitle.what")}</h3>
      <div className="about__text">
        <p>
          {t("about.text2.p1.pre")}{" "}
          <Link
            className="link-anchor"
            to={`#${t("projects.id")}`}
            onClick={() => handleClick(`${t("projects.id")}`)}
          >
            {t("about.text2.p1.link")}
          </Link>{" "}
          {t("about.text2.p1.post")}
        </p>
        <p>{t("about.text2.p2")}</p>
        <p>{t("about.text2.p3")}</p>
      </div>

      <h3 className="about__subtitle">{t("about.subtitle.traits")}</h3>
      <div className="about__text">
        <ul className="about__list">
          <li className="about__list--item">
            <span className="about__list--term">
              {t("about.traits.1.term")}
            </span>{" "}
            {t("about.traits.1.desc")}
          </li>
          <li className="about__list--item">
            <span className="about__list--term">
              {t("about.traits.2.term")}
            </span>{" "}
            {t("about.traits.2.desc")}
          </li>
          <li className="about__list--item">
            <span className="about__list--term">
              {t("about.traits.3.term")}
            </span>{" "}
            {t("about.traits.3.desc")}
          </li>
          <li className="about__list--item">
            <span className="about__list--term">
              {t("about.traits.4.term")}
            </span>{" "}
            {t("about.traits.4.desc")}
          </li>
        </ul>
      </div>
    </section>
  );
};
