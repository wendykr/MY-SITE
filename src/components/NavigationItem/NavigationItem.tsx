import { useEffect } from "react";
import "./NavigationItem.scss";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { useNav } from "../../context/NavContext";
import { useTranslation } from "react-i18next";

interface NavigationItemProsp {
  name: string;
  to: string;
}

export const NavigationItem: React.FC<NavigationItemProsp> = ({ name, to }) => {
  const { setIsOpenMenu } = useNav();
  const { t } = useTranslation();

  const handleClick = () => {
    setIsOpenMenu(false);
    scroller.scrollTo(to, {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 1000,
    });
  };

  useEffect(() => {
    const { hash } = location;

    if (hash === `#${to}`) {
      window.addEventListener("load", () => {
        const targetElement = document.getElementById(to);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "auto", block: "start" });
        }
      });
    }
  }, [location, to]);

  return (
    <li className="navigationItem">
      <Link
        className={`navigationItem__link ${to === "contact" ? "navigationItem__link--last" : "navigationItem__link--other"}`}
        to={`#${to}`}
        onClick={handleClick}
      >
        {t(name)}
      </Link>
    </li>
  );
};
