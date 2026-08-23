import "./Contact.scss";
import { Hero } from "../../components/Hero/Hero";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Seo } from "../../Seo";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title={t("contact.seo.title")}
        description={t("contact.seo.description")}
      />
      <Hero title={t("contact.title")} />

      <section id={t("contact.id")} className="contact">
        <p className="description">{t("contact.text1")}</p>
        <p className="description">{t("contact.text2")}</p>
        <p className="description">{t("contact.text3")}</p>
        <div className="contact__container">
          <a
            href="mailto:vendysacek@seznam.cz"
            aria-label={t("contact.ariaLabelEmail")}
            className="contact__button"
          >
            vendysacek@seznam.cz
          </a>
          <a
            href="https://www.linkedin.com/in/vendula-krajickova/"
            className="contact__button"
            aria-label={t("contact.ariaLabelLinkedIn")}
          >
            <FaLinkedin className="contact__icon" /> LinkedIn
          </a>
        </div>
      </section>
    </>
  );
};
