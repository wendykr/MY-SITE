import { useEffect, useRef, useState } from "react";
import "./Project.scss";
import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next";

interface ProjectProps {
  name: string;
  skills: string;
  description: string;
  linkWeb: string;
  linkGH: string;
  screen: string;
  order: boolean;
}

export const Project: React.FC<ProjectProps> = ({
  name,
  skills,
  description,
  linkWeb,
  linkGH,
  screen,
  order,
}) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showProject = () => {
      if (projectRef.current) {
        const triggerBottom = (window.innerHeight / 5) * 4;
        const boxTop = projectRef.current.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", showProject);

    return () => {
      window.removeEventListener("scroll", showProject);
    };
  }, []);

  return (
    <div ref={projectRef} className={`project ${isVisible ? "visible" : ""}`}>
      <div className={`project__container ${order ? "order" : ""}`}>
        <a className="project__screen--link" href={linkWeb}>
          <img
            className="project__screen"
            src={screen}
            width="100%"
            height="auto"
            alt={`${t("project.imgAlt")} ${t(name)}`}
          />
        </a>
      </div>
      <div className="project__data">
        <p className="project__skills">{skills}</p>
        <h3 className="project__name">{t(name)}</h3>
        <p
          className="project__description"
          dangerouslySetInnerHTML={{ __html: t(description) }}
        />
        <div className="project__butons">
          <Button
            link={linkGH}
            text={t("project.textButtonGitHub")}
            style="primary"
          />
          <Button
            link={linkWeb}
            text={t("project.textButtonLive")}
            style="secondary"
          />
        </div>
      </div>
    </div>
  );
};
