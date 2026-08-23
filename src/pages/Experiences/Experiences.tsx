import "./Experiences.scss";
import { experiencesData } from "../../constants/experiences";
import { Experience } from "../../components/Experience/Experience";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero/Hero";
import { Seo } from "../../Seo";

export const Experiences = () => {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title={t("experience.seo.title")}
        description={t("experience.seo.description")}
      />
      <Hero title={t("experience.title")} />
      <section id={t("experience.id")} className="experiences">
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
    </>
  );
};
