import { useEffect } from "react";
import "./NavigationItem.scss";
import { Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useNav } from "../../context/NavContext";
import { useTranslation } from "react-i18next";

interface NavigationItemProps {
  name: string;
  to: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ name, to }) => {
  const { setIsOpenMenu } = useNav();
  const { t } = useTranslation();
  const location = useLocation();

  const translatedId = t(to);

  const handleClick = () => {
    setIsOpenMenu(false);
    scroller.scrollTo(translatedId, {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 1000,
    });
  };

  useEffect(() => {
    if (location.hash === `#${translatedId}`) {
      const targetElement = document.getElementById(translatedId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }
    }
  }, [location.hash, translatedId]);

  return (
    <li className="navigationItem">
      <Link
        className={`navigationItem__link ${translatedId === t("contact.id") ? "navigationItem__link--last" : "navigationItem__link--other"}`}
        to={`#${translatedId}`}
        onClick={handleClick}
      >
        {t(name)}
      </Link>
    </li>
  );
};
