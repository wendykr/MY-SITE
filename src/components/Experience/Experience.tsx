import "./Experience.scss";
import { useTranslation } from "react-i18next";

interface ExperienceProps {
  company: string;
  position: string;
  period: string;
  description: string;
  current?: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({
  company,
  position,
  period,
  description,
  current,
}) => {
  const { t } = useTranslation();
  const descriptionItems = t(description, { returnObjects: true }) as string[];

  return (
    <div className="experience">
      <div
        className={`experience__dot ${current ? "experience__dot--current" : ""}`}
        aria-hidden="true"
      />
      <h3 className="experience__position">{t(position)}</h3>
      <div className="experience__meta">
        <span className="experience__company">{company}</span>
        <span className="experience__period">{t(period)}</span>
      </div>
      <ul className="experience__description">
        {descriptionItems.map((item, index) => (
          <li key={index} className="experience__description--item">
            <span className="experience__bullet" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
