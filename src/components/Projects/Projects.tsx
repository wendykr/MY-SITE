import "./Projects.scss";
import { CommercialProjects } from "../CommercialProjects/CommercialProjects";
import { useTranslation } from "react-i18next";

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id={t("projects.id")} className="projects">
      <h2 className="title">{t("projects.title")}</h2>
      <p className="description">{t("projects.description")}</p>
      <CommercialProjects />
    </section>
  );
};
