import "./About.scss";
import { useTranslation } from "react-i18next";
import { skillGroups } from "../../constants/skills";
import { Skill } from "../Skill/Skill";

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id={t("about.id")} className="about">
      <h2 className="title">{t("about.title")}</h2>
      <h3 className="about__subtitle">{t("about.subtitle.who")}</h3>
      <div className="about__text">
        <p>{t("about.text.p1")}</p>
        <p>{t("about.text.p2")}</p>
        <p>{t("about.text.p3")}</p>
      </div>

      <h3 className="about__subtitle">{t("about.subtitle.tech")}</h3>
      <div className="about__skills">
        {skillGroups.map((group) => (
          <div className="about__skills--row" key={group.id}>
            {group.items.map((item) => (
              <Skill key={item.name} name={item.name} icon={item.icon} />
            ))}
          </div>
        ))}
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
