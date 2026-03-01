import "./Projects.scss";
import { projectsData } from "../../constants/projects";
import { Project } from "../Project/Project";
import { useTranslation } from "react-i18next";

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id={t("projects.id")} className="projects">
      <h2 className="title">{t("projects.title")}</h2>
      <p className="description">{t("projects.description")}</p>
      {projectsData
        .sort((a, b) => b.id - a.id)
        .map((project) => (
          <Project
            key={project.id}
            name={project.name}
            skills={project.skills}
            description={project.description}
            linkWeb={project.linkWeb}
            linkGH={project.linkGH}
            screen={project.screen}
            order={project.id % 2 === 0}
          />
        ))}
      <p className="projects__footer">
        {t("projects.footer.paragraphStart")}{" "}
        <a className="link-anchor" href="https://github.com/wendykr/">
          {t("projects.footer.link")}
        </a>
        {t("projects.footer.paragraphEnd")}
      </p>
    </section>
  );
};
