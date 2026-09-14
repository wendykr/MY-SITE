import "./NotFound.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getHomePath } from "../../constants/sectionRoutes";
import { Seo } from "../../Seo";

export const NotFound = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.slice(0, 2);
  const homePath = getHomePath(lang);

  return (
    <>
      <Seo
        title={t("notFound.seo.title")}
        description={t("notFound.seo.description")}
        noIndex
      />
      <section className="notFound">
        <div className="notFound__inner">
          <p className="notFound__code">{t("notFound.code")}</p>
          <h1 className="title">{t("notFound.title")}</h1>
          <p className="description">{t("notFound.text")}</p>
          <Link
            className="notFound__button"
            to={homePath}
            aria-label={t("notFound.ariaLabelButton")}
          >
            {t("notFound.button")}
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
