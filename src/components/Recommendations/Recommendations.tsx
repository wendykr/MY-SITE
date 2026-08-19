import "./Recommendations.scss";
import { recommendationsData } from "../../constants/recommendations";
import { Recommendation } from "../Recommendation/Recommendation";
import { useTranslation } from "react-i18next";

export const Recommendations: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <section id={t("recommendations.id")} className="recommendations">
        <h2 className="title">{t("recommendations.title")}</h2>
        <p className="description">{t("recommendations.description")}</p>
        <div className="recommendations__container">
          {recommendationsData
            .slice()
            .reverse()
            .map((recommendation) => (
              <Recommendation
                key={recommendation.id}
                name={recommendation.name}
                role={recommendation.role}
                text={recommendation.text}
                photo={recommendation.photo}
              />
            ))}
        </div>
      </section>
    </div>
  );
};
