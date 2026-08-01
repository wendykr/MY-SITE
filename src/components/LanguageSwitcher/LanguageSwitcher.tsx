import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useNav } from "../../context/NavContext";
import "./LanguageSwitcher.scss";

const LANGUAGES = ["cs", "en"] as const;

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { setIsOpenMenu } = useNav();

  const currentLang = i18n.language.slice(0, 2);

  const handleSwitch = (lang: string) => {
    if (lang === currentLang) return;

    const segments = location.pathname.split("/").filter(Boolean);
    if (segments[0] === "cs" || segments[0] === "en") {
      segments[0] = lang;
    } else {
      segments.unshift(lang);
    }

    i18n.changeLanguage(lang);
    setIsOpenMenu(false);
    navigate(`/${segments.join("/")}${location.hash}`, { replace: true });
  };

  return (
    <div className="languageSwitcher">
      {LANGUAGES.map((lang, index) => (
        <span key={lang} className="languageSwitcher__item">
          <button
            type="button"
            className={`languageSwitcher__button ${
              lang === currentLang ? "languageSwitcher__button--active" : ""
            }`}
            onClick={() => handleSwitch(lang)}
            aria-current={lang === currentLang}
          >
            {lang.toUpperCase()}
          </button>
          {index < LANGUAGES.length - 1 && (
            <span className="languageSwitcher__separator">/</span>
          )}
        </span>
      ))}
    </div>
  );
};
