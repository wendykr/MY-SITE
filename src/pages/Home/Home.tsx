import "./Home.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { commercialProjectsData } from "../../constants/commercialProjects";
import { blogPostsData } from "../../constants/blogPosts";
import { getSectionPath } from "../../constants/sectionRoutes";
import { Seo } from "../../Seo";

export const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.slice(0, 2);

  const featuredProjects = commercialProjectsData
    .flatMap((group) =>
      group.projects.map((project) => ({ ...project, company: group.company })),
    )
    .sort((a, b) => b.id - a.id)
    .slice(0, 2);

  const latestPosts = [...blogPostsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <Seo
        title={t("meta.title")}
        description={t("meta.description")}
        ogTitle={t("meta.ogTitle")}
        ogDescription={t("meta.ogDescription")}
      />
      <Header />

      <section id="highlights" className="highlights">
        <div className="highlights__grid">
          {[1, 2, 3].map((id) => (
            <div className="highlights__item" key={id}>
              <span className="highlights__value">
                {t(`home.highlights.${id}.value`)}
              </span>
              <span className="highlights__label">
                {t(`home.highlights.${id}.label`)}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="featured">
        <h2 className="title">{t("home.featured.title")}</h2>
        <div className="featured__grid">
          {featuredProjects.map((project) => {
            const descriptionItems = t(project.description, {
              returnObjects: true,
            }) as string[];

            return (
              <div className="featured__card" key={project.id}>
                <p className="featured__company">{project.company}</p>
                <h3 className="featured__name">{t(project.name)}</h3>
                <p className="featured__text">{descriptionItems[0]}</p>
                <div className="featured__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="featured__techItem">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <Link
          className="featured__link linkAnchor"
          to={getSectionPath("projects", lang)}
        >
          {t("home.featured.linkAll")}
        </Link>
      </section>

      <div className="bgNeutral">
        <section className="latestPosts">
          <h2 className="title">{t("home.latestPosts.title")}</h2>
          <div className="latestPosts__grid">
            {latestPosts.map((post) => {
              const paragraphs = t(post.text, {
                returnObjects: true,
              }) as string[];
              const formattedDate = new Date(post.date).toLocaleDateString(
                lang === "en" ? "en-US" : "cs-CZ",
                { year: "numeric", month: "long", day: "numeric" },
              );

              return (
                <div className="latestPosts__card" key={post.id}>
                  <p className="latestPosts__date">{formattedDate}</p>
                  <h3 className="latestPosts__title">{t(post.title)}</h3>
                  <p className="latestPosts__excerpt">{paragraphs[0]}</p>
                  {post.link && (
                    <a
                      className="latestPosts__readOriginal"
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("home.latestPosts.readOriginal")}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
          <Link
            className="latestPosts__link linkAnchor"
            to={getSectionPath("posts", lang)}
          >
            {t("home.latestPosts.linkAll")}
          </Link>
        </section>
      </div>

      <section className="cta">
        <h2 className="title">{t("home.cta.title")}</h2>
        <div className="cta__content">
          <p className="cta__text">{t("home.cta.text")}</p>
          <Link className="cta__button" to={getSectionPath("contact", lang)}>
            {t("home.cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
};
