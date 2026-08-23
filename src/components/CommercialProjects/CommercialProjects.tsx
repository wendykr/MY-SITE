import "./CommercialProjects.scss";
import { commercialProjectsData } from "../../constants/commercialProjects";
import { CommercialProject } from "../CommercialProject/CommercialProject";

export const CommercialProjects = () => {
  return (
    <div className="commercialProjects">
      {/* <h3 className="commercialProjects__subtitle">
        {t("projects.subtitleCommercial")}
      </h3>
      <p className="commercialProjects__note">
        {t("projects.commercialNote")}
      </p> */}
      <div className="commercialProjects__grid">
        {commercialProjectsData
          .flatMap((group) =>
            group.projects.map((project) => ({
              ...project,
              company: group.company,
            })),
          )
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <CommercialProject
              key={project.id}
              name={project.name}
              description={project.description}
              company={project.company}
              icon={project.icon}
              technologies={project.technologies}
            />
          ))}
      </div>
    </div>
  );
};
