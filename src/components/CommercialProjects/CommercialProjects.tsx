import "./CommercialProjects.scss";
import { commercialProjectsData } from "../../constants/commercialProjects";
import { CommercialProject } from "../CommercialProject/CommercialProject";

export const CommercialProjects: React.FC = () => {
  return (
    <div className="commercial-projects">
      {/* <h3 className="commercial-projects__subtitle">
        {t("projects.subtitleCommercial")}
      </h3>
      <p className="commercial-projects__note">
        {t("projects.commercialNote")}
      </p> */}
      <div className="commercial-projects__grid">
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
