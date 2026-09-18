import { useEffect } from "react";
import "./NavigationList.scss";
import { linkMenuData } from "../../constants/linkMenu";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useNav } from "../../context/NavContext";
import { useTranslation } from "react-i18next";

export const NavigationList = () => {
  const { t } = useTranslation();
  const { isOpenMenu, setIsOpenMenu } = useNav();

  useEffect(() => {
    const handleResize = () => {
      if (isOpenMenu && window.innerWidth > 1024) {
        setIsOpenMenu((prev) => !prev);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpenMenu]);

  const handleClick = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <>
      <div
        id="toggler"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-expanded={isOpenMenu}
        aria-label={t(isOpenMenu ? "nav.closeMenuAriaLabel" : "nav.openMenuAriaLabel")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {isOpenMenu ? (
          <RxCross2 className="navigation__icon" aria-hidden="true" />
        ) : (
          <RxHamburgerMenu className="navigation__icon" aria-hidden="true" />
        )}
      </div>
      <ul id="menu" className={`navigationList ${isOpenMenu ? "display" : ""}`}>
        {linkMenuData.map((link) => (
          <NavigationItem key={link.id} name={link.name} sectionKey={link.sectionKey} />
        ))}
        <li className="navigationItem navigationItem--lang">
          <LanguageSwitcher />
        </li>
      </ul>
    </>
  );
};
