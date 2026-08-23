import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navigation.scss';
import { NavigationList } from '../NavigationList/NavigationList';
import { getHomePath } from '../../constants/sectionRoutes';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language.slice(0, 2);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navigation__container ${isScrolled ? 'navigation__container--scrolled' : ''}`}>
      <nav className="navigation">
        <Link
          className="navigation__brand"
          to={getHomePath(lang)}
          aria-label={t('nav.homeAriaLabel')}
        >
          <img
            className="navigation__logo navigation__logo--dark"
            src="/logo-blue.svg"
            alt="VK logo"
            width="48"
            height="34"
          />
          <img
            className="navigation__logo navigation__logo--light"
            src="/logo-white.svg"
            alt="VK logo"
            width="48"
            height="34"
          />
        </Link>
        <NavigationList />
      </nav>
    </div>
  )
}
