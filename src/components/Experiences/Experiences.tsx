import "./Experiences.scss";
import { experiencesData } from "../../constants/experiences";
import { Experience } from "../Experience/Experience";
import { useTranslation } from "react-i18next";

export const Experiences = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <section id={t("experience.id")} className="experiences">
        <h2 className="title">{t("experience.title")}</h2>
        <div className="experiences__timeline">
          {[...experiencesData].reverse().map((experience) => (
            <Experience
              key={experience.id}
              company={experience.company}
              position={experience.position}
              period={experience.period}
              description={experience.description}
              current={experience.current}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
