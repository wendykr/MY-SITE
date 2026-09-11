import { useEffect } from "react";
import "./Video.scss";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { getSectionPath } from "../../constants/sectionRoutes";
import { Seo } from "../../Seo";

export const Video = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.slice(0, 2);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Seo
        title={t("video.seo.title")}
        description={t("video.seo.description")}
      />
      <div className="videoPage">
        <Link className="videoPage__cta" to={getSectionPath("about", lang)}>
          {t("nav.1.name")}
        </Link>
        <div className="videoPage__inner">
          <div className="videoPage__content">
            <h1 className="videoPage__title">{t("about.subtitle.video")}</h1>
            <VideoPlayer
              src="/media/video.mp4"
              title={t("about.subtitle.video")}
              autoFocus
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
