import "./Recommendations.scss";
import { Hero } from "../../components/Hero/Hero";
import { recommendationsData } from "../../constants/recommendations";
import { Recommendation } from "../../components/Recommendation/Recommendation";
import { useTranslation } from "react-i18next";
import { Seo } from "../../Seo";

export const Recommendations = () => {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title={t("recommendations.seo.title")}
        description={t("recommendations.seo.description")}
      />
      <Hero
        title={t("recommendations.title")}
        subtitle={t("recommendations.description")}
      />

      <section className="recommendations">
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
    </>
  );
};
