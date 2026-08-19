import "./Recommendation.scss";
import { FaQuoteLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface RecommendationProps {
  name: string;
  role: string;
  text: string;
  photo?: string;
}

export const Recommendation: React.FC<RecommendationProps> = ({
  name,
  role,
  text,
  photo,
}) => {
  const { t } = useTranslation();
  const translatedName = t(name);
  const initials = translatedName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="recommendation">
      <FaQuoteLeft className="recommendation__icon" />
      <p className="recommendation__text">{t(text)}</p>
      <div className="recommendation__profile">
        {photo ? (
          <img
            className="recommendation__photo"
            src={photo}
            alt={translatedName}
            width="56"
            height="56"
          />
        ) : (
          <div className="recommendation__avatar">{initials}</div>
        )}
        <div className="recommendation__info">
          <p className="recommendation__name">{translatedName}</p>
          <p className="recommendation__role">{t(role)}</p>
        </div>
      </div>
    </div>
  );
};
