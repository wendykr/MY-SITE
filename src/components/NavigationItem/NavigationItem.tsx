import "./NavigationItem.scss";
import { Link, useLocation } from "react-router-dom";
import { useNav } from "../../context/NavContext";
import { useTranslation } from "react-i18next";
import { getSectionPath, SectionKey } from "../../constants/sectionRoutes";

interface NavigationItemProps {
  name: string;
  sectionKey: SectionKey;
}

export const NavigationItem = ({ name, sectionKey }: NavigationItemProps) => {
  const { setIsOpenMenu } = useNav();
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const lang = i18n.language.slice(0, 2);
  const path = getSectionPath(sectionKey, lang);
  const isActive = location.pathname === path;
  const isLast = sectionKey === "contact";

  const handleClick = () => {
    setIsOpenMenu(false);
  };

  return (
    <li className={`navigationItem ${isLast ? "navigationItem--last" : ""}`}>
      <Link
        className={`navigationItem__link ${isLast ? "navigationItem__link--last" : "navigationItem__link--other"} ${isActive ? "navigationItem__link--active" : ""}`}
        to={path}
        onClick={handleClick}
      >
        {t(name)}
      </Link>
    </li>
  );
};
