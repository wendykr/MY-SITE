import "./Projects.scss";
import { CommercialProjects } from "../../components/CommercialProjects/CommercialProjects";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero/Hero";
import { Seo } from "../../Seo";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title={t("projects.seo.title")}
        description={t("projects.seo.description")}
      />
      <Hero title={t("projects.title")} subtitle={t("projects.description")} />
      <section className="projects">
        <CommercialProjects />
      </section>
    </>
  );
};
