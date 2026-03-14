import "./Skills.scss";
import { Skill } from "../Skill/Skill";
import { useTranslation } from "react-i18next";
import { skillsLanguagesData } from "../../constants/skillsLanguages";
import { skillsToolsData } from "../../constants/skillsTools";

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <section id={t("skills.id")} className="skills">
        <h2 className="title">{t("skills.title")}</h2>
        <p className="description">{t("skills.description")}</p>
        <div className="skills__container">
          <div className="skills__languages">
            {skillsLanguagesData.map((skill) => (
              <Skill key={skill.id} name={skill.name} icon={skill.icon} />
            ))}
          </div>
          <div className="skills__tools">
            {skillsToolsData.map((skill) => (
              <Skill key={skill.id} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
