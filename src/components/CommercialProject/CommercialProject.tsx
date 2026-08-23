import { ElementType } from "react";
import "./CommercialProject.scss";
import { useTranslation } from "react-i18next";

interface CommercialProjectProps {
  name: string;
  description: string;
  company: string;
  icon: ElementType;
  technologies: string[];
}

export const CommercialProject = ({
  name,
  description,
  company,
  icon: Icon,
  technologies,
}: CommercialProjectProps) => {
  const { t } = useTranslation();
  const descriptionItems = t(description, { returnObjects: true }) as string[];

  return (
    <div className="commercialProject">
      <div className="commercialProject__header">
        <Icon className="commercialProject__icon" aria-hidden="true" />
        <div className="commercialProject__heading">
          <h3 className="commercialProject__name">{t(name)}</h3>
          <p className="commercialProject__company">{company}</p>
        </div>
      </div>
      <div className="commercialProject__content">
        <div className="commercialProject__technologies">
          {technologies.map((technology) => (
            <span key={technology} className="commercialProject__techItem">
              {technology}
            </span>
          ))}
        </div>
        <ul className="commercialProject__list">
          {descriptionItems.map((item, itemIndex) => (
            <li key={itemIndex} className="commercialProject__list--item">
              <span className="commercialProject__bullet" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
