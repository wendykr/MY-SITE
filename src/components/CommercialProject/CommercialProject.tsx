import { useEffect, useRef, useState } from "react";
import "./CommercialProject.scss";
import { useTranslation } from "react-i18next";

interface CommercialProjectProps {
  name: string;
  description: string;
  company: string;
  icon: React.ElementType;
  technologies: string[];
}

export const CommercialProject: React.FC<CommercialProjectProps> = ({
  name,
  description,
  company,
  icon: Icon,
  technologies,
}) => {
  const { t } = useTranslation();
  const descriptionItems = t(description, { returnObjects: true }) as string[];
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
    <div
      ref={projectRef}
      className={`commercial-project ${isVisible ? "visible" : ""}`}
    >
      <div className="commercial-project__header">
        <Icon className="commercial-project__icon" aria-hidden="true" />
        <div className="commercial-project__heading">
          <h3 className="commercial-project__name">{t(name)}</h3>
          <p className="commercial-project__company">{company}</p>
        </div>
      </div>
      <div className="commercial-project__content">
        <div className="commercial-project__technologies">
          {technologies.map((technology) => (
            <span key={technology} className="commercial-project__tech-item">
              {technology}
            </span>
          ))}
        </div>
        <ul className="commercial-project__list">
          {descriptionItems.map((item, itemIndex) => (
            <li key={itemIndex} className="commercial-project__list--item">
              <span className="commercial-project__bullet" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
