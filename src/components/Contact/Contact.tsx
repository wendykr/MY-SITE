import "./Contact.scss";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="title">{t("contact.title")}</h2>
      <p className="contact__text">{t("contact.text")}</p>
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
    </>
  );
};
